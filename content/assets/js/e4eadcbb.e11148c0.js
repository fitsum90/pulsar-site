(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5999],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>v,kt:()=>p});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},v=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,v=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=n,p=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return t?r.createElement(p,o(o({ref:a},v),{},{components:t})):r.createElement(p,o({ref:a},v))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53184:(e,a,t)=>{"use strict";t.d(a,{Z:()=>f});var r=t(87462),n=t(63366),s=t(67294),o=t(86010),i=t(94780),l=t(44063),c=t(68010),v=t(90948),d=t(1588),m=t(34867);function u(e){return(0,m.Z)("MuiTableHead",e)}(0,d.Z)("MuiTableHead",["root"]);var p=t(85893);const g=["className","component"],j=(0,v.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,a)=>a.root})({display:"table-header-group"}),b={variant:"head"},N="thead",f=s.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:s,component:v=N}=t,d=(0,n.Z)(t,g),m=(0,r.Z)({},t,{component:v}),f=(e=>{const{classes:a}=e;return(0,i.Z)({root:["root"]},u,a)})(m);return(0,p.jsx)(l.Z.Provider,{value:b,children:(0,p.jsx)(j,(0,r.Z)({as:v,className:(0,o.Z)(f.root,s),ref:a,role:v===N?null:"rowgroup",ownerState:m},d))})}))},14244:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>v,toc:()=>m});var r=t(87462),n=(t(67294),t(3905)),s=t(55063),o=t(80516),i=t.n(o);const l={id:"client-java",title:"Java Client Release Notes",sidebar_label:"Java Client"},c=void 0,v={unversionedId:"client-java",id:"client-java",title:"Java Client Release Notes",description:"",source:"@site/release-notes/client-java.mdx",sourceDirName:".",slug:"/client-java",permalink:"/release-notes/client-java",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/client-java.mdx",tags:[],version:"current",frontMatter:{id:"client-java",title:"Java Client Release Notes",sidebar_label:"Java Client"},sidebar:"releaseNote",previous:{title:"Pulsar Clients Release Notes",permalink:"/release-notes/clients"},next:{title:"WebSocket Client",permalink:"/release-notes/client-ws"}},d={},m=[],u={toc:m};function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,{data:i(),mdxType:"ClientReleaseTable"}))}p.isMDXComponent=!0},80516:e=>{e.exports=[{tagName:"v2.10.2",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.2/",doc:"/docs/client-libraries-java",version:"v2.10.x"},{tagName:"v2.10.1",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.1/",doc:"/docs/client-libraries-java",version:""},{tagName:"v2.10.0",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.0/",doc:"/docs/client-libraries-java",version:""},{tagName:"v2.9.4",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-java-2.9.4/",doc:"/docs/2.9.x/client-libraries-java",version:"v2.9.x"},{tagName:"v2.9.3",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-java-2.9.3/",doc:"/docs/2.9.x/client-libraries-java",version:""},{tagName:"v2.9.2",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-java-2.9.2/",doc:"/docs/2.9.x/client-libraries-java",version:""},{tagName:"v2.8.4",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.4/",doc:"/docs/2.8.x/client-libraries-java",version:"v2.8.x"},{tagName:"v2.8.3",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.3/",doc:"/docs/2.8.x/client-libraries-java",version:""},{tagName:"v2.8.2",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.2/",doc:"/docs/2.8.x/client-libraries-java",version:""},{tagName:"v2.8.1",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.1/",doc:"/docs/2.8.x/client-libraries-java",version:""},{tagName:"v2.8.0",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.0/",doc:"/docs/2.8.x/client-libraries-java",version:""},{tagName:"v2.7.5",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/client-java-2.7.5/",doc:"/docs/2.7.5/client-libraries-java",version:"v2.7.x"},{tagName:"v2.7.4",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/client-java-2.7.4/",doc:"/docs/2.7.4/client-libraries-java",version:""},{tagName:"v2.7.3",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/client-java-2.7.3/",doc:"/docs/2.7.3/client-libraries-java",version:""},{tagName:"v2.7.2",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/client-java-2.7.2/",doc:"/docs/2.7.2/client-libraries-java",version:""},{tagName:"v2.7.1",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/client-java-2.7.1/",doc:"/docs/2.7.1/client-libraries-java",version:""},{tagName:"v2.7.0",vtag:"2.7.0",releaseNotes:"/release-notes/versioned/client-java-2.7.0/",doc:"/docs/2.7.0/client-libraries-java",version:""},{tagName:"v2.6.4",vtag:"2.6.4",releaseNotes:"/release-notes/versioned/client-java-2.6.4/",doc:"/docs/2.6.4/client-libraries-java",version:"v2.6.x"},{tagName:"v2.6.2",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/client-java-2.6.2/",doc:"/docs/2.6.2/client-libraries-java",version:""},{tagName:"v2.6.1",vtag:"2.6.1",releaseNotes:"/release-notes/versioned/client-java-2.6.1/",doc:"/docs/2.6.1/client-libraries-java",version:""},{tagName:"v2.6.0",vtag:"2.6.0",releaseNotes:"/release-notes/versioned/client-java-2.6.0/",doc:"/docs/2.6.0/client-libraries-java",version:""},{tagName:"v2.5.1",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/client-java-2.5.1/",doc:"/docs/2.5.1/client-libraries-java",version:"v2.5.x"},{tagName:"v2.5.0",vtag:"2.5.0",releaseNotes:"/release-notes/versioned/client-java-2.5.0/",doc:"/docs/2.5.0/client-libraries-java",version:""}]},55063:(e,a,t)=>{"use strict";t.d(a,{Z:()=>v});var r=t(67294),n=t(7906),s=t(295),o=t(53252),i=t(53184),l=t(53816),c=t(95999);function v(e){return r.createElement(n.Z,{size:"small"},r.createElement(i.Z,null,r.createElement(l.Z,null,["Version","Release Note","Documentation"].map((e=>r.createElement(o.Z,{className:"font-bold",sx:{color:"inherit"},key:e},r.createElement(c.Z,null,e)))))),r.createElement(s.Z,null,e.data.map(((e,a)=>r.createElement(l.Z,{key:a,sx:{color:"inherit"}},r.createElement(o.Z,{sx:{color:"inherit"}},e.version),r.createElement(o.Z,{sx:{color:"inherit"}},r.createElement("a",{href:e.releaseNotes},e.tagName)),r.createElement(o.Z,{sx:{color:"inherit"}},r.createElement("a",{href:e.doc},e.vtag," Documentation")))))))}}}]);