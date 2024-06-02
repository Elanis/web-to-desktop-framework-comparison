import fs from 'fs';
import stats from './stats.json' with { type: 'json' };

let stars_text = '';
let forks_text = '';

const processedLibraries = [];
for(const benchmarkExampleId in stats) {
	const benchmarkExample = stats[benchmarkExampleId];
	if(processedLibraries.includes(benchmarkExample.repo)) {
		continue;
	}

	const repositoryName = benchmarkExample.repo.split('/')[1];

	stars_text += `
	section ${repositoryName}
	${benchmarkExample.stars} : 0, ${benchmarkExample.stars}

	`;

	forks_text += `
	section ${repositoryName}
	${benchmarkExample.forks} : 0, ${benchmarkExample.forks}

	`;

	processedLibraries.push(benchmarkExample.repo);
}


let graphsdotmd_text = `
# Graphs

## Stars
\`\`\`mermaid
gantt
    title Github stars
    dateFormat  X
    axisFormat %s

${stars_text}
\`\`\`

## Forks
\`\`\`mermaid
gantt
    title Github forks
    dateFormat  X
    axisFormat %s

${forks_text}
\`\`\`
`;

fs.writeFileSync('../GRAPHS.md', graphsdotmd_text);
