"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[243],{68438:(i,e,l)=>{l.d(e,{Z:()=>n});var d=l(74569),o=l.n(d);o().defaults.baseURL="".concat("https://leapmotorca.uz/api"),o().interceptors.request.use((i=>{const e=(i=>{try{return localStorage.getItem(i)}catch(e){console.log("Error getting data")}})("lptoken"),l=null!==e?"Bearer ".concat(e):"";return i.headers.authorization=l,i}));const a=o(),n={async getData(i){const{data:e}=await a.get(i);return e},async getDataByID(i,e){const{data:l}=await a.get("".concat(i,"/").concat(e));return l},async postData(i,e){const{data:l}=await a.post(i,e);return l},async editData(i,e,l){const{data:d}=await a.put("".concat(i,"/").concat(l),e);return d},async deleteData(i,e){await a.delete("".concat(i,"/").concat(e))},async deleteImages(i,e){await a.delete(i,{data:e})}}},32243:(i,e,l)=>{l.r(e),l.d(e,{default:()=>F});var d=l(72791),o=l(2409),a=l(50419),n=l(66106),t=l(30914),u=l(93086),r=l(87309),s=l(91933),v=l(68438),c=l(98986),m=l(57689),g=l(16030),p=l(77221),b=l(80184);const f={mediaLogoId:"",mediaBrandId:"",mediaVideoId:""},F=()=>{const[i]=o.Z.useForm(),e=(0,m.s0)(),{editId:l}=(0,g.v9)((i=>i.editData)),F=(0,g.I0)(),[j,h]=(0,d.useState)([]),[O,I]=(0,d.useState)([]),[Z,w]=(0,d.useState)([]),[y,L]=(0,d.useState)({}),[S,x]=(0,d.useState)(!1),[E,P]=(0,d.useState)({}),[D,V]=(0,d.useState)({}),[_,B]=(0,d.useState)({}),{mutate:C,data:U,isLoading:R,isSuccess:k,error:z,isError:M}=(0,s.useMutation)((i=>{let{url:e,data:l}=i;return v.Z.postData(e,l)}),{onSuccess:()=>a.ZP.success("Success"),onError:i=>a.ZP.error(i.message)}),{mutate:T,data:q,isLoading:J,isSuccess:G}=(0,s.useMutation)((i=>{let{url:e,formData:l}=i;return v.Z.postData(e,l)}),{onError:i=>a.ZP.error(i.message,"Rasmning JPG,JPEG,PNG formatlariga ruxsat etilgan")}),{isLoading:N,data:A,refetch:Q,isSuccess:H}=(0,s.useQuery)(["edit-banner",l],(()=>v.Z.getData("/banner")),{enabled:!1}),{mutate:W,isLoading:K,data:X,isSuccess:Y,error:$,isError:ii}=(0,s.useMutation)((i=>{let{url:e,data:l,id:d}=i;return v.Z.editData(e,l,d)}),{onError:i=>a.ZP.error(i.message)}),{mutate:ei}=(0,s.useMutation)((i=>{let{url:e,ids:l}=i;return v.Z.deleteImages(e,l)}),{onSuccess:()=>a.ZP.success("Success"),onError:i=>a.ZP.error(i.message)});(0,d.useEffect)((()=>{let i=[];if(Y&&F({type:p.Pb,payload:""}),H&&null!==E&&void 0!==E&&E.uid&&i.push(null===E||void 0===E?void 0:E.uid),H&&null!==D&&void 0!==D&&D.uid&&i.push(null===D||void 0===D?void 0:D.uid),H&&null!==_&&void 0!==_&&_.uid&&i.push(null===_||void 0===_?void 0:_.uid),H&&(null!==E&&void 0!==E&&E.uid||null!==D&&void 0!==D&&D.uid||null!==_&&void 0!==_&&_.uid)){ei({url:"/medias",ids:{ids:i}})}(k||Y)&&e("/banner")}),[U,X]),(0,d.useEffect)((()=>{M&&a.ZP.error(z.message),ii&&a.ZP.error($.message)}),[z,$]),(0,d.useEffect)((()=>{""!==l&&Q()}),[l]),(0,d.useEffect)((()=>{""===l&&i.setFieldsValue(f)}),[]),(0,d.useEffect)((()=>{var e,l,d,o,a,n,t,u,r;const s=[{uid:null===A||void 0===A||null===(e=A.imageLogo)||void 0===e?void 0:e._id,name:null===A||void 0===A||null===(l=A.imageLogo)||void 0===l?void 0:l.name,status:"done",url:"".concat("https://leapmotorca.uz/api","/").concat(null===A||void 0===A||null===(d=A.imageLogo)||void 0===d?void 0:d.path)}],v=[{uid:null===A||void 0===A||null===(o=A.imageBrand)||void 0===o?void 0:o._id,name:null===A||void 0===A||null===(a=A.imageBrand)||void 0===a?void 0:a.name,status:"done",url:"".concat("https://leapmotorca.uz/api","/").concat(null===A||void 0===A||null===(n=A.imageBrand)||void 0===n?void 0:n.path)}],c=[{uid:null===A||void 0===A||null===(t=A.videoBanner)||void 0===t?void 0:t._id,name:null===A||void 0===A||null===(u=A.videoBanner)||void 0===u?void 0:u.name,status:"done",url:"".concat("https://leapmotorca.uz/api","/").concat(null===A||void 0===A||null===(r=A.videoBanner)||void 0===r?void 0:r.path)}];if(H){const e={mediaLogoId:s,mediaBrandId:v,mediaVideoId:c};h(s),I(v),w(c),i.setFieldsValue(e)}}),[A]),(0,d.useEffect)((()=>{var i,e,d,o,a,n;let t="",u="",r="";var s,v,c,m,g,p,b,f,F,h,I,w,y,L,x;if(H&&G&&null!==(i=j[0])&&void 0!==i&&null!==(e=i.originFileObj)&&void 0!==e&&e.uid)t=null===(s=q[0])||void 0===s?void 0:s._id;else if(H){var E;t=null===(E=j[0])||void 0===E?void 0:E.uid}if(H&&G&&null!==(d=O[0])&&void 0!==d&&null!==(o=d.originFileObj)&&void 0!==o&&o.uid)u=null===(v=Z[0])||void 0===v||null===(c=v.originFileObj)||void 0===c||!c.uid||null!==(m=j[0])&&void 0!==m&&null!==(g=m.originFileObj)&&void 0!==g&&g.uid?3===q.length?null===(p=q[1])||void 0===p?void 0:p._id:2===q.length?null===(b=q[1])||void 0===b?void 0:b._id:null===(f=q[0])||void 0===f?void 0:f._id:null===(F=q[0])||void 0===F?void 0:F._id;else if(H){var P;u=null===(P=O[0])||void 0===P?void 0:P.uid}if(H&&G&&null!==(a=Z[0])&&void 0!==a&&null!==(n=a.originFileObj)&&void 0!==n&&n.uid)r=3===q.length?null===(h=q[2])||void 0===h?void 0:h._id:2===q.length?null===(I=q[1])||void 0===I?void 0:I._id:null===(w=q[0])||void 0===w?void 0:w._id;else if(H){var D;r=null===(D=Z[0])||void 0===D?void 0:D.uid}!H&&q&&(t=null===(y=q[0])||void 0===y?void 0:y._id,u=null===(L=q[1])||void 0===L?void 0:L._id,r=null===(x=q[2])||void 0===x?void 0:x._id);const V={mediaLogoId:t,mediaBrandId:u,mediaVideoId:r};G&&!H?C({url:"/banner",data:V}):(S||G)&&W({url:"/banner",data:V,id:l})}),[q,y]);(0,d.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("myFormValues"));e&&(e.images=[],i.setFieldsValue(e));const l=()=>{localStorage.setItem("myFormValues",JSON.stringify(i.getFieldsValue()))};return window.addEventListener("beforeunload",l),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",l)}}),[]);const li=async i=>{let e=i.url;e||(e=await new Promise((e=>{const l=new FileReader;l.readAsDataURL(i.originFileObj),l.onload=()=>e(l.result)})));const l=new Image;l.src=e;const d=window.open(e);null===d||void 0===d||d.document.write(l.outerHTML)};return(0,b.jsx)("div",{children:J||R||N||K?(0,b.jsx)(c.QP,{}):(0,b.jsxs)(o.Z,{form:i,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:f,onFinish:i=>{const e=new FormData;let l=!1;var d,o,a,n,t,u,r,s,v,c,m,g,p,b,f,F,h,I,w,y,S,E,P,D,V,_,B,C,U,R;if(H)if(null!==(d=j[0])&&void 0!==d&&null!==(o=d.originFileObj)&&void 0!==o&&o.uid&&null!==(a=O[0])&&void 0!==a&&null!==(n=a.originFileObj)&&void 0!==n&&n.uid&&null!==(t=Z[0])&&void 0!==t&&null!==(u=t.originFileObj)&&void 0!==u&&u.uid)l=!0,e.append("media",null===(V=j[0])||void 0===V?void 0:V.originFileObj),e.append("media",null===(_=O[0])||void 0===_?void 0:_.originFileObj),e.append("media",null===(B=Z[0])||void 0===B?void 0:B.originFileObj),x(!1);else if(null!==(r=j[0])&&void 0!==r&&null!==(s=r.originFileObj)&&void 0!==s&&s.uid&&null!==(v=O[0])&&void 0!==v&&null!==(c=v.originFileObj)&&void 0!==c&&c.uid){var k,z;l=!0,e.append("media",null===(k=j[0])||void 0===k?void 0:k.originFileObj),e.append("media",null===(z=O[0])||void 0===z?void 0:z.originFileObj),x(!1)}else if(null!==(m=j[0])&&void 0!==m&&null!==(g=m.originFileObj)&&void 0!==g&&g.uid&&null!==(p=Z[0])&&void 0!==p&&null!==(b=p.originFileObj)&&void 0!==b&&b.uid){var M,q;l=!0,e.append("media",null===(M=j[0])||void 0===M?void 0:M.originFileObj),e.append("media",null===(q=Z[0])||void 0===q?void 0:q.originFileObj),x(!1)}else if(null!==(f=O[0])&&void 0!==f&&null!==(F=f.originFileObj)&&void 0!==F&&F.uid&&null!==(h=Z[0])&&void 0!==h&&null!==(I=h.originFileObj)&&void 0!==I&&I.uid){var J,N;l=!0,e.append("media",null===(J=O[0])||void 0===J?void 0:J.originFileObj),e.append("media",null===(N=Z[0])||void 0===N?void 0:N.originFileObj),x(!1)}else if(null!==(w=j[0])&&void 0!==w&&null!==(y=w.originFileObj)&&void 0!==y&&y.uid){var A;l=!0,e.append("media",null===(A=j[0])||void 0===A?void 0:A.originFileObj),x(!1)}else if(null!==(S=O[0])&&void 0!==S&&null!==(E=S.originFileObj)&&void 0!==E&&E.uid){var Q;l=!0,e.append("media",null===(Q=O[0])||void 0===Q?void 0:Q.originFileObj),x(!1)}else if(null!==(P=Z[0])&&void 0!==P&&null!==(D=P.originFileObj)&&void 0!==D&&D.uid){var W;l=!0,e.append("media",null===(W=Z[0])||void 0===W?void 0:W.originFileObj),x(!1)}else l=!1,x(!0);else l=!0,e.append("media",null===(C=j[0])||void 0===C?void 0:C.originFileObj),e.append("media",null===(U=O[0])||void 0===U?void 0:U.originFileObj),e.append("media",null===(R=Z[0])||void 0===R?void 0:R.originFileObj);l&&!G&&T({url:"/medias",formData:e}),L(i)},onFinishFailed:i=>{console.log("Failed:",i)},autoComplete:"off",children:[(0,b.jsxs)(n.Z,{gutter:20,children:[(0,b.jsx)(t.Z,{span:12,children:(0,b.jsx)(o.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0442\u0438\u043f\u0430",name:"mediaLogoId",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043b\u043e\u0433\u043e\u0442\u0438\u043f\u0430"}],children:(0,b.jsx)(u.Z,{maxCount:1,fileList:j,listType:"picture-card",onChange:e=>{let{fileList:l}=e;h(l),i.setFieldsValue({mediaLogoId:l})},onPreview:li,beforeUpload:()=>!1,onRemove:i=>{H&&P(i)},children:j.length>0?"":"Upload"})})}),(0,b.jsx)(t.Z,{span:12,children:(0,b.jsx)(o.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0440\u0435\u043d\u0434\u0430",name:"mediaBrandId",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0431\u0440\u0435\u043d\u0434\u0430"}],children:(0,b.jsx)(u.Z,{maxCount:1,fileList:O,listType:"picture-card",onChange:e=>{let{fileList:l}=e;I(l),i.setFieldsValue({mediaBrandId:l})},onPreview:li,beforeUpload:()=>!1,onRemove:i=>{H&&V(i)},children:O.length>0?"":"Upload"})})})]}),(0,b.jsx)(n.Z,{gutter:20,children:(0,b.jsx)(t.Z,{span:24,children:(0,b.jsx)(o.Z.Item,{label:"\u0411\u0430\u043d\u043d\u0435\u0440\u043d\u043e\u0435 \u0432\u0438\u0434\u0435\u043e",name:"mediaVideoId",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u0438\u0434\u0435\u043e\u0431\u0430\u043d\u043d\u0435\u0440"}],children:(0,b.jsx)(u.Z,{maxCount:1,accept:"video/*",fileList:Z,listType:"picture-card",onChange:e=>{let{fileList:l}=e;w(l),i.setFieldsValue({mediaVideoId:l})},onPreview:li,beforeUpload:()=>!1,onRemove:i=>{H&&B(i)},children:Z.length>0?"":"Upload"})})})}),(0,b.jsx)(r.Z,{type:"primary",htmlType:"submit",style:{width:"100%"},children:H?"Edit":"Add"})]})})}}}]);
//# sourceMappingURL=243.9aad0af4.chunk.js.map