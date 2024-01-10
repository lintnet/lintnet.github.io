---
sidebar_position: 150
---

# Getting Started

1. [Install lintnet](./install.md)
1. Scaffold configuration file by `lintnet init`
1. Create a data file
1. Write a lint rule
1. Edit the configuration file
1. Lint a data file by `lintnet lint`
1. Fix a data file and run lintnet again

## Scaffold configuration file by `lintnet init`

Please run `lintnet init`.

```sh
lintnet init
```

Then a configuration file `lintnet.jsonnet` is created.

## Create a data file

Create a data file `hello.json`.

```yaml
{
  "name": "hello"
}
```

## Write a lint rule

Create a lint file `hello.jsonnet`.
This simple rule checks if data has a field `description`.

```jsonnet
function(param)
  if std.objectHas(param.data.value, 'description') then [] else [{
    name: 'description is required',
  }]
```

## Edit the configuration file

Please edit `lintnet.jsonnet` to lint `hello.json` with `hello.jsonnet`.

```jsonnet
function(param) {
  targets: [
    {
      data_files: [
        'hello.json',
      ],
      lint_files: [
        'hello.jsonnet',
      ],
    },
  ],
}
```

## Lint a data file by `lintnet lint`

Please run `lintnet lint`.
Then the command would fail because `hello.json` violates the lint rule of `hello.jsonnet`.

```console
$ lintnet lint
{
  "lintnet_version": "",
  "env": "darwin/arm64",
  "errors": [
    {
      "rule": "description is required",
      "lint_file": "hello.jsonnet",
      "data_file": "hello.json"
    }
  ]
}
FATA[0000] lintnet failed                                env=darwin/arm64 error="lint failed" program=lintnet version=
```

## Fix a data file and run lintnet again

Please fix `hello.json` to add the field `description`.

hello.json

```json
{
    "name": "hello",
    "description": "Hello, lintnet"
}
```

And rerun `lintnet lint`.
Then the command would succeed.

```console
$ lintnet lint # Output nothing
$ echo $?
0
```
