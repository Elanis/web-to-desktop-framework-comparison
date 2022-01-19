import fs from 'fs';

import { apps, architectures, libraries } from './config.js';

const data = JSON.parse(fs.readFileSync('benchmarks.json', 'utf8'));

/**
 * Stats
 */
function getStartTimeStats(app, architecture) {
	if(!data[architecture]) {
		return {};
	}

	const stats = {};

	for(const libraryId in libraries) {
		const benchmarkData = data[architecture].benchmarkData[`../benchmark/${app}/${libraryId}`];

		if(!benchmarkData) {
			continue;
		}

		stats[libraryId] = benchmarkData.benchmarks.map((elt) => elt.startTime).reduce((a, b) => a + (b || 0), 0) / benchmarkData.benchmarks.length;

	}
	return stats;
}

function getMemoryStats(app, architecture) {
	if(!data[architecture]) {
		return {};
	}

	const stats = {};

	for(const libraryId in libraries) {
		const benchmarkData = data[architecture].benchmarkData[`../benchmark/${app}/${libraryId}`];

		if(!benchmarkData) {
			continue;
		}

		stats[libraryId] = benchmarkData.benchmarks.map((elt) => elt.memoryUsage.avg).reduce((a, b) => a + (b || 0), 0) / benchmarkData.benchmarks.length;

	}

	return stats;
}

/**
 * Units
 */
function getUnitFromMemory(data) {
	const unit = ['B', 'KB', 'MB', 'GB'];
	let id = 0;

	while(data > 1000) {
		data /= 1000;
		id++;
	}

	return `≈${Math.floor(data)}${unit[id]}`;
}

/**
 * Run
 */
let fileStr = fs.readFileSync('README.template.begin.md');
for(const app of apps) {
	fileStr += '\n';
	fileStr += '# ' + app + '\n';
	fileStr += '\n';
	fileStr += `See source in [benchmark/${app}](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/${app}/) folder.`;
	fileStr += '\n\n';

	/**
	 * HEADER
	 */
	fileStr += '|  |  |';
	let headerSeparator = '|:---:|:---:|';
	for(const libraryId in libraries) {
		fileStr += ` [${libraries[libraryId].name}](${libraries[libraryId].url}) |`;
		headerSeparator += ':---:|';
	}
	fileStr += '\n' + headerSeparator + '\n';

	/**
	 * BUILD SIZE
	 */
	let firstCell = ' **Build size** ';
	for(const architecture of architectures) {
		fileStr += '|' + firstCell + '| ***' + architecture.name + '*** | ? | ? | ? | ? | ? | ? | ? |\n';


		firstCell = ' ';
	}

	/**
	 * MEMORY USAGE
	 */
	firstCell = ' **Memory Usage** ';
	for(const architecture of architectures) {
		const stats = getMemoryStats(app, architecture.id);
		if(Object.values(stats).length === 0) {
			continue;
		}

		fileStr += '|' + firstCell + '| ***' + architecture.name + '*** |';

		for(const libraryId in libraries) {
			if(stats[libraryId]) {
				fileStr += ` ${getUnitFromMemory(stats[libraryId])} |`;
			} else {
				fileStr += ' ? |';
			}
		}

		fileStr += '\n';
		firstCell = ' ';
	}

	/**
	 * START DURATION
	 */
	for(const architecture of architectures) {
		const stats = getStartTimeStats(app, architecture.id);
		if(Object.values(stats).length === 0) {
			continue;
		}

		fileStr += '|' + firstCell + '| ***' + architecture.name + '*** |';

		for(const libraryId in libraries) {
			if(stats[libraryId]) {
				fileStr += ` ≈${stats[libraryId]}ms |`;
			} else {
				fileStr += ' ? |';
			}
		}

		fileStr += '\n';
		firstCell = ' ';
	}
}

fileStr += fs.readFileSync('README.template.end.md');

fs.writeFileSync('../README.md', fileStr);