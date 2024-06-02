import fs from 'fs';
import fetch from 'node-fetch';

import { libraries } from './config.js';

const librariesStats = {};

for(const libraryName in libraries) {
	const orgAndRepo = libraries[libraryName].url.replace('https://github.com/', '');
	const httpResponse = await fetch('https://api.github.com/repos/' + orgAndRepo);
	const repositoryStats = await httpResponse.json();

	const updateDate = new Date(repositoryStats.pushed_at);

	librariesStats[libraryName] = {
		repo: orgAndRepo,
		stars: repositoryStats.stargazers_count,
		forks: repositoryStats.forks_count,
		lastUpdate: (updateDate.getMonth() + 1) + '/' + updateDate.getFullYear()
	};

	console.log(`Processed "${libraryName}". Results:`);
	console.log(librariesStats[libraryName]);
}

fs.writeFileSync('stats.json', JSON.stringify(librariesStats));

