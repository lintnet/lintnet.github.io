"use strict";(self.webpackChunklintnet=self.webpackChunklintnet||[]).push([[480],{8668:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(4848),l=t(8453);const s={sidebar_position:500},o="Module",d={id:"module",title:"Module",description:"You can share and reuse lint rules and Jsonnet codes such as functions.",source:"@site/docs/module.md",sourceDirName:".",slug:"/module",permalink:"/docs/module",draft:!1,unlisted:!1,editUrl:"https://github.com/lintnet/lintnet.github.io/edit/main/docs/module.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/docs/example"},next:{title:"Learn Jsonnet for lintnet",permalink:"/docs/learn-jsonnet"}},r={},c=[{value:"1. Lint rule module",id:"1-lint-rule-module",level:2},{value:"2. Imported module",id:"2-imported-module",level:2},{value:"Module path format",id:"module-path-format",level:2},{value:"Update modules by Renovate",id:"update-modules-by-renovate",level:2},{value:"Where to install modules",id:"where-to-install-modules",level:2},{value:"\ud83d\udca1 Cache modules in CI",id:"bulb-cache-modules-in-ci",level:2},{value:"GitHub Access Tokens",id:"github-access-tokens",level:2},{value:"Official Modules",id:"official-modules",level:2},{value:"Develop Modules",id:"develop-modules",level:2},{value:"Write document",id:"write-document",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"module",children:"Module"}),"\n",(0,i.jsxs)(n.p,{children:["You can share and reuse lint rules and Jsonnet codes such as functions.\nWe call this mechanism ",(0,i.jsx)(n.code,{children:"Module"}),".\nYou can host modules on GitHub repositories."]}),"\n",(0,i.jsx)(n.p,{children:"There are two types of modules."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Lint rule module"}),"\n",(0,i.jsx)(n.li,{children:"Imported module"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"1-lint-rule-module",children:"1. Lint rule module"}),"\n",(0,i.jsx)(n.p,{children:"Lint rule module is same with the normal lint rules."}),"\n",(0,i.jsx)(n.p,{children:"You can use Lint rule modules by specifying them in configuration files."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonnet",children:"function(param) {\n  targets: [\n    {\n      modules: [ // Lint rule modules\n        'github_archive/github.com/lintnet/modules/modules/nllint/main.jsonnet@60a46a4fa4c0e7b1b95f57c479e756afa2f376e9:v0.1.0',\n      ],\n      data_files: [\n        '**/*',\n      ],\n    },\n  ],\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"2-imported-module",children:"2. Imported module"}),"\n",(0,i.jsxs)(n.p,{children:["You can share variables and functions as Imported modules.\nImported modules are imported by Jsonnet's ",(0,i.jsx)(n.code,{children:"import"})," statement."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonnet",children:"local hello = import 'github_archive/github.com/lintnet/modules/modules/hello/hello.jsonnet@60a46a4fa4c0e7b1b95f57c479e756afa2f376e9:v0.1.0';\n"})}),"\n",(0,i.jsx)(n.h2,{id:"module-path-format",children:"Module path format"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"${type}/${host}/${repository_owner}/${repository_name}/${file_path}@${full_commit_hash}[:${tag}]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now only ",(0,i.jsx)(n.code,{children:"github_archive"})," is valid as ",(0,i.jsx)(n.code,{children:"type"}),", and only ",(0,i.jsx)(n.code,{children:"github.com"})," is valid as ",(0,i.jsx)(n.code,{children:"host"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"e.g."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"github_archive/github.com/lintnet/modules/modules/hello/hello.jsonnet@60a46a4fa4c0e7b1b95f57c479e756afa2f376e9:v0.1.0'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"update-modules-by-renovate",children:"Update modules by Renovate"}),"\n",(0,i.jsxs)(n.p,{children:["You can update modules by ",(0,i.jsx)(n.a,{href:"https://docs.renovatebot.com/",children:"Renovate"})," using our ",(0,i.jsx)(n.a,{href:"https://docs.renovatebot.com/config-presets/",children:"Renovate Preset"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/lintnet/renovate-config",children:"https://github.com/lintnet/renovate-config"})}),"\n",(0,i.jsx)(n.h2,{id:"where-to-install-modules",children:"Where to install modules"}),"\n",(0,i.jsx)(n.p,{children:"Modules are installed on the following directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"${Application Data Directory}/lintnet/modules\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"${Application Data Directory}"})," is ",(0,i.jsx)(n.code,{children:"XDG_DATA_HOME"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/adrg/xdg",children:"https://github.com/adrg/xdg"})," ."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"environment"}),(0,i.jsx)(n.th,{children:"Application Data Directory"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Unix"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"~/.local/share"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"macOS"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"~/Library/Application Support"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Windows"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"LocalAppData"}),", ",(0,i.jsx)(n.code,{children:"%LOCALAPPDATA%"})," (Fallback)"]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Or you can change the directory by the environment variable ",(0,i.jsx)(n.code,{children:"LINTNET_ROOT_DIR"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can get the install path by ",(0,i.jsx)(n.code,{children:"lintnet info -module-root-dir"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lintnet info -module-root-dir\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"bulb-cache-modules-in-ci",children:["\ud83d\udca1"," Cache modules in CI"]}),"\n",(0,i.jsx)(n.p,{children:"You can cache modules in CI such as GitHub Actions."}),"\n",(0,i.jsx)(n.p,{children:"e.g."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'- run: echo "module_root_dir=$(lintnet info -module-root-dir)" >> "$GITHUB_OUTPUT"\n  id: lintnet\n\n- uses: actions/cache@v3\n  with:\n    path: |\n      ${{steps.lintnet.outputs.module_root_dir}}\n    key: ${{ hashFiles(\'lintnet.jsonnet\') }}\n\n- run: lintnet lint\n  env:\n    GITHUB_TOKEN: ${{github.token}}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"github-access-tokens",children:"GitHub Access Tokens"}),"\n",(0,i.jsxs)(n.p,{children:["lintnet uses GitHub API to download Modules.\nTo avoid API rate limiting, we recommend setting a GitHub Access Token to the environment variables ",(0,i.jsx)(n.code,{children:"LINTNET_GITHUB_TOKEN"})," or ",(0,i.jsx)(n.code,{children:"GITHUB_TOKEN"}),".\nTo use modules hosted on private repositories, GitHub Access Tokens with ",(0,i.jsx)(n.code,{children:"contents:read"})," permission are necessary."]}),"\n",(0,i.jsx)(n.h2,{id:"official-modules",children:"Official Modules"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/lintnet/modules",children:"https://github.com/lintnet/modules"})}),"\n",(0,i.jsxs)(n.p,{children:["We ported some linters such as ",(0,i.jsx)(n.a,{href:"https://github.com/suzuki-shunsuke/ghalint",children:"ghalint"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/suzuki-shunsuke/nllint",children:"nllint"})," to lintnet and shared them as official modules."]}),"\n",(0,i.jsx)(n.h2,{id:"develop-modules",children:"Develop Modules"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a GitHub Repository"}),"\n",(0,i.jsx)(n.li,{children:"Write lint rules"}),"\n",(0,i.jsxs)(n.li,{children:["(Optional) Add the topic ",(0,i.jsx)(n.a,{href:"https://github.com/topics/lintnet-module",children:"lintnet-module"})," to the repository so that everyone can find your modules"]}),"\n",(0,i.jsx)(n.li,{children:"(Optional) Write tests"}),"\n",(0,i.jsxs)(n.li,{children:["(Optional) Set up CI running ",(0,i.jsx)(n.code,{children:"lintnet test"})]}),"\n",(0,i.jsx)(n.li,{children:"(Optional) Write document"}),"\n",(0,i.jsx)(n.li,{children:"(Optional) Create GitHub Releases"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/lintnet/modules",children:"The official modules"})," would be a good reference."]}),"\n",(0,i.jsx)(n.h3,{id:"write-document",children:"Write document"}),"\n",(0,i.jsx)(n.p,{children:"Of course the format is free, but we recommend writing the following information."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description"}),"\n",(0,i.jsx)(n.li,{children:"Example"}),"\n",(0,i.jsx)(n.li,{children:"Why is the rule necessary?"}),"\n",(0,i.jsx)(n.li,{children:"How to fix"}),"\n",(0,i.jsx)(n.li,{children:"config's schema"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(6540);const l={},s=i.createContext(l);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);