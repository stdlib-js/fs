// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.2-esm/index.mjs";import{primitives as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.2-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-utf8-bom@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint8array@v0.2.2-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/process-cwd@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function y(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var n=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};n.prototype=r.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})})),n}var b=y(Object.freeze({__proto__:null,default:{}})),j=b.close;function w(e,r){if(!n(e))throw new TypeError(i("invalid argument. First argument must be a valid file descriptor (i.e., nonnegative integer). Value: `%s`.",e));if(!t(r))throw new TypeError(i("invalid argument. Last argument must be a function. Value: `%s`.",r));j(e,r)}var E=b.closeSync;r(w,"sync",(function(e){if(!n(e))throw new TypeError(i("invalid argument. Must provide a valid file descriptor (i.e., a nonnegative integer). Value: `%s`.",e));try{E(e)}catch(e){return e}}));var T,x=b;function V(e,r){T(e,(function(e){if(2===r.length)return e?r(e,!1):r(null,!0);if(e)return r(!1);return r(!0)}))}T="function"==typeof x.access?x.access:x.stat;var F,S=b;function O(e){try{F(e)}catch(e){return!1}return!0}F="function"==typeof S.accessSync?S.accessSync:S.statSync,r(V,"sync",O);var _="r",P=438,k=b.open;function A(e,r,n,t){var i=arguments.length;return 2===i?k(e,_,P,r):3===i?k(e,r,P,n):void k(e,r,n,t)}var M=b.openSync;r(A,"sync",(function(e,r,n){var t,i;t=arguments.length;try{i=1===t?M(e,_,P):M(e,r,2===t?P:n)}catch(e){return e}return i}));var R=b.readdir;function z(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);R.apply(null,e)}var C=b.readdirSync;r(z,"sync",(function(e){try{return C(e)}catch(e){return e}}));var L=b.readFile;function D(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);L.apply(null,e)}var B=b.readFileSync;function I(e,r){var n;try{n=arguments.length>1?B(e,r):B(e)}catch(e){return e}return n}r(D,"sync",I);var N=y(Object.freeze({__proto__:null,default:()=>()=>{}})),W=100,J=18e5;var $=clearTimeout;var q=N("read-file-list:async"),G=W,H=J;function K(e,r,n){var f,d,c,m,v,g,p,h;if(!s(e))throw new TypeError(i("invalid argument. First argument must be an array of strings. Value: `%s`.",e));if(arguments.length<3?(v={},p=r):(v=a(r)?r:o({},r),p=n),!t(p))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",p));for(g=e.length,d=new Array(g),f={},m=0,q("Reading %d files...",g),h=0;h<g;h++)q("Reading file: %s (%d of %d).",e[h],h+1,g),D(e[h],v,y(h));function y(r){var n,t,i;function s(){delete f[r],q("Reading file: %s (%d of %d). Retry: %d of %d.",t,i,g,n,G),D(t,v,a)}function a(e,a){var o;if(!c)return e?(q("Encountered an error when reading %s (%d of %d). Error: %s",t,i,g,e.message),"EMFILE"===e.code||"ENFILE"===e.code?(n+=1)>G?(q("Maximum number of retries exceeded. Too many open files."),b(e=new Error("unexpected error. Max retries exceeded. Too many open files."))):(o=function(e,r){var n=u(2,e)-1;return n>r&&(n=r),n}(n,H),q("Too many open files. Will retry reading file %d of %d in %s seconds.",i,g,o/1e3),void(f[r]=setTimeout(s,o))):b(e)):(q("Successfully read file: %s (%d of %d).",t,i,g),d[r]={file:t,data:a},q("Read %d of %d files.",m+=1,g),m===g?b():void 0);q("An error has already been returned. Discarding data for file: %s (%d of %d).",t,i,g)}return t=e[r],i=r+1,n=0,a}function b(e){if(function(e){var r,n;for(r=l(e),n=0;n<r.length;n++)$(e[r[n]])}(f),e)return c=!0,p(e);q("Successfully read all files."),p(null,d)}}var Q=N("read-file-list:sync");function U(e,r,n){var s,o;if(arguments.length<3)s={},o=r;else{if(a(r))s={encoding:r};else{if(!f(r))throw new TypeError(i("invalid argument. Options argument must be either a string or an object. Value: `%s`.",r));s=r}o=n}if(!t(o))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",o));D(e,s,(function(e,r){if(e)return o(e);r=r.toString(),"utf8"===s.encoding&&(r=d(r));r=s.reviver?c(r,s.reviver):c(r);if(m(r,Error))return o(r);o(null,r)}))}function X(e,r,n){var s,a;if(arguments.length<3)s={},a=r;else{if(!f(r))throw new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",r));s=r,a=n}if(!t(a))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",a));s.encoding=null,D(e,s,(function(e,r){var n,t;if(e)return a(e);if(v(r))return a(null,r);for(n=new g(r.length),t=0;t<r.length;t++)n[t]=r[t];a(null,n)}))}r(K,"sync",(function(e,r){var n,t,a,o,u;if(!s(e))throw new TypeError(i("invalid argument. First argument must be an array of strings. Value: `%s`.",e));for(t=arguments.length>1?r:{},o=e.length,n=new Array(o),Q("Reading %d files...",o),u=0;u<o;u++){if(Q("Reading file: %s (%d of %d).",e[u],u+1,o),(a=I(e[u],t))instanceof Error)return Q("Encountered an error when reading file: %s (%d of %d). Error: %s",e[u],u,o,a.message),a;Q("Successfully read file: %s (%d of %d).",e[u],u,o),n[u]={file:e[u],data:a}}return Q("Finished reading files."),n})),r(U,"sync",(function(e,r){var n,t;if(arguments.length>1)if(a(r))n={encoding:r};else{if(!f(r))throw new TypeError(i("invalid argument. Options argument must be either a string or an object. Value: `%s`.",r));n=r}else n={};return t=I(e,n),m(t,Error)?t:(t=t.toString(),"utf8"===n.encoding&&(t=d(t)),n.reviver?c(t,n.reviver):c(t))})),r(X,"sync",(function(e,r){var n,t,s,a;if(arguments.length>1){if(!f(r))throw new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",r));n=r}else n={};if(n.encoding=null,s=I(e,n),m(s,Error))return s;if(v(s))return s;for(t=new g(s.length),a=0;a<s.length;a++)t[a]=s[a];return t}));var Y=b.rename;function Z(e,r,n){Y(e,r,n)}var ee=b.renameSync;function re(e,r){for(var n=0,t=e.length-1;t>=0;t--){var i=e[t];"."===i?e.splice(t,1):".."===i?(e.splice(t,1),n++):n&&(e.splice(t,1),n--)}if(r)for(;n--;n)e.unshift("..");return e}r(Z,"sync",(function(e,r){try{ee(e,r)}catch(e){return e}return null}));var ne=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,te=function(e){return ne.exec(e).slice(1)};function ie(){for(var e="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var t=n>=0?arguments[n]:"/";if("string"!=typeof t)throw new TypeError("Arguments to path.resolve must be strings");t&&(e=t+"/"+e,r="/"===t.charAt(0))}return(r?"/":"")+(e=re(me(e.split("/"),(function(e){return!!e})),!r).join("/"))||"."}function se(e){var r=ae(e),n="/"===ve(e,-1);return(e=re(me(e.split("/"),(function(e){return!!e})),!r).join("/"))||r||(e="."),e&&n&&(e+="/"),(r?"/":"")+e}function ae(e){return"/"===e.charAt(0)}function oe(){return se(me(Array.prototype.slice.call(arguments,0),(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function ue(e,r){function n(e){for(var r=0;r<e.length&&""===e[r];r++);for(var n=e.length-1;n>=0&&""===e[n];n--);return r>n?[]:e.slice(r,n-r+1)}e=ie(e).substr(1),r=ie(r).substr(1);for(var t=n(e.split("/")),i=n(r.split("/")),s=Math.min(t.length,i.length),a=s,o=0;o<s;o++)if(t[o]!==i[o]){a=o;break}var u=[];for(o=a;o<t.length;o++)u.push("..");return(u=u.concat(i.slice(a))).join("/")}function le(e){var r=te(e),n=r[0],t=r[1];return n||t?(t&&(t=t.substr(0,t.length-1)),n+t):"."}function fe(e,r){var n=te(e)[2];return r&&n.substr(-1*r.length)===r&&(n=n.substr(0,n.length-r.length)),n}function de(e){return te(e)[3]}var ce={extname:de,basename:fe,dirname:le,sep:"/",delimiter:":",relative:ue,join:oe,isAbsolute:ae,normalize:se,resolve:ie};function me(e,r){if(e.filter)return e.filter(r);for(var n=[],t=0;t<e.length;t++)r(e[t],t,e)&&n.push(e[t]);return n}var ve="b"==="ab".substr(-1)?function(e,r,n){return e.substr(r,n)}:function(e,r,n){return r<0&&(r=e.length+r),e.substr(r,n)},ge=y(Object.freeze({__proto__:null,basename:fe,default:ce,delimiter:":",dirname:le,extname:de,isAbsolute:ae,join:oe,normalize:se,relative:ue,resolve:ie,sep:"/"}));function pe(e,r){return f(r)?h(r,"dir")&&(e.dir=r.dir,!a(e.dir))?new TypeError(i("invalid option. `%s` option must be a string. Option: `%s`.","dir",e.dir)):null:new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",r))}var he=ge.resolve;function ye(e,r,n){var s,o,u,l,f,d;if(!a(e))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",e));if(u={},arguments.length>2){if(l=n,d=pe(u,r))throw d}else l=r;if(!t(l))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",l));f=u.dir?he(p(),u.dir):p(),V(s=he(f,e),(function r(n,t){if(t)return l(null,s);if(o=f,f=he(f,".."),o===f)return l(null,null);V(s=he(f,e),r)}))}var be=ge.resolve;function je(e,r){return f(r)?h(r,"dir")&&(e.dir=r.dir,!a(e.dir))?new TypeError(i("invalid option. `%s` option must be a string. Option: `%s`.","dir",e.dir)):null:new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",r))}r(ye,"sync",(function(e,r){var n,t,s,o,u;if(!a(e))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",e));if(s={},arguments.length>1&&(u=pe(s,r)))throw u;for(o=s.dir?be(p(),s.dir):p();t!==o;){if(O(n=be(o,e)))return n;t=o,o=be(o,"..")}return null}));var we=ge.resolve;function Ee(e,r,n,s){var o,u,l,f,d,c,m;if(!a(e))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",e));if(f={},arguments.length>3){if(m=je(f,r))throw m;l=n,d=s}else l=r,d=n;if(!t(l))throw new TypeError(i("invalid argument. Predicate function must be a function. Value: `%s`.",l));if(!t(d))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",d));function v(){if(u=c,c=we(c,".."),u===c)return d(null,null);V(o=we(c,e),g)}function g(e,r){if(r)return l(o,h);v()}function h(e,r){return e?d(e):r?d(null,o):void v()}c=f.dir?we(p(),f.dir):p(),V(o=we(c,e),g)}var Te=ge.resolve;r(Ee,"sync",(function(e,r,n){var s,o,u,l,f,d;if(!a(e))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",e));if(l={},arguments.length>2){if(d=je(l,r))throw d;u=n}else u=r;if(!t(u))throw new TypeError(i("invalid argument. Last argument must be a function. Value: `%s`.",u));for(f=l.dir?Te(p(),l.dir):p();o!==f;){if(O(s=Te(f,e))&&u(s))return s;o=f,f=Te(f,"..")}return null}));var xe=b.unlink;function Ve(e,r){xe(e,r)}var Fe=b.unlinkSync;r(Ve,"sync",(function(e){try{Fe(e)}catch(e){return e}return null}));var Se=b.writeFile;function Oe(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);Se.apply(null,e)}var _e=b.writeFileSync;r(Oe,"sync",(function(e,r,n){try{arguments.length>2?_e(e,r,n):_e(e,r)}catch(e){return e}return null}));var Pe={};e(Pe,"close",w),e(Pe,"exists",V),e(Pe,"open",A),e(Pe,"readDir",z),e(Pe,"readFile",D),e(Pe,"readFileList",K),e(Pe,"readJSON",U),e(Pe,"readWASM",X),e(Pe,"rename",Z),e(Pe,"resolveParentPath",ye),e(Pe,"resolveParentPathBy",Ee),e(Pe,"unlink",Ve),e(Pe,"writeFile",Oe);export{w as close,Pe as default,V as exists,A as open,z as readDir,D as readFile,K as readFileList,U as readJSON,X as readWASM,Z as rename,ye as resolveParentPath,Ee as resolveParentPathBy,Ve as unlink,Oe as writeFile};
//# sourceMappingURL=index.mjs.map
