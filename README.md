# Web to Desktop framework comparison

This repository was made to create an objective comparison of multiple framework that grant us to "transform" our web app to desktop application formats.

## Table Of Content
- [Major characteristics](#major-characteristics)
- [Operating systems](#operating-systems)
- [Benchmarks](#benchmarks)
  * [01 - Empty app](#01---empty-app)
  * [02 - Empty app (Frameless)](#02---empty-app-frameless)

## Major characteristics

| | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Github stars** | 105k | 39.3k | 55.7k | 8.1k | 6.3k | 13.3k | 147.5k | 17.9k |
| **Forks** | 14.2k | 4k | 1.5k | 0.3k | 0.3k | 0.6k | 24k | 1.2k |
| **Creation date** | 2013 | 2011 | 2019 | 2019 | 2018 | 2019 | 2018 | 2020 |
| **Last Update** | 12/2022 | 12/2022 | 12/2022 | 12/2022 | 12/2022 | 12/2022 | 12/2022 | 12/2022 |
| **Framework Language** | C++, JS, Objective-C, Python | C++ | Rust | C++ | C++ | Go | C, C++, Dart | C# |
| **Usage Language - Back** | JS, C++ | JS, C++ | Rust | JS, C++ | JS, C++ | Go | Dart | C# |
| **Usage Language - Front** | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | Dart | C# |
| **License** | [MIT](https://github.com/electron/electron/blob/master/LICENSE) | [MIT](https://github.com/nwjs/nw.js/blob/nw52/LICENSE) | [MIT](https://github.com/tauri-apps/tauri/blob/dev/LICENSE) | [MIT](https://github.com/nodegui/nodegui/blob/master/LICENSE) | [MIT](https://github.com/neutralinojs/neutralinojs/blob/master/LICENSE) | [MIT](https://github.com/wailsapp/wails/blob/master/LICENSE) | [BSD 3-Clause](https://github.com/flutter/flutter/blob/master/LICENSE) | [MIT](https://github.com/dotnet/maui/blob/main/LICENSE) |
| **Developer Dependencies** | [Node.js, Electron NPM Package](https://www.electronjs.org/docs/tutorial/quick-start#prerequisites) | [Node.js, NW.JS SDK](https://nwjs.readthedocs.io/en/latest/For%20Users/Getting%20Started/) | [C++ Compiler, Node.js, Rustc, Cargo](https://tauri.studio/docs/getting-started/prerequisites/) | [Cmake, make, Node.js, NodeGUI NPM Package](https://docs.nodegui.org/docs/guides/getting-started/#developer-environment) | [Node.js, Neu NPM Package](https://neutralino.js.org/docs/#/gettingstarted/quickstart) | [Go 1.18+, Node 15+, Wails](https://wails.io/docs/gettingstarted/installation) | [Flutter SDK, Visual Studio 2019 / Clang](https://flutter.dev/desktop#requirements) | [.Net SDK, Visual Studio (optional), WebView2 (optional), Xcode (optional)](https://github.com/dotnet/maui/wiki/Getting-Started) |
| **User Dependencies** | None | None | None | None | None | None | None | None |
| **Dependencies / modules support** | npm & node.js native addons | npm & node.js native addons | cargo (back), npm (front) | npm & node.js native addons | ❌ | Gomod (back), npm (front) | pub.dev | NuGet |
| **Engine** | Chromium | Webkit, Chromium | WRY (WebKitGTK for Linux, WebKit for MacOS, Webview2 for Windows) | Qt | WebkitGTK+ | Webkit |  Flutter engine | .NET MAUI |
| **Integrated updater ?** | [Official](https://www.electronjs.org/fr/docs/latest/api/auto-updater) | [Community](https://docs.nwjs.io/en/latest/For%20Users/Advanced/Autoupdates/) | [Official](https://tauri.app/fr/v1/guides/distribution/updater/) | [No](https://github.com/nodegui/nodegui/issues/678) | [Official](https://neutralino.js.org/docs/how-to/auto-updater/) | [Planned](https://github.com/wailsapp/wails/issues/1178) | No, but there are community solutions | No
| **Automated Tests** | Standard node.js tests (back-end) or [Webdriver/Playwright (UI)](https://www.electronjs.org/docs/latest/tutorial/automated-testing) | Standard node.js tests (back-end) or [Webdriver(UI)](https://docs.nwjs.io/en/latest/For%20Users/Advanced/Test%20with%20ChromeDriver/) | Cargo (back-end) or [Webdriver (UI)](https://tauri.app/v1/guides/testing/webdriver/introduction) | ? | ? | ? | [Integrated](https://docs.flutter.dev/testing) | [Standard C# tests (back-end), no official solution for UI](https://learn.microsoft.com/en-us/dotnet/architecture/maui/unit-testing) |

## Operating systems support

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Developement Environment** | ***Windows*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***MacOS*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Linux*** | ✔️<sup>1</sup> | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| **Target Environment** | ***Windows*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***MacOS*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Linux*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | Soon |
| | ***Android*** | ❌ | [Requested](https://github.com/nwjs/nw.js/issues/94) | Soon<sup>2</sup> | ❌ | ❌ | ❌ | ✔️ | ✔️ |
| | ***iOS*** | ❌ | ❌ | In progress<sup>2</sup> | ❌ | ❌ | ❌ | ✔️ | ✔️ |
| | ***tvOS*** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✔️ |
| | ***Web*** | ❌ | ❌ | ❌ | ❌ | ✔️<sup>3</sup> | ❌ | ✔️ | ❌ |

**<sup>1</sup>**: Linux 32 Bit support dropped  
**<sup>2</sup>**: https://github.com/tauri-apps/tauri#platforms  
**<sup>3</sup>**: Uses [modes](https://neutralino.js.org/docs/configuration/modes/) to generate web apps  

## Benchmarks

**See [benchmarks.json](https://github.com/Elanis/web-to-desktop-framework-comparison/blob/main/runner/benchmarks.json) to get more informations about following data.**

*Note:* These benchmarks are done on Github CI, there are measures to have measurements more accurates (e.g. multiple runs), but it will never exactly be accurate, as it totally depends on system load and resources. You should read these tables as comparision between frameworks on a same OS/Arch/App with a margin of error.



# 01-empty-app

See source in [benchmark/01-empty-app](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/01-empty-app/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈230MB | ≈334MB | ≈3MB | ≈171MB | ≈2MB | ? | ? | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈206MB | ≈301MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈230MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈374MB | ≈512MB | ≈5MB | ? | ≈1MB | ? | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈351MB | ? | ? | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈236MB | ≈446MB | ≈3MB | ≈67MB | ≈1MB | ≈6MB | ? | N/A<sup>1</sup>|
| ***Linux (x86)*** | ? | ≈445MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈174MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈241MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | ? | N/A<sup>1</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈4109ms | ≈43220ms | ≈507144ms | ≈13439ms | ≈866ms | ? | ? | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈4109ms | ≈43220ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈4109ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈3996ms | ≈43220ms | ≈460705ms | ? | ≈679ms | ? | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈3996ms | ? | ? | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈5689ms | ≈43220ms | ≈298388ms | ≈9753ms | ≈679ms | ≈28275ms | ? | N/A<sup>1</sup>|
| ***Linux (x86)*** | ? | ≈43220ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈5689ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈5689ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈679ms | ? | ? | N/A<sup>1</sup>|

### Memory Usage  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈57MB (Debug) => ≈84MB (Release) | ≈89MB (Debug) => ≈57MB (Release) | ≈44MB (Debug) => ≈25MB (Release) | ≈118MB (Debug) | ≈64MB (Debug) | ? | ≈304MB (Debug) | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈64MB (Debug) => ≈63MB (Release) | ≈97MB (Debug) => ≈80MB (Release) | ≈51MB (Debug) => ≈29MB (Release) | ≈121MB (Debug) | ≈79MB (Debug) => ≈28MB (Release) | ? | ≈201MB (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈154MB (Debug) => ≈152MB (Release) | ≈80MB (Debug) => ≈5MB (Release) | ≈100MB (Debug) => ≈72MB (Release) | ≈153MB (Debug) | ≈201MB (Debug) => ≈215MB (Release) | ≈210MB (Debug) => ≈189MB (Release) | ≈388MB (Debug) | N/A<sup>1</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈308ms (Release) | ≈785ms (Release) | ≈737ms (Release) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈1793ms (Debug) => ≈821ms (Release) | ≈2223ms (Release) | ≈8670ms (Debug) => ≈903ms (Release) | ? | ≈2983ms (Debug) => ≈1160ms (Release) | ? | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈727ms (Debug) => ≈355ms (Release) | ? | ≈256279ms (Debug) | ? | ≈1477ms (Debug) => ≈466ms (Release) | ≈4664ms (Debug) => ≈383ms (Release) | ? | N/A<sup>1</sup>|

**<sup>1</sup>**: Benchmark WIP  



# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈230MB | ≈330MB | ≈3MB | ≈171MB | ≈2MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈206MB | ≈298MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈230MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈374MB | ≈504MB | ≈5MB | ? | ≈1MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈351MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈236MB | ? | ≈6MB | ≈67MB | ≈1MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈437MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈174MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈241MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈5432ms | ≈42103ms | ≈613720ms | ≈17732ms | ≈643ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈5432ms | ≈42103ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈5432ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈5227ms | ≈42103ms | ≈321697ms | ? | ≈1019ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈5227ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈2602ms | ? | ≈376866ms | ≈9766ms | ≈1019ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈42103ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈2602ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈2602ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1019ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈62MB (Debug) => ≈81MB (Release) | ≈74MB (Debug) => ≈39MB (Release) | ≈41MB (Debug) => ≈23MB (Release) | ≈110MB (Debug) | ≈51MB (Debug) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈66MB (Debug) => ≈63MB (Release) | ≈73MB (Debug) => ≈79MB (Release) | ≈48MB (Debug) => ≈27MB (Release) | ≈120MB (Debug) | ≈72MB (Debug) => ≈27MB (Release) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈151MB (Debug) => ≈149MB (Release) | ≈88MB (Debug) | ≈106MB (Debug) => ≈74MB (Release) | ≈151MB (Debug) | ≈200MB (Debug) => ≈216MB (Release) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈400ms (Release) | ≈919ms (Release) | ≈499ms (Release) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈2096ms (Debug) => ≈845ms (Release) | ≈1941ms (Release) | ≈8145ms (Debug) => ≈777ms (Release) | ? | ≈3007ms (Debug) => ≈779ms (Release) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈649ms (Debug) => ≈346ms (Release) | ? | ≈43799ms (Debug) | ? | ≈1973ms (Debug) => ≈487ms (Release) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

**<sup>1</sup>**: Frameless mode not supported yet  
**<sup>2</sup>**: Frameless mode not working  



## Future content

TODO:
- WebGL Support
- Build constraints
- Source code protection
- Modules support (npm, native, etc.)

Benchmarks ideas:
 - BabylonJS scene
 - spreadsheet
 - IDE
