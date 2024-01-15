---
sidebar_position: 500
---

# Module

You can share and reuse lint rules and Jsonnet codes such as functions.
We call this mechanism `Module`.
You can host modules on GitHub repositories.

There are two types of modules.

1. Lint rule module
1. Imported module

## 1. Lint rule module

Lint rule module is same with the normal lint rules.

You can use Lint rule modules by specifying them in configuration files.

```jsonnet
function(param) {
  targets: [
    {
      modules: [ // Lint rule modules
        'github_archive/github.com/lintnet/modules/modules/nllint/main.jsonnet@60a46a4fa4c0e7b1b95f57c479e756afa2f376e9:v0.1.0',
      ],
      data_files: [
        '**/*',
        '!.git/**',
        '!node_modules/**',
      ],
    },
  ],
}
```

## 2. Imported module

You can share variables and functions as Imported modules.
Imported modules are imported by Jsonnet's `import` statement.

```jsonnet
local hello = import 'github_archive/github.com/lintnet/modules/modules/hello/hello.jsonnet@60a46a4fa4c0e7b1b95f57c479e756afa2f376e9:v0.1.0';
```

## Module path format

Now only github.com is supported as the host.

```
github.com/${repository_owner}/${repository_name}/${file_path}@${full_commit_hash}[:${tag}]
```

e.g.

```
github.com/lintnet/modules/modules/hello/hello.jsonnet@60a46a4fa4c0e7b1b95f57c479e756afa2f376e9:v0.1.0'
```

## Update modules by Renovate

You can update modules by [Renovate](https://docs.renovatebot.com/) using our [Renovate Preset](https://docs.renovatebot.com/config-presets/).

https://github.com/lintnet/renovate-config

## Where to install modules

Modules are installed on the following directory.

```
${Application Data Directory}/lintnet
```

`${Application Data Directory}` is `XDG_DATA_HOME` in https://github.com/adrg/xdg .

environment | Application Data Directory
--- | ---
Unix | `~/.local/share`
macOS | `~/Library/Application Support`
Windows | `LocalAppData`, `%LOCALAPPDATA%` (Fallback)

Or you can change the directory by the environment variable `LINTNET_ROOT_DIR`.

## GitHub Access Tokens

lintnet uses GitHub API to download Modules.
To avoid API rate limiting, we recommend setting a GitHub Access Token to the environment variables `LINTNET_GITHUB_TOKEN` or `GITHUB_TOKEN`.
To use modules hosted on private repositories, GitHub Access Tokens with `contents:read` permission are necessary.

## Official Modules

https://github.com/lintnet/modules

## Develop Modules

1. Create a GitHub Repository
1. Write lint rules
1. (Optional) Add the topic [lintnet-module](https://github.com/topics/lintnet-module) to the repository so that everyone can find your modules
1. (Optional) Write tests
1. (Optional) Set up CI running `lintnet test`
1. (Optional) Write document
1. (Optional) Create GitHub Releases

[The official modules](https://github.com/lintnet/modules) would be a good reference.

### Write document

Of course the format is free, but we recommend writing the following information.

- Description
- Example
- Why is the rule necessary?
- How to fix
- config's schema
