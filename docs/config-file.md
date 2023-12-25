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
        'examples/data/hello.csv',
        'examples/data/hello.tsv',
      ],
      lint_files: [
        'examples/lint/csv.jsonnet',
        'examples/lint/filename.jsonnet',
      ],
      modules: [
        'github.com/lintnet/lintnet/examples/lint/csv.jsonnet@v0.2.0',
      ],
    },
  ],
}
```

Now the top level argument `param` is empty. This argument is reserved for future enhancement.

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
