---
sidebar_position: 500
---

# Usage

<!-- This is generated by scripts/generate-usage.sh. Don't edit this file directly. -->

```console
$ lintnet help
NAME:
   lintnet - Powerful, Secure, Shareable Linter Powered by Jsonnet. https://lintnet.github.io/

USAGE:
   lintnet [global options] command [command options] 

VERSION:
   0.4.7 (dbd81305b0538d5855fb07251463040fce765ca2)

COMMANDS:
   version     Show version
   lint, l     Lint files
   info        Output the information regarding lintnet
   init        Scaffold configuration file
   test, t     Test lint files
   new         Create a lint file and a test file
   completion  Output shell completion script for bash, zsh, or fish
   help, h     Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --log-level value         log level [$LINTNET_LOG_LEVEL]
   --log-color value         Log color. One of 'auto' (default), 'always', 'never' [$LINTNET_LOG_COLOR]
   --config value, -c value  Configuration file path [$LINTNET_CONFIG]
   --help, -h                show help
   --version, -v             print the version
```

## lintnet info

```console
$ lintnet help info
NAME:
   lintnet info - Output the information regarding lintnet

USAGE:
   lintnet info [command options]

DESCRIPTION:
   Output the information regarding lintnet.

   $ lintnet info
   {
     "version": "v0.3.0",
     "config_file": "lintnet.jsonnet",
     "root_dir": "/Users/foo/Library/Application Support/lintnet",
     "data_root_dir": "/Users/foo/repos/src/github.com/lintnet/lintnet",
     "env": {
     "GITHUB_TOKEN": "(masked)",
     "LINTNET_LOG_LEVEL": "warn"
     }
   }

   This command is useful for trouble shooting and sharing your environment in GitHub Issues.

   You can mask the current user name.

   $ lintnet info -mask-user

   You can also get the root directory where modules are installed.

   $ lintnet info -module-root-dir


OPTIONS:
   --module-root-dir  Show only the root directory where modules are installed (default: false)
   --mask-user        Mask the current user name (default: false)
   --help, -h         show help
```

## lintnet init

```console
$ lintnet help init
NAME:
   lintnet init - Scaffold configuration file

USAGE:
   lintnet init

DESCRIPTION:
   Scaffold configuration file.

   $ lintnet init

   This command generates lintnet.jsonnet.
   If the file already exists, this command does nothing.


OPTIONS:
   --help, -h  show help
```

## lintnet new

```console
$ lintnet help new
NAME:
   lintnet new - Create a lint file and a test file

USAGE:
   lintnet new [<lint file|main.jsonnet>]

DESCRIPTION:
   Create a lint file and a test file.

   $ lintnet new [<lint file|main.jsonnet>]

   This command creates a lint file and a test file.
   If the argument is not given, the lint file is created as "main.jsonnet".


OPTIONS:
   --help, -h  show help
```

## lintnet lint

```console
$ lintnet help lint
NAME:
   lintnet lint - Lint files

USAGE:
   lintnet lint [command options] [lint file paths and data file paths]

DESCRIPTION:
   Lint files

   $ lintnet lint

   You can lint only specific files.

   $ lintnet lint [lint file paths and data file paths]

   You can also lint only a specific target.

   $ lintnet lint -target [target id]

   By default, lintnet outputs nothing when the lint succeeds.
   You can output JSON even if the lint succeeds. This is useful if you pass the output to other program such as jq.

   $ lintnet lint -output-success


OPTIONS:
   --output value, -o value       You can customize the output format. You can specify an output id
   --target value, -t value       Lint only a specific target. You can specify a target id
   --error-level value, -e value  Set the error level [$LINTNET_ERROR_LEVEL]
   --shown-error-level value      Set the shown error level [$LINTNET_SHOWN_ERROR_LEVEL]
   --output-success               Output the result even if the lint succeeds (default: false) [$LINTNET_OUTPUT_SUCCESS]
   --help, -h                     show help
```

## lintnet test

```console
$ lintnet help test
NAME:
   lintnet test - Test lint files

USAGE:
   lintnet test [command options][<lint file, test file, or directory> ...]

DESCRIPTION:
   Test lint files.

   If you run "lintnet test" without any argument,
   lintnet searches lint files using a configuration file and tests all lint files having test files.
   Lint files without test files are ignored.
   You can test only specific files by specifying files as arguments.
   If you specify files explicitly, a configuration file is unnecessary.
   This means when you develop modules, you don't have to prepare a configuration file.
   If you specify directories, lint files in those directories and subdirectories are tested.
   For example, "lintnet test ." searches files matching the glob pattern "**/*.jsonnet",
   and "lintnet test foo" search files matching "foo/**/*.jsonnet".
   If a configuration file isn't specified and isn't found, "lintnet test" works as "lintnet test .".

   You can test only a specific target with -target option.


OPTIONS:
   --target value, -t value  Target ID
   --help, -h                show help
```

