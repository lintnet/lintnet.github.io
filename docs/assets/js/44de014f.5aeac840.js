"use strict";(self.webpackChunklintnet=self.webpackChunklintnet||[]).push([[525],{5595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(4848),r=t(8453);const s={sidebar_position:530},l="Learn Jsonnet for lintnet",o={id:"learn-jsonnet",title:"Learn Jsonnet for lintnet",description:"First, you should read Jsonnet's official documents.",source:"@site/docs/learn-jsonnet.md",sourceDirName:".",slug:"/learn-jsonnet",permalink:"/docs/learn-jsonnet",draft:!1,unlisted:!1,editUrl:"https://github.com/lintnet/lintnet.github.io/edit/main/docs/learn-jsonnet.md",tags:[],version:"current",sidebarPosition:530,frontMatter:{sidebar_position:530},sidebar:"tutorialSidebar",previous:{title:"Module",permalink:"/docs/module"},next:{title:"Parameterize lint rules",permalink:"/docs/guides/parameterize-rule"}},a={},c=[{value:"Check Jsonnet behaviour",id:"check-jsonnet-behaviour",level:2},{value:"1. Web editor",id:"1-web-editor",level:3},{value:"2. Jsonnet CLI",id:"2-jsonnet-cli",level:3},{value:"Standard library",id:"standard-library",level:2},{value:"local values",id:"local-values",level:2},{value:"Parameterize Entire Config",id:"parameterize-entire-config",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"learn-jsonnet-for-lintnet",children:"Learn Jsonnet for lintnet"}),"\n",(0,i.jsx)(n.p,{children:"First, you should read Jsonnet's official documents."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://jsonnet.org/learning/tutorial.html",children:"Tutorial"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://jsonnet.org/learning/tools.html",children:"Editor plugin, linter, formatter, and so on"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://jsonnet.org/ref/stdlib.html",children:"Standard library"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://jsonnet.org/ref/language.html",children:"Language reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://jsonnet.org/ref/language.html#equivalence-and-equality",children:"Equivalence and Equality"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"check-jsonnet-behaviour",children:"Check Jsonnet behaviour"}),"\n",(0,i.jsx)(n.p,{children:"When you write lintnet rules, sometimes you want to check how Jsonnet works.\nIn that case, you can check this in some ways."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Web editor"}),"\n",(0,i.jsx)(n.li,{children:"Jsonnet CLI"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"1-web-editor",children:"1. Web editor"}),"\n",(0,i.jsxs)(n.p,{children:["You can try Jsonnet instantly using the web editor on ",(0,i.jsx)(n.a,{href:"https://jsonnet.org/learning/tutorial.html",children:"https://jsonnet.org/learning/tutorial.html"})," ."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/lintnet/lintnet/assets/13323303/408441c3-9c1d-4ff9-99a7-f37a17d0e297",alt:"image"})}),"\n",(0,i.jsx)(n.h3,{id:"2-jsonnet-cli",children:"2. Jsonnet CLI"}),"\n",(0,i.jsxs)(n.p,{children:["You can also execute Jsonnet with Jsonnet CLI.\nThere are two implementation, C++ implementation and Go implementation (",(0,i.jsx)(n.a,{href:"https://github.com/google/go-jsonnet",children:"go-jsonnet"}),").\nlintnet uses go-jsonnet, so go-jsonnet would be better."]}),"\n",(0,i.jsxs)(n.p,{children:["You can install go-jsonnet with Homebrew and ",(0,i.jsx)(n.a,{href:"https://aquaproj.github.io/",children:"aqua"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"brew install go-jsonnet\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"aqua g -i google/go-jsonnet\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can evaluate Jsonnet by jsonnet command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"jsonnet hello.jsonnet\n"})}),"\n",(0,i.jsx)(n.h2,{id:"standard-library",children:"Standard library"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://jsonnet.org/ref/stdlib.html",children:"https://jsonnet.org/ref/stdlib.html"})}),"\n",(0,i.jsx)(n.p,{children:"We pick out some functions that we often use."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"std.type(x): type check"}),"\n",(0,i.jsx)(n.li,{children:"std.length(x): check the size of array and object"}),"\n",(0,i.jsx)(n.li,{children:"std.get(o, f, default=null, inc_hidden=true): get the object attribute with a default value"}),"\n",(0,i.jsx)(n.li,{children:"std.objectHas(o, f): Check if the attribute exists"}),"\n",(0,i.jsx)(n.li,{children:"std.objectKeysValues(o): convert object to array"}),"\n",(0,i.jsx)(n.li,{children:"std.startsWith(a, b), std.endsWith(a, b)"}),"\n",(0,i.jsx)(n.li,{children:"std.map(func, arr), std.mapWithIndex(func, arr), std.filterMap(filter_func, map_func, arr), std.filter(func, arr)"}),"\n",(0,i.jsx)(n.li,{children:"std.set(arr, keyF=id)"}),"\n",(0,i.jsx)(n.li,{children:"std.sort(arr, keyF=id)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"local-values",children:"local values"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonnet",children:"function(param) \n  local foo = 'foo';\n  {\n    // Define local values in object definitions\n    local factor = if large then 2 else 1,\n    // Add attributes to objects conditionally\n    [if salted then 'garnish']: 'Salt',\n  }\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameterize-entire-config",children:"Parameterize Entire Config"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://jsonnet.org/learning/tutorial.html#parameterize-entire-config",children:"https://jsonnet.org/learning/tutorial.html#parameterize-entire-config"})}),"\n",(0,i.jsx)(n.p,{children:"lintnet uses Top-level arguments, not External variables."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);