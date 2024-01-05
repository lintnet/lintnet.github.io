---
sidebar_position: 400
---

# Configuration file

lintnet reads a configuration file `^\.?lintnet\.jsonnet$` on the current directory.
You can also specify the configuration file path by the command line option `--config (-c)` and the environment variable `LINTNET_CONFIG`.

```sh
lintnet -c foo.yaml lint
```

You can scaffold the configuration file by `lintnet init` command.

```sh
lintnet init
```

e.g.

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

## JSON Schema

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

## Lint file's config parameters

Each lint file can take config parameters.

e.g.

```jsonnet
lint_files: [
  {
    path: 'examples/lint/filename.jsonnet',
    config: {
      excludes: ['foo'],
    },
  },
],
modules: [
  {
    path: 'github.com/suzuki-shunsuke/example-lintnet-modules/ghalint.jsonnet@32ca3be646ec5b5861aab72fed30cd71f6eba9bf:v0.1.2',
    config: {
      excludes: ['foo'],
    },
  },
],
```

Each lint file can refer to parameters by `param.config`.

e.g.

```jsonnet
local excludes = std.get(param.config, 'excludes', [])
```

## Customize output formats

You can customize output formats by `outputs` configuration.

```jsonnet
  outputs: [
    {
      // id must be unique in outputs
      id: 'hello',
      // jsonnet, text/template, html/template
      renderer: 'jsonnet',
      // template file
      template: 'examples/output/output.jsonnet',
      // Jsonnet file to transform template parameters
      transform: 'examples/transform/template.jsonnet',
      config: {},
    },
  ],
```

```sh
lintnet lint -output hello
```

### Transform template parameters by Jsonnet

You can transform template parameters by Jsonnet.
This is useful for `text/template` and `html/template`.
