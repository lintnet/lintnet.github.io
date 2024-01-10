---
sidebar_position: 200
---

# Supported data format

lintnet can lint the following file formats.
lintnet judges file types by file extensions.
We're considering supporting additional file formats. [#37](https://github.com/lintnet/lintnet/issues/37)

format | `file_type` | file extensions | parser
--- | --- | --- | ---
CSV | csv | `.csv` | [encoding/csv](https://pkg.go.dev/encoding/csv#Reader)
HCL 2 | hcl2 | `.hcl` | [tmccombs/hcl2json](https://pkg.go.dev/github.com/tmccombs/hcl2json/convert)
JSON | json | `.json` | [encoding/json](https://pkg.go.dev/encoding/json#Decoder)
TOML | toml | `.toml` | [BurntSushi/toml](https://godocs.io/github.com/BurntSushi/toml#Decoder)
TSV | tsv | `.tsv` | [encoding/csv](https://pkg.go.dev/encoding/csv#Reader)
YAML | yaml | `.yml`, `.yaml` | [gopkg.in/yaml.v3](https://pkg.go.dev/gopkg.in/yaml.v3#Decoder)

### Plain Text

lintnet judges file types by file extensions.
If no parser is found, lintnet parse the file as a plain text file.
The external variable `file_type` is `plain_text`.
The external variable `input` is empty, but you can still lint the file with other external variables such as `file_path` and `file_text`.

