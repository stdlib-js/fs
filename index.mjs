// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.0.8-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-utf8-bom@v0.0.9-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint8array@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/process-cwd@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function j(r){var e=r.default;if("function"==typeof e){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}var w=j(Object.freeze({__proto__:null,default:{}})),E=w.close,x=n.isPrimitive,T=t,P=i;var V=function(r,e){if(!x(r))throw new TypeError(P("invalid argument. First argument must be a valid file descriptor (i.e., nonnegative integer). Value: `%s`.",r));if(!T(e))throw new TypeError(P("invalid argument. Last argument must be a function. Value: `%s`.",e));E(r,e)},F=w.closeSync,S=n.isPrimitive,O=i;var _=V;e(_,"sync",(function(r){if(!S(r))throw new TypeError(O("invalid argument. Must provide a valid file descriptor (i.e., a nonnegative integer). Value: `%s`.",r));try{F(r)}catch(r){return r}}));var k,A=_,M=w;k="function"==typeof M.access?M.access:M.stat;var R,L=function(r,e){k(r,(function(r){if(2===e.length)return r?e(r,!1):e(null,!0);if(r)return e(!1);return e(!0)}))},z=w;R="function"==typeof z.accessSync?z.accessSync:z.statSync;var C=L;e(C,"sync",(function(r){try{R(r)}catch(r){return!1}return!0}));var D=C,N={flags:"r",mode:438},W=w.open,B=N;var I=function(r,e,n,t){var i=arguments.length;return 2===i?W(r,B.flags,B.mode,e):3===i?W(r,e,B.mode,n):void W(r,e,n,t)},J=w.openSync,$=N;var q=function(r,e,n){var t,i;t=arguments.length;try{i=1===t?J(r,$.flags,$.mode):J(r,e,2===t?$.mode:n)}catch(r){return r}return i},G=I;e(G,"sync",q);var H=G,K=w.readdir;var Q=function(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);K.apply(null,r)},U=w.readdirSync;var X=Q;e(X,"sync",(function(r){try{return U(r)}catch(r){return r}}));var Y=X,Z=w.readFile;var rr=function(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Z.apply(null,r)},er=w.readFileSync;var nr=rr;e(nr,"sync",(function(r,e){var n;try{n=arguments.length>1?er(r,e):er(r)}catch(r){return r}return n}));var tr=nr,ir=j(Object.freeze({__proto__:null,default:()=>()=>{}})),sr={max_retries:100,max_delay:18e5},ar=l;var or=function(r,e){var n=ar(2,r)-1;return n>e&&(n=e),n},lr=clearTimeout,ur=u,dr=lr;var fr=function(r){var e,n;for(e=ur(r),n=0;n<e.length;n++)dr(r[e[n]])},cr=ir,mr=s.primitives,vr=t,gr=a,pr=tr,hr=o,yr=sr,br=or,jr=fr,wr=cr("read-file-list:async"),Er=yr.max_retries,xr=yr.max_delay;var Tr=function(r,e,n){var t,i,s,a,o,l,u,d;if(!mr(r))throw new TypeError(hr("invalid argument. First argument must be an array of strings. Value: `%s`.",r));if(arguments.length<3?(o={},u=e):(o=gr(e),u=n),!vr(u))throw new TypeError(hr("invalid argument. Callback argument must be a function. Value: `%s`.",u));for(l=r.length,i=new Array(l),t={},a=0,wr("Reading %d files...",l),d=0;d<l;d++)wr("Reading file: %s (%d of %d).",r[d],d+1,l),pr(r[d],o,f(d));function f(e){var n,u,d;function f(){delete t[e],wr("Reading file: %s (%d of %d). Retry: %d of %d.",u,d,l,n,Er),pr(u,o,m)}function m(r,o){var m;if(!s)return r?(wr("Encountered an error when reading %s (%d of %d). Error: %s",u,d,l,r.message),"EMFILE"===r.code||"ENFILE"===r.code?(n+=1)>Er?(wr("Maximum number of retries exceeded. Too many open files."),c(r=new Error("unexpected error. Max retries exceeded. Too many open files."))):(m=br(n,xr),wr("Too many open files. Will retry reading file %d of %d in %s seconds.",d,l,m/1e3),void(t[e]=setTimeout(f,m))):c(r)):(wr("Successfully read file: %s (%d of %d).",u,d,l),i[e]={file:u,data:o},wr("Read %d of %d files.",a+=1,l),a===l?c():void 0);wr("An error has already been returned. Discarding data for file: %s (%d of %d).",u,d,l)}return u=r[e],d=e+1,n=0,m}function c(r){if(jr(t),r)return s=!0,u(r);wr("Successfully read all files."),u(null,i)}},Pr=ir,Vr=tr.sync,Fr=d.primitives,Sr=i,Or=Pr("read-file-list:sync");var _r=Tr;e(_r,"sync",(function(r,e){var n,t,i,s,a;if(!Fr(r))throw new TypeError(Sr("invalid argument. First argument must be an array of strings. Value: `%s`.",r));for(t=arguments.length>1?e:{},s=r.length,n=new Array(s),Or("Reading %d files...",s),a=0;a<s;a++){if(Or("Reading file: %s (%d of %d).",r[a],a+1,s),(i=Vr(r[a],t))instanceof Error)return Or("Encountered an error when reading file: %s (%d of %d). Error: %s",r[a],a,s,i.message),i;Or("Successfully read file: %s (%d of %d).",r[a],a,s),n[a]={file:r[a],data:i}}return Or("Finished reading files."),n}));var kr=_r,Ar=f.isPrimitive,Mr=c,Rr=t,Lr=tr,zr=m,Cr=v,Dr=g,Nr=i;var Wr=function(r,e,n){var t,i;if(arguments.length<3)t={},i=e;else{if(Ar(e))t={encoding:e};else{if(!Mr(e))throw new TypeError(Nr("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));t=e}i=n}if(!Rr(i))throw new TypeError(Nr("invalid argument. Callback argument must be a function. Value: `%s`.",i));function s(r,e){return r?i(r):(e=e.toString(),"utf8"===t.encoding&&(e=zr(e)),e=t.reviver?Cr(e,t.reviver):Cr(e),Dr(e,Error)?i(e):void i(null,e))}Lr(r,t,s)},Br=f.isPrimitive,Ir=c,Jr=tr.sync,$r=m,qr=v,Gr=g,Hr=i;var Kr=Wr;e(Kr,"sync",(function(r,e){var n,t;if(arguments.length>1)if(Br(e))n={encoding:e};else{if(!Ir(e))throw new TypeError(Hr("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));n=e}else n={};return t=Jr(r,n),Gr(t,Error)?t:(t=t.toString(),"utf8"===n.encoding&&(t=$r(t)),n.reviver?qr(t,n.reviver):qr(t))}));var Qr=Kr,Ur=c,Xr=t,Yr=p,Zr=tr,re=h,ee=i;var ne=c,te=p,ie=g,se=tr.sync,ae=h,oe=i;var le=function(r,e,n){var t,i;if(arguments.length<3)t={},i=e;else{if(!Ur(e))throw new TypeError(ee("invalid argument. Options argument must be an object. Value: `%s`.",e));t=e,i=n}if(!Xr(i))throw new TypeError(ee("invalid argument. Callback argument must be a function. Value: `%s`.",i));function s(r,e){var n,t;if(r)return i(r);if(Yr(e))return i(null,e);for(n=new re(e.length),t=0;t<e.length;t++)n[t]=e[t];i(null,n)}t.encoding=null,Zr(r,t,s)};e(le,"sync",(function(r,e){var n,t,i,s;if(arguments.length>1){if(!ne(e))throw new TypeError(oe("invalid argument. Options argument must be an object. Value: `%s`.",e));n=e}else n={};if(n.encoding=null,i=se(r,n),ie(i,Error))return i;if(te(i))return i;for(t=new ae(i.length),s=0;s<i.length;s++)t[s]=i[s];return t}));var ue=le,de=w.rename;var fe=function(r,e,n){de(r,e,n)},ce=w.renameSync;var me=fe;e(me,"sync",(function(r,e){try{ce(r,e)}catch(r){return r}return null}));var ve=me;function ge(r,e){for(var n=0,t=r.length-1;t>=0;t--){var i=r[t];"."===i?r.splice(t,1):".."===i?(r.splice(t,1),n++):n&&(r.splice(t,1),n--)}if(e)for(;n--;n)r.unshift("..");return r}var pe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,he=function(r){return pe.exec(r).slice(1)};function ye(){for(var r="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var t=n>=0?arguments[n]:"/";if("string"!=typeof t)throw new TypeError("Arguments to path.resolve must be strings");t&&(r=t+"/"+r,e="/"===t.charAt(0))}return(e?"/":"")+(r=ge(Fe(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function be(r){var e=je(r),n="/"===Se(r,-1);return(r=ge(Fe(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&n&&(r+="/"),(e?"/":"")+r}function je(r){return"/"===r.charAt(0)}function we(){var r=Array.prototype.slice.call(arguments,0);return be(Fe(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function Ee(r,e){function n(r){for(var e=0;e<r.length&&""===r[e];e++);for(var n=r.length-1;n>=0&&""===r[n];n--);return e>n?[]:r.slice(e,n-e+1)}r=ye(r).substr(1),e=ye(e).substr(1);for(var t=n(r.split("/")),i=n(e.split("/")),s=Math.min(t.length,i.length),a=s,o=0;o<s;o++)if(t[o]!==i[o]){a=o;break}var l=[];for(o=a;o<t.length;o++)l.push("..");return(l=l.concat(i.slice(a))).join("/")}function xe(r){var e=he(r),n=e[0],t=e[1];return n||t?(t&&(t=t.substr(0,t.length-1)),n+t):"."}function Te(r,e){var n=he(r)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n}function Pe(r){return he(r)[3]}var Ve={extname:Pe,basename:Te,dirname:xe,sep:"/",delimiter:":",relative:Ee,join:we,isAbsolute:je,normalize:be,resolve:ye};function Fe(r,e){if(r.filter)return r.filter(e);for(var n=[],t=0;t<r.length;t++)e(r[t],t,r)&&n.push(r[t]);return n}var Se="b"==="ab".substr(-1)?function(r,e,n){return r.substr(e,n)}:function(r,e,n){return e<0&&(e=r.length+e),r.substr(e,n)},Oe=j(Object.freeze({__proto__:null,resolve:ye,normalize:be,isAbsolute:je,join:we,relative:Ee,sep:"/",delimiter:":",dirname:xe,basename:Te,extname:Pe,default:Ve})),_e=c,ke=b,Ae=f.isPrimitive,Me=i;var Re=function(r,e){return _e(e)?ke(e,"dir")&&(r.dir=e.dir,!Ae(r.dir))?new TypeError(Me("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(Me("invalid argument. Options argument must be an object. Value: `%s`.",e))},Le=Oe.resolve,ze=f.isPrimitive,Ce=t,De=y,Ne=D,We=i,Be=Re;var Ie=function(r,e,n){var t,i,s,a,o,l;if(!ze(r))throw new TypeError(We("invalid argument. First argument must be a string. Value: `%s`.",r));if(s={},arguments.length>2){if(a=n,l=Be(s,e))throw l}else a=e;if(!Ce(a))throw new TypeError(We("invalid argument. Callback argument must be a function. Value: `%s`.",a));function u(e,n){return n?a(null,t):(i=o,o=Le(o,".."),i===o?a(null,null):(t=Le(o,r),void Ne(t,u)))}o=s.dir?Le(De(),s.dir):De(),t=Le(o,r),Ne(t,u)},Je=Oe.resolve,$e=f.isPrimitive,qe=y,Ge=D.sync,He=i,Ke=Re;var Qe=Ie;e(Qe,"sync",(function(r,e){var n,t,i,s,a;if(!$e(r))throw new TypeError(He("invalid argument. First argument must be a string. Value: `%s`.",r));if(i={},arguments.length>1&&(a=Ke(i,e)))throw a;for(s=i.dir?Je(qe(),i.dir):qe();t!==s;){if(n=Je(s,r),Ge(n))return n;t=s,s=Je(s,"..")}return null}));var Ue=Qe,Xe=c,Ye=b,Ze=f.isPrimitive,rn=i;var en=function(r,e){return Xe(e)?Ye(e,"dir")&&(r.dir=e.dir,!Ze(r.dir))?new TypeError(rn("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(rn("invalid argument. Options argument must be an object. Value: `%s`.",e))},nn=Oe.resolve,tn=f.isPrimitive,sn=t,an=i,on=y,ln=D,un=en;var dn=function(r,e,n,t){var i,s,a,o,l,u,d;if(!tn(r))throw new TypeError(an("invalid argument. First argument must be a string. Value: `%s`.",r));if(o={},arguments.length>3){if(d=un(o,e))throw d;a=n,l=t}else a=e,l=n;if(!sn(a))throw new TypeError(an("invalid argument. Predicate function must be a function. Value: `%s`.",a));if(!sn(l))throw new TypeError(an("invalid argument. Callback argument must be a function. Value: `%s`.",l));function f(){if(s=u,u=nn(u,".."),s===u)return l(null,null);i=nn(u,r),ln(i,c)}function c(r,e){if(e)return a(i,m);f()}function m(r,e){return r?l(r):e?l(null,i):void f()}u=o.dir?nn(on(),o.dir):on(),i=nn(u,r),ln(i,c)},fn=Oe.resolve,cn=f.isPrimitive,mn=t,vn=y,gn=D.sync,pn=i,hn=en;var yn=dn;e(yn,"sync",(function(r,e,n){var t,i,s,a,o,l;if(!cn(r))throw new TypeError(pn("invalid argument. First argument must be a string. Value: `%s`.",r));if(a={},arguments.length>2){if(l=hn(a,e))throw l;s=n}else s=e;if(!mn(s))throw new TypeError(pn("invalid argument. Last argument must be a function. Value: `%s`.",s));for(o=a.dir?fn(vn(),a.dir):vn();i!==o;){if(t=fn(o,r),gn(t)&&s(t))return t;i=o,o=fn(o,"..")}return null}));var bn=yn,jn=w.unlink;var wn=function(r,e){jn(r,e)},En=w.unlinkSync;var xn=wn;e(xn,"sync",(function(r){try{En(r)}catch(r){return r}return null}));var Tn=xn,Pn=w.writeFile;var Vn=function(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Pn.apply(null,r)},Fn=w.writeFileSync;var Sn=Vn;e(Sn,"sync",(function(r,e,n){try{arguments.length>2?Fn(r,e,n):Fn(r,e)}catch(r){return r}return null}));var On=Sn,_n={};r(_n,"close",A),r(_n,"exists",D),r(_n,"open",H),r(_n,"readDir",Y),r(_n,"readFile",tr),r(_n,"readFileList",kr),r(_n,"readJSON",Qr),r(_n,"readWASM",ue),r(_n,"rename",ve),r(_n,"resolveParentPath",Ue),r(_n,"resolveParentPathBy",bn),r(_n,"unlink",Tn),r(_n,"writeFile",On);export{A as close,_n as default,D as exists,H as open,Y as readDir,tr as readFile,kr as readFileList,Qr as readJSON,ue as readWASM,ve as rename,Ue as resolveParentPath,bn as resolveParentPathBy,Tn as unlink,On as writeFile};
//# sourceMappingURL=index.mjs.map
