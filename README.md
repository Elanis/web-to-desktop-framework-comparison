# Web to Desktop framework comparison

This repository was made to create an objective comparison of multiple framework that grant us to "transform" our web app to desktop application formats.

## Table Of Content
- [Major characteristics](#major-characteristics)
- [Operating systems](#operating-systems)
- [Benchmarks](#benchmarks)
  * [01 - Empty app](#01---empty-app)
  * [02 - Empty app (Headless)](#02---empty-app-headless)

## Major characteristics

| | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Github stars | 91k | 38k | 13k | 6k | 3k |
| Forks | 12k | 4k | 0.3k | 0.2k | 0.2k |
| Creation date | 2013 | 2011 | 2017 | 2019 | 2018 |
| Last Update | 2021 | 2021 | 2021 | 2021 | 2021 |
| Framework Language | C++ | C++ | Rust | C++ | C++ |
| License | [MIT](https://github.com/electron/electron/blob/master/LICENSE) | [MIT](https://github.com/nwjs/nw.js/blob/nw52/LICENSE) | [MIT](https://github.com/tauri-apps/tauri/blob/dev/LICENSE) | [MIT](https://github.com/nodegui/nodegui/blob/master/LICENSE) | [MIT](https://github.com/neutralinojs/neutralinojs/blob/master/LICENSE) |
| Developer Dependencies | Node.js, Electron NPM Package | Node.js, NW.JS SDK | C++ Compiler, Node.JS, Rustc, Cargo, Tauri Bundler | Cmake, make, Node.JS, NodeGUI NPM Package | C++ Compiler, Node.js, WebPack Bundler, WebkitGTK+ |
| User Dependencies | None | None | None | None | None |
| Engine | Chromium | Webkit/Chromium | Cocoa/WebKit on macOS, gtk-webkit2 on Linux and MSHTML (IE10/11) or Webkit via Edge on Windows | Qt | WebkitGTK+ |

## Operating systems

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Developement Environment** | Windows | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | MacOS | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | Linux | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| **Target Environment** | Windows | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | MacOS | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | Linux | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | Android | ❌ | ❌ | Soon | ❌ | ❌ |
| | IOS | ❌ | ❌ | Soon | ❌ | ❌ |

## Benchmarks

**See [Benchmark.txt](https://github.com/Elanis/web-to-desktop-framework-comparison/blob/main/Benchmark.txt) to get more informations about following data.**

### 01 - Empty app

See source in [benchmark/01-empty-app](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/01-empty-app/) folder.

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Build size:** | Windows | ? | ? | ? | ? | ? |
| | MacOS | ? | ? | ? | ? | ? |
| | Linux | ? | ? | ? | ? | ? |
| **Memory Usage:** | Windows | ~55 => 52MB | ? | ? | ? | ? |
| | MacOS | ? | ? | ? | ? | ? |
| | Linux | ? | ? | ? | ? | ? |
| **Start duration:** | Windows | ~76ms | ? | ? | ? | ? |
| | MacOS | ? | ? | ? | ? | ? |
| | Linux | ? | ? | ? | ? | ? |

### 02 - Empty app (Headless)

See source in [benchmark/02-empty-app-headless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-headless) folder.

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Build size:** | Windows | ? | ? | ? | ? | ? |
| | MacOS | ? | ? | ? | ? | ? |
| | Linux | ? | ? | ? | ? | ? |
| **Memory Usage:** | Windows | ~54 => 51MB | ? | ? | ? | ? |
| | MacOS | ? | ? | ? | ? | ? |
| | Linux | ? | ? | ? | ? | ? |
| **Start duration:** | Windows | ~72ms | ? | ? | ? | ? |
| | MacOS | ? | ? | ? | ? | ? |
| | Linux | ? | ? | ? | ? | ? |


TODO:
- WebGL Support
- Build constraints
- Source code protection