System.register(["./index-legacy-822a3c4d.js","https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js","https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js"],(function(e,t){"use strict";var n,i;return{setters:[e=>{n=e.o,i=e.m},null,null],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
e("mdTransitionAnimation",((e,t)=>{var a,o,r;const s="40px",l="back"===t.direction,c=t.enteringEl,d=t.leavingEl,u=n(c),m=u.querySelector("ion-toolbar"),f=i();if(f.addElement(u).fill("both").beforeRemoveClass("ion-page-invisible"),l?f.duration((null!==(a=t.duration)&&void 0!==a?a:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):f.duration((null!==(o=t.duration)&&void 0!==o?o:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${s})`,"translateY(0px)").fromTo("opacity",.01,1),m){const e=i();e.addElement(m),f.addAnimation(e)}if(d&&l){f.duration((null!==(r=t.duration)&&void 0!==r?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const e=i();e.addElement(n(d)).onFinish((t=>{1===t&&e.elements.length>0&&e.elements[0].style.setProperty("display","none")})).fromTo("transform","translateY(0px)",`translateY(${s})`).fromTo("opacity",1,0),f.addAnimation(e)}return f}))}}}));