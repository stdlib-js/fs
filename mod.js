// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,y=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=s.call(t,m,"$1e"),t=s.call(t,h,"e"),t=s.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=s.call(t,p,"e+0$1"),t=s.call(t,g,"e-0$1"),r.alternate&&(t=s.call(t,v,"$1."),t=s.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):c.call(t)}function w(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var E=String.fromCharCode,j=Array.isArray;function T(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,n,t,o,a,f,c,l,s,p,g,v,d;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if(t=r[l],"string"==typeof t)f+=t;else{if(e=void 0!==t.precision,!(t=O(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,T(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,T(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!T(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=T(a)?String(t.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,g=t.width,v=t.padRight,d=void 0,(d=g-p.length)<0?p:p=v?p+w(d):w(d)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(_(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function F(r){var e,n;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[V(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return A.apply(null,e)}var k,P=Object.prototype,x=P.toString,I=P.__defineGetter__,U=P.__defineSetter__,L=P.__lookupGetter__,N=P.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===x.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(L.call(r,e)||N.call(r,e)?(t=r.__proto__,r.__proto__=P,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(r,e,n.get),a&&U&&U.call(r,e,n.set),r};var M=k;function R(r,e,n){M(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function C(r,e,n){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}var $=W(Object.freeze({__proto__:null,default:{}}));function B(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return G&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&D.call(r,e)}var Z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Z?Z.toStringTag:"";var J=H()?function(r){var e,n,t;if(null==r)return z.call(r);n=r[Y],e=X(r,Y);try{r[Y]=void 0}catch(e){return z.call(r)}return t=z.call(r),e?r[Y]=n:delete r[Y],t}:function(r){return z.call(r)},q=Number,K=q.prototype.toString;var Q=H();function rr(r){return"object"==typeof r&&(r instanceof q||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function er(r){return B(r)||rr(r)}C(er,"isPrimitive",B),C(er,"isObject",rr);var nr=Number.POSITIVE_INFINITY,tr=q.NEGATIVE_INFINITY,ir=Math.floor;function or(r){return ir(r)===r}function ar(r){return r<nr&&r>tr&&or(r)}function ur(r){return B(r)&&ar(r)}function fr(r){return rr(r)&&ar(r.valueOf())}function cr(r){return ur(r)||fr(r)}function lr(r){return ur(r)&&r>=0}function sr(r){return fr(r)&&r.valueOf()>=0}function pr(r){return lr(r)||sr(r)}C(cr,"isPrimitive",ur),C(cr,"isObject",fr),C(pr,"isPrimitive",lr),C(pr,"isObject",sr);var gr=/./;function vr(r){return"boolean"==typeof r}var dr=Boolean,yr=Boolean.prototype.toString;var hr=H();function mr(r){return"object"==typeof r&&(r instanceof dr||(hr?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function br(r){return vr(r)||mr(r)}C(br,"isPrimitive",vr),C(br,"isObject",mr);var wr="object"==typeof self?self:null,Er="object"==typeof window?window:null,jr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Tr="object"==typeof jr?jr:null,Or="object"==typeof globalThis?globalThis:null;var Ar=function(r){if(arguments.length){if(!vr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Or)return Or;if(wr)return wr;if(Er)return Er;if(Tr)return Tr;throw new Error("unexpected error. Unable to resolve global object.")}(),Sr=Ar.document&&Ar.document.childNodes,_r=Int8Array;function Vr(){return/^\s*function\s*([^(]*)/i}var Fr=/^\s*function\s*([^(]*)/i;C(Vr,"REGEXP",Fr);var kr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function Pr(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var n,t;if(!kr(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}function xr(r){return null!==r&&"object"==typeof r}function Ir(r){var e,n,t,i;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=Fr.exec(t.toString()))return e[1]}return xr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}C(xr,"isObjectLikeArray",Pr(xr));var Ur="function"==typeof gr||"object"==typeof _r||"function"==typeof Sr?function(r){return Ir(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ir(r).toLowerCase():e};function Lr(r){return"function"===Ur(r)}var Nr=$.close;function Mr(r,e){if(!lr(r))throw new TypeError(F("invalid argument. First argument must be a valid file descriptor (i.e., nonnegative integer). Value: `%s`.",r));if(!Lr(e))throw new TypeError(F("invalid argument. Last argument must be a function. Value: `%s`.",e));Nr(r,e)}var Rr=$.closeSync;C(Mr,"sync",(function(r){if(!lr(r))throw new TypeError(F("invalid argument. Must provide a valid file descriptor (i.e., a nonnegative integer). Value: `%s`.",r));try{Rr(r)}catch(r){return r}}));var Cr,Wr=$;function $r(r,e){Cr(r,(function(r){if(2===e.length)return r?e(r,!1):e(null,!0);if(r)return e(!1);return e(!0)}))}Cr="function"==typeof Wr.access?Wr.access:Wr.stat;var Br,Gr=$;function Hr(r){try{Br(r)}catch(r){return!1}return!0}Br="function"==typeof Gr.accessSync?Gr.accessSync:Gr.statSync,C($r,"sync",Hr);var zr="r",Dr=438,Xr=$.open;function Zr(r,e,n,t){var i=arguments.length;return 2===i?Xr(r,zr,Dr,e):3===i?Xr(r,e,Dr,n):void Xr(r,e,n,t)}var Yr=$.openSync;C(Zr,"sync",(function(r,e,n){var t,i;t=arguments.length;try{i=1===t?Yr(r,zr,Dr):Yr(r,e,2===t?Dr:n)}catch(r){return r}return i}));var Jr=$.readdir;function qr(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Jr.apply(null,r)}var Kr=$.readdirSync;C(qr,"sync",(function(r){try{return Kr(r)}catch(r){return r}}));var Qr=$.readFile;function re(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Qr.apply(null,r)}var ee=$.readFileSync;function ne(r,e){var n;try{n=arguments.length>1?ee(r,e):ee(r)}catch(r){return r}return n}C(re,"sync",ne);var te=W(Object.freeze({__proto__:null,default:()=>()=>{}}));function ie(r){return"string"==typeof r}var oe=String.prototype.valueOf;var ae=H();function ue(r){return"object"==typeof r&&(r instanceof String||(ae?function(r){try{return oe.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function fe(r){return ie(r)||ue(r)}C(fe,"isPrimitive",ie),C(fe,"isObject",ue);var ce=Pr(fe.isPrimitive),le=Pr(fe.isObject),se=Pr(fe);C(se,"primitives",ce),C(se,"objects",le);var pe=Lr(Object.assign),ge=Object.assign;function ve(r){return Object.keys(Object(r))}var de=void 0!==Object.keys;function ye(r){return"[object Arguments]"===J(r)}var he=function(){return ye(arguments)}();function me(r){return r!=r}function be(r){return B(r)&&me(r)}function we(r){return rr(r)&&me(r.valueOf())}function Ee(r){return be(r)||we(r)}C(Ee,"isPrimitive",be),C(Ee,"isObject",we);var je=Object.prototype.propertyIsEnumerable;var Te=!je.call("beep","0");function Oe(r,e){var n;return null!=r&&(!(n=je.call(r,e))&&Te&&fe(r)?!be(e=+e)&&ur(e)&&e>=0&&e<r.length:n)}var Ae=4294967295;var Se=he?ye:function(r){return null!==r&&"object"==typeof r&&!kr(r)&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=Ae&&X(r,"callee")&&!Oe(r,"callee")},_e=Array.prototype.slice;var Ve=Oe((function(){}),"prototype"),Fe=!Oe({toString:null},"toString"),ke=9007199254740991;function Pe(r,e,n){var t,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&or(o.length)&&o.length>=0&&o.length<=ke||ie(r)))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(t=r.length))return-1;if(3===arguments.length){if(!ur(n))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=t)return-1;i=n}else(i=t+n)<0&&(i=0)}else i=0;if(Ee(e)){for(;i<t;i++)if(Ee(r[i]))return i}else for(;i<t;i++)if(r[i]===e)return i;return-1}function xe(r){return r.constructor&&r.constructor.prototype===r}var Ie=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ue="undefined"==typeof window?void 0:window;var Le=function(){var r;if("undefined"===Ur(Ue))return!1;for(r in Ue)try{-1===Pe(Ie,r)&&X(Ue,r)&&null!==Ue[r]&&"object"===Ur(Ue[r])&&xe(Ue[r])}catch(r){return!0}return!1}(),Ne="undefined"!=typeof window;var Me=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Re=de?function(){return 2!==(ve(arguments)||"").length}(1,2)?function(r){return Se(r)?ve(_e.call(r)):ve(r)}:ve:function(r){var e,n,t,i,o,a,u;if(i=[],Se(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!X(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(t="function"==typeof r)&&!xr(r))return i;n=Ve&&t}for(o in r)n&&"prototype"===o||!X(r,o)||i.push(String(o));if(Fe)for(e=function(r){if(!1===Ne&&!Le)return xe(r);try{return xe(r)}catch(r){return!1}}(r),u=0;u<Me.length;u++)a=Me[u],e&&"constructor"===a||!X(r,a)||i.push(String(a));return i},Ce=void 0!==Object.getOwnPropertySymbols,We=Object,$e=We.getOwnPropertySymbols;var Be,Ge=Ce?function(r){return $e(We(r))}:function(){return[]};function He(r){var e,n,t;for(e=Re(r),n=Ge(r),t=0;t<n.length;t++)Oe(r,n[t])&&e.push(n[t]);return e}Be=pe?ge:function(r){var e,n,t,i,o,a,u;if(null==r)throw new TypeError(F("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(o=We(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(i=(n=He(We(e))).length,u=0;u<i;u++)o[t=n[u]]=e[t];return o};var ze=Be,De=100,Xe=18e5;function Ze(r){return or(r/2)}function Ye(r){return Ze(r>0?r-1:r+1)}function Je(r){return r===nr||r===tr}var qe=Math.sqrt;function Ke(r){return Math.abs(r)}var Qe="function"==typeof Uint32Array;var rn="function"==typeof Uint32Array?Uint32Array:null;var en,nn="function"==typeof Uint32Array?Uint32Array:void 0;en=function(){var r,e,n;if("function"!=typeof rn)return!1;try{e=new rn(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Qe&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nn:function(){throw new Error("not implemented")};var tn=en,on="function"==typeof Float64Array;var an="function"==typeof Float64Array?Float64Array:null;var un,fn="function"==typeof Float64Array?Float64Array:void 0;un=function(){var r,e,n;if("function"!=typeof an)return!1;try{e=new an([1,3.14,-3.14,NaN]),n=e,r=(on&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fn:function(){throw new Error("not implemented")};var cn=un,ln="function"==typeof Uint8Array;function sn(r){return ln&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}var pn="function"==typeof Uint8Array?Uint8Array:null;var gn,vn="function"==typeof Uint8Array?Uint8Array:void 0;gn=function(){var r,e;if("function"!=typeof pn)return!1;try{r=sn(e=new pn(e=[1,3.14,-3.14,256,257]))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vn:function(){throw new Error("not implemented")};var dn=gn,yn="function"==typeof Uint16Array;var hn="function"==typeof Uint16Array?Uint16Array:null;var mn,bn="function"==typeof Uint16Array?Uint16Array:void 0;mn=function(){var r,e,n;if("function"!=typeof hn)return!1;try{e=new hn(e=[1,3.14,-3.14,65536,65537]),n=e,r=(yn&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?bn:function(){throw new Error("not implemented")};var wn,En={uint16:mn,uint8:dn};(wn=new En.uint16(1))[0]=4660;var jn,Tn,On=52===new En.uint8(wn.buffer)[0];!0===On?(jn=1,Tn=0):(jn=0,Tn=1);var An={HIGH:jn,LOW:Tn},Sn=new cn(1),_n=new tn(Sn.buffer),Vn=An.HIGH,Fn=An.LOW;function kn(r,e,n,t){return Sn[0]=r,e[t]=_n[Vn],e[t+n]=_n[Fn],e}function Pn(r){return kn(r,[0,0],1,0)}C(Pn,"assign",kn);var xn=!0===On?0:1,In=new cn(1),Un=new tn(In.buffer);function Ln(r,e){return In[0]=r,Un[xn]=e>>>0,In[0]}function Nn(r){return 0|r}var Mn,Rn,Cn=2147483647,Wn=2147483648,$n=!0===On?1:0,Bn=new cn(1),Gn=new tn(Bn.buffer);function Hn(r){return Bn[0]=r,Gn[$n]}!0===On?(Mn=1,Rn=0):(Mn=0,Rn=1);var zn={HIGH:Mn,LOW:Rn},Dn=new cn(1),Xn=new tn(Dn.buffer),Zn=zn.HIGH,Yn=zn.LOW;function Jn(r,e){return Xn[Zn]=r,Xn[Yn]=e,Dn[0]}var qn=[0,0];function Kn(r,e){var n,t;return Pn.assign(r,qn,1,0),n=qn[0],n&=Cn,t=Hn(e),Jn(n|=t&=Wn,qn[1])}var Qn=1072693247,rt=1e300,et=1e-300;var nt=!0===On?1:0,tt=new cn(1),it=new tn(tt.buffer);function ot(r,e){return tt[0]=r,it[nt]=e>>>0,tt[0]}var at=1023;var ut=1048575,ft=1048576,ct=1072693248,lt=536870912,st=524288,pt=20,gt=9007199254740992,vt=.9617966939259756,dt=.9617967009544373,yt=-7.028461650952758e-9,ht=[1,1.5],mt=[0,.5849624872207642],bt=[0,1.350039202129749e-8];var wt=1.4426950408889634,Et=1.4426950216293335,jt=1.9259629911266175e-8;var Tt=1023,Ot=-1023,At=-1074,St=22250738585072014e-324,_t=4503599627370496;function Vt(r,e,n,t){return me(r)||Je(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Ke(r)<St?(e[t]=r*_t,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}C((function(r){return Vt(r,[0,0],1,0)}),"assign",Vt);var Ft=2146435072;var kt=2220446049250313e-31,Pt=2148532223,xt=[0,0],It=[0,0];function Ut(r,e){var n,t;return 0===e||0===r||me(r)||Je(r)?r:(Vt(r,xt,1,0),r=xt[0],e+=xt[1],e+=function(r){var e=Hn(r);return(e=(e&Ft)>>>20)-at|0}(r),e<At?Kn(0,r):e>Tt?r<0?tr:nr:(e<=Ot?(e+=52,t=kt):t=1,Pn.assign(r,It,1,0),n=It[0],n&=Pt,t*Jn(n|=e+at<<20,It[1])))}var Lt=.6931471805599453,Nt=1048575;var Mt=1048576,Rt=1071644672,Ct=20,Wt=.6931471824645996,$t=-1.904654299957768e-9;var Bt=1072693247,Gt=1105199104,Ht=1139802112,zt=1083179008,Dt=1072693248,Xt=1083231232,Zt=3230714880,Yt=31,Jt=1e300,qt=1e-300,Kt=8008566259537294e-32,Qt=[0,0],ri=[0,0];function ei(r,e){var n,t,i,o,a,u,f,c,l,s,p,g,v,d;if(me(r)||me(e))return NaN;if(Pn.assign(e,Qt,1,0),a=Qt[0],0===Qt[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return qe(r);if(-.5===e)return 1/qe(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Je(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Ke(r)<1==(e===nr)?0:nr}(r,e)}if(Pn.assign(r,Qt,1,0),o=Qt[0],0===Qt[1]){if(0===o)return function(r,e){return e===tr?nr:e===nr?0:e>0?Ye(e)?r:0:Ye(e)?Kn(nr,r):nr}(r,e);if(1===r)return 1;if(-1===r&&Ye(e))return-1;if(Je(r))return r===tr?ei(-0,-e):e<0?0:nr}if(r<0&&!1===or(e))return(r-r)/(r-r);if(i=Ke(r),n=o&Cn|0,t=a&Cn|0,f=a>>>Yt|0,u=(u=o>>>Yt|0)&&Ye(e)?-1:1,t>Gt){if(t>Ht)return function(r,e){return(Hn(r)&Cn)<=Qn?e<0?rt*rt:et*et:e>0?rt*rt:et*et}(r,e);if(n<Bt)return 1===f?u*Jt*Jt:u*qt*qt;if(n>Dt)return 0===f?u*Jt*Jt:u*qt*qt;p=function(r,e){var n,t,i,o,a,u,f;return o=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*jt-o*wt)-((t=Ln(t=(a=Et*i)+u,0))-a),r[0]=t,r[1]=n,r}(ri,i)}else p=function(r,e,n){var t,i,o,a,u,f,c,l,s,p,g,v,d,y,h,m,b,w,E,j,T;return w=0,n<ft&&(w-=53,n=Hn(e*=gt)),w+=(n>>pt)-at|0,n=(E=n&ut|0)|ct|0,E<=235662?j=0:E<767610?j=1:(j=0,w+=1,n-=ft),a=Ln(i=(m=(e=ot(e,n))-(c=ht[j]))*(b=1/(e+c)),0),t=(n>>1|lt)+st,f=ot(0,t+=j<<18),h=(o=i*i)*o*(0===(T=o)?.5999999999999946:.5999999999999946+T*(.4285714285785502+T*(.33333332981837743+T*(.272728123808534+T*(.23066074577556175+.20697501780033842*T))))),f=Ln(f=3+(o=a*a)+(h+=(u=b*(m-a*f-a*(e-(f-c))))*(a+i)),0),s=Ln(s=(m=a*f)+(b=u*f+(h-(f-3-o))*i),0),p=dt*s,d=(g=yt*s+(b-(s-m))*vt+bt[j])-((v=Ln(v=p+g+(l=mt[j])+(y=w),0))-y-l-p),r[0]=v,r[1]=d,r}(ri,i,n);if(g=(s=(e-(c=Ln(e,0)))*p[0]+e*p[1])+(l=c*p[0]),Pn.assign(g,Qt,1,0),v=Nn(Qt[0]),d=Nn(Qt[1]),v>=zt){if(0!=(v-zt|d))return u*Jt*Jt;if(s+Kt>g-l)return u*Jt*Jt}else if((v&Cn)>=Xt){if(0!=(v-Zt|d))return u*qt*qt;if(s<=g-l)return u*qt*qt}return g=function(r,e,n){var t,i,o,a,u,f,c,l,s,p;return s=((l=r&Cn|0)>>Ct)-at|0,c=0,l>Rt&&(i=ot(0,((c=r+(Mt>>s+1)>>>0)&~(Nt>>(s=((c&Cn)>>Ct)-at|0)))>>>0),c=(c&Nt|Mt)>>Ct-s>>>0,r<0&&(c=-c),e-=i),r=Nn(r=Hn(f=1-((f=(o=(i=Ln(i=n+e,0))*Wt)+(a=(n-(i-e))*Lt+i*$t))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<Ct>>>0)>>Ct<=0?Ut(f,c):ot(f,r)}(v,l,s),u*g}var ni=clearTimeout;var ti=te("read-file-list:async"),ii=De,oi=Xe;function ai(r,e,n){var t,i,o,a,u,f,c,l;if(!ce(r))throw new TypeError(F("invalid argument. First argument must be an array of strings. Value: `%s`.",r));if(arguments.length<3?(u={},c=e):(u=ie(e)?e:ze({},e),c=n),!Lr(c))throw new TypeError(F("invalid argument. Callback argument must be a function. Value: `%s`.",c));for(f=r.length,i=new Array(f),t={},a=0,ti("Reading %d files...",f),l=0;l<f;l++)ti("Reading file: %s (%d of %d).",r[l],l+1,f),re(r[l],u,s(l));function s(e){var n,c,l;function s(){delete t[e],ti("Reading file: %s (%d of %d). Retry: %d of %d.",c,l,f,n,ii),re(c,u,g)}function g(r,u){var g;if(!o)return r?(ti("Encountered an error when reading %s (%d of %d). Error: %s",c,l,f,r.message),"EMFILE"===r.code||"ENFILE"===r.code?(n+=1)>ii?(ti("Maximum number of retries exceeded. Too many open files."),p(r=new Error("unexpected error. Max retries exceeded. Too many open files."))):(g=function(r,e){var n=ei(2,r)-1;return n>e&&(n=e),n}(n,oi),ti("Too many open files. Will retry reading file %d of %d in %s seconds.",l,f,g/1e3),void(t[e]=setTimeout(s,g))):p(r)):(ti("Successfully read file: %s (%d of %d).",c,l,f),i[e]={file:c,data:u},ti("Read %d of %d files.",a+=1,f),a===f?p():void 0);ti("An error has already been returned. Discarding data for file: %s (%d of %d).",c,l,f)}return c=r[e],l=e+1,n=0,g}function p(r){if(function(r){var e,n;for(e=Re(r),n=0;n<e.length;n++)ni(r[e[n]])}(t),r)return o=!0,c(r);ti("Successfully read all files."),c(null,i)}}var ui=te("read-file-list:sync");C(ai,"sync",(function(r,e){var n,t,i,o,a;if(!ce(r))throw new TypeError(F("invalid argument. First argument must be an array of strings. Value: `%s`.",r));for(t=arguments.length>1?e:{},o=r.length,n=new Array(o),ui("Reading %d files...",o),a=0;a<o;a++){if(ui("Reading file: %s (%d of %d).",r[a],a+1,o),(i=ne(r[a],t))instanceof Error)return ui("Encountered an error when reading file: %s (%d of %d). Error: %s",r[a],a,o,i.message),i;ui("Successfully read file: %s (%d of %d).",r[a],a,o),n[a]={file:r[a],data:i}}return ui("Finished reading files."),n}));var fi,ci=Object.getPrototypeOf;fi=Lr(Object.getPrototypeOf)?ci:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var li=fi;var si=Object.prototype;function pi(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!kr(r)}(r)&&(e=function(r){return null==r?null:(r=We(r),li(r))}(r),!e||!X(r,"constructor")&&X(e,"constructor")&&Lr(e.constructor)&&"[object Function]"===J(e.constructor)&&X(e,"isPrototypeOf")&&Lr(e.isPrototypeOf)&&(e===si||function(r){var e;for(e in r)if(!X(r,e))return!1;return!0}(r)))}var gi=65279;function vi(r){if(!ie(r))throw new TypeError(F("invalid argument. Must provide a string. Value: `%s`.",r));return r.charCodeAt(0)===gi?r.slice(1):r}function di(r,e){if(!ie(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1&&!Lr(e))throw new TypeError(F("invalid argument. Reviver argument must be a function. Value: `%s`.",e));try{return JSON.parse(r,e)}catch(r){return r}}function yi(r,e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}function hi(r,e,n){var t,i;if(arguments.length<3)t={},i=e;else{if(ie(e))t={encoding:e};else{if(!pi(e))throw new TypeError(F("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));t=e}i=n}if(!Lr(i))throw new TypeError(F("invalid argument. Callback argument must be a function. Value: `%s`.",i));re(r,t,(function(r,e){if(r)return i(r);e=e.toString(),"utf8"===t.encoding&&(e=vi(e));e=t.reviver?di(e,t.reviver):di(e);if(yi(e,Error))return i(e);i(null,e)}))}function mi(r,e,n){var t,i;if(arguments.length<3)t={},i=e;else{if(!pi(e))throw new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e));t=e,i=n}if(!Lr(i))throw new TypeError(F("invalid argument. Callback argument must be a function. Value: `%s`.",i));t.encoding=null,re(r,t,(function(r,e){var n,t;if(r)return i(r);if(sn(e))return i(null,e);for(n=new dn(e.length),t=0;t<e.length;t++)n[t]=e[t];i(null,n)}))}C(hi,"sync",(function(r,e){var n,t;if(arguments.length>1)if(ie(e))n={encoding:e};else{if(!pi(e))throw new TypeError(F("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));n=e}else n={};return yi(t=ne(r,n),Error)?t:(t=t.toString(),"utf8"===n.encoding&&(t=vi(t)),n.reviver?di(t,n.reviver):di(t))})),C(mi,"sync",(function(r,e){var n,t,i,o;if(arguments.length>1){if(!pi(e))throw new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e));n=e}else n={};if(n.encoding=null,yi(i=ne(r,n),Error))return i;if(sn(i))return i;for(t=new dn(i.length),o=0;o<i.length;o++)t[o]=i[o];return t}));var bi=$.rename;function wi(r,e,n){bi(r,e,n)}var Ei=$.renameSync;function ji(r,e){for(var n=0,t=r.length-1;t>=0;t--){var i=r[t];"."===i?r.splice(t,1):".."===i?(r.splice(t,1),n++):n&&(r.splice(t,1),n--)}if(e)for(;n--;n)r.unshift("..");return r}C(wi,"sync",(function(r,e){try{Ei(r,e)}catch(r){return r}return null}));var Ti=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,Oi=function(r){return Ti.exec(r).slice(1)};function Ai(){for(var r="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var t=n>=0?arguments[n]:"/";if("string"!=typeof t)throw new TypeError("Arguments to path.resolve must be strings");t&&(r=t+"/"+r,e="/"===t.charAt(0))}return(e?"/":"")+(r=ji(Ui(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function Si(r){var e=_i(r),n="/"===Li(r,-1);return(r=ji(Ui(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&n&&(r+="/"),(e?"/":"")+r}function _i(r){return"/"===r.charAt(0)}function Vi(){return Si(Ui(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function Fi(r,e){function n(r){for(var e=0;e<r.length&&""===r[e];e++);for(var n=r.length-1;n>=0&&""===r[n];n--);return e>n?[]:r.slice(e,n-e+1)}r=Ai(r).substr(1),e=Ai(e).substr(1);for(var t=n(r.split("/")),i=n(e.split("/")),o=Math.min(t.length,i.length),a=o,u=0;u<o;u++)if(t[u]!==i[u]){a=u;break}var f=[];for(u=a;u<t.length;u++)f.push("..");return(f=f.concat(i.slice(a))).join("/")}function ki(r){var e=Oi(r),n=e[0],t=e[1];return n||t?(t&&(t=t.substr(0,t.length-1)),n+t):"."}function Pi(r,e){var n=Oi(r)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n}function xi(r){return Oi(r)[3]}var Ii={extname:xi,basename:Pi,dirname:ki,sep:"/",delimiter:":",relative:Fi,join:Vi,isAbsolute:_i,normalize:Si,resolve:Ai};function Ui(r,e){if(r.filter)return r.filter(e);for(var n=[],t=0;t<r.length;t++)e(r[t],t,r)&&n.push(r[t]);return n}var Li="b"==="ab".substr(-1)?function(r,e,n){return r.substr(e,n)}:function(r,e,n){return e<0&&(e=r.length+e),r.substr(e,n)},Ni=W(Object.freeze({__proto__:null,basename:Pi,default:Ii,delimiter:":",dirname:ki,extname:xi,isAbsolute:_i,join:Vi,normalize:Si,relative:Fi,resolve:Ai,sep:"/"}));function Mi(){throw new Error("setTimeout has not been defined")}function Ri(){throw new Error("clearTimeout has not been defined")}var Ci=Mi,Wi=Ri;function $i(r){if(Ci===setTimeout)return setTimeout(r,0);if((Ci===Mi||!Ci)&&setTimeout)return Ci=setTimeout,setTimeout(r,0);try{return Ci(r,0)}catch(e){try{return Ci.call(null,r,0)}catch(e){return Ci.call(this,r,0)}}}"function"==typeof jr.setTimeout&&(Ci=setTimeout),"function"==typeof jr.clearTimeout&&(Wi=clearTimeout);var Bi,Gi=[],Hi=!1,zi=-1;function Di(){Hi&&Bi&&(Hi=!1,Bi.length?Gi=Bi.concat(Gi):zi=-1,Gi.length&&Xi())}function Xi(){if(!Hi){var r=$i(Di);Hi=!0;for(var e=Gi.length;e;){for(Bi=Gi,Gi=[];++zi<e;)Bi&&Bi[zi].run();zi=-1,e=Gi.length}Bi=null,Hi=!1,function(r){if(Wi===clearTimeout)return clearTimeout(r);if((Wi===Ri||!Wi)&&clearTimeout)return Wi=clearTimeout,clearTimeout(r);try{return Wi(r)}catch(e){try{return Wi.call(null,r)}catch(e){return Wi.call(this,r)}}}(r)}}function Zi(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Gi.push(new Yi(r,e)),1!==Gi.length||Hi||$i(Xi)}function Yi(r,e){this.fun=r,this.array=e}Yi.prototype.run=function(){this.fun.apply(null,this.array)};var Ji="browser",qi="browser",Ki={},Qi=[],ro={},eo={},no={};function to(){}var io=to,oo=to,ao=to,uo=to,fo=to,co=to,lo=to;function so(r){throw new Error("process.binding is not supported")}function po(){return"/"}function go(r){throw new Error("process.chdir is not supported")}function vo(){return 0}var yo=jr.performance||{},ho=yo.now||yo.mozNow||yo.msNow||yo.oNow||yo.webkitNow||function(){return(new Date).getTime()};function mo(r){var e=.001*ho.call(yo),n=Math.floor(e),t=Math.floor(e%1*1e9);return r&&(n-=r[0],(t-=r[1])<0&&(n--,t+=1e9)),[n,t]}var bo=new Date;function wo(){return(new Date-bo)/1e3}var Eo={nextTick:Zi,title:Ji,browser:true,env:Ki,argv:Qi,version:"",versions:ro,on:io,addListener:oo,once:ao,off:uo,removeListener:fo,removeAllListeners:co,emit:lo,binding:so,cwd:po,chdir:go,umask:vo,hrtime:mo,platform:qi,release:eo,config:no,uptime:wo},jo=W(Object.freeze({__proto__:null,addListener:oo,argv:Qi,binding:so,browser:true,chdir:go,config:no,cwd:po,default:Eo,emit:lo,env:Ki,hrtime:mo,nextTick:Zi,off:uo,on:io,once:ao,platform:qi,release:eo,removeAllListeners:co,removeListener:fo,title:Ji,umask:vo,uptime:wo,version:"",versions:ro}));function To(){return jo.cwd()}function Oo(r,e){return pi(e)?X(e,"dir")&&(r.dir=e.dir,!ie(r.dir))?new TypeError(F("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e))}var Ao=Ni.resolve;function So(r,e,n){var t,i,o,a,u,f;if(!ie(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(o={},arguments.length>2){if(a=n,f=Oo(o,e))throw f}else a=e;if(!Lr(a))throw new TypeError(F("invalid argument. Callback argument must be a function. Value: `%s`.",a));u=o.dir?Ao(To(),o.dir):To(),$r(t=Ao(u,r),(function e(n,o){if(o)return a(null,t);if(i=u,u=Ao(u,".."),i===u)return a(null,null);$r(t=Ao(u,r),e)}))}var _o=Ni.resolve;function Vo(r,e){return pi(e)?X(e,"dir")&&(r.dir=e.dir,!ie(r.dir))?new TypeError(F("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e))}C(So,"sync",(function(r,e){var n,t,i,o,a;if(!ie(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(i={},arguments.length>1&&(a=Oo(i,e)))throw a;for(o=i.dir?_o(To(),i.dir):To();t!==o;){if(Hr(n=_o(o,r)))return n;t=o,o=_o(o,"..")}return null}));var Fo=Ni.resolve;function ko(r,e,n,t){var i,o,a,u,f,c,l;if(!ie(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(u={},arguments.length>3){if(l=Vo(u,e))throw l;a=n,f=t}else a=e,f=n;if(!Lr(a))throw new TypeError(F("invalid argument. Predicate function must be a function. Value: `%s`.",a));if(!Lr(f))throw new TypeError(F("invalid argument. Callback argument must be a function. Value: `%s`.",f));function s(){if(o=c,c=Fo(c,".."),o===c)return f(null,null);$r(i=Fo(c,r),p)}function p(r,e){if(e)return a(i,g);s()}function g(r,e){return r?f(r):e?f(null,i):void s()}c=u.dir?Fo(To(),u.dir):To(),$r(i=Fo(c,r),p)}var Po=Ni.resolve;C(ko,"sync",(function(r,e,n){var t,i,o,a,u,f;if(!ie(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(a={},arguments.length>2){if(f=Vo(a,e))throw f;o=n}else o=e;if(!Lr(o))throw new TypeError(F("invalid argument. Last argument must be a function. Value: `%s`.",o));for(u=a.dir?Po(To(),a.dir):To();i!==u;){if(Hr(t=Po(u,r))&&o(t))return t;i=u,u=Po(u,"..")}return null}));var xo=$.unlink;function Io(r,e){xo(r,e)}var Uo=$.unlinkSync;C(Io,"sync",(function(r){try{Uo(r)}catch(r){return r}return null}));var Lo=$.writeFile;function No(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Lo.apply(null,r)}var Mo=$.writeFileSync;C(No,"sync",(function(r,e,n){try{arguments.length>2?Mo(r,e,n):Mo(r,e)}catch(r){return r}return null}));var Ro={};R(Ro,"close",Mr),R(Ro,"exists",$r),R(Ro,"open",Zr),R(Ro,"readDir",qr),R(Ro,"readFile",re),R(Ro,"readFileList",ai),R(Ro,"readJSON",hi),R(Ro,"readWASM",mi),R(Ro,"rename",wi),R(Ro,"resolveParentPath",So),R(Ro,"resolveParentPathBy",ko),R(Ro,"unlink",Io),R(Ro,"writeFile",No);export{Mr as close,Ro as default,$r as exists,Zr as open,qr as readDir,re as readFile,ai as readFileList,hi as readJSON,mi as readWASM,wi as rename,So as resolveParentPath,ko as resolveParentPathBy,Io as unlink,No as writeFile};
//# sourceMappingURL=mod.js.map
