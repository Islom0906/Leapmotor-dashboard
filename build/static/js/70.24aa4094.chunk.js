"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[70],{68438:function(e,n,i){i.d(n,{Z:function(){return u}});var t=i(74165),o=i(15861),r=i(74569),a=i.n(r);a().defaults.baseURL="".concat("https://leapmotorca.uz/api"),a().interceptors.request.use((function(e){var n=function(e){try{return localStorage.getItem(e)}catch(n){console.log("Error getting data")}}("lptoken"),i=null!==n?"Bearer ".concat(n):"";return e.headers.authorization=i,e}));var l=a(),u={getData:function(e){return(0,o.Z)((0,t.Z)().mark((function n(){var i,o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.get(e);case 2:return i=n.sent,o=i.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})))()},getDataByID:function(e,n){return(0,o.Z)((0,t.Z)().mark((function i(){var o,r;return(0,t.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,l.get("".concat(e,"/").concat(n));case 2:return o=i.sent,r=o.data,i.abrupt("return",r);case 5:case"end":return i.stop()}}),i)})))()},postData:function(e,n){return(0,o.Z)((0,t.Z)().mark((function i(){var o,r;return(0,t.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,l.post(e,n);case 2:return o=i.sent,r=o.data,i.abrupt("return",r);case 5:case"end":return i.stop()}}),i)})))()},editData:function(e,n,i){return(0,o.Z)((0,t.Z)().mark((function o(){var r,a;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.put("".concat(e,"/").concat(i),n);case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),o)})))()},deleteData:function(e,n){return(0,o.Z)((0,t.Z)().mark((function i(){return(0,t.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,l.delete("".concat(e,"/").concat(n));case 2:case"end":return i.stop()}}),i)})))()},deleteImages:function(e,n){return(0,o.Z)((0,t.Z)().mark((function i(){return(0,t.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("delete image",n),i.next=3,l.delete(e,{data:n});case 3:case"end":return i.stop()}}),i)})))()}}},15070:function(e,n,i){i.r(n);var t=i(74165),o=i(15861),r=i(29439),a=i(72791),l=i(2409),u=i(50419),d=i(66106),s=i(30914),c=i(83734),v=i(49389),m=i(13344),p=i(93086),f=i(87309),g=i(91933),Z=i(68438),h=i(98986),x=i(57689),b=i(16030),j=i(77221),w=i(22645),F=i(80184),I={model:"",position:"",exterior:"",name:"",colorMediaId:"",mediaId:"",price:null};n.default=function(){var e=l.Z.useForm(),n=(0,r.Z)(e,1)[0],i=(0,x.s0)(),y=(0,b.v9)((function(e){return e.editData})).editId,S=(0,b.I0)(),D=(0,a.useState)([]),P=(0,r.Z)(D,2),E=P[0],L=P[1],O=(0,a.useState)([]),V=(0,r.Z)(O,2),k=V[0],M=V[1],C=(0,a.useState)({}),q=(0,r.Z)(C,2),_=q[0],R=q[1],U=(0,a.useState)({}),Q=(0,r.Z)(U,2),T=Q[0],z=Q[1],J=(0,a.useState)({}),B=(0,r.Z)(J,2),G=B[0],N=B[1],A=(0,a.useState)(!1),H=(0,r.Z)(A,2),W=H[0],K=H[1],X=(0,a.useState)(""),Y=(0,r.Z)(X,2),$=Y[0],ee=Y[1],ne=(0,a.useState)(""),ie=(0,r.Z)(ne,2),te=ie[0],oe=ie[1],re=(0,g.useQuery)("get-model",(function(){return Z.Z.getData("/product")}),{enabled:!1}),ae=re.data,le=re.refetch,ue=(0,g.useQuery)("get-position",(function(){return Z.Z.getData("/position?model=".concat($))}),{enabled:!1}),de=ue.data,se=ue.refetch,ce=(0,g.useQuery)("get-exterior",(function(){return Z.Z.getData("/exterior?model=".concat($,"&position=").concat(te))}),{enabled:!1}),ve=ce.data,me=ce.refetch,pe=(0,g.useMutation)((function(e){var n=e.url,i=e.formData;return Z.Z.postData(n,i)}),{onError:function(e){return u.ZP.error(e.message,"Rasmning JPG,JPEG,PNG formatlariga ruxsat etilgan")}}),fe=pe.mutate,ge=pe.data,Ze=pe.isLoading,he=pe.isSuccess,xe=(0,g.useMutation)((function(e){var n=e.url,i=e.data;return Z.Z.postData(n,i)}),{onSuccess:function(){u.ZP.success("Success")},onError:function(e){u.ZP.error(e.message)}}),be=xe.mutate,je=xe.data,we=xe.isLoading,Fe=xe.isSuccess,Ie=(0,g.useQuery)(["edit-postion",y],(function(){return Z.Z.getDataByID("/interior",y)}),{enabled:!1}),ye=Ie.isLoading,Se=Ie.data,De=Ie.refetch,Pe=Ie.isSuccess,Ee=(0,g.useMutation)((function(e){var n=e.url,i=e.data,t=e.id;return Z.Z.editData(n,i,t)}),{onSuccess:function(){u.ZP.success("Success")},onError:function(e){u.ZP.error(e)}}),Le=Ee.mutate,Oe=Ee.isLoading,Ve=Ee.data,ke=Ee.isSuccess,Me=(0,g.useMutation)((function(e){var n=e.url,i=e.ids;return Z.Z.deleteImages(n,i)}),{onSuccess:function(){return u.ZP.success("Success")},onError:function(e){return u.ZP.error(e.message)}}).mutate;(0,a.useEffect)((function(){$&&se();var e=n.getFieldsValue();(null===Se||void 0===Se?void 0:Se.model)!==(null===e||void 0===e?void 0:e.model)&&(n.setFieldsValue({position:""}),n.setFieldsValue({exterior:""}))}),[$]),(0,a.useEffect)((function(){te&&me();var e=n.getFieldsValue();(null===Se||void 0===Se?void 0:Se.position)!==(null===e||void 0===e?void 0:e.position)&&n.setFieldsValue({exterior:""}),console.log("rener")}),[te]),(0,a.useEffect)((function(){var e=[];(ke&&S({type:j.Pb,payload:""}),Pe&&null!==_&&void 0!==_&&_.uid&&e.push(null===_||void 0===_?void 0:_.uid),Pe&&null!==T&&void 0!==T&&T.uid&&e.push(null===T||void 0===T?void 0:T.uid),Pe&&(null!==_&&void 0!==_&&_.uid||null!==T&&void 0!==T&&T.uid))&&Me({url:"/medias",ids:{ids:e}});(Fe||ke)&&i("/interior")}),[je,Ve]),(0,a.useEffect)((function(){""!==y&&De()}),[y]),(0,a.useEffect)((function(){""===y&&n.setFieldsValue(I),L([]),le()}),[]),(0,a.useEffect)((function(){var e,i,t,o,r,a,l=[{uid:null===Se||void 0===Se||null===(e=Se.image)||void 0===e?void 0:e._id,name:null===Se||void 0===Se||null===(i=Se.image)||void 0===i?void 0:i.name,status:"done",url:"".concat("https://leapmotorca.uz/api","/").concat(null===Se||void 0===Se||null===(t=Se.image)||void 0===t?void 0:t.path)}],u=[{uid:null===Se||void 0===Se||null===(o=Se.colorImage)||void 0===o?void 0:o._id,name:null===Se||void 0===Se||null===(r=Se.colorImage)||void 0===r?void 0:r.name,status:"done",url:"".concat("https://leapmotorca.uz/api","/").concat(null===Se||void 0===Se||null===(a=Se.colorImage)||void 0===a?void 0:a.path)}];if(Pe){var d={model:Se.model,position:Se.position,exterior:Se.exterior,name:Se.name,price:0===Se.price?null:Se.price,colorMediaId:u,mediaId:l};ee(Se.model),oe(Se.position),L(l),M(u),n.setFieldsValue(d)}}),[Se]),(0,a.useEffect)((function(){var e,n,i,t,o,r,a,l,u,d="",s="";if(Pe&&he&&null!==(e=E[0])&&void 0!==e&&null!==(n=e.originFileObj)&&void 0!==n&&n.uid)d=null===(o=ge[0])||void 0===o?void 0:o._id;else if(Pe){var c;d=null===(c=E[0])||void 0===c?void 0:c.uid}if(Pe&&he&&null!==(i=k[0])&&void 0!==i&&null!==(t=i.originFileObj)&&void 0!==t&&t.uid)s=2===ge.length?null===(r=ge[1])||void 0===r?void 0:r._id:null===(a=ge[0])||void 0===a?void 0:a._id;else if(Pe){var v;s=null===(v=k[0])||void 0===v?void 0:v.uid}!Pe&&ge&&(d=null===(l=ge[0])||void 0===l?void 0:l._id,s=null===(u=ge[1])||void 0===u?void 0:u._id);var m={model:G.model,position:G.position,exterior:G.exterior,name:G.name,price:null===G.price||""===G.price?0:G.price,colorMediaId:s,mediaId:d};console.log("render"),he&&!Pe?be({url:"/interior",data:m}):(W||he)&&Le({url:"/interior",data:m,id:y})}),[ge,G]);(0,a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("myFormValues"));e&&(e.images=[],n.setFieldsValue(e));var i=function(){localStorage.setItem("myFormValues",JSON.stringify(n.getFieldsValue()))};return window.addEventListener("beforeunload",i),function(){localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",i)}}),[]);var Ce=(0,a.useMemo)((function(){return null===ae||void 0===ae?void 0:ae.map((function(e){return{value:null===e||void 0===e?void 0:e.model,label:null===e||void 0===e?void 0:e.model}}))}),[ae]),qe=(0,a.useMemo)((function(){return null===de||void 0===de?void 0:de.map((function(e){return{value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name}}))}),[de]),_e=(0,a.useMemo)((function(){return null===ve||void 0===ve?void 0:ve.map((function(e){return{value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name}}))}),[ve]),Re=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var i,o,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.url){e.next=5;break}return e.next=4,new Promise((function(e){var i=new FileReader;i.readAsDataURL(n.originFileObj),i.onload=function(){return e(i.result)}}));case 4:i=e.sent;case 5:(o=new Image).src=i,null===(r=window.open(i))||void 0===r||r.document.write(o.outerHTML);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,F.jsx)("div",{children:we||ye||Oe||Ze?(0,F.jsx)(h.QP,{}):(0,F.jsxs)(l.Z,{form:n,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:I,onFinish:function(e){var n,i,t,o,r,a,l,u,d,s,c,v,m=new FormData,p=!1;if(Pe)if(null!==(n=E[0])&&void 0!==n&&null!==(i=n.originFileObj)&&void 0!==i&&i.uid&&null!==(t=k[0])&&void 0!==t&&null!==(o=t.originFileObj)&&void 0!==o&&o.uid)p=!0,m.append("media",null===(d=E[0])||void 0===d?void 0:d.originFileObj),m.append("media",null===(s=k[0])||void 0===s?void 0:s.originFileObj),K(!1);else if(null!==(r=E[0])&&void 0!==r&&null!==(a=r.originFileObj)&&void 0!==a&&a.uid){var f;p=!0,m.append("media",null===(f=E[0])||void 0===f?void 0:f.originFileObj),K(!1)}else if(null!==(l=k[0])&&void 0!==l&&null!==(u=l.originFileObj)&&void 0!==u&&u.uid){var g;p=!0,m.append("media",null===(g=k[0])||void 0===g?void 0:g.originFileObj),K(!1)}else p=!1,K(!0);else p=!0,m.append("media",null===(c=E[0])||void 0===c?void 0:c.originFileObj),m.append("media",null===(v=k[0])||void 0===v?void 0:v.originFileObj);p&&!he&&fe({url:"/medias",formData:m}),N(e)},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,F.jsxs)(d.Z,{gutter:20,children:[(0,F.jsx)(s.Z,{span:12,children:(0,F.jsx)(l.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u043e\u0434\u0435\u043b\u044c",name:"model",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043c\u043e\u0434\u0435\u043b\u044c"}],children:(0,F.jsx)(c.Z,{style:{width:"100%"},onChange:function(e){ee(e)},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u043c\u043e\u0434\u0435\u043b\u044c",optionLabelProp:"label",options:Ce})})}),(0,F.jsx)(s.Z,{span:12,children:(0,F.jsx)(l.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u044f",name:"position",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0437\u0438\u0446\u0438\u044f"}],children:(0,F.jsx)(c.Z,{style:{width:"100%"},onChange:function(e){oe(e)},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u043f\u043e\u0437\u0438\u0446\u0438\u044f",optionLabelProp:"label",options:qe})})})]}),(0,F.jsxs)(d.Z,{gutter:20,children:[(0,F.jsx)(s.Z,{span:12,children:(0,F.jsx)(l.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u042d\u043a\u0441\u0442\u0435\u0440\u044c\u0435\u0440",name:"exterior",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u044d\u043a\u0441\u0442\u0435\u0440\u044c\u0435\u0440"}],children:(0,F.jsx)(c.Z,{style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u044d\u043a\u0441\u0442\u0435\u0440\u044c\u0435\u0440",optionLabelProp:"label",options:_e})})}),(0,F.jsx)(s.Z,{span:12,children:(0,F.jsx)(l.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0418\u043d\u0442\u0435\u0440\u044c\u0435\u0440",name:"name",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043d\u0442\u0435\u0440\u044c\u0435\u0440"}],children:(0,F.jsx)(v.Z,{})})}),(0,F.jsx)(s.Z,{span:24,children:(0,F.jsx)(l.Z.Item,{label:"\u0426\u0435\u043d\u0430, (\u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f)",name:"price",children:(0,F.jsx)(m.Z,{style:{width:"100%"}})})})]}),(0,F.jsxs)(d.Z,{gutter:20,children:[(0,F.jsx)(s.Z,{span:12,children:(0,F.jsx)(l.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0430\u043d\u043d\u0435\u0440",name:"mediaId",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0431\u0430\u043d\u043d\u0435\u0440"}],children:(0,F.jsx)(w.Z,{children:(0,F.jsx)(p.Z,{maxCount:1,fileList:E,listType:"picture-card",onChange:function(e){var i=e.fileList;L(i),n.setFieldsValue({mediaId:i})},onPreview:Re,beforeUpload:function(){return!1},onRemove:function(e){Pe&&R(e)},children:E.length>0?"":"Upload"})})})}),(0,F.jsx)(s.Z,{span:12,children:(0,F.jsx)(l.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0446\u0432\u0435\u0442",name:"colorMediaId",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442"}],children:(0,F.jsx)(w.Z,{children:(0,F.jsx)(p.Z,{maxCount:1,fileList:k,listType:"picture-card",onChange:function(e){var i=e.fileList;M(i),n.setFieldsValue({colorMediaId:i})},onPreview:Re,beforeUpload:function(){return!1},onRemove:function(e){Pe&&z(e)},children:k.length>0?"":"Upload"})})})})]}),(0,F.jsx)(f.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:Pe?"Edit":"Add"})]})})}}}]);
//# sourceMappingURL=70.24aa4094.chunk.js.map