
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
| **Github stars** | 116.2k | 91.2k | 40.6k | 27.6k | 9k | 7.7k | 169.5k | 22.6k |
| **Forks** | 16k | 2.8k | 3.9k | 1.3k | 0.3k | 0.4k | 28.3k | 1.8k |
| **Creation date** | 2013 | 2019 | 2011 | 2019 | 2019 | 2018 | 2018 | 2020 |
| **Last Update** | 4/2025 | 4/2025 | 4/2025 | 3/2025 | 2/2025 | 4/2025 | 4/2025 | 4/2025 |
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
| | ***Android*** | ❌ | ✔️ | [Requested](https://github.com/nwjs/nw.js/issues/94) | [Requested](https://github.com/wailsapp/wails/issues/1481)| ❌ | ❌  | ✔️ | ✔️ |
| | ***iOS*** | ❌ | ✔️ | ❌ | [Requested](https://github.com/wailsapp/wails/issues/1482) | ❌ | ❌ | ✔️ | ✔️ |
| | ***tvOS*** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✔️ |
| | ***Web*** | ❌ | ❌ | ❌ | ❌ | ❌ | ✔️<sup>2</sup> | ✔️ | ❌ |

**<sup>1</sup>**: Linux 32-bit support dropped  
**<sup>3</sup>**: Uses [modes](https://neutralino.js.org/docs/configuration/modes/) to generate web apps  

## Benchmarks

**See [benchmarks.json](https://github.com/Elanis/web-to-desktop-framework-comparison/blob/main/runner/benchmarks.json) to get more information about the following data.**

*Note:* These benchmarks are done on GitHub CI. There are ways to make measurements more accurate (e.g., multiple runs), but they will never be perfectly accurate, as they totally depend on system load and resources. You should read these tables as a comparison between frameworks for the same OS, architecture, and app, with a margin of error.



# 01-empty-app

See source in [benchmark/01-empty-app](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/01-empty-app/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈295MB | ≈3MB | ≈438MB | ≈10MB | ≈171MB | ≈2MB | ≈24MB | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈262MB | ? | ≈393MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈298MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈454MB | ? | ≈605MB | ? | ? | ≈1MB | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈434MB | ≈4MB | ≈551MB | ≈7MB | ? | ≈2MB | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈290MB | ≈3MB | ≈528MB | ≈8MB | ≈75MB | ≈1MB | ? | N/A<sup>1</sup>|
| ***Linux (x86)*** | ? | ? | ≈535MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈223MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈295MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | N/A<sup>1</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3765ms | ≈255309ms | ≈14225ms | ≈5320ms | ≈9302ms | ≈241ms | ≈35544ms | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈3765ms | ? | ≈14225ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈3765ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈1223ms | ? | ≈5410ms | ? | ? | ≈329ms | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈1223ms | ≈116305ms | ≈5410ms | ≈22067ms | ? | ≈241ms | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈1418ms | ≈235010ms | ≈20351ms | ≈26158ms | ≈6344ms | ≈241ms | ? | N/A<sup>1</sup>|
| ***Linux (x86)*** | ? | ? | ≈20351ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈1418ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈1418ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈241ms | ? | N/A<sup>1</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈356MB (Debug) => ≈257MB (Release) | ≈419MB (Debug) => ≈270MB (Release) | ≈158MB (Debug) => ≈295MB (Release) | ≈498MB (Debug) => ≈273MB (Release) | ≈187MB (Debug) | ≈480MB (Debug) => ≈432MB (Release) | ≈786MB (Debug) => ≈57MB (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈509MB (Debug) => ≈408MB (Release) | ≈214MB (Debug) => ≈67MB (Release) | ≈704MB (Debug) => ≈525MB (Release) | ≈268MB (Debug) => ≈77MB (Release) | ≈157MB (Debug) | ≈126MB (Debug) | ≈333MB (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈721MB (Debug) => ≈604MB (Release) | ≈630MB (Debug) => ≈94MB (Release) | ≈574MB (Debug) => ≈841MB (Release) | ≈623MB (Debug) => ≈404MB (Release) | ≈285MB (Debug) | ≈962MB (Debug) => ≈893MB (Release) | ≈536MB (Debug) | N/A<sup>1</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈166MB (Debug) => ≈86MB (Release) | ≈352MB (Debug) => ≈160MB (Release) | ≈345MB (Debug) => ≈138MB (Release) | ≈346MB (Debug) => ≈163MB (Release) | ≈134MB (Debug) | ≈305MB (Debug) => ≈282MB (Release) | ≈748MB (Debug) => ≈29MB (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈165MB (Debug) => ≈142MB (Release) | ≈51MB (Debug) => ≈84MB (Release) | ≈332MB (Debug) => ≈178MB (Release) | ≈206MB (Debug) => ≈80MB (Release) | ≈87MB (Debug) | ≈106MB (Debug) | ≈806MB (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈135MB (Debug) => ≈66MB (Release) | ≈300MB (Debug) => ≈18MB (Release) | ≈434MB (Debug) => ≈164MB (Release) | ≈270MB (Debug) => ≈91MB (Release) | ≈94MB (Debug) | ≈439MB (Debug) => ≈348MB (Release) | ≈526MB (Debug) | N/A<sup>1</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈628ms (Debug) => ≈227ms (Release) | ≈7175ms (Debug) => ≈502ms (Release) | ≈8032ms (Debug) => ≈625ms (Release) | ≈5670ms (Debug) => ≈491ms (Release) | ? | ? | ≈10440ms (Debug) => ≈68ms (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈356ms (Debug) => ≈249ms (Release) | ≈5272ms (Debug) => ≈1791ms (Release) | ≈3358ms (Debug) => ≈688ms (Release) | ≈4270ms (Debug) => ≈1754ms (Release) | ? | ≈1831ms (Debug) | ≈23532ms (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈407ms (Debug) => ≈272ms (Release) | ≈34977ms (Debug) => ≈25279ms (Release) | ≈5381ms (Debug) => ≈386ms (Release) | ≈2965ms (Debug) => ≈219ms (Release) | ? | ≈411ms (Debug) => ≈274ms (Release) | ≈28818ms (Debug) | N/A<sup>1</sup>|

**<sup>1</sup>**: Benchmark WIP (See [#319](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/319))  



# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈295MB | ≈3MB | ≈438MB | ≈10MB | ≈171MB | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈262MB | ? | ≈393MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈298MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈454MB | ? | ≈605MB | ? | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈434MB | ≈4MB | ≈551MB | ≈7MB | ? | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈285MB | ≈3MB | ≈521MB | ≈8MB | ≈75MB | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ? | ≈527MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈219MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈289MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈4144ms | ≈248614ms | ≈14790ms | ≈5251ms | ≈8808ms | ≈173ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈4144ms | ? | ≈14790ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈4144ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈2461ms | ? | ≈6937ms | ? | ? | ≈345ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈2461ms | ≈120763ms | ≈6937ms | ≈22662ms | ? | ≈173ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈1406ms | ≈224319ms | ≈25869ms | ≈26130ms | ≈6268ms | ≈173ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ? | ≈25869ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈1406ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈1406ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈173ms | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈358MB (Debug) => ≈253MB (Release) | ≈356MB (Debug) => ≈271MB (Release) | ≈190MB (Debug) => ≈297MB (Release) | ≈507MB (Debug) => ≈272MB (Release) | ≈174MB (Debug) | ≈482MB (Debug) => ≈432MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈469MB (Debug) => ≈367MB (Release) | ≈213MB (Debug) => ≈63MB (Release) | ≈692MB (Debug) => ≈527MB (Release) | ≈257MB (Debug) => ≈65MB (Release) | ≈157MB (Debug) | ≈124MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈714MB (Debug) => ≈593MB (Release) | ≈634MB (Debug) => ≈94MB (Release) | ≈446MB (Debug) => ≈836MB (Release) | ≈619MB (Debug) => ≈404MB (Release) | ≈286MB (Debug) | ≈962MB (Debug) => ≈894MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈166MB (Debug) => ≈116MB (Release) | ≈233MB (Debug) => ≈158MB (Release) | ≈339MB (Debug) => ≈144MB (Release) | ≈351MB (Debug) => ≈163MB (Release) | ≈113MB (Debug) | ≈312MB (Debug) => ≈287MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈225MB (Debug) => ≈122MB (Release) | ≈78MB (Debug) => ≈85MB (Release) | ≈314MB (Debug) => ≈189MB (Release) | ≈190MB (Debug) => ≈83MB (Release) | ≈86MB (Debug) | ≈106MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈131MB (Debug) => ≈89MB (Release) | ≈290MB (Debug) => ≈20MB (Release) | ≈380MB (Debug) => ≈153MB (Release) | ≈275MB (Debug) => ≈88MB (Release) | ≈118MB (Debug) | ≈431MB (Debug) => ≈379MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈639ms (Debug) => ≈221ms (Release) | ? | ≈7911ms (Debug) => ≈608ms (Release) | ≈5644ms (Debug) => ≈479ms (Release) | ≈4947ms (Debug) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈652ms (Debug) => ≈344ms (Release) | ≈5551ms (Debug) => ≈2108ms (Release) | ≈4879ms (Debug) => ≈1431ms (Release) | ≈4482ms (Debug) => ≈1900ms (Release) | ? | ≈2224ms (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈403ms (Debug) => ≈268ms (Release) | ≈35231ms (Debug) => ≈25254ms (Release) | ≈5443ms (Debug) => ≈385ms (Release) | ≈2933ms (Debug) => ≈211ms (Release) | ? | ≈410ms (Debug) => ≈275ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

**<sup>1</sup>**: Frameless mode not supported yet  
**<sup>2</sup>**: Frameless mode not working  



## Future content

See [Issues](https://github.com/Elanis/web-to-desktop-framework-comparison/issues) and [Pull requests](https://github.com/Elanis/web-to-desktop-framework-comparison/pulls). You can participate by proposing new issues, or by filling them!

## Contributors

[List of contributors to this repository](https://github.com/Elanis/web-to-desktop-framework-comparison/graphs/contributors)
