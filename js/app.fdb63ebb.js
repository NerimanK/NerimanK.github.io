(function(t){function e(e){for(var n,a,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"019c93d1"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"858dd950"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],f.parentNode.removeChild(f),r(i)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"246a":function(t,e,r){},2718:function(t,e,r){"use strict";var n=r("246a"),a=r.n(n);a.a},"3cf3":function(t,e,r){"use strict";var n=r("4a0b"),a=r.n(n);a.a},"4a0b":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:"Home"==t.currentRouteName?"back-image":"back",attrs:{id:"app"}},[r("v-app",{attrs:{id:"inspire"}},[r("v-content",[t.renderSideBar?r("SideBar"):t._e(),r("v-container",{attrs:{fluid:"","fill-height":""}},[r("router-view")],1)],1)],1)],1)},o=[],i=(r("b0c0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{color:"#8D93AB","mini-variant":t.miniVariant,right:t.right,permanent:"permanent",src:t.bg,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-container",{attrs:{"fill-height":""}},[r("v-row",{staticStyle:{height:"100%"},attrs:{justify:"","no-gutters":""}},[r("v-col",{attrs:{cols:"12","align-self":"end"}},[r("v-icon",{staticClass:"font-bold",attrs:{color:"white",size:"8em"}},[t._v("mdi-car")]),t._v(" "),r("p",{staticClass:"card-fonts"},[r("br"),t._v("Deine Services")])],1),r("v-col",{attrs:{cols:"12","align-self":"end"}}),r("v-col",{attrs:{justify:"start",cols:"12","align-self":"end"}},[r("v-btn",{attrs:{to:"/",icon:""}},[r("v-icon",[t._v("mdi-arrow-left")])],1)],1)],1)],1)],1)}),s=[],c={data:function(){return{drawer:!0,items:[{title:"Home",icon:"mdi-home"},{title:"Services",icon:"mdi-face-agent"},{title:"Kosten",icon:"mdi-currency-eur"},{title:"Einstellungen",icon:"mdi-cog"}],color:"primary",colors:["primary","blue","success","red","teal"],right:!1,permanent:!0,miniVariant:!1,expandOnHover:!1,background:!1}},computed:{bg:function(){return this.background?"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg":void 0}}},l=c,u=r("2877"),d=Object(u["a"])(l,i,s,!1,null,null,null),f=d.exports,v={components:{SideBar:f},computed:{currentRouteName:function(){return console.log(this.$route.name),this.$route.name},renderSideBar:function(){var t=this.$route.name;return!("Home"==t|"About"==t)}}},p=v,m=(r("034f"),Object(u["a"])(p,a,o,!1,null,null,null)),h=m.exports,g=r("ce5b"),b=r.n(g),y=(r("bf40"),r("0fe0")),w=r.n(y);n["default"].use(b.a);var _=new b.a({theme:{themes:{light:{primary:"#454360",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{de:w.a},current:"de"}}),C=(r("d3b7"),r("8c4f")),j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"fill-height":""}},[r("v-row",{staticStyle:{height:"100%"},attrs:{justify:"center","no-gutters":""}},[r("v-col",{attrs:{cols:"4","align-self":"end"}},[r("v-card",{staticClass:"card-fonts",attrs:{color:"grey",outlined:"",tile:""}},[r("v-card-title",[t._v("Login")]),r("v-card-actions",[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{icon:"mdi-weather",placeholder:"Username"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{type:"password",icon:"mdi-weather",placeholder:"Password"}})],1),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{to:"about"}},[t._v("Log in")])],1)],1)],1)],1)],1)],1),r("v-col",{attrs:{cols:"12","align-self":"end"}},[r("v-icon",{staticClass:"font-bold",attrs:{color:"blue lighten-1"}},[t._v("mdi-axis-arrow")]),r("p",{staticClass:"font"},[r("strong",[t._v("C")]),t._v("ONNECT"),r("strong",[t._v("F")]),t._v("Y")])],1)],1)],1)},x=[],S={name:"Home",components:{},data:function(){return{alignments:["start","center","end"]}}},O=S,k=(r("cccb"),r("2718"),Object(u["a"])(O,j,x,!1,null,"1ae4bfc2",null)),E=k.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-toolbar",{attrs:{flat:"",color:"rgba(0,0,0,0)",dense:""}},[r("v-spacer"),r("v-btn",{staticClass:" mr-4",attrs:{icon:"",color:"blue"}},[r("v-icon",{staticClass:"font-small"},[t._v("mdi-hexagon-multiple-outline")])],1),r("p",{staticClass:"mr-4 mt-2 font-top-right"},[t._v("79,99€")])],1),r("v-row",{staticStyle:{height:"100%"},attrs:{"no-gutters":""}},t._l(t.menus,(function(e){return r("v-col",{key:e,staticClass:"pa-8 justify-space-around",attrs:{cols:"4","align-self":"center"}},[r("v-card",{staticClass:"ma-3 card-fonts",attrs:{height:"300px",color:"rgba(0,0,0,0.32)"}},[r("v-card-title",{staticClass:"pt-12 justify-center align-center",attrs:{"primary-title":""}},[r("span",{staticClass:"pt-12 mt-9 justify-center font"},[t._v(t._s(e.title)+" ")])]),r("v-card-actions",{staticClass:"mt-6 mr-5 justify-end"},[r("v-btn",{attrs:{icon:"",outlined:"",color:"white"}},[r("v-icon",[t._v("mdi-plus")])],1)],1),r("v-card-text",{staticClass:"mr-5 text-white text-end",attrs:{color:"white"}},[r("p",{staticClass:"white-colr"},[t._v("Mercedes,Bmw")])])],1)],1)})),1)],1)},A=[],B={name:"Home",components:{},data:function(){return{menus:[{title:"Navigation",icon:"mdi-car",route:"services"},{title:"Spotify",icon:"mdi-book-open-page-variant-outline",route:"newservice"},{title:"Wetter",icon:"mdi-newspaper-variant-multiple",route:"newsletter"},{title:"Massage",icon:"mdi-cog-outline",route:"settings"}]}}},F=B,N=(r("3cf3"),Object(u["a"])(F,P,A,!1,null,"6ba3074f",null)),T=N.exports;n["default"].use(C["a"]);var H=[{path:"/services",name:"Services",component:T},{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],$=new C["a"]({mode:"history",base:"/",routes:H}),L=$;n["default"].config.productionTip=!1,new n["default"]({vuetify:_,router:L,render:function(t){return t(h)}}).$mount("#app")},"5ced":function(t,e,r){},"85ec":function(t,e,r){},cccb:function(t,e,r){"use strict";var n=r("5ced"),a=r.n(n);a.a}});
//# sourceMappingURL=app.fdb63ebb.js.map