(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+oT+":function(e,t,r){var n=r("eVuF");function o(e,t,r,o,a,i,c){try{var s=e[i](c),u=s.value}catch(p){return void r(p)}s.done?t(u):n.resolve(u).then(o,a)}e.exports=function(e){return function(){var t=this,r=arguments;return new n((function(n,a){var i=e.apply(t,r);function c(e){o(i,n,a,c,s,"next",e)}function s(e){o(i,n,a,c,s,"throw",e)}c(void 0)}))}}},"1TCz":function(e,t,r){"use strict";r.r(t);var n=r("0iUn"),o=r("sLSF"),a=r("MI3g"),i=r("a7VT"),c=r("Tit0"),s=r("q1tI"),u=r.n(s),p=r("8Bbg"),l=r.n(p),f=r("gNx5"),d=u.a.createElement;function h(e){var t=Object(s.useContext)(f.a).isDarkMode;return d("div",{style:{background:t?"#394bad":"#edeef2",height:"100vh",width:"100vw"}},e.children)}var m=r("VlV5"),g=r("s8Ut"),b=r("qpOb"),v=r("HXb3"),y=r("H2TA"),x=r("6yBS"),k=r("dl/7"),w={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},O=r("Rp/f"),j=function(e){return{root:{success:{backgroundColor:x.a[600]},error:{backgroundColor:k.a[500]},info:{backgroundColor:w[500]},warning:{backgroundColor:O.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}},S=r("hfKm"),C=r.n(S),T=r("2Eek"),E=r.n(T),R=r("XoMD"),A=r.n(R),N=r("Jo+v"),B=r.n(N),P=r("4mXO"),L=r.n(P),M=r("pLtp"),q=r.n(M),I=r("vYYK"),D=r("doui"),z=r("kOwS");function U(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=q()(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(L.a){var a=L()(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var $=r("wx14"),F=r("Ff2n"),J=(r("17x9"),r("iuhU")),_=r("NqtD"),H=r("kKAo"),V=u.a.forwardRef((function(e,t){var r=e.classes,n=e.className,o=e.color,a=void 0===o?"primary":o,i=e.position,c=void 0===i?"fixed":i,s=Object(F.a)(e,["classes","className","color","position"]);return u.a.createElement(H.a,Object($.a)({square:!0,component:"header",elevation:4,className:Object(J.a)(r.root,r["position".concat(Object(_.a)(c))],n,"inherit"!==a&&r["color".concat(Object(_.a)(a))],{fixed:"mui-fixed"}[c]),ref:t},s))})),X=Object(y.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static",transform:"translateZ(0)"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}}),{name:"MuiAppBar"})(V),Z=r("rePB"),G=u.a.forwardRef((function(e,t){var r=e.classes,n=e.className,o=e.component,a=void 0===o?"div":o,i=e.disableGutters,c=void 0!==i&&i,s=e.variant,p=void 0===s?"regular":s,l=Object(F.a)(e,["classes","className","component","disableGutters","variant"]);return u.a.createElement(a,Object($.a)({className:Object(J.a)(r.root,r[p],n,!c&&r.gutters),ref:t},l))})),K=Object(y.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(Z.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(G),W=r("PsDL"),Y=r("ofer"),Q=r("MjS+"),ee=r("bSwy"),te=r.n(ee),re=r("UhlP"),ne=r("R/WZ"),oe=Object(ne.a)((function(e){return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:"bolder"},body:Object($.a)({margin:0,color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white},"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"});var ae=function(e){var t=e.children,r=void 0===t?null:t;return oe(),u.a.createElement(u.a.Fragment,null,r)},ie=r("wClv"),ce=function(e){return{root:{width:"100vw",marginBottom:0},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(I.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(I.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ie.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ie.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(9),height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(I.a)({paddingTop:e.spacing(1),paddingRight:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(10),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}},se=r("v09S"),ue=u.a.createElement;function pe(e,t){var r=q()(e);if(L.a){var n=L()(e);t&&(n=n.filter((function(t){return B()(e,t).enumerable}))),r.push.apply(r,n)}return r}var le=Object(y.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,r=U(e,["classes"]);return ue(re.a,Object(z.a)({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},r))}));var fe=Object(y.a)(ce)((function(e){var t,r=Object(s.useContext)(f.a),n=r.isDarkMode,o=r.toggleTheme,a=Object(s.useContext)(m.a).language,i=e.classes,c=se.a[a],p=c.appTitle,l=c.search,d=c.flag,h=u.a.useState({checkedB:!0}),g=Object(D.a)(h,2),b=g[0],v=g[1];return ue("div",{className:i.root},ue(ae,null),ue(X,{position:"static",color:n?"default":"primary"},ue(K,null,ue(W.a,{className:i.menuButton,color:"inherit"},ue("span",null,d)),ue(Y.a,{className:i.title,variant:"h6",color:"inherit"},p),ue(le,{checked:b.checkedB,onChange:(t="checkedB",function(e){v(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(r),!0).forEach((function(t){Object(I.a)(e,t,r[t])})):A.a?E()(e,A()(r)):pe(Object(r)).forEach((function(t){C()(e,t,B()(r,t))}))}return e}({},b,Object(I.a)({},t,e.target.checked))),o()}),value:"checkedB"}),ue("div",{className:i.grow}),ue("div",{className:i.search},ue("div",{className:i.searchIcon},ue(te.a,null)),ue(Q.a,{placeholder:"".concat(l,"..."),classes:{root:i.inputRoot,input:i.inputInput}})))))})),de=r("hje+"),he=u.a.createElement,me=function(e){function t(){return Object(n.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps,n=e.classes;return he("div",null,he(f.b,null,he(m.b,null,he(v.SnackbarProvider,{maxSnack:3,className:n.root,iconVariant:{success:"\u2705",error:"\u26a0\ufe0f"}},he(h,null,he(b.c,null,he(fe,r),he(de.b,null,he(g.b,null,he(t,r)))))))))}}]),t}(l.a);t.default=Object(y.a)(j)(me)},"2Eek":function(e,t,r){e.exports=r("W7oM")},"2SVd":function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"4mXO":function(e,t,r){e.exports=r("7TPF")},"5oMp":function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"6yBS":function(e,t,r){"use strict";t.a={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"}},"7TPF":function(e,t,r){r("AUvm"),e.exports=r("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,r){var n=r("Y7ZC"),o=r("uplh"),a=r("NsO/"),i=r("vwuL"),c=r("IP1Z");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=a(e),s=i.f,u=o(n),p={},l=0;u.length>l;)void 0!==(r=s(n,t=u[l++]))&&c(p,t,r);return p}})},"8Bbg":function(e,t,r){e.exports=r("B5Ud")},"9Jkg":function(e,t,r){e.exports=r("oh+g")},"9rSQ":function(e,t,r){"use strict";var n=r("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},B5Ud:function(e,t,r){"use strict";var n=r("/HRN"),o=r("WaGi"),a=r("ZDA2"),i=r("/+P4"),c=r("N9n2"),s=r("ln6h"),u=r("KI45");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=b,t.default=void 0;var p=u(r("htGi")),l=u(r("+oT+")),f=u(r("q1tI")),d=r("g/15");function h(e){return m.apply(this,arguments)}function m(){return(m=(0,l.default)(s.mark((function e(t){var r,n,o;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,n=t.ctx,e.next=3,(0,d.loadGetInitialProps)(r,n);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,r("nOHt");var g=function(e){function t(){return n(this,t),a(this,i(t).apply(this,arguments))}return c(t,e),o(t,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,o=b(t);return f.default.createElement(r,(0,p.default)({},n,{url:o}))}}]),t}(f.default.Component);function b(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return n},get pathname(){return t},get asPath(){return r},back:function(){e.back()},push:function(t,r){return e.push(t,r)},pushTo:function(t,r){var n=r?t:"",o=r||t;return e.push(n,o)},replace:function(t,r){return e.replace(t,r)},replaceTo:function(t,r){var n=r?t:"",o=r||t;return e.replace(n,o)}}}t.default=g,g.origGetInitialProps=h,g.getInitialProps=h},CgaS:function(e,t,r){"use strict";var n=r("xTJ+"),o=r("MLWZ"),a=r("9rSQ"),i=r("UnBK"),c=r("SntB");function s(e){this.defaults=e,this.interceptors={request:new a,response:new a}}s.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=c(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},s.prototype.getUri=function(e){return e=c(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){s.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){s.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}})),e.exports=s},DfZB:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},HSsa:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},JEQr:function(e,t,r){"use strict";(function(t){var n=r("xTJ+"),o=r("yK9s"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c={adapter:function(){var e;return"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)?e=r("tQ2B"):"undefined"!==typeof XMLHttpRequest&&(e=r("tQ2B")),e}(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(a)})),e.exports=c}).call(this,r("8oxB"))},LYNF:function(e,t,r){"use strict";var n=r("OH9c");e.exports=function(e,t,r,o,a){var i=new Error(e);return n(i,t,r,o,a)}},Lmem:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,r){"use strict";var n=r("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(n.isURLSearchParams(t))a=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var c=e.indexOf("#");-1!==c&&(e=e.slice(0,c)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},OH9c:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,r){"use strict";var n=r("xTJ+");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},"Rn+g":function(e,t,r){"use strict";var n=r("LYNF");e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},"Rp/f":function(e,t,r){"use strict";t.a={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00"}},SntB:function(e,t,r){"use strict";var n=r("xTJ+");e.exports=function(e,t){t=t||{};var r={};return n.forEach(["url","method","params","data"],(function(e){"undefined"!==typeof t[e]&&(r[e]=t[e])})),n.forEach(["headers","auth","proxy"],(function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):"undefined"!==typeof e[o]&&(r[o]=e[o])})),n.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(n){"undefined"!==typeof t[n]?r[n]=t[n]:"undefined"!==typeof e[n]&&(r[n]=e[n])})),r}},UhlP:function(e,t,r){"use strict";var n=r("wx14"),o=r("Ff2n"),a=r("q1tI"),i=r.n(a),c=(r("17x9"),r("iuhU")),s=r("H2TA"),u=r("ye/S"),p=r("NqtD"),l=r("4ppn"),f=i.a.forwardRef((function(e,t){var r=e.classes,a=e.className,s=e.color,u=void 0===s?"secondary":s,f=e.disabled,d=void 0!==f&&f,h=e.edge,m=void 0!==h&&h,g=e.size,b=void 0===g?"medium":g,v=Object(o.a)(e,["classes","className","color","disabled","edge","size"]),y=i.a.createElement("span",{className:r.thumb});return i.a.createElement("span",{className:Object(c.a)(r.root,a,{start:r.edgeStart,end:r.edgeEnd}[m],{small:r["size".concat(Object(p.a)(b))]}[b])},i.a.createElement(l.a,Object(n.a)({type:"checkbox",icon:y,checkedIcon:y,classes:{root:Object(c.a)(r.switchBase,r["color".concat(Object(p.a)(u))]),input:r.input,checked:r.checked,disabled:r.disabled},ref:t,disabled:d},v)),i.a.createElement("span",{className:r.track}))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle"},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(f)},UnBK:function(e,t,r){"use strict";var n=r("xTJ+"),o=r("xAGQ"),a=r("Lmem"),i=r("JEQr"),c=r("2SVd"),s=r("5oMp");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!c(e.url)&&(e.url=s(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},W7oM:function(e,t,r){r("nZgG");var n=r("WEpk").Object;e.exports=function(e,t){return n.defineProperties(e,t)}},XoMD:function(e,t,r){e.exports=r("hYAz")},bSwy:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("q1tI")),a=(0,n(r("8/g6")).default)(o.default.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=a},endd:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},eqyj:function(e,t,r){"use strict";var n=r("xTJ+");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,a,i){var c=[];c.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&c.push("expires="+new Date(r).toGMTString()),n.isString(o)&&c.push("path="+o),n.isString(a)&&c.push("domain="+a),!0===i&&c.push("secure"),document.cookie=c.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},gNx5:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r("doui"),o=r("q1tI"),a=r.n(o),i=r("n11V"),c=a.a.createElement,s=Object(o.createContext)();function u(e){var t=Object(i.a)(!1),r=Object(n.a)(t,2),o=r[0],a=r[1];return c(s.Provider,{value:{isDarkMode:o,toggleTheme:a}},e.children)}},hYAz:function(e,t,r){r("7m0m"),e.exports=r("WEpk").Object.getOwnPropertyDescriptors},"hje+":function(e,t,r){"use strict";r.d(t,"a",(function(){return T})),r.d(t,"b",(function(){return E})),r.d(t,"c",(function(){return R}));var n=r("hfKm"),o=r.n(n),a=r("2Eek"),i=r.n(a),c=r("XoMD"),s=r.n(c),u=r("Jo+v"),p=r.n(u),l=r("4mXO"),f=r.n(l),d=r("pLtp"),h=r.n(d),m=r("kOwS"),g=r("vYYK"),b=r("0iUn"),v=r("sLSF"),y=r("MI3g"),x=r("a7VT"),k=r("AT/M"),w=r("Tit0"),O=r("q1tI"),j=r.n(O).a.createElement;function S(e,t){var r=h()(e);if(f.a){var n=f()(e);t&&(n=n.filter((function(t){return p()(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){Object(g.a)(e,t,r[t])})):s.a?i()(e,s()(r)):S(Object(r)).forEach((function(t){o()(e,t,p()(r,t))}))}return e}var T=Object(O.createContext)(),E=function(e){function t(e){var r;return Object(b.a)(this,t),(r=Object(y.a)(this,Object(x.a)(t).call(this,e))).state={_id:"",todo:"",completed:!1,type:"",updateState:!1},r.resetSort=r.resetSort.bind(Object(k.a)(r)),r}return Object(w.a)(t,e),Object(v.a)(t,[{key:"resetSort",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.setState({_id:t,todo:r,completed:n,type:e,updateState:!0})}},{key:"render",value:function(){return j(T.Provider,{value:C({},this.state,{resetSort:this.resetSort})},this.props.children)}}]),t}(O.Component),R=function(e){return function(t){return j(T.Consumer,null,(function(r){return j(e,Object(m.a)({sortedContext:r},t))}))}}},"jfS+":function(e,t,r){"use strict";var n=r("endd");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},kOwS:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("UXZV"),o=r.n(n);function a(){return(a=o.a||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}},n11V:function(e,t,r){"use strict";var n=r("q1tI");t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n.useState)(e),r=t[0],o=t[1];return[r,function(){o(!r)}]}},nZgG:function(e,t,r){var n=r("Y7ZC");n(n.S+n.F*!r("jmDH"),"Object",{defineProperties:r("fpC5")})},"oh+g":function(e,t,r){var n=r("WEpk"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},qpOb:function(e,t,r){"use strict";var n=r("doui"),o=r("q1tI"),a=r.n(o);var i=r("ln6h"),c=r.n(i),s=r("9Jkg"),u=r.n(s),p=r("nOHt"),l=r.n(p),f=new(r("e13s").a),d=function(e,t){var r,n,o,a;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:i.t0=t.type,i.next="LOGIN"===i.t0?3:25;break;case 3:return r={email:t.email,password:t.password},i.prev=4,"https://cors-anywhere.herokuapp.com/","https://owusu-task-manager.herokuapp.com/users/login",i.next=9,c.a.awrap(fetch("https://cors-anywhere.herokuapp.com/https://owusu-task-manager.herokuapp.com/users/login",{method:"POST",body:u()(r),headers:{"Content-Type":"application/json"}}));case 9:return n=i.sent,i.next=12,c.a.awrap(n.json());case 12:o=i.sent,a=o.token,f.set("token",a),e.token=a,l.a.push("/React_TaskApp/TodoAppPage"),i.next=24;break;case 19:i.prev=19,i.t1=i.catch(4),e.error=!0,console.error("Error:",i.t1),l.a.push("/React_TaskApp/");case 24:case 25:return i.abrupt("return",e);case 26:case"end":return i.stop()}}),null,null,[[4,19]])};r.d(t,"b",(function(){return g})),r.d(t,"a",(function(){return b})),r.d(t,"c",(function(){return v}));var h=a.a.createElement,m={token:"",error:!1},g=Object(o.createContext)(),b=Object(o.createContext)();function v(e){var t=function(e,t){var r=Object(o.useReducer)(e,t);return[r[0],r[1]]}(d,m),r=Object(n.a)(t,2),a=r[0],i=r[1];return h(g.Provider,{value:a},h(b.Provider,{value:i},e.children))}},s8Ut:function(e,t,r){"use strict";var n=r("doui"),o=r("q1tI"),a=r.n(o),i=r("ln6h"),c=r.n(i),s=r("zZDm");var u=r("vDqi"),p=r.n(u),l=new(r("e13s").a),f=l.get("token"),d=function(e,t){var r,n,o,a,i,s,u,d,h,m,g;return c.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:b.t0=t.type,b.next="ADD"===b.t0?3:"REMOVE"===b.t0?20:"TOGGLE"===b.t0?32:"EDIT"===b.t0?46:60;break;case 3:return r=t.task,n={description:r},b.prev=5,"https://cors-anywhere.herokuapp.com/","https://owusu-task-manager.herokuapp.com/tasks",b.next=10,c.a.awrap(p()({url:"https://cors-anywhere.herokuapp.com/https://owusu-task-manager.herokuapp.com/tasks",method:"post",data:n,headers:{Authorization:"Bearer "+f}}));case 10:return o=b.sent,a=o.data._id,l.set("taskId",a),b.abrupt("return",a);case 17:b.prev=17,b.t1=b.catch(5),console.log(b.t1);case 20:return b.prev=20,"https://cors-anywhere.herokuapp.com/",i="https://owusu-task-manager.herokuapp.com/tasks/".concat(t.id),b.next=25,c.a.awrap(p()({url:"https://cors-anywhere.herokuapp.com/"+i,method:"delete",headers:{Authorization:"Bearer "+f}}));case 25:return b.sent,b.abrupt("break",61);case 29:b.prev=29,b.t2=b.catch(20),console.log(b.t2);case 32:return b.prev=32,"https://cors-anywhere.herokuapp.com/",s="https://owusu-task-manager.herokuapp.com/tasks/".concat(t.id),u=!t.completed,d={completed:u},b.next=39,c.a.awrap(p()({url:"https://cors-anywhere.herokuapp.com/"+s,method:"patch",data:d,headers:{Authorization:"Bearer "+f}}));case 39:return b.sent,b.abrupt("break",61);case 43:b.prev=43,b.t3=b.catch(32),console.log(b.t3);case 46:return b.prev=46,"https://cors-anywhere.herokuapp.com/",h="https://owusu-task-manager.herokuapp.com/tasks/".concat(t.id),m=t.newTask,g={description:m},b.next=53,c.a.awrap(p()({url:"https://cors-anywhere.herokuapp.com/"+h,method:"patch",data:g,headers:{Authorization:"Bearer "+f}}));case 53:return b.sent,b.abrupt("break",61);case 57:b.prev=57,b.t4=b.catch(46),console.log(b.t4);case 60:return b.abrupt("return",e);case 61:case"end":return b.stop()}}),null,null,[[5,17],[20,29],[32,43],[46,57]])};r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return v}));var h=a.a.createElement,m=[{_id:1,description:"Mow the lawn using goats",completed:!1,updatedAt:"1987-12-27T07:20:16.566Z"},{_id:2,description:"Release lady bugs into garden",completed:!0,updatedAt:"2015-12-27T07:20:16.566Z"}],g=Object(o.createContext)(),b=Object(o.createContext)();function v(e){var t=function(e,t){var r=Object(o.useReducer)(t,e,(function(t){var r,n;return c.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,c.a.awrap(Object(s.a)(t));case 3:n=o.sent,(r=n.data).toggled=!1,o.next=12;break;case 8:return o.prev=8,o.t0=o.catch(0),console.log(o.t0),o.abrupt("return",r=e);case 12:return o.abrupt("return",r);case 13:case"end":return o.stop()}}),null,null,[[0,8]])})),n=r[0],a=r[1];return console.log(n),[n,a]}(m,d),r=Object(n.a)(t,2),a=r[0],i=r[1];return h(g.Provider,{value:a},h(b.Provider,{value:i},e.children))}},tQ2B:function(e,t,r){"use strict";var n=r("xTJ+"),o=r("Rn+g"),a=r("MLWZ"),i=r("w0Vi"),c=r("OTTw"),s=r("LYNF");e.exports=function(e){return new Promise((function(t,u){var p=e.data,l=e.headers;n.isFormData(p)&&delete l["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+h)}if(f.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in f?i(f.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:r,config:e,request:f};o(t,u,n),f=null}},f.onabort=function(){f&&(u(s("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){u(s("Network Error",e,null,f)),f=null},f.ontimeout=function(){u(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",f)),f=null},n.isStandardBrowserEnv()){var m=r("eqyj"),g=(e.withCredentials||c(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in f&&n.forEach(l,(function(e,t){"undefined"===typeof p&&"content-type"===t.toLowerCase()?delete l[t]:f.setRequestHeader(t,e)})),e.withCredentials&&(f.withCredentials=!0),e.responseType)try{f.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"===typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){f&&(f.abort(),u(e),f=null)})),void 0===p&&(p=null),f.send(p)}))}},uplh:function(e,t,r){var n=r("ar/p"),o=r("mqlF"),a=r("5K7Z"),i=r("5T2Y").Reflect;e.exports=i&&i.ownKeys||function(e){var t=n.f(a(e)),r=o.f;return r?t.concat(r(e)):t}},vDqi:function(e,t,r){e.exports=r("zuR4")},w0Vi:function(e,t,r){"use strict";var n=r("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,i={};return e?(n.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},wClv:function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(t,e),r)}function o(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length/3,"}"),"g"),r=e.match(t);return r&&1===r[0].length&&(r=r.map((function(e){return e+e}))),r?"rgb(".concat(r.map((function(e){return parseInt(e,16)})).join(", "),")"):""}function a(e){var t=(e=i(e)).values,r=t[0],n=t[1]/100,o=t[2]/100,a=n*Math.min(o,1-o),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+r/30)%12;return o-a*Math.max(Math.min(t-3,9-t,1),-1)},u="rgb",p=[Math.round(255*s(0)),Math.round(255*s(8)),Math.round(255*s(4))];return"hsla"===e.type&&(u+="a",p.push(t[3])),c({type:u,values:p})}function i(e){if(e.type)return e;if("#"===e.charAt(0))return i(o(e));var t=e.indexOf("("),r=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla"].indexOf(r))throw new Error(["Material-UI: unsupported `".concat(e,"` color."),"We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()."].join("\n"));var n=e.substring(t+1,e.length-1).split(",");return{type:r,values:n=n.map((function(e){return parseFloat(e)}))}}function c(e){var t=e.type,r=e.values;return-1!==t.indexOf("rgb")?r=r.map((function(e,t){return t<3?parseInt(e,10):e})):-1!==t.indexOf("hsl")&&(r[1]="".concat(r[1],"%"),r[2]="".concat(r[2],"%")),"".concat(t,"(").concat(r.join(", "),")")}function s(e){var t="hsl"===(e=i(e)).type?i(a(e)).values:e.values;return t=t.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function u(e,t){if(e=i(e),t=n(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb"))for(var r=0;r<3;r+=1)e.values[r]*=1-t;return c(e)}function p(e,t){if(e=i(e),t=n(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(var r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;return c(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.hexToRgb=o,t.rgbToHex=function(e){if(0===e.indexOf("#"))return e;var t=i(e).values;return"#".concat(t.map((function(e){return function(e){var t=e.toString(16);return 1===t.length?"0".concat(t):t}(e)})).join(""))},t.hslToRgb=a,t.decomposeColor=i,t.recomposeColor=c,t.getContrastRatio=function(e,t){var r=s(e),n=s(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)},t.getLuminance=s,t.emphasize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15;return s(e)>.5?u(e,t):p(e,t)},t.fade=function(e,t){e=i(e),t=n(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a");return e.values[3]=t,c(e)},t.darken=u,t.lighten=p},x86X:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},xAGQ:function(e,t,r){"use strict";var n=r("xTJ+");e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},"xTJ+":function(e,t,r){"use strict";var n=r("HSsa"),o=r("x86X"),a=Object.prototype.toString;function i(e){return"[object Array]"===a.call(e)}function c(e){return null!==e&&"object"===typeof e}function s(e){return"[object Function]"===a.call(e)}function u(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:c,isUndefined:function(e){return"undefined"===typeof e},isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:s,isStream:function(e){return c(e)&&s(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:u,merge:function e(){var t={};function r(r,n){"object"===typeof t[n]&&"object"===typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){"object"===typeof t[n]&&"object"===typeof r?t[n]=e(t[n],r):t[n]="object"===typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return t},extend:function(e,t,r){return u(t,(function(t,o){e[o]=r&&"function"===typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,r){"use strict";var n=r("xTJ+");e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},zZDm:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("ln6h"),o=r.n(n),a=r("vDqi"),i=r.n(a),c=r("nOHt"),s=r.n(c),u=new(r("e13s").a);function p(e){var t,r;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=null,t=e.req?e.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,"$1"):u.get("token"),"https://cors-anywhere.herokuapp.com/","https://owusu-task-manager.herokuapp.com/tasks",n.prev=4,n.next=7,o.a.awrap(i.a.get("https://cors-anywhere.herokuapp.com/https://owusu-task-manager.herokuapp.com/tasks",{headers:{Authorization:"Bearer "+t}}));case 7:return r=n.sent,n.abrupt("return",r);case 11:n.prev=11,n.t0=n.catch(4),console.error("Error:",n.t0),e.res?(e.res.writeHead(302,{Location:"/React_TaskApp/"}),e.res.end()):s.a.push("/React_TaskApp/");case 15:case"end":return n.stop()}}),null,null,[[4,11]])}},zuR4:function(e,t,r){"use strict";var n=r("xTJ+"),o=r("HSsa"),a=r("CgaS"),i=r("SntB");function c(e){var t=new a(e),r=o(a.prototype.request,t);return n.extend(r,a.prototype,t),n.extend(r,t),r}var s=c(r("JEQr"));s.Axios=a,s.create=function(e){return c(i(s.defaults,e))},s.Cancel=r("endd"),s.CancelToken=r("jfS+"),s.isCancel=r("Lmem"),s.all=function(e){return Promise.all(e)},s.spread=r("DfZB"),e.exports=s,e.exports.default=s}},[["GcxT",0,1]]]);