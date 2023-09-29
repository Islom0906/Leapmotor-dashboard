"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[831],{68438:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(74165),c=t(15861),o=t(74569),a=t.n(o);a().defaults.baseURL="".concat("https://leapmotorca.uz/api"),a().interceptors.request.use((function(e){var n=function(e){try{return localStorage.getItem(e)}catch(n){console.log("Error getting data")}}("lptoken"),t=null!==n?"Bearer ".concat(n):"";return e.headers.authorization=t,e}));var i=a(),u={getData:function(e){return(0,c.Z)((0,r.Z)().mark((function n(){var t,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get(e);case 2:return t=n.sent,c=t.data,n.abrupt("return",c);case 5:case"end":return n.stop()}}),n)})))()},getDataByID:function(e,n){return(0,c.Z)((0,r.Z)().mark((function t(){var c,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat(e,"/").concat(n));case 2:return c=t.sent,o=c.data,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})))()},postData:function(e,n){return(0,c.Z)((0,r.Z)().mark((function t(){var c,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.post(e,n);case 2:return c=t.sent,o=c.data,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})))()},editData:function(e,n,t){return(0,c.Z)((0,r.Z)().mark((function c(){var o,a;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.put("".concat(e,"/").concat(t),n);case 2:return o=r.sent,a=o.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),c)})))()},deleteData:function(e,n){return(0,c.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.delete("".concat(e,"/").concat(n));case 2:case"end":return t.stop()}}),t)})))()},deleteImages:function(e,n){return(0,c.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("delete image",n),t.next=3,i.delete(e,{data:n});case 3:case"end":return t.stop()}}),t)})))()}}},56831:function(e,n,t){t.r(n);var r=t(29439),c=t(83099),o=t(47528),a=t(50419),i=t(37083),u=t(7799),l=t(68438),s=t(91933),d=t(72791),f=t(80184),p=[{title:"Model",dataIndex:"model",key:"model",render:function(e){return(0,f.jsx)("p",{children:e})}},{title:"Position",dataIndex:"position",key:"position",render:function(e){return(0,f.jsx)("p",{children:e})}},{title:"Exterior",dataIndex:"exterior",key:"exterior",render:function(e){return(0,f.jsx)("p",{children:e})}},{title:"Interior",dataIndex:"interior",key:"interior",render:function(e){return(0,f.jsx)("p",{children:e})}},{title:"Option",dataIndex:"option",key:"option",render:function(e){return e.map((function(e,n){return(0,f.jsx)(c.Z,{direction:"vertical",style:{display:"flex"},children:(0,f.jsx)(o.Z,{children:e})},n)}))}},{title:"Price",dataIndex:"price",key:"price",render:function(e){return(0,f.jsx)("p",{children:e})}}];n.default=function(){var e=(0,s.useQuery)("order-get",(function(){return l.Z.getData("/order")}),{onError:function(e){a.ZP.error(e)}}),n=e.data,t=e.isLoading,c=(0,d.useState)([]),o=(0,r.Z)(c,2),v=o[0],x=o[1];return(0,d.useEffect)((function(){var e=null===n||void 0===n?void 0:n.reverse();x(e)}),[n]),(0,f.jsx)("div",{children:(0,f.jsx)(i.Z,{size:"medium",spinning:t,children:(0,f.jsx)(u.Z,{columns:p,dataSource:v,rowKey:function(e){return null===e||void 0===e?void 0:e._id}})})})}},47528:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(4942),c=t(87462),o=t(29439),a=t(60732),i=t(81694),u=t.n(i),l=t(41818),s=t(72791),d=t(71929),f=t(54466),p=t(12833),v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)n.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(t[r[c]]=e[r[c]])}return t},x=function(e){var n,t=e.prefixCls,o=e.className,a=e.checked,i=e.onChange,l=e.onClick,f=v(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,s.useContext(d.E_).getPrefixCls)("tag",t),x=u()(p,(n={},(0,r.Z)(n,"".concat(p,"-checkable"),!0),(0,r.Z)(n,"".concat(p,"-checkable-checked"),a),n),o);return s.createElement("span",(0,c.Z)({},f,{className:x,onClick:function(e){null===i||void 0===i||i(!a),null===l||void 0===l||l(e)}}))},m=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)n.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(t[r[c]]=e[r[c]])}return t},Z=new RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),h=new RegExp("^(".concat(f.E.join("|"),")$")),g=function(e,n){var t,i=e.prefixCls,f=e.className,v=e.style,x=e.children,g=e.icon,y=e.color,b=e.onClose,k=e.closeIcon,w=e.closable,C=void 0!==w&&w,j=m(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=s.useContext(d.E_),O=E.getPrefixCls,I=E.direction,P=s.useState(!0),N=(0,o.Z)(P,2),S=N[0],D=N[1];s.useEffect((function(){"visible"in j&&D(j.visible)}),[j.visible]);var R=function(){return!!y&&(Z.test(y)||h.test(y))},z=(0,c.Z)({backgroundColor:y&&!R()?y:void 0},v),_=R(),B=O("tag",i),L=u()(B,(t={},(0,r.Z)(t,"".concat(B,"-").concat(y),_),(0,r.Z)(t,"".concat(B,"-has-color"),y&&!_),(0,r.Z)(t,"".concat(B,"-hidden"),!S),(0,r.Z)(t,"".concat(B,"-rtl"),"rtl"===I),t),f),$=function(e){e.stopPropagation(),null===b||void 0===b||b(e),e.defaultPrevented||"visible"in j||D(!1)},q="onClick"in j||x&&"a"===x.type,F=(0,l.Z)(j,["visible"]),K=g||null,M=K?s.createElement(s.Fragment,null,K,s.createElement("span",null,x)):x,Q=s.createElement("span",(0,c.Z)({},F,{ref:n,className:L,style:z}),M,C?k?s.createElement("span",{className:"".concat(B,"-close-icon"),onClick:$},k):s.createElement(a.Z,{className:"".concat(B,"-close-icon"),onClick:$}):null);return q?s.createElement(p.Z,null,Q):Q},y=s.forwardRef(g);y.CheckableTag=x;var b=y}}]);
//# sourceMappingURL=831.ffb8c823.chunk.js.map