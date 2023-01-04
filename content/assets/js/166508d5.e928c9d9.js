"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3619],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>k});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},m=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return n?t.createElement(k,i(i({ref:a},m),{},{components:n})):t.createElement(k,i({ref:a},m))}));function k(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,a,n)=>{n.d(a,{Z:()=>i});var t=n(67294),r=n(86010);const s="tabItem_Ymn6";function i(e){let{children:a,hidden:n,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,i),hidden:n},a)}},65488:(e,a,n)=>{n.d(a,{Z:()=>d});var t=n(87462),r=n(67294),s=n(86010),i=n(72389),o=n(67392),l=n(7094),p=n(12466);const m="tabList__CuJ",c="tabItem_LNqP";function u(e){const{lazy:a,block:n,defaultValue:i,values:u,groupId:d,className:k}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??v.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),f=(0,o.l)(h,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,l.U)(),[y,T]=(0,r.useState)(b),P=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=d){const e=g[d];null!=e&&e!==y&&h.some((a=>a.value===e))&&T(e)}const E=e=>{const a=e.currentTarget,n=P.indexOf(a),t=h[n].value;t!==y&&(x(a),T(t),null!=d&&N(d,String(t)))},w=e=>{let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;a=P[n]??P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;a=P[n]??P[P.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},k)},h.map((e=>{let{value:a,label:n,attributes:i}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,key:a,ref:e=>P.push(e),onKeyDown:w,onClick:E},i,{className:(0,s.Z)("tabs__item",c,i?.className,{"tabs__item--active":y===a})}),n??a)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function d(e){const a=(0,i.Z)();return r.createElement(u,(0,t.Z)({key:String(a)},e))}},47479:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var t=n(87462),r=(n(67294),n(3905)),s=n(65488),i=n(85162);const o={id:"admin-api-permissions",title:"Managing permissions",sidebar_label:"Permissions",original_id:"admin-api-permissions"},l=void 0,p={unversionedId:"admin-api-permissions",id:"version-2.9.x/admin-api-permissions",title:"Managing permissions",description:"Important",source:"@site/versioned_docs/version-2.9.x/admin-api-permissions.md",sourceDirName:".",slug:"/admin-api-permissions",permalink:"/docs/2.9.x/admin-api-permissions",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/admin-api-permissions.md",tags:[],version:"2.9.x",frontMatter:{id:"admin-api-permissions",title:"Managing permissions",sidebar_label:"Permissions",original_id:"admin-api-permissions"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Namespaces",permalink:"/docs/2.9.x/admin-api-namespaces"},next:{title:"Topics",permalink:"/docs/2.9.x/admin-api-topics"}},m={},c=[{value:"Grant permissions",id:"grant-permissions",level:2},{value:"Get permissions",id:"get-permissions",level:2},{value:"Revoke permissions",id:"revoke-permissions",level:2}],u={toc:c};function d(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")),(0,r.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,r.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,r.kt)("p",null,"Permissions in Pulsar are managed at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#namespace"},"namespace")," level\n(that is, within ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#tenant"},"tenants")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#cluster"},"clusters"),")."),(0,r.kt)("h2",{id:"grant-permissions"},"Grant permissions"),(0,r.kt)("p",null,"You can grant permissions to specific roles for lists of operations such as ",(0,r.kt)("inlineCode",{parentName:"p"},"produce")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"consume"),"."),(0,r.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#grant-permission"},(0,r.kt)("inlineCode",{parentName:"a"},"grant-permission"))," subcommand and specify a namespace, actions using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--actions")," flag, and a role using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--role")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n  --actions produce,consume \\\n  --role admin10\n\n")),(0,r.kt)("p",null,"Wildcard authorization can be performed when ",(0,r.kt)("inlineCode",{parentName:"p"},"authorizationAllowWildcardsMatching")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role 'my.role.*'\n\n")),(0,r.kt)("p",null,"Then, roles ",(0,r.kt)("inlineCode",{parentName:"p"},"my.role.1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my.role.2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my.role.foo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my.role.bar"),", etc. can produce and consume.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role '*.role.my'\n\n")),(0,r.kt)("p",null,"Then, roles ",(0,r.kt)("inlineCode",{parentName:"p"},"1.role.my"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2.role.my"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.role.my"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bar.role.my"),", etc. can produce and consume."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": A wildcard matching works at ",(0,r.kt)("strong",{parentName:"p"},"the beginning or end of the role name only"),"."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role 'my.*.role'\n\n")),(0,r.kt)("p",null,"In this case, only the role ",(0,r.kt)("inlineCode",{parentName:"p"},"my.*.role")," has permissions.",(0,r.kt)("br",{parentName:"p"}),"\n","Roles ",(0,r.kt)("inlineCode",{parentName:"p"},"my.1.role"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my.2.role"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my.foo.role"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my.bar.role"),", etc. ",(0,r.kt)("strong",{parentName:"p"},"cannot")," produce and consume.")),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.4&apiversion=v2#operation/grantPermissionOnNamespace"},"POST /admin/v2/namespaces/:tenant/:namespace/permissions/:role"))),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().grantPermissionOnNamespace(namespace, role, getAuthActions(actions));\n\n")))),(0,r.kt)("h2",{id:"get-permissions"},"Get permissions"),(0,r.kt)("p",null,"You can see which permissions have been granted to which roles in a namespace."),(0,r.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#permissions"},(0,r.kt)("inlineCode",{parentName:"a"},"permissions"))," subcommand and specify a namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces permissions test-tenant/ns1\n{\n  "admin10": [\n    "produce",\n    "consume"\n  ]\n}\n\n'))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.4&apiversion=v2#operation/getPermissions"},"GET /admin/v2/namespaces/:tenant/:namespace/permissions"))),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getPermissions(namespace);\n\n")))),(0,r.kt)("h2",{id:"revoke-permissions"},"Revoke permissions"),(0,r.kt)("p",null,"You can revoke permissions from specific roles, which means that those roles will no longer have access to the specified namespace."),(0,r.kt)(s.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#revoke-permission"},(0,r.kt)("inlineCode",{parentName:"a"},"revoke-permission"))," subcommand and specify a namespace and a role using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--role")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces revoke-permission test-tenant/ns1 \\\n  --role admin10\n\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.9.4&apiversion=v2#operation/revokePermissionsOnNamespace"},"DELETE /admin/v2/namespaces/:tenant/:namespace/permissions/:role"))),(0,r.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().revokePermissionsOnNamespace(namespace, role);\n\n")))))}d.isMDXComponent=!0}}]);