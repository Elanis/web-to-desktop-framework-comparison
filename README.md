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
| **Github stars** | 102.6k | 39k | 47.1k | 7.8k | 5.8k | 142.8k | 16.3k |
| **Forks** | 13.7k | 4k | 1.2k | 0.2k | 0.3k | 22.8k | 1k |
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
| ***Windows (x64)*** | ≈202MB | ≈317MB | ≈3MB | ? | ≈2MB | ? | ? |
| ***Windows (x86)*** | ≈180MB | ≈288MB | ? | ? | ? | ? | ? |
| ***Windows (ARM64)*** | ≈202MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| ***MacOS (x64)*** | ≈331MB | ≈488MB | ≈6MB | ? | ≈1MB | ? | ? |
| ***MacOS (arm64)*** | ≈316MB | ? | ? | ? | ? | ? | ? |
| ***Linux (x64)*** | ≈204MB | ≈423MB | ≈6MB | ? | ≈1MB | ? | ? |
| ***Linux (x86)*** | ? | ≈421MB | ? | ? | ? | ? | ? |
| ***Linux (ARMv7l)*** | ≈145MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| ***Linux (ARM64)*** | ≈209MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | ? |

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈5803ms | ≈73463ms | ≈631774ms | ? | ≈700ms | ? | ? |
| ***Windows (x86)*** | ≈5803ms | ≈73463ms | ? | ? | ? | ? | ? |
| ***Windows (ARM64)*** | ≈5803ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| ***MacOS (x64)*** | ≈3872ms | ≈73463ms | ≈409964ms | ? | ≈700ms | ? | ? |
| ***MacOS (arm64)*** | ≈3872ms | ? | ? | ? | ? | ? | ? |
| ***Linux (x64)*** | ≈3234ms | ≈73463ms | ≈474225ms | ? | ≈700ms | ? | ? |
| ***Linux (x86)*** | ? | ≈73463ms | ? | ? | ? | ? | ? |
| ***Linux (ARMv7l)*** | ≈3234ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| ***Linux (ARM64)*** | ≈3234ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈700ms | ? | ? |

### Memory Usage  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈64MB (Debug) => ≈79MB (Release) | ≈85MB (Debug) => ≈53MB (Release) | ≈42MB (Debug) => ≈24MB (Release) | ≈119MB (Debug) | ≈53MB (Debug) | ≈271MB (Debug) | ≈3MB (Debug) |
| ***MacOS (x64)*** | ≈65MB (Debug) => ≈63MB (Release) | ≈43MB (Debug) => ≈76MB (Release) | ≈58MB (Debug) => ≈29MB (Release) | ≈137MB (Debug) | ≈77MB (Debug) => ≈27MB (Release) | ≈142MB (Debug) | ≈23MB (Debug) |
| ***Linux (x64)*** | ≈116MB (Debug) => ≈110MB (Release) | ≈96MB (Debug) => ≈53MB (Release) | ≈167MB (Debug) => ≈154MB (Release) | ≈148MB (Debug) | ≈175MB (Debug) => ≈182MB (Release) | ≈408MB (Debug) | ≈8MB (Debug) |

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈174ms (Debug) => ≈130ms (Release) | ? | ≈110ms (Debug) => ≈116ms (Release) | ? | ? | ? | ? |
| ***MacOS (x64)*** | ≈289ms (Debug) => ≈264ms (Release) | ? | ≈681ms (Debug) => ≈496ms (Release) | ? | ? | ? | ? |
| ***Linux (x64)*** | ≈94ms (Debug) => ≈86ms (Release) | ? | ≈261ms (Debug) => ≈174ms (Release) | ? | ? | ? | ? |

# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈202MB | ≈317MB | ≈3MB | ? | ≈2MB | N/A<sup>1</sup>| ? |
| ***Windows (x86)*** | ≈180MB | ≈288MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Windows (ARM64)*** | ≈202MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (x64)*** | ≈331MB | ≈488MB | ≈6MB | ? | ≈1MB | N/A<sup>1</sup>| ? |
| ***MacOS (arm64)*** | ≈316MB | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x64)*** | ≈204MB | ≈423MB | ≈6MB | ? | ≈1MB | N/A<sup>1</sup>| ? |
| ***Linux (x86)*** | ? | ≈421MB | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (ARMv7l)*** | ≈145MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (ARM64)*** | ≈209MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | N/A<sup>1</sup>| ? |

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3841ms | ≈12258ms | ≈457173ms | ? | ≈625ms | N/A<sup>1</sup>| ? |
| ***Windows (x86)*** | ≈3841ms | ≈12258ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Windows (ARM64)*** | ≈3841ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (x64)*** | ≈3820ms | ≈12258ms | ≈376325ms | ? | ≈625ms | N/A<sup>1</sup>| ? |
| ***MacOS (arm64)*** | ≈3820ms | ? | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x64)*** | ≈1998ms | ≈12258ms | ≈481666ms | ? | ≈625ms | N/A<sup>1</sup>| ? |
| ***Linux (x86)*** | ? | ≈12258ms | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (ARMv7l)*** | ≈1998ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (ARM64)*** | ≈1998ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈625ms | N/A<sup>1</sup>| ? |

### Memory Usage  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈66MB (Debug) => ≈78MB (Release) | ≈81MB (Debug) => ≈49MB (Release) | ≈43MB (Debug) => ≈22MB (Release) | ≈121MB (Debug) | ≈56MB (Debug) | N/A<sup>1</sup>| ≈2MB (Debug) |
| ***MacOS (x64)*** | ≈65MB (Debug) => ≈63MB (Release) | ≈52MB (Debug) => ≈73MB (Release) | ≈55MB (Debug) => ≈27MB (Release) | ≈139MB (Debug) | ≈80MB (Debug) => ≈26MB (Release) | N/A<sup>1</sup>| ≈21MB (Debug) |
| ***Linux (x64)*** | ≈113MB (Debug) => ≈108MB (Release) | ≈86MB (Debug) => ≈54MB (Release) | ≈164MB (Debug) => ≈154MB (Release) | ≈141MB (Debug) | ≈175MB (Debug) => ≈181MB (Release) | N/A<sup>1</sup>| ≈8MB (Debug) |

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈133ms (Debug) => ≈101ms (Release) | ? | ≈90ms (Debug) => ≈78ms (Release) | ? | ? | N/A<sup>1</sup>| ? |
| ***MacOS (x64)*** | ≈304ms (Debug) => ≈336ms (Release) | ? | ≈452ms (Debug) => ≈221ms (Release) | ? | ? | N/A<sup>1</sup>| ? |
| ***Linux (x64)*** | ≈92ms (Debug) => ≈82ms (Release) | ? | ≈278ms (Debug) => ≈179ms (Release) | ? | ? | N/A<sup>1</sup>| ? |

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
