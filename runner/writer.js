import fs from 'fs';

import { apps, architectures, customMessages, libraries, requestedArchitectures } from './config.js';

const data = JSON.parse(fs.readFileSync('benchmarks.json', 'utf8'));

/**
 * Stats
 */
function getBuildSizeStats(app, architecture) {
	if(!data[architecture]) {
		return {};
	}

	const stats = {};

	for(const libraryId in libraries) {
		const benchmarkData = data[architecture].benchmarkData[`../benchmark/${app}/${libraryId}`];

		if(!benchmarkData || !benchmarkData.buildSize) {
			continue;
		}

		stats[libraryId + '/Release'] = benchmarkData.buildSize;
	}

	return stats;
}

function getBuildTimeStats(app, architecture) {
	if(!data[architecture]) {
		return {};
	}

	const stats = {};

	for(const libraryId in libraries) {
		const benchmarkData = data[architecture].benchmarkData[`../benchmark/${app}/${libraryId}`];

		if(!benchmarkData || !benchmarkData.buildTime) {
			continue;
		}

		stats[libraryId + '/Release'] = Math.round(benchmarkData.buildTime);
	}

	return stats;
}

function getMemoryStats(app, architecture) {
	if(!data[architecture]) {
		return {};
	}

	const stats = {};

	for(const libraryId in libraries) {
		for(const context of ['Debug', 'Release']) {
			const benchmarkData = data[architecture].benchmarkData[`../benchmark/${app}/${libraryId}/${context}`];

			if(!benchmarkData || !benchmarkData.benchmarks) {
				continue;
			}

			stats[libraryId + '/' + context] = Math.floor(
				benchmarkData.benchmarks.map((elt) => elt.memoryUsage.avg).reduce((a, b) => a + (b || 0), 0) / benchmarkData.benchmarks.length
			);
		}
	}

	return stats;
}

function getStartTimeStats(app, architecture) {
	if(!data[architecture]) {
		return {};
	}

	const stats = {};

	for(const libraryId in libraries) {
		for(const context of ['Debug', 'Release']) {
			const benchmarkData = data[architecture].benchmarkData[`../benchmark/${app}/${libraryId}/${context}`];

			if(!benchmarkData || !benchmarkData.benchmarks) {
				continue;
			}

			stats[libraryId + '/' + context] = Math.floor(
				benchmarkData.benchmarks.map((elt) => elt.startTime).reduce((a, b) => a + (b || 0), 0) / benchmarkData.benchmarks.length
			);
		}
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

function formatTime(time) {
	if(time < 0) {
		return 'N/A';
	}

	return `≈${time}ms`;
}

function getMarkdownTableLine(app, architecture, getStats, formatStat, showReleaseTag=true) {
	let output = '';

	const stats = getStats(app, architecture.id);
	if(Object.values(stats).length === 0) {
		return;
	}

	output += '| ***' + architecture.name + '*** |';

	for(const libraryId in libraries) {
		if(customMessages[app] && customMessages[app][libraryId]) {
			output += ` N/A<sup>${customMessages[app][libraryId].key}</sup>|`;
			continue;
		}

		if(stats[libraryId + '/Debug'] || stats[libraryId + '/Release']) {
			let debug = stats[libraryId + '/Debug'];
			if(debug && debug !== 'N/A') {
				debug = `${formatStat(stats[libraryId + '/Debug'])} (Debug)`;
			}

			let release = stats[libraryId + '/Release'];
			if((release && release !== 'N/A') && showReleaseTag) {
				release = `${formatStat(stats[libraryId + '/Release'])} (Release)`;
			} else if(release && release !== 'N/A') {
				release = `${formatStat(stats[libraryId + '/Release'])}`;
			}

			let result = '';
			if(debug && release) {
				result = ` ${debug} => ${release} |`;
			} else if(debug) {
				result = ` ${debug} |`;
			} else if(release) {
				result = ` ${release} |`;
			}

			output += result;
		} else if(requestedArchitectures[architecture.id] && requestedArchitectures[architecture.id][libraryId]) {
			output += ` [Requested](${requestedArchitectures[architecture.id][libraryId]}) |`;
		} else {
			output += ' ? |';
		}
	}

	output += '\n';

	return output;
}

function generateHeader() {
	fileStr = '\n\n|  |';
	let headerSeparator = '|:---:|';
	for(const libraryId in libraries) {
		fileStr += ` [${libraries[libraryId].name}](${libraries[libraryId].url}) |`;
		headerSeparator += ':---:|';
	}

	fileStr += '\n';
	fileStr += headerSeparator + '\n';

	return fileStr;
}

/**
 * Run
 */
let fileStr = '';
let fileBegin = fs.readFileSync('README.template.begin.md', 'utf8');
const stats = JSON.parse(fs.readFileSync('stats.json', 'utf8'));

for(const line of fileBegin.split('\n')) {
	if(line.startsWith('| **Github stars** |')) {
		fileStr += '| **Github stars** ';
		for(let libraryId in libraries) {
			fileStr += `| ${Math.round(stats[libraryId].stars / 100) / 10 }k `
		}
		fileStr += '|\n';
		continue;
	}

	if(line.startsWith('| **Forks** |')) {
		fileStr += '| **Forks** ';
		for(let libraryId in libraries) {
			fileStr += `| ${Math.round(stats[libraryId].forks / 100) / 10 }k `
		}
		fileStr += '|\n';
		continue;
	}

	fileStr += line + '\n';
}

for(const app of apps) {
	fileStr += '\n';
	fileStr += '# ' + app + '\n';
	fileStr += '\n';
	fileStr += `See source in [benchmark/${app}](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/${app}/) folder.`;
	fileStr += '\n\n';

	/**
	 * BUILD SIZE
	 */
	fileStr += '\n### Build size  ';
	fileStr += generateHeader();
	for(const architecture of architectures) {
		const line = getMarkdownTableLine(app, architecture, getBuildSizeStats, getUnitFromMemory, false);
		if(line) {
			fileStr += line;
		}
	}

	/**
	 * BUILD TIME
	 */
	fileStr += '\n### Build time  ';
	fileStr += generateHeader();
	for(const architecture of architectures) {
		const line = getMarkdownTableLine(app, architecture, getBuildTimeStats, formatTime, false);
		if(line) {
			fileStr += line;
		}
	}

	/**
	 * MEMORY USAGE
	 */
	fileStr += '\n### Memory Usage  ';
	fileStr += generateHeader();
	for(const architecture of architectures) {
		const line = getMarkdownTableLine(app, architecture, getMemoryStats, getUnitFromMemory);
		if(line) {
			fileStr += line;
		}
	}

	/**
	 * START DURATION
	 */
	fileStr += '\n### Start duration  ';
	fileStr += generateHeader();
	for(const architecture of architectures) {
		const line = getMarkdownTableLine(app, architecture, getStartTimeStats, formatTime);
		if(line) {
			fileStr += line;
		}
	}

	if(customMessages[app]) {
		fileStr += '\n';
		for(const libraryId in customMessages[app]) {
			fileStr += `**<sup>${customMessages[app][libraryId].key}</sup>**: ${customMessages[app][libraryId].value}`;
		}
		fileStr += '\n\n';
	}
}

fileStr += fs.readFileSync('README.template.end.md');

fs.writeFileSync('../README.md', fileStr);