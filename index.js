// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("fs"),require("buffer"),require("path"),require("process")):"function"==typeof define&&define.amd?define(["fs","buffer","path","process"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).fs=e(r.require$$0$1,r.require$$0$2,r.require$$0$4,r.require$$0$3)}(this,(function(r,e,n,t){"use strict";var i="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty;function a(r){return"number"==typeof r}function u(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function f(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+u(i):u(i)+r,t&&(r="-"+r)),r}var c=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function s(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!a(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=f(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=f(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===l.call(r.specifier)?l.call(n):c.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function p(r){return"string"==typeof r}var y=Math.abs,v=String.prototype.toLowerCase,d=String.prototype.toUpperCase,g=String.prototype.replace,h=/e\+(\d)$/,w=/e-(\d)$/,b=/^(\d+)$/,m=/^(\d+)e/,j=/\.0$/,E=/\.0*e/,A=/(\..*[^0])0*e/;function O(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!a(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":y(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=g.call(n,A,"$1e"),n=g.call(n,E,"e"),n=g.call(n,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=g.call(n,h,"e+0$1"),n=g.call(n,w,"e-0$1"),r.alternate&&(n=g.call(n,b,"$1."),n=g.call(n,m,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===d.call(r.specifier)?d.call(n):v.call(n)}function T(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function S(r,e,n){var t=e-r.length;return t<0?r:r=n?r+T(t):T(t)+r}var F=String.fromCharCode,I=isNaN,V=Array.isArray;function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,n,t,i,o,a,u,c,l;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(p(t=r[c]))a+=t;else{if(e=void 0!==t.precision,!(t=_(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(i=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,I(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,I(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!I(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=I(o)?String(t.arg):F(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=O(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=f(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=S(t.arg,t.width,t.padRight)),a+=t.arg||"",u+=1}return a}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(P(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function $(r){return"string"==typeof r}function C(r){var e,n,t;if(!$(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=U(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return x.apply(null,n)}var N,L=Object.prototype,M=L.toString,R=L.__defineGetter__,B=L.__defineSetter__,W=L.__lookupGetter__,G=L.__lookupSetter__;N=function(){try{return i({},"x",{}),!0}catch(r){return!1}}()?o:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===M.call(n))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(W.call(r,e)||G.call(r,e)?(t=r.__proto__,r.__proto__=L,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(r,e,n.get),a&&B&&B.call(r,e,n.set),r};var H=N;function q(r,e,n){H(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function z(r,e,n){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function D(r){var e=r.default;if("function"==typeof e){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}function X(r){return"number"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return Z&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString;var K=Object.prototype.hasOwnProperty;function Q(r,e){return null!=r&&K.call(r,e)}var rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"";var nr=Y()?function(r){var e,n,t;if(null==r)return J.call(r);n=r[er],e=Q(r,er);try{r[er]=void 0}catch(e){return J.call(r)}return t=J.call(r),e?r[er]=n:delete r[er],t}:function(r){return J.call(r)},tr=Number,ir=tr.prototype.toString;var or=Y();function ar(r){return"object"==typeof r&&(r instanceof tr||(or?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function ur(r){return X(r)||ar(r)}z(ur,"isPrimitive",X),z(ur,"isObject",ar);var fr=Number.POSITIVE_INFINITY,cr=tr.NEGATIVE_INFINITY,lr=Math.floor;function sr(r){return lr(r)===r}function pr(r){return r<fr&&r>cr&&sr(r)}function yr(r){return X(r)&&pr(r)}function vr(r){return ar(r)&&pr(r.valueOf())}function dr(r){return yr(r)||vr(r)}function gr(r){return yr(r)&&r>=0}function hr(r){return vr(r)&&r.valueOf()>=0}function wr(r){return gr(r)||hr(r)}z(dr,"isPrimitive",yr),z(dr,"isObject",vr),z(wr,"isPrimitive",gr),z(wr,"isObject",hr);var br=/./;function mr(r){return"boolean"==typeof r}var jr=Boolean,Er=Boolean.prototype.toString;var Ar=Y();function Or(r){return"object"==typeof r&&(r instanceof jr||(Ar?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===nr(r)))}function Tr(r){return mr(r)||Or(r)}function Sr(){return new Function("return this;")()}z(Tr,"isPrimitive",mr),z(Tr,"isObject",Or);var Fr="object"==typeof self?self:null,Ir="object"==typeof window?window:null,Vr="object"==typeof global?global:null,_r="object"==typeof globalThis?globalThis:null;var xr=function(r){if(arguments.length){if(!mr(r))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Sr()}if(_r)return _r;if(Fr)return Fr;if(Ir)return Ir;if(Vr)return Vr;throw new Error("unexpected error. Unable to resolve global object.")}(),kr=xr.document&&xr.document.childNodes,Pr=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var $r=/^\s*function\s*([^(]*)/i;z(Ur,"REGEXP",$r);var Cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===nr(r)};function Nr(r){if("function"!=typeof r)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var n,t;if(!Cr(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}function Lr(r){return null!==r&&"object"==typeof r}function Mr(r){return Lr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function Rr(r){var e,n,t;if(("Object"===(n=nr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=$r.exec(t.toString()))return e[1]}return Mr(r)?"Buffer":n}z(Lr,"isObjectLikeArray",Nr(Lr));var Br="function"==typeof br||"object"==typeof Pr||"function"==typeof kr?function(r){return Rr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Rr(r).toLowerCase():e};function Wr(r){return"function"===Br(r)}var Gr=r.close;function Hr(r,e){if(!gr(r))throw new TypeError(C("invalid argument. First argument must be a valid file descriptor (i.e., nonnegative integer). Value: `%s`.",r));if(!Wr(e))throw new TypeError(C("invalid argument. Last argument must be a function. Value: `%s`.",e));Gr(r,e)}var qr=r.closeSync;z(Hr,"sync",(function(r){if(!gr(r))throw new TypeError(C("invalid argument. Must provide a valid file descriptor (i.e., a nonnegative integer). Value: `%s`.",r));try{qr(r)}catch(r){return r}}));var zr,Dr=r;function Xr(r,e){zr(r,(function(r){if(2===e.length)return r?e(r,!1):e(null,!0);if(r)return e(!1);return e(!0)}))}zr="function"==typeof Dr.access?Dr.access:Dr.stat;var Zr,Yr=r;function Jr(r){try{Zr(r)}catch(r){return!1}return!0}Zr="function"==typeof Yr.accessSync?Yr.accessSync:Yr.statSync,z(Xr,"sync",Jr);var Kr="r",Qr=438,re=r.open;function ee(r,e,n,t){var i=arguments.length;return 2===i?re(r,Kr,Qr,e):3===i?re(r,e,Qr,n):void re(r,e,n,t)}var ne=r.openSync;z(ee,"sync",(function(r,e,n){var t,i;t=arguments.length;try{i=1===t?ne(r,Kr,Qr):ne(r,e,2===t?Qr:n)}catch(r){return r}return i}));var te=r.readdir;function ie(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);te.apply(null,r)}var oe=r.readdirSync;z(ie,"sync",(function(r){try{return oe(r)}catch(r){return r}}));var ae=r.readFile;function ue(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);ae.apply(null,r)}var fe=r.readFileSync;function ce(r,e){var n;try{n=arguments.length>1?fe(r,e):fe(r)}catch(r){return r}return n}z(ue,"sync",ce);var le=D(Object.freeze({__proto__:null,default:()=>()=>{}}));function se(r){return"string"==typeof r}var pe=String.prototype.valueOf;var ye=Y();function ve(r){return"object"==typeof r&&(r instanceof String||(ye?function(r){try{return pe.call(r),!0}catch(r){return!1}}(r):"[object String]"===nr(r)))}function de(r){return se(r)||ve(r)}z(de,"isPrimitive",se),z(de,"isObject",ve);var ge=Nr(de.isPrimitive),he=Nr(de.isObject),we=Nr(de);z(we,"primitives",ge),z(we,"objects",he);var be,me=Object,je=Object.getPrototypeOf;be=Wr(Object.getPrototypeOf)?je:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===nr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ee=be;function Ae(r){return null==r?null:(r=me(r),Ee(r))}function Oe(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function Te(r){return r!=r}function Se(r){return X(r)&&Te(r)}function Fe(r){return ar(r)&&Te(r.valueOf())}function Ie(r){return Se(r)||Fe(r)}z(Oe,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),z(Ie,"isPrimitive",Se),z(Ie,"isObject",Fe);function Ve(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&sr(r.length)&&r.length>=0&&r.length<=9007199254740991}function _e(r,e,n){var t,i;if(!Ve(r)&&!se(r))throw new TypeError(C("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(t=r.length))return-1;if(3===arguments.length){if(!yr(n))throw new TypeError(C("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=t)return-1;i=n}else(i=t+n)<0&&(i=0)}else i=0;if(Ie(e)){for(;i<t;i++)if(Ie(r[i]))return i}else for(;i<t;i++)if(r[i]===e)return i;return-1}function xe(r){return Object.keys(Object(r))}var ke,Pe=void 0!==Object.keys;function Ue(r){return"[object Arguments]"===nr(r)}ke=function(){return Ue(arguments)}();var $e=ke,Ce=Object.prototype.propertyIsEnumerable;var Ne=!Ce.call("beep","0");function Le(r,e){var n;return null!=r&&(!(n=Ce.call(r,e))&&Ne&&de(r)?!Se(e=+e)&&yr(e)&&e>=0&&e<r.length:n)}var Me=4294967295;var Re=$e?Ue:function(r){return null!==r&&"object"==typeof r&&!Cr(r)&&"number"==typeof r.length&&sr(r.length)&&r.length>=0&&r.length<=Me&&Q(r,"callee")&&!Le(r,"callee")},Be=Array.prototype.slice;var We=Le((function(){}),"prototype"),Ge=!Le({toString:null},"toString");function He(r){return r.constructor&&r.constructor.prototype===r}var qe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ze="undefined"==typeof window?void 0:window;var De=function(){var r;if("undefined"===Br(ze))return!1;for(r in ze)try{-1===_e(qe,r)&&Q(ze,r)&&null!==ze[r]&&"object"===Br(ze[r])&&He(ze[r])}catch(r){return!0}return!1}(),Xe="undefined"!=typeof window;var Ze,Ye=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ze=Pe?function(){return 2!==(xe(arguments)||"").length}(1,2)?function(r){return Re(r)?xe(Be.call(r)):xe(r)}:xe:function(r){var e,n,t,i,o,a,u;if(i=[],Re(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!Q(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(t="function"==typeof r)&&!Lr(r))return i;n=We&&t}for(o in r)n&&"prototype"===o||!Q(r,o)||i.push(String(o));if(Ge)for(e=function(r){if(!1===Xe&&!De)return He(r);try{return He(r)}catch(r){return!1}}(r),u=0;u<Ye.length;u++)a=Ye[u],e&&"constructor"===a||!Q(r,a)||i.push(String(a));return i};var Je=Ze,Ke=void 0!==Object.getOwnPropertyNames,Qe=me.getOwnPropertyNames;var rn=Ke?function(r){return Qe(me(r))}:function(r){return Je(me(r))},en=void 0!==Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptor;var tn=en?function(r,e){var n;return null==r||void 0===(n=nn(r,e))?null:n}:function(r,e){return Q(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null},on="function"==typeof Buffer?Buffer:null;var an,un=e.Buffer;an=function(){var r,e;if("function"!=typeof on)return!1;try{r=Mr(e="function"==typeof on.from?on.from([1,2,3,4]):new on([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?un:function(){throw new Error("not implemented")};var fn=an;var cn=Wr(fn.from)?function(r){if(!Mr(r))throw new TypeError(C("invalid argument. Must provide a Buffer. Value: `%s`.",r));return fn.from(r)}:function(r){if(!Mr(r))throw new TypeError(C("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new fn(r)},ln="function"==typeof Int8Array;var sn="function"==typeof Int8Array?Int8Array:null;var pn,yn="function"==typeof Int8Array?Int8Array:void 0;pn=function(){var r,e,n;if("function"!=typeof sn)return!1;try{e=new sn([1,3.14,-3.14,128]),n=e,r=(ln&&n instanceof Int8Array||"[object Int8Array]"===nr(n))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?yn:function(){throw new Error("not implemented")};var vn=pn,dn="function"==typeof Uint8Array;function gn(r){return dn&&r instanceof Uint8Array||"[object Uint8Array]"===nr(r)}var hn="function"==typeof Uint8Array?Uint8Array:null;var wn,bn="function"==typeof Uint8Array?Uint8Array:void 0;wn=function(){var r,e;if("function"!=typeof hn)return!1;try{r=gn(e=new hn(e=[1,3.14,-3.14,256,257]))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?bn:function(){throw new Error("not implemented")};var mn=wn,jn="function"==typeof Uint8ClampedArray;var En="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var An,On="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;An=function(){var r,e,n;if("function"!=typeof En)return!1;try{e=new En([-1,0,1,3.14,4.99,255,256]),n=e,r=(jn&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===nr(n))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?On:function(){throw new Error("not implemented")};var Tn=An,Sn="function"==typeof Int16Array;var Fn="function"==typeof Int16Array?Int16Array:null;var In,Vn="function"==typeof Int16Array?Int16Array:void 0;In=function(){var r,e,n;if("function"!=typeof Fn)return!1;try{e=new Fn([1,3.14,-3.14,32768]),n=e,r=(Sn&&n instanceof Int16Array||"[object Int16Array]"===nr(n))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Vn:function(){throw new Error("not implemented")};var _n=In,xn="function"==typeof Uint16Array;var kn="function"==typeof Uint16Array?Uint16Array:null;var Pn,Un="function"==typeof Uint16Array?Uint16Array:void 0;Pn=function(){var r,e,n;if("function"!=typeof kn)return!1;try{e=new kn(e=[1,3.14,-3.14,65536,65537]),n=e,r=(xn&&n instanceof Uint16Array||"[object Uint16Array]"===nr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Un:function(){throw new Error("not implemented")};var $n=Pn,Cn="function"==typeof Int32Array;var Nn="function"==typeof Int32Array?Int32Array:null;var Ln,Mn="function"==typeof Int32Array?Int32Array:void 0;Ln=function(){var r,e,n;if("function"!=typeof Nn)return!1;try{e=new Nn([1,3.14,-3.14,2147483648]),n=e,r=(Cn&&n instanceof Int32Array||"[object Int32Array]"===nr(n))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Mn:function(){throw new Error("not implemented")};var Rn=Ln,Bn="function"==typeof Uint32Array;var Wn="function"==typeof Uint32Array?Uint32Array:null;var Gn,Hn="function"==typeof Uint32Array?Uint32Array:void 0;Gn=function(){var r,e,n;if("function"!=typeof Wn)return!1;try{e=new Wn(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Bn&&n instanceof Uint32Array||"[object Uint32Array]"===nr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Hn:function(){throw new Error("not implemented")};var qn=Gn,zn="function"==typeof Float32Array;var Dn="function"==typeof Float32Array?Float32Array:null;var Xn,Zn="function"==typeof Float32Array?Float32Array:void 0;Xn=function(){var r,e,n;if("function"!=typeof Dn)return!1;try{e=new Dn([1,3.14,-3.14,5e40]),n=e,r=(zn&&n instanceof Float32Array||"[object Float32Array]"===nr(n))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===fr}catch(e){r=!1}return r}()?Zn:function(){throw new Error("not implemented")};var Yn=Xn,Jn="function"==typeof Float64Array;var Kn="function"==typeof Float64Array?Float64Array:null;var Qn,rt="function"==typeof Float64Array?Float64Array:void 0;Qn=function(){var r,e,n;if("function"!=typeof Kn)return!1;try{e=new Kn([1,3.14,-3.14,NaN]),n=e,r=(Jn&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?rt:function(){throw new Error("not implemented")};var et=Qn;function nt(r){return new vn(r)}function tt(r){return new mn(r)}function it(r){return new Tn(r)}function ot(r){return new _n(r)}function at(r){return new $n(r)}function ut(r){return new Rn(r)}function ft(r){return new qn(r)}function ct(r){return new Yn(r)}function lt(r){return new et(r)}var st={int8array:nt,uint8array:tt,uint8clampedarray:it,int16array:ot,uint16array:at,int32array:ut,uint32array:ft,float32array:ct,float64array:lt};function pt(r,e,n,t,i){var o,a,u,f,c,l,s,p,y,v;if(i-=1,"object"!=typeof r||null===r)return r;if(Mr(r))return cn(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===nr(r))return!0;r=Ae(r)}return!1}(r))return function(r){var e,n,t,i,o,a,u=[],f=[];for(o=new r.constructor(r.message),u.push(r),f.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),e=Je(r),a=0;a<e.length;a++)i=e[a],Q(n=tn(r,i),"value")&&(t=Cr(r[i])?[]:{},n.value=pt(r[i],t,u,f,-1)),H(o,i,n);return o}(r);if("date"===(u=Br(r)))return new Date(+r);if("regexp"===u)return function(r){if(!se(r))throw new TypeError(C("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(c=st[u])return c(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var e,n,t,i,o,a,u,f;for(e=[],i=[],u=Object.create(Ae(r)),e.push(r),i.push(u),n=rn(r),f=0;f<n.length;f++)t=n[f],Q(o=tn(r,t),"value")&&(a=Cr(r[t])?[]:{},o.value=pt(r[t],a,e,i,-1)),H(u,t,o);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=Je(r),i>0)for(o=u,v=0;v<a.length;v++)p=r[l=a[v]],u=Br(p),"object"!=typeof p||null===p||"array"!==u&&"object"!==u||Mr(p)?"object"===o?(Q(f=tn(r,l),"value")&&(f.value=pt(p)),H(e,l,f)):e[l]=pt(p):-1===(y=_e(n,p))?(s=Cr(p)?new Array(p.length):{},n.push(p),t.push(s),"array"===o?e[l]=pt(p,s,n,t,i):(Q(f=tn(r,l),"value")&&(f.value=pt(p,s,n,t,i)),H(e,l,f))):e[l]=t[y];else if("array"===u)for(v=0;v<a.length;v++)e[l=a[v]]=r[l];else for(v=0;v<a.length;v++)l=a[v],f=tn(r,l),H(e,l,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}function yt(r,e){var n;if(arguments.length>1){if(!gr(e))throw new TypeError(C("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(0===e)return r}else e=fr;return pt(r,n=Cr(r)?new Array(r.length):{},[r],[n],e)}var vt=100,dt=18e5;function gt(r){return sr(r/2)}function ht(r){return gt(r>0?r-1:r+1)}function wt(r){return r===fr||r===cr}var bt=Math.sqrt;function mt(r){return Math.abs(r)}var jt,Et={uint16:$n,uint8:mn};(jt=new Et.uint16(1))[0]=4660;var At,Ot,Tt=52===new Et.uint8(jt.buffer)[0];!0===Tt?(At=1,Ot=0):(At=0,Ot=1);var St={HIGH:At,LOW:Ot},Ft=new et(1),It=new qn(Ft.buffer),Vt=St.HIGH,_t=St.LOW;function xt(r,e,n,t){return Ft[0]=r,e[t]=It[Vt],e[t+n]=It[_t],e}function kt(r){return xt(r,[0,0],1,0)}z(kt,"assign",xt);var Pt=!0===Tt?0:1,Ut=new et(1),$t=new qn(Ut.buffer);function Ct(r,e){return Ut[0]=r,$t[Pt]=e>>>0,Ut[0]}function Nt(r){return 0|r}var Lt,Mt,Rt=2147483647,Bt=!0===Tt?1:0,Wt=new et(1),Gt=new qn(Wt.buffer);function Ht(r){return Wt[0]=r,Gt[Bt]}!0===Tt?(Lt=1,Mt=0):(Lt=0,Mt=1);var qt={HIGH:Lt,LOW:Mt},zt=new et(1),Dt=new qn(zt.buffer),Xt=qt.HIGH,Zt=qt.LOW;function Yt(r,e){return Dt[Xt]=r,Dt[Zt]=e,zt[0]}var Jt=[0,0];function Kt(r,e){var n,t;return kt.assign(r,Jt,1,0),n=Jt[0],n&=Rt,t=Ht(e),Yt(n|=t&=2147483648,Jt[1])}var Qt=!0===Tt?1:0,ri=new et(1),ei=new qn(ri.buffer);function ni(r,e){return ri[0]=r,ei[Qt]=e>>>0,ri[0]}var ti=1023;var ii=1048576,oi=[1,1.5],ai=[0,.5849624872207642],ui=[0,1.350039202129749e-8];function fi(r,e,n,t){return Te(r)||wt(r)?(e[t]=r,e[t+n]=0,e):0!==r&&mt(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}z((function(r){return fi(r,[0,0],1,0)}),"assign",fi);var ci=[0,0],li=[0,0];function si(r,e){var n,t;return 0===e||0===r||Te(r)||wt(r)?r:(fi(r,ci,1,0),e+=ci[1],e+=function(r){var e=Ht(r);return(e=(2146435072&e)>>>20)-ti|0}(r=ci[0]),e<-1074?Kt(0,r):e>1023?r<0?cr:fr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,kt.assign(r,li,1,0),n=li[0],n&=2148532223,t*Yt(n|=e+ti<<20,li[1])))}var pi=1048575;var yi=1048576;var vi=1083179008,di=1e300,gi=1e-300,hi=[0,0],wi=[0,0];function bi(r,e){var n,t,i,o,a,u,f,c,l,s,p,y,v,d;if(Te(r)||Te(e))return NaN;if(kt.assign(e,hi,1,0),a=hi[0],0===hi[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return bt(r);if(-.5===e)return 1/bt(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(wt(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:mt(r)<1==(e===fr)?0:fr}(r,e)}if(kt.assign(r,hi,1,0),o=hi[0],0===hi[1]){if(0===o)return function(r,e){return e===cr?fr:e===fr?0:e>0?ht(e)?r:0:ht(e)?Kt(fr,r):fr}(r,e);if(1===r)return 1;if(-1===r&&ht(e))return-1;if(wt(r))return r===cr?bi(-0,-e):e<0?0:fr}if(r<0&&!1===sr(e))return(r-r)/(r-r);if(i=mt(r),n=o&Rt|0,t=a&Rt|0,f=a>>>31|0,u=(u=o>>>31|0)&&ht(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(Ht(r)&Rt)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*di*di:u*gi*gi;if(n>1072693248)return 0===f?u*di*di:u*gi*gi;p=function(r,e){var n,t,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Ct(t=(o=1.4426950216293335*i)+a,0))-o),r[0]=t,r[1]=n,r}(wi,i)}else p=function(r,e,n){var t,i,o,a,u,f,c,l,s,p,y,v,d,g,h,w,b,m,j,E,A;return m=0,n<ii&&(m-=53,n=Ht(e*=9007199254740992)),m+=(n>>20)-ti|0,n=1072693248|(j=1048575&n|0),j<=235662?E=0:j<767610?E=1:(E=0,m+=1,n-=ii),a=Ct(i=(w=(e=ni(e,n))-(c=oi[E]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=ni(0,t+=E<<18),h=(o=i*i)*o*(0===(A=o)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),f=Ct(f=3+(o=a*a)+(h+=(u=b*(w-a*f-a*(e-(f-c))))*(a+i)),0),d=(y=-7.028461650952758e-9*(s=Ct(s=(w=a*f)+(b=u*f+(h-(f-3-o))*i),0))+.9617966939259756*(b-(s-w))+ui[E])-((v=Ct(v=(p=.9617967009544373*s)+y+(l=ai[E])+(g=m),0))-g-l-p),r[0]=v,r[1]=d,r}(wi,i,n);if(y=(s=(e-(c=Ct(e,0)))*p[0]+e*p[1])+(l=c*p[0]),kt.assign(y,hi,1,0),v=Nt(hi[0]),d=Nt(hi[1]),v>=vi){if(0!=(v-vi|d))return u*di*di;if(s+8008566259537294e-32>y-l)return u*di*di}else if((v&Rt)>=1083231232){if(0!=(v-3230714880|d))return u*gi*gi;if(s<=y-l)return u*gi*gi}return y=function(r,e,n){var t,i,o,a,u,f,c,l,s,p;return s=((l=r&Rt|0)>>20)-ti|0,c=0,l>1071644672&&(i=ni(0,((c=r+(yi>>s+1)>>>0)&~(pi>>(s=((c&Rt)>>20)-ti|0)))>>>0),c=(c&pi|yi)>>20-s>>>0,r<0&&(c=-c),e-=i),r=Nt(r=Ht(f=1-((f=(o=.6931471824645996*(i=Ct(i=n+e,0)))+(a=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?si(f,c):ni(f,r)}(v,l,s),u*y}function mi(r,e){var n=bi(2,r)-1;return n>e&&(n=e),n}var ji=clearTimeout;function Ei(r){var e,n;for(e=Je(r),n=0;n<e.length;n++)ji(r[e[n]])}var Ai=le("read-file-list:async"),Oi=vt,Ti=dt;function Si(r,e,n){var t,i,o,a,u,f,c,l;if(!ge(r))throw new TypeError(C("invalid argument. First argument must be an array of strings. Value: `%s`.",r));if(arguments.length<3?(u={},c=e):(u=yt(e),c=n),!Wr(c))throw new TypeError(C("invalid argument. Callback argument must be a function. Value: `%s`.",c));for(f=r.length,i=new Array(f),t={},a=0,Ai("Reading %d files...",f),l=0;l<f;l++)Ai("Reading file: %s (%d of %d).",r[l],l+1,f),ue(r[l],u,s(l));function s(e){var n,c,l;function s(){delete t[e],Ai("Reading file: %s (%d of %d). Retry: %d of %d.",c,l,f,n,Oi),ue(c,u,y)}function y(r,u){var y;if(!o)return r?(Ai("Encountered an error when reading %s (%d of %d). Error: %s",c,l,f,r.message),"EMFILE"===r.code||"ENFILE"===r.code?(n+=1)>Oi?(Ai("Maximum number of retries exceeded. Too many open files."),p(r=new Error("unexpected error. Max retries exceeded. Too many open files."))):(y=mi(n,Ti),Ai("Too many open files. Will retry reading file %d of %d in %s seconds.",l,f,y/1e3),void(t[e]=setTimeout(s,y))):p(r)):(Ai("Successfully read file: %s (%d of %d).",c,l,f),i[e]={file:c,data:u},Ai("Read %d of %d files.",a+=1,f),a===f?p():void 0);Ai("An error has already been returned. Discarding data for file: %s (%d of %d).",c,l,f)}return c=r[e],l=e+1,n=0,y}function p(r){if(Ei(t),r)return o=!0,c(r);Ai("Successfully read all files."),c(null,i)}}var Fi=le("read-file-list:sync");z(Si,"sync",(function(r,e){var n,t,i,o,a;if(!ge(r))throw new TypeError(C("invalid argument. First argument must be an array of strings. Value: `%s`.",r));for(t=arguments.length>1?e:{},o=r.length,n=new Array(o),Fi("Reading %d files...",o),a=0;a<o;a++){if(Fi("Reading file: %s (%d of %d).",r[a],a+1,o),(i=ce(r[a],t))instanceof Error)return Fi("Encountered an error when reading file: %s (%d of %d). Error: %s",r[a],a,o,i.message),i;Fi("Successfully read file: %s (%d of %d).",r[a],a,o),n[a]={file:r[a],data:i}}return Fi("Finished reading files."),n}));var Ii=Object.prototype;function Vi(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Cr(r)}(r)&&(!(e=Ae(r))||!Q(r,"constructor")&&Q(e,"constructor")&&Wr(e.constructor)&&"[object Function]"===nr(e.constructor)&&Q(e,"isPrototypeOf")&&Wr(e.isPrototypeOf)&&(e===Ii||function(r){var e;for(e in r)if(!Q(r,e))return!1;return!0}(r)))}function _i(r){if(!se(r))throw new TypeError(C("invalid argument. Must provide a string. Value: `%s`.",r));return 65279===r.charCodeAt(0)?r.slice(1):r}function xi(r,e){if(!se(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1&&!Wr(e))throw new TypeError(C("invalid argument. Reviver argument must be a function. Value: `%s`.",e));try{return JSON.parse(r,e)}catch(r){return r}}function ki(r,e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}function Pi(r,e,n){var t,i;if(arguments.length<3)t={},i=e;else{if(se(e))t={encoding:e};else{if(!Vi(e))throw new TypeError(C("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));t=e}i=n}if(!Wr(i))throw new TypeError(C("invalid argument. Callback argument must be a function. Value: `%s`.",i));function o(r,e){return r?i(r):(e=e.toString(),"utf8"===t.encoding&&(e=_i(e)),ki(e=t.reviver?xi(e,t.reviver):xi(e),Error)?i(e):void i(null,e))}ue(r,t,o)}function Ui(r,e,n){var t,i;if(arguments.length<3)t={},i=e;else{if(!Vi(e))throw new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",e));t=e,i=n}if(!Wr(i))throw new TypeError(C("invalid argument. Callback argument must be a function. Value: `%s`.",i));function o(r,e){var n,t;if(r)return i(r);if(gn(e))return i(null,e);for(n=new mn(e.length),t=0;t<e.length;t++)n[t]=e[t];i(null,n)}t.encoding=null,ue(r,t,o)}z(Pi,"sync",(function(r,e){var n,t;if(arguments.length>1)if(se(e))n={encoding:e};else{if(!Vi(e))throw new TypeError(C("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));n=e}else n={};return ki(t=ce(r,n),Error)?t:(t=t.toString(),"utf8"===n.encoding&&(t=_i(t)),n.reviver?xi(t,n.reviver):xi(t))})),z(Ui,"sync",(function(r,e){var n,t,i,o;if(arguments.length>1){if(!Vi(e))throw new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",e));n=e}else n={};if(n.encoding=null,ki(i=ce(r,n),Error))return i;if(gn(i))return i;for(t=new mn(i.length),o=0;o<i.length;o++)t[o]=i[o];return t}));var $i=r.rename;function Ci(r,e,n){$i(r,e,n)}var Ni=r.renameSync;z(Ci,"sync",(function(r,e){try{Ni(r,e)}catch(r){return r}return null}));var Li=t;function Mi(){return Li.cwd()}function Ri(r,e){return Vi(e)?Q(e,"dir")&&(r.dir=e.dir,!se(r.dir))?new TypeError(C("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",e))}var Bi=n.resolve;function Wi(r,e,n){var t,i,o,a,u,f;if(!se(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));if(o={},arguments.length>2){if(a=n,f=Ri(o,e))throw f}else a=e;if(!Wr(a))throw new TypeError(C("invalid argument. Callback argument must be a function. Value: `%s`.",a));function c(e,n){return n?a(null,t):(i=u,u=Bi(u,".."),i===u?a(null,null):void Xr(t=Bi(u,r),c))}u=o.dir?Bi(Mi(),o.dir):Mi(),Xr(t=Bi(u,r),c)}var Gi=n.resolve;function Hi(r,e){return Vi(e)?Q(e,"dir")&&(r.dir=e.dir,!se(r.dir))?new TypeError(C("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",e))}z(Wi,"sync",(function(r,e){var n,t,i,o,a;if(!se(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));if(i={},arguments.length>1&&(a=Ri(i,e)))throw a;for(o=i.dir?Gi(Mi(),i.dir):Mi();t!==o;){if(Jr(n=Gi(o,r)))return n;t=o,o=Gi(o,"..")}return null}));var qi=n.resolve;function zi(r,e,n,t){var i,o,a,u,f,c,l;if(!se(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));if(u={},arguments.length>3){if(l=Hi(u,e))throw l;a=n,f=t}else a=e,f=n;if(!Wr(a))throw new TypeError(C("invalid argument. Predicate function must be a function. Value: `%s`.",a));if(!Wr(f))throw new TypeError(C("invalid argument. Callback argument must be a function. Value: `%s`.",f));function s(){if(o=c,c=qi(c,".."),o===c)return f(null,null);Xr(i=qi(c,r),p)}function p(r,e){if(e)return a(i,y);s()}function y(r,e){return r?f(r):e?f(null,i):void s()}c=u.dir?qi(Mi(),u.dir):Mi(),Xr(i=qi(c,r),p)}var Di=n.resolve;z(zi,"sync",(function(r,e,n){var t,i,o,a,u,f;if(!se(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));if(a={},arguments.length>2){if(f=Hi(a,e))throw f;o=n}else o=e;if(!Wr(o))throw new TypeError(C("invalid argument. Last argument must be a function. Value: `%s`.",o));for(u=a.dir?Di(Mi(),a.dir):Mi();i!==u;){if(Jr(t=Di(u,r))&&o(t))return t;i=u,u=Di(u,"..")}return null}));var Xi=r.unlink;function Zi(r,e){Xi(r,e)}var Yi=r.unlinkSync;z(Zi,"sync",(function(r){try{Yi(r)}catch(r){return r}return null}));var Ji=r.writeFile;function Ki(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Ji.apply(null,r)}var Qi=r.writeFileSync;z(Ki,"sync",(function(r,e,n){try{arguments.length>2?Qi(r,e,n):Qi(r,e)}catch(r){return r}return null}));var ro={};return q(ro,"close",Hr),q(ro,"exists",Xr),q(ro,"open",ee),q(ro,"readDir",ie),q(ro,"readFile",ue),q(ro,"readFileList",Si),q(ro,"readJSON",Pi),q(ro,"readWASM",Ui),q(ro,"rename",Ci),q(ro,"resolveParentPath",Wi),q(ro,"resolveParentPathBy",zi),q(ro,"unlink",Zi),q(ro,"writeFile",Ki),ro}));
//# sourceMappingURL=index.js.map
