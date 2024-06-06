#!/usr/bin/env bash

set -eu
set -o pipefail

cd "$(dirname "$0")/.."

command_console() {
  echo '```console'
  echo "$ $*"
  "$@"
  echo '```'
}

commands() {
  for cmd in info init new lint test; do
    echo "
## lintnet $cmd

$(command_console lintnet help $cmd)"
  done
}

echo "---
sidebar_position: 500
---

# Usage

<!-- This is generated by scripts/generate-usage.sh. Don't edit this file directly. -->

$(command_console lintnet help)
$(commands)
"
