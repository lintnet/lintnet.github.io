---
sidebar_position: 300
---

# Lint rules

lintnet uses Jsonnet to write lint rules.

e.g.

```jsonnet
function(param) if param.data.file_type != 'csv' then null else std.mapWithIndex(function(idx, line) {
  message: 'age must be greater or equal than 18',
  failed: std.parseInt(line[1]) < 18,
  level: 'warn',
  location: {
    index: idx,
    line: std.join(',', line),
  },
}, param.data.value)
```

## Top level arguments

[Top level arguments](https://jsonnet.org/ref/language.html#top-level-arguments-tlas) `param` is passed to lint files.

The format of `param` is

```json5
{
  data: {
    file_path: "foo.yaml",
    file_type: "yaml",
    file_text: "...",
    value: {
      // data
    }
  },
}
```

## Format of Jsonnet

JSONPath | type | description
--- | --- | ---
`.name` (required) | string | Rule name
`.failed` (required) | bool | If this is true, this means the file violates the rule
`.message` | string | Error message
`.level` | string | Error level
`.location` | `string` or `any` | Location where errors occur
`.description` | string | Rule description
`.custom` | `any` | Custom fields that users can set freely

## Native functions

lintnet supports all [native functions](https://pkg.go.dev/github.com/google/go-jsonnet#NativeFunction) supported by [suzuki-shunsuke/go-jsonnet-native-functions](https://github.com/suzuki-shunsuke/go-jsonnet-native-functions), which ports Go standard libraries to Jsonnet.
The following native functions are available.

- strings.Contains
- strings.TrimPrefix
- strings.TrimSpace
- regexp.MatchString
- filepath.Base

You can executed these functions by `std.native("{native function name}")`.

e.g.

```jsonnet
local contained = std.native("strings.Contains")("hello", "ll"); // true
```
