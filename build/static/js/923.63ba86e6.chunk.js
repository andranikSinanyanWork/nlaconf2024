/*! For license information please see 923.63ba86e6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkionic_react_conference_app=self.webpackChunkionic_react_conference_app||[]).push([[923],{923:(t,e,o)=>{o.r(e),o.d(e,{iosTransitionAnimation:()=>f,shadow:()=>l});var n=o(507),r=o(903);const a=t=>document.querySelector(`${t}.ion-cloned-element`),l=t=>t.shadowRoot||t,s=t=>{const e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){const t=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=t?t.querySelector(o):null}return t.querySelector(o)},i=(t,e)=>{const o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs");let n=[];if(null!=o){const t=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(n=t.querySelectorAll("ion-buttons"))}else n=t.querySelectorAll("ion-buttons");for(const r of n){const t=r.closest("ion-header"),o=t&&!t.classList.contains("header-collapse-condense-inactive"),n=r.querySelector("ion-back-button"),a=r.classList.contains("buttons-collapse"),l="start"===r.slot||""===r.slot;if(null!==n&&l&&(a&&o&&e||!a))return n}return null},c=(t,e,o,r,s,i,c,d,f)=>{var y,p;const u=e?`calc(100% - ${s.right+4}px)`:s.left-4+"px",b=e?"right":"left",g=e?"left":"right",S=e?"right":"left",h=(null===(y=i.textContent)||void 0===y?void 0:y.trim())===(null===(p=d.textContent)||void 0===p?void 0:p.trim()),$=f.width/c.width,q=(f.height-m)/c.height,T=h?`scale(${$}, ${q})`:`scale(${q})`,x="scale(1)",X=l(r).querySelector("ion-icon").getBoundingClientRect(),v=e?X.width/2-(X.right-s.right)+"px":s.left-X.width/2+"px",E=e?`-${window.innerWidth-s.right}px`:`${s.left}px`,A=`${f.top}px`,C=`${s.top}px`,w=o?[{offset:0,transform:`translate3d(${E}, ${C}, 0)`},{offset:1,transform:`translate3d(${v}, ${A}, 0)`}]:[{offset:0,transform:`translate3d(${v}, ${A}, 0)`},{offset:1,transform:`translate3d(${E}, ${C}, 0)`}],k=o?[{offset:0,opacity:1,transform:x},{offset:1,opacity:0,transform:T}]:[{offset:0,opacity:0,transform:T},{offset:1,opacity:1,transform:x}],B=o?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],P=(0,n.c)(),R=(0,n.c)(),L=(0,n.c)(),W=a("ion-back-button"),_=l(W).querySelector(".button-text"),N=l(W).querySelector("ion-icon");W.text=r.text,W.mode=r.mode,W.icon=r.icon,W.color=r.color,W.disabled=r.disabled,W.style.setProperty("display","block"),W.style.setProperty("position","fixed"),R.addElement(N),P.addElement(_),L.addElement(W),L.beforeStyles({position:"absolute",top:"0px",[S]:"0px"}).keyframes(w),P.beforeStyles({"transform-origin":`${b} top`}).beforeAddWrite((()=>{r.style.setProperty("display","none"),W.style.setProperty(b,u)})).afterAddWrite((()=>{r.style.setProperty("display",""),W.style.setProperty("display","none"),W.style.removeProperty(b)})).keyframes(k),R.beforeStyles({"transform-origin":`${g} center`}).keyframes(B),t.addAnimation([P,R,L])},d=(t,e,o,r,l,s,i,c)=>{var d,f;const y=e?"right":"left",p=e?`calc(100% - ${l.right}px)`:`${l.left}px`,u=`${l.top}px`,b=e?`-${window.innerWidth-c.right-8}px`:c.x-8+"px",g=c.y-2+"px",S=(null===(d=i.textContent)||void 0===d?void 0:d.trim())===(null===(f=r.textContent)||void 0===f?void 0:f.trim()),h=c.width/s.width,$=c.height/(s.height-m),q="scale(1)",T=S?`scale(${h}, ${$})`:`scale(${$})`,x=o?[{offset:0,opacity:0,transform:`translate3d(${b}, ${g}, 0) ${T}`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0px, ${u}, 0) ${q}`}]:[{offset:0,opacity:.99,transform:`translate3d(0px, ${u}, 0) ${q}`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${b}, ${g}, 0) ${T}`}],X=a("ion-title"),v=(0,n.c)();X.innerText=r.innerText,X.size=r.size,X.color=r.color,v.addElement(X),v.beforeStyles({"transform-origin":`${y} top`,height:`${l.height}px`,display:"",position:"relative",[y]:p}).beforeAddWrite((()=>{r.style.setProperty("opacity","0")})).afterAddWrite((()=>{r.style.setProperty("opacity",""),X.style.setProperty("display","none")})).keyframes(x),t.addAnimation(v)},f=(t,e)=>{var o;try{const a="cubic-bezier(0.32,0.72,0,1)",f="opacity",m="transform",y="0%",p=.8,u="rtl"===t.ownerDocument.dir,b=u?"-99.5%":"99.5%",g=u?"33%":"-33%",S=e.enteringEl,h=e.leavingEl,$="back"===e.direction,q=S.querySelector(":scope > ion-content"),T=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),x=S.querySelectorAll(":scope > ion-header > ion-toolbar"),X=(0,n.c)(),v=(0,n.c)();if(X.addElement(S).duration((null!==(o=e.duration)&&void 0!==o?o:0)||540).easing(e.easing||a).fill("both").beforeRemoveClass("ion-page-invisible"),h&&null!==t&&void 0!==t){const e=(0,n.c)();e.addElement(t),X.addAnimation(e)}if(q||0!==x.length||0!==T.length?(v.addElement(q),v.addElement(T)):v.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),X.addAnimation(v),$?v.beforeClearStyles([f]).fromTo("transform",`translateX(${g})`,`translateX(${y})`).fromTo(f,p,1):v.beforeClearStyles([f]).fromTo("transform",`translateX(${b})`,`translateX(${y})`),q){const t=l(q).querySelector(".transition-effect");if(t){const e=t.querySelector(".transition-cover"),o=t.querySelector(".transition-shadow"),r=(0,n.c)(),a=(0,n.c)(),l=(0,n.c)();r.addElement(t).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),a.addElement(e).beforeClearStyles([f]).fromTo(f,0,.1),l.addElement(o).beforeClearStyles([f]).fromTo(f,.03,.7),r.addAnimation([a,l]),v.addAnimation([r])}}const E=S.querySelector("ion-header.header-collapse-condense"),{forward:A,backward:C}=((t,e,o,n,r)=>{const a=i(n,o),f=s(r),m=s(n),y=i(r,o),p=null!==a&&null!==f&&!o,u=null!==m&&null!==y&&o;if(p){const n=f.getBoundingClientRect(),r=a.getBoundingClientRect(),s=l(a).querySelector(".button-text"),i=s.getBoundingClientRect(),m=l(f).querySelector(".toolbar-title").getBoundingClientRect();d(t,e,o,f,n,m,s,i),c(t,e,o,a,r,s,i,f,m)}else if(u){const n=m.getBoundingClientRect(),r=y.getBoundingClientRect(),a=l(y).querySelector(".button-text"),s=a.getBoundingClientRect(),i=l(m).querySelector(".toolbar-title").getBoundingClientRect();d(t,e,o,m,n,i,a,s),c(t,e,o,y,r,a,s,m,i)}return{forward:p,backward:u}})(X,u,$,S,h);if(x.forEach((t=>{const e=(0,n.c)();e.addElement(t),X.addAnimation(e);const o=(0,n.c)();o.addElement(t.querySelector("ion-title"));const r=(0,n.c)(),a=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),s=t.closest("ion-header"),i=null===s||void 0===s?void 0:s.classList.contains("header-collapse-condense-inactive");let c;c=$?a.filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!i||!e})):a.filter((t=>!t.classList.contains("buttons-collapse"))),r.addElement(c);const d=(0,n.c)();d.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const m=(0,n.c)();m.addElement(l(t).querySelector(".toolbar-background"));const p=(0,n.c)(),S=t.querySelector("ion-back-button");if(S&&p.addElement(S),e.addAnimation([o,r,d,m,p]),r.fromTo(f,.01,1),d.fromTo(f,.01,1),$)i||o.fromTo("transform",`translateX(${g})`,`translateX(${y})`).fromTo(f,.01,1),d.fromTo("transform",`translateX(${g})`,`translateX(${y})`),p.fromTo(f,.01,1);else{E||o.fromTo("transform",`translateX(${b})`,`translateX(${y})`).fromTo(f,.01,1),d.fromTo("transform",`translateX(${b})`,`translateX(${y})`),m.beforeClearStyles([f,"transform"]);if((null===s||void 0===s?void 0:s.translucent)?m.fromTo("transform",u?"translateX(-100%)":"translateX(100%)","translateX(0px)"):m.fromTo(f,.01,"var(--opacity)"),A||p.fromTo(f,.01,1),S&&!A){const t=(0,n.c)();t.addElement(l(S).querySelector(".button-text")).fromTo("transform",u?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(t)}}})),h){const t=(0,n.c)(),e=h.querySelector(":scope > ion-content"),o=h.querySelectorAll(":scope > ion-header > ion-toolbar"),a=h.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(e||0!==o.length||0!==a.length?(t.addElement(e),t.addElement(a)):t.addElement(h.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),X.addAnimation(t),$){t.beforeClearStyles([f]).fromTo("transform",`translateX(${y})`,u?"translateX(-100%)":"translateX(100%)");const e=(0,r.g)(h);X.afterAddWrite((()=>{"normal"===X.getDirection()&&e.style.setProperty("display","none")}))}else t.fromTo("transform",`translateX(${y})`,`translateX(${g})`).fromTo(f,1,p);if(e){const o=l(e).querySelector(".transition-effect");if(o){const e=o.querySelector(".transition-cover"),r=o.querySelector(".transition-shadow"),a=(0,n.c)(),l=(0,n.c)(),s=(0,n.c)();a.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),l.addElement(e).beforeClearStyles([f]).fromTo(f,.1,0),s.addElement(r).beforeClearStyles([f]).fromTo(f,.7,.03),a.addAnimation([l,s]),t.addAnimation([a])}}o.forEach((t=>{const e=(0,n.c)();e.addElement(t);const o=(0,n.c)();o.addElement(t.querySelector("ion-title"));const r=(0,n.c)(),a=t.querySelectorAll("ion-buttons,[menuToggle]"),s=t.closest("ion-header"),i=null===s||void 0===s?void 0:s.classList.contains("header-collapse-condense-inactive"),c=Array.from(a).filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!i||!e}));r.addElement(c);const d=(0,n.c)(),p=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");p.length>0&&d.addElement(p);const b=(0,n.c)();b.addElement(l(t).querySelector(".toolbar-background"));const S=(0,n.c)(),h=t.querySelector("ion-back-button");if(h&&S.addElement(h),e.addAnimation([o,r,d,S,b]),X.addAnimation(e),S.fromTo(f,.99,0),r.fromTo(f,.99,0),d.fromTo(f,.99,0),$){i||o.fromTo("transform",`translateX(${y})`,u?"translateX(-100%)":"translateX(100%)").fromTo(f,.99,0),d.fromTo("transform",`translateX(${y})`,u?"translateX(-100%)":"translateX(100%)"),b.beforeClearStyles([f,"transform"]);if((null===s||void 0===s?void 0:s.translucent)?b.fromTo("transform","translateX(0px)",u?"translateX(-100%)":"translateX(100%)"):b.fromTo(f,"var(--opacity)",0),h&&!C){const t=(0,n.c)();t.addElement(l(h).querySelector(".button-text")).fromTo("transform",`translateX(${y})`,`translateX(${(u?-124:124)+"px"})`),e.addAnimation(t)}}else i||o.fromTo("transform",`translateX(${y})`,`translateX(${g})`).fromTo(f,.99,0).afterClearStyles([m,f]),d.fromTo("transform",`translateX(${y})`,`translateX(${g})`).afterClearStyles([m,f]),S.afterClearStyles([f]),o.afterClearStyles([f]),r.afterClearStyles([f])}))}return X}catch(a){throw a}},m=10}}]);
//# sourceMappingURL=923.63ba86e6.chunk.js.map