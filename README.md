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
| **Github stars** | 109.6k | 39.9k | 70.2k | 8.6k | 7k | 19k | 157.9k | 20.2k | 20.2k |
| **Forks** | 15.2k | 4k | 2.1k | 0.3k | 0.3k | 1k | 26.3k | 1.4k | 1.4k |
| **Creation date** | 2013 | 2011 | 2019 | 2019 | 2018 | 2019 | 2018 | 2020 |
| **Last Update** | 11/2023 | 11/2023 | 11/2023 | 11/2023 | 11/2023 | 11/2023 | 11/2023 | 11/2023 | 11/2023 |
| **Framework Language** | C++, JS, Objective-C, Python | C++ | Rust | C++ | C++ | Go | C, C++, Dart | C# |
| **Usage Language - Back** | JS, C++ | JS, C++ | Rust | JS, C++ | JS, C++ | Go | Dart | C# |
| **Usage Language - Front** | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | Dart | C# |
| **License** | [MIT](https://github.com/electron/electron/blob/master/LICENSE) | [MIT](https://github.com/nwjs/nw.js/blob/nw52/LICENSE) | [MIT](https://github.com/tauri-apps/tauri/blob/dev/LICENSE) | [MIT](https://github.com/nodegui/nodegui/blob/master/LICENSE) | [MIT](https://github.com/neutralinojs/neutralinojs/blob/master/LICENSE) | [MIT](https://github.com/wailsapp/wails/blob/master/LICENSE) | [BSD 3-Clause](https://github.com/flutter/flutter/blob/master/LICENSE) | [MIT](https://github.com/dotnet/maui/blob/main/LICENSE) |
| **Developer Dependencies** | [Node.js, Electron NPM Package](https://www.electronjs.org/docs/tutorial/quick-start#prerequisites) | [Node.js, NW.JS SDK](https://nwjs.readthedocs.io/en/latest/For%20Users/Getting%20Started/) | [C++ Compiler, Node.js, Rustc, Cargo](https://tauri.studio/docs/getting-started/prerequisites/) | [Cmake, make, Node.js, NodeGUI NPM Package](https://docs.nodegui.org/docs/guides/getting-started/#developer-environment) | [Node.js, Neu NPM Package](https://neutralino.js.org/docs/#/gettingstarted/quickstart) | [Go 1.18+, Node 15+, Wails](https://wails.io/docs/gettingstarted/installation) | [Flutter SDK, Visual Studio 2019 / Clang](https://flutter.dev/desktop#requirements) | [.Net SDK, Visual Studio (optional), WebView2 (optional), Xcode (optional)](https://github.com/dotnet/maui/wiki/Getting-Started) |
| **User Dependencies** | None | None | None | None | None | None | None | None |
| **Dependencies / modules support** | npm & node.js native addons | npm & node.js native addons | cargo (back), npm (front) | npm & node.js native addons | ❌ | Gomod (back), npm (front) | pub.dev | NuGet |
| **Engine** | Chromium | Webkit, Chromium | WRY (WebKitGTK for Linux, WebKit for MacOS, Webview2 for Windows) | Qt | WebkitGTK+ | Webkit |  Flutter engine | .NET MAUI |

## Features

| | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Integrated updater ?** | [Official](https://www.electronjs.org/fr/docs/latest/api/auto-updater) | [Community](https://docs.nwjs.io/en/latest/For%20Users/Advanced/Autoupdates/) | [Official](https://tauri.app/fr/v1/guides/distribution/updater/) | [No](https://github.com/nodegui/nodegui/issues/678) | [Official](https://neutralino.js.org/docs/how-to/auto-updater/) | [Planned](https://github.com/wailsapp/wails/issues/1178) | No, but there are community solutions | No
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
| ***Windows (x64)*** | ≈257MB | ≈354MB | ≈1MB | ≈171MB | ≈2MB | ≈8MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈228MB | ≈318MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈262MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈401MB | ≈531MB | ≈3MB | ? | ≈1MB | ≈7MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈380MB | ? | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈258MB | ≈474MB | ≈4MB | ≈75MB | ≈1MB | ≈6MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈473MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈194MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈265MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈7283ms | ≈16342ms | ≈343135ms | ≈15257ms | ≈866ms | ≈12290ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈7283ms | ≈16342ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈7283ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈4716ms | ≈16342ms | ≈142910ms | ? | ≈677ms | ≈49954ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈4716ms | ? | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈2251ms | ≈16342ms | ≈330210ms | ≈9676ms | ≈677ms | ≈40688ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈16342ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈2251ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈2251ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈677ms | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈386MB (Debug) => ≈247MB (Release) | ≈383MB (Debug) => ≈284MB (Release) | ≈134MB (Debug) => ≈29MB (Release) | ≈185MB (Debug) | ≈101MB (Debug) | ≈199MB (Debug) => ≈32MB (Release) | ≈739MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈310MB (Debug) => ≈205MB (Release) | ≈380MB (Debug) => ≈280MB (Release) | ≈152MB (Debug) => ≈32MB (Release) | ≈156MB (Debug) | ≈199MB (Debug) => ≈31MB (Release) | ≈221MB (Debug) => ≈35MB (Release) | ≈168MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈708MB (Debug) => ≈573MB (Release) | ≈216MB (Debug) | ≈323MB (Debug) => ≈94MB (Release) | ≈315MB (Debug) | ≈1GB (Debug) => ≈905MB (Release) | ≈738MB (Debug) => ≈494MB (Release) | ≈22MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈187MB (Debug) => ≈82MB (Release) | ≈266MB (Debug) => ≈150MB (Release) | ≈202MB (Debug) => ≈132MB (Release) | ≈145MB (Debug) | ≈82MB (Debug) | ≈271MB (Debug) => ≈142MB (Release) | ≈585MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈154MB (Debug) => ≈108MB (Release) | ≈194MB (Debug) => ≈139MB (Release) | ≈220MB (Debug) => ≈74MB (Release) | ≈77MB (Debug) | ≈148MB (Debug) => ≈39MB (Release) | ≈246MB (Debug) => ≈43MB (Release) | ≈23MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈156MB (Debug) => ≈100MB (Release) | ≈89MB (Debug) | ≈123MB (Debug) => ≈20MB (Release) | ≈108MB (Debug) | ≈533MB (Debug) => ≈443MB (Release) | ≈340MB (Debug) => ≈211MB (Release) | ≈17MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈1831ms (Debug) => ≈379ms (Release) | ≈895ms (Release) | ≈4007ms (Debug) => ≈682ms (Release) | ? | ? | ≈14461ms (Debug) => ≈711ms (Release) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈826ms (Debug) => ≈440ms (Release) | ≈1448ms (Release) | ≈4066ms (Debug) => ≈594ms (Release) | ? | ≈1899ms (Debug) => ≈420ms (Release) | ≈5905ms (Debug) => ≈462ms (Release) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈762ms (Debug) => ≈376ms (Release) | ? | ≈40424ms (Debug) | ? | ≈1941ms (Debug) => ≈460ms (Release) | ≈4655ms (Debug) => ≈376ms (Release) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

**<sup>1</sup>**: Benchmark WIP  
**<sup>2</sup>**: Benchmark WIP  



# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈257MB | ≈354MB | ≈1MB | ≈171MB | ≈2MB | ≈8MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (x86)*** | ≈228MB | ≈318MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (ARM64)*** | ≈262MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈401MB | ≈531MB | ≈3MB | ? | ≈1MB | ≈7MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈380MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈258MB | ≈474MB | ≈4MB | ≈75MB | ≈1MB | ≈6MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x86)*** | ? | ≈473MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARMv7l)*** | ≈194MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARM64)*** | ≈265MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈5919ms | ≈14618ms | ≈301061ms | ≈13042ms | ≈643ms | ≈10646ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (x86)*** | ≈5919ms | ≈14618ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (ARM64)*** | ≈5919ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈5029ms | ≈14618ms | ≈161542ms | ? | ≈634ms | ≈50048ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈5029ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈1871ms | ≈14618ms | ≈213720ms | ≈6912ms | ≈634ms | ≈28670ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x86)*** | ? | ≈14618ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARMv7l)*** | ≈1871ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARM64)*** | ≈1871ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈634ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈385MB (Debug) => ≈243MB (Release) | ≈335MB (Debug) => ≈281MB (Release) | ≈133MB (Debug) => ≈27MB (Release) | ≈174MB (Debug) | ≈82MB (Debug) | ≈198MB (Debug) => ≈32MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈311MB (Debug) => ≈205MB (Release) | ≈405MB (Debug) => ≈280MB (Release) | ≈150MB (Debug) => ≈30MB (Release) | ≈156MB (Debug) | ≈195MB (Debug) => ≈30MB (Release) | ≈212MB (Debug) => ≈33MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈703MB (Debug) => ≈568MB (Release) | ≈216MB (Debug) | ≈323MB (Debug) => ≈94MB (Release) | ≈317MB (Debug) | ≈1GB (Debug) => ≈916MB (Release) | ≈751MB (Debug) => ≈503MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈188MB (Debug) => ≈76MB (Release) | ≈229MB (Debug) => ≈141MB (Release) | ≈215MB (Debug) => ≈132MB (Release) | ≈122MB (Debug) | ≈63MB (Debug) | ≈272MB (Debug) => ≈144MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈189MB (Debug) => ≈119MB (Release) | ≈206MB (Debug) => ≈133MB (Release) | ≈272MB (Debug) => ≈44MB (Release) | ≈94MB (Debug) | ≈146MB (Debug) => ≈38MB (Release) | ≈261MB (Debug) => ≈47MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈160MB (Debug) => ≈100MB (Release) | ≈111MB (Debug) | ≈114MB (Debug) => ≈18MB (Release) | ≈128MB (Debug) | ≈576MB (Debug) => ≈478MB (Release) | ≈342MB (Debug) => ≈224MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈1549ms (Debug) => ≈312ms (Release) | ≈739ms (Release) | ≈3560ms (Debug) => ≈579ms (Release) | ≈6755ms (Debug) | ? | ≈12253ms (Debug) => ≈591ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈784ms (Debug) => ≈360ms (Release) | ≈1220ms (Release) | ≈4835ms (Debug) => ≈364ms (Release) | ? | ≈1700ms (Debug) => ≈355ms (Release) | ≈6626ms (Debug) => ≈383ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈603ms (Debug) => ≈292ms (Release) | ? | ≈35357ms (Debug) | ? | ≈1456ms (Debug) => ≈320ms (Release) | ≈3214ms (Debug) => ≈266ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

**<sup>1</sup>**: Frameless mode not supported yet  
**<sup>2</sup>**: Frameless mode not working  
**<sup>3</sup>**: Frameless mode not working  



## Future content

See [Issues](https://github.com/Elanis/web-to-desktop-framework-comparison/issues) and [Pull requests](https://github.com/Elanis/web-to-desktop-framework-comparison/pulls). You can participate by proposing new issues, of filling them !

## Contributors

[List of contributors to this repository](https://github.com/Elanis/web-to-desktop-framework-comparison/graphs/contributors)
