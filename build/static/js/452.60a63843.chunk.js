"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[452],{68438:(e,i,l)=>{l.d(i,{Z:()=>d});var a=l(74569),o=l.n(a);o().defaults.baseURL="".concat("https://andijon.leapmotorca.uz/api"),o().interceptors.request.use((e=>{const i=(e=>{try{return localStorage.getItem(e)}catch(i){console.log("Error getting data")}})("lptoken"),l=null!==i?"Bearer ".concat(i):"";return e.headers.authorization=l,e}));const t=o(),d={async getData(e){const{data:i}=await t.get(e);return i},async getDataByID(e,i){const{data:l}=await t.get("".concat(e,"/").concat(i));return l},async postData(e,i){const{data:l}=await t.post(e,i);return l},async editData(e,i,l){const{data:a}=await t.put("".concat(e,"/").concat(l),i);return a},async deleteData(e,i){await t.delete("".concat(e,"/").concat(i))},async deleteImages(e,i){await t.delete(e,{data:i})}}},72452:(e,i,l)=>{l.r(i),l.d(i,{default:()=>x});var a=l(72791),o=l(2409),t=l(50419),d=l(66106),n=l(30914),s=l(83734),r=l(49389),u=l(13344),c=l(93086),m=l(87309),v=l(91933),p=l(68438),g=l(98986),h=l(57689),f=l(16030),j=l(77221),b=l(80184);const Z={model:"",position:"",name:"",colorMediaId:"",mediaId:"",price:null,commentPrice:""},x=()=>{const[e]=o.Z.useForm(),i=(0,h.s0)(),{editId:l}=(0,f.v9)((e=>e.editData)),x=(0,f.I0)(),[I,F]=(0,a.useState)([]),[y,w]=(0,a.useState)([]),[S,P]=(0,a.useState)({}),[D,E]=(0,a.useState)({}),[L,O]=(0,a.useState)({}),[M,V]=(0,a.useState)(!1),[C,_]=(0,a.useState)(""),{data:q,refetch:R}=(0,v.useQuery)("get-model",(()=>p.Z.getData("/product")),{enabled:!1}),{data:U,refetch:k}=(0,v.useQuery)("get-position",(()=>p.Z.getData("/position?model=".concat(C))),{enabled:!1}),{mutate:T,data:z,isLoading:J,isSuccess:Q}=(0,v.useMutation)((e=>{let{url:i,formData:l}=e;return p.Z.postData(i,l)}),{onError:e=>t.ZP.error(e.message,"Rasmning JPG,JPEG,PNG formatlariga ruxsat etilgan")}),{mutate:B,data:G,isLoading:N,isSuccess:A}=(0,v.useMutation)((e=>{let{url:i,data:l}=e;return p.Z.postData(i,l)}),{onSuccess:()=>{t.ZP.success("Success")},onError:e=>{t.ZP.error(e.message)}}),{isLoading:H,data:W,refetch:K,isSuccess:X}=(0,v.useQuery)(["edit-postion",l],(()=>p.Z.getDataByID("/exterior",l)),{enabled:!1}),{mutate:Y,isLoading:$,data:ee,isSuccess:ie}=(0,v.useMutation)((e=>{let{url:i,data:l,id:a}=e;return p.Z.editData(i,l,a)}),{onSuccess:()=>{t.ZP.success("Success")},onError:e=>{t.ZP.error(e.message)}}),{mutate:le}=(0,v.useMutation)((e=>{let{url:i,ids:l}=e;return p.Z.deleteImages(i,l)}),{onSuccess:()=>t.ZP.success("Success"),onError:e=>t.ZP.error(e.message)});(0,a.useEffect)((()=>{C&&k();const i=e.getFieldsValue();(null===W||void 0===W?void 0:W.model)!==(null===i||void 0===i?void 0:i.model)&&e.setFieldsValue({position:""})}),[C]),(0,a.useEffect)((()=>{let e=[];if(ie&&x({type:j.Pb,payload:""}),X&&null!==S&&void 0!==S&&S.uid&&e.push(null===S||void 0===S?void 0:S.uid),X&&null!==D&&void 0!==D&&D.uid&&e.push(null===D||void 0===D?void 0:D.uid),X&&(null!==S&&void 0!==S&&S.uid||null!==D&&void 0!==D&&D.uid)){le({url:"/medias",ids:{ids:e}})}(A||ie)&&i("/exterior")}),[G,ee]),(0,a.useEffect)((()=>{""!==l&&K()}),[l]),(0,a.useEffect)((()=>{""===l&&e.setFieldsValue(Z),F([]),R()}),[]),(0,a.useEffect)((()=>{var i,l,a,o,t,d;const n=[{uid:null===W||void 0===W||null===(i=W.image)||void 0===i?void 0:i._id,name:null===W||void 0===W||null===(l=W.image)||void 0===l?void 0:l.name,status:"done",url:"".concat("https://andijon.leapmotorca.uz/api","/").concat(null===W||void 0===W||null===(a=W.image)||void 0===a?void 0:a.path)}],s=[{uid:null===W||void 0===W||null===(o=W.colorImage)||void 0===o?void 0:o._id,name:null===W||void 0===W||null===(t=W.colorImage)||void 0===t?void 0:t.name,status:"done",url:"".concat("https://andijon.leapmotorca.uz/api","/").concat(null===W||void 0===W||null===(d=W.colorImage)||void 0===d?void 0:d.path)}];if(X){const i={model:W.model,position:W.position,name:W.name,price:0===W.price?null:W.price,commentPrice:W.commentPrice,colorMediaId:s,mediaId:n};_(W.model),F(n),w(s),e.setFieldsValue(i)}}),[W]),(0,a.useEffect)((()=>{var e,i,a,o;let t="",d="";var n,s,r,u,c;if(X&&Q&&null!==(e=I[0])&&void 0!==e&&null!==(i=e.originFileObj)&&void 0!==i&&i.uid)t=null===(n=z[0])||void 0===n?void 0:n._id;else if(X){var m;t=null===(m=I[0])||void 0===m?void 0:m.uid}if(X&&Q&&null!==(a=y[0])&&void 0!==a&&null!==(o=a.originFileObj)&&void 0!==o&&o.uid)d=2===z.length?null===(s=z[1])||void 0===s?void 0:s._id:null===(r=z[0])||void 0===r?void 0:r._id;else if(X){var v;d=null===(v=y[0])||void 0===v?void 0:v.uid}!X&&z&&(t=null===(u=z[0])||void 0===u?void 0:u._id,d=null===(c=z[1])||void 0===c?void 0:c._id);const p={model:L.model,position:L.position,name:L.name,price:null===L.price||""===L.price?0:L.price,commentPrice:L.commentPrice,colorMediaId:d,mediaId:t};Q&&!X?B({url:"/exterior",data:p}):(M||Q)&&Y({url:"/exterior",data:p,id:l})}),[z,L]);(0,a.useEffect)((()=>{const i=JSON.parse(localStorage.getItem("myFormValues"));i&&(i.images=[],e.setFieldsValue(i));const l=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",l),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",l)}}),[]);const ae=(0,a.useMemo)((()=>null===q||void 0===q?void 0:q.map((e=>({value:null===e||void 0===e?void 0:e.model,label:null===e||void 0===e?void 0:e.model})))),[q]),oe=(0,a.useMemo)((()=>null===U||void 0===U?void 0:U.map((e=>({value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name})))),[U]),te=async e=>{let i=e.url;i||(i=await new Promise((i=>{const l=new FileReader;l.readAsDataURL(e.originFileObj),l.onload=()=>i(l.result)})));const l=new Image;l.src=i;const a=window.open(i);null===a||void 0===a||a.document.write(l.outerHTML)};return(0,b.jsx)("div",{children:N||H||$||J?(0,b.jsx)(g.QP,{}):(0,b.jsxs)(o.Z,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:Z,onFinish:e=>{const i=new FormData;let l=!1;var a,o,t,d,n,s,r,u,c,m,v,p;if(X)if(null!==(a=I[0])&&void 0!==a&&null!==(o=a.originFileObj)&&void 0!==o&&o.uid&&null!==(t=y[0])&&void 0!==t&&null!==(d=t.originFileObj)&&void 0!==d&&d.uid)l=!0,i.append("media",null===(c=I[0])||void 0===c?void 0:c.originFileObj),i.append("media",null===(m=y[0])||void 0===m?void 0:m.originFileObj),V(!1);else if(null!==(n=I[0])&&void 0!==n&&null!==(s=n.originFileObj)&&void 0!==s&&s.uid){var g;l=!0,i.append("media",null===(g=I[0])||void 0===g?void 0:g.originFileObj),V(!1)}else if(null!==(r=y[0])&&void 0!==r&&null!==(u=r.originFileObj)&&void 0!==u&&u.uid){var h;l=!0,i.append("media",null===(h=y[0])||void 0===h?void 0:h.originFileObj),V(!1)}else l=!1,V(!0);else l=!0,i.append("media",null===(v=I[0])||void 0===v?void 0:v.originFileObj),i.append("media",null===(p=y[0])||void 0===p?void 0:p.originFileObj);l&&!Q&&T({url:"/medias",formData:i}),O(e)},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,b.jsxs)(d.Z,{gutter:20,children:[(0,b.jsx)(n.Z,{span:12,children:(0,b.jsx)(o.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u043e\u0434\u0435\u043b\u044c",name:"model",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043c\u043e\u0434\u0435\u043b\u044c"}],children:(0,b.jsx)(s.default,{style:{width:"100%"},onChange:e=>{_(e)},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u043c\u043e\u0434\u0435\u043b\u044c",optionLabelProp:"label",options:ae})})}),(0,b.jsx)(n.Z,{span:12,children:(0,b.jsx)(o.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u044f",name:"position",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0437\u0438\u0446\u0438\u044f"}],children:(0,b.jsx)(s.default,{style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u043f\u043e\u0437\u0438\u0446\u0438\u044f",optionLabelProp:"label",options:oe})})})]}),(0,b.jsxs)(d.Z,{gutter:20,children:[(0,b.jsx)(n.Z,{span:24,children:(0,b.jsx)(o.Z.Item,{label:"\u042d\u043a\u0441\u0442\u0435\u0440\u044c\u0435\u0440",name:"name",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u042d\u043a\u0441\u0442\u0435\u0440\u044c\u0435\u0440"}],children:(0,b.jsx)(r.default,{})})}),(0,b.jsx)(n.Z,{span:12,children:(0,b.jsx)(o.Z.Item,{label:"\u0426\u0435\u043d\u0430, (\u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f)",name:"price",children:(0,b.jsx)(u.Z,{style:{width:"100%"}})})}),(0,b.jsx)(n.Z,{span:12,children:(0,b.jsx)(o.Z.Item,{label:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0426\u0435\u043d\u0430, (\u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f)",name:"commentPrice",children:(0,b.jsx)(r.default,{})})})]}),(0,b.jsxs)(d.Z,{gutter:20,children:[(0,b.jsx)(n.Z,{span:12,children:(0,b.jsx)(o.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0430\u043d\u043d\u0435\u0440",name:"mediaId",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0431\u0430\u043d\u043d\u0435\u0440"}],children:(0,b.jsx)(c.Z,{maxCount:1,fileList:I,listType:"picture-card",onChange:i=>{let{fileList:l}=i;F(l),e.setFieldsValue({mediaId:l})},onPreview:te,beforeUpload:()=>!1,onRemove:e=>{X&&P(e)},children:I.length>0?"":"Upload"})})}),(0,b.jsx)(n.Z,{span:12,children:(0,b.jsx)(o.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0446\u0432\u0435\u0442",name:"colorMediaId",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442"}],children:(0,b.jsx)(c.Z,{maxCount:1,listType:"picture-card",fileList:y,onChange:i=>{let{fileList:l}=i;w(l),e.setFieldsValue({colorMediaId:l})},onPreview:te,beforeUpload:()=>!1,onRemove:e=>{X&&E(e)},children:y.length>0?"":"Upload"})})})]}),(0,b.jsx)(m.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:X?"Edit":"Add"})]})})}}}]);
//# sourceMappingURL=452.60a63843.chunk.js.map