var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const a="undefined"!=typeof window;let s=a?()=>window.performance.now():()=>Date.now(),l=a?t=>requestAnimationFrame(t):t;const d=new Set;let u,f=!1;function p(){d.forEach(t=>{t[0](s())||(d.delete(t),t[1]())}),(f=d.size>0)&&l(p)}function h(t){let n;return f||(f=!0,l(p)),{promise:new Promise(e=>{d.add(n=[t,e])}),abort(){d.delete(n)}}}function m(t,n){t.appendChild(n)}function $(t,n,e){t.insertBefore(n,e||null)}function y(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function k(){return g(" ")}function x(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function b(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function _(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}function w(t,n,e){t.classList[e?"add":"remove"](n)}function P(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}let E,F=0,M={};function C(t,n,e,r,o,c,i,a=0){const s=16.666/r;let l="{\n";for(let t=0;t<=1;t+=s){const r=n+(e-n)*c(t);l+=100*t+`%{${i(r,1-r)}}\n`}const d=l+`100% {${i(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(d)}_${a}`;if(!M[f]){if(!u){const t=v("style");document.head.appendChild(t),u=t.sheet}M[f]=!0,u.insertRule(`@keyframes ${f} ${d}`,u.cssRules.length)}const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${o}ms 1 both`,F+=1,f}function A(t,n){t.style.animation=(t.style.animation||"").split(", ").filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")).join(", "),n&&!--F&&l(()=>{if(F)return;let t=u.cssRules.length;for(;t--;)u.deleteRule(t);M={}})}function R(t){E=t}function S(){const t=E;return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=P(n,e);r.slice().forEach(n=>{n.call(t,o)})}}}const O=[],j=[],N=[],I=[],L=Promise.resolve();let q,z=!1;function B(t){N.push(t)}function D(){const t=new Set;do{for(;O.length;){const t=O.shift();R(t),J(t.$$)}for(;j.length;)j.pop()();for(let n=0;n<N.length;n+=1){const e=N[n];t.has(e)||(e(),t.add(e))}N.length=0}while(O.length);for(;I.length;)I.pop()();z=!1}function J(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(B))}function K(){return q||(q=Promise.resolve()).then(()=>{q=null}),q}function Q(t,n,e){t.dispatchEvent(P(`${n?"intro":"outro"}${e}`))}const T=new Set;let G;function H(){G={r:0,c:[],p:G}}function U(){G.r||o(G.c),G=G.p}function V(t,n){t&&t.i&&(T.delete(t),t.i(n))}function W(t,n,e,r){if(t&&t.o){if(T.has(t))return;T.add(t),G.c.push(()=>{T.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}const X={duration:0};function Y(e,r,o){let i,a,l=r(e,o),d=!1,u=0;function f(){i&&A(e,i)}function p(){const{delay:r=0,duration:o=300,easing:c=n,tick:p=t,css:m}=l||X;m&&(i=C(e,0,1,o,r,c,m,u++)),p(0,1);const $=s()+r,y=$+o;a&&a.abort(),d=!0,B(()=>Q(e,!0,"start")),a=h(t=>{if(d){if(t>=y)return p(1,0),Q(e,!0,"end"),f(),d=!1;if(t>=$){const n=c((t-$)/o);p(n,1-n)}}return d})}let m=!1;return{start(){m||(A(e),c(l)?(l=l(),K().then(p)):p())},invalidate(){m=!1},end(){d&&(f(),d=!1)}}}function Z(e,r,i){let a,l=r(e,i),d=!0;const u=G;function f(){const{delay:r=0,duration:c=300,easing:i=n,tick:f=t,css:p}=l||X;p&&(a=C(e,1,0,c,r,i,p));const m=s()+r,$=m+c;B(()=>Q(e,!1,"start")),h(t=>{if(d){if(t>=$)return f(0,1),Q(e,!1,"end"),--u.r||o(u.c),!1;if(t>=m){const n=i((t-m)/c);f(1-n,n)}}return d})}return u.r+=1,c(l)?K().then(()=>{l=l(),f()}):f(),{end(t){t&&l.tick&&l.tick(1,0),d&&(a&&A(e,a),d=!1)}}}function tt(t,n){W(t,1,1,()=>{n.delete(t.key)})}function nt(t,n,r){const{fragment:i,on_mount:a,on_destroy:s,after_update:l}=t.$$;i.m(n,r),B(()=>{const n=a.map(e).filter(c);s?s.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(B)}function et(t,n){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function rt(t,n){t.$$.dirty||(O.push(t),z||(z=!0,L.then(D)),t.$$.dirty=r()),t.$$.dirty[n]=!0}function ot(n,e,c,i,a,s){const l=E;R(n);const d=e.props||{},u=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:null};let f=!1;var p;u.ctx=c?c(n,d,(t,e,r=e)=>(u.ctx&&a(u.ctx[t],u.ctx[t]=r)&&(u.bound[t]&&u.bound[t](r),f&&rt(n,t)),e)):d,u.update(),f=!0,o(u.before_update),u.fragment=i(u.ctx),e.target&&(e.hydrate?u.fragment.l((p=e.target,Array.from(p.childNodes))):u.fragment.c(),e.intro&&V(n.$$.fragment),nt(n,e.target,e.anchor),D()),R(l)}class ct{$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const it=["♥","♦","♣","♠"],at=[...Array(9).fill().map((t,n)=>n+1),"J","Q","K"];function st(t){const{length:n}=t;return t[Math.floor(Math.random()*n)]}function lt(){const t=st(it);return`${st(at)}${t}`}function dt(t){const n=function(t){const n=[];for(;n.length<t;){const t=lt();n.includes(t)||n.push(t)}return n}(t/2);let e=[...n].map(t=>({value:t,isFlipped:!0,isPaired:!1,id:Math.random()}));for(let t of n){const{length:n}=e,o=(r=n,Math.floor(Math.random()*r)),c={value:t,isFlipped:!0,isPaired:!1,id:Math.random()};e=[...e.slice(0,o),c,...e.slice(o)]}var r;return e}function ut(n){var e,r,o,c,i,a,s,l,d,u,f=n.card.value+"";return{c(){e=v("article"),r=v("div"),o=v("h1"),c=g(f),i=k(),a=v("div"),s=k(),l=v("button"),_(o,"color",n.card.value.includes("♥")||n.card.value.includes("♦")?"hsl(0, 70%, 50%)":"hsl(0, 50%, 5%)"),b(o,"class","svelte-1m66100"),b(r,"class","face front svelte-1m66100"),b(a,"class","face back svelte-1m66100"),l.disabled=d=n.card.isPaired,b(l,"aria-label","Flip card"),b(l,"class","svelte-1m66100"),b(e,"class","svelte-1m66100"),w(e,"flip",n.card.isFlipped&&!n.card.isPaired),w(e,"paired",n.card.isPaired),u=x(l,"click",n.flip)},m(t,n){$(t,e,n),m(e,r),m(r,o),m(o,c),m(e,i),m(e,a),m(e,s),m(e,l)},p(t,n){var r,i;t.card&&f!==(f=n.card.value+"")&&(i=""+(i=f),(r=c).data!==i&&(r.data=i)),t.card&&_(o,"color",n.card.value.includes("♥")||n.card.value.includes("♦")?"hsl(0, 70%, 50%)":"hsl(0, 50%, 5%)"),t.card&&d!==(d=n.card.isPaired)&&(l.disabled=d),t.card&&(w(e,"flip",n.card.isFlipped&&!n.card.isPaired),w(e,"paired",n.card.isPaired))},i:t,o:t,d(t){t&&y(e),u()}}}function ft(t,n,e){const r=S();let{card:o}=n;return t.$set=(t=>{"card"in t&&e("card",o=t.card)}),{card:o,flip:function(){r("flip",o)}}}class pt extends ct{constructor(t){super(),ot(this,t,ft,ut,i,["card"])}}function ht(t){const n=t-1;return n*n*n+1}function mt(t,{delay:n=0,duration:e=400,easing:r=ht,x:o=0,y:c=0,opacity:i=0}){const a=getComputedStyle(t),s=+a.opacity,l="none"===a.transform?"":a.transform,d=s*(1-i);return{delay:n,duration:e,easing:r,css:(t,n)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*o}px, ${(1-t)*c}px);\n\t\t\topacity: ${s-d*n}`}}function $t(n){var e,r,o,c,i,a,s,l,d,u,f;return{c(){e=v("div"),r=v("section"),(o=v("h1")).textContent="Congratulations",c=k(),(i=v("button")).textContent="Play Again",b(o,"class","svelte-1nxkdr7"),b(i,"class","svelte-1nxkdr7"),b(r,"class","svelte-1nxkdr7"),b(e,"class","svelte-1nxkdr7"),f=x(i,"click",n.click_handler)},m(t,n){$(t,e,n),m(e,r),m(r,o),m(r,c),m(r,i),u=!0},p:t,i(t){u||(B(()=>{s&&s.end(1),a||(a=Y(r,yt,{delay:1750})),a.start()}),B(()=>{d&&d.end(1),l||(l=Y(e,mt,{delay:1750})),l.start()}),u=!0)},o(t){a&&a.invalidate(),s=Z(r,yt,{}),l&&l.invalidate(),d=Z(e,mt,{delay:500}),u=!1},d(t){t&&(y(e),s&&s.end(),d&&d.end()),f()}}}function yt(t,{duration:n=450,delay:e=0}){return{duration:n,delay:e,css:t=>{return`\n                    transform: scale(${function(t){const n=1.70158;return--t*t*((n+1)*t+n)+1}(t)});\n                `}}}function vt(t){const n=S();return{dispatch:n,click_handler:()=>n("reset")}}class gt extends ct{constructor(t){super(),ot(this,t,vt,$t,i,[])}}function kt(t,n,e){const r=Object.create(t);return r.card=n[e],r}function xt(t){var n,e=new gt({});return e.$on("reset",t.handleReset),{c(){e.$$.fragment.c()},m(t,r){nt(e,t,r),n=!0},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function bt(t,n){var e,r,o=new pt({props:{card:n.card}});return o.$on("flip",n.handleFlip),{key:t,first:null,c(){e=g(""),o.$$.fragment.c(),this.first=e},m(t,n){$(t,e,n),nt(o,t,n),r=!0},p(t,n){var e={};t.deck&&(e.card=n.card),o.$set(e)},i(t){r||(V(o.$$.fragment,t),r=!0)},o(t){W(o.$$.fragment,t),r=!1},d(t){t&&y(e),et(o,t)}}}function _t(t){var n,e,r,o=[],c=new Map,i=t.victory&&xt(t);let a=t.deck;const s=t=>t.card.id;for(let n=0;n<a.length;n+=1){let e=kt(t,a,n),r=s(e);c.set(r,o[n]=bt(r,e))}return{c(){i&&i.c(),n=k(),e=v("main");for(let t=0;t<o.length;t+=1)o[t].c();b(e,"class","svelte-185gx00")},m(t,c){i&&i.m(t,c),$(t,n,c),$(t,e,c);for(let t=0;t<o.length;t+=1)o[t].m(e,null);r=!0},p(t,r){r.victory?i?V(i,1):((i=xt(r)).c(),V(i,1),i.m(n.parentNode,n)):i&&(H(),W(i,1,1,()=>{i=null}),U());const a=r.deck;H(),o=function(t,n,e,r,o,c,i,a,s,l,d,u){let f=t.length,p=c.length,h=f;const m={};for(;h--;)m[t[h].key]=h;const $=[],y=new Map,v=new Map;for(h=p;h--;){const t=u(o,c,h),a=e(t);let s=i.get(a);s?r&&s.p(n,t):(s=l(a,t)).c(),y.set(a,$[h]=s),a in m&&v.set(a,Math.abs(h-m[a]))}const g=new Set,k=new Set;function x(t){V(t,1),t.m(a,d),i.set(t.key,t),d=t.first,p--}for(;f&&p;){const n=$[p-1],e=t[f-1],r=n.key,o=e.key;n===e?(d=n.first,f--,p--):y.has(o)?!i.has(r)||g.has(r)?x(n):k.has(o)?f--:v.get(r)>v.get(o)?(k.add(r),x(n)):(g.add(o),f--):(s(e,i),f--)}for(;f--;){const n=t[f];y.has(n.key)||s(n,i)}for(;p;)x($[p-1]);return $}(o,t,s,1,r,a,c,e,tt,bt,null,kt),U()},i(t){if(!r){V(i);for(let t=0;t<a.length;t+=1)V(o[t]);r=!0}},o(t){W(i);for(let t=0;t<o.length;t+=1)W(o[t]);r=!1},d(t){i&&i.d(t),t&&(y(n),y(e));for(let t=0;t<o.length;t+=1)o[t].d()}}}const wt=16;function Pt(t,n,e){let r,o=dt(wt);return{deck:o,victory:r,handleFlip:function(t){const n=t.detail,c=o.findIndex(({id:t})=>t===n.id);e("deck",o[c].isFlipped=!o[c].isFlipped,o);const i=o.filter(({isFlipped:t,isPaired:n})=>!t&&!n);if(i.length>2)o.forEach(t=>{t.id!==n.id&&(t.isFlipped=!0)});else if(2===i.length){const[t,n]=i,r=o.findIndex(({id:n})=>n===t.id),c=o.findIndex(({id:t})=>t===n.id);t.value===n.value&&(e("deck",o[r].isPaired=!0,o),e("deck",o[c].isPaired=!0,o))}o.every(t=>t.isPaired)&&e("victory",r=!0)},handleReset:function(){e("victory",r=null),e("deck",o=dt(wt))}}}return new class extends ct{constructor(t){super(),ot(this,t,Pt,_t,i,[])}}({target:document.body})}();