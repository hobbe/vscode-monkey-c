# Garmin Connect IQ Extension for VS Code

This Visual Studio Code extension adds support for Garmin Connect IQ
[Monkey C](https://developer.garmin.com/connect-iq/programmers-guide/monkey-c/)
language.

This project is a fork from vscode-monkey-c:

- [adamcrossland/vscode-monkey-c](https://github.com/adamcrossland/vscode-monkey-c)
- [ghisguth/vscode-monkey-c](https://github.com/ghisguth/vscode-monkey-c)

## Features

### Syntax Highlighting

The extension provides basic syntax highlighting for Monkey C.

![Syntax highlighting](./images/syntax.png)

### Commands

Commands available:

- New Connect IQ Project

### Snippets

Snippets available:

- New function
- New class
- New View class

## Settings

- `connectiq.sdkPath`: Path to the
  [Connect IQ SDK](https://developer.garmin.com/connect-iq/sdk/).
  This is used for VS Code tasks (tasks.json)
- `connectiq.javaPath`: Path to a Java Runtime Environment (version <= 1.8). The
  Connect IQ SDK makes use of a Java VM.
  This is used for VS Code tasks (tasks.json)
- `connectiq.developerKey`: Path to Garmin developer certificate (*.der). The
  Connect IQ compiler requires a developer key to sign apps when they are
  compiled and packaged. See
  [Generating a Developer Key](https://developer.garmin.com/connect-iq/programmers-guide/getting-started/#generatingadeveloperkeyconnectiq1.3).
  This is used for VS Code tasks (tasks.json)

## Requirements

- None

## Known Issues

- Not all of the language features implemented yet. Work in progress.

## Release Notes

See [changelog](./CHANGELOG.md).

## License

See [license](./LICENSE).
