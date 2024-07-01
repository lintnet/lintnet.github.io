"use strict";(self.webpackChunklintnet=self.webpackChunklintnet||[]).push([[188],{7719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(4848),r=t(8453);const s={sidebar_position:100},a="Parameterize lint rules",o={id:"guides/parameterize-rule",title:"Parameterize lint rules",description:"Each lint file can take config parameters.",source:"@site/docs/guides/parameterize-rule.md",sourceDirName:"guides",slug:"/guides/parameterize-rule",permalink:"/docs/guides/parameterize-rule",draft:!1,unlisted:!1,editUrl:"https://github.com/lintnet/lintnet.github.io/edit/main/docs/guides/parameterize-rule.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Learn Jsonnet for lintnet",permalink:"/docs/learn-jsonnet"},next:{title:"Lint across files",permalink:"/docs/guides/lint-across-files"}},c={},l=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"parameterize-lint-rules",children:"Parameterize lint rules"}),"\n",(0,i.jsx)(n.p,{children:"Each lint file can take config parameters."}),"\n",(0,i.jsx)(n.p,{children:"e.g."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonnet",children:"lint_files: [\n  {\n    path: 'examples/lint/filename.jsonnet',\n    config: {\n      excludes: ['foo'],\n    },\n  },\n],\nmodules: [\n  {\n    path: 'github_archive/github.com/suzuki-shunsuke/example-lintnet-modules/ghalint.jsonnet@32ca3be646ec5b5861aab72fed30cd71f6eba9bf:v0.1.2',\n    config: {\n      excludes: ['foo'],\n    },\n  },\n],\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each lint file can refer to parameters by ",(0,i.jsx)(n.code,{children:"param.config"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"e.g."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonnet",children:"local excludes = std.get(param.config, 'excludes', [])\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);