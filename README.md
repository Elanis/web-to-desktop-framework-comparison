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
| **Github stars** | 104.7k | 39.3k | 54.6k | 8.1k | 6.2k | 146.8k | 17.8k |
| **Forks** | 14.1k | 4k | 1.4k | 0.3k | 0.3k | 23.9k | 1.1k |
| **Creation date** | 2013 | 2011 | 2019 | 2019 | 2018 | 2018 | 2020 |
| **Last Update** | 11/2022 | 11/2022 | 11/2022 | 11/2022 | 11/2022 | 11/2022 | 11/2022 |
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
| ***Windows (x64)*** | ≈226MB | ≈330MB | ≈3MB | ≈171MB | ≈2MB | ? | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈202MB | ≈298MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈226MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈358MB | ≈508MB | ≈5MB | ? | ≈1MB | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈343MB | ? | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈236MB | ≈442MB | ≈6MB | ≈67MB | ≈1MB | ? | N/A<sup>1</sup>|
| ***Linux (x86)*** | ? | ≈440MB | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈174MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈241MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | ? | N/A<sup>1</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈3789ms | ≈10628ms | ≈453568ms | ≈12596ms | ≈866ms | ? | N/A<sup>1</sup>|
| ***Windows (x86)*** | ≈3789ms | ≈10628ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Windows (ARM64)*** | ≈3789ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈3506ms | ≈10628ms | ≈315891ms | ? | ≈993ms | ? | N/A<sup>1</sup>|
| ***MacOS (arm64)*** | ≈3506ms | ? | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈4016ms | ≈10628ms | ≈499880ms | ≈14347ms | ≈993ms | ? | N/A<sup>1</sup>|
| ***Linux (x86)*** | ? | ≈10628ms | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARMv7l)*** | ≈4016ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | ? | N/A<sup>1</sup>|
| ***Linux (ARM64)*** | ≈4016ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈993ms | ? | N/A<sup>1</sup>|

### Memory Usage  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈66MB (Debug) => ≈83MB (Release) | ≈73MB (Debug) => ≈49MB (Release) | ≈44MB (Debug) => ≈24MB (Release) | ≈128MB (Debug) | ≈64MB (Debug) | ≈257MB (Debug) | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈63MB (Debug) => ≈62MB (Release) | ≈102MB (Debug) => ≈80MB (Release) | ≈49MB (Debug) => ≈29MB (Release) | ≈107MB (Debug) | ≈80MB (Debug) => ≈28MB (Release) | ≈194MB (Debug) | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈154MB (Debug) => ≈152MB (Release) | ≈90MB (Debug) => ≈5MB (Release) | ≈104MB (Debug) => ≈74MB (Release) | ≈154MB (Debug) | ≈193MB (Debug) => ≈213MB (Release) | ≈354MB (Debug) | N/A<sup>1</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈285ms (Release) | ≈709ms (Release) | ≈359ms (Release) | ? | ? | ? | N/A<sup>1</sup>|
| ***MacOS (x64)*** | ≈1699ms (Debug) => ≈937ms (Release) | ≈1746ms (Release) | ≈7165ms (Debug) => ≈807ms (Release) | ? | ≈2701ms (Debug) => ≈920ms (Release) | ? | N/A<sup>1</sup>|
| ***Linux (x64)*** | ≈914ms (Debug) => ≈465ms (Release) | ? | ≈49246ms (Debug) | ? | ≈2134ms (Debug) => ≈651ms (Release) | ? | N/A<sup>1</sup>|

**<sup>1</sup>**: Benchmark WIP  



# 02-empty-app-frameless

See source in [benchmark/02-empty-app-frameless](https://github.com/Elanis/web-to-desktop-framework-comparison/tree/main/benchmark/02-empty-app-frameless/) folder.


### Build size  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈226MB | ≈330MB | ≈3MB | ≈171MB | ≈2MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈202MB | ≈298MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈226MB | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈358MB | ≈504MB | ≈5MB | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈343MB | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈231MB | ? | ≈6MB | ≈67MB | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈437MB | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈168MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈236MB | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1MB | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Build time  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈4127ms | ≈39778ms | ≈467637ms | ≈12925ms | ≈643ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (x86)*** | ≈4127ms | ≈39778ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Windows (ARM64)*** | ≈4127ms | [Requested](https://github.com/nwjs/nw.js/issues/7599) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈4250ms | ≈39778ms | ≈337352ms | ? | ≈1074ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (arm64)*** | ≈4250ms | ? | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈2790ms | ? | ≈395893ms | ≈10021ms | ≈1074ms | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x86)*** | ? | ≈39778ms | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARMv7l)*** | ≈2790ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (ARM64)*** | ≈2790ms | [Requested](https://github.com/nwjs/nw.js/issues/1151) | ? | ? | ≈1074ms | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Memory Usage  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈64MB (Debug) => ≈80MB (Release) | ≈87MB (Debug) => ≈39MB (Release) | ≈44MB (Debug) => ≈23MB (Release) | ≈102MB (Debug) | ≈52MB (Debug) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈64MB (Debug) => ≈62MB (Release) | ≈81MB (Debug) => ≈80MB (Release) | ≈50MB (Debug) => ≈27MB (Release) | ≈111MB (Debug) | ≈71MB (Debug) => ≈27MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈148MB (Debug) => ≈148MB (Release) | ≈115MB (Debug) | ≈108MB (Debug) => ≈74MB (Release) | ≈152MB (Debug) | ≈200MB (Debug) => ≈216MB (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

### Start duration  

|  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [NodeGui](https://github.com/nodegui/nodegui) | [Neutralino](https://github.com/neutralinojs/neutralinojs) | [Flutter](https://github.com/flutter/flutter) | [.Net MAUI](https://github.com/dotnet/maui) |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| ***Windows (x64)*** | ≈291ms (Release) | ≈717ms (Release) | ≈387ms (Release) | ? | ? | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***MacOS (x64)*** | ≈2071ms (Debug) => ≈3132ms (Release) | ≈1732ms (Release) | ≈7680ms (Debug) => ≈769ms (Release) | ? | ≈3043ms (Debug) => ≈1149ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|
| ***Linux (x64)*** | ≈644ms (Debug) => ≈347ms (Release) | ? | ≈45665ms (Debug) | ? | ≈1783ms (Debug) => ≈497ms (Release) | N/A<sup>1</sup>| N/A<sup>2</sup>|

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
