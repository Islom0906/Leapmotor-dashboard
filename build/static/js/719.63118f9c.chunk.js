"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[719],{68438:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(74569),o=n.n(a);o().defaults.baseURL="".concat("https://leapmotorca.uz/api"),o().interceptors.request.use((e=>{const t=(e=>{try{return localStorage.getItem(e)}catch(t){console.log("Error getting data")}})("lptoken"),n=null!==t?"Bearer ".concat(t):"";return e.headers.authorization=n,e}));const r=o(),l={async getData(e){const{data:t}=await r.get(e);return t},async getDataByID(e,t){const{data:n}=await r.get("".concat(e,"/").concat(t));return n},async postData(e,t){const{data:n}=await r.post(e,t);return n},async editData(e,t,n){const{data:a}=await r.put("".concat(e,"/").concat(n),t);return a},async deleteData(e,t){await r.delete("".concat(e,"/").concat(t))},async deleteImages(e,t){await r.delete(e,{data:t})}}},64719:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(72791),o=n(83099),r=n(87309),l=n(62898),c=n(92883),i=n(31752),s=n(82622),d=n(16030),u=n(77221),v=n(57689),f=n(80184);const p=e=>{let{data:t,deleteHandle:n}=e;const p=(0,d.I0)(),m=(0,v.s0)(),[h,g]=(0,a.useState)([]);(0,a.useEffect)((()=>{const e=null===t||void 0===t?void 0:t.reverse();g(e)}),[t]);const Z=[{title:"Title Ru",dataIndex:"titleRu",id:"titleRu",render:e=>(0,f.jsx)("p",{children:e})},{title:"Title Uz",dataIndex:"titleUz",id:"titleUz",render:e=>(0,f.jsx)("p",{children:e})},{title:"Action",id:"action",render:(e,t)=>(0,f.jsxs)(o.Z,{size:20,children:[(0,f.jsx)(r.Z,{onClick:()=>{return e=null===t||void 0===t?void 0:t.slug,localStorage.setItem("editDataId",e),p({type:u.Pb,payload:e}),void m("/news/add");var e},type:"primary",icon:(0,f.jsx)(i.Z,{}),children:"Edit"}),(0,f.jsx)(l.Z,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{n("/news",e)})(t._id),children:(0,f.jsx)(r.Z,{type:"danger",icon:(0,f.jsx)(s.Z,{}),children:"Delete"})})]})}];return(0,f.jsx)("div",{children:(0,f.jsx)(c.Z,{columns:Z,dataSource:h,rowKey:e=>e._id})})};var m=n(50419),h=n(66106),g=n(30914),Z=n(49389),y=n(37083),x=n(79286),C=n(68438),w=n(91933);const E=()=>{const e=(0,v.s0)(),t=(0,d.I0)(),{mutate:n,isSuccess:l,isLoading:c}=(0,w.useMutation)((e=>{let{url:t,id:n}=e;return C.Z.deleteData(t,n)})),{data:i,isLoading:s,refetch:E}=(0,w.useQuery)("news-get",(()=>C.Z.getData("/news")),{onError:e=>{m.ZP.error(e)}});console.log(i);const[j,b]=(0,a.useState)([]),[k,O]=(0,a.useState)(!1);(0,a.useEffect)((()=>{l&&E()}),[l]);return(0,f.jsx)("div",{className:"site-space-compact-wrapper",children:(0,f.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},children:[(0,f.jsxs)(h.Z,{gutter:20,children:[(0,f.jsx)(g.Z,{span:16,children:(0,f.jsx)(Z.default,{onChange:e=>(e=>{O(""!==e);const t=null===i||void 0===i?void 0:i.filter((t=>t.titleRu.toLowerCase().includes(e.toLowerCase())||t.titleUz.toLowerCase().includes(e.toLowerCase())));b(t)})(e.target.value)})}),(0,f.jsx)(g.Z,{span:8,children:(0,f.jsx)(r.Z,{type:"primary",icon:(0,f.jsx)(x.Z,{}),style:{width:"100%"},onClick:()=>{t({type:u.Pb,payload:""}),e("/news/add")},children:"Add"})})]}),(0,f.jsx)(y.Z,{size:"medium",spinning:s||c,children:(0,f.jsx)(p,{data:k?j:i,deleteHandle:(e,t)=>{n({url:e,id:t})}})})]})})}},82622:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(1413),o=n(72791);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};var l=n(54291),c=function(e,t){return o.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:r}))};c.displayName="DeleteOutlined";const i=o.forwardRef(c)},31752:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(1413),o=n(72791);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};var l=n(54291),c=function(e,t){return o.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:r}))};c.displayName="EditOutlined";const i=o.forwardRef(c)},79286:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(1413),o=n(72791);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var l=n(54291),c=function(e,t){return o.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:r}))};c.displayName="PlusOutlined";const i=o.forwardRef(c)},30914:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(89752).Z},62898:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(87462),o=n(29439),r=n(10187),l=n(81694),c=n.n(l),i=n(75179),s=n(11354),d=n(72791),u=n(71929),v=n(69228),f=n(61113),p=n(87309),m=n(2571),h=n(98368);function g(e){return!(!e||!e.then)}const Z=function(e){var t=d.useRef(!1),n=d.useRef(null),r=(0,h.Z)(!1),l=(0,o.Z)(r,2),c=l[0],i=l[1],s=e.close,u=function(){null===s||void 0===s||s.apply(void 0,arguments)};d.useEffect((function(){var t=null;return e.autoFocus&&(t=setTimeout((function(){var e;null===(e=n.current)||void 0===e||e.focus()}))),function(){t&&clearTimeout(t)}}),[]);var v=e.type,f=e.children,Z=e.prefixCls,y=e.buttonProps;return d.createElement(p.Z,(0,a.Z)({},(0,m.n)(v),{onClick:function(n){var a=e.actionFn;if(!t.current)if(t.current=!0,a){var o;if(e.emitEvent){if(o=a(n),e.quitOnNullishReturnValue&&!g(o))return t.current=!1,void u(n)}else if(a.length)o=a(s),t.current=!1;else if(!(o=a()))return void u();!function(e){g(e)&&(i(!0),e.then((function(){i(!1,!0),u.apply(void 0,arguments),t.current=!1}),(function(e){return i(!1,!0),t.current=!1,Promise.reject(e)})))}(o)}else u()},loading:c,prefixCls:Z},y,{ref:n}),f)};var y=n(93486),x=n(70454),C=n(57924),w=function(e){var t=e.prefixCls,n=e.okButtonProps,o=e.cancelButtonProps,r=e.title,l=e.cancelText,c=e.okText,i=e.okType,s=e.icon,v=e.showCancel,f=void 0===v||v,h=e.close,g=e.onConfirm,w=e.onCancel,E=d.useContext(u.E_).getPrefixCls;return d.createElement(y.Z,{componentName:"Popconfirm",defaultLocale:x.Z.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},s&&d.createElement("span",{className:"".concat(t,"-message-icon")},s),d.createElement("div",{className:"".concat(t,"-message-title")},(0,C.Z)(r))),d.createElement("div",{className:"".concat(t,"-buttons")},f&&d.createElement(p.Z,(0,a.Z)({onClick:w,size:"small"},o),null!==l&&void 0!==l?l:e.cancelText),d.createElement(Z,{buttonProps:(0,a.Z)((0,a.Z)({size:"small"},(0,m.n)(i)),n),actionFn:g,close:h,prefixCls:E("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==c&&void 0!==c?c:e.okText)))}))},E=void 0,j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};const b=d.forwardRef((function(e,t){var n=e.prefixCls,l=e.placement,p=void 0===l?"top":l,m=e.trigger,h=void 0===m?"click":m,g=e.okType,Z=void 0===g?"primary":g,y=e.icon,x=void 0===y?d.createElement(r.Z,null):y,C=e.children,b=e.overlayClassName,k=e.onOpenChange,O=e.onVisibleChange,z=j(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),P=d.useContext(u.E_).getPrefixCls,N=(0,i.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),D=(0,o.Z)(N,2),R=D[0],T=D[1],L=function(e,t){T(e,!0),null===O||void 0===O||O(e,t),null===k||void 0===k||k(e,t)},q=P("popover",n),I=P("popconfirm",n),S=c()(I,b);return d.createElement(v.Z,(0,a.Z)({},z,{trigger:h,prefixCls:q,placement:p,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||L(t)},open:R,ref:t,overlayClassName:S,_overlay:d.createElement(w,(0,a.Z)({okType:Z,icon:x},e,{prefixCls:q,close:function(e){L(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(E,t)},onCancel:function(t){var n;L(!1,t),null===(n=e.onCancel)||void 0===n||n.call(E,t)}}))}),(0,f.Tm)(C,{onKeyDown:function(e){var t,n;d.isValidElement(C)&&(null===(n=null===C||void 0===C?void 0:(t=C.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===s.Z.ESC&&R&&L(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=719.63118f9c.chunk.js.map