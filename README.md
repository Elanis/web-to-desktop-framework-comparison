
# Web to Desktop framework comparison

This repository has been made to create an objective comparison of multiple frameworks that allow us to "transform" our web apps to desktop applications.

## Table Of Content
- [Major characteristics](#major-characteristics)
- [Operating systems](#operating-systems)
- [Benchmarks](#benchmarks)
  * [01 - Empty app](#01---empty-app)
  * [02 - Empty app (Frameless)](#02---empty-app-frameless)

## Major characteristics

| | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Github stars** | 114.3k | 84.3k | 40.4k | 25.2k | 8.9k | 7.5k | 166.1k | 22.2k | 22.2k |
| **Forks** | 15.4k | 2.5k | 3.9k | 1.2k | 0.3k | 0.4k | 27.4k | 1.7k | 1.7k |
| **Creation date** | 2013 | 2019 | 2011 | 2019 | 2019 | 2018 | 2018 | 2020 |
| **Last Update** | 11/2024 | 11/2024 | 10/2024 | 11/2024 | 10/2024 | 11/2024 | 11/2024 | 11/2024 | 11/2024 |
| **Framework Language** | C++, JS, Objective-C, Python | Rust | C++ | Go | C++ | C++ | C, C++, Dart | C# |
| **Usage Language - Back** | JS, C++ | Rust | JS, C++ | Go | JS, C++ | JS, C++ | Dart | C# |
| **Usage Language - Front** | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | Dart | C# |
| **License** | [MIT](https://github.com/electron/electron/blob/master/LICENSE) | [MIT](https://github.com/tauri-apps/tauri/blob/dev/LICENSE) | [MIT](https://github.com/nwjs/nw.js/blob/nw52/LICENSE) | [MIT](https://github.com/wailsapp/wails/blob/master/LICENSE) | [MIT](https://github.com/nodegui/nodegui/blob/master/LICENSE) | [MIT](https://github.com/neutralinojs/neutralinojs/blob/master/LICENSE) | [BSD 3-Clause](https://github.com/flutter/flutter/blob/master/LICENSE) | [MIT](https://github.com/dotnet/maui/blob/main/LICENSE) |
| **Developer Dependencies** | [Node.js, Electron NPM Package](https://www.electronjs.org/docs/tutorial/quick-start#prerequisites) | [C++ Compiler, Node.js, Rustc, Cargo](https://tauri.studio/docs/getting-started/prerequisites/) | [Node.js, NW.JS SDK](https://nwjs.readthedocs.io/en/latest/For%20Users/Getting%20Started/) | [Go 1.18+, Node 15+, Wails](https://wails.io/docs/gettingstarted/installation) | [Cmake, make, Node.js, NodeGUI NPM Package](https://docs.nodegui.org/docs/guides/getting-started/#developer-environment) | [Node.js, Neu NPM Package](https://neutralino.js.org/docs/#/gettingstarted/quickstart) | [Flutter SDK, Visual Studio 2019 / Clang](https://flutter.dev/desktop#requirements) | [.Net SDK, Visual Studio (optional), WebView2 (optional), Xcode (optional)](https://github.com/dotnet/maui/wiki/Getting-Started) |
| **User Dependencies** | None | None | None | None | None | None | None | None |
| **Dependencies / modules support** | npm & node.js native addons | cargo (back), npm (front) | npm & node.js native addons | Gomod (back), npm (front) | npm & node.js native addons | ❌ | pub.dev | NuGet |
| **Engine** | Chromium | WRY (WebKitGTK for Linux, WebKit for MacOS, Webview2 for Windows) | Webkit, Chromium | [WebKit2gtk on Linux, Webview2 on Windows and WkWebview on Mac](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/611#issuecomment-1817605354) | Qt | WebkitGTK+ |  Flutter engine | .NET MAUI |

See [GRAPHS.md](https://github.com/Elanis/web-to-desktop-framework-comparison/blob/main/GRAPHS.md) for stars/forks visualization.

## Features

| | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Integrated updater?** | [Official](https://www.electronjs.org/fr/docs/latest/api/auto-updater) | [Official](https://tauri.app/fr/v1/guides/distribution/updater/) | [Community](https://docs.nwjs.io/en/latest/For%20Users/Advanced/Autoupdates/) | [Planned](https://github.com/wailsapp/wails/issues/1178) | [No](https://github.com/nodegui/nodegui/issues/678) | [Official](https://neutralino.js.org/docs/how-to/auto-updater/) | No, but there are community solutions | No
| **Automated Tests** | Standard node.js tests (back-end) or [Webdriver/Playwright (UI)](https://www.electronjs.org/docs/latest/tutorial/automated-testing) | Cargo (back-end) or [Webdriver (UI)](https://tauri.app/v1/guides/testing/webdriver/introduction) | Standard node.js tests (back-end) or [Webdriver(UI)](https://docs.nwjs.io/en/latest/For%20Users/Advanced/Test%20with%20ChromeDriver/) | ? | ? | ? | [Integrated](https://docs.flutter.dev/testing) | [Standard C# tests (back-end), no official solution for UI](https://learn.microsoft.com/en-us/dotnet/architecture/maui/unit-testing) |
| **WebGL Support** | Yes | Yes | Yes | Yes | ? | Yes | [Yes](https://docs.flutter.dev/platform-integration/web/renderers) | Yes, but not on all flavors |

## Front-end frameworks/technologies

| | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Angular** | Yes | [Yes, official via Vite](https://tauri.app/v1/guides/getting-started/setup/vite) | Yes | [Yes, community](https://github.com/irustm/angular-nodegui) | Yes | [Yes](https://wails.io/docs/guides/angular/) | No | No
| **NextJS** | ? | [Yes, official](https://tauri.app/v1/guides/getting-started/setup/next-js) | ? | ? | ? | [Yes](https://wails.io/docs/community/templates/) | No | No
| **Preact** | Yes | [Yes, official via Vite](https://tauri.app/v1/guides/getting-started/setup/vite) | Yes | ? | Yes | Yes | No | No
| **Qwik** | Yes | [Yes, official](https://tauri.app/v1/guides/getting-started/setup/qwik) | Yes | ? | Yes | Yes | No | No
| **React** | Yes | [Yes, official via Vite](https://tauri.app/v1/guides/getting-started/setup/vite) | Yes | [Yes, official but EOL](https://github.com/nodegui/react-nodegui) | [Yes](https://neutralino.js.org/docs/getting-started/using-frontend-libraries#using-any-frontend-library) | [Yes](https://github.com/wailsapp/wails-react-scripts) | No | No
| **Svelte** | Yes | [Yes, official via sveltekit](https://tauri.app/v1/guides/getting-started/setup/sveltekit) or [Vite](https://tauri.app/v1/guides/getting-started/setup/vite) | Yes | [Yes, official](https://github.com/nodegui/svelte-nodegui) | Yes | [Yes](https://wails.io/docs/guides/sveltekit) | No | No
| **Vue** | Yes | [Yes, official via Vite](https://tauri.app/v1/guides/getting-started/setup/vite) | Yes | [Yes, official](https://github.com/nodegui/vue-nodegui) | Yes | [Yes](https://wails.io/docs/community/templates/) | No | No
| **Vite** | Yes | [Yes, official](https://tauri.app/v1/guides/getting-started/setup/vite) | Yes | ? | Yes | [Yes](https://wails.io/docs/community/templates/) | No | No

## Operating systems support

|  |  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Development Environment** | ***Windows*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***MacOS*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Linux*** | ✔️<sup>1</sup> | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| **Target Environment** | ***Windows*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***MacOS*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Linux*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | Soon |
| | ***Android*** | ❌ | Soon<sup>2</sup> | [Requested](https://github.com/nwjs/nw.js/issues/94) | [Requested](https://github.com/wailsapp/wails/issues/1481)| ❌ | ❌  | ✔️ | ✔️ |
| | ***iOS*** | ❌ | In progress<sup>2</sup> | ❌ | [Requested](https://github.com/wailsapp/wails/issues/1482) | ❌ | ❌ | ✔️ | ✔️ |
| | ***tvOS*** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✔️ |
| | ***Web*** | ❌ | ❌ | ❌ | ❌ | ❌ | ✔️<sup>3</sup> | ✔️ | ❌ |

**<sup>1</sup>**: Linux 32-bit support dropped  
**<sup>2</sup>**: https://github.com/tauri-apps/tauri#platforms  
**<sup>3</sup>**: Uses [modes](https://neutralino.js.org/docs/configuration/modes/) to generate web apps  

## Benchmarks

**See [benchmarks.json](https://github.com/Elanis/web-to-desktop-framework-comparison/blob/main/runner/benchmarks.json) to get more information about the following data.**

*Note:* These benchmarks are done on GitHub CI. There are ways to make measurements more accurate (e.g., multiple runs), but they will never be perfectly accurate, as they totally depend on system load and resources. You should read these tables as a comparison between frameworks for the same OS, architecture, and app, with a margin of error.



# 01-empty-app

See source in [benchmark/01-empty-app](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/01-empty-app/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈280MB | ≈1MB | ≈427MB | ≈9MB | ≈171MB | ≈2MB | ≈24MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈248MB | ? | ≈384MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈295MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈433MB | ? | ≈595MB | ? | ? | ≈1MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈410MB | ≈3MB | ≈543MB | ≈7MB | ? | ≈2MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈1GB | ≈2MB | ≈520MB | ≈7MB | ≈75MB | ≈1MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ? | ≈523MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈221MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈289MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3128ms | ≈170440ms | ≈7033ms | ≈5922ms | ≈8268ms | ≈170ms | ≈33589ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈3128ms | ? | ≈7033ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈3128ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈4264ms | ? | ≈7100ms | ? | ? | ≈329ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈4264ms | ≈67454ms | ≈7100ms | ≈23988ms | ? | ≈170ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈2996ms | ≈208151ms | ≈8013ms | ≈29913ms | ≈6516ms | ≈170ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ? | ≈8013ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈2996ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈2996ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈170ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈351MB (Debug) => ≈252MB (Release) | ≈509MB (Debug) => ≈423MB (Release) | ≈271MB (Debug) => ≈289MB (Release) | ≈408MB (Debug) => ≈261MB (Release) | ≈191MB (Debug) | ≈455MB (Debug) => ≈415MB (Release) | ≈784MB (Debug) => ≈57MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈416MB (Debug) => ≈319MB (Release) | ≈189MB (Debug) => ≈66MB (Release) | ≈734MB (Debug) => ≈509MB (Release) | ≈254MB (Debug) => ≈77MB (Release) | ≈146MB (Debug) | ≈122MB (Debug) | ≈396MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈710MB (Debug) => ≈594MB (Release) | ≈310MB (Debug) => ≈94MB (Release) | ≈791MB (Debug) => ≈877MB (Release) | ≈646MB (Debug) => ≈431MB (Release) | ≈296MB (Debug) | ≈1GB (Debug) => ≈969MB (Release) | ≈514MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈169MB (Debug) => ≈85MB (Release) | ≈196MB (Debug) => ≈155MB (Release) | ≈343MB (Debug) => ≈126MB (Release) | ≈274MB (Debug) => ≈163MB (Release) | ≈156MB (Debug) | ≈292MB (Debug) => ≈253MB (Release) | ≈749MB (Debug) => ≈41MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈155MB (Debug) => ≈112MB (Release) | ≈129MB (Debug) => ≈84MB (Release) | ≈376MB (Debug) => ≈174MB (Release) | ≈216MB (Debug) => ≈85MB (Release) | ≈78MB (Debug) | ≈108MB (Debug) | ≈1GB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈140MB (Debug) => ≈99MB (Release) | ≈97MB (Debug) => ≈24MB (Release) | ≈397MB (Debug) => ≈200MB (Release) | ≈251MB (Debug) => ≈161MB (Release) | ≈106MB (Debug) | ≈516MB (Debug) => ≈495MB (Release) | ≈403MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈564ms (Debug) => ≈209ms (Release) | ≈2344ms (Debug) => ≈416ms (Release) | ≈6640ms (Debug) => ≈562ms (Release) | ≈7610ms (Debug) => ≈406ms (Release) | ≈9172ms (Debug) | ? | ≈8710ms (Debug) => ≈68ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈374ms (Debug) => ≈228ms (Release) | ≈3922ms (Debug) => ≈1771ms (Release) | ≈4321ms (Debug) => ≈722ms (Release) | ≈4922ms (Debug) => ≈1770ms (Release) | ? | ≈1849ms (Debug) | ≈24879ms (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈421ms (Debug) => ≈274ms (Release) | ≈26826ms (Debug) => ≈25294ms (Release) | ≈5261ms (Debug) => ≈438ms (Release) | ≈3024ms (Debug) => ≈251ms (Release) | ? | ≈488ms (Debug) => ≈342ms (Release) | ≈28999ms (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|

**<sup>1</sup>**: Benchmark WIP (See [#319](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/319))  
**<sup>2</sup>**: Benchmark WIP (See [#319](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/319))  



# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈280MB | ≈1MB | ≈427MB | ≈9MB | ≈171MB | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (x86)*** | ≈248MB | ? | ≈384MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (ARM64)*** | ≈295MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈433MB | ? | ≈595MB | ? | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈410MB | ≈3MB | ≈543MB | ≈7MB | ? | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈1GB | ≈2MB | ≈520MB | ≈7MB | ≈75MB | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x86)*** | ? | ? | ≈523MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARMv7l)*** | ≈221MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARM64)*** | ≈289MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3102ms | ≈187051ms | ≈22946ms | ≈6303ms | ≈8810ms | ≈177ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (x86)*** | ≈3102ms | ? | ≈22946ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (ARM64)*** | ≈3102ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈1868ms | ? | ≈6177ms | ? | ? | ≈345ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈1868ms | ≈66604ms | ≈6177ms | ≈23308ms | ? | ≈177ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈2932ms | ≈214049ms | ≈38340ms | ≈30160ms | ≈6625ms | ≈177ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x86)*** | ? | ? | ≈38340ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARMv7l)*** | ≈2932ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARM64)*** | ≈2932ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈177ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈348MB (Debug) => ≈250MB (Release) | ≈336MB (Debug) => ≈255MB (Release) | ≈158MB (Debug) => ≈287MB (Release) | ≈737MB (Debug) => ≈261MB (Release) | ≈165MB (Debug) | ≈630MB (Debug) => ≈416MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈416MB (Debug) => ≈320MB (Release) | ≈186MB (Debug) => ≈63MB (Release) | ≈749MB (Debug) => ≈505MB (Release) | ≈247MB (Debug) => ≈70MB (Release) | ≈146MB (Debug) | ≈120MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈709MB (Debug) => ≈590MB (Release) | ≈310MB (Debug) => ≈94MB (Release) | ≈397MB (Debug) => ≈877MB (Release) | ≈642MB (Debug) => ≈433MB (Release) | ≈295MB (Debug) | ≈1GB (Debug) => ≈976MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈167MB (Debug) => ≈101MB (Release) | ≈230MB (Debug) => ≈153MB (Release) | ≈297MB (Debug) => ≈130MB (Release) | ≈239MB (Debug) => ≈164MB (Release) | ≈114MB (Debug) | ≈294MB (Debug) => ≈275MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈166MB (Debug) => ≈118MB (Release) | ≈140MB (Debug) => ≈85MB (Release) | ≈388MB (Debug) => ≈174MB (Release) | ≈218MB (Debug) => ≈87MB (Release) | ≈84MB (Debug) | ≈111MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈138MB (Debug) => ≈102MB (Release) | ≈104MB (Debug) => ≈24MB (Release) | ≈286MB (Debug) => ≈202MB (Release) | ≈248MB (Debug) => ≈160MB (Release) | ≈101MB (Debug) | ≈516MB (Debug) => ≈508MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈592ms (Debug) => ≈214ms (Release) | ≈2420ms (Debug) => ≈438ms (Release) | ≈7143ms (Debug) => ≈575ms (Release) | ≈8024ms (Debug) => ≈430ms (Release) | ≈4610ms (Debug) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈365ms (Debug) => ≈228ms (Release) | ≈3870ms (Debug) => ≈1747ms (Release) | ≈3671ms (Debug) => ≈664ms (Release) | ≈4594ms (Debug) => ≈1756ms (Release) | ? | ≈1850ms (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈416ms (Debug) => ≈270ms (Release) | ≈26836ms (Debug) => ≈25298ms (Release) | ≈5644ms (Debug) => ≈436ms (Release) | ≈3171ms (Debug) => ≈256ms (Release) | ? | ≈497ms (Debug) => ≈349ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

**<sup>1</sup>**: Frameless mode not supported yet  
**<sup>2</sup>**: Frameless mode not working  
**<sup>3</sup>**: Frameless mode not working  



## Future content

See [Issues](https://github.com/Elanis/web-to-desktop-framework-comparison/issues) and [Pull requests](https://github.com/Elanis/web-to-desktop-framework-comparison/pulls). You can participate by proposing new issues, or by filling them!

## Contributors

[List of contributors to this repository](https://github.com/Elanis/web-to-desktop-framework-comparison/graphs/contributors)
