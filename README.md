
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
| **Github stars** | 119.3k | 99.8k | 41.5k | 31.6k | 9.2k | 8.2k | 174.2k | 23.1k |
| **Forks** | 16.8k | 3.2k | 3.9k | 1.5k | 0.3k | 0.4k | 29.7k | 1.9k |
| **Creation date** | 2013 | 2019 | 2011 | 2019 | 2019 | 2018 | 2018 | 2020 |
| **Last Update** | 12/2025 | 12/2025 | 12/2025 | 12/2025 | 6/2025 | 12/2025 | 12/2025 | 12/2025 |
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
**<sup>2</sup>**: Uses [modes](https://neutralino.js.org/docs/configuration/modes/) to generate web apps  

## Benchmarks

**See [benchmarks.json](https://github.com/Elanis/web-to-desktop-framework-comparison/blob/main/runner/benchmarks.json) to get more information about the following data.**

*Note:* These benchmarks are done on GitHub CI. There are ways to make measurements more accurate (e.g., multiple runs), but they will never be perfectly accurate, as they totally depend on system load and resources. You should read these tables as a comparison between frameworks for the same OS, architecture, and app, with a margin of error.



# 01-empty-app

See source in [benchmark/01-empty-app](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/01-empty-app/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈341MB | ≈3MB | ≈516MB | ≈10MB | ≈171MB | ≈2MB | ≈24MB | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈280MB | ? | ≈458MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈343MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈481MB | ? | ≈670MB | ? | ? | ≈1MB | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈457MB | ≈4MB | ≈604MB | ≈7MB | ? | ≈2MB | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈296MB | ≈3MB | ≈620MB | ≈8MB | ≈75MB | ≈1MB | ? | N/A<sup>1</sup>|
| ***Linux (x86)*** | ? | ? | ≈625MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈228MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈301MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | N/A<sup>1</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈16320ms | ≈238221ms | ≈10171ms | ≈6011ms | ≈9424ms | ≈252ms | ≈40575ms | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈16320ms | ? | ≈10171ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈16320ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈1683ms | ? | ≈6628ms | ? | ? | ≈329ms | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈1683ms | ≈244105ms | ≈6628ms | ≈34459ms | ? | ≈252ms | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈1249ms | ≈242811ms | ≈9123ms | ≈27507ms | ≈6330ms | ≈252ms | ? | N/A<sup>1</sup>|
| ***Linux (x86)*** | ? | ? | ≈9123ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈1249ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈1249ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈252ms | ? | N/A<sup>1</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈6MB (Debug) => ≈4MB (Release) | ≈6MB (Debug) => ≈4MB (Release) | ≈6MB (Debug) => ≈4MB (Release) | ≈4MB (Debug) => ≈4MB (Release) | ≈6MB (Debug) | ≈6MB (Debug) => ≈4MB (Release) | ≈7MB (Debug) => ≈4MB (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈412MB (Debug) => ≈308MB (Release) | ≈225MB (Debug) => ≈72MB (Release) | ≈531MB (Debug) => ≈543MB (Release) | ≈283MB (Debug) => ≈87MB (Release) | ≈160MB (Debug) | ≈166MB (Debug) | ≈787MB (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈726MB (Debug) => ≈608MB (Release) | ≈623MB (Debug) => ≈94MB (Release) | ≈347MB (Debug) => ≈898MB (Release) | ≈618MB (Debug) => ≈395MB (Release) | ≈287MB (Debug) | ≈970MB (Debug) => ≈881MB (Release) | ≈593MB (Debug) | N/A<sup>1</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈181MB (Debug) => ≈133MB (Release) | ≈293MB (Debug) => ≈176MB (Release) | ≈232MB (Debug) => ≈87MB (Release) | ≈329MB (Debug) => ≈181MB (Release) | ≈116MB (Debug) | ≈352MB (Debug) => ≈310MB (Release) | ≈744MB (Debug) => ≈32MB (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈189MB (Debug) => ≈63MB (Release) | ≈76MB (Debug) => ≈72MB (Release) | ≈289MB (Debug) => ≈187MB (Release) | ≈185MB (Debug) => ≈71MB (Release) | ≈74MB (Debug) | ≈126MB (Debug) | ≈616MB (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈122MB (Debug) => ≈83MB (Release) | ≈233MB (Debug) => ≈21MB (Release) | ≈355MB (Debug) => ≈174MB (Release) | ≈256MB (Debug) => ≈82MB (Release) | ≈102MB (Debug) | ≈448MB (Debug) => ≈390MB (Release) | ≈533MB (Debug) | N/A<sup>1</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈703ms (Debug) => ≈286ms (Release) | ≈4686ms (Debug) => ≈600ms (Release) | ≈9622ms (Debug) => ≈625ms (Release) | ≈6162ms (Debug) => ≈560ms (Release) | ≈7453ms (Debug) | ? | ≈9358ms (Debug) => ≈105ms (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈581ms (Debug) => ≈407ms (Release) | ≈5393ms (Debug) => ≈1814ms (Release) | ≈6492ms (Debug) => ≈677ms (Release) | ≈5635ms (Debug) => ≈3194ms (Release) | ? | ≈2759ms (Debug) | ≈18195ms (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈410ms (Debug) => ≈279ms (Release) | ≈26985ms (Debug) => ≈25294ms (Release) | ≈6052ms (Debug) => ≈475ms (Release) | ≈3122ms (Debug) => ≈219ms (Release) | ? | ≈452ms (Debug) => ≈284ms (Release) | ≈28493ms (Debug) | N/A<sup>1</sup>|

**<sup>1</sup>**: Benchmark WIP (See [#319](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/319))  



# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈341MB | ≈3MB | ≈516MB | ≈10MB | ≈171MB | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈280MB | ? | ≈458MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈343MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈481MB | ? | ≈670MB | ? | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈457MB | ≈4MB | ≈604MB | ≈7MB | ? | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈296MB | ≈4MB | ≈620MB | ≈8MB | ≈75MB | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ? | ≈626MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈228MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈301MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈4851ms | ≈274078ms | ≈11247ms | ≈6005ms | ≈9632ms | ≈370ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈4851ms | ? | ≈11247ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈4851ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈2919ms | ? | ≈7906ms | ? | ? | ≈345ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈2919ms | ≈236759ms | ≈7906ms | ≈30224ms | ? | ≈370ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈1495ms | ≈222143ms | ≈10758ms | ≈26883ms | ≈6673ms | ≈370ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ? | ≈10758ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈1495ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈1495ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈370ms | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈6MB (Debug) => ≈4MB (Release) | ≈6MB (Debug) => ≈4MB (Release) | ≈6MB (Debug) => ≈4MB (Release) | ≈4MB (Debug) => ≈4MB (Release) | ≈6MB (Debug) | ≈6MB (Debug) => ≈4MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈413MB (Debug) => ≈308MB (Release) | ≈222MB (Debug) => ≈69MB (Release) | ≈837MB (Debug) => ≈539MB (Release) | ≈281MB (Debug) => ≈83MB (Release) | ≈159MB (Debug) | ≈163MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈723MB (Debug) => ≈603MB (Release) | ≈623MB (Debug) => ≈94MB (Release) | ≈571MB (Debug) => ≈899MB (Release) | ≈618MB (Debug) => ≈395MB (Release) | ≈287MB (Debug) | ≈973MB (Debug) => ≈881MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈165MB (Debug) => ≈109MB (Release) | ≈260MB (Debug) => ≈170MB (Release) | ≈485MB (Debug) => ≈149MB (Release) | ≈296MB (Debug) => ≈181MB (Release) | ≈117MB (Debug) | ≈367MB (Debug) => ≈301MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈184MB (Debug) => ≈97MB (Release) | ≈69MB (Debug) => ≈74MB (Release) | ≈467MB (Debug) => ≈189MB (Release) | ≈194MB (Debug) => ≈79MB (Release) | ≈89MB (Debug) | ≈124MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈134MB (Debug) => ≈87MB (Release) | ≈230MB (Debug) => ≈11MB (Release) | ≈558MB (Debug) => ≈176MB (Release) | ≈272MB (Debug) => ≈83MB (Release) | ≈109MB (Debug) | ≈454MB (Debug) => ≈389MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈744ms (Debug) => ≈299ms (Release) | ≈5265ms (Debug) => ≈659ms (Release) | ≈11512ms (Debug) => ≈739ms (Release) | ≈6090ms (Debug) => ≈566ms (Release) | ≈4984ms (Debug) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈529ms (Debug) => ≈592ms (Release) | ≈5246ms (Debug) => ≈1671ms (Release) | ≈4520ms (Debug) => ≈671ms (Release) | ≈5403ms (Debug) => ≈1570ms (Release) | ? | ≈1869ms (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈401ms (Debug) => ≈269ms (Release) | ≈26882ms (Debug) => ≈25259ms (Release) | ≈6436ms (Debug) => ≈471ms (Release) | ≈3039ms (Debug) => ≈210ms (Release) | ? | ≈443ms (Debug) => ≈274ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

**<sup>1</sup>**: Frameless mode not supported yet  
**<sup>2</sup>**: Frameless mode not working  



## Future content

See [Issues](https://github.com/Elanis/web-to-desktop-framework-comparison/issues) and [Pull requests](https://github.com/Elanis/web-to-desktop-framework-comparison/pulls). You can participate by proposing new issues, or by filling them!

## Contributors

[List of contributors to this repository](https://github.com/Elanis/web-to-desktop-framework-comparison/graphs/contributors)
