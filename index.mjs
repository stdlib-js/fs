// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import{primitives as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.0.8-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import{primitives as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-utf8-bom@v0.0.9-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-parse-json@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-utf8-bom@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint8array@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/process-cwd@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function w(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var n=function r(){if(this instanceof r){var n=[null];n.push.apply(n,arguments);var t=Function.bind.apply(e,n);return new t}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}var E=w(Object.freeze({__proto__:null,default:{}})),x=E.close;function T(r,e){if(!n(r))throw new TypeError(i("invalid argument. First argument must be a valid file descriptor (i.e., nonnegative integer). Value: `%s`.",r));if(!t(e))throw new TypeError(i("invalid argument. Last argument must be a function. Value: `%s`.",e));x(r,e)}var V=E.closeSync;e(T,"sync",(function(r){if(!n(r))throw new TypeError(i("invalid argument. Must provide a valid file descriptor (i.e., a nonnegative integer). Value: `%s`.",r));try{V(r)}catch(r){return r}}));var F,S=E;function O(r,e){F(r,(function(r){if(2===e.length)return r?e(r,!1):e(null,!0);if(r)return e(!1);return e(!0)}))}F="function"==typeof S.access?S.access:S.stat;var _,P=E;function k(r){try{_(r)}catch(r){return!1}return!0}_="function"==typeof P.accessSync?P.accessSync:P.statSync,e(O,"sync",k);var A="r",M=438,R=E.open;function z(r,e,n,t){var i=arguments.length;return 2===i?R(r,A,M,e):3===i?R(r,e,M,n):void R(r,e,n,t)}var C=E.openSync;e(z,"sync",(function(r,e,n){var t,i;t=arguments.length;try{i=1===t?C(r,A,M):C(r,e,2===t?M:n)}catch(r){return r}return i}));var L=E.readdir;function D(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);L.apply(null,r)}var B=E.readdirSync;e(D,"sync",(function(r){try{return B(r)}catch(r){return r}}));var I=E.readFile;function N(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);I.apply(null,r)}var W=E.readFileSync;function J(r,e){var n;try{n=arguments.length>1?W(r,e):W(r)}catch(r){return r}return n}e(N,"sync",J);var $=w(Object.freeze({__proto__:null,default:()=>()=>{}})),q=100,G=18e5;function H(r,e){var n=u(2,r)-1;return n>e&&(n=e),n}var K=clearTimeout;function Q(r){var e,n;for(e=l(r),n=0;n<e.length;n++)K(r[e[n]])}var U=$("read-file-list:async"),X=q,Y=G;function Z(r,e,n){var i,u,l,f,d,c,m,g;if(!s(r))throw new TypeError(o("invalid argument. First argument must be an array of strings. Value: `%s`.",r));if(arguments.length<3?(d={},m=e):(d=a(e),m=n),!t(m))throw new TypeError(o("invalid argument. Callback argument must be a function. Value: `%s`.",m));for(c=r.length,u=new Array(c),i={},f=0,U("Reading %d files...",c),g=0;g<c;g++)U("Reading file: %s (%d of %d).",r[g],g+1,c),N(r[g],d,v(g));function v(e){var n,t,s;function a(){delete i[e],U("Reading file: %s (%d of %d). Retry: %d of %d.",t,s,c,n,X),N(t,d,o)}function o(r,o){var d;if(!l)return r?(U("Encountered an error when reading %s (%d of %d). Error: %s",t,s,c,r.message),"EMFILE"===r.code||"ENFILE"===r.code?(n+=1)>X?(U("Maximum number of retries exceeded. Too many open files."),p(r=new Error("unexpected error. Max retries exceeded. Too many open files."))):(d=H(n,Y),U("Too many open files. Will retry reading file %d of %d in %s seconds.",s,c,d/1e3),void(i[e]=setTimeout(a,d))):p(r)):(U("Successfully read file: %s (%d of %d).",t,s,c),u[e]={file:t,data:o},U("Read %d of %d files.",f+=1,c),f===c?p():void 0);U("An error has already been returned. Discarding data for file: %s (%d of %d).",t,s,c)}return t=r[e],s=e+1,n=0,o}function p(r){if(Q(i),r)return l=!0,m(r);U("Successfully read all files."),m(null,u)}}var rr=$("read-file-list:sync");function er(r,e,n){var i,s;if(arguments.length<3)i={},s=e;else{if(d(e))i={encoding:e};else{if(!c(e))throw new TypeError(o("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));i=e}s=n}if(!t(s))throw new TypeError(o("invalid argument. Callback argument must be a function. Value: `%s`.",s));function a(r,e){return r?s(r):(e=e.toString(),"utf8"===i.encoding&&(e=m(e)),e=i.reviver?g(e,i.reviver):g(e),v(e,Error)?s(e):void s(null,e))}N(r,i,a)}function nr(r,e,n){var s,a;if(arguments.length<3)s={},a=e;else{if(!c(e))throw new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",e));s=e,a=n}if(!t(a))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",a));function o(r,e){var n,t;if(r)return a(r);if(h(e))return a(null,e);for(n=new y(e.length),t=0;t<e.length;t++)n[t]=e[t];a(null,n)}s.encoding=null,N(r,s,o)}e(Z,"sync",(function(r,e){var n,t,s,a,o;if(!f(r))throw new TypeError(i("invalid argument. First argument must be an array of strings. Value: `%s`.",r));for(t=arguments.length>1?e:{},a=r.length,n=new Array(a),rr("Reading %d files...",a),o=0;o<a;o++){if(rr("Reading file: %s (%d of %d).",r[o],o+1,a),(s=J(r[o],t))instanceof Error)return rr("Encountered an error when reading file: %s (%d of %d). Error: %s",r[o],o,a,s.message),s;rr("Successfully read file: %s (%d of %d).",r[o],o,a),n[o]={file:r[o],data:s}}return rr("Finished reading files."),n})),e(er,"sync",(function(r,e){var n,t;if(arguments.length>1)if(d(e))n={encoding:e};else{if(!c(e))throw new TypeError(i("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));n=e}else n={};return t=J(r,n),v(t,Error)?t:(t=t.toString(),"utf8"===n.encoding&&(t=p(t)),n.reviver?g(t,n.reviver):g(t))})),e(nr,"sync",(function(r,e){var n,t,s,a;if(arguments.length>1){if(!c(e))throw new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",e));n=e}else n={};if(n.encoding=null,s=J(r,n),v(s,Error))return s;if(h(s))return s;for(t=new y(s.length),a=0;a<s.length;a++)t[a]=s[a];return t}));var tr=E.rename;function ir(r,e,n){tr(r,e,n)}var sr=E.renameSync;function ar(r,e){for(var n=0,t=r.length-1;t>=0;t--){var i=r[t];"."===i?r.splice(t,1):".."===i?(r.splice(t,1),n++):n&&(r.splice(t,1),n--)}if(e)for(;n--;n)r.unshift("..");return r}e(ir,"sync",(function(r,e){try{sr(r,e)}catch(r){return r}return null}));var or=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,ur=function(r){return or.exec(r).slice(1)};function lr(){for(var r="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var t=n>=0?arguments[n]:"/";if("string"!=typeof t)throw new TypeError("Arguments to path.resolve must be strings");t&&(r=t+"/"+r,e="/"===t.charAt(0))}return(e?"/":"")+(r=ar(yr(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function fr(r){var e=dr(r),n="/"===br(r,-1);return(r=ar(yr(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&n&&(r+="/"),(e?"/":"")+r}function dr(r){return"/"===r.charAt(0)}function cr(){var r=Array.prototype.slice.call(arguments,0);return fr(yr(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function mr(r,e){function n(r){for(var e=0;e<r.length&&""===r[e];e++);for(var n=r.length-1;n>=0&&""===r[n];n--);return e>n?[]:r.slice(e,n-e+1)}r=lr(r).substr(1),e=lr(e).substr(1);for(var t=n(r.split("/")),i=n(e.split("/")),s=Math.min(t.length,i.length),a=s,o=0;o<s;o++)if(t[o]!==i[o]){a=o;break}var u=[];for(o=a;o<t.length;o++)u.push("..");return(u=u.concat(i.slice(a))).join("/")}function gr(r){var e=ur(r),n=e[0],t=e[1];return n||t?(t&&(t=t.substr(0,t.length-1)),n+t):"."}function vr(r,e){var n=ur(r)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n}function pr(r){return ur(r)[3]}var hr={extname:pr,basename:vr,dirname:gr,sep:"/",delimiter:":",relative:mr,join:cr,isAbsolute:dr,normalize:fr,resolve:lr};function yr(r,e){if(r.filter)return r.filter(e);for(var n=[],t=0;t<r.length;t++)e(r[t],t,r)&&n.push(r[t]);return n}var br="b"==="ab".substr(-1)?function(r,e,n){return r.substr(e,n)}:function(r,e,n){return e<0&&(e=r.length+e),r.substr(e,n)},jr=w(Object.freeze({__proto__:null,basename:vr,default:hr,delimiter:":",dirname:gr,extname:pr,isAbsolute:dr,join:cr,normalize:fr,relative:mr,resolve:lr,sep:"/"}));function wr(r,e){return c(e)?j(e,"dir")&&(r.dir=e.dir,!d(r.dir))?new TypeError(o("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(o("invalid argument. Options argument must be an object. Value: `%s`.",e))}var Er=jr.resolve;function xr(r,e,n){var s,a,o,u,l,f;if(!d(r))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",r));if(o={},arguments.length>2){if(u=n,f=wr(o,e))throw f}else u=e;if(!t(u))throw new TypeError(i("invalid argument. Callback argument must be a function. Value: `%s`.",u));function c(e,n){return n?u(null,s):(a=l,l=Er(l,".."),a===l?u(null,null):void O(s=Er(l,r),c))}l=o.dir?Er(b(),o.dir):b(),O(s=Er(l,r),c)}var Tr=jr.resolve;function Vr(r,e){return c(e)?j(e,"dir")&&(r.dir=e.dir,!d(r.dir))?new TypeError(o("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(o("invalid argument. Options argument must be an object. Value: `%s`.",e))}e(xr,"sync",(function(r,e){var n,t,s,a,o;if(!d(r))throw new TypeError(i("invalid argument. First argument must be a string. Value: `%s`.",r));if(s={},arguments.length>1&&(o=wr(s,e)))throw o;for(a=s.dir?Tr(b(),s.dir):b();t!==a;){if(k(n=Tr(a,r)))return n;t=a,a=Tr(a,"..")}return null}));var Fr=jr.resolve;function Sr(r,e,n,i){var s,a,u,l,f,c,m;if(!d(r))throw new TypeError(o("invalid argument. First argument must be a string. Value: `%s`.",r));if(l={},arguments.length>3){if(m=Vr(l,e))throw m;u=n,f=i}else u=e,f=n;if(!t(u))throw new TypeError(o("invalid argument. Predicate function must be a function. Value: `%s`.",u));if(!t(f))throw new TypeError(o("invalid argument. Callback argument must be a function. Value: `%s`.",f));function g(){if(a=c,c=Fr(c,".."),a===c)return f(null,null);O(s=Fr(c,r),v)}function v(r,e){if(e)return u(s,p);g()}function p(r,e){return r?f(r):e?f(null,s):void g()}c=l.dir?Fr(b(),l.dir):b(),O(s=Fr(c,r),v)}var Or=jr.resolve;e(Sr,"sync",(function(r,e,n){var i,s,a,u,l,f;if(!d(r))throw new TypeError(o("invalid argument. First argument must be a string. Value: `%s`.",r));if(u={},arguments.length>2){if(f=Vr(u,e))throw f;a=n}else a=e;if(!t(a))throw new TypeError(o("invalid argument. Last argument must be a function. Value: `%s`.",a));for(l=u.dir?Or(b(),u.dir):b();s!==l;){if(k(i=Or(l,r))&&a(i))return i;s=l,l=Or(l,"..")}return null}));var _r=E.unlink;function Pr(r,e){_r(r,e)}var kr=E.unlinkSync;e(Pr,"sync",(function(r){try{kr(r)}catch(r){return r}return null}));var Ar=E.writeFile;function Mr(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Ar.apply(null,r)}var Rr=E.writeFileSync;e(Mr,"sync",(function(r,e,n){try{arguments.length>2?Rr(r,e,n):Rr(r,e)}catch(r){return r}return null}));var zr={};r(zr,"close",T),r(zr,"exists",O),r(zr,"open",z),r(zr,"readDir",D),r(zr,"readFile",N),r(zr,"readFileList",Z),r(zr,"readJSON",er),r(zr,"readWASM",nr),r(zr,"rename",ir),r(zr,"resolveParentPath",xr),r(zr,"resolveParentPathBy",Sr),r(zr,"unlink",Pr),r(zr,"writeFile",Mr);export{T as close,zr as default,O as exists,z as open,D as readDir,N as readFile,Z as readFileList,er as readJSON,nr as readWASM,ir as rename,xr as resolveParentPath,Sr as resolveParentPathBy,Pr as unlink,Mr as writeFile};
//# sourceMappingURL=index.mjs.map
