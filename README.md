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

*Note:* These benchmarks are done on Github CI, there are measures to have measurements more accurates (e.g. multiple runs), but it will never exactly be accurate, as it totally depends on system load and resources. You should read these tables as comparision between frameworks on a same OS/Arch/App with a margin of error.


# 01-empty-app

See source in [benchmark/01-empty-app](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/01-empty-app/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈202MB | ≈314MB | ? | ? | ? | ? | ? |
| ***Windows (x86)*** | ≈180MB | ≈285MB | ? | ? | ? | ? | ? |
| ***Windows (ARM64)*** | ≈202MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| ***MacOS (x64)*** | ≈331MB | ≈483MB | ? | ? | ? | ? | ? |
| ***MacOS (arm64)*** | ≈316MB | ? | ? | ? | ? | ? | ? |
| ***Linux (x64)*** | ≈204MB | ≈421MB | ? | ? | ? | ? | ? |
| ***Linux (x86)*** | ≈179MB | ≈421MB | ? | ? | ? | ? | ? |
| ***Linux (ARMv7l)*** | ≈145MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| ***Linux (ARM64)*** | ≈209MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3853ms | ≈22946ms | ? | ? | ? | ? | ? |
| ***Windows (x86)*** | ≈3853ms | ≈22946ms | ? | ? | ? | ? | ? |
| ***Windows (ARM64)*** | ≈3853ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| ***MacOS (x64)*** | ≈4558ms | ≈22946ms | ? | ? | ? | ? | ? |
| ***MacOS (arm64)*** | ≈4558ms | ? | ? | ? | ? | ? | ? |
| ***Linux (x64)*** | ≈2940ms | ≈22946ms | ? | ? | ? | ? | ? |
| ***Linux (x86)*** | ≈2368ms | ≈22946ms | ? | ? | ? | ? | ? |
| ***Linux (ARMv7l)*** | ≈2940ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| ***Linux (ARM64)*** | ≈2940ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |

### Memory Usage  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈66MB (Debug) => ≈79MB (Release) | ≈82MB (Debug) => ≈44MB (Release) | ≈49MB (Debug) | ≈117MB (Debug) | ≈38MB (Debug) | ≈264MB (Debug) | ≈3MB (Debug) |
| ***MacOS (x64)*** | ≈65MB (Debug) => ≈61MB (Release) | ≈45MB (Debug) => ≈75MB (Release) | ≈59MB (Debug) | ≈146MB (Debug) | ≈40MB (Debug) | ≈144MB (Debug) | ≈25MB (Debug) |
| ***Linux (x64)*** | ≈116MB (Debug) => ≈110MB (Release) | ≈94MB (Debug) => ≈53MB (Release) | ≈69MB (Debug) | ≈149MB (Debug) | ≈28MB (Debug) | ≈228MB (Debug) | ≈11MB (Debug) |

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈154ms (Debug) => ≈95ms (Release) | ? | ? | ? | ? | ? | ? |
| ***MacOS (x64)*** | ≈300ms (Debug) => ≈587ms (Release) | ? | ? | ? | ? | ? | ? |
| ***Linux (x64)*** | ≈109ms (Debug) => ≈101ms (Release) | ? | ? | ? | ? | ? | ? |

# 02-empty-app-headless

See source in [benchmark/02-empty-app-headless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-headless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈202MB | ≈314MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Windows (x86)*** | ≈180MB | ≈285MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Windows (ARM64)*** | ≈202MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (x64)*** | ≈331MB | ≈483MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (arm64)*** | ≈316MB | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x64)*** | ≈204MB | ≈421MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x86)*** | ≈179MB | ≈421MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (ARMv7l)*** | ≈145MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (ARM64)*** | ≈209MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3057ms | ≈33100ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Windows (x86)*** | ≈3057ms | ≈33100ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Windows (ARM64)*** | ≈3057ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (x64)*** | ≈1876ms | ≈33100ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (arm64)*** | ≈1876ms | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x64)*** | ≈1880ms | ≈33100ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x86)*** | ≈1871ms | ≈33100ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (ARMv7l)*** | ≈1880ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (ARM64)*** | ≈1880ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |

### Memory Usage  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈65MB (Debug) => ≈77MB (Release) | ≈81MB (Debug) => ≈46MB (Release) | ≈49MB (Debug) | ≈124MB (Debug) | ≈32MB (Debug) | N/A<sup>1</sup>| ≈1MB (Debug) |
| ***MacOS (x64)*** | ≈65MB (Debug) => ≈63MB (Release) | ≈45MB (Debug) => ≈76MB (Release) | ≈60MB (Debug) | ≈144MB (Debug) | ≈32MB (Debug) | N/A<sup>1</sup>| ≈21MB (Debug) |
| ***Linux (x64)*** | ≈106MB (Debug) => ≈107MB (Release) | ≈96MB (Debug) => ≈53MB (Release) | ≈72MB (Debug) | ≈155MB (Debug) | ≈32MB (Debug) | N/A<sup>1</sup>| ≈11MB (Debug) |

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈122ms (Debug) => ≈91ms (Release) | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (x64)*** | ≈260ms (Debug) => ≈266ms (Release) | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x64)*** | ≈184ms (Debug) => ≈102ms (Release) | ? | ? | ? | ? | N/A<sup>1</sup>| ? |

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
