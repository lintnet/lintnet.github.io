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

You can use Lint rule modules by specifing them in configuration files.

```jsonnet
function(param) {
  targets: [
    {
      modules: [ // Lint rule modules
        'github.com/lintnet/lintnet/examples/lint/csv.jsonnet@v0.2.0',
      ],
      data_files: [
        'examples/data/hello.csv',
      ],
    },
  ],
}
```

## 2. Imported module

You can share variables and functions as Imported modules.
Imported modules are imported by Jsonnet's `import` statement.

```jsonnet
local hello = 'github.com/lintnet/lintnet/examples/lint/csv.jsonnet@v0.2.0';
```

## Module path format

Now only github.com is supported as the host.

```
github.com/${repository_owner}/${repository_name}/${file_path}@${ref}
```

e.g.

```
github.com/lintnet/lintnet/examples/lint/csv.jsonnet@v0.2.0
```

:::caution
`ref` must be either a GitHub tag or a full commit hash.
You must not use branch names as `ref` because even if branches are updated lintnet doesn't update installed modules.
:::

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
