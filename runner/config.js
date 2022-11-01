export const apps = ['01-empty-app', '02-empty-app-frameless'];
export const libraries = {
	'neutralinojs': {
		exe: 'npx @neutralinojs/neu run',
		name: 'Neutralino',
		url: 'https://github.com/neutralinojs/neutralinojs',
		build: {
			cmd: 'npx @neutralinojs/neu build --release',
			folders: { // TODO: count "resources.neu" size as well
				'linux-arm64': {
					path: '',
					exe: 'dist/APPNAME/APPNAME-linux_arm64'
				},
				'linux-x64': {
					path: '',
					exe: 'dist/APPNAME/APPNAME-linux_x64'
				},
				'darwin-x64': {
					path: '',
					exe: 'dist/APPNAME/APPNAME-mac_x64'
				},
				'win32-x64': {
					path: '',
					exe: 'dist/APPNAME/APPNAME-win_x64.exe', // TODO: count dll size
				},
			}
		}
	},
};

export const architectures = [
	{
		id: 'win32-x64',
		name: 'Windows (x64)',
	},
	{
		id: 'win32-x32',
		name: 'Windows (x86)',
	},
	{
		id: 'win32-arm64',
		name: 'Windows (ARM64)',
	},
	{
		id: 'darwin-x64',
		name: 'MacOS (x64)',
	},
	{
		id: 'darwin-arm64',
		name: 'MacOS (arm64)',
	},
	/*{
		id: 'mas-x64',
		name: 'MacOS (MAS x64)',
	},
	{
		id: 'mas-arm64',
		name: 'MacOS (MAS arm64)',
	},*/
	{
		id: 'linux-x64',
		name: 'Linux (x64)'
	},
	{
		id: 'linux-x32',
		name: 'Linux (x86)'
	},
	{
		id: 'linux-arm',
		name: 'Linux (ARMv7l)'
	},
	{
		id: 'linux-arm64',
		name: 'Linux (ARM64)'
	},
	{
		id: 'android',
		name: 'Android'
	},
	{
		id: 'ios',
		name: 'iOS',
	},
	{
		id: 'tvos',
		name: 'tvOS',
	},
	{
		id: 'web',
		name: 'Web',
	},
];

export const requestedArchitectures = {
	'win32-arm64': {
		'nw.js': 'https://github.com/nwjs/nw.js/issues/7599',
	},
	'linux-arm': {
		'nw.js': 'https://github.com/nwjs/nw.js/issues/1151',
	},
	'linux-arm64': {
		'nw.js': 'https://github.com/nwjs/nw.js/issues/1151',
	},
	'android': {
		'nw.js': 'https://github.com/nwjs/nw.js/issues/94',
	},
};

export const customMessages = {
	'02-empty-app-frameless': {
		'flutter': {
			key: 1,
			value: 'Frameless mode not supported yet'
		},
		'DotnetMaui': {
			key: 2,
			value: 'Frameless mode not working'
		}
	}
};

console.log('process.argv', process.argv)
console.log('process.argv[2]', process.argv[2])

const processesTmp = [];
for(const app of apps) {
	if(app !== process.argv[2]) {
		continue;
	}

	for(const libraryName in libraries) {
		if(customMessages[app] && customMessages[app][libraryName]) {
			continue;
		}

		processesTmp.push({
			app,
			path: `../benchmark/${app}/${libraryName}`,
			exe: libraries[libraryName].exe,
			packageJsonVersionsNeeded: libraries[libraryName].packageJsonVersionsNeeded,
			build: libraries[libraryName].build
		});
	}
}
export const processes = processesTmp;

export const ITERATIONS_PER_PROCESS = 10;
export const DEFAULT_TIMEOUT = 10;

export const DEBUG_STDOUT = true;
export const DEBUG_STDERR = true;
export const DEBUG_PIDUSAGE = false;