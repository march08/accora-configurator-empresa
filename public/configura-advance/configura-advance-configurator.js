!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ConfiguraAdvance={})}(this,(function(t){"use strict";function e(){}function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function c(){return Object.create(null)}function o(t){t.forEach(r)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,i;function u(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function d(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function f(t,e,n,r){if(t){const c=$(t,e,n,r);return t[0](c)}}function $(t,e,r,c){return t[1]&&c?n(r.ctx.slice(),t[1](c(e))):r.ctx}function p(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(void 0===e.dirty)return c;if("object"==typeof c){const t=[],n=Math.max(e.dirty.length,c.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|c[r];return t}return e.dirty|c}return e.dirty}function m(t,e,n,r,c,o){if(c){const s=$(e,n,r,o);t.p(s,c)}}function g(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function h(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function v(t,e){const n={};e=new Set(e);for(const r in t)e.has(r)||"$"===r[0]||(n[r]=t[r]);return n}function b(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function k(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function _(t){return document.createTextNode(t)}function C(){return _(" ")}function A(){return _("")}function F(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function O(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function j(t,e){for(const n in e)O(t,n,e[n])}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n){t.classList[n?"add":"remove"](e)}function N(t){i=t}function q(t){(function(){if(!i)throw new Error("Function called outside component initialization");return i})().$$.on_mount.push(t)}const H=[],T=[],M=[],L=[],Q=Promise.resolve();let z=!1;function B(){z||(z=!0,Q.then(Z))}function P(t){M.push(t)}const D=new Set;let I=0;function Z(){const t=i;do{for(;I<H.length;){const t=H[I];I++,N(t),V(t.$$)}for(N(null),H.length=0,I=0;T.length;)T.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];D.has(e)||(D.add(e),e())}M.length=0}while(H.length);for(;L.length;)L.pop()();z=!1,D.clear(),N(t)}function V(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const R=new Set;let W;function Y(){W={r:0,c:[],p:W}}function G(){W.r||o(W.c),W=W.p}function U(t,e){t&&t.i&&(R.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(R.has(t))return;R.add(t),W.c.push((()=>{R.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function K(t,e){const n={},r={},c={$$scope:1};let o=t.length;for(;o--;){const s=t[o],a=e[o];if(a){for(const t in s)t in a||(r[t]=1);for(const t in a)c[t]||(n[t]=a[t],c[t]=1);t[o]=a}else for(const t in s)c[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){t&&t.c()}function tt(t,e,n,c){const{fragment:a,on_mount:l,on_destroy:i,after_update:u}=t.$$;a&&a.m(e,n),c||P((()=>{const e=l.map(r).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(P)}function et(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,n,r,s,a,l,u,d=[-1]){const f=i;N(t);const $=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:a,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:c(),dirty:d,skip_bound:!1,root:n.target||f.$$.root};u&&u($.root);let p=!1;if($.ctx=r?r(t,n.props||{},((e,n,...r)=>{const c=r.length?r[0]:n;return $.ctx&&a($.ctx[e],$.ctx[e]=c)&&(!$.skip_bound&&$.bound[e]&&$.bound[e](c),p&&function(t,e){-1===t.$$.dirty[0]&&(H.push(t),B(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],$.update(),p=!0,o($.before_update),$.fragment=!!s&&s($.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);$.fragment&&$.fragment.l(t),t.forEach(x)}else $.fragment&&$.fragment.c();n.intro&&U(t.$$.fragment),tt(t,n.target,n.anchor,n.customElement),Z()}N(f)}class rt{$destroy(){et(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ct=[];function ot(t,n=e){let r;const c=new Set;function o(e){if(a(t,e)&&(t=e,r)){const e=!ct.length;for(const e of c)e[1](),ct.push(e,t);if(e){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(s,a=e){const l=[s,a];return c.add(l),1===c.size&&(r=n(o)||e),s(t),()=>{c.delete(l),0===c.size&&(r(),r=null)}}}}const st={headrest:!1,lateralSupport:!1,backrest:"normal",dropdownArmrest:!1},at=ot(st);function lt(t){let r,c,o=[{width:"48"},{height:"48"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},t[0]],s={};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return{c(){r=k("svg"),c=k("path"),O(c,"d","M24 8a16 16 0 1 0 0 32 16 16 0 0 0 0-32Zm0 30.545a14.545 14.545 0 1 1 0-29.09 14.545 14.545 0 0 1 0 29.09Zm8-15.272h-7.273V16a.727.727 0 1 0-1.454 0v7.273H16a.727.727 0 1 0 0 1.454h7.273V32a.728.728 0 0 0 1.454 0v-7.273H32a.728.728 0 0 0 0-1.454Z"),O(c,"fill","#313131"),j(r,s)},m(t,e){w(t,r,e),b(r,c)},p(t,[e]){j(r,s=K(o,[{width:"48"},{height:"48"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},1&e&&t[0]]))},i:e,o:e,d(t){t&&x(r)}}}function it(t,e,r){return t.$$set=t=>{r(0,e=n(n({},e),h(t)))},[e=h(e)]}class ut extends rt{constructor(t){super(),nt(this,t,it,lt,a,{})}}function dt(t){let e,n;return{c(){e=y("div"),n=_(t[2]),O(e,"class","value")},m(t,r){w(t,e,r),b(e,n)},p(t,e){4&e&&S(n,t[2])},d(t){t&&x(e)}}}function ft(t){let e,n,r,c,o,s,a,l,i,u,d,f,$,p,m;r=new t[3]({props:{class:"acc-customization-icon-container__icon"}});let g=t[2]&&dt(t);return{c(){e=y("div"),n=y("div"),X(r.$$.fragment),c=C(),o=y("div"),s=y("div"),a=_(t[1]),l=C(),g&&g.c(),i=C(),u=y("div"),d=y("div"),f=_(t[0]),$=_(" options\n      "),p=y("span"),p.textContent=" available",O(n,"class","acc-customization-icon-container"),O(s,"class","title"),O(o,"class","acc-customization-content"),O(p,"class","acc-select-container__sticker__available"),O(d,"class","acc-select-container__sticker"),O(u,"class","acc-select-container"),O(e,"class","acc-customization-select noclick")},m(t,h){w(t,e,h),b(e,n),tt(r,n,null),b(e,c),b(e,o),b(o,s),b(s,a),b(o,l),g&&g.m(o,null),b(e,i),b(e,u),b(u,d),b(d,f),b(d,$),b(d,p),m=!0},p(t,[e]){(!m||2&e)&&S(a,t[1]),t[2]?g?g.p(t,e):(g=dt(t),g.c(),g.m(o,null)):g&&(g.d(1),g=null),(!m||1&e)&&S(f,t[0])},i(t){m||(U(r.$$.fragment,t),m=!0)},o(t){J(r.$$.fragment,t),m=!1},d(t){t&&x(e),et(r),g&&g.d()}}}function $t(t,e,n){let{length:r}=e,{title:c}=e,{value:o=""}=e;const s=ut;return t.$$set=t=>{"length"in t&&n(0,r=t.length),"title"in t&&n(1,c=t.title),"value"in t&&n(2,o=t.value)},[r,c,o,s]}class pt extends rt{constructor(t){super(),nt(this,t,$t,ft,a,{length:0,title:1,value:2})}}const mt=t=>"https://cdn.jsdelivr.net/gh/accora-care/configurators@latest/public"+t;function gt(t){let n,r;return{c(){n=y("img"),u(n.src,r=mt(t[0]))||O(n,"src",r),O(n,"class",t[2]),O(n,"alt",t[1])},m(t,e){w(t,n,e)},p(t,[e]){1&e&&!u(n.src,r=mt(t[0]))&&O(n,"src",r),2&e&&O(n,"alt",t[1])},i:e,o:e,d(t){t&&x(n)}}}function ht(t,e,r){const c=["src","alt"];let o=v(e,c),{class:s}=o,{src:a=""}=e,{alt:l=""}=e;return t.$$set=t=>{e=n(n({},e),h(t)),r(3,o=v(e,c)),"src"in t&&r(0,a=t.src),"alt"in t&&r(1,l=t.alt)},[a,l,s]}class vt extends rt{constructor(t){super(),nt(this,t,ht,gt,a,{src:0,alt:1})}}function bt(t){let e,n;const r=t[1].default,c=f(r,t,t[0],null);return{c(){e=y("div"),c&&c.c(),O(e,"class","acc-preview-frame")},m(t,r){w(t,e,r),c&&c.m(e,null),n=!0},p(t,[e]){c&&c.p&&(!n||1&e)&&m(c,r,t,t[0],n?p(r,t[0],e,null):g(t[0]),null)},i(t){n||(U(c,t),n=!0)},o(t){J(c,t),n=!1},d(t){t&&x(e),c&&c.d(t)}}}function wt(t,e,n){let{$$slots:r={},$$scope:c}=e;return t.$$set=t=>{"$$scope"in t&&n(0,c=t.$$scope)},[c,r]}class xt extends rt{constructor(t){super(),nt(this,t,wt,bt,a,{})}}function yt(t){let e,n,r,c;return e=new vt({props:{src:"/images/configura-advance/lat_support_left.png"}}),r=new vt({props:{src:"/images/configura-advance/lat_support_right.png"}}),{c(){X(e.$$.fragment),n=C(),X(r.$$.fragment)},m(t,o){tt(e,t,o),w(t,n,o),tt(r,t,o),c=!0},i(t){c||(U(e.$$.fragment,t),U(r.$$.fragment,t),c=!0)},o(t){J(e.$$.fragment,t),J(r.$$.fragment,t),c=!1},d(t){et(e,t),t&&x(n),et(r,t)}}}function kt(t){let e,n;return e=new vt({props:{src:"/images/configura-advance/headrest--postural.png"}}),{c(){X(e.$$.fragment)},m(t,r){tt(e,t,r),n=!0},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function _t(t){let e,n,r,c,o,s,a,l,i,u,d;e=new vt({props:{src:t[0].dropdownArmrest?"/images/configura-advance/armrest_left--alternate.png":"/images/configura-advance/armrest_left--standard.png"}}),r=new vt({props:{src:"normal"===t[0].backrest?"/images/configura-advance/backrest--standard.png":"/images/configura-advance/backrest--postural.png"}}),o=new vt({props:{src:"/images/configura-advance/base.png"}});let f=t[0].lateralSupport&&yt();l=new vt({props:{src:t[0].dropdownArmrest?"/images/configura-advance/armrest_right--alternate.png":"/images/configura-advance/armrest_right--standard.png"}});let $=t[0].headrest&&"postural"===t[0].backrest&&kt();return{c(){X(e.$$.fragment),n=C(),X(r.$$.fragment),c=C(),X(o.$$.fragment),s=C(),f&&f.c(),a=C(),X(l.$$.fragment),i=C(),$&&$.c(),u=A()},m(t,p){tt(e,t,p),w(t,n,p),tt(r,t,p),w(t,c,p),tt(o,t,p),w(t,s,p),f&&f.m(t,p),w(t,a,p),tt(l,t,p),w(t,i,p),$&&$.m(t,p),w(t,u,p),d=!0},p(t,n){const c={};1&n&&(c.src=t[0].dropdownArmrest?"/images/configura-advance/armrest_left--alternate.png":"/images/configura-advance/armrest_left--standard.png"),e.$set(c);const o={};1&n&&(o.src="normal"===t[0].backrest?"/images/configura-advance/backrest--standard.png":"/images/configura-advance/backrest--postural.png"),r.$set(o),t[0].lateralSupport?f?1&n&&U(f,1):(f=yt(),f.c(),U(f,1),f.m(a.parentNode,a)):f&&(Y(),J(f,1,1,(()=>{f=null})),G());const s={};1&n&&(s.src=t[0].dropdownArmrest?"/images/configura-advance/armrest_right--alternate.png":"/images/configura-advance/armrest_right--standard.png"),l.$set(s),t[0].headrest&&"postural"===t[0].backrest?$?1&n&&U($,1):($=kt(),$.c(),U($,1),$.m(u.parentNode,u)):$&&(Y(),J($,1,1,(()=>{$=null})),G())},i(t){d||(U(e.$$.fragment,t),U(r.$$.fragment,t),U(o.$$.fragment,t),U(f),U(l.$$.fragment,t),U($),d=!0)},o(t){J(e.$$.fragment,t),J(r.$$.fragment,t),J(o.$$.fragment,t),J(f),J(l.$$.fragment,t),J($),d=!1},d(t){et(e,t),t&&x(n),et(r,t),t&&x(c),et(o,t),t&&x(s),f&&f.d(t),t&&x(a),et(l,t),t&&x(i),$&&$.d(t),t&&x(u)}}}function Ct(t){let e,n;return e=new xt({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment)},m(t,r){tt(e,t,r),n=!0},p(t,[n]){const r={};3&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function At(t,e,n){let r;return d(t,at,(t=>n(0,r=t))),[r]}class Ft extends rt{constructor(t){super(),nt(this,t,At,Ct,a,{})}}function Ot(t){let e,n;return{c(){e=y("span"),n=_(t[1]),O(e,"class","acc-grid-title")},m(t,r){w(t,e,r),b(e,n)},p(t,e){2&e&&S(n,t[1])},d(t){t&&x(e)}}}function jt(t){let e,n,r,c,o=!!t[1]&&Ot(t);const s=t[3].default,a=f(s,t,t[2],null);return{c(){e=y("div"),o&&o.c(),n=C(),r=y("div"),a&&a.c(),O(r,"class","acc-grid"),E(r,"acc-grid-hidden",!t[0]),O(e,"class","acc-grid-container")},m(t,s){w(t,e,s),o&&o.m(e,null),b(e,n),b(e,r),a&&a.m(r,null),c=!0},p(t,[l]){t[1]?o?o.p(t,l):(o=Ot(t),o.c(),o.m(e,n)):o&&(o.d(1),o=null),a&&a.p&&(!c||4&l)&&m(a,s,t,t[2],c?p(s,t[2],l,null):g(t[2]),null),1&l&&E(r,"acc-grid-hidden",!t[0])},i(t){c||(U(a,t),c=!0)},o(t){J(a,t),c=!1},d(t){t&&x(e),o&&o.d(),a&&a.d(t)}}}function St(t,e,n){let{$$slots:r={},$$scope:c}=e,{visible:o}=e,{title:s=""}=e;return t.$$set=t=>{"visible"in t&&n(0,o=t.visible),"title"in t&&n(1,s=t.title),"$$scope"in t&&n(2,c=t.$$scope)},[o,s,c,r]}class Et extends rt{constructor(t){super(),nt(this,t,St,jt,a,{visible:0,title:1})}}function Nt(t){let r,c,o=[{width:"18"},{height:"10"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},t[0]],s={};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return{c(){r=k("svg"),c=k("path"),O(c,"d","M17.385 3.399a.273.273 0 0 0 0-.547h-1.109V.923A.923.923 0 0 0 15.353 0H5.725a.918.918 0 0 0-.764.402L2.78 3.626a.371.371 0 0 1-.31.165H.598A.598.598 0 0 0 0 4.394v3.46a.598.598 0 0 0 .598.599h2.135a1.547 1.547 0 1 0 3.095 0h4.693a1.547 1.547 0 1 0 3.094 0h2.404a.273.273 0 0 0 0-.547h-2.414a1.547 1.547 0 1 0-3.094 0H5.838a1.547 1.547 0 0 0-3.094 0H.598a.052.052 0 0 1-.051-.051V4.394a.052.052 0 0 1 .051-.052h1.867a.918.918 0 0 0 .763-.402L5.415.717a.371.371 0 0 1 .31-.165h9.633a.376.376 0 0 1 .372.371v1.929h-5.452a.273.273 0 0 0 0 .547h5.452v2.063h-2.171a.273.273 0 0 0 0 .546h3.826a.274.274 0 0 0 0-.546h-1.109V3.399h1.11Zm-5.327 3.723a1.031 1.031 0 1 1 0 2.063 1.031 1.031 0 0 1 0-2.063Zm-7.767 0A1.031 1.031 0 1 1 3.9 7.2c.125-.051.26-.077.396-.077h-.005Z"),O(c,"fill","#fff"),j(r,s)},m(t,e){w(t,r,e),b(r,c)},p(t,[e]){j(r,s=K(o,[{width:"18"},{height:"10"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},1&e&&t[0]]))},i:e,o:e,d(t){t&&x(r)}}}function qt(t,e,r){return t.$$set=t=>{r(0,e=n(n({},e),h(t)))},[e=h(e)]}class Ht extends rt{constructor(t){super(),nt(this,t,qt,Nt,a,{})}}function Tt(t){let e,n;return{c(){e=y("span"),n=_(t[5]),O(e,"class","acc-exception")},m(t,r){w(t,e,r),b(e,n)},p(t,e){32&e&&S(n,t[5])},d(t){t&&x(e)}}}function Mt(t){let e,n;return{c(){e=y("div"),n=_(t[2]),O(e,"class","acc-grid-item-title")},m(t,r){w(t,e,r),b(e,n)},p(t,e){4&e&&S(n,t[2])},d(t){t&&x(e)}}}function Lt(t){let e,n,r,c,o;return n=new Ht({}),{c(){e=y("div"),X(n.$$.fragment),r=C(),c=y("span"),c.textContent="Quickship",O(c,"class","acc-grid-item-qctext"),O(e,"class","acc-grid-item-quickship")},m(t,s){w(t,e,s),tt(n,e,null),b(e,r),b(e,c),o=!0},i(t){o||(U(n.$$.fragment,t),o=!0)},o(t){J(n.$$.fragment,t),o=!1},d(t){t&&x(e),et(n)}}}function Qt(t){let e,n,r,c,o,a,l,i;const u=t[7].default,d=f(u,t,t[6],null);let $=!!t[5]&&Tt(t),h=t[2]&&Mt(t),v=t[3]&&Lt();return{c(){e=y("div"),n=y("div"),d&&d.c(),r=C(),$&&$.c(),c=C(),h&&h.c(),o=C(),v&&v.c(),O(e,"class","acc-grid-item"),E(e,"active",t[0]),E(e,"disabled",!!t[5]||t[4])},m(u,f){w(u,e,f),b(e,n),d&&d.m(n,null),b(n,r),$&&$.m(n,null),b(n,c),h&&h.m(n,null),b(e,o),v&&v.m(e,null),a=!0,l||(i=F(e,"click",(function(){s(t[1])&&t[1].apply(this,arguments)})),l=!0)},p(r,[o]){t=r,d&&d.p&&(!a||64&o)&&m(d,u,t,t[6],a?p(u,t[6],o,null):g(t[6]),null),t[5]?$?$.p(t,o):($=Tt(t),$.c(),$.m(n,c)):$&&($.d(1),$=null),t[2]?h?h.p(t,o):(h=Mt(t),h.c(),h.m(n,null)):h&&(h.d(1),h=null),t[3]?v?8&o&&U(v,1):(v=Lt(),v.c(),U(v,1),v.m(e,null)):v&&(Y(),J(v,1,1,(()=>{v=null})),G()),1&o&&E(e,"active",t[0]),48&o&&E(e,"disabled",!!t[5]||t[4])},i(t){a||(U(d,t),U(v),a=!0)},o(t){J(d,t),J(v),a=!1},d(t){t&&x(e),d&&d.d(t),$&&$.d(),h&&h.d(),v&&v.d(),l=!1,i()}}}function zt(t,e,n){let{$$slots:r={},$$scope:c}=e,{active:o}=e,{onClick:s}=e,{title:a=""}=e,{isQuickship:l=!1}=e,{disabled:i=!1}=e,{notAllowedMessage:u=""}=e;return t.$$set=t=>{"active"in t&&n(0,o=t.active),"onClick"in t&&n(1,s=t.onClick),"title"in t&&n(2,a=t.title),"isQuickship"in t&&n(3,l=t.isQuickship),"disabled"in t&&n(4,i=t.disabled),"notAllowedMessage"in t&&n(5,u=t.notAllowedMessage),"$$scope"in t&&n(6,c=t.$$scope)},[o,s,a,l,i,u,c,r]}class Bt extends rt{constructor(t){super(),nt(this,t,zt,Qt,a,{active:0,onClick:1,title:2,isQuickship:3,disabled:4,notAllowedMessage:5})}}function Pt(t){let e,r;const c=[{class:"acc-grid-item-preview-image "+t[0]},{alt:""},t[2],{src:t[1]}];let o={};for(let t=0;t<c.length;t+=1)o=n(o,c[t]);return e=new vt({props:o}),{c(){X(e.$$.fragment)},m(t,n){tt(e,t,n),r=!0},p(t,[n]){const r=7&n?K(c,[1&n&&{class:"acc-grid-item-preview-image "+t[0]},c[1],4&n&&(o=t[2],"object"==typeof o&&null!==o?o:{}),2&n&&{src:t[1]}]):{};var o;e.$set(r)},i(t){r||(U(e.$$.fragment,t),r=!0)},o(t){J(e.$$.fragment,t),r=!1},d(t){et(e,t)}}}function Dt(t,e,r){const c=[];let o=v(e,c);var s=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n};let{class:a,src:l}=o,i=s(o,["class","src"]);return t.$$set=t=>{e=n(n({},e),h(t)),r(4,o=v(e,c))},[a,l,i]}class It extends rt{constructor(t){super(),nt(this,t,Dt,Pt,a,{})}}function Zt(t){let n,r;return n=new It({props:{src:"/images/configura-advance/backrest--standard--preview.jpg",class:"image-frame-img"}}),{c(){X(n.$$.fragment)},m(t,e){tt(n,t,e),r=!0},p:e,i(t){r||(U(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){et(n,t)}}}function Vt(t){let n,r;return n=new It({props:{src:"/images/configura-advance/backrest--postural--preview.jpg",class:"image-frame-img"}}),{c(){X(n.$$.fragment)},m(t,e){tt(n,t,e),r=!0},p:e,i(t){r||(U(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){et(n,t)}}}function Rt(t){let e,n,r,c;return e=new Bt({props:{active:"normal"===t[1].backrest,title:"Waterfall backrest",onClick:t[2],$$slots:{default:[Zt]},$$scope:{ctx:t}}}),r=new Bt({props:{active:"postural"===t[1].backrest,title:"Postural backrest",onClick:t[3],$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment),n=C(),X(r.$$.fragment)},m(t,o){tt(e,t,o),w(t,n,o),tt(r,t,o),c=!0},p(t,n){const c={};2&n&&(c.active="normal"===t[1].backrest),256&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c);const o={};2&n&&(o.active="postural"===t[1].backrest),256&n&&(o.$$scope={dirty:n,ctx:t}),r.$set(o)},i(t){c||(U(e.$$.fragment,t),U(r.$$.fragment,t),c=!0)},o(t){J(e.$$.fragment,t),J(r.$$.fragment,t),c=!1},d(t){et(e,t),t&&x(n),et(r,t)}}}function Wt(t){let n,r;return n=new It({props:{src:"/images/configura-advance/armrest--fixed--preview.jpg",class:"image-frame-img"}}),{c(){X(n.$$.fragment)},m(t,e){tt(n,t,e),r=!0},p:e,i(t){r||(U(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){et(n,t)}}}function Yt(t){let n,r;return n=new It({props:{src:"/images/configura-advance/armrest--dropdown--preview.jpg",class:"image-frame-img"}}),{c(){X(n.$$.fragment)},m(t,e){tt(n,t,e),r=!0},p:e,i(t){r||(U(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){et(n,t)}}}function Gt(t){let e,n,r,c;return e=new Bt({props:{active:!t[1].dropdownArmrest,title:"Fixed armrests",onClick:t[4],$$slots:{default:[Wt]},$$scope:{ctx:t}}}),r=new Bt({props:{active:t[1].dropdownArmrest,title:"Dropdown armrests",onClick:t[5],$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment),n=C(),X(r.$$.fragment)},m(t,o){tt(e,t,o),w(t,n,o),tt(r,t,o),c=!0},p(t,n){const c={};2&n&&(c.active=!t[1].dropdownArmrest),256&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c);const o={};2&n&&(o.active=t[1].dropdownArmrest),256&n&&(o.$$scope={dirty:n,ctx:t}),r.$set(o)},i(t){c||(U(e.$$.fragment,t),U(r.$$.fragment,t),c=!0)},o(t){J(e.$$.fragment,t),J(r.$$.fragment,t),c=!1},d(t){et(e,t),t&&x(n),et(r,t)}}}function Ut(t){let n,r;return n=new It({props:{src:"/images/configura-advance/headrest--preview.jpg",class:"image-frame-img"}}),{c(){X(n.$$.fragment)},m(t,e){tt(n,t,e),r=!0},p:e,i(t){r||(U(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){et(n,t)}}}function Jt(t){let n,r;return n=new It({props:{src:"/images/configura-advance/lat_support_preview.jpg",class:"image-frame-img"}}),{c(){X(n.$$.fragment)},m(t,e){tt(n,t,e),r=!0},p:e,i(t){r||(U(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){et(n,t)}}}function Kt(t){let e,n,r,c;return e=new Bt({props:{notAllowedMessage:t[0],active:t[1].headrest,title:"Headrest",onClick:t[6],$$slots:{default:[Ut]},$$scope:{ctx:t}}}),r=new Bt({props:{active:t[1].lateralSupport,title:"Lateral support",onClick:t[7],$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment),n=C(),X(r.$$.fragment)},m(t,o){tt(e,t,o),w(t,n,o),tt(r,t,o),c=!0},p(t,n){const c={};1&n&&(c.notAllowedMessage=t[0]),2&n&&(c.active=t[1].headrest),256&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c);const o={};2&n&&(o.active=t[1].lateralSupport),256&n&&(o.$$scope={dirty:n,ctx:t}),r.$set(o)},i(t){c||(U(e.$$.fragment,t),U(r.$$.fragment,t),c=!0)},o(t){J(e.$$.fragment,t),J(r.$$.fragment,t),c=!1},d(t){et(e,t),t&&x(n),et(r,t)}}}function Xt(t){let e,n,r,c,o,s;return e=new Et({props:{visible:!0,title:"Backrests",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),r=new Et({props:{visible:!0,title:"Armrests",$$slots:{default:[Gt]},$$scope:{ctx:t}}}),o=new Et({props:{visible:!0,title:"Accessories",$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment),n=C(),X(r.$$.fragment),c=C(),X(o.$$.fragment)},m(t,a){tt(e,t,a),w(t,n,a),tt(r,t,a),w(t,c,a),tt(o,t,a),s=!0},p(t,[n]){const c={};258&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c);const s={};258&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s);const a={};259&n&&(a.$$scope={dirty:n,ctx:t}),o.$set(a)},i(t){s||(U(e.$$.fragment,t),U(r.$$.fragment,t),U(o.$$.fragment,t),s=!0)},o(t){J(e.$$.fragment,t),J(r.$$.fragment,t),J(o.$$.fragment,t),s=!1},d(t){et(e,t),t&&x(n),et(r,t),t&&x(c),et(o,t)}}}function te(t,e,n){let r;d(t,at,(t=>n(1,r=t)));let c="";at.subscribe((t=>{n(0,c=(t=>"postural"!==t.backrest?"Not available with waterfall backrest.":null)(t))}));return[c,r,()=>{at.update((t=>({...t,backrest:"normal",headrest:!1})))},()=>{at.update((t=>({...t,backrest:"postural"})))},()=>{at.update((t=>({...t,dropdownArmrest:!1})))},()=>{at.update((t=>({...t,dropdownArmrest:!0})))},()=>{at.update((t=>({...t,headrest:!t.headrest})))},()=>{at.update((t=>({...t,lateralSupport:!t.lateralSupport})))}]}class ee extends rt{constructor(t){super(),nt(this,t,te,Xt,a,{})}}function ne(t){let e,n;const r=t[1].default,c=f(r,t,t[0],null);return{c(){e=y("div"),c&&c.c(),O(e,"class","acc-configurator")},m(t,r){w(t,e,r),c&&c.m(e,null),n=!0},p(t,[e]){c&&c.p&&(!n||1&e)&&m(c,r,t,t[0],n?p(r,t[0],e,null):g(t[0]),null)},i(t){n||(U(c,t),n=!0)},o(t){J(c,t),n=!1},d(t){t&&x(e),c&&c.d(t)}}}function re(t,e,n){let{$$slots:r={},$$scope:c}=e;return t.$$set=t=>{"$$scope"in t&&n(0,c=t.$$scope)},[c,r]}class ce extends rt{constructor(t){super(),nt(this,t,re,ne,a,{})}}function oe(t){let e,n,r;const c=t[1].default,o=f(c,t,t[0],null);return{c(){e=y("div"),n=y("div"),o&&o.c(),O(n,"class","acc-image-frame-container__sticky"),O(e,"class","acc-image-frame-container")},m(t,c){w(t,e,c),b(e,n),o&&o.m(n,null),r=!0},p(t,[e]){o&&o.p&&(!r||1&e)&&m(o,c,t,t[0],r?p(c,t[0],e,null):g(t[0]),null)},i(t){r||(U(o,t),r=!0)},o(t){J(o,t),r=!1},d(t){t&&x(e),o&&o.d(t)}}}function se(t,e,n){let{$$slots:r={},$$scope:c}=e;return t.$$set=t=>{"$$scope"in t&&n(0,c=t.$$scope)},[c,r]}class ae extends rt{constructor(t){super(),nt(this,t,se,oe,a,{})}}function le(t){let n,r;return{c(){n=y("div"),r=_(t[0]),O(n,"class","acc-form-title")},m(t,e){w(t,n,e),b(n,r)},p(t,[e]){1&e&&S(r,t[0])},i:e,o:e,d(t){t&&x(n)}}}function ie(t,e,n){let{title:r}=e;return t.$$set=t=>{"title"in t&&n(0,r=t.title)},[r]}class ue extends rt{constructor(t){super(),nt(this,t,ie,le,a,{title:0})}}const de=ot({isQuoteOpen:null});function fe(t){let n,r,c,o,a;const l=t[2].default,i=f(l,t,t[1],null);return{c(){n=y("div"),i&&i.c(),n.hidden=!0},m(l,u){var d;w(l,n,u),i&&i.m(n,null),c=!0,o||(d=r=$e.call(null,n,t[0]),a=d&&s(d.destroy)?d.destroy:e,o=!0)},p(t,[e]){i&&i.p&&(!c||2&e)&&m(i,l,t,t[1],c?p(l,t[1],e,null):g(t[1]),null),r&&s(r.update)&&1&e&&r.update.call(null,t[0])},i(t){c||(U(i,t),c=!0)},o(t){J(i,t),c=!1},d(t){t&&x(n),i&&i.d(t),o=!1,a()}}}function $e(t,e="body"){let n;async function r(r){if("string"==typeof(e=r)){if(n=document.querySelector(e),null===n&&(await(B(),Q),n=document.querySelector(e)),null===n)throw new Error(`No element found matching css selector: "${e}"`)}else{if(!(e instanceof HTMLElement))throw new TypeError(`Unknown portal target type: ${null===e?"null":typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);n=e}n.appendChild(t),t.hidden=!1}return r(e),{update:r,destroy:function(){t.parentNode&&t.parentNode.removeChild(t)}}}function pe(t,e,n){let{$$slots:r={},$$scope:c}=e,{target:o="body"}=e;return t.$$set=t=>{"target"in t&&n(0,o=t.target),"$$scope"in t&&n(1,c=t.$$scope)},[o,c,r]}class me extends rt{constructor(t){super(),nt(this,t,pe,fe,a,{target:0})}}function ge(t,e,n){const r=t.slice();return r[9]=e[n],r}function he(t){let e,n,r,c,o,s,a=(t[3].thankYouTitle||"Thank you for your request")+"";return n=new vt({props:{class:"acc-form-check",src:"/icons/checked.png",alt:"Ok"}}),{c(){e=y("div"),X(n.$$.fragment),r=C(),c=y("h3"),o=_(a),O(e,"class","acc-thank-you-title")},m(t,a){w(t,e,a),tt(n,e,null),b(e,r),b(e,c),b(c,o),s=!0},p(t,e){(!s||8&e)&&a!==(a=(t[3].thankYouTitle||"Thank you for your request")+"")&&S(o,a)},i(t){s||(U(n.$$.fragment,t),s=!0)},o(t){J(n.$$.fragment,t),s=!1},d(t){t&&x(e),et(n)}}}function ve(t){let e,n,r,c,o,s,a,l,i,u;const d=t[5].default,$=f(d,t,t[6],null);let h=t[1],v=[];for(let e=0;e<h.length;e+=1)v[e]=we(ge(t,h,e));return{c(){e=y("div"),n=y("h3"),r=_("Request a quote - "),c=_(t[2]),o=C(),s=y("div"),a=y("div"),$&&$.c(),l=C(),i=y("ul");for(let t=0;t<v.length;t+=1)v[t].c();O(a,"class","acc-form-preview-container"),O(i,"class","acc-booking-list"),O(s,"class","acc-preview-description"),O(e,"class","acc-modal-header")},m(t,d){w(t,e,d),b(e,n),b(n,r),b(n,c),b(e,o),b(e,s),b(s,a),$&&$.m(a,null),b(s,l),b(s,i);for(let t=0;t<v.length;t+=1)v[t].m(i,null);u=!0},p(t,e){if((!u||4&e)&&S(c,t[2]),$&&$.p&&(!u||64&e)&&m($,d,t,t[6],u?p(d,t[6],e,null):g(t[6]),null),2&e){let n;for(h=t[1],n=0;n<h.length;n+=1){const r=ge(t,h,n);v[n]?v[n].p(r,e):(v[n]=we(r),v[n].c(),v[n].m(i,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=h.length}},i(t){u||(U($,t),u=!0)},o(t){J($,t),u=!1},d(t){t&&x(e),$&&$.d(t),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(v,t)}}}function be(t){let e,n,r,c,o,s,a,l=t[9].label+"",i=t[9].value+"";return{c(){e=y("li"),n=y("span"),r=_(l),c=_(":\n                      "),o=y("span"),s=_(i),a=C(),O(n,"class","acc-booking-item-title"),O(o,"class","acc-booking-item-value"),O(e,"class","acc-booking-item")},m(t,l){w(t,e,l),b(e,n),b(n,r),b(e,c),b(e,o),b(o,s),b(e,a)},p(t,e){2&e&&l!==(l=t[9].label+"")&&S(r,l),2&e&&i!==(i=t[9].value+"")&&S(s,i)},d(t){t&&x(e)}}}function we(t){let e,n=t[9].value&&be(t);return{c(){n&&n.c(),e=A()},m(t,r){n&&n.m(t,r),w(t,e,r)},p(t,r){t[9].value?n?n.p(t,r):(n=be(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&x(e)}}}function xe(t){let e,n,r,c,o,a,l;return{c(){e=y("div"),n=y("a"),n.textContent="Go back to homepage",c=C(),o=y("span"),o.textContent="Close this form",O(n,"class","acc-submit-button"),O(n,"href",r="/"),O(o,"class","acc-close-text"),O(e,"class","acc-modal-footer")},m(r,i){w(r,e,i),b(e,n),b(e,c),b(e,o),a||(l=F(o,"click",(function(){s(t[0])&&t[0].apply(this,arguments)})),a=!0)},p(e,n){t=e},d(t){t&&x(e),a=!1,l()}}}function ye(t){let e,n,r,c,o,a,l,i,u,d,f,$,p;const m=[ve,he],g=[];function h(t,e){return t[4]?1:0}a=h(t),l=g[a]=m[a](t);let v=t[4]&&xe(t);return{c(){e=y("div"),n=y("div"),r=y("div"),c=C(),o=y("div"),l.c(),i=C(),u=y("div"),u.innerHTML='<div id="acc-quote-form"></div>',d=C(),v&&v.c(),O(r,"class","acc-close-btn"),O(u,"class","acc-modal-content"),O(o,"class","acc-modal-scrollarea"),O(n,"class","acc-modal"),O(e,"class","acc-modal-wrapper")},m(l,m){w(l,e,m),b(e,n),b(n,r),b(n,c),b(n,o),g[a].m(o,null),b(o,i),b(o,u),b(o,d),v&&v.m(o,null),f=!0,$||(p=F(r,"click",(function(){s(t[0])&&t[0].apply(this,arguments)})),$=!0)},p(e,n){let r=a;a=h(t=e),a===r?g[a].p(t,n):(Y(),J(g[r],1,1,(()=>{g[r]=null})),G(),l=g[a],l?l.p(t,n):(l=g[a]=m[a](t),l.c()),U(l,1),l.m(o,i)),t[4]?v?v.p(t,n):(v=xe(t),v.c(),v.m(o,null)):v&&(v.d(1),v=null)},i(t){f||(U(l),f=!0)},o(t){J(l),f=!1},d(t){t&&x(e),g[a].d(),v&&v.d(),$=!1,p()}}}function ke(t){let e,n;return e=new me({props:{target:"body",$$slots:{default:[ye]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment)},m(t,r){tt(e,t,r),n=!0},p(t,[n]){const r={};95&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function _e(t,e,n){let{$$slots:r={},$$scope:c}=e,{handleClose:o}=e,{descriptionFormField:s}=e,{title:a}=e,{config:l}=e,i=!1;const u=()=>{const t=s.map((t=>`${t.label}: ${t.value}`)).join("\n");Array.from(document.getElementsByName("quote_request_details")).forEach((e=>{e.value=`${a}\n${t}`}))};return q((async()=>{if(l.hubspotFormConfig)hbspt.forms.create(Object.assign(Object.assign({},l.hubspotFormConfig),{target:"#acc-quote-form",submitButtonClass:"button nav___button-book",cssClass:"acc-hubspot-form",onFormReady:u,onFormSubmitted:()=>{n(4,i=!0)}}));else if(l.cognitoFormConfig){const t=Cognito(l.cognitoFormConfig.key).mount(l.cognitoFormConfig.form,"#acc-quote-form"),e=[];s.forEach((t=>{t.value&&e.push(`${t.label}: ${t.value}`)})),t.prefill({ConfiguratorOptions:e.join(", ")})}})),t.$$set=t=>{"handleClose"in t&&n(0,o=t.handleClose),"descriptionFormField"in t&&n(1,s=t.descriptionFormField),"title"in t&&n(2,a=t.title),"config"in t&&n(3,l=t.config),"$$scope"in t&&n(6,c=t.$$scope)},[o,s,a,l,i,r,c]}class Ce extends rt{constructor(t){super(),nt(this,t,_e,ke,a,{handleClose:0,descriptionFormField:1,title:2,config:3})}}function Ae(t){let e,n,r;return{c(){e=y("a"),n=_("Book a demo"),O(e,"class","acc-submit-button"),O(e,"href",r=t[0].bookADemoHref)},m(t,r){w(t,e,r),b(e,n)},p(t,n){1&n&&r!==(r=t[0].bookADemoHref)&&O(e,"href",r)},d(t){t&&x(e)}}}function Fe(t){let n,r,c;return{c(){n=y("span"),n.textContent="Request a quote",O(n,"class","acc-submit-button")},m(e,o){w(e,n,o),r||(c=F(n,"click",t[5]),r=!0)},p:e,d(t){t&&x(n),r=!1,c()}}}function Oe(t){let e,n;return e=new Ce({props:{title:t[2],descriptionFormField:t[1],config:t[0],handleClose:t[6],$$slots:{default:[je]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment)},m(t,r){tt(e,t,r),n=!0},p(t,n){const r={};4&n&&(r.title=t[2]),2&n&&(r.descriptionFormField=t[1]),1&n&&(r.config=t[0]),128&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function je(t){let e;const n=t[4].default,r=f(n,t,t[7],null);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,c){r&&r.p&&(!e||128&c)&&m(r,n,t,t[7],e?p(n,t[7],c,null):g(t[7]),null)},i(t){e||(U(r,t),e=!0)},o(t){J(r,t),e=!1},d(t){r&&r.d(t)}}}function Se(t){let e,n,r,c,o;function s(t,e){return t[0].hubspotFormConfig||t[0].cognitoFormConfig?Fe:Ae}let a=s(t),l=a(t),i=t[3].isQuoteOpen===t[2]&&!!t[1]&&Oe(t);return{c(){e=y("div"),n=y("div"),l.c(),r=C(),i&&i.c(),c=A(),O(n,"class","acc-submit-content"),O(e,"class","acc-submit")},m(t,s){w(t,e,s),b(e,n),l.m(n,null),w(t,r,s),i&&i.m(t,s),w(t,c,s),o=!0},p(t,[e]){a===(a=s(t))&&l?l.p(t,e):(l.d(1),l=a(t),l&&(l.c(),l.m(n,null))),t[3].isQuoteOpen===t[2]&&t[1]?i?(i.p(t,e),14&e&&U(i,1)):(i=Oe(t),i.c(),U(i,1),i.m(c.parentNode,c)):i&&(Y(),J(i,1,1,(()=>{i=null})),G())},i(t){o||(U(i),o=!0)},o(t){J(i),o=!1},d(t){t&&x(e),l.d(),t&&x(r),i&&i.d(t),t&&x(c)}}}function Ee(t,e,n){let r;d(t,de,(t=>n(3,r=t)));let{$$slots:c={},$$scope:o}=e,{config:s}=e,{descriptionFormField:a}=e,{title:l}=e;return t.$$set=t=>{"config"in t&&n(0,s=t.config),"descriptionFormField"in t&&n(1,a=t.descriptionFormField),"title"in t&&n(2,l=t.title),"$$scope"in t&&n(7,o=t.$$scope)},[s,a,l,r,c,()=>{de.update((t=>({...t,isQuoteOpen:l})))},()=>{de.update((t=>({...t,isQuoteOpen:null})))},o]}class Ne extends rt{constructor(t){super(),nt(this,t,Ee,Se,a,{config:0,descriptionFormField:1,title:2})}}function qe(t){let e,n;return e=new Ft({}),{c(){X(e.$$.fragment)},m(t,r){tt(e,t,r),n=!0},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function He(t){let e,n;return e=new Ft({}),{c(){X(e.$$.fragment)},m(t,r){tt(e,t,r),n=!0},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function Te(t){let e,n,r,c,o,s,a,l,i,u,d,f,$,p,m,g,h;return e=new ae({props:{$$slots:{default:[qe]},$$scope:{ctx:t}}}),o=new ue({props:{title:t[0].mainTitle}}),l=new pt({props:{title:"Options & accessories",length:6}}),u=new ee({}),p=new Ne({props:{title:"Configura Advance",config:t[0],descriptionFormField:[{label:"Backrest",value:"normal"===t[1].backrest?"Waterfall":"Postural"},{label:"Armrests",value:t[1].dropdownArmrest?"Dropdown":"Fixed"},{label:"Headrest",value:t[1].headrest?"Included ✓":"Not included"},{label:"Lateral support",value:t[1].lateralSupport?"Included ✓":"Not included"}],$$slots:{default:[He]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment),n=C(),r=y("div"),c=y("div"),X(o.$$.fragment),s=C(),a=y("div"),X(l.$$.fragment),i=C(),X(u.$$.fragment),d=C(),f=y("div"),f.textContent="Reset to default options",$=C(),X(p.$$.fragment),O(f,"class","reset-form"),O(a,"class","acc-form-content"),O(c,"class","acc-form"),O(r,"id","acc-configura-advance"),O(r,"class","acc-content")},m(v,x){tt(e,v,x),w(v,n,x),w(v,r,x),b(r,c),tt(o,c,null),b(c,s),b(c,a),tt(l,a,null),b(a,i),tt(u,a,null),b(a,d),b(a,f),b(r,$),tt(p,r,null),m=!0,g||(h=F(f,"click",t[2]),g=!0)},p(t,n){const r={};8&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const c={};1&n&&(c.title=t[0].mainTitle),o.$set(c);const s={};1&n&&(s.config=t[0]),2&n&&(s.descriptionFormField=[{label:"Backrest",value:"normal"===t[1].backrest?"Waterfall":"Postural"},{label:"Armrests",value:t[1].dropdownArmrest?"Dropdown":"Fixed"},{label:"Headrest",value:t[1].headrest?"Included ✓":"Not included"},{label:"Lateral support",value:t[1].lateralSupport?"Included ✓":"Not included"}]),8&n&&(s.$$scope={dirty:n,ctx:t}),p.$set(s)},i(t){m||(U(e.$$.fragment,t),U(o.$$.fragment,t),U(l.$$.fragment,t),U(u.$$.fragment,t),U(p.$$.fragment,t),m=!0)},o(t){J(e.$$.fragment,t),J(o.$$.fragment,t),J(l.$$.fragment,t),J(u.$$.fragment,t),J(p.$$.fragment,t),m=!1},d(t){et(e,t),t&&x(n),t&&x(r),et(o),et(l),et(u),et(p),g=!1,h()}}}function Me(t){let e,n;return e=new ce({props:{$$slots:{default:[Te]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment)},m(t,r){tt(e,t,r),n=!0},p(t,[n]){const r={};11&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function Le(t,e,n){let r;d(t,at,(t=>n(1,r=t)));let{config:c}=e;return t.$$set=t=>{"config"in t&&n(0,c=t.config)},[c,r,()=>{at.update((t=>st))}]}class Qe extends rt{constructor(t){super(),nt(this,t,Le,Me,a,{config:0})}}const ze={mainTitle:"Customize your Accora Configura Advance",bookADemoHref:"https://us.accora.care/book-a-demo"},Be=(t,e,n)=>new Qe({target:document.getElementById(t),props:{config:Object.assign(Object.assign(Object.assign({},ze),e),{hubspotFormConfig:n})}});window.ConfiguraAdvance=Be,t.ConfiguraAdvance=Be,t.default=Be,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=configura-advance-configurator.js.map
