(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/Progress/index.less":function(e,t,n){},"./src/components/Progress/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(n("react"),n("./node_modules/@mdx-js/react/dist/esm.js")),a=n("./node_modules/docz/dist/index.esm.js");n("./src/components/Progress/index.less");function b(e){var t,n,r,s=e.themeColor,a=void 0===s?"#06f":s,b=e.percent,c=void 0===b?0:b,o=e.autoHidden,l=void 0!==o&&o,d=e.hiddenText,i=void 0!==d&&d,p=e.width,g=void 0===p?320:p,j=e.textColor,O=void 0===j?"#666":j,m=e.statusScope;return 100===+c&&l?null:React.createElement("div",{className:"progressWrap"},React.createElement("div",{className:"progressBar",style:{width:"number"===typeof g?g+"px":g}},React.createElement("div",{className:"progressInnerBar",style:{width:"".concat(c,"%"),backgroundColor:m&&m.length?(t=m,n=c,r=a,n=+n,t.sort((function(e,t){return e[0]-t[0]})),1===t.length?n<t[0][0]?t[0][1]:r:2===t.length?n<t[0][0]?t[0][1]:t[0][0]<n&&n<t[1][0]?t[1][1]:r:3===t.length?n<t[0][0]?t[0][1]:t[0][0]<n&&n<t[1][0]?t[1][1]:t[1][0]<n&&n<t[2][0]?t[2][1]:r:void 0):a}})),!i&&React.createElement("span",{className:"progressText",style:{color:O}},c+"%"))}var c=b;b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Progress",filename:"src\\components\\Progress\\index.jsx"}});var o={};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"progress\u8fdb\u5ea6\u6761"},"Progress\u8fdb\u5ea6\u6761"),Object(s.b)("h4",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(s.b)(a.c,{__position:0,__code:'<Progress percent={50} />\n<br />\n<Progress percent={20} themeColor="#888" />\n<br />\n<Progress percent={10} themeColor="red" />\n<br />\n<Progress percent={88} themeColor="green" />',__scope:{props:this?this.props:n,Playground:a.c,Progress:c},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(c,{percent:50,mdxType:"Progress"}),Object(s.b)("br",null),Object(s.b)(c,{percent:20,themeColor:"#888",mdxType:"Progress"}),Object(s.b)("br",null),Object(s.b)(c,{percent:10,themeColor:"red",mdxType:"Progress"}),Object(s.b)("br",null),Object(s.b)(c,{percent:88,themeColor:"green",mdxType:"Progress"})),Object(s.b)("h4",{id:"\u9690\u85cf\u8fdb\u5ea6\u6587\u672c"},"\u9690\u85cf\u8fdb\u5ea6\u6587\u672c"),Object(s.b)(a.c,{__position:1,__code:'<Progress percent={20} themeColor="#888" />\n<br />\n<Progress percent={50} hiddenText />',__scope:{props:this?this.props:n,Playground:a.c,Progress:c},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(c,{percent:20,themeColor:"#888",mdxType:"Progress"}),Object(s.b)("br",null),Object(s.b)(c,{percent:50,hiddenText:!0,mdxType:"Progress"})),Object(s.b)("h4",{id:"\u8bbe\u7f6e\u8fdb\u5ea6\u63a7\u4ef6\u5bbd\u5ea6"},"\u8bbe\u7f6e\u8fdb\u5ea6\u63a7\u4ef6\u5bbd\u5ea6"),Object(s.b)(a.c,{__position:2,__code:'<Progress percent={20} width={200} hiddenText />\n<br />\n<Progress percent={20} width={400} hiddenText themeColor="red" />\n<br />\n<Progress percent={40} width={300} hiddenText themeColor="green" />',__scope:{props:this?this.props:n,Playground:a.c,Progress:c},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(c,{percent:20,width:200,hiddenText:!0,mdxType:"Progress"}),Object(s.b)("br",null),Object(s.b)(c,{percent:20,width:400,hiddenText:!0,themeColor:"red",mdxType:"Progress"}),Object(s.b)("br",null),Object(s.b)(c,{percent:40,width:300,hiddenText:!0,themeColor:"green",mdxType:"Progress"})),Object(s.b)("h4",{id:"\u8bbe\u7f6e\u8fdb\u5ea6\u72b6\u6001\u9608\u503c"},"\u8bbe\u7f6e\u8fdb\u5ea6\u72b6\u6001\u9608\u503c"),Object(s.b)("p",null,"\u6839\u636e\u4e0d\u540c\u7684\u8fdb\u5ea6\u5c55\u793a\u4e0d\u540c\u7684\u8fdb\u5ea6\u6761\u989c\u8272\uff0c\u6b64\u6848\u4f8b\u5206\u4e3a20\uff0c 50\uff0c 80\u6321"),Object(s.b)(a.c,{__position:3,__code:"<Progress\n  percent={19}\n  statusScope={[\n    [20, 'red'],\n    [50, 'orange'],\n    [80, '#06f'],\n  ]}\n/>\n<br />\n<Progress\n  percent={40}\n  statusScope={[\n    [20, 'red'],\n    [50, 'orange'],\n    [80, '#06f'],\n  ]}\n/>\n<br />\n<Progress\n  percent={90}\n  statusScope={[\n    [20, 'red'],\n    [50, 'orange'],\n    [80, '#06f'],\n  ]}\n/>",__scope:{props:this?this.props:n,Playground:a.c,Progress:c},__codesandbox:"undefined",mdxType:"Playground"},Object(s.b)(c,{percent:19,statusScope:[[20,"red"],[50,"orange"],[80,"#06f"]],mdxType:"Progress"}),Object(s.b)("br",null),Object(s.b)(c,{percent:40,statusScope:[[20,"red"],[50,"orange"],[80,"#06f"]],mdxType:"Progress"}),Object(s.b)("br",null),Object(s.b)(c,{percent:90,statusScope:[[20,"red"],[50,"orange"],[80,"#06f"]],mdxType:"Progress"})),Object(s.b)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { Progress } from 'pocket'\n\n// \u5bfc\u5165\n<Progress percent={50} />\n<Progress percent={40} width={300} hiddenText themeColor=\"green\" />\n<Progress percent={90} statusScope={[[20, 'red'], [50, 'orange'], [80, '#06f']]} />\n")),Object(s.b)("h2",{id:"api\u6587\u6863"},"API\u6587\u6863"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"themeColor"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8fdb\u5ea6\u6761\u7684\u989c\u8272"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"'#06f'")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"percent"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8fdb\u5ea6\u503c\u767e\u5206\u6bd4"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"autoHidden"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u8fdb\u5ea6\u5230100%\u65f6\u81ea\u52a8\u6d88\u5931"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"bool"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"hiddenText"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u662f\u5426\u5f71\u85cf\u8fdb\u5ea6\u6761\u6587\u672c"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"bool"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"false")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"width"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8fdb\u5ea6\u6761\u7684\u5bbd\u5ea6"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"number")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"textColor"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u8fdb\u5ea6\u6587\u672c\u989c\u8272"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"'#666'")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"statusScope"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u72b6\u6001\u9608\u503c,\u5206\u522b\u8bbe\u7f6e\u4e0d\u540c\u8fdb\u5ea6\u8303\u56f4\u7684\u8fdb\u5ea6\u6761\u989c\u8272,\u6700\u5927\u5141\u8bb8\u8bbe\u7f6e3\u4e2a\u503c, \u4e3a\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"array"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}))))))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\components\\Progress\\index.mdx"}}),l.isMDXComponent=!0}}]);