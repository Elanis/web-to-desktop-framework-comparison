import { execSync, exec } from 'child_process';
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
  const files = await readdir(directory);
  const stats = files.map(file => stat(path.join(directory, file)));

  return (await Promise.all(stats)).reduce((accumulator, { size }) => accumulator + size, 0);
}

async function execBuildProcess(processPath, processExe) {
	return new Promise((resolve, reject) => {
		const startTime = performance.now();

		// Spawn process
		const childProcess = exec(processExe, {
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

async function getMemoryUsageHistoryOfProcess(processPath, processExe, timeout=DEFAULT_TIMEOUT) {
	return new Promise((resolve, reject) => {
		const memUsageHistory = [];
		let startTime = '?';
		let done = false;

		// Spawn process
		const childProcess = exec(processExe, {
			cwd: processPath,
			shell: true,
			detached: true,
		});

		childProcess.stdout.on('data', (data) => {
			if(DEBUG_STDOUT) {
				customLog(`stdout: ${data}`);
			}

			const lines = data.split('\n');
			const starTimeLine = lines.find((elt) => elt.includes('Starting time:'));
			if(starTimeLine) {
				startTime = parseInt(starTimeLine.replace('Starting time:', '').trim().replace('ms', ''), 10);
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

			done = true;
		});

		// Save stats
		const pushStats = async() => {
			try {
				pidusage([childProcess.pid, ...(await pidtree(childProcess.pid))], function (err, stats) {
					if(DEBUG_PIDUSAGE) {
						customLog(processExe, stats);
					}

					if(stats) {
						const max = Math.max(0, ...Object.values(stats).filter((elt) => elt !== null && elt.memory).map((elt) => elt.memory));
						if(max > 0) {
							memUsageHistory.push(max);
						}
					}
				});
			} catch(e) {

			}
		};

		pushStats();
		let time = 0;
		const interval = setInterval(() => {
			if(time++ === timeout || childProcess.exitCode !== null || done) {
				resolve({
					memoryUsage: memUsageHistory,
					startTime
				});
				clearInterval(interval);

				childProcess.kill();
			}

			pushStats();
		}, 1000);
	});
}

function processMemoryUsage({ memoryUsage }) {
	return {
		min: Math.min(...memoryUsage),
		max: Math.max(...memoryUsage),
		med: (memoryUsage.sort())[Math.floor(memoryUsage.length / 2)],
		avg: memoryUsage.reduce((a, b) => a + b, 0) / memoryUsage.length,
		history: memoryUsage
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
	const benchmarkData = {};

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
			const buildData = await execBuildProcess(path, build.cmd);

			benchmarkData[path + '/Release'] = {
				versions: getPackageJsonVersions(path, packageJsonVersionsNeeded),
				benchmarks: [],
			};

			let buildPath = build.folders[getCurrentPlatformArch()];
			let amount = 0;
			for(const platformArch in build.folders) {
				const folder = path + '/' + build.folders[platformArch].path.replace('APPNAME', app);

				if(!fs.existsSync(folder)) {
					console.log(`Warning: ${folder} doesn't exists !`)
					continue;
				}

				amount++;

				const buildSize = await dirSize(folder);
				setBuildData(path, platformArch, buildSize, buildData.time / amount);
			}

			if(buildPath) {
				const releasePath = path + '/' + buildPath.path.replace('APPNAME', app);
				const releaseExe = buildPath.exe.replace('APPNAME', app);

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

	//console.log('Raw benchmark Data:', JSON.stringify(benchmarkData, null, 4));

	writeDataToJsonFile(benchmarkData);
})();
