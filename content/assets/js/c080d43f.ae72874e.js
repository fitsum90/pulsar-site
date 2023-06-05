"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[12692],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var r=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=r.createContext({}),o=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,s=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=o(a),d=l,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||n;return a?r.createElement(h,i(i({ref:e},u),{},{components:a})):r.createElement(h,i({ref:e},u))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,i=new Array(n);i[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[m]="string"==typeof t?t:l,i[1]=p;for(var o=2;o<n;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73608:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>o});var r=a(87462),l=(a(67294),a(3905));const n={id:"client-libraries",title:"Pulsar client libraries",sidebar_label:"Overview"},i=void 0,p={unversionedId:"client-libraries",id:"client-libraries",title:"Pulsar client libraries",description:"Language-specific client libraries",source:"@site/docs/client-libraries.md",sourceDirName:".",slug:"/client-libraries",permalink:"/docs/next/client-libraries",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries.md",tags:[],version:"current",frontMatter:{id:"client-libraries",title:"Pulsar client libraries",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"Pulsar Perf",permalink:"/docs/next/performance-pulsar-perf"},next:{title:"Java",permalink:"/docs/next/client-libraries-java"}},s={},o=[{value:"Language-specific client libraries",id:"language-specific-client-libraries",level:2},{value:"Language-agnostic client libraries",id:"language-agnostic-client-libraries",level:2},{value:"Feature matrix",id:"feature-matrix",level:2},{value:"Third-party clients",id:"third-party-clients",level:2},{value:".NET",id:"net",level:4},{value:"Go",id:"go",level:4},{value:"Haskell",id:"haskell",level:4},{value:"Node.js",id:"nodejs",level:4},{value:"PHP",id:"php",level:4},{value:"Rust",id:"rust",level:4},{value:"Scala",id:"scala",level:4}],u={toc:o},m="wrapper";function c(t){let{components:e,...a}=t;return(0,l.kt)(m,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"language-specific-client-libraries"},"Language-specific client libraries"),(0,l.kt)("p",null,"Pulsar supports the following language-specific client libraries:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Language"),(0,l.kt)("th",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("th",{parentName:"tr",align:null},"Release note"),(0,l.kt)("th",{parentName:"tr",align:null},"Code repo"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Java"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/client-libraries-java"},"User doc"),"   ",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/client/3.0.x/"},"API doc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"pathname:///release-notes/client-java"},"Standalone")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-client"},"Bundled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/client-libraries-cpp"},"User doc"),"    ",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/cpp/3.2.x"},"API doc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"pathname:///release-notes/client-cpp"},"Standalone")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-client-cpp"},"Standalone"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/client-libraries-python"},"User doc")," ",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/python/3.2.x"},"API doc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"pathname:///release-notes/client-python"},"Standalone")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-client-python"},"Standalone"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Go client"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/client-libraries-go"},"User doc"),"   ",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar"},"API doc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"pathname:///release-notes/client-go"},"Standalone")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-client-go"},"Standalone"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/client-libraries-node"},"User doc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"pathname:///release-notes/client-node"},"Standalone")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-client-node"},"Standalone"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C#"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/client-libraries-dotnet"},"User doc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"pathname:///release-notes/client-cs"},"Standalone")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-dotpulsar"},"Standalone"))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you want to create your own client library, read the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/developing-binary-protocol"},"binary protocol documentation"),".")),(0,l.kt)("h2",{id:"language-agnostic-client-libraries"},"Language-agnostic client libraries"),(0,l.kt)("p",null,"Pulsar supports the following language-agnostic client libraries:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Interface"),(0,l.kt)("th",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("th",{parentName:"tr",align:null},"Release note"),(0,l.kt)("th",{parentName:"tr",align:null},"Code repo"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REST"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/client-libraries-rest"},"User doc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"pathname:///release-notes/"},"Bundled")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-broker"},"Bundled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WebSocket"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/next/client-libraries-websocket"},"User doc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"pathname:///release-notes/client-ws"},"Standalone")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-websocket"},"Bundled"))))),(0,l.kt)("h2",{id:"feature-matrix"},"Feature matrix"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/client-feature-matrix/"},"Client Feature Matrix")," page provides an overview of the latest feature supportability on language-specific clients."),(0,l.kt)("h2",{id:"third-party-clients"},"Third-party clients"),(0,l.kt)("p",null,"Besides the officially released clients, multiple projects on developing Pulsar clients are available in different languages."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},'Want your repository listed here? Click the "Edit this page" button at the bottom of this page.')),(0,l.kt)("h4",{id:"net"},".NET"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"License"),(0,l.kt)("th",{parentName:"tr",align:null},"Badges"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/fsprojects/pulsar-client-dotnet"},"pulsar-client-dotnet")),(0,l.kt)("td",{parentName:"tr",align:null},"Apache Pulsar native client for .NET (C#/F#/VB)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://opensource.org/licenses/MIT"},"MIT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/fsprojects/pulsar-client-dotnet?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/fsprojects/pulsar-client-dotnet?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))),(0,l.kt)("h4",{id:"go"},"Go"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"License"),(0,l.kt)("th",{parentName:"tr",align:null},"Badges"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Comcast/pulsar-client-go"},"pulsar-client-go")),(0,l.kt)("td",{parentName:"tr",align:null},"A Go client library for Apache Pulsar"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/apache/pulsar-client-go?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/apache/pulsar-client-go?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))),(0,l.kt)("h4",{id:"haskell"},"Haskell"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"License"),(0,l.kt)("th",{parentName:"tr",align:null},"Badges"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/cr-org/supernova"},"supernova")),(0,l.kt)("td",{parentName:"tr",align:null},"Apache Pulsar client for Haskell"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/cr-org/supernova?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/cr-org/supernova?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))),(0,l.kt)("h4",{id:"nodejs"},"Node.js"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"License"),(0,l.kt)("th",{parentName:"tr",align:null},"Badges"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ayeo-flex-org/pulsar-flex"},"pulsar-flex")),(0,l.kt)("td",{parentName:"tr",align:null},"Pulsar Flex is a modern Apache Pulsar client for Node.js, developed to be independent of C++."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://opensource.org/licenses/MIT"},"MIT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/ayeo-flex-org/pulsar-flex?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/ayeo-flex-org/pulsar-flex?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))),(0,l.kt)("h4",{id:"php"},"PHP"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"License"),(0,l.kt)("th",{parentName:"tr",align:null},"Badges"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ikilobyte/pulsar-client-php"},"pulsar-client-php")),(0,l.kt)("td",{parentName:"tr",align:null},"PHP Native Client library for Apache Pulsar"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://opensource.org/licenses/MIT"},"MIT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/ikilobyte/pulsar-client-php?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/ikilobyte/pulsar-client-php?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))),(0,l.kt)("h4",{id:"rust"},"Rust"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"License"),(0,l.kt)("th",{parentName:"tr",align:null},"Badges"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/streamnative/pulsar-rs"},"pulsar-rs")),(0,l.kt)("td",{parentName:"tr",align:null},"Rust Client library for Apache Pulsar"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/streamnative/pulsar-rs?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/streamnative/pulsar-rs?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))),(0,l.kt)("h4",{id:"scala"},"Scala"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"License"),(0,l.kt)("th",{parentName:"tr",align:null},"Badges"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CleverCloud/pulsar4s"},"pulsar4s")),(0,l.kt)("td",{parentName:"tr",align:null},"Idiomatic, typesafe, and reactive Scala client for Apache Pulsar"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/CleverCloud/pulsar4s?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/CleverCloud/pulsar4s?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/cr-org/neutron"},"neutron")),(0,l.kt)("td",{parentName:"tr",align:null},"Purely functional Apache Pulsar client for Scala built on top of Fs2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/cr-org/neutron?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/cr-org/neutron?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://neutron.profunktor.dev"},"neutron (profunktor's fork)")),(0,l.kt)("td",{parentName:"tr",align:null},"Fs2-powered Apache Pulsar client with support for Scala 2 and 3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/profunktor/neutron?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/profunktor/neutron?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))))}c.isMDXComponent=!0}}]);