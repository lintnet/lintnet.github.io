---
sidebar_position: 400
---

# Configuration

## Command line arguments

About command line arguments, please see [usage](guides/usage.md).

## Environment variables

- `LINTNET_CONFIG`: Configuration file path
- `LINTNET_ERROR_LEVEL`: `debug|info|warn|error`
- `LINTNET_OUTPUT_SUCCESS`: `true|false`
- `LINTNET_LOG_LEVEL`: `trace|debug|info|warn|error|fatal|panic`
- `LINTNET_LOG_COLOR`: `auto|always|never`
- `LINTNET_GITHUB_TOKEN`: GitHub Access Token for getting Modules
- `LINTNET_ROOT_DIR`: Root directory where modules are installed
- `GITHUB_TOKEN`: GitHub Access Token for getting Modules

## Configuration file path

lintnet reads a configuration file `^\.?lintnet\.jsonnet$` on the current directory.
You can also specify the configuration file path by the command line option `--config (-c)` and the environment variable `LINTNET_CONFIG`.

```sh
lintnet -c foo.yaml lint
```

## Scaffold a configuration file

You can scaffold the configuration file by `lintnet init` command.

```sh
lintnet init
```

e.g.

## Configuration file format

```jsonnet
function(param) {
  targets: [
    {
      data_files: [
        'examples/**/*.csv',
      ],
      lint_files: [
        'examples/lint/csv.jsonnet',
        {
          path: 'examples/lint/filename.jsonnet',
          config: {
            excluded: ['foo'],
          },
        },
      ],
      modules: [
        'github.com/suzuki-shunsuke/example-lintnet-modules/newline.jsonnet@32ca3be646ec5b5861aab72fed30cd71f6eba9bf:v0.1.2',
        {
          path: 'github.com/suzuki-shunsuke/example-lintnet-modules/ghalint.jsonnet@32ca3be646ec5b5861aab72fed30cd71f6eba9bf:v0.1.2',
          config: {
            excluded: ['foo'],
          },
        },
      ],
    },
  ],
  outputs: [
    {
      id: 'jsonnet',
      renderer: 'jsonnet',
      template: 'examples/output/output.jsonnet',
      transform: 'examples/transform/template.jsonnet',
      config: {},
    },
    {
      id: 'template',
      renderer: 'text/template',
      template: 'examples/output/output.tpl',
      transform: 'examples/transform/template.jsonnet',
      config: {},
    },
  ],
}
```

## JSON Schema of configuration file

https://github.com/lintnet/lintnet/blob/main/json-schema/lintnet.json

## Top level argument

Now the top level argument `param` is empty. This argument is reserved for future enhancement.

## Glob

`data_files` and `lint_files` are lists of patterns matching with data and lint files.
Each string is parsed with [bmatcuk/doublestar](https://github.com/bmatcuk/doublestar).
If each string starts with `!`, files matching with the pattern are excluded.

e.g. foo/example.jsonnet is excluded

```
**/*.jsonnet
!foo/example.jsonnet
```

e.g. foo/example.jsonnet isn't excluded because the later pattern `foo/*.jsonnet` takes precedence

```
**/*.jsonnet
!foo/example.jsonnet
foo/*.jsonnet
```

## Parameter of lint rules

Please see [Parameterize lint rules](guides/parameterize-rule.md).

## Customize Output

Please see [Customize Ouptputs](guides/customize-output.md).
