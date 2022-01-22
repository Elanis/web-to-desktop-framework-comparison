import fs from 'fs';

import { apps, architectures, libraries, requestedArchitectures } from './config.js';

const data = JSON.parse(fs.readFileSync('benchmarks.json', 'utf8'));

/**
 * Stats
 */
function getBuildStats(app, architecture) {
	return {};
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

function getMarkdownTableLine(app, architecture, firstCell, getStats, formatStat) {
	let output = '';

	const stats = getStats(app, architecture.id);
	if(Object.values(stats).length === 0) {
		return;
	}

	output += '|' + firstCell + '| ***' + architecture.name + '*** |';

	for(const libraryId in libraries) {
		if(stats[libraryId]) {
			output += ` ${formatStat(stats[libraryId])} |`;
		} else if(requestedArchitectures[architecture] && requestedArchitectures[architecture][libraryId]) {
			output += ` [Requested](${requestedArchitectures[architecture][libraryId]}) |`;
		} else {
			output += ' ? |';
		}
	}

	output += '\n';

	return output;
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
		const line = getMarkdownTableLine(app, architecture, firstCell, getBuildStats, getUnitFromMemory);
		if(line) {
			fileStr += line;
			firstCell = ' ';
		}
	}

	/**
	 * MEMORY USAGE
	 */
	firstCell = ' **Memory Usage** ';
	for(const architecture of architectures) {
		const line = getMarkdownTableLine(app, architecture, firstCell, getMemoryStats, getUnitFromMemory);
		if(line) {
			fileStr += line;
			firstCell = ' ';
		}
	}

	/**
	 * START DURATION
	 */
	firstCell = ' **Start duration** ';
	for(const architecture of architectures) {
		const line = getMarkdownTableLine(app, architecture, firstCell, getStartTimeStats, (value) => ` ≈${value}ms |`);
		if(line) {
			fileStr += line;
			firstCell = ' ';
		}
	}
}

fileStr += fs.readFileSync('README.template.end.md');

fs.writeFileSync('../README.md', fileStr);