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
| **Github stars** | 112.1k | 40.1k | 77.7k | 8.7k | 7.3k | 22.4k | 162k | 21.6k | 21.6k |
| **Forks** | 14.9k | 3.9k | 2.3k | 0.3k | 0.4k | 1.1k | 26.6k | 1.6k | 1.6k |
| **Creation date** | 2013 | 2011 | 2019 | 2019 | 2018 | 2019 | 2018 | 2020 |
| **Last Update** | 5/2024 | 5/2024 | 5/2024 | 3/2024 | 5/2024 | 5/2024 | 5/2024 | 5/2024 | 5/2024 |
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
| ***Windows (x64)*** | ≈266MB | ≈404MB | ≈1MB | ≈171MB | ? | ≈8MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈238MB | ≈371MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈273MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈420MB | ≈564MB | ? | ? | ≈1MB | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈396MB | ≈518MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈268MB | ≈494MB | ≈2MB | ≈75MB | ≈1MB | ≈7MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈501MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈203MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈274MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3478ms | ≈19396ms | ≈181255ms | ≈9985ms | ? | ≈6439ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈3478ms | ≈19396ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈3478ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈2311ms | ≈6262ms | ? | ? | ≈490ms | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈2311ms | ≈6262ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈1664ms | ≈25207ms | ≈185112ms | ≈6750ms | ≈490ms | ≈28439ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈25207ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈1664ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈1664ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈490ms | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈352MB (Debug) => ≈238MB (Release) | ≈120MB (Debug) => ≈268MB (Release) | ≈357MB (Debug) => ≈254MB (Release) | ≈178MB (Debug) | ≈97MB (Debug) | ≈414MB (Debug) => ≈260MB (Release) | ≈793MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈424MB (Debug) => ≈307MB (Release) | ≈630MB (Debug) | ≈200MB (Debug) | ≈174MB (Debug) | ≈42MB (Debug) | ≈269MB (Debug) | ≈197MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈699MB (Debug) => ≈579MB (Release) | ≈95MB (Debug) => ≈834MB (Release) | ≈311MB (Debug) => ≈92MB (Release) | ≈235MB (Debug) | ≈1GB (Debug) => ≈925MB (Release) | ≈650MB (Debug) => ≈436MB (Release) | ≈711MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈145MB (Debug) => ≈83MB (Release) | ≈82MB (Debug) => ≈124MB (Release) | ≈235MB (Debug) => ≈153MB (Release) | ≈137MB (Debug) | ≈79MB (Debug) | ≈276MB (Debug) => ≈162MB (Release) | ≈680MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈209MB (Debug) => ≈114MB (Release) | ≈271MB (Debug) | ≈165MB (Debug) | ≈104MB (Debug) | ≈36MB (Debug) | ≈264MB (Debug) | ≈250MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈148MB (Debug) => ≈93MB (Release) | ≈48MB (Debug) => ≈194MB (Release) | ≈104MB (Debug) => ≈14MB (Release) | ≈143MB (Debug) | ≈530MB (Debug) => ≈473MB (Release) | ≈275MB (Debug) => ≈170MB (Release) | ≈585MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈1196ms (Debug) => ≈258ms (Release) | ≈583ms (Release) | ≈2892ms (Debug) => ≈419ms (Release) | ≈11010ms (Debug) | ? | ≈8347ms (Debug) => ≈411ms (Release) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈583ms (Debug) => ≈239ms (Release) | ? | ≈4091ms (Debug) | ? | ? | ≈6083ms (Debug) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈482ms (Debug) => ≈306ms (Release) | ≈425ms (Release) | ≈34307ms (Debug) | ? | ≈1203ms (Debug) => ≈326ms (Release) | ≈2947ms (Debug) => ≈240ms (Release) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

**<sup>1</sup>**: Benchmark WIP  
**<sup>2</sup>**: Benchmark WIP  



# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈266MB | ≈400MB | ≈1MB | ≈171MB | ? | ≈8MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (x86)*** | ≈238MB | ≈367MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (ARM64)*** | ≈273MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈420MB | ≈564MB | ? | ? | ≈1MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈396MB | ≈518MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈268MB | ≈494MB | ≈2MB | ≈75MB | ≈1MB | ≈7MB | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x86)*** | ? | ≈501MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARMv7l)*** | ≈203MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARM64)*** | ≈274MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3295ms | ≈21809ms | ≈190493ms | ≈9781ms | ? | ≈6813ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (x86)*** | ≈3295ms | ≈21809ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Windows (ARM64)*** | ≈3295ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (x64)*** | ≈1981ms | ≈5712ms | ? | ? | ≈517ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈1981ms | ≈5712ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈1871ms | ≈6069ms | ≈204505ms | ≈6757ms | ≈517ms | ≈28985ms | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x86)*** | ? | ≈6069ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARMv7l)*** | ≈1871ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (ARM64)*** | ≈1871ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈517ms | ? | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈350MB (Debug) => ≈234MB (Release) | ≈155MB (Debug) => ≈261MB (Release) | ≈355MB (Debug) => ≈253MB (Release) | ≈179MB (Debug) | ≈81MB (Debug) | ≈415MB (Debug) => ≈262MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈425MB (Debug) => ≈308MB (Release) | ≈621MB (Debug) | ≈198MB (Debug) | ≈173MB (Debug) | ≈24MB (Debug) | ≈268MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈694MB (Debug) => ≈575MB (Release) | ≈1GB (Debug) => ≈832MB (Release) | ≈311MB (Debug) => ≈93MB (Release) | ≈244MB (Debug) | ≈1GB (Debug) => ≈923MB (Release) | ≈649MB (Debug) => ≈434MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈160MB (Debug) => ≈88MB (Release) | ≈253MB (Debug) => ≈120MB (Release) | ≈244MB (Debug) => ≈152MB (Release) | ≈130MB (Debug) | ≈66MB (Debug) | ≈276MB (Debug) => ≈163MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈176MB (Debug) => ≈118MB (Release) | ≈260MB (Debug) | ≈172MB (Debug) | ≈111MB (Debug) | ≈13MB (Debug) | ≈267MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈144MB (Debug) => ≈100MB (Release) | ≈425MB (Debug) => ≈196MB (Release) | ≈113MB (Debug) => ≈18MB (Release) | ≈143MB (Debug) | ≈576MB (Debug) => ≈477MB (Release) | ≈256MB (Debug) => ≈166MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Wails](https://github.com/wailsapp/wails) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈1219ms (Debug) => ≈264ms (Release) | ≈580ms (Release) | ≈2920ms (Debug) => ≈431ms (Release) | ≈5090ms (Debug) | ? | ≈8471ms (Debug) => ≈409ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***MacOS (arm64)*** | ≈486ms (Debug) => ≈277ms (Release) | ? | ≈4563ms (Debug) | ? | ? | ≈5074ms (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|
| ***Linux (x64)*** | ≈481ms (Debug) => ≈307ms (Release) | ≈441ms (Release) | ≈34764ms (Debug) | ? | ≈1256ms (Debug) => ≈339ms (Release) | ≈2972ms (Debug) => ≈244ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>| N/A<sup>3</sup>|

**<sup>1</sup>**: Frameless mode not supported yet  
**<sup>2</sup>**: Frameless mode not working  
**<sup>3</sup>**: Frameless mode not working  



## Future content

See [Issues](https://github.com/Elanis/web-to-desktop-framework-comparison/issues) and [Pull requests](https://github.com/Elanis/web-to-desktop-framework-comparison/pulls). You can participate by proposing new issues, or by filling them!

## Contributors

[List of contributors to this repository](https://github.com/Elanis/web-to-desktop-framework-comparison/graphs/contributors)
