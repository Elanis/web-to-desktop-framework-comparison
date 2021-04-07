# Web to Desktop framework comparison

This repository was made to create an objective comparison of multiple framework that grant us to "transform" our web app to desktop application formats.

## Table Of Content
- [Major characteristics](#major-characteristics)
- [Operating systems](#operating-systems)
- [Benchmarks](#benchmarks)
  * [01 - Empty app](#01---empty-app)
  * [02 - Empty app (Headless)](#02---empty-app-headless)

## Major characteristics

| | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Github stars** | 91k | 38k | 13k | 6k | 3k | 116k |
| **Forks** | 12k | 4k | 0.3k | 0.2k | 0.2k | 16.5k |
| **Creation date** | 2013 | 2011 | 2017 | 2019 | 2018 | 2018 |
| **Last Update** | 2021 | 2021 | 2021 | 2021 | 2021 | 2021 |
| **Framework Language** | C++, JS, Objective-C, Python | C++ | Rust | C++ | C++ | C, C++, Dart |
| **Usage Language - Back** | JS, C++ | JS, C++ | Rust | JS, C++ | JS, C++ | Dart |
| **Usage Language - Front** | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | Dart |
| **License** | [MIT](https://github.com/electron/electron/blob/master/LICENSE) | [MIT](https://github.com/nwjs/nw.js/blob/nw52/LICENSE) | [MIT](https://github.com/tauri-apps/tauri/blob/dev/LICENSE) | [MIT](https://github.com/nodegui/nodegui/blob/master/LICENSE) | [MIT](https://github.com/neutralinojs/neutralinojs/blob/master/LICENSE) | [BSD 3-Clause](https://github.com/flutter/flutter/blob/master/LICENSE) |
| **Developer Dependencies** | [Node.js, Electron NPM Package](https://www.electronjs.org/docs/tutorial/quick-start#prerequisites) | [Node.js, NW.JS SDK](https://nwjs.readthedocs.io/en/latest/For%20Users/Getting%20Started/) | [C++ Compiler, Node.js, Rustc, Cargo, Tauri Bundler](https://tauri.studio/en/docs/getting-started/intro/#setting-up-your-environment) | [Cmake, make, Node.js, NodeGUI NPM Package](https://docs.nodegui.org/docs/guides/getting-started/#developer-environment) | [Node.js, Neu NPM Package](https://neutralino.js.org/docs/#/gettingstarted/quickstart) | [Flutter SDK, Visual Studio 2019 / Clang](https://flutter.dev/desktop#requirements) |
| **User Dependencies** | None | None | None | None | None | None |
| **Engine** | Chromium | Webkit, Chromium | Cocoa/WebKit on macOS, gtk-webkit2 on Linux and MSHTML (IE10/11) or Webkit via Edge on Windows | Qt | WebkitGTK+ | Flutter engine |

## Operating systems

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Developement Environment** | ***Windows*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***MacOS*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Linux*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| **Target Environment** | ***Windows*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***MacOS*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Linux*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Android*** | ❌ | ❌ | Soon | ❌ | ❌ | ✔️ |
| | ***iOS*** | ❌ | ❌ | Soon | ❌ | ❌ | ✔️ |
| | ***Web*** | ❌ | ❌ | ❌ | ❌ | ❌ | ✔️ |

## Benchmarks

**See [Benchmark.txt](https://github.com/Elanis/web-to-desktop-framework-comparison/blob/main/Benchmark.txt) to get more informations about following data.**

### 01 - Empty app

See source in [benchmark/01-empty-app](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/01-empty-app/) folder.

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Build size** | ***Windows (x64)*** | 175MB | 249MB | 453MB | 83.6MB | 2MB | 18MB |
| | ***Windows (x86)*** | 156MB | 223MB | ? | 83.6MB | 2MB | 18MB |
| | ***MacOS*** | ? | 254MB | ? | ? | 2MB | ? |
| | ***Linux (x64)*** | 184MB | 313MB | ? | ? | 2MB | ? |
| | ***Linux (x86)*** | 162MB | 314MB | ? | ? | 2MB | ? |
| **Memory Usage** | ***Windows*** | ≈55MB then ≈52MB | ≈67MB | ≈2.9MB | ≈44MB then ≈39MB | ≈2.7MB | ≈36.2MB (Debug) / ≈23.7MB (Release) |
| | ***MacOS*** | ? | ? | ? | ? | ? | ? |
| | ***Linux*** | ? | ? | ? | ? | ? | ? |
| **Start duration** | ***Windows*** | ≈76ms | ≈20ms | ≈366ms | ≈103ms (Debug) | ? | ≈5.6ms |
| | ***MacOS*** | ? | ? | ? | ? | ? | ? |
| | ***Linux*** | ? | ? | ? | ? | ? | ? |

### 02 - Empty app (Headless)

See source in [benchmark/02-empty-app-headless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-headless) folder.

| | |  [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Build size** | ***Windows (x64)*** | 175MB | 249MB | N/A<sup>1</sup> | 83.6MB | 2MB | N/A<sup>1</sup> |
| | ***Windows (x86)*** | 156MB | 223MB | N/A<sup>1</sup> | 83.6MB | 2MB | N/A<sup>1</sup> |
| | ***MacOS*** | ? | 254MB | N/A<sup>1</sup> | ? | ? | N/A<sup>1</sup> |
| | ***Linux (x64)*** | 184MB | 313MB | N/A<sup>1</sup> | ? | 2MB | N/A<sup>1</sup> |
| | ***Linux (x86)*** | 168MB | 314MB | N/A<sup>1</sup> | ? | 2MB | N/A<sup>1</sup> |
| **Memory Usage** | ***Windows*** | ≈54MB then ≈51MB | ≈69MB | N/A<sup>1</sup> | ≈44MB then ≈39MB | ≈2.7MB | N/A<sup>1</sup> |
| | ***MacOS*** | ? | ? | N/A<sup>1</sup> | ? | ? | N/A<sup>1</sup> |
| | ***Linux*** | ? | ? | N/A<sup>1</sup> | ? | ? | N/A<sup>1</sup> |
| **Start duration** | ***Windows*** | ≈72ms | ≈20ms | N/A<sup>1</sup> | ≈105ms (Debug) | ? | N/A<sup>1</sup> |
| | ***MacOS*** | ? | ? | N/A<sup>1</sup> | ? | ? | N/A<sup>1</sup> |
| | ***Linux*** | ? | ? | N/A<sup>1</sup> | ? | ? | N/A<sup>1</sup> |

**<sup>1</sup>**: Frameless mode not supported yet

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
