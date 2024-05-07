import nwbuild from 'nw-builder';

nwbuild({
	mode: 'run',
	flavor: 'sdk',
	srcDir: './app',
	glob: false
});