/*! For license information please see 966.7e730f2e.chunk.js.LICENSE.txt */
(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[966],{86705:function(e,t,n){"use strict";n(72791);var r=n(2730),a=n(71118),o=(n(33374),n(32179)),i=n(32221),s=n(80184);t.Z=function(e){var t=e.children;return(0,s.jsxs)(a.Z,{type:"scale",animateStyle:{flex:1},delay:0,interval:10,duration:200,children:[(0,s.jsx)("div",{className:"auth-wrap",children:(0,s.jsxs)(r.Z,{className:"auth-card",children:[(0,s.jsxs)("div",{className:"auth-main-content",children:[(0,s.jsx)("div",{className:"auth-card-header",children:(0,s.jsx)(i.Z,{})}),t]}),(0,s.jsx)("div",{className:"auth-wel-action",children:(0,s.jsx)("div",{className:"auth-wel-content",children:(0,s.jsx)("h2",{children:"Welcome to Leapmotorca"})})})]})},"wrap"),(0,s.jsx)(o.vH,{})]})}},52966:function(e,t,n){"use strict";n.r(t);n(72791);var r=n(70972),a=n.n(r),o=n(2409),i=n(49389),s=n(87309),u=n(98056),l=n(93539),c=(n(33374),n(6344)),d=n(86705),p=n(80184);t.default=function(){var e=(0,l.Z)().messages;return(0,p.jsxs)(d.Z,{children:[(0,p.jsx)(c.Z,{title:"Reset Password"}),(0,p.jsx)("div",{className:"auth-recon-content",children:(0,p.jsxs)(o.Z,{className:"reset-form",name:"basic",initialValues:{remember:!0},onFinishFailed:function(e){console.log("Failed:",e)},children:[(0,p.jsxs)(o.Z.Item,{name:"pin",className:"form-field",rules:[{required:!0,message:"Please input your Pin!"}],children:[(0,p.jsx)("p",{children:(0,p.jsx)(u.Z,{id:"common.verificationMessage"})}),(0,p.jsx)(a(),{type:"password",fields:6})]}),(0,p.jsx)(o.Z.Item,{name:"newPassword",className:"form-field",rules:[{required:!0,message:"Please input your New Password!"}],children:(0,p.jsx)(i.Z,{type:"password",placeholder:e["common.newPassword"]})}),(0,p.jsx)(o.Z.Item,{name:"confirmPassword",className:"form-field",rules:[{required:!0,message:"Please input your Retype Password!"}],children:(0,p.jsx)(i.Z,{type:"password",placeholder:e["common.retypePassword"]})}),(0,p.jsx)(s.Z,{type:"primary",htmlType:"submit",className:"reset-btn",children:(0,p.jsx)(u.Z,{id:"common.resetMyPassword"})})]})})]})}},70972:function(e,t,n){var r;"undefined"!=typeof self&&self,e.exports=(r=n(72791),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=c(o),s=c(n(2)),u=c(n(5)),l=n(6);function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.fields,a=e.type,o=e.isValid,i=e.disabled,s=e.filterKeyCodes,u=e.forceUppercase,c=e.value;u&&(c=c.toUpperCase()),n.state={value:c,fields:r,type:a,input:[],isValid:o,disabled:i,filterKeyCodes:s,defaultInputStyle:{fontFamily:"monospace",MozAppearance:"textfield",borderRadius:"6px",border:"1px solid",boxShadow:"0px 0px 10px 0px rgba(0,0,0,.10)",margin:"4px",paddingLeft:"8px",width:"36px",height:"42px",fontSize:"32px",boxSizing:"border-box"}};for(var d=0;d<Number(n.state.fields);d+=1)if(d<32){var p=n.state.value[d]||"";n.state.input.push(p)}return n.textInput=[],n.uuid=(0,l.uuidv4)(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({isValid:e.isValid,value:e.value,disabled:e.disabled})}},{key:"handleBlur",value:function(e){this.handleTouch(e.target.value)}},{key:"handleTouch",value:function(e){var t=this.props,n=t.touch,r=t.untouch,a=t.name;"function"==typeof n&&"function"==typeof r&&(""===e?n(a):r(a))}},{key:"handleChange",value:function(e){var t=this,n=this.props.filterChars,r=String(e.target.value);this.props.forceUppercase&&(r=r.toUpperCase()),"number"===this.state.type&&(r=r.replace(/[^\d]/g,""));var a=r=r.split("").filter((function(e){return!n.includes(e)})).join("");if(""!==r){var o=this.state.input.slice();r.length>1?r.split("").map((function(n,r){return Number(e.target.dataset.id)+r<t.props.fields&&(o[Number(e.target.dataset.id)+r]=n),!1})):o[Number(e.target.dataset.id)]=r,o.map((function(e,n){return t.textInput[n]&&(t.textInput[n].value=e),!1}));var i=this.textInput[e.target.dataset.id<o.length?Number(e.target.dataset.id)+1:e.target.dataset.id];i&&(i.focus(),i.select()),a=o.join(""),this.setState({value:o.join(""),input:o})}this.props.onChange&&a&&this.props.onChange(a),this.handleTouch(a)}},{key:"handleKeyDown",value:function(e){var t=Number(e.target.dataset.id),n=this.textInput[t+1],r=this.textInput[t-1],a=void 0,o=void 0;switch(this.state.filterKeyCodes.length>0&&this.state.filterKeyCodes.map((function(t){if(t===e.keyCode)return e.preventDefault(),!0})),e.keyCode){case 8:e.preventDefault(),this.textInput[t].value="",(a=this.state.input.slice())[t]="",o=a.join(""),this.setState({value:o,input:a}),""===this.textInput[t].value&&r&&(r.focus(),r.select()),this.props.onChange&&this.props.onChange(o);break;case 37:e.preventDefault(),r&&(r.focus(),r.select());break;case 39:e.preventDefault(),n&&(n.focus(),n.select());break;case 38:case 40:e.preventDefault();break;case 69:if("number"===e.target.type){e.preventDefault();break}}this.handleTouch(o)}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.style,o=void 0===a?{}:a,s=t.inputStyle,l=void 0===s?{}:s,c=t.inputStyleInvalid,d=void 0===c?{}:c,p=t.type,f=t.autoFocus,h=t.pattern,y=t.inputMode,b=this.state,m=b.disabled,x=b.input,v=b.isValid,g=b.defaultInputStyle,j={container:o,input:v?l:d};return Object.assign(j.container,{display:"inline-block"}),n||0!==Object.keys(l).length||Object.assign(l,r({},g,{color:"black",backgroundColor:"white",borderColor:"lightgrey"})),n||0!==Object.keys(d).length||Object.assign(d,r({},g,{color:"#b94a48",backgroundColor:"#f2dede",borderColor:"#eed3d7"})),m&&Object.assign(j.input,{cursor:"not-allowed",color:"lightgrey",borderColor:"lightgrey",backgroundColor:"#efeff1"}),i.default.createElement("div",{className:(0,u.default)(n,"react-code-input"),style:j.container},x.map((function(t,n){return i.default.createElement("input",{ref:function(t){e.textInput[n]=t},id:e.uuid+"-"+n,"data-id":n,autoFocus:f&&0===n?"autoFocus":"",value:t,key:"input_"+n,type:p,min:0,max:9,maxLength:x.length===n+1?1:x.length,style:j.input,autoComplete:"off",onFocus:function(e){return e.target.select(e)},onBlur:function(t){return e.handleBlur(t)},onChange:function(t){return e.handleChange(t)},onKeyDown:function(t){return e.handleKeyDown(t)},disabled:m,"data-valid":v,pattern:h,inputMode:y})})))}}]),t}();d.defaultProps={autoFocus:!0,isValid:!0,disabled:!1,forceUppercase:!1,fields:4,value:"",type:"text",filterKeyCodes:[189,190],filterChars:["-","."]},d.propTypes={type:s.default.oneOf(["text","number","password","tel"]),fields:s.default.number,value:s.default.string,onChange:s.default.func,name:s.default.string,touch:s.default.func,untouch:s.default.func,className:s.default.string,isValid:s.default.bool,disabled:s.default.bool,style:s.default.object,inputStyle:s.default.object,inputStyleInvalid:s.default.object,autoFocus:s.default.bool,forceUppercase:s.default.bool,filterKeyCodes:s.default.array,filterChars:s.default.array,pattern:s.default.string,inputMode:s.default.oneOf(["verbatim","latin","latin-name","latin-prose","full-width-latin","kana","kana-name","katakana","numeric","tel","email","url"])},t.default=d},function(e,t){e.exports=r},function(e,t,n){e.exports=n(3)()},function(e,t,n){"use strict";var r=n(4);function a(){}e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=a,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}void 0!==e&&e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}}]))},33374:function(){}}]);
//# sourceMappingURL=966.7e730f2e.chunk.js.map