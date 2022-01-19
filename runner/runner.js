import { execSync, exec } from 'child_process';
import fs from 'fs';
import pidusage from 'pidusage';
import pidtree from 'pidtree';
import os from 'os';
import systeminformation from 'systeminformation';

let customLog = console.log;

/**
 * Config
 */
const ITERATIONS_PER_PROCESS = 10;
const DEFAULT_TIMEOUT = 10;
const DEFAULT_DEBUG = false;
const processes = [
	{
		path: '../benchmark/01-empty-app/electron',
		exe: 'npm start',
		packageJsonVersionsNeeded: ['electron', 'electron-packager'],
	}
];


/**
 * Methods
 */

async function getMemoryUsageHistoryOfProcess(processPath, processExe, timeout=DEFAULT_TIMEOUT, debug=DEFAULT_DEBUG) {
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
			if(debug) {
				customLog(`stdout: ${data}`);
			}

			const lines = data.split('\n');
			const starTimeLine = lines.find((elt) => elt.includes('Starting time:'));
			if(starTimeLine) {
				startTime = starTimeLine.replace('Starting time:', '').trim();
			}
		});

		childProcess.stderr.on('data', (data) => {
			if(debug) {
				console.error(`stderr: ${data}`);
			}

		});

		childProcess.on('close', (code) => {
			if(debug) {
				customLog(`child process exited with code ${code}`);
			}

			done = true;
		});

		// Save stats
		const pushStats = async() => {
			try {
				pidusage([childProcess.pid, ...(await pidtree(childProcess.pid))], function (err, stats) {
					if(debug) {
						customLog(processExe, stats);
					}

					if(stats) {
						memUsageHistory.push(Math.max(...Object.values(stats).map((elt) => elt.memory)));
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

				if (os.platform() === 'win32') { // childProcess.platform was undefined for me, but this works
					if(debug) {
						customLog(`taskkill /F /T /PID ${childProcess.pid}`);
					}
					execSync(`taskkill /F /T /PID ${childProcess.pid}`); // windows specific
				} else {
					childProcess.kill();
				}
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

function getPackageJsonVersions(path, packageJsonVersionsNeeded) {
	if(!packageJsonVersionsNeeded) {
		return {};
	}

	const packageJsonObj = JSON.parse(fs.readFileSync(path + '/package.json', 'utf-8'));
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

async function writeDataToJsonFile(benchmarkData) {
	const data = JSON.parse(fs.readFileSync('data.json'));

	data[os.platform + '-' + os.arch()] = {
		systemInformations: await getSystemData(),
		benchmarkData
	};

	fs.writeFileSync('data.json', JSON.stringify(data, null, 4));
}

/**
 * Run
 */
(async() => {
	let processId = 0;
	const benchmarkData = {};

	for(const { path, exe, packageJsonVersionsNeeded } of processes) {
		benchmarkData[path] = {
			versions: getPackageJsonVersions(path, packageJsonVersionsNeeded),
			benchmarks: [],
		};

		for(let iteration = 0; iteration < ITERATIONS_PER_PROCESS; iteration++) {
			customLog = (...args) => console.log('[Process #' + processId.toString().padStart(3, '0') + '/ Iteration #' + iteration + ']', ...args);

			customLog('Processing', path, exe);

			const res = await getMemoryUsageHistoryOfProcess(path, exe);

			customLog(path, exe, '\n', processMemoryUsage(res));

			benchmarkData[path].benchmarks.push({
				memoryUsage: processMemoryUsage(res),
				startTime: res.startTime
			});
		}
		processId++;
	}

	console.log('System:', await getSystemData());

	console.log('Raw benchmark Data:', JSON.stringify(benchmarkData, null, 4));

	writeDataToJsonFile(benchmarkData);
})();
