"use strict";(self.webpackChunklintnet=self.webpackChunklintnet||[]).push([[971],{9925:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=s(5893),t=s(1151);const l={sidebar_position:1},o="Home",r={id:"index",title:"Home",description:"Release Notes | Versioning Policy | MIT LICENSE",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/lintnet/lintnet.github.io/edit/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Install",permalink:"/docs/install"}},a={},d=[{value:"\u26a0\ufe0f This project is still under development",id:"warning-this-project-is-still-under-development",level:2},{value:"Features",id:"features",level:2},{value:"Why Jsonnet?",id:"why-jsonnet",level:2},{value:"Comparison",id:"comparison",level:2},{value:"Conftest",id:"conftest",level:3},{value:"\ud83d\udc4d High reusability",id:"-high-reusability",level:4},{value:"\ud83d\udc4d Jsonnet is easier than Rego",id:"-jsonnet-is-easier-than-rego",level:4},{value:"Programing languages such as Python and JavaScript",id:"programing-languages-such-as-python-and-javascript",level:3},{value:"Sub projects",id:"sub-projects",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"home",children:"Home"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/lintnet/lintnet/releases",children:"Release Notes"})," | ",(0,i.jsx)(n.a,{href:"https://github.com/suzuki-shunsuke/versioning-policy",children:"Versioning Policy"})," | ",(0,i.jsx)(n.a,{href:"https://github.com/lintnet/lintnet/blob/main/LICENSE",children:"MIT LICENSE"})]}),"\n",(0,i.jsxs)(n.p,{children:["lintnet is a secure, powerful, reusable linter powered by ",(0,i.jsx)(n.a,{href:"https://jsonnet.org/",children:"Jsonnet"}),".\nYou can write lint rules in Jsonnet and lint various files (",(0,i.jsx)(n.a,{href:"#supported-file-format",children:"Supported formats"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:'$ lintnet lint\n{\n  "lintnet_version": "0.2.0",\n  "env": "darwin/arm64",\n  "errors": [\n    {\n      "name": "description is required",\n      "lint_file": "hello.jsonnet",\n      "data_file": "hello.json"\n    }\n  ]\n}\nFATA[0000] lintnet failed                                env=darwin/arm64 error=lint failed program=lintnet version=0.2.0\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"warning-this-project-is-still-under-development",children:["\u26a0\ufe0f"," This project is still under development"]}),"\n",(0,i.jsx)(n.p,{children:"This tool doesn't work and API is unstable yet.\nPlease don't use this tool yet."}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Lint various types of files (",(0,i.jsx)(n.a,{href:"#supported-file-format",children:"Supported formats"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Powerful. You can lint configuration files flexibly by Jsonnet"}),"\n",(0,i.jsx)(n.li,{children:"Secure. Jsonnet can't access filesystem and network so it's secure compared with common programming languages such as JavaScript"}),"\n",(0,i.jsx)(n.li,{children:"Cross Platform. lintnet works on Linux, macOS, Windows / amd64, arm64"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/install",children:"Easy to install"}),". lintnet is a single binary written in ",(0,i.jsx)(n.a,{href:"https://go.dev/",children:"Go"}),", so you only need to install an executable file into ",(0,i.jsx)(n.code,{children:"$PATH"}),". lintnet has no dependency that you need to install"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/test-rule",children:"Test lint rules"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/module",children:"Share and reuse lint rules as Modules"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/module#update-modules-by-renovate",children:"Update Modules by Renovate"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/guides/lint-across-files",children:"Lint across multiple files"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/guides/customize-output",children:"Customize output format"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"why-jsonnet",children:"Why Jsonnet?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Powerful","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Jsonnet has enough features to lint data","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"e.g. Variables, Functions, Conditions, Array and Object Comprehension, Imports, Errors, External variables, Top-level arguments, Standard library"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Simple","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The learning cost is not so high"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Popular","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can search information and ask help to others when you have some troubles"}),"\n",(0,i.jsx)(n.li,{children:"You can utilize the knowledge for not only this tool but also other projects"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Secure","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Jsonnet can't access file systems and networks and can't execute external commands"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"comparison",children:"Comparison"}),"\n",(0,i.jsx)(n.h3,{id:"conftest",children:"Conftest"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud83d\udc4d High reusability"}),"\n",(0,i.jsx)(n.li,{children:"\ud83d\udc4d Jsonnet is easier than Rego, though this is subjective and depends on you"}),"\n",(0,i.jsx)(n.li,{children:"\ud83d\udc4d Declarative configuration"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"-high-reusability",children:"\ud83d\udc4d High reusability"}),"\n",(0,i.jsx)(n.p,{children:"When We used Conftest, we complaint we couldn't reuse Conftest policies well."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Conftest has the mechanism to push and pull policies, but we think this isn't enough. More sophisticated and standardized way is necessary"}),"\n",(0,i.jsx)(n.li,{children:"It's a little difficult to share Conftest policies between multiple repositories.\nOf course it's possible, but there is no standard way."}),"\n",(0,i.jsx)(n.li,{children:"Each organization writes similar policies from scratch independently.\nThis isn't good. Ideally, policies should be shared and reused all over the world."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"lintnet has the module mechanism. you can distribute and reuse modules easily in the standard way.\nNot only lint rules but also Jsonnet functions can be shared as modules.\nYou can update modules continuously by Renovate."}),"\n",(0,i.jsxs)(n.p,{children:["About modules, please see ",(0,i.jsx)(n.a,{href:"module",children:"Module"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"-jsonnet-is-easier-than-rego",children:"\ud83d\udc4d Jsonnet is easier than Rego"}),"\n",(0,i.jsx)(n.p,{children:"This is so subjective and depends on you, but some people would feel Jsonnet is easier than Rego."}),"\n",(0,i.jsx)(n.p,{children:"Rego is awesome, but it's different from other programing languages such as JavaScript and Python, so some people have difficulty in learning Rego."}),"\n",(0,i.jsx)(n.p,{children:"If you complain about Rego, maybe you like Jsonnet."}),"\n",(0,i.jsx)(n.h3,{id:"programing-languages-such-as-python-and-javascript",children:"Programing languages such as Python and JavaScript"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud83d\udc4d Secure"}),"\n",(0,i.jsx)(n.li,{children:"\ud83d\udc4d You only need to implement lint logic. You don't need to implement other feature such as reading and parsing files and outputs results"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you reuse third party libraries as lint rules, you need to check if they are secure.\nCommon programing languages such as Python and JavaScript do anything, so attackers can execute malicious codes. It would be difficult to ensure security.\nOn the other hand, Jsonnet can't access filesystem and network so it's securer than those programming languages."}),"\n",(0,i.jsx)(n.h2,{id:"sub-projects",children:"Sub projects"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/orgs/lintnet/repositories",children:"https://github.com/orgs/lintnet/repositories"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/lintnet/lintnet",children:"lintnet"}),": CLI"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/lintnet/modules",children:"modules"}),": Official modules"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/lintnet/examples",children:"examples"}),": Examples"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/lintnet/renovate-config",children:"renovate-config"}),": Renovate Config Preset to update modules"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/lintnet/lintnet.github.io",children:"lintnet.github.io"}),": Official web site"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/lintnet/go-jsonnet-native-functions",children:"go-jsonnet-native-functions"}),": Go package porting several Go's Standard libraries functions to go-jsonnet's Native functions"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var i=s(7294);const t={},l=i.createContext(t);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);