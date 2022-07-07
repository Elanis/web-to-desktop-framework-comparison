import fs from 'fs';
import fetch from 'node-fetch';

import { libraries } from './config.js';

let data = {};

(async() => {
	for(const libraryName in libraries) {
		const repo = libraries[libraryName].url.replace('https://github.com/', '');
		const res = await fetch('https://api.github.com/repos/' + repo);
		const json = await res.json();

		data[libraryName] ={
			stars: json.stargazers_count,
			forks: json.forks_count,
		};

		console.log({
			stars: json.stargazers_count,
			forks: json.forks_count,
		});
	}

	fs.writeFileSync('stats.json', JSON.stringify(data));
})();