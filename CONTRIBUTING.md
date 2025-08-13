# How to contribute

Thanks for wanting to contribute! Every small help is meaningful!

Before starting an issue or a pull request, please check that it doesn't already exist.

You can either:
- Open an [Issue](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/new) on the repository
- Fork the project, edit it, and create a pull request on this repository

## I want to add new lines to the comparison table to compare features!

First, you can create an [Issue](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/new) so we can talk about it and the best way to make this information available to the readers of this repo.

Then, when you open your pull request, you'll have to **edit template files** located in the `runner/` folder (`README.template.begin.md` and/or `README.template.end.md`) and finally run the `write_readme.js` script to regenerate `README.md`.

## I want to add a new library to the comparison!

First, you have to create an [Issue](https://github.com/Elanis/web-to-desktop-framework-comparison/issues/new). Not all frameworks are added to this comparison; otherwise, it would be a mess. I try to add only the ones known enough (my rule of thumb is usually > 1k stars on Github, but if it's known from other sources, we can discuss it).
Also, we try to focus on technologies that use a front-end app to be deployed as desktop apps. No framework that does desktop-only (or desktop-mobile only) apps, like Qt, for example.

Once a framework/library has been accepted, you can open a pull request. What I need is:
- A full working example with debug and release mode, and if possible, on all 3 OSes (Windows, Ubuntu, and MacOS)
- You should respect the content of the page (no more, no less content than the other examples to improve the benchmark accuracy)
- You should log to stdout (if possible) when your app is ready, `App started and loaded !` so the benchmark tool can detect the startup duration
- If the initial startup phase takes time (e.g., building some modules like with Tauri), you can give me the log to wait before starting the startup duration timer
- (Optional) You can configure the runner. But since it's not the clearest code (I plan on working on it), I don't mind configuring the benchmark if you gave me the previous informations as well as the debug start command, build release command, executable locations as well as what folder I should count for build size (what should be distributed to the client).

Follow the already existing directory structure:
```
benchmark/
  application-type/
    framework-name/
      => Your example here
runner/
  => Runner files for the automated benchmarks
```
