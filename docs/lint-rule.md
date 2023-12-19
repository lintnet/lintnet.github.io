---
sidebar_position: 300
---

# Lint rules

> [!WARNING]
> The specification is unstable yet.

lintnet uses Jsonnet to write lint rules.

### Location of lint files

`lintnet` looks for lint files `*.jsonnet` recursively from the base directory `lintnet`.
You can change the base directory with the command line option `--rule-base-dir (-d)`.

e.g. Change the base directory to `policy`

```sh
lintnet lint -d policy foo.yaml bar.yaml
```

### External Variables

The following [External Variables](https://jsonnet.org/ref/language.html#external-variables-extvars) are passed to lint files.

- `input`: A file content to be linted
- `file_path`: A file path to be linted
- `file_type`: A file type to be linted. One of `json` and `yaml`
- `file_text`: A file content to be linted

### Native functions

lintnet supports all [native functions](https://pkg.go.dev/github.com/google/go-jsonnet#NativeFunction) supported by [suzuki-shunsuke/go-jsonnet-native-functions](https://github.com/suzuki-shunsuke/go-jsonnet-native-functions), which ports Go stanard libraries to Jsonnet.
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

### Format of Jsonnet

JSONPath | type | description
--- | --- | ---
`.name` | string | Rule name
`.description` | string | Group description
`.message` | string | Error message
`.failed` | bool | If this is true, this means the file violates the rule
`.level` | string | Error level
`.location` | `string|any` | Location where errors occur
`.metadata` | `any` | Metadata that users can set freely

### Error level

lintnet supports the following error levels.

severity | error level
--- | ---
1 | debug
2 | info
3 | warn
4 | error

You can specify the error level by command line option `--error-level (-e)` or the environment variable `LINTNET_ERROR_LEVEL`.

e.g.

```sh
lintnet lint -e error
```

Error level is similar to log level.
Errors whose error level is lower than the error level of the command are ignored.
The default error level is `info`.
