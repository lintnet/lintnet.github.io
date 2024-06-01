---
sidebar_position: 100
---

# Lint rules

lintnet uses Jsonnet to write lint rules.

e.g.

```jsonnet
function(param)
  if std.objectHas(param.data.value, 'description') then [] else [{
    name: 'description is required',
  }]
```

## Top level arguments

[Top level arguments](https://jsonnet.org/ref/language.html#top-level-arguments-tlas) `param` is passed to lint files.

[JSON Schema of top level arguments](https://github.com/lintnet/lintnet/blob/main/json-schema/lint-top-level-argument.json)

e.g.

```json5
{
  data: {
    file_path: "foo.yaml",
    file_type: "yaml",
    text: "...",
    value: {
      // data
    }
  },
  config: {}, // config
}
```

## Format of Jsonnet

[JSON Schema](https://github.com/lintnet/lintnet/blob/main/json-schema/lint-result.json)

## Conversion of `param.data.value`

[#437](https://github.com/lintnet/lintnet/pull/437)

lintnet parses data files and converts them to JSON.
YAML supports non string map keys such as integer and boolean, but JSON doesn't.
So when lintnet converts data files to JSON, lintnet converts non string map keys to string.

## Native functions

lintnet supports some [native functions](https://pkg.go.dev/github.com/google/go-jsonnet#NativeFunction).

You can executed these functions by `std.native("{native function name}")`.

e.g.

```jsonnet
local contained = std.native("strings.Contains")("hello", "ll"); // true
```

For details, please see [Native functions](native-function.md).

## Import Modules

Please see [here](../module.md#2-imported-module).

## Config parameter

Please see [here](../config.md).
