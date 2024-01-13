"use strict";(self.webpackChunklintnet=self.webpackChunklintnet||[]).push([[446],{2474:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var l=i(5893),t=i(1151);const s={sidebar_position:400},o="Configuration",r={id:"config",title:"Configuration",description:"Environment variables",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/docs/config",draft:!1,unlisted:!1,editUrl:"https://github.com/lintnet/lintnet.github.io/edit/main/docs/config.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"Lint rules",permalink:"/docs/lint-rule"},next:{title:"Test lint rules",permalink:"/docs/test-rule"}},c={},d=[{value:"Environment variables",id:"environment-variables",level:2},{value:"Configuration file path",id:"configuration-file-path",level:2},{value:"Scaffold a configuration file",id:"scaffold-a-configuration-file",level:2},{value:"Configuration file format",id:"configuration-file-format",level:2},{value:"File paths in configuration files",id:"file-paths-in-configuration-files",level:2},{value:"Top level argument",id:"top-level-argument",level:2},{value:"Glob",id:"glob",level:2},{value:"Exclude by <code>!</code>",id:"exclude-by-",level:3},{value:"Excluded directories and files",id:"excluded-directories-and-files",level:3},{value:"See also",id:"see-also",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,l.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"LINTNET_CONFIG"}),": Configuration file path"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/docs/guides/error-level",children:"LINTNET_ERROR_LEVEL"}),": ",(0,l.jsx)(n.code,{children:"debug|info|warn|error"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/docs/guides/error-level",children:"LINTNET_SHOWN_ERROR_LEVEL"}),": ",(0,l.jsx)(n.code,{children:"debug|info|warn|error"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"LINTNET_OUTPUT_SUCCESS"}),": ",(0,l.jsx)(n.code,{children:"true|false"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"LINTNET_LOG_LEVEL"}),": ",(0,l.jsx)(n.code,{children:"trace|debug|info|warn|error|fatal|panic"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"LINTNET_LOG_COLOR"}),": ",(0,l.jsx)(n.code,{children:"auto|always|never"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"LINTNET_GITHUB_TOKEN"}),": GitHub Access Token for getting Modules"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"LINTNET_ROOT_DIR"}),": Root directory where modules are installed"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"GITHUB_TOKEN"}),": GitHub Access Token for getting Modules"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"configuration-file-path",children:"Configuration file path"}),"\n",(0,l.jsxs)(n.p,{children:["lintnet reads a configuration file ",(0,l.jsx)(n.code,{children:"^\\.?lintnet\\.jsonnet$"})," on the current directory.\nYou can also specify the configuration file path by the command line option ",(0,l.jsx)(n.code,{children:"--config (-c)"})," and the environment variable ",(0,l.jsx)(n.code,{children:"LINTNET_CONFIG"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"lintnet -c foo.yaml lint\n"})}),"\n",(0,l.jsx)(n.h2,{id:"scaffold-a-configuration-file",children:"Scaffold a configuration file"}),"\n",(0,l.jsxs)(n.p,{children:["You can scaffold the configuration file by ",(0,l.jsx)(n.code,{children:"lintnet init"})," command."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"lintnet init\n"})}),"\n",(0,l.jsx)(n.h2,{id:"configuration-file-format",children:"Configuration file format"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/lintnet/lintnet/blob/main/json-schema/lintnet.json",children:"JSON Schema"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsonnet",children:"function(param) {\n  targets: [\n    {\n      data_files: [\n        'examples/**/*.csv',\n      ],\n      lint_files: [\n        'examples/lint/csv.jsonnet',\n        {\n          path: 'examples/lint/filename.jsonnet',\n          config: {\n            excluded: ['foo'],\n          },\n        },\n      ],\n      modules: [\n        'github.com/suzuki-shunsuke/example-lintnet-modules/newline.jsonnet@32ca3be646ec5b5861aab72fed30cd71f6eba9bf:v0.1.2',\n        {\n          path: 'github.com/suzuki-shunsuke/example-lintnet-modules/ghalint.jsonnet@32ca3be646ec5b5861aab72fed30cd71f6eba9bf:v0.1.2',\n          config: {\n            excluded: ['foo'],\n          },\n        },\n      ],\n    },\n  ],\n  outputs: [\n    {\n      id: 'jsonnet',\n      renderer: 'jsonnet',\n      template: 'examples/output/output.jsonnet',\n      transform: 'examples/transform/template.jsonnet',\n      config: {},\n    },\n    {\n      id: 'template',\n      renderer: 'text/template',\n      template: 'examples/output/output.tpl',\n      transform: 'examples/transform/template.jsonnet',\n      config: {},\n    },\n  ],\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"file-paths-in-configuration-files",children:"File paths in configuration files"}),"\n",(0,l.jsxs)(n.p,{children:["The file path separator must be a slash ",(0,l.jsx)(n.code,{children:"/"}),".\nIf file paths are relative paths, the base must be the configuration file."]}),"\n",(0,l.jsx)(n.h2,{id:"top-level-argument",children:"Top level argument"}),"\n",(0,l.jsxs)(n.p,{children:["Now the top level argument ",(0,l.jsx)(n.code,{children:"param"})," is empty. This argument is reserved for future enhancement."]}),"\n",(0,l.jsx)(n.h2,{id:"glob",children:"Glob"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"data_files"})," and ",(0,l.jsx)(n.code,{children:"lint_files"})," are lists of patterns matching with data and lint files.\nEach string is parsed with ",(0,l.jsx)(n.a,{href:"https://github.com/bmatcuk/doublestar",children:"bmatcuk/doublestar"}),"."]}),"\n",(0,l.jsxs)(n.h3,{id:"exclude-by-",children:["Exclude by ",(0,l.jsx)(n.code,{children:"!"})]}),"\n",(0,l.jsxs)(n.p,{children:["If each string starts with ",(0,l.jsx)(n.code,{children:"!"}),", files matching with the pattern are excluded."]}),"\n",(0,l.jsx)(n.p,{children:"e.g. foo/example.jsonnet is excluded"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"**/*.jsonnet\n!foo/example.jsonnet\n"})}),"\n",(0,l.jsxs)(n.p,{children:["e.g. foo/example.jsonnet isn't excluded because the later pattern ",(0,l.jsx)(n.code,{children:"foo/*.jsonnet"})," takes precedence"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"**/*.jsonnet\n!foo/example.jsonnet\nfoo/*.jsonnet\n"})}),"\n",(0,l.jsx)(n.h3,{id:"excluded-directories-and-files",children:"Excluded directories and files"}),"\n",(0,l.jsxs)(n.p,{children:["lintnet doesn't check ",(0,l.jsx)(n.code,{children:".gitignore"}),".\nlintnet ignores the following directories."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:".git"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"node_modules"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["And in ",(0,l.jsx)(n.code,{children:"lint_files"}),", files ",(0,l.jsx)(n.code,{children:"*_test.jsonnet"})," are ignored."]}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/guides/usage",children:"Command line arguments"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/guides/parameterize-rule",children:"Parameterize lint rules"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/guides/customize-output",children:"Customize Ouptputs"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/guides/lint-across-files",children:"Lint across files"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var l=i(7294);const t={},s=l.createContext(t);function o(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);