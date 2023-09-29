"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[191],{68438:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(74165),a=n(15861),c=n(74569),o=n.n(c);o().defaults.baseURL="".concat("https://leapmotorca.uz/api"),o().interceptors.request.use((function(t){var e=function(t){try{return localStorage.getItem(t)}catch(e){console.log("Error getting data")}}("lptoken"),n=null!==e?"Bearer ".concat(e):"";return t.headers.authorization=n,t}));var i=o(),u={getData:function(t){return(0,a.Z)((0,r.Z)().mark((function e(){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get(t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))()},getDataByID:function(t,e){return(0,a.Z)((0,r.Z)().mark((function n(){var a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("".concat(t,"/").concat(e));case 2:return a=n.sent,c=a.data,n.abrupt("return",c);case 5:case"end":return n.stop()}}),n)})))()},postData:function(t,e){return(0,a.Z)((0,r.Z)().mark((function n(){var a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.post(t,e);case 2:return a=n.sent,c=a.data,n.abrupt("return",c);case 5:case"end":return n.stop()}}),n)})))()},editData:function(t,e,n){return(0,a.Z)((0,r.Z)().mark((function a(){var c,o;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.put("".concat(t,"/").concat(n),e);case 2:return c=r.sent,o=c.data,r.abrupt("return",o);case 5:case"end":return r.stop()}}),a)})))()},deleteData:function(t,e){return(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.delete("".concat(t,"/").concat(e));case 2:case"end":return n.stop()}}),n)})))()},deleteImages:function(t,e){return(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("delete image",e),n.next=3,i.delete(t,{data:e});case 3:case"end":return n.stop()}}),n)})))()}}},13191:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r=n(29439),a=n(72791),c=n(50390),o=n(83099),i=n(87309),u=n(7799),s=n(31752),d=n(16030),l=n(77221),p=n(57689),f=n(80184),x=function(t){var e=t.data,n=(0,d.I0)(),x=(0,p.s0)(),Z=(0,a.useState)([]),v=(0,r.Z)(Z,2),h=v[0],m=v[1];(0,a.useEffect)((function(){var t=null===e||void 0===e?void 0:e.reverse();m(t)}),[e]);var g=[{title:"Text Ru",dataIndex:"mainSection",id:"mainSection",render:function(t){return(0,f.jsx)("p",{children:t.textRu})}},{title:"Text Uz",dataIndex:"mainSection",id:"mainSection",render:function(t){return(0,f.jsx)("p",{children:t.textUz})}},{title:"Image",dataIndex:"mainSection",id:"mainSection",render:function(t){var e;return console.log(t),(0,f.jsx)(c.Z,{width:50,src:"".concat("https://leapmotorca.uz/api","/").concat(null===t||void 0===t||null===(e=t.imageMain)||void 0===e?void 0:e.path)})}},{title:"Action",id:"action",render:function(t,e){return(0,f.jsx)(o.Z,{size:20,children:(0,f.jsx)(i.Z,{onClick:function(){return t=e._id,localStorage.setItem("editDataId",t),n({type:l.Pb,payload:t}),void x("/about/add");var t},type:"primary",icon:(0,f.jsx)(s.Z,{}),children:"Edit"})})}}];return(0,f.jsx)("div",{children:(0,f.jsx)(u.Z,{columns:g,dataSource:h,rowKey:function(t){return t._id}})})},Z=n(50419),v=n(66106),h=n(30914),m=n(49389),g=n(37083),w=n(79286),j=n(68438),b=n(91933),y=function(){var t=(0,p.s0)(),e=(0,d.I0)(),n=(0,b.useQuery)("about-get",(function(){return j.Z.getData("/about")}),{onError:function(t){Z.ZP.error(t.message)}}),c=n.data,u=n.isLoading,s=(0,a.useState)([]),y=(0,r.Z)(s,2),k=y[0],S=y[1],I=(0,a.useState)(!1),C=(0,r.Z)(I,2),z=C[0],D=C[1];return(0,f.jsx)("div",{className:"site-space-compact-wrapper",children:(0,f.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},children:[(0,f.jsxs)(v.Z,{gutter:20,children:[(0,f.jsx)(h.Z,{span:16,children:(0,f.jsx)(m.Z,{onChange:function(t){return function(t){D(""!==t);var e=null===c||void 0===c?void 0:c.filter((function(e){return e.textRu.toLowerCase().includes(t.toLowerCase())||e.textUz.toLowerCase().includes(t.toLowerCase())}));S(e)}(t.target.value)}})}),(0,f.jsx)(h.Z,{span:8,children:(0,f.jsx)(i.Z,{disabled:(null===c||void 0===c?void 0:c.length)>0,type:"primary",icon:(0,f.jsx)(w.Z,{}),style:{width:"100%"},onClick:function(){e({type:l.Pb,payload:""}),t("/about/add")},children:"Add"})})]}),(0,f.jsx)(g.Z,{size:"medium",spinning:u,children:(0,f.jsx)(x,{data:z?k:c})})]})})}}}]);
//# sourceMappingURL=191.c7f5abcb.chunk.js.map