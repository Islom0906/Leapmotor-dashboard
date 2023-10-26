"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[979],{68438:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(74165),o=t(15861),a=t(74569),i=t.n(a);i().defaults.baseURL="".concat("https://leapmotorca.uz/api"),i().interceptors.request.use((function(e){var n=function(e){try{return localStorage.getItem(e)}catch(n){console.log("Error getting data")}}("lptoken"),t=null!==n?"Bearer ".concat(n):"";return e.headers.authorization=t,e}));var c=i(),u={getData:function(e){return(0,o.Z)((0,r.Z)().mark((function n(){var t,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get(e);case 2:return t=n.sent,o=t.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})))()},getDataByID:function(e,n){return(0,o.Z)((0,r.Z)().mark((function t(){var o,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("".concat(e,"/").concat(n));case 2:return o=t.sent,a=o.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},postData:function(e,n){return(0,o.Z)((0,r.Z)().mark((function t(){var o,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post(e,n);case 2:return o=t.sent,a=o.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},editData:function(e,n,t){return(0,o.Z)((0,r.Z)().mark((function o(){var a,i;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.put("".concat(e,"/").concat(t),n);case 2:return a=r.sent,i=a.data,r.abrupt("return",i);case 5:case"end":return r.stop()}}),o)})))()},deleteData:function(e,n){return(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.delete("".concat(e,"/").concat(n));case 2:case"end":return t.stop()}}),t)})))()},deleteImages:function(e,n){return(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("delete image",n),t.next=3,c.delete(e,{data:n});case 3:case"end":return t.stop()}}),t)})))()}}},84979:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(29439),o=t(72791),a=t(74165),i=t(15861),c=t(50390),u=t(83099),l=t(87309),s=t(34571),d=t(7799),f=t(31752),p=t(82622),v=t(16030),m=t(77221),Z=t(57689),h=t(80184),x=function(e){var n=e.data,t=e.deleteHandle,x=(0,v.I0)(),g=(0,Z.s0)(),y=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t("/option",n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=(0,o.useState)([]),w=(0,r.Z)(C,2),j=w[0],E=w[1];(0,o.useEffect)((function(){var e=null===n||void 0===n?void 0:n.reverse();E(e)}),[n]);var k=[{title:"Model",dataIndex:"model",id:"model",render:function(e){return(0,h.jsx)("p",{children:e})}},{title:"Position",dataIndex:"position",id:"position",render:function(e){return(0,h.jsx)("p",{children:e})}},{title:"Exterior",dataIndex:"exterior",id:"exterior",render:function(e){return(0,h.jsx)("p",{children:e})}},{title:"Interior",dataIndex:"interior",id:"interior",render:function(e){return(0,h.jsx)("p",{children:e})}},{title:"Option",dataIndex:"name",id:"name",render:function(e){return(0,h.jsx)("p",{children:e})}},{title:"Image",dataIndex:"mainImage",id:"mainImage",render:function(e){return(0,h.jsx)(c.Z,{width:50,src:"".concat("https://leapmotorca.uz/api","/").concat(null===e||void 0===e?void 0:e.path)})}},{title:"Action",id:"action",render:function(e,n){return(0,h.jsxs)(u.Z,{size:20,children:[(0,h.jsx)(l.Z,{onClick:function(){return e=n._id,localStorage.setItem("editDataId",e),x({type:m.Pb,payload:e}),void g("/option/add");var e},type:"primary",icon:(0,h.jsx)(f.Z,{}),children:"Edit"}),(0,h.jsx)(s.Z,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:function(){return y(n._id)},children:(0,h.jsx)(l.Z,{type:"danger",icon:(0,h.jsx)(p.Z,{}),children:"Delete"})})]})}}];return(0,h.jsx)("div",{children:(0,h.jsx)(d.Z,{columns:k,dataSource:j,rowKey:function(e){return e._id}})})},g=t(50419),y=t(66106),C=t(30914),w=t(49389),j=t(37083),E=t(79286),k=t(68438),b=t(91933),I=function(){var e=(0,Z.s0)(),n=(0,v.I0)(),t=(0,b.useMutation)((function(e){var n=e.url,t=e.id;return k.Z.deleteData(n,t)}),{onSuccess:function(){return g.ZP.success("Success")},onError:function(e){return g.ZP.error(e.message)}}),a=t.mutate,i=t.isSuccess,c=t.isLoading,s=(0,b.useQuery)("option-get",(function(){return k.Z.getData("/option")}),{onError:function(e){g.ZP.error(e)}}),d=s.data,f=s.isLoading,p=s.refetch,I=(0,o.useState)([]),O=(0,r.Z)(I,2),P=O[0],D=O[1],N=(0,o.useState)(!1),S=(0,r.Z)(N,2),T=S[0],z=S[1];(0,o.useEffect)((function(){i&&p()}),[i]);return(0,h.jsx)("div",{className:"site-space-compact-wrapper",children:(0,h.jsxs)(u.Z,{direction:"vertical",style:{width:"100%"},children:[(0,h.jsxs)(y.Z,{gutter:20,children:[(0,h.jsx)(C.Z,{span:16,children:(0,h.jsx)(w.Z,{onChange:function(e){return function(e){z(""!==e);var n=null===d||void 0===d?void 0:d.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())||n.model.toLowerCase().includes(e.toLowerCase())}));D(n)}(e.target.value)}})}),(0,h.jsx)(C.Z,{span:8,children:(0,h.jsx)(l.Z,{type:"primary",icon:(0,h.jsx)(E.Z,{}),style:{width:"100%"},onClick:function(){n({type:m.Pb,payload:""}),e("/option/add")},children:"Add"})})]}),(0,h.jsx)(j.Z,{size:"medium",spinning:f||c,children:(0,h.jsx)(x,{data:T?P:d,deleteHandle:function(e,n){a({url:e,id:n})}})})]})})}},82622:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),o=t(72791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},i=t(54291),c=function(e,n){return o.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:a}))};c.displayName="DeleteOutlined";var u=o.forwardRef(c)},41783:function(e,n,t){var r=t(87462),o=t(29439),a=t(98368),i=t(72791),c=t(87309),u=t(2571);function l(e){return!(!e||!e.then)}n.Z=function(e){var n=i.useRef(!1),t=i.useRef(null),s=(0,a.Z)(!1),d=(0,o.Z)(s,2),f=d[0],p=d[1],v=e.close,m=function(){null===v||void 0===v||v.apply(void 0,arguments)};i.useEffect((function(){var n=null;return e.autoFocus&&(n=setTimeout((function(){var e;null===(e=t.current)||void 0===e||e.focus()}))),function(){n&&clearTimeout(n)}}),[]);var Z=e.type,h=e.children,x=e.prefixCls,g=e.buttonProps;return i.createElement(c.Z,(0,r.Z)({},(0,u.n)(Z),{onClick:function(t){var r=e.actionFn;if(!n.current)if(n.current=!0,r){var o;if(e.emitEvent){if(o=r(t),e.quitOnNullishReturnValue&&!l(o))return n.current=!1,void m(t)}else if(r.length)o=r(v),n.current=!1;else if(!(o=r()))return void m();!function(e){l(e)&&(p(!0),e.then((function(){p(!1,!0),m.apply(void 0,arguments),n.current=!1}),(function(e){console.error(e),p(!1,!0),n.current=!1})))}(o)}else m()},loading:f,prefixCls:x},g,{ref:t}),h)}},34571:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(87462),o=t(29439),a=t(10187),i=t(81694),c=t.n(i),u=t(75179),l=t(11354),s=t(72791),d=t(71929),f=t(69228),p=t(61113),v=t(87309),m=t(2571),Z=t(41783),h=t(93486),x=t(70454),g=t(57924),y=function(e){var n=e.prefixCls,t=e.okButtonProps,o=e.cancelButtonProps,a=e.title,i=e.cancelText,c=e.okText,u=e.okType,l=e.icon,f=e.showCancel,p=void 0===f||f,y=e.close,C=e.onConfirm,w=e.onCancel,j=s.useContext(d.E_).getPrefixCls;return s.createElement(h.Z,{componentName:"Popconfirm",defaultLocale:x.Z.Popconfirm},(function(e){return s.createElement("div",{className:"".concat(n,"-inner-content")},s.createElement("div",{className:"".concat(n,"-message")},l&&s.createElement("span",{className:"".concat(n,"-message-icon")},l),s.createElement("div",{className:"".concat(n,"-message-title")},(0,g.Z)(a))),s.createElement("div",{className:"".concat(n,"-buttons")},p&&s.createElement(v.Z,(0,r.Z)({onClick:w,size:"small"},o),null!==i&&void 0!==i?i:e.cancelText),s.createElement(Z.Z,{buttonProps:(0,r.Z)((0,r.Z)({size:"small"},(0,m.n)(u)),t),actionFn:C,close:y,prefixCls:j("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==c&&void 0!==c?c:e.okText)))}))},C=void 0,w=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},j=s.forwardRef((function(e,n){var t=s.useContext(d.E_).getPrefixCls,i=(0,u.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),v=(0,o.Z)(i,2),m=v[0],Z=v[1],h=function(n,t){var r,o;Z(n,!0),null===(r=e.onVisibleChange)||void 0===r||r.call(e,n,t),null===(o=e.onOpenChange)||void 0===o||o.call(e,n,t)},x=e.prefixCls,g=e.placement,j=void 0===g?"top":g,E=e.trigger,k=void 0===E?"click":E,b=e.okType,I=void 0===b?"primary":b,O=e.icon,P=void 0===O?s.createElement(a.Z,null):O,D=e.children,N=e.overlayClassName,S=w(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName"]),T=t("popover",x),z=t("popconfirm",x),L=c()(z,N);return s.createElement(f.Z,(0,r.Z)({},S,{trigger:k,prefixCls:T,placement:j,onOpenChange:function(n){var t=e.disabled;void 0!==t&&t||h(n)},open:m,ref:n,overlayClassName:L,_overlay:s.createElement(y,(0,r.Z)({okType:I,icon:P},e,{prefixCls:T,close:function(e){h(!1,e)},onConfirm:function(n){var t;return null===(t=e.onConfirm)||void 0===t?void 0:t.call(C,n)},onCancel:function(n){var t;h(!1,n),null===(t=e.onCancel)||void 0===t||t.call(C,n)}}))}),(0,p.Tm)(D,{onKeyDown:function(e){var n,t;s.isValidElement(D)&&(null===(t=null===D||void 0===D?void 0:(n=D.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===l.Z.ESC&&m&&h(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=979.97b659f1.chunk.js.map