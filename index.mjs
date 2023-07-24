// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";import{primitives as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.0.8-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-utf8-bom@v0.0.9-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint8array@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/process-cwd@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function y(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var n=function e(){if(this instanceof e){var n=[null];n.push.apply(n,arguments);var t=Function.bind.apply(r,n);return new t}return r.apply(this,arguments)};n.prototype=r.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})})),n}var b=y(Object.freeze({__proto__:null,default:{}})),j=b.close;function w(e,r){if(!n(e))throw new TypeError(i("invalid argument. First argument must be a valid file descriptor (i.e., nonnegative integer). Value: `%s`.",e));if(!t(r))throw new TypeError(i("invalid argument. Last argument must be a function. Value: `%s`.",r));j(e,r)}var E=b.closeSync;r(w,"sync",(function(e){if(!n(e))throw new TypeError(i("invalid argument. Must provide a valid file descriptor (i.e., a nonnegative integer). Value: `%s`.",e));try{E(e)}catch(e){return e}}));var T,x=b;function V(e,r){T(e,(function(e){if(2===r.length)return e?r(e,!1):r(null,!0);if(e)return r(!1);return r(!0)}))}T="function"==typeof x.access?x.access:x.stat;var F,S=b;function O(e){try{F(e)}catch(e){return!1}return!0}F="function"==typeof S.accessSync?S.accessSync:S.statSync,r(V,"sync",O);var _="r",P=438,k=b.open;function A(e,r,n,t){var i=arguments.length;return 2===i?k(e,_,P,r):3===i?k(e,r,P,n):void k(e,r,n,t)}var M=b.openSync;r(A,"sync",(function(e,r,n){var t,i;t=arguments.length;try{i=1===t?M(e,_,P):M(e,r,2===t?P:n)}catch(e){return e}return i}));var R=b.readdir;function z(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);R.apply(null,e)}var C=b.readdirSync;r(z,"sync",(function(e){try{return C(e)}catch(e){return e}}));var L=b.readFile;function D(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);L.apply(null,e)}var B=b.readFileSync;function I(e,r){var n;try{n=arguments.length>1?B(e,r):B(e)}catch(e){return e}return n}r(D,"sync",I);var N=y(Object.freeze({__proto__:null,default:()=>()=>{}})),W=100,J=18e5;function $(e,r){var n=o(2,e)-1;return n>r&&(n=r),n}var q=clearTimeout;function G(e){var r,n;for(r=u(e),n=0;n<r.length;n++)q(e[r[n]])}var H=N("read-file-list:async"),K=W,Q=J;function U(e,r,n){var o,u,l,f,d,c,m,g;if(!s(e))throw new TypeError(i("invalid argument. First argument must be an array of strings. Value: `%s`.",e));if(arguments.length<3?(d={},m=r):(d=a({},r),m=n),!t(m))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",m));for(c=e.length,u=new Array(c),o={},f=0,H("Reading %d files...",c),g=0;g<c;g++)H("Reading file: %s (%d of %d).",e[g],g+1,c),D(e[g],d,v(g));function v(r){var n,t,i;function s(){delete o[r],H("Reading file: %s (%d of %d). Retry: %d of %d.",t,i,c,n,K),D(t,d,a)}function a(e,a){var d;if(!l)return e?(H("Encountered an error when reading %s (%d of %d). Error: %s",t,i,c,e.message),"EMFILE"===e.code||"ENFILE"===e.code?(n+=1)>K?(H("Maximum number of retries exceeded. Too many open files."),p(e=new Error("unexpected error. Max retries exceeded. Too many open files."))):(d=$(n,Q),H("Too many open files. Will retry reading file %d of %d in %s seconds.",i,c,d/1e3),void(o[r]=setTimeout(s,d))):p(e)):(H("Successfully read file: %s (%d of %d).",t,i,c),u[r]={file:t,data:a},H("Read %d of %d files.",f+=1,c),f===c?p():void 0);H("An error has already been returned. Discarding data for file: %s (%d of %d).",t,i,c)}return t=e[r],i=r+1,n=0,a}function p(e){if(G(o),e)return l=!0,m(e);H("Successfully read all files."),m(null,u)}}var X=N("read-file-list:sync");function Y(e,r,n){var s,a;if(arguments.length<3)s={},a=r;else{if(l(r))s={encoding:r};else{if(!f(r))throw new TypeError(i("invalid argument. Options argument must be either a string or an object. Value: `%s`.",r));s=r}a=n}if(!t(a))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",a));function o(e,r){return e?a(e):(r=r.toString(),"utf8"===s.encoding&&(r=d(r)),r=s.reviver?c(r,s.reviver):c(r),m(r,Error)?a(r):void a(null,r))}D(e,s,o)}function Z(e,r,n){var s,a;if(arguments.length<3)s={},a=r;else{if(!f(r))throw new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",r));s=r,a=n}if(!t(a))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",a));function o(e,r){var n,t;if(e)return a(e);if(g(r))return a(null,r);for(n=new v(r.length),t=0;t<r.length;t++)n[t]=r[t];a(null,n)}s.encoding=null,D(e,s,o)}r(U,"sync",(function(e,r){var n,t,a,o,u;if(!s(e))throw new TypeError(i("invalid argument. First argument must be an array of strings. Value: `%s`.",e));for(t=arguments.length>1?r:{},o=e.length,n=new Array(o),X("Reading %d files...",o),u=0;u<o;u++){if(X("Reading file: %s (%d of %d).",e[u],u+1,o),(a=I(e[u],t))instanceof Error)return X("Encountered an error when reading file: %s (%d of %d). Error: %s",e[u],u,o,a.message),a;X("Successfully read file: %s (%d of %d).",e[u],u,o),n[u]={file:e[u],data:a}}return X("Finished reading files."),n})),r(Y,"sync",(function(e,r){var n,t;if(arguments.length>1)if(l(r))n={encoding:r};else{if(!f(r))throw new TypeError(i("invalid argument. Options argument must be either a string or an object. Value: `%s`.",r));n=r}else n={};return t=I(e,n),m(t,Error)?t:(t=t.toString(),"utf8"===n.encoding&&(t=d(t)),n.reviver?c(t,n.reviver):c(t))})),r(Z,"sync",(function(e,r){var n,t,s,a;if(arguments.length>1){if(!f(r))throw new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",r));n=r}else n={};if(n.encoding=null,s=I(e,n),m(s,Error))return s;if(g(s))return s;for(t=new v(s.length),a=0;a<s.length;a++)t[a]=s[a];return t}));var ee=b.rename;function re(e,r,n){ee(e,r,n)}var ne=b.renameSync;function te(e,r){for(var n=0,t=e.length-1;t>=0;t--){var i=e[t];"."===i?e.splice(t,1):".."===i?(e.splice(t,1),n++):n&&(e.splice(t,1),n--)}if(r)for(;n--;n)e.unshift("..");return e}r(re,"sync",(function(e,r){try{ne(e,r)}catch(e){return e}return null}));var ie=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,se=function(e){return ie.exec(e).slice(1)};function ae(){for(var e="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var t=n>=0?arguments[n]:"/";if("string"!=typeof t)throw new TypeError("Arguments to path.resolve must be strings");t&&(e=t+"/"+e,r="/"===t.charAt(0))}return(r?"/":"")+(e=te(ve(e.split("/"),(function(e){return!!e})),!r).join("/"))||"."}function oe(e){var r=ue(e),n="/"===pe(e,-1);return(e=te(ve(e.split("/"),(function(e){return!!e})),!r).join("/"))||r||(e="."),e&&n&&(e+="/"),(r?"/":"")+e}function ue(e){return"/"===e.charAt(0)}function le(){var e=Array.prototype.slice.call(arguments,0);return oe(ve(e,(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function fe(e,r){function n(e){for(var r=0;r<e.length&&""===e[r];r++);for(var n=e.length-1;n>=0&&""===e[n];n--);return r>n?[]:e.slice(r,n-r+1)}e=ae(e).substr(1),r=ae(r).substr(1);for(var t=n(e.split("/")),i=n(r.split("/")),s=Math.min(t.length,i.length),a=s,o=0;o<s;o++)if(t[o]!==i[o]){a=o;break}var u=[];for(o=a;o<t.length;o++)u.push("..");return(u=u.concat(i.slice(a))).join("/")}function de(e){var r=se(e),n=r[0],t=r[1];return n||t?(t&&(t=t.substr(0,t.length-1)),n+t):"."}function ce(e,r){var n=se(e)[2];return r&&n.substr(-1*r.length)===r&&(n=n.substr(0,n.length-r.length)),n}function me(e){return se(e)[3]}var ge={extname:me,basename:ce,dirname:de,sep:"/",delimiter:":",relative:fe,join:le,isAbsolute:ue,normalize:oe,resolve:ae};function ve(e,r){if(e.filter)return e.filter(r);for(var n=[],t=0;t<e.length;t++)r(e[t],t,e)&&n.push(e[t]);return n}var pe="b"==="ab".substr(-1)?function(e,r,n){return e.substr(r,n)}:function(e,r,n){return r<0&&(r=e.length+r),e.substr(r,n)},he=y(Object.freeze({__proto__:null,basename:ce,default:ge,delimiter:":",dirname:de,extname:me,isAbsolute:ue,join:le,normalize:oe,relative:fe,resolve:ae,sep:"/"}));function ye(e,r){return f(r)?h(r,"dir")&&(e.dir=r.dir,!l(e.dir))?new TypeError(i("invalid option. `%s` option must be a string. Option: `%s`.","dir",e.dir)):null:new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",r))}var be=he.resolve;function je(e,r,n){var s,a,o,u,f,d;if(!l(e))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",e));if(o={},arguments.length>2){if(u=n,d=ye(o,r))throw d}else u=r;if(!t(u))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",u));function c(r,n){return n?u(null,s):(a=f,f=be(f,".."),a===f?u(null,null):void V(s=be(f,e),c))}f=o.dir?be(p(),o.dir):p(),V(s=be(f,e),c)}var we=he.resolve;function Ee(e,r){return f(r)?h(r,"dir")&&(e.dir=r.dir,!l(e.dir))?new TypeError(i("invalid option. `%s` option must be a string. Option: `%s`.","dir",e.dir)):null:new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",r))}r(je,"sync",(function(e,r){var n,t,s,a,o;if(!l(e))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",e));if(s={},arguments.length>1&&(o=ye(s,r)))throw o;for(a=s.dir?we(p(),s.dir):p();t!==a;){if(O(n=we(a,e)))return n;t=a,a=we(a,"..")}return null}));var Te=he.resolve;function xe(e,r,n,s){var a,o,u,f,d,c,m;if(!l(e))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",e));if(f={},arguments.length>3){if(m=Ee(f,r))throw m;u=n,d=s}else u=r,d=n;if(!t(u))throw new TypeError(i("invalid argument. Predicate function must be a function. Value: `%s`.",u));if(!t(d))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",d));function g(){if(o=c,c=Te(c,".."),o===c)return d(null,null);V(a=Te(c,e),v)}function v(e,r){if(r)return u(a,h);g()}function h(e,r){return e?d(e):r?d(null,a):void g()}c=f.dir?Te(p(),f.dir):p(),V(a=Te(c,e),v)}var Ve=he.resolve;r(xe,"sync",(function(e,r,n){var s,a,o,u,f,d;if(!l(e))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",e));if(u={},arguments.length>2){if(d=Ee(u,r))throw d;o=n}else o=r;if(!t(o))throw new TypeError(i("invalid argument. Last argument must be a function. Value: `%s`.",o));for(f=u.dir?Ve(p(),u.dir):p();a!==f;){if(O(s=Ve(f,e))&&o(s))return s;a=f,f=Ve(f,"..")}return null}));var Fe=b.unlink;function Se(e,r){Fe(e,r)}var Oe=b.unlinkSync;r(Se,"sync",(function(e){try{Oe(e)}catch(e){return e}return null}));var _e=b.writeFile;function Pe(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);_e.apply(null,e)}var ke=b.writeFileSync;r(Pe,"sync",(function(e,r,n){try{arguments.length>2?ke(e,r,n):ke(e,r)}catch(e){return e}return null}));var Ae={};e(Ae,"close",w),e(Ae,"exists",V),e(Ae,"open",A),e(Ae,"readDir",z),e(Ae,"readFile",D),e(Ae,"readFileList",U),e(Ae,"readJSON",Y),e(Ae,"readWASM",Z),e(Ae,"rename",re),e(Ae,"resolveParentPath",je),e(Ae,"resolveParentPathBy",xe),e(Ae,"unlink",Se),e(Ae,"writeFile",Pe);export{w as close,Ae as default,V as exists,A as open,z as readDir,D as readFile,U as readFileList,Y as readJSON,Z as readWASM,re as rename,je as resolveParentPath,xe as resolveParentPathBy,Se as unlink,Pe as writeFile};
//# sourceMappingURL=index.mjs.map
