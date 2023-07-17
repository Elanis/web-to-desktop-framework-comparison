import { exec, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { readdir, stat } from 'fs/promises';
import pidusage from 'pidusage';
import pidtree from 'pidtree';
import os from 'os';
import systeminformation from 'systeminformation';

import {
	ITERATIONS_PER_PROCESS,
	DEFAULT_TIMEOUT,
	DEBUG_STDOUT,
	DEBUG_STDERR,
	DEBUG_PIDUSAGE,
	processes,
} from './config.js';

let customLog = console.log;

/**
 * Methods
 */
async function dirSize(directory) {
	if(!fs.existsSync(directory)) {
		return null;
	}

	if(!fs.lstatSync(directory).isDirectory()) {
		const fileStats = await stat(directory);
		return fileStats.size;
	}

	const files = await readdir(directory);
	const stats = files.map(async file => {
		const currentItem = path.join(directory, file);

		if(fs.lstatSync(currentItem).isDirectory()) {
			return await dirSize(currentItem);
		} else {
			const fileStats = await stat(currentItem);
			return fileStats.size;
		}
	});

	return (await Promise.all(stats)).reduce((accumulator, size) => accumulator + size, 0);
}

async function execBuildProcess(processPath, processExe) {
	return new Promise((resolve, reject) => {
		const startTime = performance.now();

		// Spawn process
		const childProcess = spawn(processExe, {
			cwd: processPath,
			shell: true,
			detached: true,
		});

		childProcess.stdout.on('data', (data) => {
			if(DEBUG_STDOUT) {
				customLog(`stdout: ${data}`);
			}
		});

		childProcess.stderr.on('data', (data) => {
			if(DEBUG_STDERR) {
				console.error(`stderr: ${data}`);
			}
		});

		childProcess.on('close', (code) => {
			if(DEBUG_STDOUT || DEBUG_STDERR) {
				customLog(`child process exited with code ${code}`);
			}

			resolve({
				time: performance.now() - startTime
			});
		});
	});
}

export function killAll(pid, signal='SIGTERM'){
	if(process.platform == "win32"){
		exec(`taskkill /PID ${pid} /T /F`, (error, stdout, stderr)=>{
			console.log("taskkill stdout: " + stdout)
			console.log("taskkill stderr: " + stderr)
			if(error){
				console.log("error: " + error.message)
			}
		})
	}

	// see https://nodejs.org/api/child_process.html#child_process_options_detached
	// If pid is less than -1, then sig is sent to every process in the process group whose ID is -pid.
	try {
		try {
			process.kill(-pid, signal);
		} catch(e) {
			console.error(e);
			process.kill(pid, signal);
		}
	} catch(e) {
		console.error(e);
	}
}

async function sleep(seconds) {
	return (await new Promise((resolve, _reject) => {
		setTimeout(resolve, seconds * 1000);
	}));
}

async function getMemoryUsageHistoryOfProcess(processPath, processExe, timeout=DEFAULT_TIMEOUT) {
	return new Promise(async(resolve, reject) => {
		let memUsageHistory = [];
		let sysMemUsageHistory = [];
		let startTime = '?';
		let done = false;
		let time = 0;

		await sleep(1);
		try {
			if (global.gc) { global.gc(); }
			else { console.error('global.gc does\'t exists !'); }
		} catch (e) {
			console.log('Error while trying to garbage collect process !');
			console.log(e);
		}
		await sleep(3);
		
		const originalFreeMemory = os.freemem();
		console.log('Total memory:', os.totalmem())
		console.log('Free memory:', originalFreeMemory);

		// Spawn process
		const startTimestamp = performance.now();
		const childProcess = spawn(processExe, {
			cwd: processPath,
			shell: true,
			detached: os.platform() !== 'win32',
		});

		childProcess.stdout.on('data', (data) => {
			if(DEBUG_STDOUT) {
				customLog(`stdout: ${data}`);
			}

			if(data instanceof Buffer) {
				data = data.toString('utf8');
			}

			const lines = data.split('\n');
			const starTimeLine = lines.find((elt) => elt.includes('App started and loaded !'));
			if(starTimeLine) {
				startTime = performance.now() - startTimestamp;
				if(time < 0) { // Unlock cargo/rust
					time = 0;
					memUsageHistory = [];
					sysMemUsageHistory = [];
				}
			}
		});

		let resetTimeoutId = -1;
		childProcess.stderr.on('data', (data) => {
			if(DEBUG_STDERR) {
				console.error(`[ERROR] stderr: ${data}`);
			}

			if(data instanceof Buffer) {
				data = data.toString('utf8');
			}

			// Remove ANSI codes to match string only
			const cleanData = data.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');

			// Cargo/Rust/Wails compatibility
			let trimmedCleanData = cleanData.trim();
			if(
				trimmedCleanData.startsWith('Compiling ') ||
				trimmedCleanData.startsWith('Fetch ') ||
				trimmedCleanData.startsWith('Building ') ||
				trimmedCleanData.startsWith('Blocking ') ||
				trimmedCleanData.startsWith('Updating crates.io index') ||
				trimmedCleanData.startsWith('Executing: go mod tidy') ||
				trimmedCleanData.startsWith('Wails CLI') ||
				trimmedCleanData.includes('Installing frontend dependencies:') ||
				trimmedCleanData.includes('Compiling frontend:') ||
				trimmedCleanData.includes('Building application for development...') ||
				trimmedCleanData.includes('Compiling application: ')
			) {
				console.log(`[WARNING] Cargo/Rust/Wails/Go action detected. Delaying timer ...`);
				time = -1;

				for(let i = 0; i <= resetTimeoutId; i++) { clearTimeout(i); }
				resetTimeoutId = setTimeout(() => {
					if(time < 0) { // Unlock cargo/rust
						time = 0;
						memUsageHistory = [];
						sysMemUsageHistory = [];
					}
				}, 120*1000); // Unlock if going for more than 2 minutes
			}

			// If started event if logged to stderr
			const lines = cleanData.split('\n');
			const starTimeLine = lines.find((elt) => elt.includes('App started and loaded !'));
			if(starTimeLine) {
				startTime = performance.now() - startTimestamp;
				if(time < 0) { // Unlock cargo/rust/wails
					time = 0;
					memUsageHistory = [];
					sysMemUsageHistory = [];
				}
			}
		});

		childProcess.on('close', (code) => {
			if(DEBUG_STDOUT || DEBUG_STDERR) {
				customLog(`child process exited with code ${code}`);
			}

			done = true;
		});

		// Save stats
		const pushStats = async() => {
			try {
				let pids = [childProcess.pid];
				try {
					pids = [childProcess.pid, ...(await pidtree(childProcess.pid))];
				} catch(e) {
					console.error(e);
					try {
						pids = [childProcess.pid, ...(await pidtree(-childProcess.pid))];
					} catch(e) {
						console.error(e);
					}
				}

				const stats = pidusage(pids);

				if(DEBUG_PIDUSAGE) {
					customLog(processExe, stats);
				}

				if(Array.isArray(stats)) {
					const memoryStats = Object.values(stats).filter((elt) => elt !== null && typeof elt !== 'undefined' && elt.memory).map((elt) => elt.memory);
					if(Array.isArray(memory)) {
						const total = memoryStats.reduce((a, b) => a + b, 0);
						if(total > 0) {
							memUsageHistory.push(total);
						}
					}
				}

				const freemem = os.freemem();
				const delta = originalFreeMemory - freemem;
				sysMemUsageHistory.push(delta);
				
				console.log('Total memory: ', os.totalmem())
				console.log('Free memory: ', freemem);
				console.log('Delta from start: ', delta);
			} catch(e) {
				console.error(e);
			}
		};

		pushStats();
		const interval = setInterval(() => {
			if(time < 0) {
				return;
			}

			if(time++ === timeout || childProcess.exitCode !== null || done) {
				resolve({
					memoryUsage: memUsageHistory,
					systemMeasuredMemory: sysMemUsageHistory,
					startTime
				});
				clearInterval(interval);

				if(childProcess.exitCode === null && !done) {
					killAll(childProcess.pid);
				} else {
					try {
						killAll(childProcess.pid);
					} catch {}
				}
			}

			pushStats();
		}, 1000);
	});
}

function processMemoryUsage({ memoryUsage, systemMeasuredMemory }) {
	let systemMeasuredMemoryCopy = [...systemMeasuredMemory];
	systemMeasuredMemoryCopy.sort((a, b) => a - b);

	let memoryUsageCopy = [...memoryUsage];
	memoryUsageCopy.sort((a, b) => a - b);

	return {
		min: Math.min(...memoryUsage),
		sysMin: Math.min(...systemMeasuredMemory),
		max: Math.max(...memoryUsage),
		sysMax: Math.max(...systemMeasuredMemory),
		med: memoryUsageCopy[Math.floor(memoryUsageCopy.length / 2)],
		sysMed: systemMeasuredMemoryCopy[Math.floor(systemMeasuredMemoryCopy.length / 2)],
		avg: memoryUsage.reduce((a, b) => a + b, 0) / memoryUsage.length,
		sysAvg: systemMeasuredMemory.reduce((a, b) => a + b, 0) / systemMeasuredMemory.length,
		history: memoryUsage,
		systemMeasuredMemoryHistory: systemMeasuredMemory
	};
}

async function getSystemData() {
	const cpu = await systeminformation.cpu();
	const osData = await systeminformation.osInfo();

	return {
		cpu: cpu.manufacturer + ' ' + cpu.brand + ' ' + cpu.physicalCores + 'x' + cpu.speedMax + 'Ghz',
		os: osData.distro + ' ' + osData.release
	};
}

function getPackageJsonVersions(appPath, packageJsonVersionsNeeded) {
	if(!packageJsonVersionsNeeded) {
		return {};
	}

	const packageJsonObj = JSON.parse(fs.readFileSync(appPath + '/package.json', 'utf-8'));
	const versions = {};
	for(const packageName of packageJsonVersionsNeeded) {
		if(packageJsonObj.dependencies && packageJsonObj.dependencies[packageName]) {
			versions[packageName] = packageJsonObj.dependencies[packageName];
		} else if(packageJsonObj.devDependencies && packageJsonObj.devDependencies[packageName]) {
			versions[packageName] = packageJsonObj.devDependencies[packageName];
		}
	}

	return versions;
}

function getCurrentPlatformArch() {
	return os.platform + '-' + os.arch();
}

async function writeDataToJsonFile(benchmarkData) {
	console.log('Writing to benchmark.json ...');

	const data = JSON.parse(fs.readFileSync('benchmarks.json'));

	data[getCurrentPlatformArch()] = {
		systemInformations: await getSystemData(),
		benchmarkData
	};

	fs.writeFileSync('benchmarks.json', JSON.stringify(data, null, 4));

	console.log('Writing to benchmark.json ... Done !');

	process.exit();
}

async function setBuildData(processPath, platformArch, buildSize, buildTime) {
	console.log('Writing buildSize to benchmark.json ...');
	console.log('processPath:', processPath);
	console.log('platformArch:', platformArch);
	console.log('buildSize:', buildSize);
	console.log('buildTime:', buildTime);
	console.log('--------------');

	const data = JSON.parse(fs.readFileSync('benchmarks.json'));

	if(!data[platformArch]) {
		data[platformArch] = {};
	}

	if(!data[platformArch].benchmarkData) {
		data[platformArch].benchmarkData = {};
	}

	if(!data[platformArch].benchmarkData[processPath]) {
		data[platformArch].benchmarkData[processPath] = {};
	}

	data[platformArch].benchmarkData[processPath].buildSize = buildSize;
	data[platformArch].benchmarkData[processPath].buildTime = buildTime;

	fs.writeFileSync('benchmarks.json', JSON.stringify(data, null, 4));

	console.log('Writing buildSize to benchmark.json ... Done !');
}

/**
 * Run
 */
(async() => {
	let processId = 0;
	const benchmarkData = JSON.parse(fs.readFileSync('benchmarks.json'))[getCurrentPlatformArch()].benchmarkData;

	for(const { app, path, exe, packageJsonVersionsNeeded, build } of processes) {
		if(exe === 'TODO') {
			continue;
		}

		// Debug
		benchmarkData[path + '/Debug'] = {
			versions: getPackageJsonVersions(path, packageJsonVersionsNeeded),
			benchmarks: [],
		};

		for(let iteration = 0; iteration < ITERATIONS_PER_PROCESS; iteration++) {
			customLog = (...args) => console.log('[Debug] [Process #' + processId.toString().padStart(3, '0') + '/ Iteration #' + iteration + ']', ...args);

			customLog('Processing', path, exe);

			const res = await getMemoryUsageHistoryOfProcess(path, exe);

			customLog(path, exe, '\n', processMemoryUsage(res));
			customLog(path, exe, '\n', 'Start time:', res.startTime);

			benchmarkData[path + '/Debug'].benchmarks.push({
				memoryUsage: processMemoryUsage(res),
				startTime: res.startTime
			});
		}

		// Release
		if(build) {
			customLog = (...args) => console.log('[Build] [Process #' + processId.toString().padStart(3, '0') + ']', ...args);

			const buildData = await execBuildProcess(path, build.cmd);

			customLog(buildData.time);

			benchmarkData[path + '/Release'] = {
				versions: getPackageJsonVersions(path, packageJsonVersionsNeeded),
				benchmarks: [],
			};

			let buildPath = build.folders[getCurrentPlatformArch()];
			const existingFolders = Object.keys(build.folders)
				.map((platformArch) => {
					let folder = '';
					let exe = '';

					if(build.folders[platformArch].path !== '') {
						folder = path + '/' + build.folders[platformArch].path.replaceAll('APPNAME', app);
						exe = build.folders[platformArch].exe.replaceAll('APPNAME', app);
					} else {
						folder = null;
						exe = path + '/' + build.folders[platformArch].exe.replaceAll('APPNAME', app);
					}

					return { platformArch, folder, exe };
				}).filter(({platformArch, folder}) => {
					if(folder !== null && !fs.existsSync(folder)) {
						console.log(`Warning: ${folder} doesn't exists !`)
						return false;
					}

					// This parameter is used if multiple architecture build in the same folder
					if(build.folders[platformArch].currentOnly && platformArch !== getCurrentPlatformArch()) {
						return false;
					}

					return true;
				});

			for(const {platformArch, folder, exe, additionalFiles} of existingFolders) {
				const buildSize = await dirSize(folder || exe);
				const buildTime = buildData.time / existingFolders.length;

				if(buildSize === null) {
					continue;
				}
				
				if(platformArch === getCurrentPlatformArch()) {
					if(!benchmarkData[path]) {
						benchmarkData[path] = {};
					}

					if(Array.isArray(additionalFiles)) {
						for(const additionalFile of additionalFiles) {
							buildSize += await dirSize(additionalFile);
						}
					}

					benchmarkData[path].buildSize = buildSize;
					benchmarkData[path].buildTime = buildTime;

					console.log('Current platform data, buildSize:', buildSize, ', buildTime:', buildTime);
				} else {
					setBuildData(path, platformArch, buildSize, buildData.time / existingFolders.length);
				}
			}

			if(buildPath && !buildPath.doNotRun) {
				let releasePath = path + '/' + buildPath.path.replaceAll('APPNAME', app);
				let releaseExe = buildPath.exe.replaceAll('APPNAME', app);

				if(buildPath.path === '' && os.platform() === 'win32') {
					const parts = releaseExe.split('/');
					releaseExe = parts[parts.length - 1];
					parts.pop();
					releasePath = path + '/' + parts.join('/');
				}

				for(let iteration = 0; iteration < ITERATIONS_PER_PROCESS; iteration++) {
					customLog = (...args) => console.log('[Release] [Process #' + processId.toString().padStart(3, '0') + '/ Iteration #' + iteration + ']', ...args);

					customLog('Processing', releasePath, releaseExe);

					const res = await getMemoryUsageHistoryOfProcess(releasePath, releaseExe);

					customLog(releasePath, releaseExe, '\n', processMemoryUsage(res));
					customLog(releasePath, releaseExe, '\n', 'Start time:', res.startTime);

					benchmarkData[path + '/Release'].benchmarks.push({
						memoryUsage: processMemoryUsage(res),
						startTime: res.startTime
					});
				}
			}
		}

		processId++;
	}

	console.log('System:', await getSystemData());

	writeDataToJsonFile(benchmarkData);
})();
