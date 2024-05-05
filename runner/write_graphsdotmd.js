import fs from 'fs';

let stars_text = '';
let forks_text = '';
const stats = JSON.parse(fs.readFileSync('stats.json', 'utf8'));

const doneLibs = [];
for(const exampleId in stats) {
	const example = stats[exampleId];
	if(doneLibs.includes(example.repo)) {
		continue;
	}

	const repoParts = example.repo.split('/');

	stars_text += `
	section ${repoParts[1]}
	${example.stars} : 0, ${example.stars}

	`;

	forks_text += `
	section ${repoParts[1]}
	${example.forks} : 0, ${example.forks}

	`;

	doneLibs.push(example.repo);
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
