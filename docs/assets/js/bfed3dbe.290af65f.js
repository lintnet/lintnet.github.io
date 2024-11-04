"use strict";(self.webpackChunklintnet=self.webpackChunklintnet||[]).push([[442],{1362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"test-rule","title":"Test lint rules","description":"To test lint file x.jsonnet, you need to create a test file x_test.jsonnet on the same directory with x.jsonnet.","source":"@site/docs/test-rule.md","sourceDirName":".","slug":"/test-rule","permalink":"/docs/test-rule","draft":false,"unlisted":false,"editUrl":"https://github.com/lintnet/lintnet.github.io/edit/main/docs/test-rule.md","tags":[],"version":"current","sidebarPosition":400,"frontMatter":{"sidebar_position":400},"sidebar":"tutorialSidebar","previous":{"title":"Configuration","permalink":"/docs/config"},"next":{"title":"Examples","permalink":"/docs/example"}}');var i=t(4848),l=t(8453);const a={sidebar_position:400},o="Test lint rules",r={},d=[{value:"Schema",id:"schema",level:2},{value:"Scaffold a test file",id:"scaffold-a-test-file",level:2},{value:"Run test",id:"run-test",level:2},{value:"Normalization of evaluation result",id:"normalization-of-evaluation-result",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"test-lint-rules",children:"Test lint rules"})}),"\n",(0,i.jsxs)(n.p,{children:["To test lint file ",(0,i.jsx)(n.code,{children:"x.jsonnet"}),", you need to create a test file ",(0,i.jsx)(n.code,{children:"x_test.jsonnet"})," on the same directory with ",(0,i.jsx)(n.code,{children:"x.jsonnet"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,i.jsxs)(n.p,{children:["JSON Schema: ",(0,i.jsx)(n.a,{href:"https://github.com/lintnet/lintnet/blob/main/json-schema/test-result.json",children:"https://github.com/lintnet/lintnet/blob/main/json-schema/test-result.json"})]}),"\n",(0,i.jsx)(n.p,{children:"A test file is a function returning a list of test case."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonnet",children:"function(param) [\n  {\n    name: 'Test case name',\n    // ...\n  }\n  // ...\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:"A test case is a pair of test data and expected result."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonnet",children:"{\n  name: 'Test case name',\n  // test data\n  // ...\n  param: {\n    // config is configuration passed to the lint file\n    // config is optional.\n    config: {},\n  },\n  result: [\n    // expected return value of the lint file\n  ],\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["About test data, you can refer to test data files with ",(0,i.jsx)(n.code,{children:"data_file"})," and ",(0,i.jsx)(n.code,{children:"data_files"})," fields."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonnet",children:"function(param) [\n  {\n    data_file: 'testdata/pass.json', // relative path from the test file\n  },\n  // ...\n]\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"fake_data_file"})," is useful to disguise a data file path for testing.\nIf you set ",(0,i.jsx)(n.code,{children:"fake_data_file"}),", a test data is read from ",(0,i.jsx)(n.code,{children:"data_file"})," but the data file path passed to the lint file is disguised as ",(0,i.jsx)(n.code,{children:"fake_data_file"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonnet",children:"data_file: 'testdata/pass.yaml',\nfake_data_file: '.github/workflows/pass.yaml',\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.a,{href:"/docs/guides/lint-across-files/",children:"a lint file lints across multiple files"}),", ",(0,i.jsx)(n.code,{children:"data_files"})," is used instead of ",(0,i.jsx)(n.code,{children:"data_file"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonnet",children:"{\n  data_files: [\n    // a list of data files.\n    // The element is either a string or an object.\n    'testdata/pass.json',\n    {\n      path: 'testdata/foo.json',\n      fake_path: '/etc/app/foo.json',\n    },\n  ],\n},\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Instead of ",(0,i.jsx)(n.code,{children:"data_file"})," and ",(0,i.jsx)(n.code,{children:"data_files"}),", you can also define data in a test file directly using ",(0,i.jsx)(n.code,{children:"param"}),".\nBut we recommend ",(0,i.jsx)(n.code,{children:"data_file"})," and ",(0,i.jsx)(n.code,{children:"data_files"})," because they are more maintainable."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonnet",children:"{\n  param: {\n    // These fields are optional.\n    // You only have to set fields used in the lint file.\n    data: {\n      file_path: 'foo.json',\n      file_type: 'json',\n      text: '', // raw text\n      value: {\n        // parsed data\n      },\n    },\n  },\n  // ...\n},\n"})}),"\n",(0,i.jsx)(n.p,{children:"About expected result, the format depends on the lint rule."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsonnet",children:"{\n  result: [ // expected return value of the lint file\n    {\n      name: 'age must be greater or equal than 18',\n      level: 'error',\n      location: {\n        index: 0,\n        line: 'mike,1',\n      },\n    },\n  ],\n},\n"})}),"\n",(0,i.jsx)(n.h2,{id:"scaffold-a-test-file",children:"Scaffold a test file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lintnet new [<lint file name | main.jsonnet>]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run-test",children:"Run test"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"lintnet test [<lint file, test file, or directory> ...]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you run ",(0,i.jsx)(n.code,{children:"lintnet test"})," without any argument, lintnet searches lint files using a configuration file and tests all lint files having test files.\nlint files without test files are ignored.\nYou can test only specific files by specifying files as command line arguments.\nIf you specify files explicitly, a configuration file is unnecessary.\nThis means when you develop modules, you don't have to prepare a configuration file."]}),"\n",(0,i.jsxs)(n.p,{children:["If you specify directories, lint files in those directories and subdirectories are tested.\nFor example, ",(0,i.jsx)(n.code,{children:"lintnet test ."})," searches files matching the glob pattern ",(0,i.jsx)(n.code,{children:"**/*.jsonnet"})," and ",(0,i.jsx)(n.code,{children:"lintnet test foo"})," search files matching ",(0,i.jsx)(n.code,{children:"foo/**/*.jsonnet"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If a configuration file isn't specified and isn't found, ",(0,i.jsx)(n.code,{children:"lintnet test"})," works as ",(0,i.jsx)(n.code,{children:"lintnet test ."}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"normalization-of-evaluation-result",children:"Normalization of evaluation result"}),"\n",(0,i.jsxs)(n.p,{children:["The evaluation result of lint file is normalized before it is compared with ",(0,i.jsx)(n.code,{children:"result"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"description"})," and ",(0,i.jsx)(n.code,{children:"excluded"})," are removed"]}),"\n",(0,i.jsxs)(n.li,{children:["Array elements whose ",(0,i.jsx)(n.code,{children:"excluded"})," is ",(0,i.jsx)(n.code,{children:"true"})," are excluded"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, If the evaluation result of lint file is as the following,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "name": "foo",\n    "description": "Hello, lintnet!",\n    "excluded": true\n  },\n  {\n    "name": "foo",\n    "description": "Hello, lintnet!",\n    "excluded": false\n  }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"result"})," must be as the following."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "name": "foo"\n  }\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This normalization simplifies ",(0,i.jsx)(n.code,{children:"result"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(6540);const i={},l=s.createContext(i);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);