import{p as x,H as Y,r as O,ac as Ce,h as ce,w as D,ad as oe,i as we,K as Z,b as v,L as E,s as P,o as Re,J as de,e as h,O as $e,I as Pe,ae as Be,af as Ve,g as B,ag as ke,T as G,D as J,C as Te,ah as Le,d as Ne,c as y,l as ve,S as fe,a3 as Ee,R as Oe,X as ie,Y as Ae,F as He,_ as We,E as Q,ai as A,aj as me,ak as re,A as je,W as De,m as Me,a as Fe,al as qe,t as Ke,am as Ue,an as Xe}from"./index-efdb3fb0.js";const ee=x({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function te(e){const a=Y("useRender");a.render=e}function Ye(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const s=O(),t=O();if(Ce){const i=new ResizeObserver(r=>{e==null||e(r,i),r.length&&(a==="content"?t.value=r[0].contentRect:t.value=r[0].target.getBoundingClientRect())});ce(()=>{i.disconnect()}),D(s,(r,n)=>{n&&(i.unobserve(oe(n)),t.value=void 0),r&&i.observe(oe(r))},{flush:"post"})}return{resizeRef:s,contentRect:we(t)}}const M=Symbol.for("vuetify:layout"),ge=Symbol.for("vuetify:layout-item"),le=1e3,gt=x({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),yt=x({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ht(){const e=Z(M);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function St(e){const a=Z(M);if(!a)throw new Error("[Vuetify] Could not find injected layout");const s=e.id??`layout-item-${Pe()}`,t=Y("useLayoutItem");de(ge,{id:s});const i=P(!1);Be(()=>i.value=!0),Ve(()=>i.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:n}=a.register(t,{...e,active:v(()=>i.value?!1:e.active.value),id:s});return ce(()=>a.unregister(s)),{layoutItemStyles:r,layoutRect:a.layoutRect,layoutItemScrimStyles:n}}const Ze=(e,a,s,t)=>{let i={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...i}}];for(const n of e){const o=a.get(n),f=s.get(n),c=t.get(n);if(!o||!f||!c)continue;const m={...i,[o.value]:parseInt(i[o.value],10)+(c.value?parseInt(f.value,10):0)};r.push({id:n,layer:m}),i=m}return r};function bt(e){const a=Z(M,null),s=v(()=>a?a.rootZIndex.value-100:le),t=O([]),i=E(new Map),r=E(new Map),n=E(new Map),o=E(new Map),f=E(new Map),{resizeRef:c,contentRect:m}=Ye(),S=v(()=>{const g=new Map,p=e.overlaps??[];for(const l of p.filter(u=>u.includes(":"))){const[u,d]=l.split(":");if(!t.value.includes(u)||!t.value.includes(d))continue;const _=i.get(u),C=i.get(d),T=r.get(u),L=r.get(d);!_||!C||!T||!L||(g.set(d,{position:_.value,amount:parseInt(T.value,10)}),g.set(u,{position:C.value,amount:-parseInt(L.value,10)}))}return g}),b=v(()=>{const g=[...new Set([...n.values()].map(l=>l.value))].sort((l,u)=>l-u),p=[];for(const l of g){const u=t.value.filter(d=>{var _;return((_=n.get(d))==null?void 0:_.value)===l});p.push(...u)}return Ze(p,i,r,o)}),R=v(()=>!Array.from(f.values()).some(g=>g.value)),$=v(()=>b.value[b.value.length-1].layer),H=v(()=>({"--v-layout-left":h($.value.left),"--v-layout-right":h($.value.right),"--v-layout-top":h($.value.top),"--v-layout-bottom":h($.value.bottom),...R.value?void 0:{transition:"none"}})),z=v(()=>b.value.slice(1).map((g,p)=>{let{id:l}=g;const{layer:u}=b.value[p],d=r.get(l),_=i.get(l);return{id:l,...u,size:Number(d.value),position:_.value}})),V=g=>z.value.find(p=>p.id===g),k=Y("createLayout"),W=P(!1);Re(()=>{W.value=!0}),de(M,{register:(g,p)=>{let{id:l,order:u,position:d,layoutSize:_,elementSize:C,active:T,disableTransitions:L,absolute:xe}=p;n.set(l,u),i.set(l,d),r.set(l,_),o.set(l,T),L&&f.set(l,L);const ne=$e(ge,k==null?void 0:k.vnode).indexOf(g);ne>-1?t.value.splice(ne,0,l):t.value.push(l);const se=v(()=>z.value.findIndex(N=>N.id===l)),K=v(()=>s.value+b.value.length*2-se.value*2),Ie=v(()=>{const N=d.value==="left"||d.value==="right",U=d.value==="right",ze=d.value==="bottom",ae={[d.value]:0,zIndex:K.value,transform:`translate${N?"X":"Y"}(${(T.value?0:-110)*(U||ze?-1:1)}%)`,position:xe.value||s.value!==le?"absolute":"fixed",...R.value?void 0:{transition:"none"}};if(!W.value)return ae;const w=z.value[se.value];if(!w)throw new Error(`[Vuetify] Could not find layout item "${l}"`);const X=S.value.get(l);return X&&(w[X.position]+=X.amount),{...ae,height:N?`calc(100% - ${w.top}px - ${w.bottom}px)`:C.value?`${C.value}px`:void 0,left:U?void 0:`${w.left}px`,right:U?`${w.right}px`:void 0,top:d.value!=="bottom"?`${w.top}px`:void 0,bottom:d.value!=="top"?`${w.bottom}px`:void 0,width:N?C.value?`${C.value}px`:void 0:`calc(100% - ${w.left}px - ${w.right}px)`}}),_e=v(()=>({zIndex:K.value-1}));return{layoutItemStyles:Ie,layoutItemScrimStyles:_e,zIndex:K}},unregister:g=>{n.delete(g),i.delete(g),r.delete(g),o.delete(g),f.delete(g),t.value=t.value.filter(p=>p!==g)},mainRect:$,mainStyles:H,getLayoutItem:V,items:z,layoutRect:m,rootZIndex:s});const F=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),q=v(()=>({zIndex:s.value,position:a?"relative":void 0,overflow:a?"hidden":void 0}));return{layoutClasses:F,layoutStyles:q,getLayoutItem:V,items:z,layoutRect:m,layoutRef:c}}const Ge=x({tag:{type:String,default:"div"}},"tag"),Je=x({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function I(e,a,s){return B()({name:e,props:Je({mode:s,origin:a}),setup(t,i){let{slots:r}=i;const n={onBeforeEnter(o){t.origin&&(o.style.transformOrigin=t.origin)},onLeave(o){if(t.leaveAbsolute){const{offsetTop:f,offsetLeft:c,offsetWidth:m,offsetHeight:S}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${f}px`,o.style.left=`${c}px`,o.style.width=`${m}px`,o.style.height=`${S}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:f,top:c,left:m,width:S,height:b}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=f||"",o.style.top=c||"",o.style.left=m||"",o.style.width=S||"",o.style.height=b||""}}};return()=>{const o=t.group?ke:G;return J(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:n},r.default)}}})}function ye(e,a){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return B()({name:e,props:{mode:{type:String,default:s},disabled:Boolean},setup(t,i){let{slots:r}=i;return()=>J(G,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},r.default)}})}function he(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const s=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Te(`offset-${s}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[s]:n.style[s]}},onEnter(n){const o=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const f=`${n[t]}px`;n.style[s]="0",n.offsetHeight,n.style.transition=o.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[s]=f})},onAfterEnter:r,onEnterCancelled:r,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[s]:n.style[s]},n.style.overflow="hidden",n.style[s]=`${n[t]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[s]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(n){e&&n._parent&&n._parent.classList.remove(e),r(n)}function r(n){const o=n._initialStyle[s];n.style.overflow=n._initialStyle.overflow,o!=null&&(n.style[s]=o),delete n._initialStyle}}I("fab-transition","center center","out-in");I("dialog-bottom-transition");I("dialog-top-transition");I("fade-transition");I("scale-transition");I("scroll-x-transition");I("scroll-x-reverse-transition");const pt=I("scroll-y-transition");I("scroll-y-reverse-transition");I("slide-x-transition");I("slide-x-reverse-transition");const xt=I("slide-y-transition");I("slide-y-reverse-transition");const It=ye("expand-transition",he()),_t=ye("expand-x-transition",he("",!0)),Qe=x({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),zt=B(!1)({name:"VDefaultsProvider",props:Qe(),setup(e,a){let{slots:s}=a;const{defaults:t,disabled:i,reset:r,root:n,scoped:o}=Le(e);return Ne(t,{reset:r,root:n,scoped:o,disabled:i}),()=>{var f;return(f=s.default)==null?void 0:f.call(s)}}});const et=x({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function tt(e){return{dimensionStyles:v(()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)}))}}function nt(e){return{aspectStyles:v(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const Se=x({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...ee(),...et()},"VResponsive"),ue=B()({name:"VResponsive",props:Se(),setup(e,a){let{slots:s}=a;const{aspectStyles:t}=nt(e),{dimensionStyles:i}=tt(e);return te(()=>{var r;return y("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[y("div",{class:"v-responsive__sizer",style:t.value},null),(r=s.additional)==null?void 0:r.call(s),s.default&&y("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),st=x({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),j=(e,a)=>{let{slots:s}=a;const{transition:t,disabled:i,...r}=e,{component:n=G,...o}=typeof t=="object"?t:{};return J(n,ve(typeof t=="string"?{name:i?"":t}:o,r,{disabled:i}),s)};function at(e,a){if(!fe)return;const s=a.modifiers||{},t=a.value,{handler:i,options:r}=typeof t=="object"?t:{handler:t,options:{}},n=new IntersectionObserver(function(){var S;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const c=(S=e._observe)==null?void 0:S[a.instance.$.uid];if(!c)return;const m=o.some(b=>b.isIntersecting);i&&(!s.quiet||c.init)&&(!s.once||m||c.init)&&i(m,o,f),m&&s.once?be(e,a):c.init=!0},r);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:n},n.observe(e)}function be(e,a){var t;const s=(t=e._observe)==null?void 0:t[a.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const ot={mounted:at,unmounted:be},it=ot,rt=x({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...Se(),...ee(),...st()},"VImg"),Ct=B()({name:"VImg",directives:{intersect:it},props:rt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:s,slots:t}=a;const i=P(""),r=O(),n=P(e.eager?"loading":"idle"),o=P(),f=P(),c=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=v(()=>c.value.aspect||o.value/f.value||0);D(()=>e.src,()=>{S(n.value!=="idle")}),D(m,(l,u)=>{!l&&u&&r.value&&z(r.value)}),Ee(()=>S());function S(l){if(!(e.eager&&l)&&!(fe&&!l&&!e.eager)){if(n.value="loading",c.value.lazySrc){const u=new Image;u.src=c.value.lazySrc,z(u,null)}c.value.src&&Oe(()=>{var u,d;if(s("loadstart",((u=r.value)==null?void 0:u.currentSrc)||c.value.src),(d=r.value)!=null&&d.complete){if(r.value.naturalWidth||R(),n.value==="error")return;m.value||z(r.value,null),b()}else m.value||z(r.value),$()})}}function b(){var l;$(),n.value="loaded",s("load",((l=r.value)==null?void 0:l.currentSrc)||c.value.src)}function R(){var l;n.value="error",s("error",((l=r.value)==null?void 0:l.currentSrc)||c.value.src)}function $(){const l=r.value;l&&(i.value=l.currentSrc||l.src)}let H=-1;function z(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{clearTimeout(H);const{naturalHeight:_,naturalWidth:C}=l;_||C?(o.value=C,f.value=_):!l.complete&&n.value==="loading"&&u!=null?H=window.setTimeout(d,u):(l.currentSrc.endsWith(".svg")||l.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,f.value=1)};d()}const V=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),k=()=>{var d;if(!c.value.src||n.value==="idle")return null;const l=y("img",{class:["v-img__img",V.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:b,onError:R},null),u=(d=t.sources)==null?void 0:d.call(t);return y(j,{transition:e.transition,appear:!0},{default:()=>[ie(u?y("picture",{class:"v-img__picture"},[u,l]):l,[[We,n.value==="loaded"]])]})},W=()=>y(j,{transition:e.transition},{default:()=>[c.value.lazySrc&&n.value!=="loaded"&&y("img",{class:["v-img__img","v-img__img--preload",V.value],src:c.value.lazySrc,alt:e.alt},null)]}),F=()=>t.placeholder?y(j,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!t.error)&&y("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,q=()=>t.error?y(j,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&y("div",{class:"v-img__error"},[t.error()])]}):null,g=()=>e.gradient?y("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,p=P(!1);{const l=D(m,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{p.value=!0})}),l())})}return te(()=>{const[l]=ue.filterProps(e);return ie(y(ue,ve({class:["v-img",{"v-img--booting":!p.value},e.class],style:[{width:h(e.width==="auto"?o.value:e.width)},e.style]},l,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>y(He,null,[y(k,null,null),y(W,null,null),y(g,null,null),y(F,null,null),y(q,null,null)]),default:t.default}),[[Ae("intersect"),{handler:S,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:r,state:n,naturalWidth:o,naturalHeight:f}}}),wt=x({border:[Boolean,Number,String]},"border");function Rt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Q();return{borderClasses:v(()=>{const t=A(e)?e.value:e.border,i=[];if(t===!0||t==="")i.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))i.push(`border-${r}`);return i})}}function pe(e){return me(()=>{const a=[],s={};return e.value.background&&(re(e.value.background)?s.backgroundColor=e.value.background:a.push(`bg-${e.value.background}`)),e.value.text&&(re(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:s}})}function lt(e,a){const s=v(()=>({text:A(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:i}=pe(s);return{textColorClasses:t,textColorStyles:i}}function $t(e,a){const s=v(()=>({background:A(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:i}=pe(s);return{backgroundColorClasses:t,backgroundColorStyles:i}}const Pt=x({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function Bt(e){return{elevationClasses:v(()=>{const s=A(e)?e.value:e.elevation,t=[];return s==null||t.push(`elevation-${s}`),t})}}const Vt=x({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function kt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Q();return{roundedClasses:v(()=>{const t=A(e)?e.value:e.rounded,i=[];if(t===!0||t==="")i.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))i.push(`rounded-${r}`);return i})}}const ut=["x-small","small","default","large","x-large"],ct=x({size:{type:[String,Number],default:"default"}},"size");function dt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Q();return me(()=>{let s,t;return je(ut,e.size)?s=`${a}--size-${e.size}`:e.size&&(t={width:h(e.size),height:h(e.size)}),{sizeClasses:s,sizeStyles:t}})}const vt=x({color:String,start:Boolean,end:Boolean,icon:De,...ee(),...ct(),...Ge({tag:"i"}),...Me()},"VIcon"),Tt=B()({name:"VIcon",props:vt(),setup(e,a){let{attrs:s,slots:t}=a;const i=O(),{themeClasses:r}=Fe(e),{iconData:n}=qe(v(()=>i.value||e.icon)),{sizeClasses:o}=dt(e),{textColorClasses:f,textColorStyles:c}=lt(Ke(e,"color"));return te(()=>{var S,b;const m=(S=t.default)==null?void 0:S.call(t);return m&&(i.value=(b=Ue(m).filter(R=>R.type===Xe&&R.children&&typeof R.children=="string")[0])==null?void 0:b.children),y(n.value.component,{tag:e.tag,icon:n.value.icon,class:["v-icon","notranslate",r.value,o.value,f.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},c.value,e.style],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>[m]})}),{}}});export{xt as A,_t as B,pt as C,it as I,j as M,Ct as V,Ge as a,wt as b,Pt as c,Vt as d,$t as e,Rt as f,Bt as g,kt as h,zt as i,It as j,yt as k,St as l,ee as m,Tt as n,ht as o,gt as p,bt as q,pe as r,ct as s,dt as t,te as u,lt as v,Ye as w,et as x,tt as y,st as z};
