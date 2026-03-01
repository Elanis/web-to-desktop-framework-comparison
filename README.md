
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
| **Github stars** | 120k | 102.1k | 41.6k | 32.5k | 9.2k | 8.3k | 174.9k | 23.2k |
| **Forks** | 17k | 3.4k | 3.9k | 1.6k | 0.3k | 0.5k | 29.9k | 1.9k |
| **Creation date** | 2013 | 2019 | 2011 | 2019 | 2019 | 2018 | 2018 | 2020 |
| **Last Update** | 2/2026 | 1/2026 | 2/2026 | 2/2026 | 2/2026 | 2/2026 | 2/2026 | 2/2026 |
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
| ***Windows (x64)*** | ≈346MB | ≈3MB | ≈523MB | ≈10MB | ≈171MB | ≈2MB | ≈26MB | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈286MB | ? | ≈464MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈349MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈484MB | ? | ≈681MB | ? | ? | ≈1MB | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈464MB | ≈4MB | ≈613MB | ≈7MB | ? | ≈1MB | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈302MB | ≈3MB | ≈635MB | ≈8MB | ≈137MB | ≈1MB | ? | N/A<sup>1</sup>|
| ***Linux (x86)*** | ? | ? | ≈638MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈233MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈307MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | N/A<sup>1</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈4683ms | ≈259462ms | ≈10684ms | ≈6651ms | ≈9907ms | ≈227ms | ≈43181ms | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈4683ms | ? | ≈10684ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈4683ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈2454ms | ? | ≈5122ms | ? | ? | ≈329ms | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈2454ms | ≈134713ms | ≈5122ms | ≈19711ms | ? | ≈227ms | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈1505ms | ≈226306ms | ≈8629ms | ≈16279ms | ≈6612ms | ≈227ms | ? | N/A<sup>1</sup>|
| ***Linux (x86)*** | ? | ? | ≈8629ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈1505ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈1505ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈227ms | ? | N/A<sup>1</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈6MB (Debug) => ≈4MB (Release) | ≈6MB (Debug) => ≈4MB (Release) | ≈2MB (Debug) => ≈4MB (Release) | ≈4MB (Debug) => ≈4MB (Release) | ≈6MB (Debug) | ≈6MB (Debug) => ≈4MB (Release) | ≈7MB (Debug) => ≈4MB (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈406MB (Debug) => ≈301MB (Release) | ≈225MB (Debug) => ≈72MB (Release) | ≈15MB (Debug) => ≈545MB (Release) | ≈284MB (Debug) => ≈86MB (Release) | ≈293MB (Debug) | ≈175MB (Debug) | ≈739MB (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈743MB (Debug) => ≈622MB (Release) | ≈622MB (Debug) => ≈93MB (Release) | ≈32MB (Debug) => ≈976MB (Release) | ≈623MB (Debug) => ≈398MB (Release) | ≈251MB (Debug) | ≈971MB (Debug) => ≈884MB (Release) | ≈565MB (Debug) | N/A<sup>1</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈199MB (Debug) => ≈107MB (Release) | ≈263MB (Debug) => ≈189MB (Release) | ≈22MB (Debug) => ≈130MB (Release) | ≈322MB (Debug) => ≈192MB (Release) | ≈138MB (Debug) | ≈348MB (Debug) => ≈312MB (Release) | ≈705MB (Debug) => ≈42MB (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈149MB (Debug) => ≈77MB (Release) | ≈26MB (Debug) => ≈69MB (Release) | ≈5MB (Debug) => ≈192MB (Release) | ≈181MB (Debug) => ≈63MB (Release) | ≈230MB (Debug) | ≈122MB (Debug) | ≈602MB (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈133MB (Debug) => ≈62MB (Release) | ≈182MB (Debug) => ≈15MB (Release) | ≈1MB (Debug) => ≈170MB (Release) | ≈275MB (Debug) => ≈87MB (Release) | ≈105MB (Debug) | ≈438MB (Debug) => ≈394MB (Release) | ≈541MB (Debug) | N/A<sup>1</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈802ms (Debug) => ≈303ms (Release) | ≈5439ms (Debug) => ≈724ms (Release) | ≈726ms (Release) | ≈6697ms (Debug) => ≈597ms (Release) | ≈4962ms (Debug) | ? | ≈15960ms (Debug) => ≈104ms (Release) | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈613ms (Debug) => ≈477ms (Release) | ≈3604ms (Debug) => ≈1346ms (Release) | ≈690ms (Release) | ≈5199ms (Debug) => ≈1344ms (Release) | ? | ≈1327ms (Debug) | ≈14458ms (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈408ms (Debug) => ≈270ms (Release) | ≈26926ms (Debug) => ≈25287ms (Release) | ≈467ms (Release) | ≈3121ms (Debug) => ≈212ms (Release) | ? | ≈432ms (Debug) => ≈278ms (Release) | ≈31250ms (Debug) | N/A<sup>1</sup>|

**<sup>1</sup>**: Benchmark WIP (See [#319](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/319))  



# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈346MB | ≈3MB | ≈523MB | ≈10MB | ≈171MB | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈286MB | ? | ≈464MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈349MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈484MB | ? | ≈681MB | ? | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈464MB | ≈4MB | ≈613MB | ≈7MB | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈302MB | ≈3MB | ≈635MB | ≈8MB | ≈137MB | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ? | ≈638MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈233MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈307MB | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈6933ms | ≈264106ms | ≈10853ms | ≈7997ms | ≈9980ms | ≈198ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈6933ms | ? | ≈10853ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈6933ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈1493ms | ? | ≈5800ms | ? | ? | ≈345ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈1493ms | ≈131867ms | ≈5800ms | ≈15808ms | ? | ≈198ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈1336ms | ≈222538ms | ≈8462ms | ≈16288ms | ≈6611ms | ≈198ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ? | ≈8462ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈1336ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈1336ms | ? | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈198ms | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of used memory for main process and children ones) 

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈6MB (Debug) => ≈4MB (Release) | ≈6MB (Debug) => ≈4MB (Release) | ≈1MB (Debug) => ≈4MB (Release) | ≈4MB (Debug) => ≈4MB (Release) | ≈6MB (Debug) | ≈6MB (Debug) => ≈4MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈407MB (Debug) => ≈300MB (Release) | ≈224MB (Debug) => ≈69MB (Release) | ≈14MB (Debug) => ≈545MB (Release) | ≈281MB (Debug) => ≈83MB (Release) | ≈267MB (Debug) | ≈173MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈737MB (Debug) => ≈620MB (Release) | ≈623MB (Debug) => ≈93MB (Release) | ≈32MB (Debug) => ≈974MB (Release) | ≈623MB (Debug) => ≈397MB (Release) | ≈251MB (Debug) | ≈971MB (Debug) => ≈884MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage - (Average of runs) Median of difference between system measured free memory before execution and during execution)

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈186MB (Debug) => ≈102MB (Release) | ≈297MB (Debug) => ≈151MB (Release) | ≈13MB (Debug) => ≈134MB (Release) | ≈308MB (Debug) => ≈169MB (Release) | ≈131MB (Debug) | ≈339MB (Debug) => ≈316MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈148MB (Debug) => ≈117MB (Release) | ≈5MB (Debug) => ≈80MB (Release) | ≈4MB (Debug) => ≈202MB (Release) | ≈192MB (Debug) => ≈76MB (Release) | ≈204MB (Debug) | ≈122MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈134MB (Debug) => ≈73MB (Release) | ≈229MB (Debug) => ≈16MB (Release) | ≈2MB (Debug) => ≈180MB (Release) | ≈281MB (Debug) => ≈84MB (Release) | ≈118MB (Debug) | ≈453MB (Debug) => ≈395MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [Tauri](https://github.com/tauri-apps/tauri) | [NW.JS](https://github.com/nwjs/nw.js) | [Wails](https://github.com/wailsapp/wails) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI w/ Vue](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈765ms (Debug) => ≈296ms (Release) | ≈5550ms (Debug) => ≈702ms (Release) | ≈778ms (Release) | ≈7701ms (Debug) => ≈597ms (Release) | ≈5084ms (Debug) | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈429ms (Debug) => ≈289ms (Release) | ≈2718ms (Debug) => ≈1339ms (Release) | ≈585ms (Release) | ≈4943ms (Debug) => ≈1290ms (Release) | ? | ≈1421ms (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈403ms (Debug) => ≈270ms (Release) | ≈26878ms (Debug) => ≈25252ms (Release) | ≈468ms (Release) | ≈3065ms (Debug) => ≈214ms (Release) | ? | ≈433ms (Debug) => ≈273ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

**<sup>1</sup>**: Frameless mode not supported yet  
**<sup>2</sup>**: Frameless mode not working  



## Future content

See [Issues](https://github.com/Elanis/web-to-desktop-framework-comparison/issues) and [Pull requests](https://github.com/Elanis/web-to-desktop-framework-comparison/pulls). You can participate by proposing new issues, or by filling them!

## Contributors

[List of contributors to this repository](https://github.com/Elanis/web-to-desktop-framework-comparison/graphs/contributors)
