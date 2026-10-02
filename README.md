
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
| **Github stars** | 122.9k | 110.8k | 41.2k | 36.1k | 9.2k | 8.6k | 178.8k | 23.3k |
| **Forks** | 17.5k | 3.9k | 3.9k | 1.8k | 0.3k | 0.5k | 31.1k | 2k |
| **Creation date** | 2013 | 2019 | 2011 | 2019 | 2019 | 2018 | 2018 | 2020 |
| **Last Update** | 9/2026 | 9/2026 | 8/2026 | 9/2026 | 5/2026 | 9/2026 | 9/2026 | 9/2026 |
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
| ***Windows (x64)*** | ≈385MB | ≈3MB | ≈563MB | ≈11MB | ≈171MB | ≈2MB | ≈25MB | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈306MB | ? | ≈494MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈383MB | ? | ≈545MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈326MB | ? | ≈454MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈320MB | ≈5MB | ≈416MB | ≈8MB | ? | ≈2MB | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈296MB | ≈4MB | ≈526MB | ≈9MB | ≈171MB | ≈2MB | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈270MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈301MB | ? | ≈526MB | ? | ? | ≈3MB | ? | N/A<sup>1</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈10371ms | ≈234276ms | ≈8445ms | ≈7310ms | ≈2266ms | ≈245ms | ≈36386ms | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈7730ms | ? | ≈8445ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈10371ms | ? | ≈8445ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈2131ms | ? | ≈5755ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈2131ms | ≈128676ms | ≈5755ms | ≈16859ms | ? | ≈245ms | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈1627ms | ≈233736ms | ≈6330ms | ≈18209ms | ≈830ms | ≈245ms | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈990ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈1627ms | ? | ≈6330ms | ? | ? | ≈245ms | ? | N/A<sup>1</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈365MB (Debug) => ≈279MB (Release) | ≈454MB (Debug) => ≈307MB (Release) | ≈227MB (Debug) => ≈461MB (Release) | ≈530MB (Debug) => ≈317MB (Release) | ≈31MB (Debug) | ≈548MB (Debug) => ≈487MB (Release) | ≈880MB (Debug) => ≈103MB (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈460MB (Debug) => ≈364MB (Release) | ≈231MB (Debug) => ≈96MB (Release) | ≈1GB (Debug) => ≈865MB (Release) | ≈307MB (Debug) => ≈100MB (Release) | ≈5MB (Debug) | ≈181MB (Debug) | ≈828MB (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈676MB (Debug) => ≈589MB (Release) | ≈553MB (Debug) => ≈94MB (Release) | ≈1GB (Debug) => ≈1GB (Release) | ≈598MB (Debug) => ≈360MB (Release) | ≈31MB (Debug) | ≈914MB (Debug) => ≈820MB (Release) | ≈567MB (Debug) | N/A<sup>1</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈219MB (Debug) => ≈100MB (Release) | ≈217MB (Debug) => ≈187MB (Release) | ≈278MB (Debug) => ≈272MB (Release) | ≈367MB (Debug) => ≈206MB (Release) | ≈53MB (Debug) | ≈337MB (Debug) => ≈316MB (Release) | ≈822MB (Debug) => ≈83MB (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈60MB (Debug) => ≈101MB (Release) | ≈-81420288B (Debug) => ≈77MB (Release) | ≈571MB (Debug) => ≈321MB (Release) | ≈200MB (Debug) => ≈77MB (Release) | ≈4MB (Debug) | ≈131MB (Debug) => ≈522KB (Release) | ≈635MB (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈134MB (Debug) => ≈83MB (Release) | ≈180MB (Debug) => ≈16MB (Release) | ≈690MB (Debug) => ≈230MB (Release) | ≈253MB (Debug) => ≈58MB (Release) | ≈1MB (Debug) | ≈353MB (Debug) => ≈280MB (Release) | ≈550MB (Debug) | N/A<sup>1</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈530ms (Debug) => ≈153ms (Release) | ≈4678ms (Debug) => ≈576ms (Release) | ≈9003ms (Debug) => ≈609ms (Release) | ≈6174ms (Debug) => ≈537ms (Release) | ? | ? | ≈20915ms (Debug) => ≈1611ms (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈635ms (Debug) => ≈582ms (Release) | ≈4863ms (Debug) => ≈1412ms (Release) | ≈4474ms (Debug) => ≈627ms (Release) | ≈4173ms (Debug) => ≈1396ms (Release) | ? | ≈1434ms (Debug) | ≈18983ms (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈339ms (Debug) => ≈199ms (Release) | ≈32080ms (Debug) => ≈30331ms (Release) | ≈4809ms (Debug) => ≈510ms (Release) | ≈3483ms (Debug) => ≈253ms (Release) | ? | ≈518ms (Debug) => ≈332ms (Release) | ≈30925ms (Debug) | N/A<sup>1</sup>|

**<sup>1</sup>**: Benchmark WIP (See [#319](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/319))  



# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈385MB | ≈3MB | ≈563MB | ≈11MB | ≈171MB | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈306MB | ? | ≈494MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈383MB | ? | ≈545MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈326MB | ? | ≈454MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈320MB | ≈5MB | ≈416MB | ≈8MB | ? | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈296MB | ≈4MB | ≈526MB | ≈9MB | ≈171MB | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈270MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈301MB | ? | ≈526MB | ? | ? | ≈3MB | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈10790ms | ≈217135ms | ≈10919ms | ≈6768ms | ≈3103ms | ≈223ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈7533ms | ? | ≈10919ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈10790ms | ? | ≈10919ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈1741ms | ? | ≈5054ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈1741ms | ≈128404ms | ≈5054ms | ≈17006ms | ? | ≈223ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈1235ms | ≈237634ms | ≈6756ms | ≈19007ms | ≈847ms | ≈223ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈1040ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈1235ms | ? | ≈6756ms | ? | ? | ≈223ms | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈374MB (Debug) => ≈275MB (Release) | ≈455MB (Debug) => ≈310MB (Release) | ≈236MB (Debug) => ≈462MB (Release) | ≈536MB (Debug) => ≈317MB (Release) | ≈25MB (Debug) | ≈555MB (Debug) => ≈494MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈477MB (Debug) => ≈365MB (Release) | ≈229MB (Debug) => ≈89MB (Release) | ≈1GB (Debug) => ≈840MB (Release) | ≈300MB (Debug) => ≈93MB (Release) | ≈2MB (Debug) | ≈180MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈711MB (Debug) => ≈589MB (Release) | ≈554MB (Debug) => ≈94MB (Release) | ≈1GB (Debug) => ≈1GB (Release) | ≈599MB (Debug) => ≈361MB (Release) | ≈31MB (Debug) | ≈912MB (Debug) => ≈821MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈188MB (Debug) => ≈113MB (Release) | ≈211MB (Debug) => ≈196MB (Release) | ≈300MB (Debug) => ≈265MB (Release) | ≈357MB (Debug) => ≈211MB (Release) | ≈51MB (Debug) | ≈339MB (Debug) => ≈346MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈141MB (Debug) => ≈59MB (Release) | ≈67MB (Debug) => ≈83MB (Release) | ≈537MB (Debug) => ≈328MB (Release) | ≈214MB (Debug) => ≈80MB (Release) | ≈2MB (Debug) | ≈119MB (Debug) => ≈450KB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈115MB (Debug) => ≈78MB (Release) | ≈172MB (Debug) => ≈9MB (Release) | ≈681MB (Debug) => ≈212MB (Release) | ≈250MB (Debug) => ≈49MB (Release) | ≈350KB (Debug) | ≈354MB (Debug) => ≈294MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈499ms (Debug) => ≈150ms (Release) | ≈4630ms (Debug) => ≈505ms (Release) | ≈8270ms (Debug) => ≈577ms (Release) | ≈5286ms (Debug) => ≈465ms (Release) | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈466ms (Debug) => ≈335ms (Release) | ≈2987ms (Debug) => ≈1306ms (Release) | ≈4129ms (Debug) => ≈617ms (Release) | ≈4341ms (Debug) => ≈1347ms (Release) | ? | ≈1568ms (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈351ms (Debug) => ≈206ms (Release) | ≈32100ms (Debug) => ≈30312ms (Release) | ≈4840ms (Debug) => ≈512ms (Release) | ≈3583ms (Debug) => ≈256ms (Release) | ? | ≈536ms (Debug) => ≈343ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

**<sup>1</sup>**: Frameless mode not supported yet  
**<sup>2</sup>**: Frameless mode not working  



## Future content

See [Issues](https://github.com/Elanis/web-to-desktop-framework-comparison/issues) and [Pull requests](https://github.com/Elanis/web-to-desktop-framework-comparison/pulls). You can participate by proposing new issues, or by filling them!

## Contributors

[List of contributors to this repository](https://github.com/Elanis/web-to-desktop-framework-comparison/graphs/contributors)
