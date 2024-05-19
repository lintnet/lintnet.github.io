---
sidebar_position: 400
---

# Configuration

## Environment variables

- `LINTNET_CONFIG`: Configuration file path
- [LINTNET_ERROR_LEVEL](guides/error-level.md): `debug|info|warn|error`
- [LINTNET_SHOWN_ERROR_LEVEL](guides/error-level.md): `debug|info|warn|error`
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

## Configuration file format

[JSON Schema](https://github.com/lintnet/lintnet/blob/main/json-schema/lintnet.json)

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
        'github_archive/github.com/suzuki-shunsuke/example-lintnet-modules/newline.jsonnet@32ca3be646ec5b5861aab72fed30cd71f6eba9bf:v0.1.2',
        {
          path: 'github_archive/github.com/suzuki-shunsuke/example-lintnet-modules/ghalint.jsonnet@32ca3be646ec5b5861aab72fed30cd71f6eba9bf:v0.1.2',
          config: {
            excluded: ['foo'],
          },
        },
      ],
    },
    {
      data_files: [
        '.github/workflows/*.yml',
        '.github/workflows/*.yaml',
      ],
      modules: [
        {
          path: 'github_archive/github.com/lintnet/modules@d69d0083dcb2696dd3427c484f36940f717a9285:v0.1.2',
          files: [
            'modules/ghalint/**/main.jsonnet',
            '!modules/ghalint/deny_read_all_permission/main.jsonnet',
            {
              path: 'modules/ghalint/action_ref_should_be_full_length_commit_sha/main.jsonnet',
              config: {
                excludes: [
                  'slsa-framework/slsa-github-generator/.github/workflows/generator_generic_slsa3.yml',
                ],
              },
            },
          ],
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

## File paths in configuration files

The file path separator must be a slash `/`.
If file paths are relative paths, the base must be the configuration file.

## Top level argument

Now the top level argument `param` is empty. This argument is reserved for future enhancement.

## Glob

`data_files` and `lint_files` are lists of patterns matching with data and lint files.
Each string is parsed with [bmatcuk/doublestar](https://github.com/bmatcuk/doublestar).

### Exclude by `!`

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

### Excluded directories and files

lintnet doesn't check `.gitignore`.
lintnet ignores the following directories.

- `.git`
- `node_modules`

And in `lint_files`, files `*_test.jsonnet` are ignored.

## See also

- [Command line arguments](guides/usage.md)
- [Parameterize lint rules](guides/parameterize-rule.md)
- [Customize Ouptputs](guides/customize-output.md)
- [Lint across files](guides/lint-across-files.md)
