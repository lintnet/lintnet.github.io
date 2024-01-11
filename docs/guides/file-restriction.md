---
sidebar_position: 400
---

# File restriction

lintnet has a restriction about file paths of data files, output template files, and transformation files.
This restriction is for security, which prevents attackers from disclosuring secret files.

Basically, lintnet forbid to read these files from outside of the `data root directory` and it's sub directories.
By default, `data root directory` is the current directory, but you can also change it by the command line option `-data-root-dir`.

For example, if the data root directory is `/home/foo/workspace`, lintnet can read `/home/foo/workspace/**` but can't read files such as `/home/foo/.docker/config.json` and `/home/foo/.aws/credentials`.

This restriction is ignored if you specify file paths by command line arguments.
