"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},h="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,y=h["".concat(i,".").concat(m)]||h[m]||s[m]||l;return n?a.createElement(y,p(p({ref:t},u),{},{components:n})):a.createElement(y,p({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[h]="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},p=void 0,o={unversionedId:"versioned/client-python-3.2.0",id:"versioned/client-python-3.2.0",title:"client-python-3.2.0",description:"What's Changed",source:"@site/release-notes/versioned/client-python-3.2.0.md",sourceDirName:"versioned",slug:"/versioned/client-python-3.2.0",permalink:"/release-notes/versioned/client-python-3.2.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-python-3.2.0.md",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}],u={toc:c},h="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bumped version to 3.2.0a1 by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/105"},"https://github.com/apache/pulsar-client-python/pull/105")),(0,r.kt)("li",{parentName:"ul"},"Upgrade fastavro to 1.7.3 by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/110"},"https://github.com/apache/pulsar-client-python/pull/110")),(0,r.kt)("li",{parentName:"ul"},"Update to bookkeeper client 4.16.1 by @merlimat in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/111"},"https://github.com/apache/pulsar-client-python/pull/111")),(0,r.kt)("li",{parentName:"ul"},"[Doc]"," Add links to client docs and feature matrix in README.md by @momo-jun in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/117"},"https://github.com/apache/pulsar-client-python/pull/117")),(0,r.kt)("li",{parentName:"ul"},"Bump the C++ client to 3.2.0 by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/118"},"https://github.com/apache/pulsar-client-python/pull/118")),(0,r.kt)("li",{parentName:"ul"},"Add docs and tests for AuthenticationOauth2 by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/120"},"https://github.com/apache/pulsar-client-python/pull/120")),(0,r.kt)("li",{parentName:"ul"},"Make acknowledge APIs synchronous and improve the documents by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/121"},"https://github.com/apache/pulsar-client-python/pull/121")),(0,r.kt)("li",{parentName:"ul"},"Use readNextAsync for reader.read_next() by @merlimat in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/125"},"https://github.com/apache/pulsar-client-python/pull/125")),(0,r.kt)("li",{parentName:"ul"},"Release the GIL before any call to async methods by @merlimat in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/123"},"https://github.com/apache/pulsar-client-python/pull/123")),(0,r.kt)("li",{parentName:"ul"},"Fetch writer schema to decode Avro messages by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/119"},"https://github.com/apache/pulsar-client-python/pull/119")),(0,r.kt)("li",{parentName:"ul"},"Include the C extension when generating API docs by @BewareMyPower in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/126"},"https://github.com/apache/pulsar-client-python/pull/126"))),(0,r.kt)("h2",{id:"new-contributors"},"New Contributors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@momo-jun made their first contribution in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-python/pull/117"},"https://github.com/apache/pulsar-client-python/pull/117"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-python/compare/v3.1.0...v3.2.0"},"https://github.com/apache/pulsar-client-python/compare/v3.1.0...v3.2.0")))}s.isMDXComponent=!0}}]);