import{r as i,f as a,a as c,w as d,s as l}from"./index-b35cbb3d.js";import"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";import"https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const f=()=>{const e=window;e.addEventListener("statusTap",()=>{i(()=>{const n=e.innerWidth,s=e.innerHeight,o=document.elementFromPoint(n/2,s/2);if(!o)return;const t=a(o);t&&new Promise(r=>c(t,r)).then(()=>{d(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{f as startStatusTap};