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
}
```

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
