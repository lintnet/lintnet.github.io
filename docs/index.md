---
sidebar_position: 1
---

# Home

Configuration file linter powered by [Jsonnet](https://jsonnet.org/)

You can write lint rules in Jsonnet and lint configuration files ([Supported formats](#supported-file-format)).

## :warning: This project is still under development

This tool doesn't work and API is unstable yet.
Please don't use this tool yet.

## Features

- Lint various types of configuration files ([Supported formats](#supported-file-format))
- Powerful. You can lint configuration files flexibly by Jsonnet. And lintnet extends Jsonnet by native functions
- Secure. Jsonnet can't access filesystem and network so it's secure compared with common programming languages such as JavaScript
- Cross Platform. lintnet works on Linux, macOS, and Windows. And it works on both amd64 and arm64
- Easy to install. lintnet is a single binary written in [Go](https://go.dev/), so you only need to install an executable file into `$PATH`. lintnet has no dependency that you need to install.

## Why Jsonnet?

- Powerful
  - Jsonnet has enough features to lint data
    - e.g. Variables, Functions, Conditions, Array and Object Comprehension, Imports, Errors, External variables, Top-level arguments, Standard library
- Simple
  - The learning cost is not so high
- Popular
  - You can search information and ask help to others when you have some troubles
  - You can utilize the knowledge for not only this tool but also other projects
- Secure
  - Jsonnet can't access file systems and networks and can't execute external commands

## Example

Please see [examples](https://github.com/lintnet/lintnet/tree/main/examples).

## LICENSE

[MIT](https://github.com/lintnet/lintnet/blob/main/LICENSE)
