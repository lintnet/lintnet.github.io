---
sidebar_position: 200
---

# Lint across files

Basically lintnet lints each data file independently.
But sometimes you need to lint across files.
For example, if you want to check if GitHub Actions workflow names are unique,
you need to lint across all GitHub Actions workflow files.
So lintnet supports linting across multiple files.
You can set `combine: true` in targets.

e.g.

```jsonnet
 targets: [
    {
      id: 'github-actions',
      combine: true, // Lint across multiple files
      data_files: [
        '.github/workflows/*.yml',
        '.github/workflows/*.yaml',
      ],
      lint_files: [
        'github_actions_workflow_name_should_be_unique.jsonnet',
      ],
    },
  ],
```
