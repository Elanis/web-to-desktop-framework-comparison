# Web to Desktop framework comparison

This repository was made to create an objective comparison of multiple framework that grant us to "transform" our web app to desktop application formats.

## Table Of Content
- [Major characteristics](#major-characteristics)
- [Operating systems](#operating-systems)
- [Benchmarks](#benchmarks)
  * [01 - Empty app](#01---empty-app)
  * [02 - Empty app (Headless)](#02---empty-app-headless)

## Major characteristics

| | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Github stars** | 102k | 39k | 37k | 8k | 6k | 139k | 15k |
| **Forks** | 14k | 4k | 0.9k | 0.2k | 0.2k | 22k | 0.9k |
| **Creation date** | 2013 | 2011 | 2019 | 2019 | 2018 | 2018 | 2020 |
| **Last Update** | 2021 | 2021 | 2021 | 2021 | 2021 | 2021 | 2021 |
| **Framework Language** | C++, JS, Objective-C, Python | C++ | Rust | C++ | C++ | C, C++, Dart | C# |
| **Usage Language - Back** | JS, C++ | JS, C++ | Rust | JS, C++ | JS, C++ | Dart | C# |
| **Usage Language - Front** | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | Dart | C# |
| **License** | [MIT](https://github.com/electron/electron/blob/master/LICENSE) | [MIT](https://github.com/nwjs/nw.js/blob/nw52/LICENSE) | [MIT](https://github.com/tauri-apps/tauri/blob/dev/LICENSE) | [MIT](https://github.com/nodegui/nodegui/blob/master/LICENSE) | [MIT](https://github.com/neutralinojs/neutralinojs/blob/master/LICENSE) | [BSD 3-Clause](https://github.com/flutter/flutter/blob/master/LICENSE) | [MIT](https://github.com/dotnet/maui/blob/main/LICENSE) |
| **Developer Dependencies** | [Node.js, Electron NPM Package](https://www.electronjs.org/docs/tutorial/quick-start#prerequisites) | [Node.js, NW.JS SDK](https://nwjs.readthedocs.io/en/latest/For%20Users/Getting%20Started/) | [C++ Compiler, Node.js, Rustc, Cargo](https://tauri.studio/docs/getting-started/prerequisites/) | [Cmake, make, Node.js, NodeGUI NPM Package](https://docs.nodegui.org/docs/guides/getting-started/#developer-environment) | [Node.js, Neu NPM Package](https://neutralino.js.org/docs/#/gettingstarted/quickstart) | [Flutter SDK, Visual Studio 2019 / Clang](https://flutter.dev/desktop#requirements) | [.Net SDK, Visual Studio (optional), WebView2 (optional), Xcode (optional)](https://github.com/dotnet/maui/wiki/Getting-Started) |
| **User Dependencies** | None | None | None | None | None | None | None |
| **npm/yarn module support** | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ❌ | ❌ |
| **Engine** | Chromium | Webkit, Chromium | WRY (WebKitGTK for Linux, WebKit for MacOS, Webview2 for Windows) | Qt | WebkitGTK+ | Flutter engine | .NET MAUI |

## Operating systems support

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Developement Environment** | ***Windows*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***MacOS*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Linux*** | ✔️<sup>1</sup> | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| **Target Environment** | ***Windows*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***MacOS*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Linux*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | Soon |
| | ***Android*** | ❌ | [Requested](https://github.com/nwjs/nw.js/issues/94) | Soon<sup>2</sup> | ❌ | ❌ | ✔️ | ✔️ |
| | ***iOS*** | ❌ | ❌ | In progress<sup>2</sup> | ❌ | ❌ | ✔️ | ✔️ |
| | ***tvOS*** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✔️ |
| | ***Web*** | ❌ | ❌ | ❌ | ❌ | ✔️<sup>3</sup> | ✔️ | ❌ |

**<sup>1</sup>**: Linux 32 Bit support dropped  
**<sup>2</sup>**: https://github.com/tauri-apps/tauri#platforms  
**<sup>3</sup>**: Uses [modes](https://neutralino.js.org/docs/configuration/modes/) to generate web apps  

## Benchmarks

**See [benchmarks.json](https://github.com/Elanis/web-to-desktop-framework-comparison/blob/main/runner/benchmarks.json) to get more informations about following data.**


# 01-empty-app

See source in [benchmark/01-empty-app](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/01-empty-app/) folder.

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Build size** | ***Windows (x64)*** | ≈202MB | ≈277MB | ? | ? | ? | ? | ? |
| | ***Windows (x86)*** | ≈180MB | ≈248MB | ? | ? | ? | ? | ? |
| | ***Windows (ARM64)*** | ≈202MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| | ***MacOS (x64)*** | ≈331MB | ≈465MB | ? | ? | ? | ? | ? |
| | ***MacOS (arm64)*** | ≈316MB | ? | ? | ? | ? | ? | ? |
| | ***Linux (x64)*** | ≈204MB | ≈355MB | ? | ? | ? | ? | ? |
| | ***Linux (x86)*** | ≈179MB | ≈356MB | ? | ? | ? | ? | ? |
| | ***Linux (ARMv7l)*** | ≈135MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| | ***Linux (ARM64)*** | ≈205MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
| **Build time** | ***Windows (x64)*** | ≈5459ms | ≈13702ms | ? | ? | ? | ? | ? |
| | ***Windows (x86)*** | ≈5459ms | ≈13702ms | ? | ? | ? | ? | ? |
| | ***Windows (ARM64)*** | ≈5459ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| | ***MacOS (x64)*** | ≈4061ms | ≈13702ms | ? | ? | ? | ? | ? |
| | ***MacOS (arm64)*** | ≈4061ms | ? | ? | ? | ? | ? | ? |
| | ***Linux (x64)*** | ≈4322ms | ≈13702ms | ? | ? | ? | ? | ? |
| | ***Linux (x86)*** | ≈2368ms | ≈13702ms | ? | ? | ? | ? | ? |
| | ***Linux (ARMv7l)*** | ≈2368ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| | ***Linux (ARM64)*** | ≈2368ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
| **Memory Usage** | ***Windows (x64)*** | ≈65MB (Debug) => ≈79MB (Release) | ≈68MB (Debug) => ≈83MB (Release) | ≈47MB (Debug) | ≈119MB (Debug) | ≈36MB (Debug) | ≈276MB (Debug) | ≈2MB (Debug) |
| | ***MacOS (x64)*** | ≈65MB (Debug) => ≈62MB (Release) | ≈45MB (Debug) => ≈79MB (Release) | ≈58MB (Debug) | ≈141MB (Debug) | ≈34MB (Debug) | ≈152MB (Debug) | ≈26MB (Debug) |
| | ***Linux (x64)*** | ≈115MB (Debug) => ≈110MB (Release) | ≈91MB (Debug) => ≈51MB (Release) | ≈66MB (Debug) | ≈155MB (Debug) | ≈24MB (Debug) | ≈241MB (Debug) | ≈10MB (Debug) |
|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
| **Start duration** | ***Windows (x64)*** | ≈199ms (Debug) => ≈118ms (Release) | ? | ? | ? | ? | ? | ? |
| | ***MacOS (x64)*** | ≈268ms (Debug) => ≈197ms (Release) | ? | ? | ? | ? | ? | ? |
| | ***Linux (x64)*** | ≈171ms (Debug) => ≈105ms (Release) | ? | ? | ? | ? | ? | ? |

# 02-empty-app-headless

See source in [benchmark/02-empty-app-headless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-headless/) folder.

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Build size** | ***Windows (x64)*** | ≈202MB | ≈277MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Windows (x86)*** | ≈180MB | ≈248MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Windows (ARM64)*** | ≈202MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***MacOS (x64)*** | ≈331MB | ≈465MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***MacOS (arm64)*** | ≈316MB | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (x64)*** | ≈204MB | ≈355MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (x86)*** | ≈179MB | ≈356MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (ARMv7l)*** | ≈145MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (ARM64)*** | ≈209MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
| **Build time** | ***Windows (x64)*** | ≈4272ms | ≈13632ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Windows (x86)*** | ≈4272ms | ≈13632ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Windows (ARM64)*** | ≈4272ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***MacOS (x64)*** | ≈2862ms | ≈13632ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***MacOS (arm64)*** | ≈2862ms | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (x64)*** | ≈2883ms | ≈13632ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (x86)*** | ≈1871ms | ≈13632ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (ARMv7l)*** | ≈2883ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (ARM64)*** | ≈2883ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
| **Memory Usage** | ***Windows (x64)*** | ≈62MB (Debug) => ≈115MB (Release) | ≈64MB (Debug) => ≈35MB (Release) | ≈48MB (Debug) | ≈120MB (Debug) | ≈38MB (Debug) | N/A<sup>1</sup>| ≈1MB (Debug) |
| | ***MacOS (x64)*** | ≈65MB (Debug) => ≈63MB (Release) | ≈50MB (Debug) => ≈78MB (Release) | ≈60MB (Debug) | ≈142MB (Debug) | ≈30MB (Debug) | N/A<sup>1</sup>| ≈20MB (Debug) |
| | ***Linux (x64)*** | ≈106MB (Debug) => ≈108MB (Release) | ≈93MB (Debug) => ≈51MB (Release) | ≈71MB (Debug) | ≈161MB (Debug) | ≈35MB (Debug) | N/A<sup>1</sup>| ≈10MB (Debug) |
|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
| **Start duration** | ***Windows (x64)*** | ≈161ms (Debug) => ≈115ms (Release) | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***MacOS (x64)*** | ≈265ms (Debug) => ≈277ms (Release) | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (x64)*** | ≈158ms (Debug) => ≈96ms (Release) | ? | ? | ? | ? | N/A<sup>1</sup>| ? |

**<sup>1</sup>**: Frameless mode not supported yet**<sup>1</sup>**: Frameless mode not supported yet


## Future content

TODO:
- WebGL Support
- Build constraints
- Source code protection
- Modules support (npm, native, etc.)

Benchmarks ideas:
 - BabylonJS scene
 - spreadsheet
 - IDE
