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
| **Build size** | ***Windows (x64)*** | ≈189MB | ≈277MB | ? | ? | ? | ? | ? |
| | ***Windows (x86)*** | ≈167MB | ≈248MB | ? | ? | ? | ? | ? |
| | ***Windows (ARM64)*** | ≈202MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| | ***MacOS (x64)*** | ≈323MB | ≈469MB | ? | ? | ? | ? | ? |
| | ***MacOS (arm64)*** | ≈328MB | ? | ? | ? | ? | ? | ? |
| | ***Linux (x64)*** | ≈204MB | ≈358MB | ? | ? | ? | ? | ? |
| | ***Linux (x86)*** | ≈179MB | ≈360MB | ? | ? | ? | ? | ? |
| | ***Linux (ARMv7l)*** | ≈135MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| | ***Linux (ARM64)*** | ≈205MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
| **Build time** | ***Windows (x64)*** | ≈3522ms | ≈7768ms | ? | ? | ? | ? | ? |
| | ***Windows (x86)*** | ≈3522ms | ≈7768ms | ? | ? | ? | ? | ? |
| | ***Windows (ARM64)*** | ≈3522ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| | ***MacOS (x64)*** | ≈3669ms | ≈7768ms | ? | ? | ? | ? | ? |
| | ***MacOS (arm64)*** | ≈3669ms | ? | ? | ? | ? | ? | ? |
| | ***Linux (x64)*** | ≈4322ms | ≈7768ms | ? | ? | ? | ? | ? |
| | ***Linux (x86)*** | ≈2368ms | ≈7768ms | ? | ? | ? | ? | ? |
| | ***Linux (ARMv7l)*** | ≈2368ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| | ***Linux (ARM64)*** | ≈2368ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
| **Memory Usage** | ***Windows (x64)*** | ≈64MB (Debug) => ≈77MB (Release) | ≈69MB (Debug) => ≈44MB (Release) | ≈51MB (Debug) | ≈116MB (Debug) | ≈34MB (Debug) | ≈251MB (Debug) | ≈2MB (Debug) |
| | ***MacOS (x64)*** | ≈62MB (Debug) => ≈57MB (Release) | ≈47MB (Debug) => ≈76MB (Release) | ≈57MB (Debug) | ≈130MB (Debug) | ≈44MB (Debug) | ≈136MB (Debug) | ≈24MB (Debug) |
| | ***Linux (x64)*** | ≈115MB (Debug) => ≈110MB (Release) | ≈91MB (Debug) => ≈51MB (Release) | ≈66MB (Debug) | ≈155MB (Debug) | ≈24MB (Debug) | ≈241MB (Debug) | ≈10MB (Debug) |
|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
| **Start duration** | ***Windows (x64)*** | ≈174ms (Debug) => ≈80ms (Release) | ? | ? | ? | ? | ? | ? |
| | ***MacOS (x64)*** | ≈314ms (Debug) => ≈228ms (Release) | ? | ? | ? | ? | ? | ? |
| | ***Linux (x64)*** | ≈171ms (Debug) => ≈105ms (Release) | ? | ? | ? | ? | ? | ? |

# 02-empty-app-headless

See source in [benchmark/02-empty-app-headless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-headless/) folder.

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Build size** | ***Windows (x64)*** | ≈189MB | ≈277MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Windows (x86)*** | ≈167MB | ≈248MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Windows (ARM64)*** | ≈202MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***MacOS (x64)*** | ≈323MB | ≈469MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***MacOS (arm64)*** | ≈328MB | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (x64)*** | ≈204MB | ≈358MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (x86)*** | ≈179MB | ≈360MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (ARMv7l)*** | ≈145MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (ARM64)*** | ≈209MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
| **Build time** | ***Windows (x64)*** | ≈3108ms | ≈7214ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Windows (x86)*** | ≈3108ms | ≈7214ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Windows (ARM64)*** | ≈3108ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***MacOS (x64)*** | ≈11412ms | ≈7214ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***MacOS (arm64)*** | ≈11412ms | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (x64)*** | ≈2883ms | ≈7214ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (x86)*** | ≈1871ms | ≈7214ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (ARMv7l)*** | ≈2883ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (ARM64)*** | ≈2883ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
| **Memory Usage** | ***Windows (x64)*** | ≈64MB (Debug) => ≈76MB (Release) | ≈65MB (Debug) => ≈82MB (Release) | ≈51MB (Debug) | ≈124MB (Debug) | ≈35MB (Debug) | N/A<sup>1</sup>| ≈1MB (Debug) |
| | ***MacOS (x64)*** | ≈62MB (Debug) => ≈56MB (Release) | ≈45MB (Debug) => ≈76MB (Release) | ≈59MB (Debug) | ≈130MB (Debug) | ≈34MB (Debug) | N/A<sup>1</sup>| ≈22MB (Debug) |
| | ***Linux (x64)*** | ≈106MB (Debug) => ≈108MB (Release) | ≈93MB (Debug) => ≈51MB (Release) | ≈71MB (Debug) | ≈161MB (Debug) | ≈35MB (Debug) | N/A<sup>1</sup>| ≈10MB (Debug) |
|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
| **Start duration** | ***Windows (x64)*** | ≈100ms (Debug) => ≈73ms (Release) | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***MacOS (x64)*** | ≈280ms (Debug) => ≈285ms (Release) | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
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
