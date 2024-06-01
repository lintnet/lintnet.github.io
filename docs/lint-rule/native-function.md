---
sidebar_position: 100
---

# Native functions

- [filepath.Base](#filepathbase)
- [jsonschema.Validate](#jsonschemavalidate)
- [regexp.MatchString](#regexpmatchstring)
- [strings.Contains](#stringscontains)
- [strings.TrimPrefix](#stringstrimprefix)
- [strings.TrimSpace](#stringstrimspace)

## API design

Please see [API design](https://github.com/lintnet/go-jsonnet-native-functions?tab=readme-ov-file#api-design).

## filepath.Base

```
function(string): [string, error]
```

https://pkg.go.dev/path/filepath#Base

Base returns the last element of path.
Trailing path separators are removed before extracting the last element.
If the path is empty, Base returns ".".
If the path consists entirely of separators, Base returns a single separator.

e.g.

```jsonnet
local base = std.native('filepath.Base')('.github/workflows/foo.yaml'); // ["foo.yaml", null]
```

## jsonschema.Validate

```
function(schema, v any): error
```

https://pkg.go.dev/github.com/santhosh-tekuri/jsonschema/v5#Schema.Validate

e.g.

```jsonnet
local schema = import 'main_config_schema.json'; // Import JSON Schema
local validateJSONSchema = std.native('jsonschema.Validate');
local vr = validateJSONSchema(schema, param.config); // Validate param.config with JSON Schema main_config_shema.json
```

Validate validates `v` with JSON Schema `schema` and returns the result.
`schema` is a object representing a JSON Schema. You can define it in Jsonnet or read a JSON Schema with `import`.
Validate returns a error message (string) if something is wrong, or returns [a detailed error object](https://pkg.go.dev/github.com/santhosh-tekuri/jsonschema/v5#Detailed) if `v` violates JSON Schema.
If there is no violation, Validate returns `null`.

## regexp.MatchString

```
function(pattern, s string): [bool, error]
```

https://pkg.go.dev/regexp#MatchString

MatchString reports whether the string s contains any match of the regular expression pattern.

e.g.

```jsonnet
local matched = std.native('regexp.MatchString')('foo.*', 'seafood'); // [true, null]
```

## strings.Contains

```
function(pattern, s string): [bool, error]
```

https://pkg.go.dev/strings#Contains

Contains reports whether substr is within s.

e.g.

```jsonnet
local contained = std.native('strings.Contains')('seafood', 'foo'); // [true, null]
```

## strings.TrimPrefix

```
function(s, prefix string): [string, error]
```

https://pkg.go.dev/strings#TrimPrefix

TrimPrefix returns s without the provided leading prefix string.
If s doesn't start with prefix, s is returned unchanged.

e.g.

```jsonnet
local s = std.native('strings.TrimPrefix')('foo/v1.0.0', 'foo/'); // ['v1.0.0', null]
```

## strings.TrimSpace

```
function(s string): [string, error]
```

https://pkg.go.dev/strings#TrimSpace

TrimSpace returns a slice of the string s, with all leading and trailing white space removed, as defined by Unicode.

e.g.

```jsonnet
local s = std.native('strings.TrimSpace')('  foo '); // ['foo', null]
```
