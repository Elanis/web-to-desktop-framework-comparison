export const apps = ['01-empty-app', '02-empty-app-headless'];
export const libraries = {
	'electron': {
		exe: 'npm start',
		name: 'Electron',
		packageJsonVersionsNeeded: ['electron', 'electron-packager'],
		url: 'https://github.com/electron/electron',
	},
	'nw.js': {
		exe: 'npm start',
		name: 'NW.JS',
		packageJsonVersionsNeeded: ['nwjs-builder-phoenix'],
		url: 'https://github.com/nwjs/nw.js',
	},
	'tauri': {
		exe: 'npm start',
		name: 'Tauri',
		packageJsonVersionsNeeded: ['@tauri-apps/cli', '@tauri-apps/api'],
		url: 'https://github.com/tauri-apps/tauri',
	},
	'nodegui': {
		exe: 'npm start',
		name: 'NodeGui',
		packageJsonVersionsNeeded: ['@nodegui/nodegui', '@nodegui/packer'],
		url: 'https://github.com/nodegui/nodegui',
	},
	'neutralinojs': {
		exe: 'npm start',
		name: 'Neutralino',
		url: 'https://github.com/neutralinojs/neutralinojs',
	},
	'flutter': {
		exe: 'TODO',
		name: 'Flutter',
		url: 'https://github.com/flutter/flutter',
	},
	'DotnetMaui': {
		exe: 'TODO',
		name: '.Net MAUI',
		url: 'https://github.com/dotnet/maui',
	},
};

export const architectures = [
	{
		id: 'win32-x32',
		name: 'Windows (x86)',
	},
	{
		id: 'win32-arm64',
		name: 'Windows (ARM64)',
	},
	{
		id: 'win32-x64',
		name: 'Windows (x64)',
	},
	{
		id: 'darwin-',
		name: 'MacOS',
	},
	{
		id: 'linux-x32',
		name: 'Linux (x86)'
	},
	{
		id: 'linux-x64',
		name: 'Linux (x64)'
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

const processesTmp = [];
for(const app of apps) {
	for(const libraryName in libraries) {
		processesTmp.push({
			path: `../benchmark/${app}/${libraryName}`,
			exe: libraries[libraryName].exe,
			packageJsonVersionsNeeded: libraries[libraryName].packageJsonVersionsNeeded,
		});
	}
}
export const processes = processesTmp;

export const ITERATIONS_PER_PROCESS = 10;
export const DEFAULT_TIMEOUT = 10;
export const DEFAULT_DEBUG = false;