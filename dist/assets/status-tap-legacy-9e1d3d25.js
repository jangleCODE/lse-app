System.register(["./index-legacy-822a3c4d.js","https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js","https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js"],(function(e,t){"use strict";var s,n,r,i,a;return{setters:[e=>{s=e.r,n=e.f,r=e.a,i=e.w,a=e.s},null,null],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
e("startStatusTap",(()=>{const e=window;e.addEventListener("statusTap",(()=>{s((()=>{const t=e.innerWidth,s=e.innerHeight,o=document.elementFromPoint(t/2,s/2);if(!o)return;const c=n(o);c&&new Promise((e=>r(c,e))).then((()=>{i((async()=>{c.style.setProperty("--overflow","hidden"),await a(c,300),c.style.removeProperty("--overflow")}))}))}))}))}))}}}));
