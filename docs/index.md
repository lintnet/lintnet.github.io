---
sidebar_position: 1
---

# Home

[Release Notes](https://github.com/lintnet/lintnet/releases) | [Versioning Policy](https://github.com/suzuki-shunsuke/versioning-policy) | [MIT LICENSE](https://github.com/lintnet/lintnet/blob/main/LICENSE)

lintnet is a secure, powerful, reusable linter powered by [Jsonnet](https://jsonnet.org/).
You can write lint rules in Jsonnet and lint various files ([Supported formats](supported-data-format.md)).

```console
$ lintnet lint
{
  "lintnet_version": "0.2.0",
  "env": "darwin/arm64",
  "errors": [
    {
      "name": "description is required",
      "lint_file": "hello.jsonnet",
      "data_file": "hello.json"
    }
  ]
}
FATA[0000] lintnet failed                                env=darwin/arm64 error=lint failed program=lintnet version=0.2.0
```

## :warning: This project is still under development

This tool doesn't work and API is unstable yet.
Please don't use this tool yet.

## Features

- Lint various types of files ([Supported formats](supported-data-format.md))
- Powerful. You can lint configuration files flexibly by Jsonnet
- Secure. Jsonnet can't access filesystem and network so it's secure compared with common programming languages such as JavaScript
- Cross Platform. lintnet works on Linux, macOS, Windows / amd64, arm64
- [Easy to install](install.md). lintnet is a single binary written in [Go](https://go.dev/), so you only need to install an executable file into `$PATH`. lintnet has no dependency that you need to install
- [Test lint rules](test-rule.md)
- [Share and reuse lint rules as Modules](module.md)
  - [Update Modules by Renovate](module.md#update-modules-by-renovate)
- [Lint across multiple files](guides/lint-across-files.md)
- [Customize output format](guides/customize-output.md)

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

## Comparison

### Conftest

- 👍 High reusability
- 👍 Jsonnet is easier than Rego, though this is subjective and depends on you
- 👍 Declarative configuration

#### 👍 High reusability

When we used Conftest, we complaint we couldn't reuse Conftest policies well.

1. Conftest has the mechanism to push and pull policies, but we think this isn't enough. More sophisticated and standardized way is necessary
1. It's a little difficult to share Conftest policies between multiple repositories.
Of course it's possible, but there is no standard way
1. Each organization writes similar policies from scratch independently.
This isn't good. Ideally, policies should be shared and reused all over the world

lintnet has the module mechanism. you can distribute and reuse modules easily in the standard way.
Not only lint rules but also Jsonnet functions can be shared as modules.
You can update modules continuously by Renovate.

About modules, please see [Module](module).

#### 👍 Jsonnet is easier than Rego

This is so subjective and depends on you, but some people would feel Jsonnet is easier than Rego.

Rego is awesome, but it's different from other programing languages such as JavaScript and Python, so some people have difficulty in learning Rego.

If you complain about Rego, maybe you like Jsonnet.

### Programing languages such as Python and JavaScript

- 👍 Secure
- 👍 You only need to implement lint logic. You don't need to implement other feature such as reading and parsing files and outputs results

If you reuse third party libraries as lint rules, you need to check if they are secure.
Common programing languages such as Python and JavaScript do anything, so attackers can execute malicious codes. It would be difficult to ensure security.
On the other hand, Jsonnet can't access filesystem and network so it's securer than those programming languages.

## Sub projects

https://github.com/orgs/lintnet/repositories

- [lintnet](https://github.com/lintnet/lintnet): CLI
- [modules](https://github.com/lintnet/modules): Official modules
- [examples](https://github.com/lintnet/examples): Examples
- [renovate-config](https://github.com/lintnet/renovate-config): Renovate Config Preset to update modules
- [lintnet.github.io](https://github.com/lintnet/lintnet.github.io): Official web site
- [go-jsonnet-native-functions](https://github.com/lintnet/go-jsonnet-native-functions): Go package porting several Go's Standard libraries functions to go-jsonnet's Native functions
