---
sidebar_position: 100
---

# Install

lintnet is a single binary written in [Go](https://go.dev/).
So you only need to install an executable file into `$PATH`.

1. [Homebrew](https://brew.sh/)

```sh
brew install lintnet/lintnet/lintnet
```

2. [Scoop](https://scoop.sh/)

```sh
scoop bucket add lintnet https://github.com/lintnet/scoop-bucket
scoop install lintnet
```

3. [aqua](https://aquaproj.github.io/)

```sh
aqua g -i lintnet/lintnet
```

4. Download a prebuilt binary from [GitHub Releases](https://github.com/lintnet/lintnet/releases) and install it into `$PATH`

5. Go

```sh
go install github.com/lintnet/lintnet@latest
```

## Shell completion

lintnet >= v0.4.7

lintnet supports shell completion for bash, zsh, and fish.

bash

```sh
source <(lintnet completion bash)
```

zsh

```sh
source <(lintnet completion zsh)
```

fish

```sh
lintnet completion fish > ~/.config/fish/completions/lintnet.fish
```
