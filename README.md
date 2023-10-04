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
| **Github stars** | 109k | 39.8k | 68.1k | 8.5k | 6.9k | 17.3k | 156.4k | 19.6k | 19.6k |
| **Forks** | 15k | 4k | 2k | 0.3k | 0.3k | 0.8k | 25.9k | 1.4k | 1.4k |
| **Creation date** | 2013 | 2011 | 2019 | 2019 | 2018 | 2019 | 2018 | 2020 |
| **Last Update** | 9/2023 | 8/2023 | 9/2023 | 8/2023 | 9/2023 | 9/2023 | 9/2023 | 9/2023 | 9/2023 |
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
| | ***Android*** | ❌ | [Requested](https://github.com/nwjs/nw.js/issues/94) | Soon<sup>2</sup> | ❌ | ❌ | [Requested](https://github.com/wailsapp/wails/issues/1481) | ✔️ | ✔️ |
| | ***iOS*** | ❌ | ❌ | In progress<sup>2</sup> | ❌ | ❌ | [Requested](https://github.com/wailsapp/wails/issues/1482) | ✔️ | ✔️ |
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

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈248MB | ≈354MB | ≈1MB | ≈171MB | ≈2MB | ≈8MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈220MB | ≈318MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈257MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈386MB | ≈531MB | ≈3MB | ? | ≈1MB | ≈7MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈369MB | ? | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈251MB | ≈474MB | ≈4MB | ≈75MB | ≈1MB | ≈6MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈473MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈188MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈258MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈4656ms | ≈30396ms | ≈296487ms | ≈12713ms | ≈866ms | ≈9938ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈4656ms | ≈30396ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈4656ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈8083ms | ≈30396ms | ≈170974ms | ? | ≈1028ms | ≈51183ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈8083ms | ? | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈2738ms | ≈30396ms | ≈367868ms | ≈11484ms | ≈1028ms | ≈47959ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈30396ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈2738ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈2738ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1028ms | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈381MB (Debug) => ≈243MB (Release) | ≈351MB (Debug) => ≈282MB (Release) | ≈136MB (Debug) => ≈29MB (Release) | ≈206MB (Debug) | ≈90MB (Debug) | ≈200MB (Debug) => ≈32MB (Release) | ≈736MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈306MB (Debug) => ≈204MB (Release) | ≈138MB (Debug) => ≈281MB (Release) | ≈153MB (Debug) => ≈32MB (Release) | ≈156MB (Debug) | ≈200MB (Debug) => ≈31MB (Release) | ≈214MB (Debug) => ≈35MB (Release) | ≈197MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈700MB (Debug) => ≈568MB (Release) | ≈178MB (Debug) => ≈14MB (Release) | ≈314MB (Debug) => ≈94MB (Release) | ≈309MB (Debug) | ≈883MB (Debug) => ≈769MB (Release) | ≈694MB (Debug) => ≈448MB (Release) | ≈21MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈187MB (Debug) => ≈65MB (Release) | ≈230MB (Debug) => ≈146MB (Release) | ≈210MB (Debug) => ≈133MB (Release) | ≈169MB (Debug) | ≈73MB (Debug) | ≈271MB (Debug) => ≈152MB (Release) | ≈704MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈164MB (Debug) => ≈141MB (Release) | ≈98MB (Debug) => ≈152MB (Release) | ≈263MB (Debug) => ≈-62191207B (Release) | ≈88MB (Debug) | ≈146MB (Debug) => ≈39MB (Release) | ≈214MB (Debug) => ≈41MB (Release) | ≈197MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈167MB (Debug) => ≈109MB (Release) | ≈77MB (Debug) => ≈918KB (Release) | ≈113MB (Debug) => ≈23MB (Release) | ≈106MB (Debug) | ≈455MB (Debug) => ≈400MB (Release) | ≈293MB (Debug) => ≈179MB (Release) | ≈16MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈1524ms (Debug) => ≈315ms (Release) | ≈733ms (Release) | ≈3625ms (Debug) => ≈621ms (Release) | ? | ? | ≈12087ms (Debug) => ≈626ms (Release) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈781ms (Debug) => ≈432ms (Release) | ≈1634ms (Release) | ≈4250ms (Debug) => ≈396ms (Release) | ? | ≈1935ms (Debug) => ≈464ms (Release) | ≈6585ms (Debug) => ≈419ms (Release) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈874ms (Debug) => ≈435ms (Release) | ? | ≈41379ms (Debug) | ? | ≈2199ms (Debug) => ≈554ms (Release) | ≈5556ms (Debug) => ≈417ms (Release) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

**<sup>1</sup>**: Benchmark WIP  
**<sup>2</sup>**: Benchmark WIP  



# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈248MB | ≈354MB | ≈1MB | ≈171MB | ≈2MB | ≈8MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (x86)*** | ≈220MB | ≈318MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (ARM64)*** | ≈257MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈386MB | ≈531MB | ≈3MB | ? | ≈1MB | ≈7MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈369MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈251MB | ≈474MB | ≈4MB | ≈75MB | ≈1MB | ≈6MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x86)*** | ? | ≈473MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARMv7l)*** | ≈188MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARM64)*** | ≈258MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈5558ms | ≈31826ms | ≈416697ms | ≈18145ms | ≈643ms | ≈14693ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (x86)*** | ≈5558ms | ≈31826ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (ARM64)*** | ≈5558ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈8142ms | ≈31826ms | ≈210804ms | ? | ≈929ms | ≈79993ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈8142ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈3264ms | ≈31826ms | ≈396530ms | ≈11657ms | ≈929ms | ≈44005ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x86)*** | ? | ≈31826ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARMv7l)*** | ≈3264ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARM64)*** | ≈3264ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈929ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈384MB (Debug) => ≈239MB (Release) | ≈327MB (Debug) => ≈284MB (Release) | ≈132MB (Debug) => ≈27MB (Release) | ≈171MB (Debug) | ≈88MB (Debug) | ≈199MB (Debug) => ≈32MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈295MB (Debug) => ≈203MB (Release) | ≈314MB (Debug) => ≈267MB (Release) | ≈149MB (Debug) => ≈29MB (Release) | ≈155MB (Debug) | ≈191MB (Debug) => ≈29MB (Release) | ≈208MB (Debug) => ≈32MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈694MB (Debug) => ≈563MB (Release) | ≈176MB (Debug) => ≈8MB (Release) | ≈315MB (Debug) => ≈94MB (Release) | ≈308MB (Debug) | ≈957MB (Debug) => ≈770MB (Release) | ≈692MB (Debug) => ≈455MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈186MB (Debug) => ≈72MB (Release) | ≈231MB (Debug) => ≈155MB (Release) | ≈207MB (Debug) => ≈131MB (Release) | ≈128MB (Debug) | ≈64MB (Debug) | ≈272MB (Debug) => ≈144MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈167MB (Debug) => ≈130MB (Release) | ≈215MB (Debug) => ≈117MB (Release) | ≈128MB (Debug) => ≈32MB (Release) | ≈96MB (Debug) | ≈134MB (Debug) => ≈30MB (Release) | ≈202MB (Debug) => ≈36MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈157MB (Debug) => ≈101MB (Release) | ≈67MB (Debug) => ≈2MB (Release) | ≈128MB (Debug) => ≈25MB (Release) | ≈106MB (Debug) | ≈497MB (Debug) => ≈394MB (Release) | ≈304MB (Debug) => ≈197MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈2160ms (Debug) => ≈413ms (Release) | ≈1499ms (Release) | ≈4785ms (Debug) => ≈809ms (Release) | ≈9618ms (Debug) | ? | ≈18346ms (Debug) => ≈865ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈2065ms (Debug) => ≈737ms (Release) | ≈1805ms (Release) | ≈5605ms (Debug) => ≈730ms (Release) | ? | ≈2426ms (Debug) => ≈724ms (Release) | ≈10716ms (Debug) => ≈878ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈966ms (Debug) => ≈453ms (Release) | ? | ≈42543ms (Debug) | ? | ≈2234ms (Debug) => ≈547ms (Release) | ≈5469ms (Debug) => ≈412ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

**<sup>1</sup>**: Frameless mode not supported yet  
**<sup>2</sup>**: Frameless mode not working  
**<sup>3</sup>**: Frameless mode not working  



## Future content

See [Issues](https://github.com/Elanis/web-to-desktop-framework-comparison/issues) and [Pull requests](https://github.com/Elanis/web-to-desktop-framework-comparison/pulls). You can participate by proposing new issues, of filling them !

## Contributors

[List of contributors to this repository](https://github.com/Elanis/web-to-desktop-framework-comparison/graphs/contributors)
