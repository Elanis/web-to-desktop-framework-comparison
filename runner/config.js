export const apps = ['01-empty-app', '02-empty-app-frameless'];
export const libraries = {
	'electron': {
		exe: 'npm start',
		name: 'Electron',
		packageJsonVersionsNeeded: ['electron', 'electron-packager'],
		url: 'https://github.com/electron/electron',
		build: {
			cmd: 'npm run build-ci',
			folders: {
				'linux-arm64': {
					path: 'build/APPNAME-linux-arm64',
					exe: './APPNAME'
				},
				'linux-arm': {
					path: 'build/APPNAME-linux-armv7l',
					exe: './APPNAME'
				},
				'linux-x64': {
					path: 'build/APPNAME-linux-x64',
					exe: './APPNAME'
				},
				'win32-arm64': {
					path: 'build/APPNAME-win32-arm64',
					exe: 'APPNAME.exe'
				},
				'win32-x32': {
					path: 'build/APPNAME-win32-ia32',
					exe: 'APPNAME.exe'
				},
				'win32-x64': {
					path: 'build/APPNAME-win32-x64',
					exe: 'APPNAME.exe'
				},
				'darwin-x64': {
					path: 'build/APPNAME-darwin-x64',
					exe: './APPNAME.app/Contents/MacOS/APPNAME'
				},
				'darwin-arm64': {
					path: 'build/APPNAME-darwin-arm64',
					exe: './APPNAME.app/Contents/MacOS/APPNAME'
				},
				'mas-x64': {
					path: 'build/APPNAME-mas-x64',
					exe: './APPNAME.app/Contents/MacOS/APPNAME'
				},
				'mas-arm64': {
					path: 'build/APPNAME-mas-arm64',
					exe: './APPNAME.app/Contents/MacOS/APPNAME'
				}			
			}
		}
	},
	'nw.js': {
		exe: 'npm start',
		name: 'NW.JS',
		packageJsonVersionsNeeded: ['nwjs-builder-phoenix'],
		url: 'https://github.com/nwjs/nw.js',
		build: {
			cmd: 'npm run build',
			folders: {
				'win32-x32': {
					path: 'dist/APPNAME-1.0.0-win-x86',
					exe: 'APPNAME.exe'
				},
				'win32-x64': {
					path: 'dist/APPNAME-1.0.0-win-x64',
					exe: 'APPNAME.exe'
				},
				'linux-x32': {
					path: 'dist/APPNAME-1.0.0-linux-x86',
					exe: './APPNAME'
				},
				'linux-x64': {
					path: 'dist/APPNAME-1.0.0-linux-x64',
					exe: './APPNAME'
				},
				'darwin-x64': {
					path: 'dist/APPNAME-1.0.0-mac-x64',
					exe: './APPNAME.app/Contents/MacOS/APPNAME'
				},
			}
		}
	},
	'tauri': {
		exe: 'npm start',
		name: 'Tauri',
		packageJsonVersionsNeeded: ['@tauri-apps/cli', '@tauri-apps/api'],
		url: 'https://github.com/tauri-apps/tauri',
		build: {
			cmd: 'npm run build',
			folders: {
				'win32-x64': {
					path: '',
					exe: 'src-tauri/target/release/APPNAME.exe',
					currentOnly: true
				},
				'linux-x64': {
					path: '',
					exe: './src-tauri/target/release/APPNAME',
					currentOnly: true
				},
				'darwin-x64': {
					path: 'src-tauri/target/release/bundle/macos/APPNAME.app/',
					exe: './Contents/MacOS/APPNAME',
					currentOnly: true
				},
			}
		}
	},
	'nodegui': {
		exe: 'npm start',
		name: 'NodeGui',
		packageJsonVersionsNeeded: ['@nodegui/nodegui', '@nodegui/packer'],
		url: 'https://github.com/nodegui/nodegui',
	},
	'neutralinojs': {
		exe: 'npm_config_yes=true npx @neutralinojs/neu run',
		name: 'Neutralino',
		url: 'https://github.com/neutralinojs/neutralinojs',
		build: {
			cmd: 'npm_config_yes=true npx @neutralinojs/neu build --release',
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
	'flutter': {
		exe: 'flutter run lib/main.dart',
		name: 'Flutter',
		url: 'https://github.com/flutter/flutter',
	},
	'DotnetMaui': {
		exe: 'dotnet run',
		name: '.Net MAUI',
		url: 'https://github.com/dotnet/maui',
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