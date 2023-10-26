"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[268],{68438:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(74165),a=t(15861),i=t(74569),o=t.n(i);o().defaults.baseURL="".concat("https://leapmotorca.uz/api"),o().interceptors.request.use((function(e){var n=function(e){try{return localStorage.getItem(e)}catch(n){console.log("Error getting data")}}("lptoken"),t=null!==n?"Bearer ".concat(n):"";return e.headers.authorization=t,e}));var u=o(),s={getData:function(e){return(0,a.Z)((0,r.Z)().mark((function n(){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get(e);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))()},getDataByID:function(e,n){return(0,a.Z)((0,r.Z)().mark((function t(){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("".concat(e,"/").concat(n));case 2:return a=t.sent,i=a.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))()},postData:function(e,n){return(0,a.Z)((0,r.Z)().mark((function t(){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.post(e,n);case 2:return a=t.sent,i=a.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))()},editData:function(e,n,t){return(0,a.Z)((0,r.Z)().mark((function a(){var i,o;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.put("".concat(e,"/").concat(t),n);case 2:return i=r.sent,o=i.data,r.abrupt("return",o);case 5:case"end":return r.stop()}}),a)})))()},deleteData:function(e,n){return(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.delete("".concat(e,"/").concat(n));case 2:case"end":return t.stop()}}),t)})))()},deleteImages:function(e,n){return(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("delete image",n),t.next=3,u.delete(e,{data:n});case 3:case"end":return t.stop()}}),t)})))()}}},94268:function(e,n,t){t.r(n);var r=t(74165),a=t(15861),i=t(29439),o=t(72791),u=t(2409),s=t(50419),c=t(66106),l=t(30914),d=t(83734),f=t(49389),m=t(13344),p=t(83099),v=t(87309),Z=t(93086),g=t(91933),h=t(68438),x=t(98986),b=t(57689),j=t(16030),w=t(77221),I=t(68747),y=t(22645),S=t(80184),F={model:null,name:"",info:"",price:null,includedList:[""],mediaId:""};n.default=function(){var e=u.Z.useForm(),n=(0,i.Z)(e,1)[0],t=(0,b.s0)(),D=(0,j.v9)((function(e){return e.editData})).editId,E=(0,j.I0)(),L=(0,o.useState)([]),k=(0,i.Z)(L,2),P=k[0],C=k[1],V=(0,o.useState)({}),M=(0,i.Z)(V,2),O=M[0],z=M[1],q=(0,o.useState)(!1),R=(0,i.Z)(q,2),B=R[0],J=R[1],N=(0,o.useState)({}),Q=(0,i.Z)(N,2),T=Q[0],U=Q[1],_=(0,o.useState)(""),A=(0,i.Z)(_,2),G=A[0],H=A[1],K=(0,g.useQuery)("get-model",(function(){return h.Z.getData("/product")}),{enabled:!1}),W=K.data,X=K.refetch,Y=(0,g.useMutation)((function(e){var n=e.url,t=e.formData;return h.Z.postData(n,t)}),{onError:function(e){return s.ZP.error(e.message,"Rasmning JPG,JPEG,PNG formatlariga ruxsat etilgan")}}),$=Y.mutate,ee=Y.data,ne=Y.isLoading,te=Y.isSuccess,re=(0,g.useMutation)((function(e){var n=e.url,t=e.data;return h.Z.postData(n,t)}),{onSuccess:function(){s.ZP.success("Success")},onError:function(e){s.ZP.error(e.message)}}),ae=re.mutate,ie=re.data,oe=re.isLoading,ue=re.isSuccess,se=(0,g.useQuery)(["edit-postion",D],(function(){return h.Z.getDataByID("/position",D)}),{enabled:!1}),ce=se.isLoading,le=se.data,de=se.refetch,fe=se.isSuccess,me=(0,g.useMutation)((function(e){var n=e.url,t=e.data,r=e.id;return h.Z.editData(n,t,r)}),{onSuccess:function(){s.ZP.success("Success")},onError:function(e){s.ZP.error(e)}}),pe=me.mutate,ve=me.isLoading,Ze=me.data,ge=me.isSuccess,he=(0,g.useMutation)((function(e){var n=e.url,t=e.ids;return h.Z.deleteImages(n,t)}),{onSuccess:function(){return s.ZP.success("Success")},onError:function(e){return s.ZP.error(e.message)}}).mutate,xe=(0,g.useQuery)("position-get-by-model",(function(){return h.Z.getData("/position?model=".concat(G))}),{enabled:!1,onError:function(e){s.ZP.error(e)}}),be=xe.data,je=xe.isSuccess,we=xe.refetch;(0,o.useEffect)((function(){if(je&&be.length>0){var e,t,r,a,i,o,u=[{uid:null===(e=be[0])||void 0===e||null===(t=e.image)||void 0===t?void 0:t._id,name:null===(r=be[0])||void 0===r||null===(a=r.image)||void 0===a?void 0:a.name,status:"done",url:"".concat("https://leapmotorca.uz/api","/").concat(null===(i=be[0])||void 0===i||null===(o=i.image)||void 0===o?void 0:o.path)}];C(u),n.setFieldsValue({mediaId:u})}else C([]),n.setFieldsValue({mediaId:[]})}),[be]),(0,o.useEffect)((function(){G&&we()}),[G]),(0,o.useEffect)((function(){var e=[];(ge&&E({type:w.Pb,payload:""}),fe&&null!==T&&void 0!==T&&T.uid&&e.push(null===T||void 0===T?void 0:T.uid),fe&&null!==T&&void 0!==T&&T.uid)&&he({url:"/medias",ids:{ids:e}});(ue||ge)&&t("/position")}),[ie,Ze]),(0,o.useEffect)((function(){""!==D&&de()}),[D]),(0,o.useEffect)((function(){""===D&&n.setFieldsValue(F),C([]),X()}),[]),(0,o.useEffect)((function(){var e,t,r,a=[{uid:null===le||void 0===le||null===(e=le.image)||void 0===e?void 0:e._id,name:null===le||void 0===le||null===(t=le.image)||void 0===t?void 0:t.name,status:"done",url:"".concat("https://leapmotorca.uz/api","/").concat(null===le||void 0===le||null===(r=le.image)||void 0===r?void 0:r.path)}];if(fe){var i={model:le.model,name:le.name,info:le.info,price:le.price,includedList:le.includedList,mediaId:a};C(a),n.setFieldsValue(i)}}),[le]),(0,o.useEffect)((function(){var e,n,t,r,a="";if(fe&&te&&null!==(e=P[0])&&void 0!==e&&null!==(n=e.originFileObj)&&void 0!==n&&n.uid)a=null===(t=ee[0])||void 0===t?void 0:t._id;else if(fe||G&&be.length>0){var i;a=null===(i=P[0])||void 0===i?void 0:i.uid}!fe&&ee&&(a=null===(r=ee[0])||void 0===r?void 0:r._id);var o={model:O.model,name:O.name,info:O.info,price:O.price,includedList:O.includedList,mediaId:a};te&&!fe?ae({url:"/position",data:o}):B||te?pe({url:"/position",data:o,id:D}):!te&&!fe&&G&&be.length>0&&ae({url:"/position",data:o})}),[ee,O]);(0,o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("myFormValues"));e&&(e.images=[],n.setFieldsValue(e));var t=function(){localStorage.setItem("myFormValues",JSON.stringify(n.getFieldsValue()))};return window.addEventListener("beforeunload",t),function(){localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",t)}}),[]);var Ie=(0,o.useMemo)((function(){return null===W||void 0===W?void 0:W.map((function(e){return{value:null===e||void 0===e?void 0:e.model,label:null===e||void 0===e?void 0:e.model}}))}),[W]),ye=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.url){e.next=5;break}return e.next=4,new Promise((function(e){var t=new FileReader;t.readAsDataURL(n.originFileObj),t.onload=function(){return e(t.result)}}));case 4:t=e.sent;case 5:(a=new Image).src=t,null===(i=window.open(t))||void 0===i||i.document.write(a.outerHTML);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,S.jsx)("div",{children:oe||ce||ve||ne?(0,S.jsx)(x.QP,{}):(0,S.jsxs)(u.Z,{form:n,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:F,onFinish:function(e){var n,t,r,a,i=new FormData,o=!1;fe?null!==(n=P[0])&&void 0!==n&&null!==(t=n.originFileObj)&&void 0!==t&&t.uid?(o=!0,i.append("media",null===(r=P[0])||void 0===r?void 0:r.originFileObj),J(!1)):(o=!1,J(!0)):G&&be.length>0?(o=!1,J(!1)):(o=!0,i.append("media",null===(a=P[0])||void 0===a?void 0:a.originFileObj));o&&!te&&$({url:"/medias",formData:i}),z(e)},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,S.jsxs)(c.Z,{gutter:20,children:[(0,S.jsx)(l.Z,{span:12,children:(0,S.jsx)(u.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u043e\u0434\u0435\u043b\u044c",name:"model",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043c\u043e\u0434\u0435\u043b\u044c"}],children:(0,S.jsx)(d.Z,{style:{width:"100%"},onChange:function(e){H(e)},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u043c\u043e\u0434\u0435\u043b\u044c",optionLabelProp:"label",options:Ie})})}),(0,S.jsx)(l.Z,{span:12,children:(0,S.jsx)(u.Z.Item,{label:"\u041f\u043e\u0437\u0438\u0446\u0438\u044f",name:"name",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u044e"}],children:(0,S.jsx)(f.Z,{})})})]}),(0,S.jsxs)(c.Z,{gutter:20,children:[(0,S.jsx)(l.Z,{span:12,children:(0,S.jsx)(u.Z.Item,{label:"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435, (\u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f)",name:"info",children:(0,S.jsx)(f.Z,{})})}),(0,S.jsx)(l.Z,{span:12,children:(0,S.jsx)(u.Z.Item,{label:"\u0426\u0435\u043d\u0430",name:"price",rules:[{required:!0,message:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0432\u0435\u0441\u0442\u0438 \u0446\u0435\u043d\u0443"}],children:(0,S.jsx)(m.Z,{style:{width:"100%"}})})})]}),(0,S.jsx)(u.Z.List,{name:"includedList",children:function(e,n){var t=n.add,r=n.remove;return(0,S.jsxs)(S.Fragment,{children:[e.map((function(e,n){return(0,S.jsx)("div",{style:{marginBottom:20},children:(0,S.jsxs)(p.Z,{align:"start",children:[(0,S.jsx)(u.Z.Item,{label:"\u041a\u0430\u043a\u043e\u0432\u044b \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u044d\u0442\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438? ".concat(n+1),name:[e.name],rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u0430"}],style:{width:"100%"},children:(0,S.jsx)(f.Z,{})}),(0,S.jsx)(I.Z,{onClick:function(){return r(e.name)}})]})},e.fieldKey)})),(0,S.jsx)(u.Z.Item,{children:(0,S.jsx)(v.Z,{type:"dashed",onClick:function(){return t()},block:!0,children:"Add Item"})})]})}}),(0,S.jsx)(u.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0442\u0438\u043f\u0430",name:"mediaId",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0431\u0430\u043d\u043d\u0435\u0440"}],children:(0,S.jsx)(y.Z,{children:(0,S.jsx)(Z.Z,{maxCount:1,fileList:P,listType:"picture-card",onChange:function(e){var t=e.fileList;C(t),n.setFieldsValue({mediaId:t})},onPreview:ye,beforeUpload:function(){return!1},onRemove:function(e){H(""),fe&&U(e)},children:P.length>0?"":"Upload"})})}),(0,S.jsx)(v.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:fe?"Edit":"Add"})]})})}},68747:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1413),a=t(72791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},o=t(54291),u=function(e,n){return a.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};u.displayName="MinusCircleOutlined";var s=a.forwardRef(u)}}]);
//# sourceMappingURL=268.96d4bcc3.chunk.js.map