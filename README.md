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
| **Github stars** | 99k | 39k | 25k | 7k | 5k | 133k | 13k |
| **Forks** | 13k | 4k | 0.6k | 0.2k | 0.2k | 20k | 0.6k |
| **Creation date** | 2013 | 2011 | 2017 | 2019 | 2018 | 2018 | 2020 |
| **Last Update** | 2021 | 2021 | 2021 | 2021 | 2021 | 2021 | 2021 |
| **Framework Language** | C++, JS, Objective-C, Python | C++ | Rust | C++ | C++ | C, C++, Dart | C# |
| **Usage Language - Back** | JS, C++ | JS, C++ | Rust | JS, C++ | JS, C++ | Dart | C# |
| **Usage Language - Front** | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | Dart | C# |
| **License** | [MIT](https://github.com/electron/electron/blob/master/LICENSE) | [MIT](https://github.com/nwjs/nw.js/blob/nw52/LICENSE) | [MIT](https://github.com/tauri-apps/tauri/blob/dev/LICENSE) | [MIT](https://github.com/nodegui/nodegui/blob/master/LICENSE) | [MIT](https://github.com/neutralinojs/neutralinojs/blob/master/LICENSE) | [BSD 3-Clause](https://github.com/flutter/flutter/blob/master/LICENSE) | [MIT](https://github.com/dotnet/maui/blob/main/LICENSE) |
| **Developer Dependencies** | [Node.js, Electron NPM Package](https://www.electronjs.org/docs/tutorial/quick-start#prerequisites) | [Node.js, NW.JS SDK](https://nwjs.readthedocs.io/en/latest/For%20Users/Getting%20Started/) | [C++ Compiler, Node.js, Rustc, Cargo, Tauri Bundler](https://tauri.studio/en/docs/getting-started/intro/#setting-up-your-environment) | [Cmake, make, Node.js, NodeGUI NPM Package](https://docs.nodegui.org/docs/guides/getting-started/#developer-environment) | [Node.js, Neu NPM Package](https://neutralino.js.org/docs/#/gettingstarted/quickstart) | [Flutter SDK, Visual Studio 2019 / Clang](https://flutter.dev/desktop#requirements) | [.Net SDK, Visual Studio (optionnal), WebView2 (optionnal), Xcode (optionnal)](https://github.com/dotnet/maui/wiki/Getting-Started) |
| **User Dependencies** | None | None | None | None | None | None | None |
| **npm/yarn module support** | ✔️ | ✔️ | ❌ | ✔️ | ❌ | ❌ | ❌ |
| **Engine** | Chromium | Webkit, Chromium | WRY (WebKitGTK for Linux, WebKit for MacOS, Webview2 for Windows) | Qt | WebkitGTK+ | Flutter engine | .NET MAUI |

## Operating systems support

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Developement Environment** | ***Windows*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***MacOS*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Linux*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| **Target Environment** | ***Windows*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***MacOS*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ |
| | ***Linux*** | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | ✔️ | Soon |
| | ***Android*** | ❌ | [Requested](https://github.com/nwjs/nw.js/issues/94) | Soon<sup>1</sup> | ❌ | ❌ | ✔️ | ✔️ |
| | ***iOS*** | ❌ | ❌ | In progress<sup>1</sup> | ❌ | ❌ | ✔️ | ✔️ |
| | ***tvOS*** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✔️ |
| | ***Web*** | ❌ | ❌ | ❌ | ❌ | ✔️<sup>2</sup> | ✔️ | ❌ |

**<sup>1</sup>**: https://github.com/tauri-apps/tauri#platforms  
**<sup>2</sup>**: Uses [modes](https://neutralino.js.org/docs/configuration/modes/) to generate web apps  

## Benchmarks

**See [benchmarks.json](https://github.com/Elanis/web-to-desktop-framework-comparison/blob/main/runner/benchmarks.json) to get more informations about following data.**


# 01-empty-app

See source in [benchmark/01-empty-app](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/01-empty-app/) folder.

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Build size** | ***Windows (x64)*** | ≈180MB | ≈264MB | ≈2MB | ≈83MB | ≈2MB | ≈18MB | ≈108MB |
| | ***Windows (x86)*** | ≈160MB | ≈237MB | ? | ≈83MB | ≈2MB | ≈18MB | ? |
| | ***Windows (ARM64)*** | ≈193MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| | ***MacOS*** | ? | ≈265MB | ? | ? | ≈2MB | ? | ? |
| | ***Linux (x64)*** | ≈181MB | ≈328MB | ≈5MB | ? | ≈2MB | ≈56MB | ? |
| | ***Linux (x86)*** | ≈171MB | ≈329MB | ? | ? | ≈2MB | ? | ? |
| | ***Linux (ARMv7l)*** | ≈128MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| | ***Linux (ARM64)*** | ≈196MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| **Memory Usage** | ***Windows (x64)*** | ≈66MB (Debug) => ≈58MB (Release) | ≈67MB (Debug) => ≈62MB (Release) | ≈60MB (Debug) => ≈59MB (Release) | ≈46MB (Debug) => ≈42MB (Release) | ≈2MB (Debug) => ≈2MB (Release) | ≈36MB (Debug) => ≈23MB (Release) | ≈61MB (Debug) => ≈60MB (Release) |
| | ***Linux (x64)*** | ≈106MB (Debug) | ≈54MB (Debug) | ? | ? | ? | ? | ? |
| **Start duration** | ***Windows (x64)*** | ≈94ms (Debug) => ≈131ms (Release) | ≈21ms (Debug) => N/A (Release) | ≈121ms (Debug) => N/A (Release) | ≈103ms (Debug) => N/A (Release) | N/A (Debug) => N/A (Release) | ≈6ms (Debug) => N/A (Release) | N/A (Debug) => N/A (Release) |
| | ***Linux (x64)*** | ≈190ms (Debug) | ? | ? | ? | ? | ? | ? |

# 02-empty-app-headless

See source in [benchmark/02-empty-app-headless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-headless/) folder.

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Build size** | ***Windows (x64)*** | ≈180MB | ≈264MB | ≈2MB | ≈83MB | ≈2MB | N/A<sup>1</sup>| ≈108MB |
| | ***Windows (x86)*** | ≈160MB | ≈237MB | ? | ≈83MB | ≈2MB | N/A<sup>1</sup>| ? |
| | ***Windows (ARM64)*** | ≈193MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***MacOS*** | ? | ≈265MB | ? | ? | ≈2MB | N/A<sup>1</sup>| ? |
| | ***Linux (x64)*** | ≈181MB | ≈328MB | ≈5MB | ? | ≈2MB | N/A<sup>1</sup>| ? |
| | ***Linux (x86)*** | ≈171MB | ≈329MB | ? | ? | ≈2MB | N/A<sup>1</sup>| ? |
| | ***Linux (ARMv7l)*** | ≈128MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
| | ***Linux (ARM64)*** | ≈196MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
| **Memory Usage** | ***Windows (x64)*** | ≈67MB (Debug) => ≈58MB (Release) | ≈67MB (Debug) => ≈62MB (Release) | ≈60MB (Debug) => ≈59MB (Release) | ≈46MB (Debug) => ≈42MB (Release) | ≈2MB (Debug) => ≈2MB (Release) | N/A<sup>1</sup>| ≈61MB (Debug) => ≈60MB (Release) |
| | ***Linux (x64)*** | ≈103MB (Debug) | ≈52MB (Debug) | ? | ? | ? | N/A<sup>1</sup>| ? |
| **Start duration** | ***Windows (x64)*** | ≈93ms (Debug) => ≈131ms (Release) | ≈21ms (Debug) => N/A (Release) | ≈121ms (Debug) => N/A (Release) | ≈103ms (Debug) => N/A (Release) | N/A (Debug) => N/A (Release) | N/A<sup>1</sup>| N/A (Debug) => N/A (Release) |
| | ***Linux (x64)*** | ≈308ms (Debug) | ? | ? | ? | ? | N/A<sup>1</sup>| ? |

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
