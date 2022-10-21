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
| **Github stars** | 104k | 39.2k | 52k | 8k | 6.1k | 145.6k | 17.2k |
| **Forks** | 13.9k | 4k | 1.3k | 0.2k | 0.3k | 23.4k | 1.1k |
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
| ***Windows (x64)*** | ≈226MB | ≈329MB | ≈3MB | ≈171MB | ≈2MB | ? | ? |
| ***Windows (x86)*** | ≈202MB | ≈299MB | ? | ? | ? | ? | ? |
| ***Windows (ARM64)*** | ≈226MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| ***MacOS (x64)*** | ≈358MB | ≈306MB | ≈6MB | ? | ≈1MB | ? | ? |
| ***MacOS (arm64)*** | ≈343MB | ? | ? | ? | ? | ? | ? |
| ***Linux (x64)*** | ≈231MB | ≈423MB | ≈6MB | ≈236MB | ≈1MB | ? | ? |
| ***Linux (x86)*** | ? | ≈421MB | ? | ? | ? | ? | ? |
| ***Linux (ARMv7l)*** | ≈168MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| ***Linux (ARM64)*** | ≈236MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | ? |

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3903ms | ≈24617ms | ≈350327ms | ≈12256ms | ≈526ms | ? | ? |
| ***Windows (x86)*** | ≈3903ms | ≈24617ms | ? | ? | ? | ? | ? |
| ***Windows (ARM64)*** | ≈3903ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | ? |
| ***MacOS (x64)*** | ≈22203ms | ≈24617ms | ≈616264ms | ? | ≈526ms | ? | ? |
| ***MacOS (arm64)*** | ≈22203ms | ? | ? | ? | ? | ? | ? |
| ***Linux (x64)*** | ≈2533ms | ≈24617ms | ≈436501ms | ≈46899ms | ≈526ms | ? | ? |
| ***Linux (x86)*** | ? | ≈24617ms | ? | ? | ? | ? | ? |
| ***Linux (ARMv7l)*** | ≈2533ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | ? |
| ***Linux (ARM64)*** | ≈2533ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈526ms | ? | ? |

### Memory Usage  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈67MB (Debug) => ≈83MB (Release) | ≈54MB (Debug) => ≈46MB (Release) | ≈43MB (Debug) => ≈23MB (Release) | ≈117MB (Debug) | ≈49MB (Debug) | ≈282MB (Debug) | ≈8MB (Debug) |
| ***MacOS (x64)*** | ≈63MB (Debug) => ≈63MB (Release) | ≈45MB (Debug) => ≈75MB (Release) | ≈48MB (Debug) => ≈29MB (Release) | ≈125MB (Debug) | ≈73MB (Debug) => ≈27MB (Release) | ≈142MB (Debug) | ≈25MB (Debug) |
| ***Linux (x64)*** | ≈117MB (Debug) => ≈112MB (Release) | ≈82MB (Debug) => ≈54MB (Release) | ≈159MB (Debug) => ≈156MB (Release) | ≈153MB (Debug) | ≈167MB (Debug) => ≈175MB (Release) | ≈403MB (Debug) | ≈12MB (Debug) |

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈190ms (Debug) => ≈89ms (Release) | ? | ≈99ms (Debug) => ≈71ms (Release) | ? | ? | ? | ? |
| ***MacOS (x64)*** | ≈524ms (Debug) => ≈266ms (Release) | ? | ≈622ms (Debug) => ≈686ms (Release) | ? | ? | ? | ? |
| ***Linux (x64)*** | ≈98ms (Debug) => ≈91ms (Release) | ? | ≈211ms (Debug) => ≈189ms (Release) | ? | ? | ? | ? |

# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈226MB | ≈317MB | ≈3MB | ≈171MB | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈202MB | ≈288MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈226MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈358MB | ≈492MB | ≈6MB | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈343MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈231MB | ≈427MB | ≈6MB | ≈236MB | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈424MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈168MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈236MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3851ms | ≈24560ms | ≈402777ms | ≈13647ms | ≈506ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈3851ms | ≈24560ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈3851ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈16618ms | ≈24560ms | ≈589110ms | ? | ≈506ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈16618ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈2534ms | ≈24560ms | ≈466131ms | ≈47867ms | ≈506ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈24560ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈2534ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈2534ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈506ms | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈65MB (Debug) => ≈81MB (Release) | ≈77MB (Debug) => ≈48MB (Release) | ≈42MB (Debug) => ≈21MB (Release) | ≈104MB (Debug) | ≈49MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈65MB (Debug) => ≈64MB (Release) | ≈45MB (Debug) => ≈75MB (Release) | ≈47MB (Debug) => ≈27MB (Release) | ≈132MB (Debug) | ≈72MB (Debug) => ≈27MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈114MB (Debug) => ≈109MB (Release) | ≈77MB (Debug) => ≈53MB (Release) | ≈159MB (Debug) => ≈156MB (Release) | ≈118MB (Debug) | ≈168MB (Debug) => ≈175MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈174ms (Debug) => ≈91ms (Release) | ? | ≈120ms (Debug) => ≈99ms (Release) | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈473ms (Debug) => ≈302ms (Release) | ? | ≈444ms (Debug) => ≈300ms (Release) | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈103ms (Debug) => ≈93ms (Release) | ? | ≈244ms (Debug) => ≈207ms (Release) | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|

**<sup>1</sup>**: Frameless mode not supported yet  
**<sup>2</sup>**: Frameless mode not working  



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
