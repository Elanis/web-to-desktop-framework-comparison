
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
| **Github stars** | 116.8k | 92.5k | 40.7k | 28.2k | 9.1k | 7.8k | 170.3k | 22.7k |
| **Forks** | 16k | 2.9k | 3.9k | 1.4k | 0.3k | 0.4k | 28.5k | 1.8k |
| **Creation date** | 2013 | 2019 | 2011 | 2019 | 2019 | 2018 | 2018 | 2020 |
| **Last Update** | 5/2025 | 5/2025 | 5/2025 | 5/2025 | 2/2025 | 4/2025 | 5/2025 | 5/2025 |
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
| ***Windows (x64)*** | ≈302MB | ≈3MB | ≈449MB | ≈10MB | ≈171MB | ≈2MB | ≈24MB | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈268MB | ? | ≈405MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈303MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈466MB | ? | ≈618MB | ? | ? | ≈1MB | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈444MB | ≈4MB | ≈558MB | ≈7MB | ? | ≈2MB | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈292MB | ≈3MB | ≈534MB | ≈8MB | ≈75MB | ≈1MB | ? | N/A<sup>1</sup>|
| ***Linux (x86)*** | ? | ? | ≈542MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈225MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈296MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | N/A<sup>1</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3582ms | ≈250293ms | ≈7245ms | ≈5081ms | ≈8516ms | ≈171ms | ≈35919ms | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈3582ms | ? | ≈7245ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈3582ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈2426ms | ? | ≈5525ms | ? | ? | ≈329ms | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈2426ms | ≈138253ms | ≈5525ms | ≈25061ms | ? | ≈171ms | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈1418ms | ≈248764ms | ≈17612ms | ≈26416ms | ≈6564ms | ≈171ms | ? | N/A<sup>1</sup>|
| ***Linux (x86)*** | ? | ? | ≈17612ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈1418ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈1418ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈171ms | ? | N/A<sup>1</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈346MB (Debug) => ≈257MB (Release) | ≈418MB (Debug) => ≈266MB (Release) | ≈261MB (Debug) => ≈293MB (Release) | ≈504MB (Debug) => ≈272MB (Release) | ≈180MB (Debug) | ≈479MB (Debug) => ≈431MB (Release) | ≈860MB (Debug) => ≈57MB (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈450MB (Debug) => ≈348MB (Release) | ≈214MB (Debug) => ≈66MB (Release) | ≈864MB (Debug) => ≈529MB (Release) | ≈267MB (Debug) => ≈77MB (Release) | ≈157MB (Debug) | ≈126MB (Debug) | ≈797MB (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈722MB (Debug) => ≈604MB (Release) | ≈629MB (Debug) => ≈94MB (Release) | ≈688MB (Debug) => ≈849MB (Release) | ≈624MB (Debug) => ≈404MB (Release) | ≈285MB (Debug) | ≈962MB (Debug) => ≈892MB (Release) | ≈569MB (Debug) | N/A<sup>1</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈138MB (Debug) => ≈86MB (Release) | ≈363MB (Debug) => ≈154MB (Release) | ≈471MB (Debug) => ≈123MB (Release) | ≈343MB (Debug) => ≈163MB (Release) | ≈146MB (Debug) | ≈285MB (Debug) => ≈273MB (Release) | ≈792MB (Debug) => ≈29MB (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈167MB (Debug) => ≈92MB (Release) | ≈60MB (Debug) => ≈83MB (Release) | ≈475MB (Debug) => ≈170MB (Release) | ≈214MB (Debug) => ≈80MB (Release) | ≈87MB (Debug) | ≈106MB (Debug) | ≈666MB (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈129MB (Debug) => ≈80MB (Release) | ≈266MB (Debug) => ≈18MB (Release) | ≈618MB (Debug) => ≈167MB (Release) | ≈283MB (Debug) => ≈85MB (Release) | ≈111MB (Debug) | ≈433MB (Debug) => ≈400MB (Release) | ≈537MB (Debug) | N/A<sup>1</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈621ms (Debug) => ≈229ms (Release) | ≈7488ms (Debug) => ≈507ms (Release) | ≈7409ms (Debug) => ≈471ms (Release) | ≈5546ms (Debug) => ≈482ms (Release) | ? | ? | ≈11617ms (Debug) => ≈69ms (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈429ms (Debug) => ≈294ms (Release) | ≈6242ms (Debug) => ≈1952ms (Release) | ≈3711ms (Debug) => ≈549ms (Release) | ≈5287ms (Debug) => ≈1844ms (Release) | ? | ≈1862ms (Debug) | ≈15742ms (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈410ms (Debug) => ≈273ms (Release) | ≈35296ms (Debug) => ≈25283ms (Release) | ≈5355ms (Debug) => ≈390ms (Release) | ≈3006ms (Debug) => ≈214ms (Release) | ? | ≈415ms (Debug) => ≈275ms (Release) | ≈30030ms (Debug) | N/A<sup>1</sup>|

**<sup>1</sup>**: Benchmark WIP (See [#319](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/319))  



# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈302MB | ≈3MB | ≈449MB | ≈10MB | ≈171MB | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈268MB | ? | ≈405MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈303MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈466MB | ? | ≈618MB | ? | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈444MB | ≈4MB | ≈558MB | ≈7MB | ? | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈292MB | ≈3MB | ≈534MB | ≈8MB | ≈75MB | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ? | ≈542MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈225MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈296MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3896ms | ≈256240ms | ≈7566ms | ≈5263ms | ≈9054ms | ≈177ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈3896ms | ? | ≈7566ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈3896ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈1387ms | ? | ≈5213ms | ? | ? | ≈345ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈1387ms | ≈115928ms | ≈5213ms | ≈22230ms | ? | ≈177ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈1576ms | ≈239282ms | ≈17507ms | ≈25999ms | ≈6482ms | ≈177ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ? | ≈17507ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈1576ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈1576ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈177ms | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈349MB (Debug) => ≈255MB (Release) | ≈577MB (Debug) => ≈265MB (Release) | ≈426MB (Debug) => ≈291MB (Release) | ≈504MB (Debug) => ≈273MB (Release) | ≈175MB (Debug) | ≈482MB (Debug) => ≈586MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈450MB (Debug) => ≈349MB (Release) | ≈211MB (Debug) => ≈63MB (Release) | ≈866MB (Debug) => ≈530MB (Release) | ≈264MB (Debug) => ≈74MB (Release) | ≈157MB (Debug) | ≈124MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈714MB (Debug) => ≈600MB (Release) | ≈630MB (Debug) => ≈94MB (Release) | ≈801MB (Debug) => ≈849MB (Release) | ≈622MB (Debug) => ≈404MB (Release) | ≈285MB (Debug) | ≈964MB (Debug) => ≈893MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈166MB (Debug) => ≈84MB (Release) | ≈360MB (Debug) => ≈156MB (Release) | ≈471MB (Debug) => ≈139MB (Release) | ≈356MB (Debug) => ≈165MB (Release) | ≈100MB (Debug) | ≈300MB (Debug) => ≈275MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈182MB (Debug) => ≈109MB (Release) | ≈89MB (Debug) => ≈85MB (Release) | ≈485MB (Debug) => ≈179MB (Release) | ≈209MB (Debug) => ≈84MB (Release) | ≈89MB (Debug) | ≈104MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈137MB (Debug) => ≈69MB (Release) | ≈217MB (Debug) => ≈19MB (Release) | ≈557MB (Debug) => ≈164MB (Release) | ≈272MB (Debug) => ≈90MB (Release) | ≈118MB (Debug) | ≈448MB (Debug) => ≈399MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈640ms (Debug) => ≈226ms (Release) | ≈7805ms (Debug) => ≈469ms (Release) | ≈7435ms (Debug) => ≈451ms (Release) | ≈5489ms (Debug) => ≈502ms (Release) | ≈5270ms (Debug) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈358ms (Debug) => ≈246ms (Release) | ≈5292ms (Debug) => ≈1797ms (Release) | ≈3134ms (Debug) => ≈508ms (Release) | ≈4317ms (Debug) => ≈1765ms (Release) | ? | ≈2142ms (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈402ms (Debug) => ≈265ms (Release) | ≈34921ms (Debug) => ≈25252ms (Release) | ≈5296ms (Debug) => ≈381ms (Release) | ≈2975ms (Debug) => ≈208ms (Release) | ? | ≈414ms (Debug) => ≈278ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

**<sup>1</sup>**: Frameless mode not supported yet  
**<sup>2</sup>**: Frameless mode not working  



## Future content

See [Issues](https://github.com/Elanis/web-to-desktop-framework-comparison/issues) and [Pull requests](https://github.com/Elanis/web-to-desktop-framework-comparison/pulls). You can participate by proposing new issues, or by filling them!

## Contributors

[List of contributors to this repository](https://github.com/Elanis/web-to-desktop-framework-comparison/graphs/contributors)
