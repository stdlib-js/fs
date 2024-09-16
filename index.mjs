// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.2-esm/index.mjs";import{primitives as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.2-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import{primitives as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-utf8-bom@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@v0.2.2-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint8array@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/process-cwd@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function E(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}var x=E(Object.freeze({__proto__:null,default:{}})),T=x.close;function V(r,e){if(!n(r))throw new TypeError(i("invalid argument. First argument must be a valid file descriptor (i.e., nonnegative integer). Value: `%s`.",r));if(!t(e))throw new TypeError(i("invalid argument. Last argument must be a function. Value: `%s`.",e));T(r,e)}var F=x.closeSync;e(V,"sync",(function(r){if(!n(r))throw new TypeError(i("invalid argument. Must provide a valid file descriptor (i.e., a nonnegative integer). Value: `%s`.",r));try{F(r)}catch(r){return r}}));var S,O=x;function _(r,e){S(r,(function(r){if(2===e.length)return r?e(r,!1):e(null,!0);if(r)return e(!1);return e(!0)}))}S="function"==typeof O.access?O.access:O.stat;var P,k=x;function A(r){try{P(r)}catch(r){return!1}return!0}P="function"==typeof k.accessSync?k.accessSync:k.statSync,e(_,"sync",A);var M="r",R=438,z=x.open;function C(r,e,n,t){var i=arguments.length;return 2===i?z(r,M,R,e):3===i?z(r,e,R,n):void z(r,e,n,t)}var L=x.openSync;e(C,"sync",(function(r,e,n){var t,i;t=arguments.length;try{i=1===t?L(r,M,R):L(r,e,2===t?R:n)}catch(r){return r}return i}));var D=x.readdir;function B(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);D.apply(null,r)}var I=x.readdirSync;e(B,"sync",(function(r){try{return I(r)}catch(r){return r}}));var N=x.readFile;function W(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);N.apply(null,r)}var J=x.readFileSync;function $(r,e){var n;try{n=arguments.length>1?J(r,e):J(r)}catch(r){return r}return n}e(W,"sync",$);var q=E(Object.freeze({__proto__:null,default:()=>()=>{}})),G=100,H=18e5;var K=clearTimeout;var Q=q("read-file-list:async"),U=G,X=H;function Y(r,e,n){var t,i,c,m,v,g,p,h;if(!s(r))throw new TypeError(l("invalid argument. First argument must be an array of strings. Value: `%s`.",r));if(arguments.length<3?(v={},p=e):(v=a(e)?e:u({},e),p=n),!o(p))throw new TypeError(l("invalid argument. Callback argument must be a function. Value: `%s`.",p));for(g=r.length,i=new Array(g),t={},m=0,Q("Reading %d files...",g),h=0;h<g;h++)Q("Reading file: %s (%d of %d).",r[h],h+1,g),W(r[h],v,y(h));function y(e){var n,s,a;function o(){delete t[e],Q("Reading file: %s (%d of %d). Retry: %d of %d.",s,a,g,n,U),W(s,v,u)}function u(r,u){var l;if(!c)return r?(Q("Encountered an error when reading %s (%d of %d). Error: %s",s,a,g,r.message),"EMFILE"===r.code||"ENFILE"===r.code?(n+=1)>U?(Q("Maximum number of retries exceeded. Too many open files."),j(r=new Error("unexpected error. Max retries exceeded. Too many open files."))):(l=function(r,e){var n=f(2,r)-1;return n>e&&(n=e),n}(n,X),Q("Too many open files. Will retry reading file %d of %d in %s seconds.",a,g,l/1e3),void(t[e]=setTimeout(o,l))):j(r)):(Q("Successfully read file: %s (%d of %d).",s,a,g),i[e]={file:s,data:u},Q("Read %d of %d files.",m+=1,g),m===g?j():void 0);Q("An error has already been returned. Discarding data for file: %s (%d of %d).",s,a,g)}return s=r[e],a=e+1,n=0,u}function j(r){if(function(r){var e,n;for(e=d(r),n=0;n<e.length;n++)K(r[e[n]])}(t),r)return c=!0,p(r);Q("Successfully read all files."),p(null,i)}}var Z=q("read-file-list:sync");function rr(r,e,n){var s,a;if(arguments.length<3)s={},a=e;else{if(m(e))s={encoding:e};else{if(!v(e))throw new TypeError(i("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));s=e}a=n}if(!t(a))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",a));W(r,s,(function(r,e){if(r)return a(r);e=e.toString(),"utf8"===s.encoding&&(e=g(e));e=s.reviver?p(e,s.reviver):p(e);if(h(e,Error))return a(e);a(null,e)}))}function er(r,e,n){var s,a;if(arguments.length<3)s={},a=e;else{if(!v(e))throw new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",e));s=e,a=n}if(!t(a))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",a));s.encoding=null,W(r,s,(function(r,e){var n,t;if(r)return a(r);if(y(e))return a(null,e);for(n=new j(e.length),t=0;t<e.length;t++)n[t]=e[t];a(null,n)}))}e(Y,"sync",(function(r,e){var n,t,i,s,a;if(!c(r))throw new TypeError(l("invalid argument. First argument must be an array of strings. Value: `%s`.",r));for(t=arguments.length>1?e:{},s=r.length,n=new Array(s),Z("Reading %d files...",s),a=0;a<s;a++){if(Z("Reading file: %s (%d of %d).",r[a],a+1,s),(i=$(r[a],t))instanceof Error)return Z("Encountered an error when reading file: %s (%d of %d). Error: %s",r[a],a,s,i.message),i;Z("Successfully read file: %s (%d of %d).",r[a],a,s),n[a]={file:r[a],data:i}}return Z("Finished reading files."),n})),e(rr,"sync",(function(r,e){var n,t;if(arguments.length>1)if(m(e))n={encoding:e};else{if(!v(e))throw new TypeError(i("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));n=e}else n={};return t=$(r,n),h(t,Error)?t:(t=t.toString(),"utf8"===n.encoding&&(t=g(t)),n.reviver?p(t,n.reviver):p(t))})),e(er,"sync",(function(r,e){var n,t,s,a;if(arguments.length>1){if(!v(e))throw new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",e));n=e}else n={};if(n.encoding=null,s=$(r,n),h(s,Error))return s;if(y(s))return s;for(t=new j(s.length),a=0;a<s.length;a++)t[a]=s[a];return t}));var nr=x.rename;function tr(r,e,n){nr(r,e,n)}var ir=x.renameSync;function sr(r,e){for(var n=0,t=r.length-1;t>=0;t--){var i=r[t];"."===i?r.splice(t,1):".."===i?(r.splice(t,1),n++):n&&(r.splice(t,1),n--)}if(e)for(;n--;n)r.unshift("..");return r}e(tr,"sync",(function(r,e){try{ir(r,e)}catch(r){return r}return null}));var ar=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,or=function(r){return ar.exec(r).slice(1)};function ur(){for(var r="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var t=n>=0?arguments[n]:"/";if("string"!=typeof t)throw new TypeError("Arguments to path.resolve must be strings");t&&(r=t+"/"+r,e="/"===t.charAt(0))}return(e?"/":"")+(r=sr(hr(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function lr(r){var e=fr(r),n="/"===yr(r,-1);return(r=sr(hr(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&n&&(r+="/"),(e?"/":"")+r}function fr(r){return"/"===r.charAt(0)}function dr(){return lr(hr(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function cr(r,e){function n(r){for(var e=0;e<r.length&&""===r[e];e++);for(var n=r.length-1;n>=0&&""===r[n];n--);return e>n?[]:r.slice(e,n-e+1)}r=ur(r).substr(1),e=ur(e).substr(1);for(var t=n(r.split("/")),i=n(e.split("/")),s=Math.min(t.length,i.length),a=s,o=0;o<s;o++)if(t[o]!==i[o]){a=o;break}var u=[];for(o=a;o<t.length;o++)u.push("..");return(u=u.concat(i.slice(a))).join("/")}function mr(r){var e=or(r),n=e[0],t=e[1];return n||t?(t&&(t=t.substr(0,t.length-1)),n+t):"."}function vr(r,e){var n=or(r)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n}function gr(r){return or(r)[3]}var pr={extname:gr,basename:vr,dirname:mr,sep:"/",delimiter:":",relative:cr,join:dr,isAbsolute:fr,normalize:lr,resolve:ur};function hr(r,e){if(r.filter)return r.filter(e);for(var n=[],t=0;t<r.length;t++)e(r[t],t,r)&&n.push(r[t]);return n}var yr="b"==="ab".substr(-1)?function(r,e,n){return r.substr(e,n)}:function(r,e,n){return e<0&&(e=r.length+e),r.substr(e,n)},jr=E(Object.freeze({__proto__:null,basename:vr,default:pr,delimiter:":",dirname:mr,extname:gr,isAbsolute:fr,join:dr,normalize:lr,relative:cr,resolve:ur,sep:"/"}));function br(r,e){return v(e)?w(e,"dir")&&(r.dir=e.dir,!m(r.dir))?new TypeError(i("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",e))}var wr=jr.resolve;function Er(r,e,n){var s,a,o,u,l,f;if(!m(r))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",r));if(o={},arguments.length>2){if(u=n,f=br(o,e))throw f}else u=e;if(!t(u))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",u));l=o.dir?wr(b(),o.dir):b(),_(s=wr(l,r),(function e(n,t){if(t)return u(null,s);if(a=l,l=wr(l,".."),a===l)return u(null,null);_(s=wr(l,r),e)}))}var xr=jr.resolve;function Tr(r,e){return v(e)?w(e,"dir")&&(r.dir=e.dir,!m(r.dir))?new TypeError(i("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",e))}e(Er,"sync",(function(r,e){var n,t,s,a,o;if(!m(r))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",r));if(s={},arguments.length>1&&(o=br(s,e)))throw o;for(a=s.dir?xr(b(),s.dir):b();t!==a;){if(A(n=xr(a,r)))return n;t=a,a=xr(a,"..")}return null}));var Vr=jr.resolve;function Fr(r,e,n,s){var a,o,u,l,f,d,c;if(!m(r))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",r));if(l={},arguments.length>3){if(c=Tr(l,e))throw c;u=n,f=s}else u=e,f=n;if(!t(u))throw new TypeError(i("invalid argument. Predicate function must be a function. Value: `%s`.",u));if(!t(f))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",f));function v(){if(o=d,d=Vr(d,".."),o===d)return f(null,null);_(a=Vr(d,r),g)}function g(r,e){if(e)return u(a,p);v()}function p(r,e){return r?f(r):e?f(null,a):void v()}d=l.dir?Vr(b(),l.dir):b(),_(a=Vr(d,r),g)}var Sr=jr.resolve;e(Fr,"sync",(function(r,e,n){var s,a,o,u,l,f;if(!m(r))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",r));if(u={},arguments.length>2){if(f=Tr(u,e))throw f;o=n}else o=e;if(!t(o))throw new TypeError(i("invalid argument. Last argument must be a function. Value: `%s`.",o));for(l=u.dir?Sr(b(),u.dir):b();a!==l;){if(A(s=Sr(l,r))&&o(s))return s;a=l,l=Sr(l,"..")}return null}));var Or=x.unlink;function _r(r,e){Or(r,e)}var Pr=x.unlinkSync;e(_r,"sync",(function(r){try{Pr(r)}catch(r){return r}return null}));var kr=x.writeFile;function Ar(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);kr.apply(null,r)}var Mr=x.writeFileSync;e(Ar,"sync",(function(r,e,n){try{arguments.length>2?Mr(r,e,n):Mr(r,e)}catch(r){return r}return null}));var Rr={};r(Rr,"close",V),r(Rr,"exists",_),r(Rr,"open",C),r(Rr,"readDir",B),r(Rr,"readFile",W),r(Rr,"readFileList",Y),r(Rr,"readJSON",rr),r(Rr,"readWASM",er),r(Rr,"rename",tr),r(Rr,"resolveParentPath",Er),r(Rr,"resolveParentPathBy",Fr),r(Rr,"unlink",_r),r(Rr,"writeFile",Ar);export{V as close,Rr as default,_ as exists,C as open,B as readDir,W as readFile,Y as readFileList,rr as readJSON,er as readWASM,tr as rename,Er as resolveParentPath,Fr as resolveParentPathBy,_r as unlink,Ar as writeFile};
//# sourceMappingURL=index.mjs.map
