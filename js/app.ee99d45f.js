(function(e){function t(t){for(var n,u,i=t[0],s=t[1],c=t[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/iframe-tabbar-test/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"069e":function(e,t,r){"use strict";r("920f")},"289d":function(e,t,r){"use strict";r("e022")},"343a":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u=(r("069e"),r("2877")),i={},s=Object(u["a"])(i,o,a,!1,null,null,null),c=s.exports,l=r("8c4f"),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("div",{staticClass:"content"},[t("router-view")],1),t("van-tabbar",{staticClass:"tabbar",attrs:{route:""}},[t("van-tabbar-item",{attrs:{replace:"",to:"/vue2",icon:"good-job-o"}},[e._v(" Vue 2 ")]),t("van-tabbar-item",{attrs:{replace:"",to:"/vue3",icon:"guide-o"}},[e._v("Vue 3")])],1)],1)},f=[],v={name:"Home"},b=v,d=(r("289d"),Object(u["a"])(b,p,f,!1,null,"888ca7bc",null)),h=d.exports,m=function(){var e=this,t=e._self._c;return t("iframe",{key:e.src,staticClass:"iframe-box",attrs:{src:e.src}})},y=[],g={name:"IframeView",computed:{src(){const e=this.$route.name;switch(e){case"vue2":return"https://zlx01.github.io/vue2-deploy-gh-pages/#/";case"vue3":return"https://zlx01.github.io/vue3-deploy-gh-pages/#/";default:return"#"}}}},w=g,O=(r("8858"),Object(u["a"])(w,m,y,!1,null,"6ed71af6",null)),_=O.exports;n["a"].use(l["a"]);const j=[{path:"/",name:"Home",component:h,redirect:"/vue2",children:[{path:"/vue2",name:"vue2",component:_},{path:"/vue3",name:"vue3",component:_}]}],x=new l["a"]({mode:"history",base:"/iframe-tabbar-test/",routes:j});var P=x,S=r("2f62");n["a"].use(S["a"]);var k=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),C=r("b970");r("157a");n["a"].use(C["a"]),n["a"].config.productionTip=!1,new n["a"]({router:P,store:k,render:e=>e(c)}).$mount("#app")},8858:function(e,t,r){"use strict";r("343a")},"920f":function(e,t,r){},e022:function(e,t,r){}});
//# sourceMappingURL=app.ee99d45f.js.map