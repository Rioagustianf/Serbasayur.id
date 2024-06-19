(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();var ms=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"},Ft=Pi,ul=As,hl=gl,pl=Ci,fl=Ti,ml=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function As(t){for(var n=[],r=0,a=0,o="",c;(c=ml.exec(t))!=null;){var h=c[0],p=c[1],m=c.index;if(o+=t.slice(a,m),a=m+h.length,p){o+=p[1];continue}o&&(n.push(o),o="");var v=c[2],y=c[3],k=c[4],S=c[5],P=c[6],N=c[7],J=P==="+"||P==="*",V=P==="?"||P==="*",z=v||"/",G=k||S||(N?".*":"[^"+z+"]+?");n.push({name:y||r++,prefix:v||"",delimiter:z,optional:V,repeat:J,pattern:vl(G)})}return a<t.length&&(o+=t.substr(a)),o&&n.push(o),n}function gl(t){return Ci(As(t))}function Ci(t){for(var n=new Array(t.length),r=0;r<t.length;r++)typeof t[r]=="object"&&(n[r]=new RegExp("^"+t[r].pattern+"$"));return function(a){for(var o="",c=a||{},h=0;h<t.length;h++){var p=t[h];if(typeof p=="string"){o+=p;continue}var m=c[p.name],v;if(m==null){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to be defined')}if(ms(m)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but received "'+m+'"');if(m.length===0){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var y=0;y<m.length;y++){if(v=encodeURIComponent(m[y]),!n[h].test(v))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'", but received "'+v+'"');o+=(y===0?p.prefix:p.delimiter)+v}continue}if(v=encodeURIComponent(m),!n[h].test(v))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but received "'+v+'"');o+=p.prefix+v}return o}}function ui(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function vl(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function Is(t,n){return t.keys=n,t}function Li(t){return t.sensitive?"":"i"}function bl(t,n){var r=t.source.match(/\((?!\?)/g);if(r)for(var a=0;a<r.length;a++)n.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return Is(t,n)}function yl(t,n,r){for(var a=[],o=0;o<t.length;o++)a.push(Pi(t[o],n,r).source);var c=new RegExp("(?:"+a.join("|")+")",Li(r));return Is(c,n)}function _l(t,n,r){for(var a=As(t),o=Ti(a,r),c=0;c<a.length;c++)typeof a[c]!="string"&&n.push(a[c]);return Is(o,n)}function Ti(t,n){n=n||{};for(var r=n.strict,a=n.end!==!1,o="",c=t[t.length-1],h=typeof c=="string"&&/\/$/.test(c),p=0;p<t.length;p++){var m=t[p];if(typeof m=="string")o+=ui(m);else{var v=ui(m.prefix),y=m.pattern;m.repeat&&(y+="(?:"+v+y+")*"),m.optional?v?y="(?:"+v+"("+y+"))?":y="("+y+")?":y=v+"("+y+")",o+=y}}return r||(o=(h?o.slice(0,-2):o)+"(?:\\/(?=$))?"),a?o+="$":o+=r&&h?"":"(?=\\/|$)",new RegExp("^"+o,Li(n))}function Pi(t,n,r){return n=n||[],ms(n)?r||(r={}):(r=n,n=[]),t instanceof RegExp?bl(t,n):ms(t)?yl(t,n,r):_l(t,n,r)}Ft.parse=ul;Ft.compile=hl;Ft.tokensToFunction=pl;Ft.tokensToRegExp=fl;var wt=typeof document<"u",ye=typeof window<"u",wn=typeof history<"u",wl=typeof process<"u",gs=wt&&document.ontouchstart?"touchstart":"click",De=ye&&!!(window.history.location||window.location);function Y(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}Y.prototype.configure=function(t){var n=t||{};this._window=n.window||ye&&window,this._decodeURLComponents=n.decodeURLComponents!==!1,this._popstate=n.popstate!==!1&&ye,this._click=n.click!==!1&&wt,this._hashbang=!!n.hashbang;var r=this._window;this._popstate?r.addEventListener("popstate",this._onpopstate,!1):ye&&r.removeEventListener("popstate",this._onpopstate,!1),this._click?r.document.addEventListener(gs,this.clickHandler,!1):wt&&r.document.removeEventListener(gs,this.clickHandler,!1),this._hashbang&&ye&&!wn?r.addEventListener("hashchange",this._onpopstate,!1):ye&&r.removeEventListener("hashchange",this._onpopstate,!1)};Y.prototype.base=function(t){if(arguments.length===0)return this._base;this._base=t};Y.prototype._getBase=function(){var t=this._base;if(t)return t;var n=ye&&this._window&&this._window.location;return ye&&this._hashbang&&n&&n.protocol==="file:"&&(t=n.pathname),t};Y.prototype.strict=function(t){if(arguments.length===0)return this._strict;this._strict=t};Y.prototype.start=function(t){var n=t||{};if(this.configure(n),n.dispatch!==!1){this._running=!0;var r;if(De){var a=this._window,o=a.location;this._hashbang&&~o.hash.indexOf("#!")?r=o.hash.substr(2)+o.search:this._hashbang?r=o.search+o.hash:r=o.pathname+o.search+o.hash}this.replace(r,null,!0,n.dispatch)}};Y.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(gs,this.clickHandler,!1),ye&&t.removeEventListener("popstate",this._onpopstate,!1),ye&&t.removeEventListener("hashchange",this._onpopstate,!1)}};Y.prototype.show=function(t,n,r,a){var o=new Ht(t,n,this),c=this.prevContext;return this.prevContext=o,this.current=o.path,r!==!1&&this.dispatch(o,c),o.handled!==!1&&a!==!1&&o.pushState(),o};Y.prototype.back=function(t,n){var r=this;if(this.len>0){var a=this._window;wn&&a.history.back(),this.len--}else setTimeout(t?function(){r.show(t,n)}:function(){r.show(r._getBase(),n)})};Y.prototype.redirect=function(t,n){var r=this;typeof t=="string"&&typeof n=="string"&&kn.call(this,t,function(a){setTimeout(function(){r.replace(n)},0)}),typeof t=="string"&&typeof n>"u"&&setTimeout(function(){r.replace(t)},0)};Y.prototype.replace=function(t,n,r,a){var o=new Ht(t,n,this),c=this.prevContext;return this.prevContext=o,this.current=o.path,o.init=r,o.save(),a!==!1&&this.dispatch(o,c),o};Y.prototype.dispatch=function(t,n){var r=0,a=0,o=this;function c(){var p=o.exits[a++];if(!p)return h();p(n,c)}function h(){var p=o.callbacks[r++];if(t.path!==o.current){t.handled=!1;return}if(!p)return kl.call(o,t);p(t,h)}n?c():h()};Y.prototype.exit=function(t,n){if(typeof t=="function")return this.exit("*",t);for(var r=new qt(t,null,this),a=1;a<arguments.length;++a)this.exits.push(r.middleware(arguments[a]))};Y.prototype.clickHandler=function(t){if(this._which(t)===1&&!(t.metaKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented){var n=t.target,r=t.path||(t.composedPath?t.composedPath():null);if(r){for(var a=0;a<r.length;a++)if(r[a].nodeName&&r[a].nodeName.toUpperCase()==="A"&&r[a].href){n=r[a];break}}for(;n&&n.nodeName.toUpperCase()!=="A";)n=n.parentNode;if(!(!n||n.nodeName.toUpperCase()!=="A")){var o=typeof n.href=="object"&&n.href.constructor.name==="SVGAnimatedString";if(!(n.hasAttribute("download")||n.getAttribute("rel")==="external")){var c=n.getAttribute("href");if(!(!this._hashbang&&this._samePath(n)&&(n.hash||c==="#"))&&!(c&&c.indexOf("mailto:")>-1)&&!(o?n.target.baseVal:n.target)&&!(!o&&!this.sameOrigin(n.href))){var h=o?n.href.baseVal:n.pathname+n.search+(n.hash||"");h=h[0]!=="/"?"/"+h:h,wl&&h.match(/^\/[a-zA-Z]:\//)&&(h=h.replace(/^\/[a-zA-Z]:\//,"/"));var p=h,m=this._getBase();h.indexOf(m)===0&&(h=h.substr(m.length)),this._hashbang&&(h=h.replace("#!","")),!(m&&p===h&&(!De||this._window.location.protocol!=="file:"))&&(t.preventDefault(),this.show(p))}}}}};Y.prototype._onpopstate=function(){var t=!1;return ye?(wt&&document.readyState==="complete"?t=!0:window.addEventListener("load",function(){setTimeout(function(){t=!0},0)}),function(r){if(t){var a=this;if(r.state){var o=r.state.path;a.replace(o,r.state)}else if(De){var c=a._window.location;a.show(c.pathname+c.search+c.hash,void 0,void 0,!1)}}}):function(){}}();Y.prototype._which=function(t){return t=t||ye&&this._window.event,t.which==null?t.button:t.which};Y.prototype._toURL=function(t){var n=this._window;if(typeof URL=="function"&&De)return new URL(t,n.location.toString());if(wt){var r=n.document.createElement("a");return r.href=t,r}};Y.prototype.sameOrigin=function(t){if(!t||!De)return!1;var n=this._toURL(t),r=this._window,a=r.location;return a.protocol===n.protocol&&a.hostname===n.hostname&&(a.port===n.port||a.port===""&&(n.port==80||n.port==443))};Y.prototype._samePath=function(t){if(!De)return!1;var n=this._window,r=n.location;return t.pathname===r.pathname&&t.search===r.search};Y.prototype._decodeURLEncodedURIComponent=function(t){return typeof t!="string"?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t};function Oi(){var t=new Y;function n(){return kn.apply(t,arguments)}return n.callbacks=t.callbacks,n.exits=t.exits,n.base=t.base.bind(t),n.strict=t.strict.bind(t),n.start=t.start.bind(t),n.stop=t.stop.bind(t),n.show=t.show.bind(t),n.back=t.back.bind(t),n.redirect=t.redirect.bind(t),n.replace=t.replace.bind(t),n.dispatch=t.dispatch.bind(t),n.exit=t.exit.bind(t),n.configure=t.configure.bind(t),n.sameOrigin=t.sameOrigin.bind(t),n.clickHandler=t.clickHandler.bind(t),n.create=Oi,Object.defineProperty(n,"len",{get:function(){return t.len},set:function(r){t.len=r}}),Object.defineProperty(n,"current",{get:function(){return t.current},set:function(r){t.current=r}}),n.Context=Ht,n.Route=qt,n}function kn(t,n){if(typeof t=="function")return kn.call(this,"*",t);if(typeof n=="function")for(var r=new qt(t,null,this),a=1;a<arguments.length;++a)this.callbacks.push(r.middleware(arguments[a]));else typeof t=="string"?this[typeof n=="string"?"redirect":"show"](t,n):this.start(t)}function kl(t){if(!t.handled){var n,r=this,a=r._window;r._hashbang?n=De&&this._getBase()+a.location.hash.replace("#!",""):n=De&&a.location.pathname+a.location.search,n!==t.canonicalPath&&(r.stop(),t.handled=!1,De&&(a.location.href=t.canonicalPath))}}function El(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ht(t,n,r){var a=this.page=r||kn,o=a._window,c=a._hashbang,h=a._getBase();t[0]==="/"&&t.indexOf(h)!==0&&(t=h+(c?"#!":"")+t);var p=t.indexOf("?");this.canonicalPath=t;var m=new RegExp("^"+El(h));if(this.path=t.replace(m,"")||"/",c&&(this.path=this.path.replace("#!","")||"/"),this.title=wt&&o.document.title,this.state=n||{},this.state.path=t,this.querystring=~p?a._decodeURLEncodedURIComponent(t.slice(p+1)):"",this.pathname=a._decodeURLEncodedURIComponent(~p?t.slice(0,p):t),this.params={},this.hash="",!c){if(!~this.path.indexOf("#"))return;var v=this.path.split("#");this.path=this.pathname=v[0],this.hash=a._decodeURLEncodedURIComponent(v[1])||"",this.querystring=this.querystring.split("#")[0]}}Ht.prototype.pushState=function(){var t=this.page,n=t._window,r=t._hashbang;t.len++,wn&&n.history.pushState(this.state,this.title,r&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};Ht.prototype.save=function(){var t=this.page;wn&&t._window.history.replaceState(this.state,this.title,t._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function qt(t,n,r){var a=this.page=r||$s,o=n||{};o.strict=o.strict||a._strict,this.path=t==="*"?"(.*)":t,this.method="GET",this.regexp=Ft(this.path,this.keys=[],o)}qt.prototype.middleware=function(t){var n=this;return function(r,a){if(n.match(r.path,r.params))return r.routePath=n.path,t(r,a);a()}};qt.prototype.match=function(t,n){var r=this.keys,a=t.indexOf("?"),o=~a?t.slice(0,a):t,c=this.regexp.exec(decodeURIComponent(o));if(!c)return!1;delete n[0];for(var h=1,p=c.length;h<p;++h){var m=r[h-1],v=this.page._decodeURLEncodedURIComponent(c[h]);(v!==void 0||!hasOwnProperty.call(n,m.name))&&(n[m.name]=v)}return!0};var $s=Oi(),R=$s,xl=$s;R.default=xl;var Al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Il={exports:{}};/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,n){(function(r,a){t.exports=a()})(Al,function(){const r=new Map,a={set(i,e,s){r.has(i)||r.set(i,new Map);const l=r.get(i);l.has(e)||l.size===0?l.set(e,s):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(l.keys())[0]}.`)},get:(i,e)=>r.has(i)&&r.get(i).get(e)||null,remove(i,e){if(!r.has(i))return;const s=r.get(i);s.delete(e),s.size===0&&r.delete(i)}},o="transitionend",c=i=>(i&&window.CSS&&window.CSS.escape&&(i=i.replace(/#([^\s"#']+)/g,(e,s)=>`#${CSS.escape(s)}`)),i),h=i=>{i.dispatchEvent(new Event(o))},p=i=>!(!i||typeof i!="object")&&(i.jquery!==void 0&&(i=i[0]),i.nodeType!==void 0),m=i=>p(i)?i.jquery?i[0]:i:typeof i=="string"&&i.length>0?document.querySelector(c(i)):null,v=i=>{if(!p(i)||i.getClientRects().length===0)return!1;const e=getComputedStyle(i).getPropertyValue("visibility")==="visible",s=i.closest("details:not([open])");if(!s)return e;if(s!==i){const l=i.closest("summary");if(l&&l.parentNode!==s||l===null)return!1}return e},y=i=>!i||i.nodeType!==Node.ELEMENT_NODE||!!i.classList.contains("disabled")||(i.disabled!==void 0?i.disabled:i.hasAttribute("disabled")&&i.getAttribute("disabled")!=="false"),k=i=>{if(!document.documentElement.attachShadow)return null;if(typeof i.getRootNode=="function"){const e=i.getRootNode();return e instanceof ShadowRoot?e:null}return i instanceof ShadowRoot?i:i.parentNode?k(i.parentNode):null},S=()=>{},P=i=>{i.offsetHeight},N=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,J=[],V=()=>document.documentElement.dir==="rtl",z=i=>{var e;e=()=>{const s=N();if(s){const l=i.NAME,d=s.fn[l];s.fn[l]=i.jQueryInterface,s.fn[l].Constructor=i,s.fn[l].noConflict=()=>(s.fn[l]=d,i.jQueryInterface)}},document.readyState==="loading"?(J.length||document.addEventListener("DOMContentLoaded",()=>{for(const s of J)s()}),J.push(e)):e()},G=(i,e=[],s=i)=>typeof i=="function"?i(...e):s,Ae=(i,e,s=!0)=>{if(!s)return void G(i);const l=(f=>{if(!f)return 0;let{transitionDuration:g,transitionDelay:_}=window.getComputedStyle(f);const E=Number.parseFloat(g),x=Number.parseFloat(_);return E||x?(g=g.split(",")[0],_=_.split(",")[0],1e3*(Number.parseFloat(g)+Number.parseFloat(_))):0})(e)+5;let d=!1;const u=({target:f})=>{f===e&&(d=!0,e.removeEventListener(o,u),G(i))};e.addEventListener(o,u),setTimeout(()=>{d||h(e)},l)},Be=(i,e,s,l)=>{const d=i.length;let u=i.indexOf(e);return u===-1?!s&&l?i[d-1]:i[0]:(u+=s?1:-1,l&&(u=(u+d)%d),i[Math.max(0,Math.min(u,d-1))])},$n=/[^.]*(?=\..*)\.|.*/,xt=/\..*/,ae=/::\d+$/,pe={};let _e=1;const At={mouseenter:"mouseover",mouseleave:"mouseout"},It=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Pe(i,e){return e&&`${e}::${_e++}`||i.uidEvent||_e++}function Sn(i){const e=Pe(i);return i.uidEvent=e,pe[e]=pe[e]||{},pe[e]}function oe(i,e,s=null){return Object.values(i).find(l=>l.callable===e&&l.delegationSelector===s)}function We(i,e,s){const l=typeof e=="string",d=l?s:e||s;let u=Ts(i);return It.has(u)||(u=i),[l,d,u]}function $t(i,e,s,l,d){if(typeof e!="string"||!i)return;let[u,f,g]=We(e,s,l);e in At&&(f=(L=>function($){if(!$.relatedTarget||$.relatedTarget!==$.delegateTarget&&!$.delegateTarget.contains($.relatedTarget))return L.call(this,$)})(f));const _=Sn(i),E=_[g]||(_[g]={}),x=oe(E,f,u?s:null);if(x)return void(x.oneOff=x.oneOff&&d);const w=Pe(f,e.replace($n,"")),O=u?function(I,L,$){return function T(q){const W=I.querySelectorAll(L);for(let{target:j}=q;j&&j!==this;j=j.parentNode)for(const B of W)if(B===j)return Ln(q,{delegateTarget:j}),T.oneOff&&b.off(I,q.type,L,$),$.apply(j,[q])}}(i,s,f):function(I,L){return function $(T){return Ln(T,{delegateTarget:I}),$.oneOff&&b.off(I,T.type,L),L.apply(I,[T])}}(i,f);O.delegationSelector=u?s:null,O.callable=f,O.oneOff=d,O.uidEvent=w,E[w]=O,i.addEventListener(g,O,u)}function Cn(i,e,s,l,d){const u=oe(e[s],l,d);u&&(i.removeEventListener(s,u,!!d),delete e[s][u.uidEvent])}function Vi(i,e,s,l){const d=e[s]||{};for(const[u,f]of Object.entries(d))u.includes(l)&&Cn(i,e,s,f.callable,f.delegationSelector)}function Ts(i){return i=i.replace(xt,""),At[i]||i}const b={on(i,e,s,l){$t(i,e,s,l,!1)},one(i,e,s,l){$t(i,e,s,l,!0)},off(i,e,s,l){if(typeof e!="string"||!i)return;const[d,u,f]=We(e,s,l),g=f!==e,_=Sn(i),E=_[f]||{},x=e.startsWith(".");if(u===void 0){if(x)for(const w of Object.keys(_))Vi(i,_,w,e.slice(1));for(const[w,O]of Object.entries(E)){const I=w.replace(ae,"");g&&!e.includes(I)||Cn(i,_,f,O.callable,O.delegationSelector)}}else{if(!Object.keys(E).length)return;Cn(i,_,f,u,d?s:null)}},trigger(i,e,s){if(typeof e!="string"||!i)return null;const l=N();let d=null,u=!0,f=!0,g=!1;e!==Ts(e)&&l&&(d=l.Event(e,s),l(i).trigger(d),u=!d.isPropagationStopped(),f=!d.isImmediatePropagationStopped(),g=d.isDefaultPrevented());const _=Ln(new Event(e,{bubbles:u,cancelable:!0}),s);return g&&_.preventDefault(),f&&i.dispatchEvent(_),_.defaultPrevented&&d&&d.preventDefault(),_}};function Ln(i,e={}){for(const[s,l]of Object.entries(e))try{i[s]=l}catch{Object.defineProperty(i,s,{configurable:!0,get:()=>l})}return i}function Ps(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function Tn(i){return i.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Oe={setDataAttribute(i,e,s){i.setAttribute(`data-bs-${Tn(e)}`,s)},removeDataAttribute(i,e){i.removeAttribute(`data-bs-${Tn(e)}`)},getDataAttributes(i){if(!i)return{};const e={},s=Object.keys(i.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of s){let d=l.replace(/^bs/,"");d=d.charAt(0).toLowerCase()+d.slice(1,d.length),e[d]=Ps(i.dataset[l])}return e},getDataAttribute:(i,e)=>Ps(i.getAttribute(`data-bs-${Tn(e)}`))};class St{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,s){const l=p(s)?Oe.getDataAttribute(s,"config"):{};return{...this.constructor.Default,...typeof l=="object"?l:{},...p(s)?Oe.getDataAttributes(s):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,s=this.constructor.DefaultType){for(const[d,u]of Object.entries(s)){const f=e[d],g=p(f)?"element":(l=f)==null?`${l}`:Object.prototype.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(u).test(g))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${d}" provided type "${g}" but expected type "${u}".`)}var l}}class we extends St{constructor(e,s){super(),(e=m(e))&&(this._element=e,this._config=this._getConfig(s),a.set(this._element,this.constructor.DATA_KEY,this))}dispose(){a.remove(this._element,this.constructor.DATA_KEY),b.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,s,l=!0){Ae(e,s,l)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return a.get(m(e),this.DATA_KEY)}static getOrCreateInstance(e,s={}){return this.getInstance(e)||new this(e,typeof s=="object"?s:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Pn=i=>{let e=i.getAttribute("data-bs-target");if(!e||e==="#"){let s=i.getAttribute("href");if(!s||!s.includes("#")&&!s.startsWith("."))return null;s.includes("#")&&!s.startsWith("#")&&(s=`#${s.split("#")[1]}`),e=s&&s!=="#"?s.trim():null}return e?e.split(",").map(s=>c(s)).join(","):null},A={find:(i,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,i)),findOne:(i,e=document.documentElement)=>Element.prototype.querySelector.call(e,i),children:(i,e)=>[].concat(...i.children).filter(s=>s.matches(e)),parents(i,e){const s=[];let l=i.parentNode.closest(e);for(;l;)s.push(l),l=l.parentNode.closest(e);return s},prev(i,e){let s=i.previousElementSibling;for(;s;){if(s.matches(e))return[s];s=s.previousElementSibling}return[]},next(i,e){let s=i.nextElementSibling;for(;s;){if(s.matches(e))return[s];s=s.nextElementSibling}return[]},focusableChildren(i){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(s=>`${s}:not([tabindex^="-"])`).join(",");return this.find(e,i).filter(s=>!y(s)&&v(s))},getSelectorFromElement(i){const e=Pn(i);return e&&A.findOne(e)?e:null},getElementFromSelector(i){const e=Pn(i);return e?A.findOne(e):null},getMultipleElementsFromSelector(i){const e=Pn(i);return e?A.find(e):[]}},Gt=(i,e="hide")=>{const s=`click.dismiss${i.EVENT_KEY}`,l=i.NAME;b.on(document,s,`[data-bs-dismiss="${l}"]`,function(d){if(["A","AREA"].includes(this.tagName)&&d.preventDefault(),y(this))return;const u=A.getElementFromSelector(this)||this.closest(`.${l}`);i.getOrCreateInstance(u)[e]()})},Os=".bs.alert",Qi=`close${Os}`,Xi=`closed${Os}`;class Ct extends we{static get NAME(){return"alert"}close(){if(b.trigger(this._element,Qi).defaultPrevented)return;this._element.classList.remove("show");const e=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),b.trigger(this._element,Xi),this.dispose()}static jQueryInterface(e){return this.each(function(){const s=Ct.getOrCreateInstance(this);if(typeof e=="string"){if(s[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);s[e](this)}})}}Gt(Ct,"close"),z(Ct);const Ms='[data-bs-toggle="button"]';class Lt extends we{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(e){return this.each(function(){const s=Lt.getOrCreateInstance(this);e==="toggle"&&s[e]()})}}b.on(document,"click.bs.button.data-api",Ms,i=>{i.preventDefault();const e=i.target.closest(Ms);Lt.getOrCreateInstance(e).toggle()}),z(Lt);const it=".bs.swipe",Yi=`touchstart${it}`,Ji=`touchmove${it}`,Zi=`touchend${it}`,ea=`pointerdown${it}`,ta=`pointerup${it}`,na={endCallback:null,leftCallback:null,rightCallback:null},sa={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Vt extends St{constructor(e,s){super(),this._element=e,e&&Vt.isSupported()&&(this._config=this._getConfig(s),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return na}static get DefaultType(){return sa}static get NAME(){return"swipe"}dispose(){b.off(this._element,it)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),G(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=40)return;const s=e/this._deltaX;this._deltaX=0,s&&G(s>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(b.on(this._element,ea,e=>this._start(e)),b.on(this._element,ta,e=>this._end(e)),this._element.classList.add("pointer-event")):(b.on(this._element,Yi,e=>this._start(e)),b.on(this._element,Ji,e=>this._move(e)),b.on(this._element,Zi,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType==="pen"||e.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Fe=".bs.carousel",Rs=".data-api",Tt="next",at="prev",ot="left",Qt="right",ra=`slide${Fe}`,On=`slid${Fe}`,ia=`keydown${Fe}`,aa=`mouseenter${Fe}`,oa=`mouseleave${Fe}`,la=`dragstart${Fe}`,ca=`load${Fe}${Rs}`,da=`click${Fe}${Rs}`,js="carousel",Xt="active",Ds=".active",Ns=".carousel-item",ua=Ds+Ns,ha={ArrowLeft:Qt,ArrowRight:ot},pa={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},fa={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class lt extends we{constructor(e,s){super(e,s),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=A.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===js&&this.cycle()}static get Default(){return pa}static get DefaultType(){return fa}static get NAME(){return"carousel"}next(){this._slide(Tt)}nextWhenVisible(){!document.hidden&&v(this._element)&&this.next()}prev(){this._slide(at)}pause(){this._isSliding&&h(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?b.one(this._element,On,()=>this.cycle()):this.cycle())}to(e){const s=this._getItems();if(e>s.length-1||e<0)return;if(this._isSliding)return void b.one(this._element,On,()=>this.to(e));const l=this._getItemIndex(this._getActive());if(l===e)return;const d=e>l?Tt:at;this._slide(d,s[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&b.on(this._element,ia,e=>this._keydown(e)),this._config.pause==="hover"&&(b.on(this._element,aa,()=>this.pause()),b.on(this._element,oa,()=>this._maybeEnableCycle())),this._config.touch&&Vt.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of A.find(".carousel-item img",this._element))b.on(s,la,l=>l.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(ot)),rightCallback:()=>this._slide(this._directionToOrder(Qt)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new Vt(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const s=ha[e.key];s&&(e.preventDefault(),this._slide(this._directionToOrder(s)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const s=A.findOne(Ds,this._indicatorsElement);s.classList.remove(Xt),s.removeAttribute("aria-current");const l=A.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);l&&(l.classList.add(Xt),l.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const s=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=s||this._config.defaultInterval}_slide(e,s=null){if(this._isSliding)return;const l=this._getActive(),d=e===Tt,u=s||Be(this._getItems(),l,d,this._config.wrap);if(u===l)return;const f=this._getItemIndex(u),g=w=>b.trigger(this._element,w,{relatedTarget:u,direction:this._orderToDirection(e),from:this._getItemIndex(l),to:f});if(g(ra).defaultPrevented||!l||!u)return;const _=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(f),this._activeElement=u;const E=d?"carousel-item-start":"carousel-item-end",x=d?"carousel-item-next":"carousel-item-prev";u.classList.add(x),P(u),l.classList.add(E),u.classList.add(E),this._queueCallback(()=>{u.classList.remove(E,x),u.classList.add(Xt),l.classList.remove(Xt,x,E),this._isSliding=!1,g(On)},l,this._isAnimated()),_&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return A.findOne(ua,this._element)}_getItems(){return A.find(Ns,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return V()?e===ot?at:Tt:e===ot?Tt:at}_orderToDirection(e){return V()?e===at?ot:Qt:e===at?Qt:ot}static jQueryInterface(e){return this.each(function(){const s=lt.getOrCreateInstance(this,e);if(typeof e!="number"){if(typeof e=="string"){if(s[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);s[e]()}}else s.to(e)})}}b.on(document,da,"[data-bs-slide], [data-bs-slide-to]",function(i){const e=A.getElementFromSelector(this);if(!e||!e.classList.contains(js))return;i.preventDefault();const s=lt.getOrCreateInstance(e),l=this.getAttribute("data-bs-slide-to");return l?(s.to(l),void s._maybeEnableCycle()):Oe.getDataAttribute(this,"slide")==="next"?(s.next(),void s._maybeEnableCycle()):(s.prev(),void s._maybeEnableCycle())}),b.on(window,ca,()=>{const i=A.find('[data-bs-ride="carousel"]');for(const e of i)lt.getOrCreateInstance(e)}),z(lt);const Pt=".bs.collapse",ma=`show${Pt}`,ga=`shown${Pt}`,va=`hide${Pt}`,ba=`hidden${Pt}`,ya=`click${Pt}.data-api`,Mn="show",ct="collapse",Yt="collapsing",_a=`:scope .${ct} .${ct}`,Rn='[data-bs-toggle="collapse"]',wa={parent:null,toggle:!0},ka={parent:"(null|element)",toggle:"boolean"};class dt extends we{constructor(e,s){super(e,s),this._isTransitioning=!1,this._triggerArray=[];const l=A.find(Rn);for(const d of l){const u=A.getSelectorFromElement(d),f=A.find(u).filter(g=>g===this._element);u!==null&&f.length&&this._triggerArray.push(d)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return wa}static get DefaultType(){return ka}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(d=>d!==this._element).map(d=>dt.getOrCreateInstance(d,{toggle:!1}))),e.length&&e[0]._isTransitioning||b.trigger(this._element,ma).defaultPrevented)return;for(const d of e)d.hide();const s=this._getDimension();this._element.classList.remove(ct),this._element.classList.add(Yt),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const l=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Yt),this._element.classList.add(ct,Mn),this._element.style[s]="",b.trigger(this._element,ga)},this._element,!0),this._element.style[s]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||b.trigger(this._element,va).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,P(this._element),this._element.classList.add(Yt),this._element.classList.remove(ct,Mn);for(const s of this._triggerArray){const l=A.getElementFromSelector(s);l&&!this._isShown(l)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0,this._element.style[e]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Yt),this._element.classList.add(ct),b.trigger(this._element,ba)},this._element,!0)}_isShown(e=this._element){return e.classList.contains(Mn)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=m(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Rn);for(const s of e){const l=A.getElementFromSelector(s);l&&this._addAriaAndCollapsedClass([s],this._isShown(l))}}_getFirstLevelChildren(e){const s=A.find(_a,this._config.parent);return A.find(e,this._config.parent).filter(l=>!s.includes(l))}_addAriaAndCollapsedClass(e,s){if(e.length)for(const l of e)l.classList.toggle("collapsed",!s),l.setAttribute("aria-expanded",s)}static jQueryInterface(e){const s={};return typeof e=="string"&&/show|hide/.test(e)&&(s.toggle=!1),this.each(function(){const l=dt.getOrCreateInstance(this,s);if(typeof e=="string"){if(l[e]===void 0)throw new TypeError(`No method named "${e}"`);l[e]()}})}}b.on(document,ya,Rn,function(i){(i.target.tagName==="A"||i.delegateTarget&&i.delegateTarget.tagName==="A")&&i.preventDefault();for(const e of A.getMultipleElementsFromSelector(this))dt.getOrCreateInstance(e,{toggle:!1}).toggle()}),z(dt);var ne="top",le="bottom",ce="right",se="left",Jt="auto",ut=[ne,le,ce,se],ze="start",ht="end",Bs="clippingParents",jn="viewport",pt="popper",Fs="reference",Dn=ut.reduce(function(i,e){return i.concat([e+"-"+ze,e+"-"+ht])},[]),Nn=[].concat(ut,[Jt]).reduce(function(i,e){return i.concat([e,e+"-"+ze,e+"-"+ht])},[]),Hs="beforeRead",qs="read",Us="afterRead",Ks="beforeMain",Ws="main",zs="afterMain",Gs="beforeWrite",Vs="write",Qs="afterWrite",Xs=[Hs,qs,Us,Ks,Ws,zs,Gs,Vs,Qs];function Ie(i){return i?(i.nodeName||"").toLowerCase():null}function de(i){if(i==null)return window;if(i.toString()!=="[object Window]"){var e=i.ownerDocument;return e&&e.defaultView||window}return i}function Ge(i){return i instanceof de(i).Element||i instanceof Element}function fe(i){return i instanceof de(i).HTMLElement||i instanceof HTMLElement}function Bn(i){return typeof ShadowRoot<"u"&&(i instanceof de(i).ShadowRoot||i instanceof ShadowRoot)}const Fn={name:"applyStyles",enabled:!0,phase:"write",fn:function(i){var e=i.state;Object.keys(e.elements).forEach(function(s){var l=e.styles[s]||{},d=e.attributes[s]||{},u=e.elements[s];fe(u)&&Ie(u)&&(Object.assign(u.style,l),Object.keys(d).forEach(function(f){var g=d[f];g===!1?u.removeAttribute(f):u.setAttribute(f,g===!0?"":g)}))})},effect:function(i){var e=i.state,s={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,s.popper),e.styles=s,e.elements.arrow&&Object.assign(e.elements.arrow.style,s.arrow),function(){Object.keys(e.elements).forEach(function(l){var d=e.elements[l],u=e.attributes[l]||{},f=Object.keys(e.styles.hasOwnProperty(l)?e.styles[l]:s[l]).reduce(function(g,_){return g[_]="",g},{});fe(d)&&Ie(d)&&(Object.assign(d.style,f),Object.keys(u).forEach(function(g){d.removeAttribute(g)}))})}},requires:["computeStyles"]};function $e(i){return i.split("-")[0]}var Ve=Math.max,Zt=Math.min,ft=Math.round;function Hn(){var i=navigator.userAgentData;return i!=null&&i.brands&&Array.isArray(i.brands)?i.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Ys(){return!/^((?!chrome|android).)*safari/i.test(Hn())}function mt(i,e,s){e===void 0&&(e=!1),s===void 0&&(s=!1);var l=i.getBoundingClientRect(),d=1,u=1;e&&fe(i)&&(d=i.offsetWidth>0&&ft(l.width)/i.offsetWidth||1,u=i.offsetHeight>0&&ft(l.height)/i.offsetHeight||1);var f=(Ge(i)?de(i):window).visualViewport,g=!Ys()&&s,_=(l.left+(g&&f?f.offsetLeft:0))/d,E=(l.top+(g&&f?f.offsetTop:0))/u,x=l.width/d,w=l.height/u;return{width:x,height:w,top:E,right:_+x,bottom:E+w,left:_,x:_,y:E}}function qn(i){var e=mt(i),s=i.offsetWidth,l=i.offsetHeight;return Math.abs(e.width-s)<=1&&(s=e.width),Math.abs(e.height-l)<=1&&(l=e.height),{x:i.offsetLeft,y:i.offsetTop,width:s,height:l}}function Js(i,e){var s=e.getRootNode&&e.getRootNode();if(i.contains(e))return!0;if(s&&Bn(s)){var l=e;do{if(l&&i.isSameNode(l))return!0;l=l.parentNode||l.host}while(l)}return!1}function Me(i){return de(i).getComputedStyle(i)}function Ea(i){return["table","td","th"].indexOf(Ie(i))>=0}function He(i){return((Ge(i)?i.ownerDocument:i.document)||window.document).documentElement}function en(i){return Ie(i)==="html"?i:i.assignedSlot||i.parentNode||(Bn(i)?i.host:null)||He(i)}function Zs(i){return fe(i)&&Me(i).position!=="fixed"?i.offsetParent:null}function Ot(i){for(var e=de(i),s=Zs(i);s&&Ea(s)&&Me(s).position==="static";)s=Zs(s);return s&&(Ie(s)==="html"||Ie(s)==="body"&&Me(s).position==="static")?e:s||function(l){var d=/firefox/i.test(Hn());if(/Trident/i.test(Hn())&&fe(l)&&Me(l).position==="fixed")return null;var u=en(l);for(Bn(u)&&(u=u.host);fe(u)&&["html","body"].indexOf(Ie(u))<0;){var f=Me(u);if(f.transform!=="none"||f.perspective!=="none"||f.contain==="paint"||["transform","perspective"].indexOf(f.willChange)!==-1||d&&f.willChange==="filter"||d&&f.filter&&f.filter!=="none")return u;u=u.parentNode}return null}(i)||e}function Un(i){return["top","bottom"].indexOf(i)>=0?"x":"y"}function Mt(i,e,s){return Ve(i,Zt(e,s))}function er(i){return Object.assign({},{top:0,right:0,bottom:0,left:0},i)}function tr(i,e){return e.reduce(function(s,l){return s[l]=i,s},{})}const nr={name:"arrow",enabled:!0,phase:"main",fn:function(i){var e,s=i.state,l=i.name,d=i.options,u=s.elements.arrow,f=s.modifiersData.popperOffsets,g=$e(s.placement),_=Un(g),E=[se,ce].indexOf(g)>=0?"height":"width";if(u&&f){var x=function(U,H){return er(typeof(U=typeof U=="function"?U(Object.assign({},H.rects,{placement:H.placement})):U)!="number"?U:tr(U,ut))}(d.padding,s),w=qn(u),O=_==="y"?ne:se,I=_==="y"?le:ce,L=s.rects.reference[E]+s.rects.reference[_]-f[_]-s.rects.popper[E],$=f[_]-s.rects.reference[_],T=Ot(u),q=T?_==="y"?T.clientHeight||0:T.clientWidth||0:0,W=L/2-$/2,j=x[O],B=q-w[E]-x[I],M=q/2-w[E]/2+W,D=Mt(j,M,B),F=_;s.modifiersData[l]=((e={})[F]=D,e.centerOffset=D-M,e)}},effect:function(i){var e=i.state,s=i.options.element,l=s===void 0?"[data-popper-arrow]":s;l!=null&&(typeof l!="string"||(l=e.elements.popper.querySelector(l)))&&Js(e.elements.popper,l)&&(e.elements.arrow=l)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function gt(i){return i.split("-")[1]}var xa={top:"auto",right:"auto",bottom:"auto",left:"auto"};function sr(i){var e,s=i.popper,l=i.popperRect,d=i.placement,u=i.variation,f=i.offsets,g=i.position,_=i.gpuAcceleration,E=i.adaptive,x=i.roundOffsets,w=i.isFixed,O=f.x,I=O===void 0?0:O,L=f.y,$=L===void 0?0:L,T=typeof x=="function"?x({x:I,y:$}):{x:I,y:$};I=T.x,$=T.y;var q=f.hasOwnProperty("x"),W=f.hasOwnProperty("y"),j=se,B=ne,M=window;if(E){var D=Ot(s),F="clientHeight",U="clientWidth";D===de(s)&&Me(D=He(s)).position!=="static"&&g==="absolute"&&(F="scrollHeight",U="scrollWidth"),(d===ne||(d===se||d===ce)&&u===ht)&&(B=le,$-=(w&&D===M&&M.visualViewport?M.visualViewport.height:D[F])-l.height,$*=_?1:-1),d!==se&&(d!==ne&&d!==le||u!==ht)||(j=ce,I-=(w&&D===M&&M.visualViewport?M.visualViewport.width:D[U])-l.width,I*=_?1:-1)}var H,X=Object.assign({position:g},E&&xa),ue=x===!0?function(Ee,re){var ge=Ee.x,ve=Ee.y,Q=re.devicePixelRatio||1;return{x:ft(ge*Q)/Q||0,y:ft(ve*Q)/Q||0}}({x:I,y:$},de(s)):{x:I,y:$};return I=ue.x,$=ue.y,_?Object.assign({},X,((H={})[B]=W?"0":"",H[j]=q?"0":"",H.transform=(M.devicePixelRatio||1)<=1?"translate("+I+"px, "+$+"px)":"translate3d("+I+"px, "+$+"px, 0)",H)):Object.assign({},X,((e={})[B]=W?$+"px":"",e[j]=q?I+"px":"",e.transform="",e))}const Kn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(i){var e=i.state,s=i.options,l=s.gpuAcceleration,d=l===void 0||l,u=s.adaptive,f=u===void 0||u,g=s.roundOffsets,_=g===void 0||g,E={placement:$e(e.placement),variation:gt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:d,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,sr(Object.assign({},E,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:f,roundOffsets:_})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,sr(Object.assign({},E,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:_})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var tn={passive:!0};const Wn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(i){var e=i.state,s=i.instance,l=i.options,d=l.scroll,u=d===void 0||d,f=l.resize,g=f===void 0||f,_=de(e.elements.popper),E=[].concat(e.scrollParents.reference,e.scrollParents.popper);return u&&E.forEach(function(x){x.addEventListener("scroll",s.update,tn)}),g&&_.addEventListener("resize",s.update,tn),function(){u&&E.forEach(function(x){x.removeEventListener("scroll",s.update,tn)}),g&&_.removeEventListener("resize",s.update,tn)}},data:{}};var Aa={left:"right",right:"left",bottom:"top",top:"bottom"};function nn(i){return i.replace(/left|right|bottom|top/g,function(e){return Aa[e]})}var Ia={start:"end",end:"start"};function rr(i){return i.replace(/start|end/g,function(e){return Ia[e]})}function zn(i){var e=de(i);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Gn(i){return mt(He(i)).left+zn(i).scrollLeft}function Vn(i){var e=Me(i),s=e.overflow,l=e.overflowX,d=e.overflowY;return/auto|scroll|overlay|hidden/.test(s+d+l)}function ir(i){return["html","body","#document"].indexOf(Ie(i))>=0?i.ownerDocument.body:fe(i)&&Vn(i)?i:ir(en(i))}function Rt(i,e){var s;e===void 0&&(e=[]);var l=ir(i),d=l===((s=i.ownerDocument)==null?void 0:s.body),u=de(l),f=d?[u].concat(u.visualViewport||[],Vn(l)?l:[]):l,g=e.concat(f);return d?g:g.concat(Rt(en(f)))}function Qn(i){return Object.assign({},i,{left:i.x,top:i.y,right:i.x+i.width,bottom:i.y+i.height})}function ar(i,e,s){return e===jn?Qn(function(l,d){var u=de(l),f=He(l),g=u.visualViewport,_=f.clientWidth,E=f.clientHeight,x=0,w=0;if(g){_=g.width,E=g.height;var O=Ys();(O||!O&&d==="fixed")&&(x=g.offsetLeft,w=g.offsetTop)}return{width:_,height:E,x:x+Gn(l),y:w}}(i,s)):Ge(e)?function(l,d){var u=mt(l,!1,d==="fixed");return u.top=u.top+l.clientTop,u.left=u.left+l.clientLeft,u.bottom=u.top+l.clientHeight,u.right=u.left+l.clientWidth,u.width=l.clientWidth,u.height=l.clientHeight,u.x=u.left,u.y=u.top,u}(e,s):Qn(function(l){var d,u=He(l),f=zn(l),g=(d=l.ownerDocument)==null?void 0:d.body,_=Ve(u.scrollWidth,u.clientWidth,g?g.scrollWidth:0,g?g.clientWidth:0),E=Ve(u.scrollHeight,u.clientHeight,g?g.scrollHeight:0,g?g.clientHeight:0),x=-f.scrollLeft+Gn(l),w=-f.scrollTop;return Me(g||u).direction==="rtl"&&(x+=Ve(u.clientWidth,g?g.clientWidth:0)-_),{width:_,height:E,x,y:w}}(He(i)))}function or(i){var e,s=i.reference,l=i.element,d=i.placement,u=d?$e(d):null,f=d?gt(d):null,g=s.x+s.width/2-l.width/2,_=s.y+s.height/2-l.height/2;switch(u){case ne:e={x:g,y:s.y-l.height};break;case le:e={x:g,y:s.y+s.height};break;case ce:e={x:s.x+s.width,y:_};break;case se:e={x:s.x-l.width,y:_};break;default:e={x:s.x,y:s.y}}var E=u?Un(u):null;if(E!=null){var x=E==="y"?"height":"width";switch(f){case ze:e[E]=e[E]-(s[x]/2-l[x]/2);break;case ht:e[E]=e[E]+(s[x]/2-l[x]/2)}}return e}function vt(i,e){e===void 0&&(e={});var s=e,l=s.placement,d=l===void 0?i.placement:l,u=s.strategy,f=u===void 0?i.strategy:u,g=s.boundary,_=g===void 0?Bs:g,E=s.rootBoundary,x=E===void 0?jn:E,w=s.elementContext,O=w===void 0?pt:w,I=s.altBoundary,L=I!==void 0&&I,$=s.padding,T=$===void 0?0:$,q=er(typeof T!="number"?T:tr(T,ut)),W=O===pt?Fs:pt,j=i.rects.popper,B=i.elements[L?W:O],M=function(re,ge,ve,Q){var Se=ge==="clippingParents"?function(K){var ie=Rt(en(K)),be=["absolute","fixed"].indexOf(Me(K).position)>=0&&fe(K)?Ot(K):K;return Ge(be)?ie.filter(function(Ue){return Ge(Ue)&&Js(Ue,be)&&Ie(Ue)!=="body"}):[]}(re):[].concat(ge),Ce=[].concat(Se,[ve]),_t=Ce[0],Z=Ce.reduce(function(K,ie){var be=ar(re,ie,Q);return K.top=Ve(be.top,K.top),K.right=Zt(be.right,K.right),K.bottom=Zt(be.bottom,K.bottom),K.left=Ve(be.left,K.left),K},ar(re,_t,Q));return Z.width=Z.right-Z.left,Z.height=Z.bottom-Z.top,Z.x=Z.left,Z.y=Z.top,Z}(Ge(B)?B:B.contextElement||He(i.elements.popper),_,x,f),D=mt(i.elements.reference),F=or({reference:D,element:j,strategy:"absolute",placement:d}),U=Qn(Object.assign({},j,F)),H=O===pt?U:D,X={top:M.top-H.top+q.top,bottom:H.bottom-M.bottom+q.bottom,left:M.left-H.left+q.left,right:H.right-M.right+q.right},ue=i.modifiersData.offset;if(O===pt&&ue){var Ee=ue[d];Object.keys(X).forEach(function(re){var ge=[ce,le].indexOf(re)>=0?1:-1,ve=[ne,le].indexOf(re)>=0?"y":"x";X[re]+=Ee[ve]*ge})}return X}function $a(i,e){e===void 0&&(e={});var s=e,l=s.placement,d=s.boundary,u=s.rootBoundary,f=s.padding,g=s.flipVariations,_=s.allowedAutoPlacements,E=_===void 0?Nn:_,x=gt(l),w=x?g?Dn:Dn.filter(function(L){return gt(L)===x}):ut,O=w.filter(function(L){return E.indexOf(L)>=0});O.length===0&&(O=w);var I=O.reduce(function(L,$){return L[$]=vt(i,{placement:$,boundary:d,rootBoundary:u,padding:f})[$e($)],L},{});return Object.keys(I).sort(function(L,$){return I[L]-I[$]})}const lr={name:"flip",enabled:!0,phase:"main",fn:function(i){var e=i.state,s=i.options,l=i.name;if(!e.modifiersData[l]._skip){for(var d=s.mainAxis,u=d===void 0||d,f=s.altAxis,g=f===void 0||f,_=s.fallbackPlacements,E=s.padding,x=s.boundary,w=s.rootBoundary,O=s.altBoundary,I=s.flipVariations,L=I===void 0||I,$=s.allowedAutoPlacements,T=e.options.placement,q=$e(T),W=_||(q!==T&&L?function(K){if($e(K)===Jt)return[];var ie=nn(K);return[rr(K),ie,rr(ie)]}(T):[nn(T)]),j=[T].concat(W).reduce(function(K,ie){return K.concat($e(ie)===Jt?$a(e,{placement:ie,boundary:x,rootBoundary:w,padding:E,flipVariations:L,allowedAutoPlacements:$}):ie)},[]),B=e.rects.reference,M=e.rects.popper,D=new Map,F=!0,U=j[0],H=0;H<j.length;H++){var X=j[H],ue=$e(X),Ee=gt(X)===ze,re=[ne,le].indexOf(ue)>=0,ge=re?"width":"height",ve=vt(e,{placement:X,boundary:x,rootBoundary:w,altBoundary:O,padding:E}),Q=re?Ee?ce:se:Ee?le:ne;B[ge]>M[ge]&&(Q=nn(Q));var Se=nn(Q),Ce=[];if(u&&Ce.push(ve[ue]<=0),g&&Ce.push(ve[Q]<=0,ve[Se]<=0),Ce.every(function(K){return K})){U=X,F=!1;break}D.set(X,Ce)}if(F)for(var _t=function(K){var ie=j.find(function(be){var Ue=D.get(be);if(Ue)return Ue.slice(0,K).every(function(hn){return hn})});if(ie)return U=ie,"break"},Z=L?3:1;Z>0&&_t(Z)!=="break";Z--);e.placement!==U&&(e.modifiersData[l]._skip=!0,e.placement=U,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function cr(i,e,s){return s===void 0&&(s={x:0,y:0}),{top:i.top-e.height-s.y,right:i.right-e.width+s.x,bottom:i.bottom-e.height+s.y,left:i.left-e.width-s.x}}function dr(i){return[ne,ce,le,se].some(function(e){return i[e]>=0})}const ur={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(i){var e=i.state,s=i.name,l=e.rects.reference,d=e.rects.popper,u=e.modifiersData.preventOverflow,f=vt(e,{elementContext:"reference"}),g=vt(e,{altBoundary:!0}),_=cr(f,l),E=cr(g,d,u),x=dr(_),w=dr(E);e.modifiersData[s]={referenceClippingOffsets:_,popperEscapeOffsets:E,isReferenceHidden:x,hasPopperEscaped:w},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":x,"data-popper-escaped":w})}},hr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(i){var e=i.state,s=i.options,l=i.name,d=s.offset,u=d===void 0?[0,0]:d,f=Nn.reduce(function(x,w){return x[w]=function(O,I,L){var $=$e(O),T=[se,ne].indexOf($)>=0?-1:1,q=typeof L=="function"?L(Object.assign({},I,{placement:O})):L,W=q[0],j=q[1];return W=W||0,j=(j||0)*T,[se,ce].indexOf($)>=0?{x:j,y:W}:{x:W,y:j}}(w,e.rects,u),x},{}),g=f[e.placement],_=g.x,E=g.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=_,e.modifiersData.popperOffsets.y+=E),e.modifiersData[l]=f}},Xn={name:"popperOffsets",enabled:!0,phase:"read",fn:function(i){var e=i.state,s=i.name;e.modifiersData[s]=or({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},pr={name:"preventOverflow",enabled:!0,phase:"main",fn:function(i){var e=i.state,s=i.options,l=i.name,d=s.mainAxis,u=d===void 0||d,f=s.altAxis,g=f!==void 0&&f,_=s.boundary,E=s.rootBoundary,x=s.altBoundary,w=s.padding,O=s.tether,I=O===void 0||O,L=s.tetherOffset,$=L===void 0?0:L,T=vt(e,{boundary:_,rootBoundary:E,padding:w,altBoundary:x}),q=$e(e.placement),W=gt(e.placement),j=!W,B=Un(q),M=B==="x"?"y":"x",D=e.modifiersData.popperOffsets,F=e.rects.reference,U=e.rects.popper,H=typeof $=="function"?$(Object.assign({},e.rects,{placement:e.placement})):$,X=typeof H=="number"?{mainAxis:H,altAxis:H}:Object.assign({mainAxis:0,altAxis:0},H),ue=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Ee={x:0,y:0};if(D){if(u){var re,ge=B==="y"?ne:se,ve=B==="y"?le:ce,Q=B==="y"?"height":"width",Se=D[B],Ce=Se+T[ge],_t=Se-T[ve],Z=I?-U[Q]/2:0,K=W===ze?F[Q]:U[Q],ie=W===ze?-U[Q]:-F[Q],be=e.elements.arrow,Ue=I&&be?qn(be):{width:0,height:0},hn=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Zr=hn[ge],ei=hn[ve],pn=Mt(0,F[Q],Ue[Q]),sl=j?F[Q]/2-Z-pn-Zr-X.mainAxis:K-pn-Zr-X.mainAxis,rl=j?-F[Q]/2+Z+pn+ei+X.mainAxis:ie+pn+ei+X.mainAxis,cs=e.elements.arrow&&Ot(e.elements.arrow),il=cs?B==="y"?cs.clientTop||0:cs.clientLeft||0:0,ti=(re=ue==null?void 0:ue[B])!=null?re:0,al=Se+rl-ti,ni=Mt(I?Zt(Ce,Se+sl-ti-il):Ce,Se,I?Ve(_t,al):_t);D[B]=ni,Ee[B]=ni-Se}if(g){var si,ol=B==="x"?ne:se,ll=B==="x"?le:ce,nt=D[M],fn=M==="y"?"height":"width",ri=nt+T[ol],ii=nt-T[ll],ds=[ne,se].indexOf(q)!==-1,ai=(si=ue==null?void 0:ue[M])!=null?si:0,oi=ds?ri:nt-F[fn]-U[fn]-ai+X.altAxis,li=ds?nt+F[fn]+U[fn]-ai-X.altAxis:ii,ci=I&&ds?function(cl,dl,us){var di=Mt(cl,dl,us);return di>us?us:di}(oi,nt,li):Mt(I?oi:ri,nt,I?li:ii);D[M]=ci,Ee[M]=ci-nt}e.modifiersData[l]=Ee}},requiresIfExists:["offset"]};function Sa(i,e,s){s===void 0&&(s=!1);var l,d,u=fe(e),f=fe(e)&&function(w){var O=w.getBoundingClientRect(),I=ft(O.width)/w.offsetWidth||1,L=ft(O.height)/w.offsetHeight||1;return I!==1||L!==1}(e),g=He(e),_=mt(i,f,s),E={scrollLeft:0,scrollTop:0},x={x:0,y:0};return(u||!u&&!s)&&((Ie(e)!=="body"||Vn(g))&&(E=(l=e)!==de(l)&&fe(l)?{scrollLeft:(d=l).scrollLeft,scrollTop:d.scrollTop}:zn(l)),fe(e)?((x=mt(e,!0)).x+=e.clientLeft,x.y+=e.clientTop):g&&(x.x=Gn(g))),{x:_.left+E.scrollLeft-x.x,y:_.top+E.scrollTop-x.y,width:_.width,height:_.height}}function Ca(i){var e=new Map,s=new Set,l=[];function d(u){s.add(u.name),[].concat(u.requires||[],u.requiresIfExists||[]).forEach(function(f){if(!s.has(f)){var g=e.get(f);g&&d(g)}}),l.push(u)}return i.forEach(function(u){e.set(u.name,u)}),i.forEach(function(u){s.has(u.name)||d(u)}),l}var fr={placement:"bottom",modifiers:[],strategy:"absolute"};function mr(){for(var i=arguments.length,e=new Array(i),s=0;s<i;s++)e[s]=arguments[s];return!e.some(function(l){return!(l&&typeof l.getBoundingClientRect=="function")})}function sn(i){i===void 0&&(i={});var e=i,s=e.defaultModifiers,l=s===void 0?[]:s,d=e.defaultOptions,u=d===void 0?fr:d;return function(f,g,_){_===void 0&&(_=u);var E,x,w={placement:"bottom",orderedModifiers:[],options:Object.assign({},fr,u),modifiersData:{},elements:{reference:f,popper:g},attributes:{},styles:{}},O=[],I=!1,L={state:w,setOptions:function(T){var q=typeof T=="function"?T(w.options):T;$(),w.options=Object.assign({},u,w.options,q),w.scrollParents={reference:Ge(f)?Rt(f):f.contextElement?Rt(f.contextElement):[],popper:Rt(g)};var W,j,B=function(M){var D=Ca(M);return Xs.reduce(function(F,U){return F.concat(D.filter(function(H){return H.phase===U}))},[])}((W=[].concat(l,w.options.modifiers),j=W.reduce(function(M,D){var F=M[D.name];return M[D.name]=F?Object.assign({},F,D,{options:Object.assign({},F.options,D.options),data:Object.assign({},F.data,D.data)}):D,M},{}),Object.keys(j).map(function(M){return j[M]})));return w.orderedModifiers=B.filter(function(M){return M.enabled}),w.orderedModifiers.forEach(function(M){var D=M.name,F=M.options,U=F===void 0?{}:F,H=M.effect;if(typeof H=="function"){var X=H({state:w,name:D,instance:L,options:U});O.push(X||function(){})}}),L.update()},forceUpdate:function(){if(!I){var T=w.elements,q=T.reference,W=T.popper;if(mr(q,W)){w.rects={reference:Sa(q,Ot(W),w.options.strategy==="fixed"),popper:qn(W)},w.reset=!1,w.placement=w.options.placement,w.orderedModifiers.forEach(function(H){return w.modifiersData[H.name]=Object.assign({},H.data)});for(var j=0;j<w.orderedModifiers.length;j++)if(w.reset!==!0){var B=w.orderedModifiers[j],M=B.fn,D=B.options,F=D===void 0?{}:D,U=B.name;typeof M=="function"&&(w=M({state:w,options:F,name:U,instance:L})||w)}else w.reset=!1,j=-1}}},update:(E=function(){return new Promise(function(T){L.forceUpdate(),T(w)})},function(){return x||(x=new Promise(function(T){Promise.resolve().then(function(){x=void 0,T(E())})})),x}),destroy:function(){$(),I=!0}};if(!mr(f,g))return L;function $(){O.forEach(function(T){return T()}),O=[]}return L.setOptions(_).then(function(T){!I&&_.onFirstUpdate&&_.onFirstUpdate(T)}),L}}var La=sn(),Ta=sn({defaultModifiers:[Wn,Xn,Kn,Fn]}),Yn=sn({defaultModifiers:[Wn,Xn,Kn,Fn,hr,lr,pr,nr,ur]});const gr=Object.freeze(Object.defineProperty({__proto__:null,afterMain:zs,afterRead:Us,afterWrite:Qs,applyStyles:Fn,arrow:nr,auto:Jt,basePlacements:ut,beforeMain:Ks,beforeRead:Hs,beforeWrite:Gs,bottom:le,clippingParents:Bs,computeStyles:Kn,createPopper:Yn,createPopperBase:La,createPopperLite:Ta,detectOverflow:vt,end:ht,eventListeners:Wn,flip:lr,hide:ur,left:se,main:Ws,modifierPhases:Xs,offset:hr,placements:Nn,popper:pt,popperGenerator:sn,popperOffsets:Xn,preventOverflow:pr,read:qs,reference:Fs,right:ce,start:ze,top:ne,variationPlacements:Dn,viewport:jn,write:Vs},Symbol.toStringTag,{value:"Module"})),vr="dropdown",Qe=".bs.dropdown",Jn=".data-api",Pa="ArrowUp",br="ArrowDown",Oa=`hide${Qe}`,Ma=`hidden${Qe}`,Ra=`show${Qe}`,ja=`shown${Qe}`,yr=`click${Qe}${Jn}`,_r=`keydown${Qe}${Jn}`,Da=`keyup${Qe}${Jn}`,bt="show",Xe='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Na=`${Xe}.${bt}`,rn=".dropdown-menu",Ba=V()?"top-end":"top-start",Fa=V()?"top-start":"top-end",Ha=V()?"bottom-end":"bottom-start",qa=V()?"bottom-start":"bottom-end",Ua=V()?"left-start":"right-start",Ka=V()?"right-start":"left-start",Wa={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},za={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ke extends we{constructor(e,s){super(e,s),this._popper=null,this._parent=this._element.parentNode,this._menu=A.next(this._element,rn)[0]||A.prev(this._element,rn)[0]||A.findOne(rn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Wa}static get DefaultType(){return za}static get NAME(){return vr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(y(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!b.trigger(this._element,Ra,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const s of[].concat(...document.body.children))b.on(s,"mouseover",S);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(bt),this._element.classList.add(bt),b.trigger(this._element,ja,e)}}hide(){if(y(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!b.trigger(this._element,Oa,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))b.off(s,"mouseover",S);this._popper&&this._popper.destroy(),this._menu.classList.remove(bt),this._element.classList.remove(bt),this._element.setAttribute("aria-expanded","false"),Oe.removeDataAttribute(this._menu,"popper"),b.trigger(this._element,Ma,e)}}_getConfig(e){if(typeof(e=super._getConfig(e)).reference=="object"&&!p(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${vr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(gr===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:p(this._config.reference)?e=m(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const s=this._getPopperConfig();this._popper=Yn(e,this._menu,s)}_isShown(){return this._menu.classList.contains(bt)}_getPlacement(){const e=this._parent;if(e.classList.contains("dropend"))return Ua;if(e.classList.contains("dropstart"))return Ka;if(e.classList.contains("dropup-center"))return"top";if(e.classList.contains("dropdown-center"))return"bottom";const s=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains("dropup")?s?Fa:Ba:s?qa:Ha}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(s=>Number.parseInt(s,10)):typeof e=="function"?s=>e(s,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Oe.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...G(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:s}){const l=A.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(d=>v(d));l.length&&Be(l,s,e===br,!l.includes(s)).focus()}static jQueryInterface(e){return this.each(function(){const s=ke.getOrCreateInstance(this,e);if(typeof e=="string"){if(s[e]===void 0)throw new TypeError(`No method named "${e}"`);s[e]()}})}static clearMenus(e){if(e.button===2||e.type==="keyup"&&e.key!=="Tab")return;const s=A.find(Na);for(const l of s){const d=ke.getInstance(l);if(!d||d._config.autoClose===!1)continue;const u=e.composedPath(),f=u.includes(d._menu);if(u.includes(d._element)||d._config.autoClose==="inside"&&!f||d._config.autoClose==="outside"&&f||d._menu.contains(e.target)&&(e.type==="keyup"&&e.key==="Tab"||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const g={relatedTarget:d._element};e.type==="click"&&(g.clickEvent=e),d._completeHide(g)}}static dataApiKeydownHandler(e){const s=/input|textarea/i.test(e.target.tagName),l=e.key==="Escape",d=[Pa,br].includes(e.key);if(!d&&!l||s&&!l)return;e.preventDefault();const u=this.matches(Xe)?this:A.prev(this,Xe)[0]||A.next(this,Xe)[0]||A.findOne(Xe,e.delegateTarget.parentNode),f=ke.getOrCreateInstance(u);if(d)return e.stopPropagation(),f.show(),void f._selectMenuItem(e);f._isShown()&&(e.stopPropagation(),f.hide(),u.focus())}}b.on(document,_r,Xe,ke.dataApiKeydownHandler),b.on(document,_r,rn,ke.dataApiKeydownHandler),b.on(document,yr,ke.clearMenus),b.on(document,Da,ke.clearMenus),b.on(document,yr,Xe,function(i){i.preventDefault(),ke.getOrCreateInstance(this).toggle()}),z(ke);const wr="backdrop",kr="show",Er=`mousedown.bs.${wr}`,Ga={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Va={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class xr extends St{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Ga}static get DefaultType(){return Va}static get NAME(){return wr}show(e){if(!this._config.isVisible)return void G(e);this._append();const s=this._getElement();this._config.isAnimated&&P(s),s.classList.add(kr),this._emulateAnimation(()=>{G(e)})}hide(e){this._config.isVisible?(this._getElement().classList.remove(kr),this._emulateAnimation(()=>{this.dispose(),G(e)})):G(e)}dispose(){this._isAppended&&(b.off(this._element,Er),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=m(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),b.on(e,Er,()=>{G(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Ae(e,this._getElement(),this._config.isAnimated)}}const an=".bs.focustrap",Qa=`focusin${an}`,Xa=`keydown.tab${an}`,Ar="backward",Ya={autofocus:!0,trapElement:null},Ja={autofocus:"boolean",trapElement:"element"};class Ir extends St{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Ya}static get DefaultType(){return Ja}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),b.off(document,an),b.on(document,Qa,e=>this._handleFocusin(e)),b.on(document,Xa,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,b.off(document,an))}_handleFocusin(e){const{trapElement:s}=this._config;if(e.target===document||e.target===s||s.contains(e.target))return;const l=A.focusableChildren(s);l.length===0?s.focus():this._lastTabNavDirection===Ar?l[l.length-1].focus():l[0].focus()}_handleKeydown(e){e.key==="Tab"&&(this._lastTabNavDirection=e.shiftKey?Ar:"forward")}}const $r=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Sr=".sticky-top",on="padding-right",Cr="margin-right";class Zn{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,on,s=>s+e),this._setElementAttributes($r,on,s=>s+e),this._setElementAttributes(Sr,Cr,s=>s-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,on),this._resetElementAttributes($r,on),this._resetElementAttributes(Sr,Cr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,s,l){const d=this.getWidth();this._applyManipulationCallback(e,u=>{if(u!==this._element&&window.innerWidth>u.clientWidth+d)return;this._saveInitialAttribute(u,s);const f=window.getComputedStyle(u).getPropertyValue(s);u.style.setProperty(s,`${l(Number.parseFloat(f))}px`)})}_saveInitialAttribute(e,s){const l=e.style.getPropertyValue(s);l&&Oe.setDataAttribute(e,s,l)}_resetElementAttributes(e,s){this._applyManipulationCallback(e,l=>{const d=Oe.getDataAttribute(l,s);d!==null?(Oe.removeDataAttribute(l,s),l.style.setProperty(s,d)):l.style.removeProperty(s)})}_applyManipulationCallback(e,s){if(p(e))s(e);else for(const l of A.find(e,this._element))s(l)}}const me=".bs.modal",Za=`hide${me}`,eo=`hidePrevented${me}`,Lr=`hidden${me}`,Tr=`show${me}`,to=`shown${me}`,no=`resize${me}`,so=`click.dismiss${me}`,ro=`mousedown.dismiss${me}`,io=`keydown.dismiss${me}`,ao=`click${me}.data-api`,Pr="modal-open",Or="show",es="modal-static",oo={backdrop:!0,focus:!0,keyboard:!0},lo={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ye extends we{constructor(e,s){super(e,s),this._dialog=A.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Zn,this._addEventListeners()}static get Default(){return oo}static get DefaultType(){return lo}static get NAME(){return"modal"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||b.trigger(this._element,Tr,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Pr),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){this._isShown&&!this._isTransitioning&&(b.trigger(this._element,Za).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Or),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){b.off(window,me),b.off(this._dialog,me),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new xr({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ir({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const s=A.findOne(".modal-body",this._dialog);s&&(s.scrollTop=0),P(this._element),this._element.classList.add(Or),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,b.trigger(this._element,to,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){b.on(this._element,io,e=>{e.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),b.on(window,no,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),b.on(this._element,ro,e=>{b.one(this._element,so,s=>{this._element===e.target&&this._element===s.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Pr),this._resetAdjustments(),this._scrollBar.reset(),b.trigger(this._element,Lr)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(b.trigger(this._element,eo).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(es)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(es),this._queueCallback(()=>{this._element.classList.remove(es),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,s=this._scrollBar.getWidth(),l=s>0;if(l&&!e){const d=V()?"paddingLeft":"paddingRight";this._element.style[d]=`${s}px`}if(!l&&e){const d=V()?"paddingRight":"paddingLeft";this._element.style[d]=`${s}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,s){return this.each(function(){const l=Ye.getOrCreateInstance(this,e);if(typeof e=="string"){if(l[e]===void 0)throw new TypeError(`No method named "${e}"`);l[e](s)}})}}b.on(document,ao,'[data-bs-toggle="modal"]',function(i){const e=A.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&i.preventDefault(),b.one(e,Tr,l=>{l.defaultPrevented||b.one(e,Lr,()=>{v(this)&&this.focus()})});const s=A.findOne(".modal.show");s&&Ye.getInstance(s).hide(),Ye.getOrCreateInstance(e).toggle(this)}),Gt(Ye),z(Ye);const Re=".bs.offcanvas",Mr=".data-api",co=`load${Re}${Mr}`,Rr="show",jr="showing",Dr="hiding",Nr=".offcanvas.show",uo=`show${Re}`,ho=`shown${Re}`,po=`hide${Re}`,Br=`hidePrevented${Re}`,Fr=`hidden${Re}`,fo=`resize${Re}`,mo=`click${Re}${Mr}`,go=`keydown.dismiss${Re}`,vo={backdrop:!0,keyboard:!0,scroll:!1},bo={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class je extends we{constructor(e,s){super(e,s),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return vo}static get DefaultType(){return bo}static get NAME(){return"offcanvas"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||b.trigger(this._element,uo,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Zn().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(jr),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Rr),this._element.classList.remove(jr),b.trigger(this._element,ho,{relatedTarget:e})},this._element,!0))}hide(){this._isShown&&(b.trigger(this._element,po).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Dr),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Rr,Dr),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Zn().reset(),b.trigger(this._element,Fr)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=!!this._config.backdrop;return new xr({className:"offcanvas-backdrop",isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{this._config.backdrop!=="static"?this.hide():b.trigger(this._element,Br)}:null})}_initializeFocusTrap(){return new Ir({trapElement:this._element})}_addEventListeners(){b.on(this._element,go,e=>{e.key==="Escape"&&(this._config.keyboard?this.hide():b.trigger(this._element,Br))})}static jQueryInterface(e){return this.each(function(){const s=je.getOrCreateInstance(this,e);if(typeof e=="string"){if(s[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);s[e](this)}})}}b.on(document,mo,'[data-bs-toggle="offcanvas"]',function(i){const e=A.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),y(this))return;b.one(e,Fr,()=>{v(this)&&this.focus()});const s=A.findOne(Nr);s&&s!==e&&je.getInstance(s).hide(),je.getOrCreateInstance(e).toggle(this)}),b.on(window,co,()=>{for(const i of A.find(Nr))je.getOrCreateInstance(i).show()}),b.on(window,fo,()=>{for(const i of A.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(i).position!=="fixed"&&je.getOrCreateInstance(i).hide()}),Gt(je),z(je);const Hr={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},yo=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),_o=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,wo=(i,e)=>{const s=i.nodeName.toLowerCase();return e.includes(s)?!yo.has(s)||!!_o.test(i.nodeValue):e.filter(l=>l instanceof RegExp).some(l=>l.test(s))},ko={allowList:Hr,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Eo={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},xo={entry:"(string|element|function|null)",selector:"(string|element)"};class Ao extends St{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return ko}static get DefaultType(){return Eo}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[d,u]of Object.entries(this._config.content))this._setContent(e,u,d);const s=e.children[0],l=this._resolvePossibleFunction(this._config.extraClass);return l&&s.classList.add(...l.split(" ")),s}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[s,l]of Object.entries(e))super._typeCheckConfig({selector:s,entry:l},xo)}_setContent(e,s,l){const d=A.findOne(l,e);d&&((s=this._resolvePossibleFunction(s))?p(s)?this._putElementInTemplate(m(s),d):this._config.html?d.innerHTML=this._maybeSanitize(s):d.textContent=s:d.remove())}_maybeSanitize(e){return this._config.sanitize?function(s,l,d){if(!s.length)return s;if(d&&typeof d=="function")return d(s);const u=new window.DOMParser().parseFromString(s,"text/html"),f=[].concat(...u.body.querySelectorAll("*"));for(const g of f){const _=g.nodeName.toLowerCase();if(!Object.keys(l).includes(_)){g.remove();continue}const E=[].concat(...g.attributes),x=[].concat(l["*"]||[],l[_]||[]);for(const w of E)wo(w,x)||g.removeAttribute(w.nodeName)}return u.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return G(e,[this])}_putElementInTemplate(e,s){if(this._config.html)return s.innerHTML="",void s.append(e);s.textContent=e.textContent}}const Io=new Set(["sanitize","allowList","sanitizeFn"]),ts="fade",ln="show",qr=".modal",Ur="hide.bs.modal",jt="hover",ns="focus",$o={AUTO:"auto",TOP:"top",RIGHT:V()?"left":"right",BOTTOM:"bottom",LEFT:V()?"right":"left"},So={allowList:Hr,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Co={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Je extends we{constructor(e,s){if(gr===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,s),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return So}static get DefaultType(){return Co}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),b.off(this._element.closest(qr),Ur,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=b.trigger(this._element,this.constructor.eventName("show")),s=(k(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const l=this._getTipElement();this._element.setAttribute("aria-describedby",l.getAttribute("id"));const{container:d}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(d.append(l),b.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(l),l.classList.add(ln),"ontouchstart"in document.documentElement)for(const u of[].concat(...document.body.children))b.on(u,"mouseover",S);this._queueCallback(()=>{b.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!b.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(ln),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))b.off(e,"mouseover",S);this._activeTrigger.click=!1,this._activeTrigger[ns]=!1,this._activeTrigger[jt]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),b.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const s=this._getTemplateFactory(e).toHtml();if(!s)return null;s.classList.remove(ts,ln),s.classList.add(`bs-${this.constructor.NAME}-auto`);const l=(d=>{do d+=Math.floor(1e6*Math.random());while(document.getElementById(d));return d})(this.constructor.NAME).toString();return s.setAttribute("id",l),this._isAnimated()&&s.classList.add(ts),s}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Ao({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ts)}_isShown(){return this.tip&&this.tip.classList.contains(ln)}_createPopper(e){const s=G(this._config.placement,[this,e,this._element]),l=$o[s.toUpperCase()];return Yn(this._element,e,this._getPopperConfig(l))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(s=>Number.parseInt(s,10)):typeof e=="function"?s=>e(s,this._element):e}_resolvePossibleFunction(e){return G(e,[this._element])}_getPopperConfig(e){const s={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:l=>{this._getTipElement().setAttribute("data-popper-placement",l.state.placement)}}]};return{...s,...G(this._config.popperConfig,[s])}}_setListeners(){const e=this._config.trigger.split(" ");for(const s of e)if(s==="click")b.on(this._element,this.constructor.eventName("click"),this._config.selector,l=>{this._initializeOnDelegatedTarget(l).toggle()});else if(s!=="manual"){const l=s===jt?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),d=s===jt?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");b.on(this._element,l,this._config.selector,u=>{const f=this._initializeOnDelegatedTarget(u);f._activeTrigger[u.type==="focusin"?ns:jt]=!0,f._enter()}),b.on(this._element,d,this._config.selector,u=>{const f=this._initializeOnDelegatedTarget(u);f._activeTrigger[u.type==="focusout"?ns:jt]=f._element.contains(u.relatedTarget),f._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},b.on(this._element.closest(qr),Ur,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,s){clearTimeout(this._timeout),this._timeout=setTimeout(e,s)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const s=Oe.getDataAttributes(this._element);for(const l of Object.keys(s))Io.has(l)&&delete s[l];return e={...s,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:m(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[s,l]of Object.entries(this._config))this.constructor.Default[s]!==l&&(e[s]=l);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const s=Je.getOrCreateInstance(this,e);if(typeof e=="string"){if(s[e]===void 0)throw new TypeError(`No method named "${e}"`);s[e]()}})}}z(Je);const Lo={...Je.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},To={...Je.DefaultType,content:"(null|string|element|function)"};class cn extends Je{static get Default(){return Lo}static get DefaultType(){return To}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const s=cn.getOrCreateInstance(this,e);if(typeof e=="string"){if(s[e]===void 0)throw new TypeError(`No method named "${e}"`);s[e]()}})}}z(cn);const ss=".bs.scrollspy",Po=`activate${ss}`,Kr=`click${ss}`,Oo=`load${ss}.data-api`,yt="active",rs="[href]",Wr=".nav-link",Mo=`${Wr}, .nav-item > ${Wr}, .list-group-item`,Ro={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},jo={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Dt extends we{constructor(e,s){super(e,s),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ro}static get DefaultType(){return jo}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=m(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(s=>Number.parseFloat(s))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(b.off(this._config.target,Kr),b.on(this._config.target,Kr,rs,e=>{const s=this._observableSections.get(e.target.hash);if(s){e.preventDefault();const l=this._rootElement||window,d=s.offsetTop-this._element.offsetTop;if(l.scrollTo)return void l.scrollTo({top:d,behavior:"smooth"});l.scrollTop=d}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(s=>this._observerCallback(s),e)}_observerCallback(e){const s=f=>this._targetLinks.get(`#${f.target.id}`),l=f=>{this._previousScrollData.visibleEntryTop=f.target.offsetTop,this._process(s(f))},d=(this._rootElement||document.documentElement).scrollTop,u=d>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=d;for(const f of e){if(!f.isIntersecting){this._activeTarget=null,this._clearActiveClass(s(f));continue}const g=f.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(u&&g){if(l(f),!d)return}else u||g||l(f)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=A.find(rs,this._config.target);for(const s of e){if(!s.hash||y(s))continue;const l=A.findOne(decodeURI(s.hash),this._element);v(l)&&(this._targetLinks.set(decodeURI(s.hash),s),this._observableSections.set(s.hash,l))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(yt),this._activateParents(e),b.trigger(this._element,Po,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains("dropdown-item"))A.findOne(".dropdown-toggle",e.closest(".dropdown")).classList.add(yt);else for(const s of A.parents(e,".nav, .list-group"))for(const l of A.prev(s,Mo))l.classList.add(yt)}_clearActiveClass(e){e.classList.remove(yt);const s=A.find(`${rs}.${yt}`,e);for(const l of s)l.classList.remove(yt)}static jQueryInterface(e){return this.each(function(){const s=Dt.getOrCreateInstance(this,e);if(typeof e=="string"){if(s[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);s[e]()}})}}b.on(window,Oo,()=>{for(const i of A.find('[data-bs-spy="scroll"]'))Dt.getOrCreateInstance(i)}),z(Dt);const Ze=".bs.tab",Do=`hide${Ze}`,No=`hidden${Ze}`,Bo=`show${Ze}`,Fo=`shown${Ze}`,Ho=`click${Ze}`,qo=`keydown${Ze}`,Uo=`load${Ze}`,Ko="ArrowLeft",zr="ArrowRight",Wo="ArrowUp",Gr="ArrowDown",is="Home",Vr="End",et="active",Qr="fade",as="show",Xr=".dropdown-toggle",os=`:not(${Xr})`,Yr='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ls=`.nav-link${os}, .list-group-item${os}, [role="tab"]${os}, ${Yr}`,zo=`.${et}[data-bs-toggle="tab"], .${et}[data-bs-toggle="pill"], .${et}[data-bs-toggle="list"]`;class tt extends we{constructor(e){super(e),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),b.on(this._element,qo,s=>this._keydown(s)))}static get NAME(){return"tab"}show(){const e=this._element;if(this._elemIsActive(e))return;const s=this._getActiveElem(),l=s?b.trigger(s,Do,{relatedTarget:e}):null;b.trigger(e,Bo,{relatedTarget:s}).defaultPrevented||l&&l.defaultPrevented||(this._deactivate(s,e),this._activate(e,s))}_activate(e,s){e&&(e.classList.add(et),this._activate(A.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute("role")==="tab"?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),b.trigger(e,Fo,{relatedTarget:s})):e.classList.add(as)},e,e.classList.contains(Qr)))}_deactivate(e,s){e&&(e.classList.remove(et),e.blur(),this._deactivate(A.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute("role")==="tab"?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),b.trigger(e,No,{relatedTarget:s})):e.classList.remove(as)},e,e.classList.contains(Qr)))}_keydown(e){if(![Ko,zr,Wo,Gr,is,Vr].includes(e.key))return;e.stopPropagation(),e.preventDefault();const s=this._getChildren().filter(d=>!y(d));let l;if([is,Vr].includes(e.key))l=s[e.key===is?0:s.length-1];else{const d=[zr,Gr].includes(e.key);l=Be(s,e.target,d,!0)}l&&(l.focus({preventScroll:!0}),tt.getOrCreateInstance(l).show())}_getChildren(){return A.find(ls,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,s){this._setAttributeIfNotExists(e,"role","tablist");for(const l of s)this._setInitialAttributesOnChild(l)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const s=this._elemIsActive(e),l=this._getOuterElement(e);e.setAttribute("aria-selected",s),l!==e&&this._setAttributeIfNotExists(l,"role","presentation"),s||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const s=A.getElementFromSelector(e);s&&(this._setAttributeIfNotExists(s,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(s,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,s){const l=this._getOuterElement(e);if(!l.classList.contains("dropdown"))return;const d=(u,f)=>{const g=A.findOne(u,l);g&&g.classList.toggle(f,s)};d(Xr,et),d(".dropdown-menu",as),l.setAttribute("aria-expanded",s)}_setAttributeIfNotExists(e,s,l){e.hasAttribute(s)||e.setAttribute(s,l)}_elemIsActive(e){return e.classList.contains(et)}_getInnerElement(e){return e.matches(ls)?e:A.findOne(ls,e)}_getOuterElement(e){return e.closest(".nav-item, .list-group-item")||e}static jQueryInterface(e){return this.each(function(){const s=tt.getOrCreateInstance(this);if(typeof e=="string"){if(s[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);s[e]()}})}}b.on(document,Ho,Yr,function(i){["A","AREA"].includes(this.tagName)&&i.preventDefault(),y(this)||tt.getOrCreateInstance(this).show()}),b.on(window,Uo,()=>{for(const i of A.find(zo))tt.getOrCreateInstance(i)}),z(tt);const qe=".bs.toast",Go=`mouseover${qe}`,Vo=`mouseout${qe}`,Qo=`focusin${qe}`,Xo=`focusout${qe}`,Yo=`hide${qe}`,Jo=`hidden${qe}`,Zo=`show${qe}`,el=`shown${qe}`,Jr="hide",dn="show",un="showing",tl={animation:"boolean",autohide:"boolean",delay:"number"},nl={animation:!0,autohide:!0,delay:5e3};class Nt extends we{constructor(e,s){super(e,s),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return nl}static get DefaultType(){return tl}static get NAME(){return"toast"}show(){b.trigger(this._element,Zo).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Jr),P(this._element),this._element.classList.add(dn,un),this._queueCallback(()=>{this._element.classList.remove(un),b.trigger(this._element,el),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(b.trigger(this._element,Yo).defaultPrevented||(this._element.classList.add(un),this._queueCallback(()=>{this._element.classList.add(Jr),this._element.classList.remove(un,dn),b.trigger(this._element,Jo)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(dn),super.dispose()}isShown(){return this._element.classList.contains(dn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,s){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=s;break;case"focusin":case"focusout":this._hasKeyboardInteraction=s}if(s)return void this._clearTimeout();const l=e.relatedTarget;this._element===l||this._element.contains(l)||this._maybeScheduleHide()}_setListeners(){b.on(this._element,Go,e=>this._onInteraction(e,!0)),b.on(this._element,Vo,e=>this._onInteraction(e,!1)),b.on(this._element,Qo,e=>this._onInteraction(e,!0)),b.on(this._element,Xo,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const s=Nt.getOrCreateInstance(this,e);if(typeof e=="string"){if(s[e]===void 0)throw new TypeError(`No method named "${e}"`);s[e](this)}})}}return Gt(Nt),z(Nt),{Alert:Ct,Button:Lt,Carousel:lt,Collapse:dt,Dropdown:ke,Modal:Ye,Offcanvas:je,Popover:cn,ScrollSpy:Dt,Tab:tt,Toast:Nt,Tooltip:Je}})})(Il);const te={render(){return`
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="logo">
              <a href="/"><img height="50px" src="../..../../public/images/logo1.png" alt="Serba Sayur ID"></a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form id="search-form" class="w-100 d-flex me-auto my-2 mx-4 mx-md-3 mx-sm-0 my-lg-0 mb-2 mb-lg-0">
                <div class="input-group w-100 position-relative">
                  <input id="search-input" class="form-control ps-5" type="search" placeholder="Ayo hidup sehat dan cari kebutuhanmu disini!" aria-label="Search">
                  <span class="input-group-text position-absolute top-50 start-0 translate-middle-y border-0 bg-transparent"><i class="fas fa-search icon-search"></i></span>
                </div>
              </form>
              <ul class="navbar-nav mx-3 mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link d-none d-lg-block" aria-current="page" href="/notification"><i class="fa-sharp fa-regular fa-bell icon"></i></a>
                  <a class="nav-link d-lg-none" aria-current="page" href="/notification">Notifikasi</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-none d-lg-block" href="/chat"><i class="fa-sharp fa-regular fa-comment-dots icon"></i></a>
                  <a class="nav-link d-lg-none" href="/chat">Pesan</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-none d-lg-block" href="/order"><i class="fas fa-shopping-cart icon"></i></a>
                  <a class="nav-link d-lg-none" href="/order">Keranjang</a>
                </li>
                <li class="nav-item d-none d-lg-block">
                  <div class="ms-2"><img height="25px" src="../..../../public/images/icon3.png" alt="" /></div>
                </li>
                <li class="nav-item ms-2 d-flex flex-column flex-sm-row">
                  ${localStorage.getItem("isLoggedIn")?`
                    <!-- Jika pengguna sudah login, tampilkan tombol Profil dan Keluar -->
                    <a href="/profile" class="btn text-white me-sm-2 mb-2 mb-sm-0" style="background-color: #4DC38C;">Profil</a>
                    <button id="logout-button" class="btn text-success" style="background-color: #D9D9D9;">Keluar</button>
                    `:`
                    <!-- Jika pengguna belum login, tampilkan tombol Masuk dan Daftar -->
                    <a href="/login" type="button" class="btn text-white me-sm-2 mb-2 mb-sm-0" style="background-color: #4DC38C;">Masuk</a>
                    <a href="/register" type="button" class="btn text-success" style="background-color: #D9D9D9;">Daftar</a>
                    `}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    `},afterRender(){document.getElementById("search-form").addEventListener("submit",o=>{o.preventDefault();const c=document.getElementById("search-input").value;c&&R(`/search/${c}`)});const n=document.getElementById("logout-button");n&&n.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userId"),R.redirect("/login")});const r=localStorage.getItem("isLoggedIn");document.querySelectorAll(".nav-item .nav-link").forEach(o=>{o.addEventListener("click",c=>{c.preventDefault();const h=o.getAttribute("href");R(r?h:"/login")})})}},xe="https://serbasayur-id-back-end.up.railway.app";async function En(){const t=await fetch(`${xe}/products`);if(!t.ok)throw new Error("Failed to fetch products");const n=await t.json();let r=[];if(Array.isArray(n))r=n;else if(n&&n.data&&Array.isArray(n.data.products))r=n.data.products;else throw new Error("Invalid data format for products");return r.forEach(a=>{a.imageUrl=`${xe}/image/${a.image}`}),r}async function xn(t){const n=await fetch(`${xe}/products/${t}`);if(!n.ok)throw new Error(`Failed to fetch product with id ${t}`);return n.json()}async function $l(t){try{const n=await fetch(`${xe}/products`,{method:"POST",body:t});if(!n.ok){const a=await n.json();throw new Error(a.message||"Gagal menambahkan produk")}return await n.json()}catch(n){throw console.error("Gagal menambahkan produk:",n.message),new Error(`Gagal menambahkan produk: ${n.message}`)}}async function Sl(t,n){try{const r=new FormData;r.append("nama",n.nama),r.append("id_kategori",n.id_kategori),r.append("deskripsi",n.deskripsi),r.append("harga",n.harga),r.append("kuantitas",n.kuantitas),r.append("rating",n.rating),n.image&&r.append("image",n.image);const a=await fetch(`${xe}/products/${t}`,{method:"PUT",body:r});if(!a.ok){const c=await a.json();throw new Error(c.message||"Gagal memperbarui produk")}return await a.json()}catch(r){throw console.error("Gagal memperbarui produk:",r.message),new Error(`Gagal memperbarui produk: ${r.message}`)}}async function Cl(t){const n=await fetch(`${xe}/products/${t}`,{method:"DELETE"});if(!n.ok)throw new Error("Failed to delete product");return n.json()}async function Ll(t){const n=await fetch(`${xe}/products?category=${t}`);if(!n.ok)throw new Error(`Failed to fetch products for category ${t}`);const r=await n.json();let a=[];if(Array.isArray(r))a=r;else if(r&&r.data&&Array.isArray(r.data.products))a=r.data.products;else throw new Error("Invalid data format for products");return a.forEach(o=>{o.imageUrl=`${xe}/image/${o.image}`}),a}async function Tl(t){const n=await fetch(`${xe}/products?id_produk=${t}`);if(!n.ok)throw new Error(`Failed to fetch search results for query: ${t}`);return n.json()}async function rt(){const t=await fetch(`${xe}/categories`);if(!t.ok)throw new Error("Failed to fetch categories");return(await t.json()).data.categories}async function Pl(t){const n=await fetch(`${xe}/categories`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw new Error("Failed to add category");return(await n.json()).data}const Ut="https://serbasayur-id-back-end.up.railway.app";async function Ss(){const t=await fetch(`${Ut}/users`);if(!t.ok)throw new Error("Failed to fetch users");return t.json()}async function vn(t){const n=await fetch(`${Ut}/users/${t}`);if(!n.ok)throw new Error(`Failed to fetch user with id ${t}`);return n.json()}async function Ol(t){const n=await fetch(`${Ut}/users`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw new Error("Failed to add user");return n.json()}async function Ml(t,n){const r=await fetch(`${Ut}/users/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error("Failed to update user");return r.json()}async function Rl(t,n){try{const r=await fetch(`${Ut}/users`);if(!r.ok)throw new Error("Failed to fetch users");const o=(await r.json()).data.users;if(!Array.isArray(o))throw new Error("Expected an array of users");const c=o.find(h=>h.email===t&&h.password===n);if(console.log(o),c)return localStorage.setItem("isLoggedIn",!0),localStorage.setItem("userId",c.id_user),c;throw alert("Invalid email or password"),new Error("Invalid email or password")}catch(r){throw console.error("Failed to login:",r.message),new Error("Failed to login")}}var jl=typeof global=="object"&&global&&global.Object===Object&&global,Dl=typeof self=="object"&&self&&self.Object===Object&&self,Nl=jl||Dl||Function("return this")(),bn=Nl.Symbol,Mi=Object.prototype,Bl=Mi.hasOwnProperty,Fl=Mi.toString,Bt=bn?bn.toStringTag:void 0;function Hl(t){var n=Bl.call(t,Bt),r=t[Bt];try{t[Bt]=void 0;var a=!0}catch{}var o=Fl.call(t);return a&&(n?t[Bt]=r:delete t[Bt]),o}var ql=Object.prototype,Ul=ql.toString;function Kl(t){return Ul.call(t)}var Wl="[object Null]",zl="[object Undefined]",hi=bn?bn.toStringTag:void 0;function Gl(t){return t==null?t===void 0?zl:Wl:hi&&hi in Object(t)?Hl(t):Kl(t)}function Vl(t){return t!=null&&typeof t=="object"}var Ql="[object Symbol]";function Xl(t){return typeof t=="symbol"||Vl(t)&&Gl(t)==Ql}var Yl=/\s/;function Jl(t){for(var n=t.length;n--&&Yl.test(t.charAt(n)););return n}var Zl=/^\s+/;function ec(t){return t&&t.slice(0,Jl(t)+1).replace(Zl,"")}function pi(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}var fi=NaN,tc=/^[-+]0x[0-9a-f]+$/i,nc=/^0b[01]+$/i,sc=/^0o[0-7]+$/i,rc=parseInt;function ic(t){if(typeof t=="number")return t;if(Xl(t))return fi;if(pi(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=pi(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=ec(t);var r=nc.test(t);return r||sc.test(t)?rc(t.slice(2),r?2:8):tc.test(t)?fi:+t}var mi=1/0,ac=17976931348623157e292;function oc(t){if(!t)return t===0?t:0;if(t=ic(t),t===mi||t===-mi){var n=t<0?-1:1;return n*ac}return t===t?t:0}function lc(t){var n=oc(t),r=n%1;return n===n?r?n-r:n:0}function cc(t,n,r){var a=-1,o=t.length;n<0&&(n=-n>o?0:o+n),r=r>o?o:r,r<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var c=Array(o);++a<o;)c[a]=t[a+n];return c}var dc=Math.ceil,uc=Math.max;function Cs(t,n,r){n===void 0?n=1:n=uc(lc(n),0);var a=t==null?0:t.length;if(!a||n<1)return[];for(var o=0,c=0,h=Array(dc(a/n));o<a;)h[c++]=cc(t,o,o+=n);return h}const Ri=()=>{const t=document.getElementById("increaseQty"),n=document.getElementById("decreaseQty"),r=document.getElementById("quantity");t&&n&&r?(t.addEventListener("click",()=>{r.value=parseInt(r.value)+1}),n.addEventListener("click",()=>{r.value>1&&(r.value=parseInt(r.value)-1)})):console.error("One or more elements not found.")},hc=t=>{const n='<span class="rating" style="color: #4dc38c; font-size: 2rem">★</span>'.repeat(Math.floor(t)),r=t%1!==0?'<span style="color: #4dc38c; font-size: 2rem">★</span>':"",a='<span style="color: #4dc38c; font-size: 2rem">☆</span>'.repeat(Math.floor(5-t));return`${n}${r}${a}`},Kt=t=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(t),gi={async render(){try{const[t,n]=await Promise.all([En(),rt()]);if(!Array.isArray(t)||!Array.isArray(n))throw new Error("Invalid data format for products or categories");const r=n.find(m=>m.nama_kategori.toLowerCase()==="Sayuran Segar".toLowerCase());if(!r)throw new Error("Kategori 'Sayuran Segar' tidak ditemukan");const a=t.filter(m=>m.id_kategori===r.id_kategori).slice(0,9),o={lg:2,md:3,sm:6};return`
        <div class="container mt-5">
          <h2 class="text-center mb-4 py-2 title-product">Sayuran Segar</h2>
          <div id="vegetable-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${Cs(a,3).map((m,v)=>{const y=m.map(k=>`
            <div class="col-4 col-md-${o.md} col-lg-${o.lg}">
              <div class="card h-100" data-id="${k.id_produk}">
                <img height="100px" src="${k.imageUrl}" class="img-fluid" alt="${k.nama}">
                <div class="card-body d-flex flex-column flex-lg-column flex-md-column flex-sm-column text-center">
                  <a href="/detail/${k.id_produk}" class="text-decoration-none text-black product-link" data-id="${k.id_produk}">
                    <p class="card-title text-sm" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${k.nama}</p>
                  </a>
                  <div class="mt-auto">
                    <p class="card-text fw-bold text-sm">${Kt(k.harga)}</p>
                  </div>
                  <div class="">
                    <button class="btn-sm btn-cart rounded-3 p-2 mt-1" type="submit" data-id="${k.id_produk}">masukan keranjang</button>
                  </div>
                </div>
              </div>
            </div>
          `).join("");return`
          <div class="carousel-item ${v===0?"active":""}">
            <div class="row justify-content-center">
              ${y}
            </div>
          </div>
        `}).join("")}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#vegetable-carousel" data-bs-slide="prev">
              <span class="prev-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-left"></i></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#vegetable-carousel" data-bs-slide="next">
              <span class="next-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      `}catch(t){return console.error(t),"<div>Error fetching products. Please try again later.</div>"}},afterRender(){try{const t=localStorage.getItem("userId"),n=document.querySelectorAll(".product-link")}catch{}}},pc={async render(){try{const[t,n]=await Promise.all([En(),rt()]);if(!Array.isArray(t)||!Array.isArray(n))throw new Error("Invalid data format for products or categories");const r=n.find(m=>m.nama_kategori.toLowerCase()==="Buah-Buahan".toLowerCase());if(!r)throw new Error("Kategori 'Buah-buahan' tidak ditemukan");const a=t.filter(m=>m.id_kategori===r.id_kategori).slice(0,9),o={lg:2,md:3,sm:6};return`
        <div class="container mt-5">
          <h2 class="text-center mb-4 py-2 title-product">Buah-buahan</h2>
          <div id="fruits-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${Cs(a,3).map((m,v)=>{const y=m.map(k=>`
            <div class="col-4 col-md-${o.md} col-lg-${o.lg}">
              <div class="card h-100" data-id="${k.id_produk}">
                <img height="100px" src="${k.imageUrl}" class="img-fluid" alt="${k.nama}">
                <div class="card-body d-flex flex-column flex-lg-column flex-md-column flex-sm-column text-center">
                  <a href="/detail/${k.id_produk}" class="text-decoration-none text-black product-link" data-id="${k.id_produk}">
                    <p class="card-title text-sm" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${k.nama}</p>
                  </a>
                  <div class="mt-auto">
                    <p class="card-text fw-bold text-sm">${Kt(k.harga)}</p>
                  </div>
                  <div class="">
                    <button class="btn-sm btn-cart rounded-3 p-2 mt-1">masukan keranjang</button>
                  </div>
                </div>
              </div>
            </div>
          `).join("");return`
          <div class="carousel-item ${v===0?"active":""}">
            <div class="row justify-content-center">
              ${y}
            </div>
          </div>
        `}).join("")}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#fruits-carousel" data-bs-slide="prev">
              <span class="prev-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-left"></i></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#fruits-carousel" data-bs-slide="next">
              <span class="next-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      `}catch(t){return console.error(t),"<div>Error fetching products. Please try again later.</div>"}},afterRender(){document.querySelectorAll(".product-link").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault();const a=r.target.closest(".product-link").getAttribute("data-id");R(`/detail/${a}`)})})}},fc={async render(){try{const[t,n]=await Promise.all([En(),rt()]);if(!Array.isArray(t)||!Array.isArray(n))throw new Error("Invalid data format for products or categories");const r=["Sayuran Segar","Buah-Buahan"],a=t.filter(k=>{const S=n.find(P=>P.id_kategori===k.id_kategori);return S&&!r.includes(S.nama_kategori)}),h=mc(a).slice(0,9),p={lg:2,md:3,sm:6};return`
        <div class="container mt-5">
          <h2 class="text-center mb-4 py-2 title-product">Produk Lainnya</h2>
          <div id="other-cards-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${Cs(h,3).map((k,S)=>{const P=k.map(N=>`
            <div class="col-4 col-md-${p.md} col-lg-${p.lg}">
              <div class="card h-100" data-id="${N.id_produk}">
                <img height="100px" src="${N.imageUrl}" class="img-fluid" alt="${N.nama}">
                <div class="card-body d-flex flex-column flex-lg-column flex-md-column flex-sm-column text-center">
                  <a href="/detail/${N.id_produk}" class="text-decoration-none text-black product-link" data-id="${N.id_produk}">
                    <p class="card-title text-sm" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${N.nama}</p>
                  </a>
                  <div class="mt-auto">
                    <p class="card-text fw-bold text-sm">${Kt(N.harga)}</p>
                  </div>
                  <div class="">
                    <button class="btn-sm btn-cart rounded-3 p-2 mt-1">masukan keranjang</button>
                  </div>
                </div>
              </div>
            </div>
          `).join("");return`
          <div class="carousel-item ${S===0?"active":""}">
            <div class="row justify-content-center">
              ${P}
            </div>
          </div>
        `}).join("")}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#other-cards-carousel" data-bs-slide="prev">
              <span class="prev-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-left"></i></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#other-cards-carousel" data-bs-slide="next">
              <span class="next-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      `}catch(t){return console.error(t),"<div>Error fetching products. Please try again later.</div>"}},afterRender(){document.querySelectorAll(".product-link").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault();const a=r.target.closest(".product-link").getAttribute("data-id");R(`/detail/${a}`)})})}};function mc(t){for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t}const ji=[{id:1,name:"Sayuran Segar",image:"sayuran-segar.png"},{id:2,name:"Buah-Buahan",image:"buah-buahan.png"},{id:3,name:"Herbal dan Rempah",image:"herbal-dan-rempah.png"},{id:4,name:"Kacang-Kacangan",image:"kacang-kacangan.png"},{id:5,name:"Buah Kering",image:"buah-kering.png"},{id:6,name:"Minuman Sehat",image:"minuman-sehat.png"},{id:7,name:"Sayuran Organik",image:"sayuran-organik.png"},{id:8,name:"Produk Olahan",image:"produk-olahan.png"},{id:9,name:"Bibit dan Benih",image:"bibit-dan-benih.png"},{id:10,name:"Peralatan Berkebun",image:"peralatan-berkebun.png"},{id:11,name:"Makanan Ringan Sehat",image:"makanan-ringan-sehat.png"},{id:12,name:"Paket Hemat dan Bundel",image:"paket-hemat-dan-bundel.png"}],gc={async render(){return`
      <div class="home-category mt-5">
        <div class="category-header-section text-center">
          <div class="category-header-section__header">
            <h2 class="category-header-section__header__title">Kategori</h2>
          </div>
          <div class="category-header-section__content">
            <div class="image-category">
              <ul class="category-list mt-5 mb-5">
                ${ji.map(n=>`
          <li class="category-item">
            <a class="category-grid" href="/c/${n.name}">
              <div class="item-wrap">
                <div class="item-wrap__image">
                  <div class="category-image">
                    <img class="category-image__placement" src="../..../../public/images/categories/${n.image}">
                  </div>
                </div>
                <div class="item-wrap__image-title">
                  ${n.name}
                </div>
              </div>
            </a>
          </li>
        `).join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `}},Te={async render(){return`
      <footer>
        <div class="container mt-4 footer-container">
          <div class="footer-section" id="footer-about">
            <h2>Tentang Kami</h2>
            <p>Kami menyediakan berbagai sayuran segar, buah-buahan, minuman sehat, dan produk berkualitas lainnya langsung dari petani lokal. Berkomitmen untuk kesehatan dan kesejahteraan Anda.</p>
          </div>
          <div class="footer-section" id="footer-links">
            <h2>Sebarsayur.id</h2>
            <ul>
              <li><a href="#">Beranda</a></li>
              <li><a href="#">Belanja</a></li>
              <li><a href="#">Tentang Kami</a></li>
              <li><a href="#">Kontak</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div class="footer-section" id="footer-contact">
            <h2>Kontak Kami</h2>
            <p><span class="footer-icon"><i class="fas fa-map-marker-alt"></i></span> Jalan Sehat No. 123, Jakarta</p>
            <p><span class="footer-icon"><i class="fas fa-phone"></i></span> +62 123 4567 890</p>
            <p><span class="footer-icon"><i class="fas fa-envelope"></i></span> <a href="mailto:info@sebarsayur.id">info@sebarsayur.id</a></p>
          </div>
          <div class="footer-section" id="footer-follow">
            <h2>Ikuti Kami</h2>
            <div class="social-icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
          <div class="footer-section" id="footer-logo">
            <img src="../..../../public/images/logo1.png" alt="Logo Sebarsayur.id">
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2024 Serba Sayur Id. All Rights Reserved.</p>
        </div>
      </footer>
    `}},vs={async render(){const t=await te.render(),n=await gi.render(),r=await pc.render(),a=await gc.render(),o=await fc.render(),c=await Te.render();return`
      ${t}
      <div class="container hero mt-3">
        <div class="row">
            <a href="/about"><img src="../..../../public/images/hero.png" alt="Hero Image" class="img-fluid" /></a>
        </div>
      </div>
      ${n}
      ${r}
      ${o}
      ${a}
      ${c}
    `},async afterRender(){await te.afterRender(),gi.afterRender()}},vc={async render(){return`
        <div id="login-page">
          <div class="login-container text-center">
            <div class="login-card">
              <img src="../..../../public/images/logo1.png" alt="Logo" class="logo">
              <form id="login-form">
                <div class="input-group">
                  <div class="input-container">
                    <label for="email"></label>
                    <div class=""><i class="fas fa-user"></i></div>
                    <input type="email" id="email" name="email" placeholder="EMAIL" required>
                  </div>
                </div>
                <div class="input-group">
                  <div class="input-container">
                    <label for="password"></label>
                    <div class=""><i class="fas fa-lock"></i></div>
                    <input type="password" id="password" name="password" placeholder="PASSWORD" required>
                  </div>
                </div>
                <button type="submit" class="login-button">Login</button>
              </form>
              <p class="register-link">Don't have an account? <a href="/register">Register</a></p>
            </div>
          </div>
        </div>
      `},async afterRender(){document.getElementById("login-form").addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("email").value,a=document.getElementById("password").value;try{const o=await login(r,a);console.log("Login berhasil:",o),sessionStorage.setItem("currentUser",JSON.stringify(o)),window.location.href="/"}catch(o){console.error("Login gagal:",o.message),alert(o.message)}})}},bc={async render(){return`
      ${await vc.render()}
    `},async afterRender(){localStorage.getItem("isLoggedIn"),document.getElementById("login-form").addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("email").value,a=document.getElementById("password").value;try{const o=await Rl(r,a);localStorage.setItem("isLoggedIn",!0),R.redirect("/")}catch(o){console.error("Failed to login:",o)}})}},yc={async render(){return`
      <div id="register-page">
        <div class="register-container text-center">
          <div class="register-card">
            <img src="../..../../public/images/logo1.png" alt="Logo" class="logo">
            <form id="register-form">
              <div class="input-group">
                <div class="input-container">
                  <label for="username"></label>
                  <div class=""><i class="fas fa-user"></i></div>
                  <input type="text" id="username" name="username" placeholder="USERNAME" required>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="email"></label>
                  <div class=""><i class="fas fa-user"></i></div>
                  <input type="email" id="email" name="email" placeholder="EMAIL" required>
                  <span id="email-error" class="error-message"></span>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="password"></label>
                  <div class=""><i class="fas fa-lock"></i></div>
                  <input type="password" id="password" name="password" placeholder="PASSWORD" required>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="phone"></label>
                  <div class=""><i class="fas fa-phone"></i></div>
                  <input type="tel" id="phone" name="phone" placeholder="PHONE" required>
                  <span id="phone-error" class="error-message"></span>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="address"></label>
                  <div class=""><i class="fas fa-home"></i></div>
                  <input type="text" id="address" name="address" placeholder="ADDRESS" required>
                </div>
              </div>
              <button type="submit" class="register-button">Register</button>
            </form>
            <p class="login-link">Have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    `}},_c={async render(){return yc.render()},async afterRender(){document.querySelector("#register-page form").addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("username").value,a=document.getElementById("email").value,o=document.getElementById("password").value,c=document.getElementById("phone").value,h=document.getElementById("address").value,p={username:r,email:a,password:o,nomor_telepon:c,alamat:h};try{const v=(await Ss()).data.users;if(!Array.isArray(v))throw new Error("Failed to fetch users");const y=v.some(P=>P.email===a),k=v.some(P=>P.nomor_telepon===c);if(y){alert("Email sudah digunakan, silakan gunakan email lain.");return}if(k){alert("Nomor telepon sudah digunakan, silakan gunakan nomor telepon lain.");return}const S=await Ol(p);document.getElementById("username").value="",document.getElementById("email").value="",document.getElementById("password").value="",document.getElementById("phone").value="",document.getElementById("address").value="",R.redirect("/login")}catch(m){console.error("Failed to register:",m)}})}},An="https://serbasayur-id-back-end.up.railway.app";async function wc(t){try{const n=await fetch(`${An}/carts/${t}`);if(!n.ok)throw new Error("Failed to fetch carts");return(await n.json()).data.carts}catch(n){throw console.error("Error fetching carts:",n.message),n}}function kc(){const t=new Date,n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0"),h=String(t.getSeconds()).padStart(2,"0");return`${n}-${r}-${a} ${o}:${c}:${h}`}async function Ec(t){try{const n=await fetch(`${An}/carts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_user:t.id_user,create_at:kc()})});if(!n.ok){const a=await n.json();throw new Error(a.message||"Failed to add cart")}return(await n.json()).data}catch(n){throw console.error("Failed to add cart:",n.message),n}}async function xc(t){try{const n=await fetch(`${An}/cartitems/${t}`);if(!n.ok)throw new Error("Failed to fetch cart items");return(await n.json()).data.cart_items}catch(n){throw console.error("Error fetching cart items:",n),n}}async function Ac(t,n,r){try{const a=await fetch(`${An}/cartitems`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_cart:t,id_produk:n,quantity:r})});if(!a.ok){const c=await a.json();throw new Error(c.message||"Failed to add cart item")}return(await a.json()).data}catch(a){throw console.error("Failed to add cart item:",a.message),a}}const Ic={async render(t){try{const n=await xn(t),r=localStorage.getItem("userId");if(n.status==="success"){const a=n.data.product,o=`https://serbasayur-id-back-end.up.railway.app/image/${a.image}`;return`
          ${await te.render()}
          <div class="container my-5">
            <div class="row">
              <div class="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
                <img class="img-fluid" src="${o}" alt="${a.nama}" />
              </div>
              <div class="col-12 col-md-7 text-center text-md-start">
                <h3 class="detail-name">${a.nama}</h3>
                <p class="detail-price">${Kt(a.harga)}/kg</p>
                <p>${hc(a.rating)}</p>
                <p>Qty: ${a.kuantitas}</p>
                <div class="d-flex flex-column flex-md-row align-items-center mb-3">
                  <div class="d-flex align-items-center mb-3 mb-md-0">
                    <button id="decreaseQty" class="btn btn-outline-success">-</button>
                    <input type="number" id="quantity" value="1" class="form-control text-center mx-2" style="width: 60px;">
                    <button id="increaseQty" class="btn btn-outline-success">+</button>
                  </div>
                  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button id="addToCart" class="btn btn-success btn-cart p-2 mx-2">+ Keranjang</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mt-5">
            <ul class="nav nav-underline" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active text-success"
                  id="detail-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#detail"
                  type="button"
                  role="tab"
                  aria-controls="detail"
                  aria-selected="true"
                >
                  Detail
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-success"
                  id="specs-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#specs"
                  type="button"
                  role="tab"
                  aria-controls="specs"
                  aria-selected="false"
                >
                  Spesifikasi
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-success"
                  id="review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#review"
                  type="button"
                  role="tab"
                  aria-controls="review"
                  aria-selected="false"
                >
                  Review
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="detail"
                role="tabpanel"
                aria-labelledby="detail-tab"
              >
                <p>${a.deskripsi}</p>
              </div>
              <div
                class="tab-pane fade"
                id="specs"
                role="tabpanel"
                aria-labelledby="specs-tab"
              >
                <p>${a.specifications}</p>
              </div>
              <div
                class="tab-pane fade"
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <p>Bintang : ${a.rating}</p>
              </div>
            </div>
          </div>
          ${await Te.render()}
        `}else throw new Error("Failed to fetch product or user details")}catch(n){return console.error(n),"<div>Error fetching product details. Please try again later.</div>"}},afterRender(t){te.afterRender(),Ri(),document.getElementById("addToCart").addEventListener("click",async()=>{try{const r=localStorage.getItem("userId");if(!r){alert("Tidak bisa memasukkan ke Keranjang, Anda belum login."),R.redirect("/login");return}const o=(await Ec({id_user:r})).id_cart,c=parseInt(document.getElementById("quantity").value,10),h=await Ac(o,t,c);alert("Produk berhasil ditambahkan ke keranjang!")}catch(r){console.error("Error adding product to cart:",r.message),alert("Gagal menambahkan produk ke keranjang. Silakan coba lagi.")}})}},$c={async render(){return`
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="logo">
              <a href="/"><img height="50px" src="../..../../public/images/logo1.png" alt="Serba Sayur ID"></a>
            </div>
          </div>
        </nav>
      </div>
    `},afterRender(){document.getElementById("search-form").addEventListener("submit",n=>{n.preventDefault();const r=document.getElementById("search-input").value;r&&R(`/search/${r}`)})}},Sc={async render(){try{const t=localStorage.getItem("userId");if(!t)throw new Error("User not logged in");const n=await vn(t);if(n.status==="success")return`
          <div class="container">
            <h2 class="section-title green fw-semibold">ALAMAT KIRIM</h2>
            <div class="address-wrapper d-flex">
              <h2 class="address-body fw-light">${n.data.user.alamat}</h2>
              <a href="" class="address-change text-center"><h2>UBAH</h2></a>
            </div>
          </div>
        `;throw new Error("Failed to fetch user details")}catch(t){return console.error("Error fetching address:",t.message),"<div>Error fetching address. Please try again later.</div>"}}},Cc={async render(){return`
        <div class="container">
            <h2 class="section-title fw-semibold">PENGIRIMAN</h2>
            <div class="shipment-wrapper d-flex">
                <select class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Pilih</option>
                <option value="Next Day">Next Day</option>
                <option value="Kargo">Kargo</option>
                <option value="Reguler">Reguler</option>
                <option value="Same Day">Same Day</option>
            </select>
                <h1 class="shipment-price fw-normal">Rp25.000</h1>
            </div>
        </div>
        `}},Lc={async render(){return`
        <div class="payment-container d-flex">
            <h1 class="payment-title fw-semibold">Pilih Metode Pembayaran</h1>
            <select id="paymentMethod" class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Pilih</option>
                <option value="QRIS">QRIS</option>
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="Gopay">Gopay</option>
                <option value="Paypal">Paypal</option>
                <option value="Cash On Delivery">Cash On Delivery</option>
            </select>
        </div>        
        `}},In="https://serbasayur-id-back-end.up.railway.app";async function Tc(t,n,r,a){try{console.log({id_user:t,tanggal_order:n,status:r,total_harga:a});const o=await fetch(`${In}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_user:t,tanggal_order:n,status:r,total_harga:a})});if(!o.ok)throw new Error("Failed to add order");return await o.json()}catch(o){throw new Error(`Failed to add order: ${o.message}`)}}async function Pc(t,n,r,a){try{const o=await fetch(`${In}/orderitems`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_order:t,id_produk:n,kuantitas:r,harga_satuan:a})});if(!o.ok){const c=await o.text();throw new Error(`Failed to add order item: ${o.status} ${c}`)}return o.json()}catch(o){throw console.error("Error in addOrderItem:",o.message),o}}async function vi(){try{const t=await fetch(`${In}/orders`);if(!t.ok)throw new Error("Failed to fetch orders");return t.json()}catch(t){throw console.error("Error fetching orders:",t.message),t}}async function Oc(t){try{const n=await fetch(`${In}/orderitems/${t}`);if(!n.ok)throw new Error("Failed to fetch order items");return(await n.json()).data.order_items}catch(n){throw console.error("Error fetching order items:",n.message),n}}const Mc="https://serbasayur-id-back-end.up.railway.app";async function Rc(t){try{const n=await fetch(`${Mc}/payments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw new Error("Failed to add payment");return await n.json()}catch(n){throw console.error("Error adding payment:",n),n}}var bi="",hs=0;const jc={async render(){try{const t=localStorage.getItem("userId");console.log("User ID:",t);const n=[],a=(await vi(t)).data.orders;console.log("Response:",a);for(const p of a){bi=p.id_order;const m=await Oc(p.id_order);n.push(...m)}const o=[];for(const p of n){const m=await xn(p.id_produk);if(m.data.product){const v=m.data.product;o.push({id_produk:v.id_produk,nama:v.nama,harga:v.harga,quantity:p.quantity,image:v.image})}}const c=o.map((p,m)=>`
            <div class="border rounded-3 m-3" key="${p.id_produk}">
              <h4 class="section-title ms-5 my-2">Serbasayur.id</h4>
              <div class="d-flex">
                <div class="border border-2 ms-5 mb-3 mt-2">
                  <img width="100px" src="https://serbasayur-id-back-end.up.railway.app/image/${p.image}" alt="${p.image}" />
                </div>
                <div class="mx-5 d-flex flex-column align-content-center w-100">
                  <h4>Produk ${p.nama}</h4>
                  <p>Harga: Rp${p.harga}</p>
                  <div class="d-flex justify-content-between">
                    <div class="form-check form-check-reverse mt-2">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked-${p.id_produk}" checked>
                      <label class="form-check-label" for="flexCheckChecked-${p.id_produk}"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).join(""),h=o.reduce((p,m)=>{const v=parseFloat(m.harga),y=parseInt(m.quantity);return isNaN(v)||isNaN(y)?p:p+v*y},0);return console.log("Total Harga:",h),hs=h+25e3,`
        ${await $c.render()}
        <div id="checkout-page">
          <h1 class="checkout-title fw-semibold">Checkout</h1>
          ${await Sc.render()}
          ${c}
          ${await Cc.render()}
          ${await Lc.render()}
          <div class="total-price-container d-flex">
            <h2 class="price-total__title fw-normal">Total Harga</h2>
            <h1 class="price-total__value fw-normal">Rp${hs}</h1>
          </div> 
          <div class="d-flex justify-content-end w-100 mt-2">
            <button id="payButton" class="pay text-center w-25 h-25">Bayar</button>
          </div>
        </div>
        ${await Te.render()} <!-- Memanggil render untuk komponen Footer -->
      `}catch(t){return console.error("Error rendering CheckoutPage:",t),"<div>Error rendering CheckoutPage. Please try again later.</div>"}},async afterRender(){document.getElementById("payButton").addEventListener("click",async()=>{try{const n=localStorage.getItem("userId"),a=(await vi(n)).data.orders,o=`${new Date().toISOString().slice(0,19).replace("T"," ")}`,c=document.getElementById("paymentMethod").value,h=await Rc({id_order:bi,payment_date:o,amount:hs,payment_method:c,payment_status:"Berhasil"});alert("Berhasil menambahkan ke pembayaran!"),window.location.href="/"}catch(n){console.error("Error adding all product to payment:",n.message),alert("Gagal menambahkan ke pembayaran. Silakan coba lagi.")}})}},Dc={render(t){return`
    <div class="d-flex align-items-center">
        <button id="decreaseQty" class="btn btn-outline-success">-</button>
        <input type="number" id="quantity" value="${t}" class="form-control text-center mx-2" style="width: 60px;">
        <button id="increaseQty" class="btn btn-outline-success">+</button>
    </div>
      `}};async function yi(){const t=localStorage.getItem("userId"),n=await wc(t),r=[],a=[];for(const o of n){const c=await xc(o.id_cart);r.push(...c)}for(const o of r){const c=await xn(o.id_produk);a.push(Object.assign(c.data.product,{quantity:o.quantity}))}return console.log(a),a}var ps=0;const Nc={async render(){try{const t=await yi(),n=t.map((a,o)=>`
            <div class="border rounded-3 m-3" key="${a.id_produk}">
              <h4 class="section-title ms-5 my-2">Serbasayur.id</h4>
              <div class="d-flex">
                <div class="border border-2 ms-5 mb-3 mt-2">
                  <img width="100px" src="https://serbasayur-id-back-end.up.railway.app/image/${a.image}" alt="${a.image}" /> <!-- Sesuaikan path gambar -->
                </div>
                <div class="mx-5 d-flex flex-column align-content-center w-100">
                  <h4>Produk ${a.nama}</h4> <!-- Sesuaikan nama produk -->
                  <p>Harga: Rp${a.harga}</p> <!-- Sesuaikan harga produk -->
                  <div class="d-flex justify-content-between">
                    ${Dc.render(a.quantity)}
                    <div class="form-check form-check-reverse mt-2">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked-${a.id_produk}" checked>
                      <label class="form-check-label" for="flexCheckChecked-${a.id_produk}"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).join(""),r=t.reduce((a,o)=>a+o.harga*o.quantity,0);return ps=r,console.log(ps),`
        ${await te.render()}
        <div class="container d-flex gap-3 my-5">
          <div class="container">
            <div class="bakul d-flex justify-content-between">
              <h4>Bakul</h4>
              <div class="form-check d-flex">
                <p class="me-5">pilih semua panenmu</p>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedAll" checked>
                <label class="form-check-label" for="flexCheckCheckedAll"></label>
              </div>
            </div>
            <div class="border border-2 rounded-3">
              ${n}
            </div>
          </div>
          <div class="w-25 h-25 mt-5 border rounded-3 p-3">
            <h4 class="section-title my-2">Rincian Pesan</h4>
            <p class="border border-bottom border-grey"></p>
            <div class="d-flex justify-content-between">
              <p>Total Harga</p>
              <p>Rp${r}</p> <!-- Jumlah total harga disesuaikan -->
            </div>
            <button id="pay" class="btn btn-success w-100">Bayar</button>
          </div>
        </div>
        ${await Te.render()}
      `}catch(t){return console.error("Error rendering CartPage:",t),"<div>Error rendering CartPage. Please try again later.</div>"}},async afterRender(){te.afterRender(),Ri();const t=await yi();document.getElementById("pay").addEventListener("click",async()=>{try{const r=localStorage.getItem("userId"),a=`${new Date().toISOString().slice(0,19).replace("T"," ")}`,o=await Tc(r,a,"Belum bayar",ps);console.log(o);const c=o.data.id_order;for(const h of t){const p=parseInt(h.quantity,10),m=parseInt(h.harga,10),v=await Pc(c,h.id_produk,p,m)}alert("Berhasil menambahkan ke pesanan!"),window.location.href="/checkout"}catch(r){console.error("Error adding all product to order:",r.message),alert("Gagal menambahkan ke pesanan. Silakan coba lagi.")}})}},yn={async render(){return`
      <div class="ctg-container me-4 rounded border">
        <h4 class="ctg-container__title bg-body-tertiary rounded-top p-3">Kategori</h4>
        <ul class="ctg-container__body mb-3">
          ${ji.map(n=>`
          <li class="ctg-container__content px-4">
            <a href="/c/${n.name}" class="category-link" data-category="${n.name}">
              ${n.name}
            </a>
          </li>
        `).join("")}
        </ul>
      </div>
    `},async afterRender(){document.querySelectorAll(".category-link").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault();const a=r.target.getAttribute("data-category");R(`/c/${a}`)})})}},Di={async render(t){try{if(!Array.isArray(t))throw new Error("Products is not an array");return`
                <div class="product-cards-container d-grid">
                    ${t.map(r=>`
                <div class="product-card border shadow-sm bg-body-tertiary rounded">
                    <img src="https://serbasayur-id-back-end.up.railway.app/image/${r.image}" alt="${r.nama}" class="product-image w-100 rounded-top border-bottom">
                    <div class="product-card__body p-3 text-center bg-white rounded-bottom w-100">
                        <div class="product-name fw-light fs-6 mb-4 text-elip"><a href="/detail/${r.id_produk}">${r.nama}</a></div>
                        <p class="product-price fw-bolder green-t mb-1 w-100">${Kt(r.harga)}</p>
                        <button class="btn-sm btn-cart rounded-3 p-2 w-100 green-t cart-res">Masukan Keranjang</button>
                    </div>
                </div>
            `).join("")}
                </div>
            `}catch(n){return console.error(n),"<div>Error fetching products. Please try again later.</div>"}}},Bc={async render(t,n,r){const a=r.find(h=>h.nama_kategori===t),o=n.filter(h=>h.id_kategori===a.id_kategori),c=await Di.render(o);return`
      <div class="product-shelf mt-3">
        <h6>Menampilkan ${o.length} produk untuk kategori <b>"${t}"</b></h6>
        <div class="product-wrapper">
          <div class="product-list mt-3">
            ${c}
          </div>
        </div>
      </div>
    `}},Fc={async render({category:t}){try{const n=await Ll(t),r=await rt(),a=await yn.render();if(n.length>=0){const o=await Bc.render(t,n,r);return`
                    ${await te.render()}
                    <div class="cp-container mt-5 mb-5">
                        ${a}
                        ${o}
                    </div>
                    ${await Te.render()}
                    `}else throw new Error("Failed to fetch product details")}catch(n){return console.error(n),`
      ${await te.render()}
      <div style="height: calc(100vh - 66px)">Found Empty Product.<a href="../">Back</a></div>
      ${await Te.render()}
      `}},async afterRender(){await te.afterRender(),await yn.afterRender()}};function Ne(t){return Array.isArray?Array.isArray(t):Fi(t)==="[object Array]"}const Hc=1/0;function qc(t){if(typeof t=="string")return t;let n=t+"";return n=="0"&&1/t==-Hc?"-0":n}function Uc(t){return t==null?"":qc(t)}function Le(t){return typeof t=="string"}function Ni(t){return typeof t=="number"}function Kc(t){return t===!0||t===!1||Wc(t)&&Fi(t)=="[object Boolean]"}function Bi(t){return typeof t=="object"}function Wc(t){return Bi(t)&&t!==null}function he(t){return t!=null}function fs(t){return!t.trim().length}function Fi(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const zc="Incorrect 'index' type",Gc=t=>`Invalid value for key ${t}`,Vc=t=>`Pattern length exceeds max of ${t}.`,Qc=t=>`Missing ${t} property in key`,Xc=t=>`Property 'weight' in key '${t}' must be a positive integer`,_i=Object.prototype.hasOwnProperty;class Yc{constructor(n){this._keys=[],this._keyMap={};let r=0;n.forEach(a=>{let o=Hi(a);this._keys.push(o),this._keyMap[o.id]=o,r+=o.weight}),this._keys.forEach(a=>{a.weight/=r})}get(n){return this._keyMap[n]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Hi(t){let n=null,r=null,a=null,o=1,c=null;if(Le(t)||Ne(t))a=t,n=wi(t),r=bs(t);else{if(!_i.call(t,"name"))throw new Error(Qc("name"));const h=t.name;if(a=h,_i.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(Xc(h));n=wi(h),r=bs(h),c=t.getFn}return{path:n,id:r,weight:o,src:a,getFn:c}}function wi(t){return Ne(t)?t:t.split(".")}function bs(t){return Ne(t)?t.join("."):t}function Jc(t,n){let r=[],a=!1;const o=(c,h,p)=>{if(he(c))if(!h[p])r.push(c);else{let m=h[p];const v=c[m];if(!he(v))return;if(p===h.length-1&&(Le(v)||Ni(v)||Kc(v)))r.push(Uc(v));else if(Ne(v)){a=!0;for(let y=0,k=v.length;y<k;y+=1)o(v[y],h,p+1)}else h.length&&o(v,h,p+1)}};return o(t,Le(n)?n.split("."):n,0),a?r:r[0]}const Zc={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ed={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,n)=>t.score===n.score?t.idx<n.idx?-1:1:t.score<n.score?-1:1},td={location:0,threshold:.6,distance:100},nd={useExtendedSearch:!1,getFn:Jc,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var C={...ed,...Zc,...td,...nd};const sd=/[^ ]+/g;function rd(t=1,n=3){const r=new Map,a=Math.pow(10,n);return{get(o){const c=o.match(sd).length;if(r.has(c))return r.get(c);const h=1/Math.pow(c,.5*t),p=parseFloat(Math.round(h*a)/a);return r.set(c,p),p},clear(){r.clear()}}}class Ls{constructor({getFn:n=C.getFn,fieldNormWeight:r=C.fieldNormWeight}={}){this.norm=rd(r,3),this.getFn=n,this.isCreated=!1,this.setIndexRecords()}setSources(n=[]){this.docs=n}setIndexRecords(n=[]){this.records=n}setKeys(n=[]){this.keys=n,this._keysMap={},n.forEach((r,a)=>{this._keysMap[r.id]=a})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Le(this.docs[0])?this.docs.forEach((n,r)=>{this._addString(n,r)}):this.docs.forEach((n,r)=>{this._addObject(n,r)}),this.norm.clear())}add(n){const r=this.size();Le(n)?this._addString(n,r):this._addObject(n,r)}removeAt(n){this.records.splice(n,1);for(let r=n,a=this.size();r<a;r+=1)this.records[r].i-=1}getValueForItemAtKeyId(n,r){return n[this._keysMap[r]]}size(){return this.records.length}_addString(n,r){if(!he(n)||fs(n))return;let a={v:n,i:r,n:this.norm.get(n)};this.records.push(a)}_addObject(n,r){let a={i:r,$:{}};this.keys.forEach((o,c)=>{let h=o.getFn?o.getFn(n):this.getFn(n,o.path);if(he(h)){if(Ne(h)){let p=[];const m=[{nestedArrIndex:-1,value:h}];for(;m.length;){const{nestedArrIndex:v,value:y}=m.pop();if(he(y))if(Le(y)&&!fs(y)){let k={v:y,i:v,n:this.norm.get(y)};p.push(k)}else Ne(y)&&y.forEach((k,S)=>{m.push({nestedArrIndex:S,value:k})})}a.$[c]=p}else if(Le(h)&&!fs(h)){let p={v:h,n:this.norm.get(h)};a.$[c]=p}}}),this.records.push(a)}toJSON(){return{keys:this.keys,records:this.records}}}function qi(t,n,{getFn:r=C.getFn,fieldNormWeight:a=C.fieldNormWeight}={}){const o=new Ls({getFn:r,fieldNormWeight:a});return o.setKeys(t.map(Hi)),o.setSources(n),o.create(),o}function id(t,{getFn:n=C.getFn,fieldNormWeight:r=C.fieldNormWeight}={}){const{keys:a,records:o}=t,c=new Ls({getFn:n,fieldNormWeight:r});return c.setKeys(a),c.setIndexRecords(o),c}function mn(t,{errors:n=0,currentLocation:r=0,expectedLocation:a=0,distance:o=C.distance,ignoreLocation:c=C.ignoreLocation}={}){const h=n/t.length;if(c)return h;const p=Math.abs(a-r);return o?h+p/o:p?1:h}function ad(t=[],n=C.minMatchCharLength){let r=[],a=-1,o=-1,c=0;for(let h=t.length;c<h;c+=1){let p=t[c];p&&a===-1?a=c:!p&&a!==-1&&(o=c-1,o-a+1>=n&&r.push([a,o]),a=-1)}return t[c-1]&&c-a>=n&&r.push([a,c-1]),r}const st=32;function od(t,n,r,{location:a=C.location,distance:o=C.distance,threshold:c=C.threshold,findAllMatches:h=C.findAllMatches,minMatchCharLength:p=C.minMatchCharLength,includeMatches:m=C.includeMatches,ignoreLocation:v=C.ignoreLocation}={}){if(n.length>st)throw new Error(Vc(st));const y=n.length,k=t.length,S=Math.max(0,Math.min(a,k));let P=c,N=S;const J=p>1||m,V=J?Array(k):[];let z;for(;(z=t.indexOf(n,N))>-1;){let ae=mn(n,{currentLocation:z,expectedLocation:S,distance:o,ignoreLocation:v});if(P=Math.min(ae,P),N=z+y,J){let pe=0;for(;pe<y;)V[z+pe]=1,pe+=1}}N=-1;let G=[],Ae=1,Be=y+k;const $n=1<<y-1;for(let ae=0;ae<y;ae+=1){let pe=0,_e=Be;for(;pe<_e;)mn(n,{errors:ae,currentLocation:S+_e,expectedLocation:S,distance:o,ignoreLocation:v})<=P?pe=_e:Be=_e,_e=Math.floor((Be-pe)/2+pe);Be=_e;let At=Math.max(1,S-_e+1),It=h?k:Math.min(S+_e,k)+y,Pe=Array(It+2);Pe[It+1]=(1<<ae)-1;for(let oe=It;oe>=At;oe-=1){let We=oe-1,$t=r[t.charAt(We)];if(J&&(V[We]=+!!$t),Pe[oe]=(Pe[oe+1]<<1|1)&$t,ae&&(Pe[oe]|=(G[oe+1]|G[oe])<<1|1|G[oe+1]),Pe[oe]&$n&&(Ae=mn(n,{errors:ae,currentLocation:We,expectedLocation:S,distance:o,ignoreLocation:v}),Ae<=P)){if(P=Ae,N=We,N<=S)break;At=Math.max(1,2*S-N)}}if(mn(n,{errors:ae+1,currentLocation:S,expectedLocation:S,distance:o,ignoreLocation:v})>P)break;G=Pe}const xt={isMatch:N>=0,score:Math.max(.001,Ae)};if(J){const ae=ad(V,p);ae.length?m&&(xt.indices=ae):xt.isMatch=!1}return xt}function ld(t){let n={};for(let r=0,a=t.length;r<a;r+=1){const o=t.charAt(r);n[o]=(n[o]||0)|1<<a-r-1}return n}class Ui{constructor(n,{location:r=C.location,threshold:a=C.threshold,distance:o=C.distance,includeMatches:c=C.includeMatches,findAllMatches:h=C.findAllMatches,minMatchCharLength:p=C.minMatchCharLength,isCaseSensitive:m=C.isCaseSensitive,ignoreLocation:v=C.ignoreLocation}={}){if(this.options={location:r,threshold:a,distance:o,includeMatches:c,findAllMatches:h,minMatchCharLength:p,isCaseSensitive:m,ignoreLocation:v},this.pattern=m?n:n.toLowerCase(),this.chunks=[],!this.pattern.length)return;const y=(S,P)=>{this.chunks.push({pattern:S,alphabet:ld(S),startIndex:P})},k=this.pattern.length;if(k>st){let S=0;const P=k%st,N=k-P;for(;S<N;)y(this.pattern.substr(S,st),S),S+=st;if(P){const J=k-st;y(this.pattern.substr(J),J)}}else y(this.pattern,0)}searchIn(n){const{isCaseSensitive:r,includeMatches:a}=this.options;if(r||(n=n.toLowerCase()),this.pattern===n){let N={isMatch:!0,score:0};return a&&(N.indices=[[0,n.length-1]]),N}const{location:o,distance:c,threshold:h,findAllMatches:p,minMatchCharLength:m,ignoreLocation:v}=this.options;let y=[],k=0,S=!1;this.chunks.forEach(({pattern:N,alphabet:J,startIndex:V})=>{const{isMatch:z,score:G,indices:Ae}=od(n,N,J,{location:o+V,distance:c,threshold:h,findAllMatches:p,minMatchCharLength:m,includeMatches:a,ignoreLocation:v});z&&(S=!0),k+=G,z&&Ae&&(y=[...y,...Ae])});let P={isMatch:S,score:S?k/this.chunks.length:1};return S&&a&&(P.indices=y),P}}class Ke{constructor(n){this.pattern=n}static isMultiMatch(n){return ki(n,this.multiRegex)}static isSingleMatch(n){return ki(n,this.singleRegex)}search(){}}function ki(t,n){const r=t.match(n);return r?r[1]:null}class cd extends Ke{constructor(n){super(n)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(n){const r=n===this.pattern;return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class dd extends Ke{constructor(n){super(n)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(n){const a=n.indexOf(this.pattern)===-1;return{isMatch:a,score:a?0:1,indices:[0,n.length-1]}}}class ud extends Ke{constructor(n){super(n)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(n){const r=n.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,this.pattern.length-1]}}}class hd extends Ke{constructor(n){super(n)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(n){const r=!n.startsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,n.length-1]}}}class pd extends Ke{constructor(n){super(n)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(n){const r=n.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[n.length-this.pattern.length,n.length-1]}}}class fd extends Ke{constructor(n){super(n)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(n){const r=!n.endsWith(this.pattern);return{isMatch:r,score:r?0:1,indices:[0,n.length-1]}}}class Ki extends Ke{constructor(n,{location:r=C.location,threshold:a=C.threshold,distance:o=C.distance,includeMatches:c=C.includeMatches,findAllMatches:h=C.findAllMatches,minMatchCharLength:p=C.minMatchCharLength,isCaseSensitive:m=C.isCaseSensitive,ignoreLocation:v=C.ignoreLocation}={}){super(n),this._bitapSearch=new Ui(n,{location:r,threshold:a,distance:o,includeMatches:c,findAllMatches:h,minMatchCharLength:p,isCaseSensitive:m,ignoreLocation:v})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(n){return this._bitapSearch.searchIn(n)}}class Wi extends Ke{constructor(n){super(n)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(n){let r=0,a;const o=[],c=this.pattern.length;for(;(a=n.indexOf(this.pattern,r))>-1;)r=a+c,o.push([a,r-1]);const h=!!o.length;return{isMatch:h,score:h?0:1,indices:o}}}const ys=[cd,Wi,ud,hd,fd,pd,dd,Ki],Ei=ys.length,md=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,gd="|";function vd(t,n={}){return t.split(gd).map(r=>{let a=r.trim().split(md).filter(c=>c&&!!c.trim()),o=[];for(let c=0,h=a.length;c<h;c+=1){const p=a[c];let m=!1,v=-1;for(;!m&&++v<Ei;){const y=ys[v];let k=y.isMultiMatch(p);k&&(o.push(new y(k,n)),m=!0)}if(!m)for(v=-1;++v<Ei;){const y=ys[v];let k=y.isSingleMatch(p);if(k){o.push(new y(k,n));break}}}return o})}const bd=new Set([Ki.type,Wi.type]);class yd{constructor(n,{isCaseSensitive:r=C.isCaseSensitive,includeMatches:a=C.includeMatches,minMatchCharLength:o=C.minMatchCharLength,ignoreLocation:c=C.ignoreLocation,findAllMatches:h=C.findAllMatches,location:p=C.location,threshold:m=C.threshold,distance:v=C.distance}={}){this.query=null,this.options={isCaseSensitive:r,includeMatches:a,minMatchCharLength:o,findAllMatches:h,ignoreLocation:c,location:p,threshold:m,distance:v},this.pattern=r?n:n.toLowerCase(),this.query=vd(this.pattern,this.options)}static condition(n,r){return r.useExtendedSearch}searchIn(n){const r=this.query;if(!r)return{isMatch:!1,score:1};const{includeMatches:a,isCaseSensitive:o}=this.options;n=o?n:n.toLowerCase();let c=0,h=[],p=0;for(let m=0,v=r.length;m<v;m+=1){const y=r[m];h.length=0,c=0;for(let k=0,S=y.length;k<S;k+=1){const P=y[k],{isMatch:N,indices:J,score:V}=P.search(n);if(N){if(c+=1,p+=V,a){const z=P.constructor.type;bd.has(z)?h=[...h,...J]:h.push(J)}}else{p=0,c=0,h.length=0;break}}if(c){let k={isMatch:!0,score:p/c};return a&&(k.indices=h),k}}return{isMatch:!1,score:1}}}const _s=[];function _d(...t){_s.push(...t)}function ws(t,n){for(let r=0,a=_s.length;r<a;r+=1){let o=_s[r];if(o.condition(t,n))return new o(t,n)}return new Ui(t,n)}const _n={AND:"$and",OR:"$or"},ks={PATH:"$path",PATTERN:"$val"},Es=t=>!!(t[_n.AND]||t[_n.OR]),wd=t=>!!t[ks.PATH],kd=t=>!Ne(t)&&Bi(t)&&!Es(t),xi=t=>({[_n.AND]:Object.keys(t).map(n=>({[n]:t[n]}))});function zi(t,n,{auto:r=!0}={}){const a=o=>{let c=Object.keys(o);const h=wd(o);if(!h&&c.length>1&&!Es(o))return a(xi(o));if(kd(o)){const m=h?o[ks.PATH]:c[0],v=h?o[ks.PATTERN]:o[m];if(!Le(v))throw new Error(Gc(m));const y={keyId:bs(m),pattern:v};return r&&(y.searcher=ws(v,n)),y}let p={children:[],operator:c[0]};return c.forEach(m=>{const v=o[m];Ne(v)&&v.forEach(y=>{p.children.push(a(y))})}),p};return Es(t)||(t=xi(t)),a(t)}function Ed(t,{ignoreFieldNorm:n=C.ignoreFieldNorm}){t.forEach(r=>{let a=1;r.matches.forEach(({key:o,norm:c,score:h})=>{const p=o?o.weight:null;a*=Math.pow(h===0&&p?Number.EPSILON:h,(p||1)*(n?1:c))}),r.score=a})}function xd(t,n){const r=t.matches;n.matches=[],he(r)&&r.forEach(a=>{if(!he(a.indices)||!a.indices.length)return;const{indices:o,value:c}=a;let h={indices:o,value:c};a.key&&(h.key=a.key.src),a.idx>-1&&(h.refIndex=a.idx),n.matches.push(h)})}function Ad(t,n){n.score=t.score}function Id(t,n,{includeMatches:r=C.includeMatches,includeScore:a=C.includeScore}={}){const o=[];return r&&o.push(xd),a&&o.push(Ad),t.map(c=>{const{idx:h}=c,p={item:n[h],refIndex:h};return o.length&&o.forEach(m=>{m(c,p)}),p})}class Et{constructor(n,r={},a){this.options={...C,...r},this.options.useExtendedSearch,this._keyStore=new Yc(this.options.keys),this.setCollection(n,a)}setCollection(n,r){if(this._docs=n,r&&!(r instanceof Ls))throw new Error(zc);this._myIndex=r||qi(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(n){he(n)&&(this._docs.push(n),this._myIndex.add(n))}remove(n=()=>!1){const r=[];for(let a=0,o=this._docs.length;a<o;a+=1){const c=this._docs[a];n(c,a)&&(this.removeAt(a),a-=1,o-=1,r.push(c))}return r}removeAt(n){this._docs.splice(n,1),this._myIndex.removeAt(n)}getIndex(){return this._myIndex}search(n,{limit:r=-1}={}){const{includeMatches:a,includeScore:o,shouldSort:c,sortFn:h,ignoreFieldNorm:p}=this.options;let m=Le(n)?Le(this._docs[0])?this._searchStringList(n):this._searchObjectList(n):this._searchLogical(n);return Ed(m,{ignoreFieldNorm:p}),c&&m.sort(h),Ni(r)&&r>-1&&(m=m.slice(0,r)),Id(m,this._docs,{includeMatches:a,includeScore:o})}_searchStringList(n){const r=ws(n,this.options),{records:a}=this._myIndex,o=[];return a.forEach(({v:c,i:h,n:p})=>{if(!he(c))return;const{isMatch:m,score:v,indices:y}=r.searchIn(c);m&&o.push({item:c,idx:h,matches:[{score:v,value:c,norm:p,indices:y}]})}),o}_searchLogical(n){const r=zi(n,this.options),a=(p,m,v)=>{if(!p.children){const{keyId:k,searcher:S}=p,P=this._findMatches({key:this._keyStore.get(k),value:this._myIndex.getValueForItemAtKeyId(m,k),searcher:S});return P&&P.length?[{idx:v,item:m,matches:P}]:[]}const y=[];for(let k=0,S=p.children.length;k<S;k+=1){const P=p.children[k],N=a(P,m,v);if(N.length)y.push(...N);else if(p.operator===_n.AND)return[]}return y},o=this._myIndex.records,c={},h=[];return o.forEach(({$:p,i:m})=>{if(he(p)){let v=a(r,p,m);v.length&&(c[m]||(c[m]={idx:m,item:p,matches:[]},h.push(c[m])),v.forEach(({matches:y})=>{c[m].matches.push(...y)}))}}),h}_searchObjectList(n){const r=ws(n,this.options),{keys:a,records:o}=this._myIndex,c=[];return o.forEach(({$:h,i:p})=>{if(!he(h))return;let m=[];a.forEach((v,y)=>{m.push(...this._findMatches({key:v,value:h[y],searcher:r}))}),m.length&&c.push({idx:p,item:h,matches:m})}),c}_findMatches({key:n,value:r,searcher:a}){if(!he(r))return[];let o=[];if(Ne(r))r.forEach(({v:c,i:h,n:p})=>{if(!he(c))return;const{isMatch:m,score:v,indices:y}=a.searchIn(c);m&&o.push({score:v,key:n,value:c,idx:h,norm:p,indices:y})});else{const{v:c,n:h}=r,{isMatch:p,score:m,indices:v}=a.searchIn(c);p&&o.push({score:m,key:n,value:c,norm:h,indices:v})}return o}}Et.version="7.0.0";Et.createIndex=qi;Et.parseIndex=id;Et.config=C;Et.parseQuery=zi;_d(yd);const $d={async render(t,n){const r={keys:["nama"],threshold:.3},c=new Et(n,r).search(t).map(p=>p.item),h=await Di.render(c);return`
        <div class="product-shelf mt-3">
            <h6>Menampilkan ${c.length} produk untuk pencarian <b>"${t}"</b></h6>
            <div class="product-wrapper">
                <div class="product-list mt-3">
                    ${h}
                </div>
            </div>
        </div>
        `}},Sd={async render({query:t}){try{const n=await Tl(t),r=await yn.render();if(n.status==="success"){const a=n.data.products,o=await $d.render(t,a);return`
                    ${await te.render()}
                    <div class="cp-container mt-5 mb-5">
                        ${r}
                        ${o}
                    </div>
                    ${await Te.render()}
                    `}else throw new Error("Failed to fetch search results")}catch(n){return console.error(n),"<div>Error fetching search results. Please try again later.</div>"}},async afterRender(){await te.afterRender(),await yn.afterRender()}},Cd={async render(){return`
      <div class="hero-about position-relative text-center d-flex justify-content-center align-items-center" 
           style="margin: auto; width: 100vw; background: url('../../..../../public/images/about-bg.png') no-repeat bottom center; height: calc(100vh - 66px); background-size: 90vh;   font-family: 'poppins', sans-serif;">
        <div class="hero-about_title p-5 rounded" style="opacity: 0.9; margin-bottom: 40vh">
          <h1>Selamat Datang di <span style="color: #4dc38c;">Serbasayur.id!</span></h1>
        </div>
      </div>
    `}},Ld={async render(){return`
        ${await te.render()}
        ${await Cd.render()}
        <div class="shadow">
            <div class="company-desc">
                <div class="image-desc">
                    <img class="shadow" src="../..../../public/images/petani.jpg" alt="Petani">
                </div>
                <h4 class="mt-0 ms-4 fw-light">Serbasayur.id menjawab tantangan dalam memperoleh sayuran segar langsung dari petani lokal. Kami bertujuan untuk meningkatkan aksesibilitas dan kualitas dibandingkan pasar konvensional, memastikan keberlanjutan ekonomi petani lokal.</h4>
            </div>
        </div>
        <div>
            <div class="company-desc">
                <h4 class="mt-0 fw-light text-end">Menjadi platform terdepan untuk mendapatkan sayuran segar langsung dari petani lokal, mempromosikan pertanian berkelanjutan dan gaya hidup sehat.</h4>
                <div class="image-desc ms-4">
                    <img class="shadow" src="../..../../public/images/vision.jpg" alt="Petani">
                </div>
            </div>
        </div>
        <div class="shadow">
            <div class="company-desc">
                <div class="image-desc">
                    <img class="shadow" src="../..../../public/images/petani.jpg" alt="Petani">
                </div>
                <div class="company-mission ms-4">
                    <h2 class="card-title mt-5" style="font-weight: bold; color: #28a745;">Misi Kami</h2>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Memberikan akses mudah ke sayuran segar dari petani lokal.</li>
                        <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Memastikan harga yang adil untuk petani dan konsumen.</li>
                        <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Mempromosikan praktik pertanian yang berkelanjutan.</li>
                        <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Meningkatkan kualitas dan kesegaran sayuran yang tersedia bagi konsumen.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <h2 class="card-title mt-5 text-center" style="font-weight: bold; color: #28a745;">Tim Kami</h2>
            <p class="card-text text-center">
            Tim kami yang berdedikasi terdiri dari:
            </p>
            <ul class="company-desc pt-2 list-group list-group-flush">
                <li class="list-group-item" style="border: 0; padding-left: 0;"><strong>Rio dan Hanan:</strong> Pengembang Front-End yang bertanggung jawab untuk mengimplementasikan desain UI/UX, berkolaborasi dengan tim back-end untuk integrasi, menguji responsivitas, dan memperbaiki masalah.</li>
                <li class="list-group-item" style="border: 0; padding-left: 0;"><strong>Fauzan:</strong> Pengembang Back-End yang bertanggung jawab untuk merancang dan mengimplementasikan sistem backend, struktur database, pengembangan API, dan pengujian integrasi.</li>
            </ul>
        </div>
        ${await Te.render()}
        `},async afterRender(){te.afterRender()}},Td={async render(){const t=localStorage.getItem("userId"),r=(await vn(t)).data.user;return`
      ${await te.render()}
      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col-md-3">
            <div class="list-group">
              <div class="list-group-item list-group-item-action active" aria-current="true">
                Akun
              </div>
              <button class="list-group-item list-group-item-action" id="logout-button-profile">Logout</button>
            </div>
          </div>
          <div class="col-md-9">
            <div class="card">
              <div class="card-header">
                Profile
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" value="${r.username}" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value="${r.email}" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Nomor Telepon</label>
                    <input type="text" class="form-control" id="phone" value="${r.nomor_telepon}" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="address" class="form-label">Alamat</label>
                    <input type="text" class="form-control" id="address" value="${r.alamat}" disabled>
                  </div>
                </form>
                <a href="/profile/edit-profile" class="btn btn-primary mt-3">Ubah Data</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${await Te.render()}
    `},async afterRender(){await te.afterRender();const t=document.getElementById("logout-button-profile");t&&t.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userId"),R.redirect("/login")})}},Pd={async render(){const t=localStorage.getItem("userId"),r=(await vn(t)).data.user;return`
      ${await te.render()}
      <div class="container mt-3 mb-5">
        <div class="row">
          <div class="col-md-3 mt-4">
            <div class="list-group">
              <div class="list-group-item list-group-item-action active" aria-current="true">
                Akun
              </div>
              <button class="list-group-item list-group-item-action" id="logout-button-profile">Logout</button>
            </div>
          </div>
          <div class="col-md-9 mt-4">
            <div class="card">
              <div class="card-header">
                Edit Profile
              </div>
              <div class="card-body">
                <form id="edit-profile-form">
                  <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" value="${r.username}">
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value="${r.email}">
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Nomor Telepon</label>
                    <input type="text" class="form-control" id="phone" value="${r.nomor_telepon}">
                  </div>
                  <div class="mb-3">
                    <label for="address" class="form-label">Alamat</label>
                    <input type="text" class="form-control" id="address" value="${r.alamat}">
                  </div>
                  <div class="mb-3">
                    <label for="currentPassword" class="form-label">Password Lama</label>
                    <input type="password" class="form-control" id="currentPassword" placeholder="••••••••" required>
                  </div>
                  <div class="mb-3">
                    <label for="newPassword" class="form-label">Password Baru</label>
                    <input type="password" class="form-control" id="newPassword" placeholder="••••••••" required>
                  </div>
                  <button type="submit" class="btn btn-success mt-3">Simpan Perubahan</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${await Te.render()}
    `},async afterRender(){document.getElementById("edit-profile-form").addEventListener("submit",async n=>{n.preventDefault();const r=localStorage.getItem("userId"),o=(await vn(r)).data.user,c=document.getElementById("currentPassword").value,h=document.getElementById("newPassword").value,p={username:document.getElementById("username").value,email:document.getElementById("email").value,nomor_telepon:document.getElementById("phone").value,alamat:document.getElementById("address").value,password:o.password};if(c&&h)if(c===o.password)p.password=h;else{alert("Password lama tidak sesuai");return}try{await Ml(r,p),alert("Data berhasil diperbarui"),R.redirect("/profile")}catch(m){console.error("Failed to update user:",m.message),alert("Gagal memperbarui data")}});const t=document.getElementById("logout-button-profile");t&&t.addEventListener("click",()=>{localStorage.removeItem("isLoggedIn"),localStorage.removeItem("userId"),R.redirect("/login")}),await te.afterRender()}},kt={async render(){return`
      <!-- =============== Navigation ================ -->
      <div class="navigation">
          <ul>
              <!-- Logo -->
              <li>
                  <a href="/dashboard">
                      <span class="icon mx-2">
                          <img width="230px" class="img-fluid" src="../../..../../public/images/logo1.png" alt="" />
                      </span>
                  </a>
              </li>
  
              <!-- Dashboard -->
              <li>
                  <a href="/dashboard">
                      <span class="icon">
                          <ion-icon name="home-outline"></ion-icon>
                      </span>
                      <span class="title">Dashboard</span>
                  </a>
              </li>
  
              <!-- Customers -->
              <li>
                  <a href="/dashboard/customers">
                      <span class="icon">
                          <ion-icon name="people-outline"></ion-icon>
                      </span>
                      <span class="title">Customers</span>
                  </a>
              </li>
  
              <!-- Dropdown Produk -->
              <li class="nav-item dropdown">
                  <a class="nav-link" href="#" role="button" id="navbarDropdownProduk" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="icon">
                          <ion-icon name="archive-outline"></ion-icon>
                      </span>
                      <span class="title">Produk</span>
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/dashboard">Produk</a></li>
                      <hr />
                      <li><a class="dropdown-item" href="/dashboard/addProduk">Add Produk</a></li>
                      <li><a class="dropdown-item" href="/dashboard/category">Kategori</a></li>
                      <li><a class="dropdown-item" href="/dashboard/listProduk">List Produk</a></li>
                  </ul>
              </li>
  
              <!-- Dropdown Order -->
              <li class="nav-item dropdown">
                  <a class="nav-link" href="#" role="button" id="navbarDropdownOrder" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="icon">
                          <ion-icon name="archive-outline"></ion-icon>
                      </span>
                      <span class="title">Order</span>
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Order</a></li>
                      <hr />
                      <li><a class="dropdown-item" href="#">Add Produk</a></li>
                      <li><a class="dropdown-item" href="#">Kategori</a></li>
                      <li><a class="dropdown-item" href="#">List Produk</a></li>
                  </ul>
              </li>
  
              <!-- Dropdown Settings -->
              <li class="nav-item dropdown">
                  <a class="nav-link" href="#" role="button" id="navbarDropdownSettings" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="icon">
                          <ion-icon name="settings-outline"></ion-icon>
                      </span>
                      <span class="title">Settings</span>
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Setting</a></li>
                      <hr />
                      <li><a class="dropdown-item" href="/dashboard/register">Add Account Admin</a></li>
                      <li><a class="dropdown-item" href="#">Profile Admin</a></li>
                  </ul>
              </li>
  
              <!-- Logout -->
              <li>
                  <a href="#" id="logoutBtn">
                      <span class="icon">
                          <ion-icon name="log-out-outline"></ion-icon>
                      </span>
                      <span class="title">Logout</span>
                  </a>
              </li>
          </ul>
      </div>
    `},afterRender(){const t=document.getElementById("logoutBtn");t&&t.addEventListener("click",()=>{sessionStorage.removeItem("currentAdmin"),R.redirect("/dashboard/login")})}};function gn({numbers:t,cardName:n,icon:r}){return`
      <div class="card">
        <div>
          <div class="numbers fs-3">${t}</div>
          <div class="cardName">${n}</div>
        </div>
        <div class="iconBx">
          <ion-icon name="${r}"></ion-icon>
        </div>
      </div>
    `}function Od(){return`
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2>Recent Orders</h2>
                        <a href="#" class="btn">View All</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span class="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span class="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span class="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span class="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span class="status inProgress">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    `}const Ai={async render(){try{const n=(await Ss()).data.users;if(!Array.isArray(n)||n.length===0)throw new Error("Failed to fetch users or empty user list.");return`
        <div class="recentCustomers">
          <div class="cardHeader">
            <h2>Recent Customers</h2>
          </div>
          <table>
            ${n.slice(0,5).map((o,c)=>`
          <tr>
            <td>
              <h4>${o.username} <br> <span>${o.nomor_telepon}</span></h4>
            </td>
          </tr>
        `).join("")}
          </table>
        </div>
      `}catch(t){return console.error("Failed to fetch and display recent customers:",t),"<p>Failed to load recent customers. Please try again later.</p>"}},async afterRender(){}},Wt=()=>{const t=document.querySelectorAll(".navigation li");function n(){t.forEach(c=>{c.classList.remove("hovered")}),this.classList.add("hovered")}t.forEach(c=>c.addEventListener("mouseover",n));const r=document.querySelector(".toggle"),a=document.querySelector(".navigation"),o=document.querySelector(".main");r&&a&&o?r.onclick=()=>{a.classList.toggle("active"),o.classList.toggle("active")}:console.error("Toggle, navigation, or main elements not found.")},Md={async render(){return`
      <div class="container-dashboard ms-0">
        ${await kt.render()}
        <div class="main">
          <div class="topbar">
            <div class="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            <div class="search">
              <label>
                <input type="text" placeholder="Search here">
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>
          </div>
          <div class="cardBox">
            ${gn({numbers:"1,504",cardName:"Views",icon:"eye-outline"})}
            ${gn({numbers:"80",cardName:"Penjualan",icon:"cart-outline"})}
            ${gn({numbers:"284",cardName:"Comments",icon:"chatbubbles-outline"})}
            ${gn({numbers:"Rp 240.000",cardName:"Pemasukan",icon:"cash-outline"})}
          </div>
          <div class="details">
            ${Od()}
            ${await Ai.render()}
          </div>
        </div>
      </div>
    `},async afterRender(){Wt(),await kt.afterRender(),await Ai.afterRender()}},Ii={async render(){try{return`
        <div class="container mt-5">
          <h2>Tambah Produk</h2>
          <form id="addProdukForm" enctype="multipart/form-data">
            <div class="mb-3">
              <label for="nama" class="form-label">Nama:</label>
              <input type="text" class="form-control" id="nama" name="nama" required>
            </div>
            <div class="mb-3">
              <label for="deskripsi" class="form-label">Deskripsi:</label>
              <textarea class="form-control" id="deskripsi" name="deskripsi" required></textarea>
            </div>
            <div class="mb-3">
              <label for="harga" class="form-label">Harga:</label>
              <input type="number" class="form-control" id="harga" name="harga" required>
            </div>
            <div class="mb-3">
              <label for="image" class="form-label">Image:</label>
              <input type="file" class="form-control" id="image" name="image" accept="image/*" required>
            </div>
            <div class="mb-3">
              <label for="kuantitas" class="form-label">Kuantitas:</label>
              <input type="number" class="form-control" id="kuantitas" name="kuantitas" required>
            </div>
            <div class="mb-3">
              <label for="id_kategori" class="form-label">Kategori:</label>
              <select class="form-select" id="id_kategori" name="id_kategori" required>
                <option value="">Pilih Kategori</option>
                ${(await rt()).map(r=>`<option value="${r.id_kategori}">${r.nama_kategori}</option>`).join("")}
              </select>
            </div>
            <div class="mb-3">
              <label for="rating" class="form-label">Rating:</label>
              <input type="number" class="form-control" id="rating" name="rating" required>
            </div>
            <button type="submit" class="btn btn-success mb-4">Tambah Produk</button>
          </form>
        </div>
      `}catch(t){console.error("Failed to fetch categories:",t),alert("Gagal mengambil kategori. Silakan coba lagi.")}},async afterRender(){const t=document.getElementById("addProdukForm");t.addEventListener("submit",async n=>{n.preventDefault();const r=new FormData(t);try{const a=await $l(r);document.getElementById("nama").value="",document.getElementById("deskripsi").value="",document.getElementById("harga").value="",document.getElementById("image").value="",document.getElementById("kuantitas").value="",document.getElementById("id_kategori").value="",document.getElementById("rating").value="",alert("Produk berhasil ditambahkan!")}catch(a){console.error("Gagal menambahkan produk:",a.message),alert("Gagal menambahkan produk. Silakan coba lagi.")}})}},Rd={async render(){const t=await Ii.render();return`
        <div class="container-dashboard ms-0">
            ${await kt.render()}
            <div class="main">
                <div class="topbar">
                    <div class="toggle">
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                    <div class="search">
                        <label>
                            <input type="text" placeholder="Search here">
                            <ion-icon name="search-outline"></ion-icon>
                        </label>
                    </div>
                    <div class="user">
                        <img src="../../..../../public/images/admin/customer01.jpg" alt="">
                    </div>
            </div>
            ${t}
        </div>
        `},async afterRender(){Wt(),await Ii.afterRender()}},xs={async render(){return`
      <div class="container mt-5">
        <h2>List Kategori</h2>
        <ul class="list-group mb-5" id="categoryList">
          <!-- Item list kategori akan diisi melalui JavaScript -->
        </ul>
      </div>
    `},async afterRender(){try{const t=await rt(),n=document.getElementById("categoryList");t.forEach(r=>{const a=document.createElement("li");a.className="list-group-item",a.textContent=r.nama_kategori,n.appendChild(a)})}catch(t){console.error("Failed to fetch categories:",t),alert("Gagal mengambil kategori. Silakan coba lagi.")}},addCategoryToList(t){const n=document.getElementById("categoryList"),r=document.createElement("li");r.className="list-group-item",r.textContent=t.nama_kategori,n.appendChild(r)}},$i={async render(){return`
      <div class="container mt-5" id="kategori-page">
        <h2>Tambah Kategori</h2>
        <form id="addKategoriForm">
          <div class="mb-3">
            <label for="namaKategori" class="form-label">Nama Kategori:</label>
            <input type="text" class="form-control" id="namaKategori" required>
          </div>
          <button type="submit" class="btn btn-primary">Tambah Kategori</button>
        </form>
      </div>
    `},async afterRender(){const t=document.querySelector("#addKategoriForm");t?t.addEventListener("submit",async n=>{n.preventDefault();const a={nama_kategori:document.getElementById("namaKategori").value};try{const o=await Pl(a);document.getElementById("namaKategori").value="",xs.addCategoryToList(a)}catch(o){console.error("Failed to add category:",o),alert("Gagal menambahkan kategori")}}):console.error("Form not found in DOM")}},jd={async render(){const t=await $i.render(),n=await xs.render();return`
      <div class="container-dashboard ms-0">
        ${await kt.render()}
        <div class="main">
          <div class="topbar">
            <div class="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            <div class="search">
              <label>
                <input type="text" placeholder="Search here">
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>
            <div class="user">
              <img src="../../..../../public/images/admin/customer01.jpg" alt="">
            </div>
          </div>
          ${t}
          ${n}
        </div>
      </div>
    `},async afterRender(){Wt(),await $i.afterRender(),await xs.afterRender()}},Si={async render(t){const n=t.map((o,c)=>`
      <tr>
        <td>${c+1}</td>
        <td>${o.nama}</td>
        <td>${o.deskripsi}</td>
        <td>${o.harga}</td>
        <td>${o.id_kategori}</td>
        <td>${o.kuantitas}</td>
        <td><img src="${o.imageUrl}" alt="${o.nama}" style="width: 100px;"></td>
        <td>${o.rating}</td>
        <td>
          <div class="d-flex">
            <button class="btn edit-button" data-id="${o.id_produk}" data-bs-toggle="modal" data-bs-target="#editModal"><i class="fa-solid fa-pen-to-square icon"></i></button>
            <button class="btn delete-button" data-id="${o.id_produk}"><i class="fa-solid fa-trash icon"></i></button>
          </div>
        </td>
      </tr>
    `).join(""),a=(await rt()).map(o=>`<option value="${o.id_kategori}">${o.nama_kategori}</option>`).join("");return`
      <div class="container mt-5 mx-2">
        <h2>List Produk</h2>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Deskripsi</th>
                <th>Harga</th>
                <th>Kategori</th>
                <th>Kuantitas</th>
                <th>Image</th>
                <th>Rating</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="produkList">
              ${n}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Edit Modal -->
      <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Edit Produk</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="edit-form" enctype="multipart/form-data">
                <input type="hidden" id="edit-id" name="id"> <!-- Input hidden untuk menyimpan ID produk -->
                <div class="mb-3">
                  <label for="edit-nama" class="form-label">Nama:</label>
                  <input type="text" class="form-control" id="edit-nama" name="nama" required>
                </div>
                <div class="mb-3">
                  <label for="edit-deskripsi" class="form-label">Deskripsi:</label>
                  <textarea class="form-control" id="edit-deskripsi" name="deskripsi" required></textarea>
                </div>
                <div class="mb-3">
                  <label for="edit-harga" class="form-label">Harga:</label>
                  <input type="number" class="form-control" id="edit-harga" name="harga" required>
                </div>
                <div class="mb-3">
                  <label for="edit-image" class="form-label">Gambar:</label>
                  <div class="d-flex gap-3">
                    <img width="50" id="edit-gambar-preview" src="" alt="Preview Gambar" style="max-width: 200px;">
                    <input type="file" class="form-control" id="edit-image" name="image" accept="image/*">
                  </div>
                </div>
                <div class="mb-3">
                  <label for="edit-kuantitas" class="form-label">Kuantitas:</label>
                  <input type="number" class="form-control" id="edit-kuantitas" name="kuantitas" required>
                </div>
                <div class="mb-3">
                  <label for="edit-id_kategori" class="form-label">Kategori:</label>
                  <select class="form-select" id="edit-id_kategori" name="id_kategori" required>
                    <option value="">Pilih Kategori</option>
                    ${a}
                  </select>
                </div>
                <div class="mb-3">
                  <label for="edit-rating" class="form-label">Rating:</label>
                  <input type="number" class="form-control" id="edit-rating" name="rating" required>
                </div>
                <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `},async afterRender(){document.querySelectorAll(".edit-button").forEach(a=>{a.addEventListener("click",async()=>{const o=a.dataset.id;if(!o){console.error("ID Produk tidak terdefinisi"),alert("ID Produk tidak ditemukan. Silakan coba lagi.");return}try{const c=await xn(o);if(c.status==="success"){const h=c.data.product,p=`http://localhost:3000/image/${h.image}`;document.getElementById("edit-nama").value=h.nama,document.getElementById("edit-deskripsi").value=h.deskripsi,document.getElementById("edit-harga").value=h.harga,document.getElementById("edit-kuantitas").value=h.kuantitas,document.getElementById("edit-id_kategori").value=h.id_kategori,document.getElementById("edit-rating").value=h.rating;const m=document.getElementById("edit-gambar-preview");m.src=p,document.getElementById("edit-id").value=o}}catch(c){console.error("Gagal memuat detail produk:",c),alert("Gagal memuat detail produk. Silakan coba lagi.")}})}),document.getElementById("edit-form").addEventListener("submit",async a=>{a.preventDefault();const o={nama:document.getElementById("edit-nama").value,deskripsi:document.getElementById("edit-deskripsi").value,harga:document.getElementById("edit-harga").value,kuantitas:document.getElementById("edit-kuantitas").value,id_kategori:document.getElementById("edit-id_kategori").value,rating:document.getElementById("edit-rating").value},c=document.getElementById("edit-image");c.files.length>0&&(o.image=c.files[0]);const h=document.getElementById("edit-id").value;try{await Sl(h,o),alert("Produk diperbarui"),location.reload()}catch(p){console.error("Gagal memperbarui produk:",p),alert("Gagal memperbarui produk. Silakan coba lagi.")}}),document.querySelectorAll(".delete-button").forEach(a=>{a.addEventListener("click",async()=>{const o=a.dataset.id;try{(await Cl(o)).status==="success"?(alert("Produk dihapus"),location.reload()):alert("Gagal menghapus produk. Silakan coba lagi.")}catch(c){console.error("Gagal menghapus produk:",c),alert("Gagal menghapus produk. Silakan coba lagi.")}})})}},Dd={async render(){try{const t=await En(),n=await Si.render(t);return`
        <div class="container-dashboard ms-0">
          ${await kt.render()}
          <div class="main">
            <div class="topbar">
              <div class="toggle">
                <ion-icon name="menu-outline"></ion-icon>
              </div>
              <div class="search">
                <label>
                  <input type="text" placeholder="Search here">
                  <ion-icon name="search-outline"></ion-icon>
                </label>
              </div>
              <div class="user">
                <img src="../../..../../public/images/admin/customer01.jpg" alt="">
              </div>
            </div>
            <div class="container w-100">
              ${n}
            </div>
          </div>
        </div>
      `}catch(t){return console.error("Failed to render ListProdukPage:",t),"<p>Failed to load products. Please try again later.</p>"}},async afterRender(){await Si.afterRender(),Wt()}},Nd={async render(t){try{if(!Array.isArray(t))throw new Error("Expected an array of users");return`
          <div class="container mt-5 mx-2">
            <h2 class="text-center">List Customers</h2>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Alamat</th>
                    <th>Telepon</th>
                  </tr>
                </thead>
                <tbody id="userList">
                  ${t.map((r,a)=>`
            <tr>
              <td>${a+1}</td>
              <td>${r.username}</td>
              <td>${r.email}</td>
              <td>${r.alamat}</td>
              <td>${r.nomor_telepon}</td>
            </tr>
          `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `}catch(n){return console.error("Error rendering user list:",n),"<p>Failed to render user list. Please try again later.</p>"}}},Bd={async render(){try{const t=await Ss();if(!t||!t.status==="success")throw new Error("Failed to fetch users");const n=t.data&&Array.isArray(t.data.users)?t.data.users:[];console.log("Users:",n);const r=await Nd.render(n);return`
        <div class="container-dashboard ms-0">
          ${await kt.render()}
          <div class="main">
            <div class="topbar">
              <div class="toggle">
                <ion-icon name="menu-outline"></ion-icon>
              </div>
              <div class="search">
                <label>
                  <input type="text" placeholder="Search here">
                  <ion-icon name="search-outline"></ion-icon>
                </label>
              </div>
              <div class="user">
                <img src="../../..../../public/images/admin/customer01.jpg" alt="">
              </div>
            </div>
            <div class="container w-100">
            ${r}
            </div>
          </div>
        </div>
      `}catch(t){return console.error("Failed to render CustomerPage:",t),"<p>Failed to load customers. Please try again later.</p>"}},afterRender:()=>{Wt()}},Gi="https://serbasayur-id-back-end.up.railway.app";async function Fd(t,n){try{const r=await fetch(`${Gi}/admins`);if(!r.ok)throw new Error("Failed to fetch users");const o=(await r.json()).data.admins;if(console.log(o),!Array.isArray(o))throw new Error("Expected an array of users");const c=o.find(h=>h.username===t&&h.password===n);if(console.log(o),c)return localStorage.setItem("isLoggedIn",!0),localStorage.setItem("adminId",c.id_admin),c;throw alert("Invalid username or password"),new Error("Invalid username or password")}catch(r){throw console.error("Failed to login:",r.message),new Error("Failed to login")}}async function Hd(t){try{const n=await fetch(`${Gi}/admins`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw new Error("Network response was not ok");return await n.json()}catch(n){throw console.error("There was a problem with the fetch operation:",n),n}}const qd={async render(){return`
      <div id="register-page">
        <div class="register-container text-center">
          <div class="register-card">
            <img src="../..../../public/images/logo1.png" alt="Logo" class="logo">
            <form id="register-form">
              <div class="input-group">
                <div class="input-container">
                  <label for="username"></label>
                  <div class=""><i class="fas fa-user"></i></div>
                  <input type="text" id="username" name="username" placeholder="USERNAME" required>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="email"></label>
                  <div class=""><i class="fas fa-envelope"></i></div>
                  <input type="email" id="email" name="email" placeholder="EMAIL" required>
                  <span id="email-error" class="error-message"></span>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="password"></label>
                  <div class=""><i class="fas fa-lock"></i></div>
                  <input type="password" id="password" name="password" placeholder="PASSWORD" required>
                </div>
              </div>
              <button type="submit" class="register-button">Register</button>
            </form>
            <p class="login-link">Have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    `},async afterRender(){const t=document.querySelector("#register-form");t.addEventListener("submit",async n=>{n.preventDefault();const r={username:document.getElementById("username").value,email:document.getElementById("email").value,password:document.getElementById("password").value};try{const a=await Hd(r);t.reset(),R.redirect("/dashboard/login"),alert("Registration successful!")}catch(a){console.error("Error during registration:",a),alert("Registration failed. Please try again later.")}})}},Ud={async render(){return`
      <div id="login-page">
        <div class="login-container text-center">
          <div class="login-card">
            <img src="../..../../public/images/logo1.png" alt="Logo" class="logo">
            <h5 style="color: #4dc38c">Login Admin</h5>
            <form id="login-form">
              <div class="input-group">
                <div class="input-container">
                  <label for="username"></label>
                  <div class=""><i class="fas fa-user"></i></div>
                  <input type="text" id="username" name="username" placeholder="USERNAME" required>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="password"></label>
                  <div class=""><i class="fas fa-lock"></i></div>
                  <input type="password" id="password" name="password" placeholder="PASSWORD" required>
                </div>
              </div>
              <button type="submit" class="login-button">Login</button>
            </form>
            <p class="register-link">Don't have an account? <a href="dashboard/register">Register</a></p>
          </div>
        </div>
      </div>
    `},async afterRender(){document.getElementById("login-form").addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("username").value,a=document.getElementById("password").value;try{const o=await Fd(r,a);o&&(sessionStorage.setItem("currentAdmin",JSON.stringify(o)),R.redirect("/dashboard"))}catch(o){console.error("Login gagal:",o.message),alert(o.message)}})}},Kd=document.getElementById("app"),ee=async(t,n)=>{Kd.innerHTML=await t.render(n),t.afterRender&&t.afterRender(n)},zt=async(t,n)=>{if(!JSON.parse(sessionStorage.getItem("currentAdmin"))&&t.pathname!=="/dashboard/login"&&t.pathname!=="/dashboard/register"){R.redirect("/dashboard/login");return}n()};R("/",async()=>{await ee(vs)});R("/login",()=>ee(bc));R("/register",async()=>{await ee(_c)});R("/detail/:id",async t=>{const{id:n}=t.params;await ee(Ic,n)});R("/about",()=>ee(Ld));R("/checkout",()=>ee(jc));R("/order",()=>ee(Nc));R("/dashboard",zt,()=>ee(Md));R("/profile",()=>ee(Td));R("/profile/edit-profile",()=>ee(Pd));R("/dashboard/addProduk",zt,()=>ee(Rd));R("/dashboard/Category",zt,()=>ee(jd));R("/dashboard/listProduk",zt,()=>ee(Dd));R("/dashboard/customers",zt,()=>ee(Bd));R("/dashboard/register",()=>ee(qd));R("/dashboard/login",()=>ee(Ud));R("/c/:category",async t=>{const{category:n}=t.params;await ee(Fc,{category:n})});R("/search/:query",async t=>{const{query:n}=t.params;await ee(Sd,{query:n})});R();document.addEventListener("DOMContentLoaded",async()=>{const t=document.getElementById("app");t.innerHTML=await vs.render(),vs.afterRender(),R()});
