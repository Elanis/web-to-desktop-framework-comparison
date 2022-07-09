# Web to Desktop framework comparison

This repository was made to create an objective comparison of multiple framework that grant us to "transform" our web app to desktop application formats.

## Table Of Content
- [Major characteristics](#major-characteristics)
- [Operating systems](#operating-systems)
- [Benchmarks](#benchmarks)
  * [01 - Empty app](#01---empty-app)
  * [02 - Empty app (Frameless)](#02---empty-app-frameless)

## Major characteristics

| | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) |  [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Github stars** | 102.4k | 39k | 46k | 7.7k | 5.8k | 142.5k | 16.1k |
| **Forks** | 13.7k | 4k | 1.1k | 0.2k | 0.3k | 22.6k | 1k |
| **Creation date** | 2013 | 2011 | 2019 | 2019 | 2018 | 2018 | 2020 |
| **Last Update** | 2021 | 2021 | 2021 | 2021 | 2021 | 2021 | 2021 |
| **Framework Language** | C++, JS, Objective-C, Python | C++ | Rust | C++ | C++ | C, C++, Dart | C# |
| **Usage Language - Back** | JS, C++ | JS, C++ | Rust | JS, C++ | JS, C++ | Dart | C# |
| **Usage Language - Front** | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | HTML, CSS, JS | Dart | C# |
| **License** | [MIT](https://github.com/electron/electron/blob/master/LICENSE) | [MIT](https://github.com/nwjs/nw.js/blob/nw52/LICENSE) | [MIT](https://github.com/tauri-apps/tauri/blob/dev/LICENSE) | [MIT](https://github.com/nodegui/nodegui/blob/master/LICENSE) | [MIT](https://github.com/neutralinojs/neutralinojs/blob/master/LICENSE) | [BSD 3-Clause](https://github.com/flutter/flutter/blob/master/LICENSE) | [MIT](https://github.com/dotnet/maui/blob/main/LICENSE) |
| **Developer Dependencies** | [Node.js, Electron NPM Package](https://www.electronjs.org/docs/tutorial/quick-start#prerequisites) | [Node.js, NW.JS SDK](https://nwjs.readthedocs.io/en/latest/For%20Users/Getting%20Started/) | [C++ Compiler, Node.js, Rustc, Cargo](https://tauri.studio/docs/getting-started/prerequisites/) | [Cmake, make, Node.js, NodeGUI NPM Package](https://docs.nodegui.org/docs/guides/getting-started/#developer-environment) | [Node.js, Neu NPM Package](https://neutralino.js.org/docs/#/gettingstarted/quickstart) | [Flutter SDK, Visual Studio 2019 / Clang](https://flutter.dev/desktop#requirements) | [.Net SDK, Visual Studio (optional), WebView2 (optional), Xcode (optional)](https://github.com/dotnet/maui/wiki/Getting-Started) |
| **User Dependencies** | None | None | None | None | None | None | None |
| **Dependencies / modules support** | npm & node.js native addons | npm & node.js native addons | cargo | npm & node.js native addons | ❌ | pub.dev | NuGet |
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
| ***Windows (x64)*** | ≈202MB | ≈329MB | ? | ? | ? | ? | ? |
| ***Windows (x86)*** | ≈180MB | ≈299MB | ? | ? | ? | ? | ? |
| ***Windows (ARM64)*** | ≈202MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| ***MacOS (x64)*** | ≈331MB | ≈306MB | ? | ? | ? | ? | ? |
| ***MacOS (arm64)*** | ≈316MB | ? | ? | ? | ? | ? | ? |
| ***Linux (x64)*** | ≈204MB | ≈423MB | ? | ? | ? | ? | ? |
| ***Linux (x86)*** | ? | ≈421MB | ? | ? | ? | ? | ? |
| ***Linux (ARMv7l)*** | ≈145MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| ***Linux (ARM64)*** | ≈209MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3530ms | ≈29229ms | ? | ? | ? | ? | ? |
| ***Windows (x86)*** | ≈3530ms | ≈29229ms | ? | ? | ? | ? | ? |
| ***Windows (ARM64)*** | ≈3530ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| ***MacOS (x64)*** | ≈2970ms | ≈29229ms | ? | ? | ? | ? | ? |
| ***MacOS (arm64)*** | ≈2970ms | ? | ? | ? | ? | ? | ? |
| ***Linux (x64)*** | ≈1993ms | ≈29229ms | ? | ? | ? | ? | ? |
| ***Linux (x86)*** | ? | ≈29229ms | ? | ? | ? | ? | ? |
| ***Linux (ARMv7l)*** | ≈1993ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| ***Linux (ARM64)*** | ≈1993ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |

### Memory Usage  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈66MB (Debug) => ≈79MB (Release) | ≈88MB (Debug) => ≈54MB (Release) | ≈42MB (Debug) | ≈120MB (Debug) | ≈37MB (Debug) | ≈261MB (Debug) | ≈2MB (Debug) |
| ***MacOS (x64)*** | ≈65MB (Debug) => ≈63MB (Release) | ≈46MB (Debug) => ≈73MB (Release) | ≈56MB (Debug) | ≈137MB (Debug) | ≈23MB (Debug) | ≈169MB (Debug) | ≈24MB (Debug) |
| ***Linux (x64)*** | ≈115MB (Debug) => ≈110MB (Release) | ≈77MB (Debug) => ≈53MB (Release) | ≈166MB (Debug) => ≈156MB (Release) | ≈145MB (Debug) | ≈29MB (Debug) | ≈423MB (Debug) | ≈9MB (Debug) |

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈132ms (Debug) => ≈102ms (Release) | ? | ≈79ms (Debug) | ? | ? | ? | ? |
| ***MacOS (x64)*** | ≈277ms (Debug) => ≈245ms (Release) | ? | ≈394ms (Debug) | ? | ? | ? | ? |
| ***Linux (x64)*** | ≈103ms (Debug) => ≈95ms (Release) | ? | ≈269ms (Debug) => ≈184ms (Release) | ? | ? | ? | ? |

# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈202MB | ≈329MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Windows (x86)*** | ≈180MB | ≈299MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Windows (ARM64)*** | ≈202MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (x64)*** | ≈331MB | ≈306MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (arm64)*** | ≈316MB | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x64)*** | ≈204MB | ≈423MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x86)*** | ? | ≈421MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (ARMv7l)*** | ≈145MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (ARM64)*** | ≈209MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈4539ms | ≈22944ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Windows (x86)*** | ≈4539ms | ≈22944ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Windows (ARM64)*** | ≈4539ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (x64)*** | ≈2987ms | ≈22944ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (arm64)*** | ≈2987ms | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x64)*** | ≈3867ms | ≈22944ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x86)*** | ? | ≈22944ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (ARMv7l)*** | ≈2173ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (ARM64)*** | ≈2173ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |

### Memory Usage  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈102MB (Debug) | ≈69MB (Debug) => ≈56MB (Release) | ≈43MB (Debug) | ≈120MB (Debug) | ≈37MB (Debug) | N/A<sup>1</sup>| ≈2MB (Debug) |
| ***MacOS (x64)*** | ≈65MB (Debug) => ≈63MB (Release) | ≈41MB (Debug) => ≈77MB (Release) | ≈57MB (Debug) | ≈140MB (Debug) | ≈22MB (Debug) | N/A<sup>1</sup>| ≈17MB (Debug) |
| ***Linux (x64)*** | ≈113MB (Debug) => ≈107MB (Release) | ≈74MB (Debug) => ≈53MB (Release) | ≈167MB (Debug) => ≈155MB (Release) | ≈151MB (Debug) | ≈29MB (Debug) | N/A<sup>1</sup>| ≈7MB (Debug) |

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈123ms (Debug) | ? | ≈72ms (Debug) | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (x64)*** | ≈252ms (Debug) => ≈200ms (Release) | ? | ≈367ms (Debug) | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x64)*** | ≈86ms (Debug) => ≈80ms (Release) | ? | ≈265ms (Debug) => ≈166ms (Release) | ? | ? | N/A<sup>1</sup>| ? |

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
