---
sidebar_position: 400
---

# Test lint rules

To test lint file `x.jsonnet`, you need to create a test file `x_test.jsonnet` on the same directory with `x.jsonnet`.
`x_test.jsonnet` must return the list of test data and expected results.

JSON Schema: https://github.com/lintnet/lintnet/blob/main/json-schema/test-result.json

e.g.

```jsonnet
function(param) [
  {
    name: 'Test name',
    param: { // param passed to the lint file
      data: {
        file_type: 'csv',
        value: [
          ['mike', '1'],
        ],
      },
    },
    result: [ // expected return value of the lint file
      {
        name: 'age must be greater or equal than 18',
        level: 'error',
        location: {
          index: 0,
          line: 'mike,1',
        },
      },
    ],
  }
]
```

Then please run `lintnet test` command.

```sh
lintnet test
```

## Normalization of evaluation result

The evaluation result of lint file is normalized before it is compared with `result`.

- `description` and `excluded` are removed
- Array elements whose `excluded` is `true` are excluded

For example, If the evaluation result of lint file is as the following,

```json
[
  {
    "name": "foo",
    "description": "Hello, lintnet!",
    "excluded": true
  },
  {
    "name": "foo",
    "description": "Hello, lintnet!",
    "excluded": false
  }
]
```

`result` must be as the following.

```json
[
  {
    "name": "foo"
  }
]
```

This normalization simplifies `result`.
