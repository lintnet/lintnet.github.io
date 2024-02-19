"use strict";(self.webpackChunklintnet=self.webpackChunklintnet||[]).push([[555],{1301:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=t(4848),l=t(8453);const o={sidebar_position:500},s="Usage",a={id:"guides/usage",title:"Usage",description:"lintnet info",source:"@site/docs/guides/usage.md",sourceDirName:"guides",slug:"/guides/usage",permalink:"/docs/guides/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/lintnet/lintnet.github.io/edit/main/docs/guides/usage.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"File restriction",permalink:"/docs/guides/file-restriction"},next:{title:"Error Level",permalink:"/docs/guides/error-level"}},r={},u=[{value:"lintnet info",id:"lintnet-info",level:2},{value:"lintnet init",id:"lintnet-init",level:2},{value:"lintnet lint",id:"lintnet-lint",level:2},{value:"lintnet test",id:"lintnet-test",level:2}];function c(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-console",children:"$ lintnet help\nNAME:\n   lintnet - Powerful, Secure, Shareable Linter Powered by Jsonnet. https://lintnet.github.io/\n\nUSAGE:\n   lintnet [global options] command [command options] \n\nVERSION:\n   0.3.0-4 (a17e309c9d93daa83b546df47ed49c5a56b5250b)\n\nCOMMANDS:\n   version  Show version\n   lint     Lint files\n   info     Output the information regarding lintnet\n   init     Scaffold configuration file\n   test     Test lint files\n   help, h  Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --data-root-dir value     The root directory where lintnet is allowed to read data files. The default value is the current directory [$LINTNET_DATA_ROOT_DIR]\n   --log-level value         log level [$LINTNET_LOG_LEVEL]\n   --log-color value         Log color. One of 'auto' (default), 'always', 'never' [$LINTNET_LOG_COLOR]\n   --config value, -c value  Configuration file path [$LINTNET_CONFIG]\n   --help, -h                show help\n   --version, -v             print the version\n"})}),"\n",(0,i.jsx)(e.h2,{id:"lintnet-info",children:"lintnet info"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-console",children:'$ lintnet help info\nNAME:\n   lintnet info - Output the information regarding lintnet\n\nUSAGE:\n   lintnet info [command options]\n\nDESCRIPTION:\n   Output the information regarding lintnet.\n\n   $ lintnet info\n   {\n     "version": "v0.3.0",\n     "config_file": "lintnet.jsonnet",\n     "root_dir": "/Users/foo/Library/Application Support/lintnet",\n     "data_root_dir": "/Users/foo/repos/src/github.com/lintnet/lintnet",\n     "env": {\n     "GITHUB_TOKEN": "(masked)",\n     "LINTNET_LOG_LEVEL": "warn"\n     }\n   }\n\n   This command is useful for trouble shooting and sharing your environment in GitHub Issues.\n\n   You can mask the current user name.\n\n   $ lintnet info -mask-user\n\n   You can also get the root directory where modules are installed.\n\n   $ lintnet info -module-root-dir\n\n\nOPTIONS:\n   --module-root-dir  Show only the root directory where modules are installed (default: false)\n   --mask-user        Mask the current user name (default: false)\n   --help, -h         show help\n'})}),"\n",(0,i.jsx)(e.h2,{id:"lintnet-init",children:"lintnet init"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-console",children:"$ lintnet help init\nNAME:\n   lintnet init - Scaffold configuration file\n\nUSAGE:\n   lintnet init\n\nDESCRIPTION:\n   Scaffold configuration file.\n\n   $ lintnet init\n\n   This command generates lintnet.jsonnet.\n   If the file already exists, this command does nothing.\n\n\nOPTIONS:\n   --help, -h  show help\n"})}),"\n",(0,i.jsx)(e.h2,{id:"lintnet-lint",children:"lintnet lint"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-console",children:"$ lintnet help lint\nNAME:\n   lintnet lint - Lint files\n\nUSAGE:\n   lintnet lint [command options] [lint file paths and data file paths]\n\nDESCRIPTION:\n   Lint files\n\n   $ lintnet lint\n\n   You can lint only specific files.\n\n   $ lintnet lint [lint file paths and data file paths]\n\n   You can also lint only a specific target.\n\n   $ lintnet lint -target [target id]\n\n   By default, lintnet outputs nothing when the lint succeeds.\n   You can output JSON even if the lint succeeds. This is useful if you pass the output to other program such as jq.\n\n   $ lintnet lint -output-success\n\n\nOPTIONS:\n   --output value, -o value       You can customize the output format. You can specify an output id\n   --target value, -t value       Lint only a specific target. You can specify a target id\n   --error-level value, -e value  Set the error level [$LINTNET_ERROR_LEVEL]\n   --shown-error-level value      Set the shown error level [$LINTNET_SHOWN_ERROR_LEVEL]\n   --output-success               Output the result even if the lint succeeds (default: false) [$LINTNET_OUTPUT_SUCCESS]\n   --help, -h                     show help\n"})}),"\n",(0,i.jsx)(e.h2,{id:"lintnet-test",children:"lintnet test"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-console",children:"$ lintnet help test\nNAME:\n   lintnet test - Test lint files\n\nUSAGE:\n   lintnet test [command options]\n\nDESCRIPTION:\n   Test lint files.\n\n   $ lintnet test\n\n   You can test only a specific target.\n\n   $ lintnet test -target [target id]\n\n\nOPTIONS:\n   --target value, -t value  \n   --help, -h                show help\n"})})]})}function d(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>a});var i=t(6540);const l={},o=i.createContext(l);function s(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);