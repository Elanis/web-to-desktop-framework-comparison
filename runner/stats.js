import fs from 'fs';
import fetch from 'node-fetch';

import { libraries } from './config.js';

const data = {};

for(const libraryName in libraries) {
	const repo = libraries[libraryName].url.replace('https://github.com/', '');
	const res = await fetch('https://api.github.com/repos/' + repo);
	const json = await res.json();

	const updateDate = new Date(json.pushed_at);

	data[libraryName] = {
		stars: json.stargazers_count,
		forks: json.forks_count,
		lastUpdate: (updateDate.getMonth() + 1) + '/' + updateDate.getFullYear()
	};

	console.log(libraryName);
	console.log(data[libraryName]);
}

fs.writeFileSync('stats.json', JSON.stringify(data));

