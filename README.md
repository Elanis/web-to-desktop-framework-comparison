# Web to Desktop framework comparison

This repository was made to create an objective comparison of multiple framework that grant us to "transform" our web app to desktop application formats.

## Table Of Content
- [Major characteristics](#major-characteristics)
- [Operating systems](#operating-systems)

## Major characteristics

| | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [Neutralino](https://github.com/neutralinojs/neutralinojs) |
|:---:|:---:|:---:|:---:|:---:|
| Github stars | 91k | 38k | 13k | 3k |
| Forks | 12k | 4k | 0.3k | 0.2k |
| Creation date | 2013 | 2011 | 2017 | 2018 |
| Last Update | 2021 | 2021 | 2021 | 2021 |
| Framework Language | C++ | C++ | Rust | C++ |
| License | [MIT](https://github.com/electron/electron/blob/master/LICENSE) | [MIT](https://github.com/nwjs/nw.js/blob/nw52/LICENSE) | [MIT](https://github.com/tauri-apps/tauri/blob/dev/LICENSE) | [MIT](https://github.com/neutralinojs/neutralinojs/blob/master/LICENSE) |
| Developer Dependencies | Node.js, Electron NPM Package | Node.js, NW.JS SDK | C++ Compiler, Node.JS, Rustc, Cargo, Tauri Bundler | C++ Compiler, Node.js, WebPack Bundler, WebkitGTK+ |
| User Dependencies | None | None | None | None |
| Engine | Chromium | Webkit/Chromium | Cocoa/WebKit on macOS, gtk-webkit2 on Linux and MSHTML (IE10/11) or Webkit via Edge on Windows | WebkitGTK+ |

## Operating systems

|  |  | [Electron](https://github.com/electron/electron) | [NW.JS](https://github.com/nwjs/nw.js) | [Tauri](https://github.com/tauri-apps/tauri) | [Neutralino](https://github.com/neutralinojs/neutralinojs) |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **Developement Environment** | Windows | ✔️ | ✔️ | ✔️ | ✔️ |
| | MacOS | ✔️ | ✔️ | ✔️ | ✔️ |
| | Linux | ✔️ | ✔️ | ✔️ | ✔️ |
| **Target Environment** | Windows | ✔️ | ✔️ | ✔️ | ✔️ |
| | MacOS | ✔️ | ✔️ | ✔️ | ✔️ |
| | Linux | ✔️ | ✔️ | ✔️ | ✔️ |
| | Android | ❌ | ❌ | Soon | ❌ |
| | IOS | ❌ | ❌ | Soon | ❌ |


TODO:
- WebGL Support
- Build constraints
- Source code protection