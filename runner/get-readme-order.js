// To be run manually, used to get the README project order following discussion in https://github.com/Elanis/web-to-desktop-framework-comparison/issues/386
import fs from 'fs';

let stats = JSON.parse(fs.readFileSync('stats.json', 'utf8'));
stats = Object.values(stats);

function getScore(app) {
	return app.stars + app.forks * 10;
}

stats.sort((a, b) => getScore(b) - getScore(a));

console.log(stats.map(x => x.repo));

/* Latest output:
  'flutter/flutter',
  'electron/electron',
  'tauri-apps/tauri',
  'nwjs/nw.js',
  'dotnet/maui',
  'dotnet/maui',
  'wailsapp/wails',
  'nodegui/nodegui',
  'neutralinojs/neutralinojs'

  => Non web last =>

  'electron/electron',
  'tauri-apps/tauri',
  'nwjs/nw.js',
  'wailsapp/wails',
  'nodegui/nodegui',
  'neutralinojs/neutralinojs'
  'flutter/flutter',
  'dotnet/maui',
  'dotnet/maui',
*/