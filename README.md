# Web to Desktop framework comparison

This repository has been made to create an objective comparison of multiple frameworks that allow us to "transform" our web apps to desktop applications.

## Table Of Content
- [Major characteristics](#major-characteristics)
- [Operating systems](#operating-systems)
- [Benchmarks](#benchmarks)
  * [01 - Empty app](#01---empty-app)
  * [02 - Empty app (Frameless)](#02---empty-app-frameless)

## Major characteristics

| | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Github stars** | 113.1k | 40.2k | 80.6k | 8.8k | 7.4k | 23.8k | 163.9k | 21.9k | 21.9k |
| **Forks** | 15.2k | 3.9k | 2.4k | 0.3k | 0.4k | 1.1k | 27k | 1.7k | 1.7k |
| **Creation date** | 2013 | 2011 | 2019 | 2019 | 2018 | 2019 | 2018 | 2020 |
| **Last Update** | 8/2024 | 7/2024 | 8/2024 | 7/2024 | 8/2024 | 8/2024 | 8/2024 | 8/2024 | 8/2024 |
| **Framework Language** | C++, JS, Objective-C, Python | C++ | Rust | C++ | C++ | Go | C, C++, Dart | C# |
| **Usage Language - Back** | JS, C++ | JS, C++ | Rust | JS, C++ | JS, C++ | Go | Dart | C# |
| **Usage Language - Front** | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | Dart | C# |
| **License** | [MIT](https://github.com/electron/electron/blob/master/LICENSE) | [MIT](https://github.com/nwjs/nw.js/blob/nw52/LICENSE) | [MIT](https://github.com/tauri-apps/tauri/blob/dev/LICENSE) | [MIT](https://github.com/nodegui/nodegui/blob/master/LICENSE) | [MIT](https://github.com/neutralinojs/neutralinojs/blob/master/LICENSE) | [MIT](https://github.com/wailsapp/wails/blob/master/LICENSE) | [BSD 3-Clause](https://github.com/flutter/flutter/blob/master/LICENSE) | [MIT](https://github.com/dotnet/maui/blob/main/LICENSE) |
| **Developer Dependencies** | [Node.js, Electron NPM Package](https://www.electronjs.org/docs/tutorial/quick-start#prerequisites) | [Node.js, NW.JS SDK](https://nwjs.readthedocs.io/en/latest/For%20Users/Getting%20Started/) | [C++ Compiler, Node.js, Rustc, Cargo](https://tauri.studio/docs/getting-started/prerequisites/) | [Cmake, make, Node.js, NodeGUI NPM Package](https://docs.nodegui.org/docs/guides/getting-started/#developer-environment) | [Node.js, Neu NPM Package](https://neutralino.js.org/docs/#/gettingstarted/quickstart) | [Go 1.18+, Node 15+, Wails](https://wails.io/docs/gettingstarted/installation) | [Flutter SDK, Visual Studio 2019 / Clang](https://flutter.dev/desktop#requirements) | [.Net SDK, Visual Studio (optional), WebView2 (optional), Xcode (optional)](https://github.com/dotnet/maui/wiki/Getting-Started) |
| **User Dependencies** | None | None | None | None | None | None | None | None |
| **Dependencies / modules support** | npm & node.js native addons | npm & node.js native addons | cargo (back), npm (front) | npm & node.js native addons | ❌ | Gomod (back), npm (front) | pub.dev | NuGet |
| **Engine** | Chromium | Webkit, Chromium | WRY (WebKitGTK for Linux, WebKit for MacOS, Webview2 for Windows) | Qt | WebkitGTK+ | [WebKit2gtk on Linux, Webview2 on Windows and WkWebview on Mac](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/611#issuecomment-1817605354) |  Flutter engine | .NET MAUI |

See [GRAPHS.md](https://github.com/Elanis/web-to-desktop-framework-comparison/blob/main/GRAPHS.md) for stars/forks visualization.

## Features

| | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Integrated updater?** | [Official](https://www.electronjs.org/fr/docs/latest/api/auto-updater) | [Community](https://docs.nwjs.io/en/latest/For%20Users/Advanced/Autoupdates/) | [Official](https://tauri.app/fr/v1/guides/distribution/updater/) | [No](https://github.com/nodegui/nodegui/issues/678) | [Official](https://neutralino.js.org/docs/how-to/auto-updater/) | [Planned](https://github.com/wailsapp/wails/issues/1178) | No, but there are community solutions | No
| **Automated Tests** | Standard node.js tests (back-end) or [Webdriver/Playwright (UI)](https://www.electronjs.org/docs/latest/tutorial/automated-testing) | Standard node.js tests (back-end) or [Webdriver(UI)](https://docs.nwjs.io/en/latest/For%20Users/Advanced/Test%20with%20ChromeDriver/) | Cargo (back-end) or [Webdriver (UI)](https://tauri.app/v1/guides/testing/webdriver/introduction) | ? | ? | ? | [Integrated](https://docs.flutter.dev/testing) | [Standard C# tests (back-end), no official solution for UI](https://learn.microsoft.com/en-us/dotnet/architecture/maui/unit-testing) |
| **WebGL Support** | Yes | Yes | Yes | ? | Yes | Yes | [Yes](https://docs.flutter.dev/platform-integration/web/renderers) | Yes, but not on all flavors |

## Front-end frameworks/technologies

| | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Angular** | Yes | Yes | [Yes, official via Vite](https://tauri.app/v1/guides/getting-started/setup/vite) | [Yes, community](https://github.com/irustm/angular-nodegui) | Yes | [Yes](https://wails.io/docs/guides/angular/) | No | No
| **NextJS** | ? | ? | [Yes, official](https://tauri.app/v1/guides/getting-started/setup/next-js) | ? | ? | [Yes](https://wails.io/docs/community/templates/) | No | No
| **Preact** | Yes | Yes | [Yes, official via Vite](https://tauri.app/v1/guides/getting-started/setup/vite) | ? | Yes | Yes | No | No
| **Qwik** | Yes | Yes | [Yes, official](https://tauri.app/v1/guides/getting-started/setup/qwik) | ? | Yes | Yes | No | No
| **React** | Yes | Yes | [Yes, official via Vite](https://tauri.app/v1/guides/getting-started/setup/vite) | [Yes, official but EOL](https://github.com/nodegui/react-nodegui) | [Yes](https://neutralino.js.org/docs/getting-started/using-frontend-libraries#using-any-frontend-library) | [Yes](https://github.com/wailsapp/wails-react-scripts) | No | No
| **Svelte** | Yes | Yes | [Yes, official via sveltekit](https://tauri.app/v1/guides/getting-started/setup/sveltekit) or [Vite](https://tauri.app/v1/guides/getting-started/setup/vite) | [Yes, official](https://github.com/nodegui/svelte-nodegui) | Yes | [Yes](https://wails.io/docs/guides/sveltekit) | No | No
| **Vue** | Yes | Yes | [Yes, official via Vite](https://tauri.app/v1/guides/getting-started/setup/vite) | [Yes, official](https://github.com/nodegui/vue-nodegui) | Yes | [Yes](https://wails.io/docs/community/templates/) | No | No
| **Vite** | Yes | Yes | [Yes, official](https://tauri.app/v1/guides/getting-started/setup/vite) | ? | Yes | [Yes](https://wails.io/docs/community/templates/) | No | No

## Operating systems support

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Development Environment** | ***Windows*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***MacOS*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Linux*** | ✔️<sup>1</sup> | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| **Target Environment** | ***Windows*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***MacOS*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Linux*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | Soon |
| | ***Android*** | ❌ | [Requested](https://github.com/nwjs/nw.js/issues/94) | Soon<sup>2</sup> | ❌ | ❌ | [Requested](https://github.com/wailsapp/wails/issues/1481) | ✔️ | ✔️ |
| | ***iOS*** | ❌ | ❌ | In progress<sup>2</sup> | ❌ | ❌ | [Requested](https://github.com/wailsapp/wails/issues/1482) | ✔️ | ✔️ |
| | ***tvOS*** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✔️ |
| | ***Web*** | ❌ | ❌ | ❌ | ❌ | ✔️<sup>3</sup> | ❌ | ✔️ | ❌ |

**<sup>1</sup>**: Linux 32-bit support dropped  
**<sup>2</sup>**: https://github.com/tauri-apps/tauri#platforms  
**<sup>3</sup>**: Uses [modes](https://neutralino.js.org/docs/configuration/modes/) to generate web apps  

## Benchmarks

**See [benchmarks.json](https://github.com/Elanis/web-to-desktop-framework-comparison/blob/main/runner/benchmarks.json) to get more information about the following data.**

*Note:* These benchmarks are done on GitHub CI. There are ways to make measurements more accurate (e.g., multiple runs), but they will never be perfectly accurate, as they totally depend on system load and resources. You should read these tables as a comparison between frameworks for the same OS, architecture, and app, with a margin of error.



# 01-empty-app

See source in [benchmark/01-empty-app](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/01-empty-app/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈269MB | ≈412MB | ≈1MB | ≈171MB | ≈2MB | ≈8MB | ≈24MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈240MB | ≈376MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈277MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈424MB | ≈579MB | ? | ? | ≈1MB | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈396MB | ≈531MB | ≈3MB | ? | ≈2MB | ≈6MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈271MB | ≈510MB | ≈2MB | ≈75MB | ≈1MB | ≈7MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈515MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈204MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈276MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3300ms | ≈20861ms | ≈182311ms | ≈8823ms | ≈232ms | ≈6010ms | ≈32829ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈3300ms | ≈20861ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈3300ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈3236ms | ≈7455ms | ? | ? | ≈329ms | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈3236ms | ≈7455ms | ≈70097ms | ? | ≈232ms | ≈29215ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈1611ms | ≈40922ms | ≈224474ms | ≈6360ms | ≈232ms | ≈28322ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈40922ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈1611ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈1611ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈232ms | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈348MB (Debug) => ≈243MB (Release) | ≈151MB (Debug) => ≈275MB (Release) | ≈338MB (Debug) => ≈255MB (Release) | ≈197MB (Debug) | ≈457MB (Debug) => ≈415MB (Release) | ≈417MB (Debug) => ≈261MB (Release) | ≈785MB (Debug) => ≈57MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈402MB (Debug) => ≈316MB (Release) | ≈635MB (Debug) | ≈188MB (Debug) => ≈67MB (Release) | ≈146MB (Debug) | ≈127MB (Debug) | ≈247MB (Debug) => ≈72MB (Release) | ≈498MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈707MB (Debug) => ≈591MB (Release) | ≈1GB (Debug) => ≈853MB (Release) | ≈304MB (Debug) => ≈93MB (Release) | ≈294MB (Debug) | ≈996MB (Debug) => ≈924MB (Release) | ≈645MB (Debug) => ≈436MB (Release) | ≈539MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈125MB (Debug) => ≈91MB (Release) | ≈297MB (Debug) => ≈112MB (Release) | ≈202MB (Debug) => ≈155MB (Release) | ≈164MB (Debug) | ≈291MB (Debug) => ≈266MB (Release) | ≈267MB (Debug) => ≈163MB (Release) | ≈745MB (Debug) => ≈38MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈152MB (Debug) => ≈93MB (Release) | ≈252MB (Debug) | ≈140MB (Debug) => ≈86MB (Release) | ≈87MB (Debug) | ≈111MB (Debug) | ≈256MB (Debug) => ≈86MB (Release) | ≈548MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈137MB (Debug) => ≈102MB (Release) | ≈401MB (Debug) => ≈203MB (Release) | ≈107MB (Debug) => ≈22MB (Release) | ≈97MB (Debug) | ≈502MB (Debug) => ≈476MB (Release) | ≈256MB (Debug) => ≈172MB (Release) | ≈434MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈560ms (Debug) => ≈207ms (Release) | ≈5781ms (Debug) => ≈550ms (Release) | ≈2331ms (Debug) => ≈415ms (Release) | ≈18041ms (Debug) | ? | ≈7562ms (Debug) => ≈418ms (Release) | ≈8601ms (Debug) => ≈67ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈672ms (Debug) => ≈306ms (Release) | ≈3539ms (Debug) | ≈3938ms (Debug) => ≈1823ms (Release) | ? | ≈1868ms (Debug) | ≈4533ms (Debug) => ≈2024ms (Release) | ≈24882ms (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈415ms (Debug) => ≈266ms (Release) | ≈4543ms (Debug) => ≈412ms (Release) | ≈27277ms (Debug) => ≈25758ms (Release) | ? | ≈507ms (Debug) => ≈332ms (Release) | ≈2872ms (Debug) => ≈245ms (Release) | ≈28961ms (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|

**<sup>1</sup>**: Benchmark WIP (See [#319](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/319))  
**<sup>2</sup>**: Benchmark WIP (See [#319](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/319))  



# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈269MB | ≈412MB | ≈1MB | ≈171MB | ≈2MB | ≈8MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (x86)*** | ≈240MB | ≈376MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (ARM64)*** | ≈277MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈424MB | ≈579MB | ? | ? | ≈1MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈396MB | ≈531MB | ≈3MB | ? | ≈2MB | ≈6MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈271MB | ≈510MB | ≈2MB | ≈75MB | ≈1MB | ≈7MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x86)*** | ? | ≈515MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARMv7l)*** | ≈204MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARM64)*** | ≈276MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3472ms | ≈100802ms | ≈187034ms | ≈8551ms | ≈238ms | ≈5965ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (x86)*** | ≈3472ms | ≈100802ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (ARM64)*** | ≈3472ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈1962ms | ≈5873ms | ? | ? | ≈345ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈1962ms | ≈5873ms | ≈78473ms | ? | ≈238ms | ≈28520ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈1622ms | ≈74918ms | ≈212214ms | ≈6414ms | ≈238ms | ≈28599ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x86)*** | ? | ≈74918ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARMv7l)*** | ≈1622ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARM64)*** | ≈1622ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈238ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈337MB (Debug) => ≈239MB (Release) | ≈142MB (Debug) => ≈272MB (Release) | ≈338MB (Debug) => ≈255MB (Release) | ≈165MB (Debug) | ≈455MB (Debug) => ≈416MB (Release) | ≈409MB (Debug) => ≈262MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈410MB (Debug) => ≈315MB (Release) | ≈636MB (Debug) | ≈184MB (Debug) => ≈63MB (Release) | ≈145MB (Debug) | ≈125MB (Debug) | ≈246MB (Debug) => ≈70MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈701MB (Debug) => ≈587MB (Release) | ≈169MB (Debug) => ≈852MB (Release) | ≈306MB (Debug) => ≈93MB (Release) | ≈294MB (Debug) | ≈993MB (Debug) => ≈922MB (Release) | ≈647MB (Debug) => ≈436MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈160MB (Debug) => ≈103MB (Release) | ≈243MB (Debug) => ≈123MB (Release) | ≈228MB (Debug) => ≈152MB (Release) | ≈114MB (Debug) | ≈294MB (Debug) => ≈265MB (Release) | ≈271MB (Debug) => ≈164MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈139MB (Debug) => ≈120MB (Release) | ≈252MB (Debug) | ≈112MB (Debug) => ≈83MB (Release) | ≈87MB (Debug) | ≈112MB (Debug) | ≈269MB (Debug) => ≈84MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈137MB (Debug) => ≈99MB (Release) | ≈65MB (Debug) => ≈197MB (Release) | ≈100MB (Debug) => ≈24MB (Release) | ≈95MB (Debug) | ≈503MB (Debug) => ≈473MB (Release) | ≈256MB (Debug) => ≈165MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈568ms (Debug) => ≈203ms (Release) | ≈5791ms (Debug) => ≈564ms (Release) | ≈2384ms (Debug) => ≈422ms (Release) | ≈4390ms (Debug) | ? | ≈7576ms (Debug) => ≈417ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈329ms (Debug) => ≈280ms (Release) | ≈3620ms (Debug) | ≈3988ms (Debug) => ≈2047ms (Release) | ? | ≈1871ms (Debug) | ≈5025ms (Debug) => ≈1777ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈412ms (Debug) => ≈262ms (Release) | ≈411ms (Release) | ≈27279ms (Debug) => ≈25753ms (Release) | ? | ≈507ms (Debug) => ≈336ms (Release) | ≈2910ms (Debug) => ≈241ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

**<sup>1</sup>**: Frameless mode not supported yet  
**<sup>2</sup>**: Frameless mode not working  
**<sup>3</sup>**: Frameless mode not working  



## Future content

See [Issues](https://github.com/Elanis/web-to-desktop-framework-comparison/issues) and [Pull requests](https://github.com/Elanis/web-to-desktop-framework-comparison/pulls). You can participate by proposing new issues, or by filling them!

## Contributors

[List of contributors to this repository](https://github.com/Elanis/web-to-desktop-framework-comparison/graphs/contributors)
