---
sidebar_position: 400
---

# Test lint rules

To test lint file `x.jsonnet`, you need to create a test file `x_test.jsonnet` on the same directory with `x.jsonnet`.
`x_test.jsonnet` must return the list of test data and expected results.

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
        message: 'age must be greater or equal than 18',
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
