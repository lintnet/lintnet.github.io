"use strict";(self.webpackChunklintnet=self.webpackChunklintnet||[]).push([[261],{7417:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"guides/error-level","title":"Error Level","description":"Each lint error has it\'s error level.","source":"@site/docs/guides/error-level.md","sourceDirName":"guides","slug":"/guides/error-level","permalink":"/docs/guides/error-level","draft":false,"unlisted":false,"editUrl":"https://github.com/lintnet/lintnet.github.io/edit/main/docs/guides/error-level.md","tags":[],"version":"current","sidebarPosition":700,"frontMatter":{"sidebar_position":700},"sidebar":"tutorialSidebar","previous":{"title":"Usage","permalink":"/docs/guides/usage"},"next":{"title":"Troubleshooting","permalink":"/docs/troubleshooting"}}');var o=n(4848),t=n(8453);const s={sidebar_position:700},i="Error Level",d={},c=[];function h(e){const r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"error-level",children:"Error Level"})}),"\n",(0,o.jsxs)(r.p,{children:["Each lint error has it's ",(0,o.jsx)(r.code,{children:"error level"}),".\n",(0,o.jsx)(r.code,{children:"lintnet lint"})," command has it's ",(0,o.jsx)(r.code,{children:"error level"})," and ",(0,o.jsx)(r.code,{children:"shown error level"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"The following error levels are supported."}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"severity"}),(0,o.jsx)(r.th,{children:"error level"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"1"}),(0,o.jsx)(r.td,{children:"debug"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"2"}),(0,o.jsx)(r.td,{children:"info"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"3"}),(0,o.jsx)(r.td,{children:"warn"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"4"}),(0,o.jsx)(r.td,{children:"error"})]})]})]}),"\n",(0,o.jsxs)(r.p,{children:["The default error level of lint command and each lint error is ",(0,o.jsx)(r.code,{children:"error"}),".\nAnd the default ",(0,o.jsx)(r.code,{children:"shown error level"})," of lint command is ",(0,o.jsx)(r.code,{children:"info"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["lint command's ",(0,o.jsx)(r.code,{children:"error level"})," is greater than ",(0,o.jsx)(r.code,{children:"shown error level"}),".\nFor example, if you set ",(0,o.jsx)(r.code,{children:"error level"})," to ",(0,o.jsx)(r.code,{children:"debug"}),", ",(0,o.jsx)(r.code,{children:"shown error level"})," becomes ",(0,o.jsx)(r.code,{children:"debug"})," too."]}),"\n",(0,o.jsxs)(r.p,{children:["You can specify the error level of lint command by command line option ",(0,o.jsx)(r.code,{children:"--error-level (-e)"})," or the environment variable ",(0,o.jsx)(r.code,{children:"LINTNET_ERROR_LEVEL"})," or configuration file ",(0,o.jsx)(r.code,{children:"lintnet.jsonnet"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"e.g."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-sh",children:"lintnet lint -e error\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsonnet",children:"// lintnet.jsonnet\nerror_level: 'warn',\nshown_error_level: 'debug',\n"})}),"\n",(0,o.jsxs)(r.p,{children:["You can also specify the shown error level of lint command by command line option ",(0,o.jsx)(r.code,{children:"--shown-error-level"})," or the environment variable ",(0,o.jsx)(r.code,{children:"LINTNET_SHOWN_ERROR_LEVEL"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["The error level of each lintnet error is specified with ",(0,o.jsx)(r.code,{children:"level"})," field."]}),"\n",(0,o.jsx)(r.p,{children:"e.g."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsonnet",children:"function(param)\n  if std.objectHas(param.data.value, 'description') then [] else [{\n    name: 'description is required',\n    level: 'warn', // Error level is 'warn'\n  }]\n"})}),"\n",(0,o.jsx)(r.p,{children:"If all errors' error level is lower than the error level of lint command, the command succeeds.\nIf the error level of a lint error is lower than the shown error level of lint command, the error is excluded from the output."})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var l=n(6540);const o={},t=l.createContext(o);function s(e){const r=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),l.createElement(t.Provider,{value:r},e.children)}}}]);