"use strict";(self.webpackChunklintnet=self.webpackChunklintnet||[]).push([[794],{3577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=n(5893),d=n(1151);const i={sidebar_position:200},r="Supported data format",l={id:"supported-data-format",title:"Supported data format",description:"lintnet can lint the following file formats.",source:"@site/docs/supported-data-format.md",sourceDirName:".",slug:"/supported-data-format",permalink:"/docs/supported-data-format",draft:!1,unlisted:!1,editUrl:"https://github.com/lintnet/lintnet.github.io/edit/main/docs/supported-data-format.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Lint rules",permalink:"/docs/lint-rule"}},c={},o=[{value:"YAML is parsed as multiple documents",id:"yaml-is-parsed-as-multiple-documents",level:2},{value:"Plain Text",id:"plain-text",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"supported-data-format",children:"Supported data format"}),"\n",(0,s.jsxs)(t.p,{children:["lintnet can lint the following file formats.\nlintnet judges file types by file extensions.\nWe're considering supporting additional file formats. ",(0,s.jsx)(t.a,{href:"https://github.com/lintnet/lintnet/issues/37",children:"#37"})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"format"}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.code,{children:"file_type"})}),(0,s.jsx)(t.th,{children:"file extensions"}),(0,s.jsx)(t.th,{children:"parser"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"CSV"}),(0,s.jsx)(t.td,{children:"csv"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:".csv"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/encoding/csv#Reader",children:"encoding/csv"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"HCL 2"}),(0,s.jsx)(t.td,{children:"hcl2"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:".hcl"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/tmccombs/hcl2json/convert",children:"tmccombs/hcl2json"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"JSON"}),(0,s.jsx)(t.td,{children:"json"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:".json"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/encoding/json#Decoder",children:"encoding/json"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TOML"}),(0,s.jsx)(t.td,{children:"toml"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:".toml"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://godocs.io/github.com/BurntSushi/toml#Decoder",children:"BurntSushi/toml"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TSV"}),(0,s.jsx)(t.td,{children:"tsv"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:".tsv"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/encoding/csv#Reader",children:"encoding/csv"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"YAML"}),(0,s.jsx)(t.td,{children:"yaml"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:".yml"}),", ",(0,s.jsx)(t.code,{children:".yaml"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/gopkg.in/yaml.v3#Decoder",children:"gopkg.in/yaml.v3"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"yaml-is-parsed-as-multiple-documents",children:"YAML is parsed as multiple documents"}),"\n",(0,s.jsxs)(t.p,{children:["A YAML file is comprised of multiple documents separated by ",(0,s.jsx)(t.code,{children:"---"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"e.g."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"---\n# document 0\nname: foo\n---\n# document 1\nname: bar\n"})}),"\n",(0,s.jsx)(t.p,{children:"So A YAML file is parsed as multiple documents even if the file includes only one document.\nIn lint rules, you need to iterate multiple documents or get the first document by specifying the index."}),"\n",(0,s.jsx)(t.p,{children:"e.g."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsonnet",children:"for doc in param.data.value # Iterate multiple documents\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsonnet",children:"param.data.value[0] # Get the first document\n"})}),"\n",(0,s.jsx)(t.h2,{id:"plain-text",children:"Plain Text"}),"\n",(0,s.jsxs)(t.p,{children:["lintnet judges file types by file extensions.\nIf no parser is found, lintnet parse the file as a plain text file.\nThe external variable ",(0,s.jsx)(t.code,{children:"file_type"})," is ",(0,s.jsx)(t.code,{children:"plain_text"}),".\nThe external variable ",(0,s.jsx)(t.code,{children:"input"})," is empty, but you can still lint the file with other external variables such as ",(0,s.jsx)(t.code,{children:"file_path"})," and ",(0,s.jsx)(t.code,{children:"file_text"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var s=n(7294);const d={},i=s.createContext(d);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);