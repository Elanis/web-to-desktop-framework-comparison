import os from 'node:os';
import nwbuild from 'nw-builder';

let archs = [];
if(os.platform() === 'win32') {
	archs = ['ia32', 'x64'];
} else if(os.platform() === 'darwin') {
	archs = ['x64', 'arm64'];
} else if(os.platform() === 'linux') {
	archs = ['ia32', 'x64'];
} else {
	throw new Error('Unsupported platform !');
}

for(const arch of archs) {
	console.log(`Building for ${arch} ...`);
	await nwbuild({
		mode: 'build',
		version: 'stable',
		flavor: 'normal',
		outDir: `./dist/01-empty-app-${os.platform()}-${arch}/`,
		srcDir: './app',
		arch,
		glob: false,
		app: {
			'icon': './app/icon.ico',
			'name': '01-empty-app',
			'LSApplicationCategoryType': 'public.app-category.utilities',
			'NSHumanReadableCopyright': 'See LICENSE.md - MIT',
			'NSLocalNetworkUsageDescription': 'N/A',
		}
	});
	console.log(`Building for ${arch} ... Done!`);
}
