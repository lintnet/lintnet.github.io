---
sidebar_position: 300
---

# Customize Outputs

You can customize output formats by `outputs` configuration.

```jsonnet
  outputs: [
    {
      // id must be unique in outputs
      id: 'hello',
      // jsonnet, text/template, html/template
      renderer: 'jsonnet',
      // template file
      template: 'examples/output/output.jsonnet',
      // Jsonnet file to transform template parameters
      transform: 'examples/transform/template.jsonnet',
      config: {},
    },
  ],
```

```sh
lintnet lint -output hello
```

## Transform template parameters by Jsonnet

You can transform template parameters by Jsonnet.
This is useful for `text/template` and `html/template`.
