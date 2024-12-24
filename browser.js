// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).fs=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var e,t,a;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,a=parseInt(t,10),!isFinite(a)){if(!n(t))throw new Error("invalid integer. Value: "+t);a=0}return a<0&&("u"===r.specifier||10!==e)&&(a=4294967295+a+1),a<0?(t=(-a).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=a.toString(e),a||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,y=/\.0$/,h=/\.0*e/,m=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=s.call(t,m,"$1e"),t=s.call(t,h,"e"),t=s.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=s.call(t,p,"e+0$1"),t=s.call(t,g,"e-0$1"),r.alternate&&(t=s.call(t,v,"$1."),t=s.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):c.call(t)}function w(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var E=String.fromCharCode,j=Array.isArray;function T(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,n,t,o,u,f,c,l,s,p,g,v,d;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if(t=r[l],"string"==typeof t)f+=t;else{if(e=void 0!==t.precision,!(t=O(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,T(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,T(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=a(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!T(t.arg)){if((u=parseInt(t.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=T(u)?String(t.arg):E(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,g=t.width,v=t.padRight,d=void 0,(d=g-p.length)<0?p:p=v?p+w(d):w(d)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(_(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function F(r){var e,n;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[V(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return A.apply(null,e)}var k,x=Object.prototype,P=x.toString,I=x.__defineGetter__,U=x.__defineSetter__,L=x.__lookupGetter__,N=x.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,o,u;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(L.call(r,e)||N.call(r,e)?(t=r.__proto__,r.__proto__=x,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,u="set"in n,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(r,e,n.get),u&&U&&U.call(r,e,n.set),r};var M=k;function R(r,e,n){M(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function C(r,e,n){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}var $=W(Object.freeze({__proto__:null,default:{}}));function G(r){return"number"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return H&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&D.call(r,e)}var Z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Z?Z.toStringTag:"";var J=B()?function(r){var e,n,t;if(null==r)return z.call(r);n=r[Y],e=X(r,Y);try{r[Y]=void 0}catch(e){return z.call(r)}return t=z.call(r),e?r[Y]=n:delete r[Y],t}:function(r){return z.call(r)},q=Number,K=q.prototype.toString;var Q=B();function rr(r){return"object"==typeof r&&(r instanceof q||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function er(r){return G(r)||rr(r)}C(er,"isPrimitive",G),C(er,"isObject",rr);var nr=Number.POSITIVE_INFINITY,tr=q.NEGATIVE_INFINITY,ir=Math.floor;function or(r){return ir(r)===r}function ur(r){return r<nr&&r>tr&&or(r)}function ar(r){return G(r)&&ur(r)}function fr(r){return rr(r)&&ur(r.valueOf())}function cr(r){return ar(r)||fr(r)}function lr(r){return ar(r)&&r>=0}function sr(r){return fr(r)&&r.valueOf()>=0}function pr(r){return lr(r)||sr(r)}C(cr,"isPrimitive",ar),C(cr,"isObject",fr),C(pr,"isPrimitive",lr),C(pr,"isObject",sr);var gr=/./;function vr(r){return"boolean"==typeof r}var dr=Boolean,yr=Boolean.prototype.toString;var hr=B();function mr(r){return"object"==typeof r&&(r instanceof dr||(hr?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function br(r){return vr(r)||mr(r)}C(br,"isPrimitive",vr),C(br,"isObject",mr);var wr="object"==typeof self?self:null,Er="object"==typeof window?window:null,jr="object"==typeof globalThis?globalThis:null;var Tr=function(r){if(arguments.length){if(!vr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(jr)return jr;if(wr)return wr;if(Er)return Er;throw new Error("unexpected error. Unable to resolve global object.")}(),Or=Tr.document&&Tr.document.childNodes,Ar=Int8Array;function Sr(){return/^\s*function\s*([^(]*)/i}var _r=/^\s*function\s*([^(]*)/i;C(Sr,"REGEXP",_r);var Vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function Fr(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var n,t;if(!Vr(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}function kr(r){return null!==r&&"object"==typeof r}function xr(r){var e,n,t,i;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=_r.exec(t.toString()))return e[1]}return kr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}C(kr,"isObjectLikeArray",Fr(kr));var Pr="function"==typeof gr||"object"==typeof Ar||"function"==typeof Or?function(r){return xr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?xr(r).toLowerCase():e};function Ir(r){return"function"===Pr(r)}var Ur=$.close;function Lr(r,e){if(!lr(r))throw new TypeError(F("invalid argument. First argument must be a valid file descriptor (i.e., nonnegative integer). Value: `%s`.",r));if(!Ir(e))throw new TypeError(F("invalid argument. Last argument must be a function. Value: `%s`.",e));Ur(r,e)}var Nr=$.closeSync;C(Lr,"sync",(function(r){if(!lr(r))throw new TypeError(F("invalid argument. Must provide a valid file descriptor (i.e., a nonnegative integer). Value: `%s`.",r));try{Nr(r)}catch(r){return r}}));var Mr,Rr=$;function Cr(r,e){Mr(r,(function(r){if(2===e.length)return r?e(r,!1):e(null,!0);if(r)return e(!1);return e(!0)}))}Mr="function"==typeof Rr.access?Rr.access:Rr.stat;var Wr,$r=$;function Gr(r){try{Wr(r)}catch(r){return!1}return!0}Wr="function"==typeof $r.accessSync?$r.accessSync:$r.statSync,C(Cr,"sync",Gr);var Hr="r",Br=438,zr=$.open;function Dr(r,e,n,t){var i=arguments.length;return 2===i?zr(r,Hr,Br,e):3===i?zr(r,e,Br,n):void zr(r,e,n,t)}var Xr=$.openSync;C(Dr,"sync",(function(r,e,n){var t,i;t=arguments.length;try{i=1===t?Xr(r,Hr,Br):Xr(r,e,2===t?Br:n)}catch(r){return r}return i}));var Zr=$.readdir;function Yr(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Zr.apply(null,r)}var Jr=$.readdirSync;C(Yr,"sync",(function(r){try{return Jr(r)}catch(r){return r}}));var qr=$.readFile;function Kr(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);qr.apply(null,r)}var Qr=$.readFileSync;function re(r,e){var n;try{n=arguments.length>1?Qr(r,e):Qr(r)}catch(r){return r}return n}C(Kr,"sync",re);var ee=W(Object.freeze({__proto__:null,default:()=>()=>{}}));function ne(r){return"string"==typeof r}var te=String.prototype.valueOf;var ie=B();function oe(r){return"object"==typeof r&&(r instanceof String||(ie?function(r){try{return te.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function ue(r){return ne(r)||oe(r)}C(ue,"isPrimitive",ne),C(ue,"isObject",oe);var ae=Fr(ue.isPrimitive),fe=Fr(ue.isObject),ce=Fr(ue);C(ce,"primitives",ae),C(ce,"objects",fe);var le=Ir(Object.assign),se=Object.assign;function pe(r){return Object.keys(Object(r))}var ge,ve=void 0!==Object.keys;function de(r){return"[object Arguments]"===J(r)}ge=function(){return de(arguments)}();var ye=ge;function he(r){return r!=r}function me(r){return G(r)&&he(r)}function be(r){return rr(r)&&he(r.valueOf())}function we(r){return me(r)||be(r)}C(we,"isPrimitive",me),C(we,"isObject",be);var Ee=Object.prototype.propertyIsEnumerable;var je=!Ee.call("beep","0");function Te(r,e){var n;return null!=r&&(!(n=Ee.call(r,e))&&je&&ue(r)?!me(e=+e)&&ar(e)&&e>=0&&e<r.length:n)}var Oe=4294967295;var Ae=ye?de:function(r){return null!==r&&"object"==typeof r&&!Vr(r)&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=Oe&&X(r,"callee")&&!Te(r,"callee")},Se=Array.prototype.slice;var _e=Te((function(){}),"prototype"),Ve=!Te({toString:null},"toString"),Fe=9007199254740991;function ke(r,e,n){var t,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&or(o.length)&&o.length>=0&&o.length<=Fe||ne(r)))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(t=r.length))return-1;if(3===arguments.length){if(!ar(n))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=t)return-1;i=n}else(i=t+n)<0&&(i=0)}else i=0;if(we(e)){for(;i<t;i++)if(we(r[i]))return i}else for(;i<t;i++)if(r[i]===e)return i;return-1}function xe(r){return r.constructor&&r.constructor.prototype===r}var Pe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ie="undefined"==typeof window?void 0:window;var Ue=function(){var r;if("undefined"===Pr(Ie))return!1;for(r in Ie)try{-1===ke(Pe,r)&&X(Ie,r)&&null!==Ie[r]&&"object"===Pr(Ie[r])&&xe(Ie[r])}catch(r){return!0}return!1}(),Le="undefined"!=typeof window;var Ne,Me=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ne=ve?function(){return 2!==(pe(arguments)||"").length}(1,2)?function(r){return Ae(r)?pe(Se.call(r)):pe(r)}:pe:function(r){var e,n,t,i,o,u,a;if(i=[],Ae(r)){for(a=0;a<r.length;a++)i.push(a.toString());return i}if("string"==typeof r){if(r.length>0&&!X(r,"0"))for(a=0;a<r.length;a++)i.push(a.toString())}else{if(!1==(t="function"==typeof r)&&!kr(r))return i;n=_e&&t}for(o in r)n&&"prototype"===o||!X(r,o)||i.push(String(o));if(Ve)for(e=function(r){if(!1===Le&&!Ue)return xe(r);try{return xe(r)}catch(r){return!1}}(r),a=0;a<Me.length;a++)u=Me[a],e&&"constructor"===u||!X(r,u)||i.push(String(u));return i};var Re=Ne,Ce=void 0!==Object.getOwnPropertySymbols,We=Object,$e=We.getOwnPropertySymbols;var Ge,He=Ce?function(r){return $e(We(r))}:function(){return[]};function Be(r){var e,n,t;for(e=Re(r),n=He(r),t=0;t<n.length;t++)Te(r,n[t])&&e.push(n[t]);return e}Ge=le?se:function(r){var e,n,t,i,o,u,a;if(null==r)throw new TypeError(F("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(o=We(r),u=1;u<arguments.length;u++)if(null!=(e=arguments[u]))for(i=(n=Be(We(e))).length,a=0;a<i;a++)o[t=n[a]]=e[t];return o};var ze=Ge,De=100,Xe=18e5;function Ze(r){return or(r/2)}function Ye(r){return Ze(r>0?r-1:r+1)}function Je(r){return r===nr||r===tr}var qe=Math.sqrt;function Ke(r){return Math.abs(r)}var Qe="function"==typeof Uint32Array;var rn="function"==typeof Uint32Array?Uint32Array:null;var en,nn="function"==typeof Uint32Array?Uint32Array:void 0;en=function(){var r,e,n;if("function"!=typeof rn)return!1;try{e=new rn(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Qe&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nn:function(){throw new Error("not implemented")};var tn=en,on="function"==typeof Float64Array;var un="function"==typeof Float64Array?Float64Array:null;var an,fn="function"==typeof Float64Array?Float64Array:void 0;an=function(){var r,e,n;if("function"!=typeof un)return!1;try{e=new un([1,3.14,-3.14,NaN]),n=e,r=(on&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fn:function(){throw new Error("not implemented")};var cn=an,ln="function"==typeof Uint8Array;function sn(r){return ln&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}var pn="function"==typeof Uint8Array?Uint8Array:null;var gn,vn="function"==typeof Uint8Array?Uint8Array:void 0;gn=function(){var r,e;if("function"!=typeof pn)return!1;try{r=sn(e=new pn(e=[1,3.14,-3.14,256,257]))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vn:function(){throw new Error("not implemented")};var dn=gn,yn="function"==typeof Uint16Array;var hn="function"==typeof Uint16Array?Uint16Array:null;var mn,bn="function"==typeof Uint16Array?Uint16Array:void 0;mn=function(){var r,e,n;if("function"!=typeof hn)return!1;try{e=new hn(e=[1,3.14,-3.14,65536,65537]),n=e,r=(yn&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?bn:function(){throw new Error("not implemented")};var wn,En={uint16:mn,uint8:dn};(wn=new En.uint16(1))[0]=4660;var jn,Tn,On=52===new En.uint8(wn.buffer)[0];!0===On?(jn=1,Tn=0):(jn=0,Tn=1);var An={HIGH:jn,LOW:Tn},Sn=new cn(1),_n=new tn(Sn.buffer),Vn=An.HIGH,Fn=An.LOW;function kn(r,e,n,t){return Sn[0]=r,e[t]=_n[Vn],e[t+n]=_n[Fn],e}function xn(r){return kn(r,[0,0],1,0)}C(xn,"assign",kn);var Pn=!0===On?0:1,In=new cn(1),Un=new tn(In.buffer);function Ln(r,e){return In[0]=r,Un[Pn]=e>>>0,In[0]}function Nn(r){return 0|r}var Mn,Rn,Cn=2147483647,Wn=2147483648,$n=!0===On?1:0,Gn=new cn(1),Hn=new tn(Gn.buffer);function Bn(r){return Gn[0]=r,Hn[$n]}!0===On?(Mn=1,Rn=0):(Mn=0,Rn=1);var zn={HIGH:Mn,LOW:Rn},Dn=new cn(1),Xn=new tn(Dn.buffer),Zn=zn.HIGH,Yn=zn.LOW;function Jn(r,e){return Xn[Zn]=r,Xn[Yn]=e,Dn[0]}var qn=[0,0];function Kn(r,e){var n,t;return xn.assign(r,qn,1,0),n=qn[0],n&=Cn,t=Bn(e),Jn(n|=t&=Wn,qn[1])}var Qn=1072693247,rt=1e300,et=1e-300;var nt=!0===On?1:0,tt=new cn(1),it=new tn(tt.buffer);function ot(r,e){return tt[0]=r,it[nt]=e>>>0,tt[0]}var ut=1023,at=20;var ft=1048575,ct=1048576,lt=1072693248,st=536870912,pt=524288,gt=9007199254740992,vt=.9617966939259756,dt=.9617967009544373,yt=-7.028461650952758e-9,ht=[1,1.5],mt=[0,.5849624872207642],bt=[0,1.350039202129749e-8];var wt=1.4426950408889634,Et=1.4426950216293335,jt=1.9259629911266175e-8;var Tt=1023,Ot=-1023,At=-1074,St=22250738585072014e-324,_t=4503599627370496;function Vt(r,e,n,t){return he(r)||Je(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Ke(r)<St?(e[t]=r*_t,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}C((function(r){return Vt(r,[0,0],1,0)}),"assign",Vt);var Ft=2146435072;var kt=2220446049250313e-31,xt=2148532223,Pt=[0,0],It=[0,0];function Ut(r,e){var n,t;return 0===e||0===r||he(r)||Je(r)?r:(Vt(r,Pt,1,0),r=Pt[0],e+=Pt[1],e+=function(r){var e=Bn(r);return(e=(e&Ft)>>>20)-ut|0}(r),e<At?Kn(0,r):e>Tt?r<0?tr:nr:(e<=Ot?(e+=52,t=kt):t=1,xn.assign(r,It,1,0),n=It[0],n&=xt,t*Jn(n|=e+ut<<20,It[1])))}var Lt=.6931471805599453,Nt=1048575;var Mt=1048576,Rt=1071644672,Ct=.6931471824645996,Wt=-1.904654299957768e-9;var $t=1072693247,Gt=1105199104,Ht=1139802112,Bt=1083179008,zt=1072693248,Dt=1083231232,Xt=3230714880,Zt=31,Yt=1e300,Jt=1e-300,qt=8008566259537294e-32,Kt=[0,0],Qt=[0,0];function ri(r,e){var n,t,i,o,u,a,f,c,l,s,p,g,v,d;if(he(r)||he(e))return NaN;if(xn.assign(e,Kt,1,0),u=Kt[0],0===Kt[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return qe(r);if(-.5===e)return 1/qe(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Je(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Ke(r)<1==(e===nr)?0:nr}(r,e)}if(xn.assign(r,Kt,1,0),o=Kt[0],0===Kt[1]){if(0===o)return function(r,e){return e===tr?nr:e===nr?0:e>0?Ye(e)?r:0:Ye(e)?Kn(nr,r):nr}(r,e);if(1===r)return 1;if(-1===r&&Ye(e))return-1;if(Je(r))return r===tr?ri(-0,-e):e<0?0:nr}if(r<0&&!1===or(e))return(r-r)/(r-r);if(i=Ke(r),n=o&Cn|0,t=u&Cn|0,f=u>>>Zt|0,a=(a=o>>>Zt|0)&&Ye(e)?-1:1,t>Gt){if(t>Ht)return function(r,e){return(Bn(r)&Cn)<=Qn?e<0?rt*rt:et*et:e>0?rt*rt:et*et}(r,e);if(n<$t)return 1===f?a*Yt*Yt:a*Jt*Jt;if(n>zt)return 0===f?a*Yt*Yt:a*Jt*Jt;p=function(r,e){var n,t,i,o,u,a,f;return o=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(a=i*jt-o*wt)-((t=Ln(t=(u=Et*i)+a,0))-u),r[0]=t,r[1]=n,r}(Qt,i)}else p=function(r,e,n){var t,i,o,u,a,f,c,l,s,p,g,v,d,y,h,m,b,w,E,j,T;return w=0,n<ct&&(w-=53,n=Bn(e*=gt)),w+=(n>>at)-ut|0,n=(E=n&ft|0)|lt|0,E<=235662?j=0:E<767610?j=1:(j=0,w+=1,n-=ct),u=Ln(i=(m=(e=ot(e,n))-(c=ht[j]))*(b=1/(e+c)),0),t=(n>>1|st)+pt,f=ot(0,t+=j<<18),h=(o=i*i)*o*(0===(T=o)?.5999999999999946:.5999999999999946+T*(.4285714285785502+T*(.33333332981837743+T*(.272728123808534+T*(.23066074577556175+.20697501780033842*T))))),f=Ln(f=3+(o=u*u)+(h+=(a=b*(m-u*f-u*(e-(f-c))))*(u+i)),0),s=Ln(s=(m=u*f)+(b=a*f+(h-(f-3-o))*i),0),p=dt*s,d=(g=yt*s+(b-(s-m))*vt+bt[j])-((v=Ln(v=p+g+(l=mt[j])+(y=w),0))-y-l-p),r[0]=v,r[1]=d,r}(Qt,i,n);if(g=(s=(e-(c=Ln(e,0)))*p[0]+e*p[1])+(l=c*p[0]),xn.assign(g,Kt,1,0),v=Nn(Kt[0]),d=Nn(Kt[1]),v>=Bt){if(0!=(v-Bt|d))return a*Yt*Yt;if(s+qt>g-l)return a*Yt*Yt}else if((v&Cn)>=Dt){if(0!=(v-Xt|d))return a*Jt*Jt;if(s<=g-l)return a*Jt*Jt}return g=function(r,e,n){var t,i,o,u,a,f,c,l,s,p;return s=((l=r&Cn|0)>>at)-ut|0,c=0,l>Rt&&(i=ot(0,((c=r+(Mt>>s+1)>>>0)&~(Nt>>(s=((c&Cn)>>at)-ut|0)))>>>0),c=(c&Nt|Mt)>>at-s>>>0,r<0&&(c=-c),e-=i),r=Nn(r=Bn(f=1-((f=(o=(i=Ln(i=n+e,0))*Ct)+(u=(n-(i-e))*Lt+i*Wt))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((a=u-(f-o))+f*a)-f))),(r+=c<<at>>>0)>>at<=0?Ut(f,c):ot(f,r)}(v,l,s),a*g}var ei=clearTimeout;var ni=ee("read-file-list:async"),ti=De,ii=Xe;function oi(r,e,n){var t,i,o,u,a,f,c,l;if(!ae(r))throw new TypeError(F("invalid argument. First argument must be an array of strings. Value: `%s`.",r));if(arguments.length<3?(a={},c=e):(a=ne(e)?e:ze({},e),c=n),!Ir(c))throw new TypeError(F("invalid argument. Callback argument must be a function. Value: `%s`.",c));for(f=r.length,i=new Array(f),t={},u=0,ni("Reading %d files...",f),l=0;l<f;l++)ni("Reading file: %s (%d of %d).",r[l],l+1,f),Kr(r[l],a,s(l));function s(e){var n,c,l;function s(){delete t[e],ni("Reading file: %s (%d of %d). Retry: %d of %d.",c,l,f,n,ti),Kr(c,a,g)}function g(r,a){var g;if(!o)return r?(ni("Encountered an error when reading %s (%d of %d). Error: %s",c,l,f,r.message),"EMFILE"===r.code||"ENFILE"===r.code?(n+=1)>ti?(ni("Maximum number of retries exceeded. Too many open files."),p(r=new Error("unexpected error. Max retries exceeded. Too many open files."))):(g=function(r,e){var n=ri(2,r)-1;return n>e&&(n=e),n}(n,ii),ni("Too many open files. Will retry reading file %d of %d in %s seconds.",l,f,g/1e3),void(t[e]=setTimeout(s,g))):p(r)):(ni("Successfully read file: %s (%d of %d).",c,l,f),i[e]={file:c,data:a},ni("Read %d of %d files.",u+=1,f),u===f?p():void 0);ni("An error has already been returned. Discarding data for file: %s (%d of %d).",c,l,f)}return c=r[e],l=e+1,n=0,g}function p(r){if(function(r){var e,n;for(e=Re(r),n=0;n<e.length;n++)ei(r[e[n]])}(t),r)return o=!0,c(r);ni("Successfully read all files."),c(null,i)}}var ui=ee("read-file-list:sync");C(oi,"sync",(function(r,e){var n,t,i,o,u;if(!ae(r))throw new TypeError(F("invalid argument. First argument must be an array of strings. Value: `%s`.",r));for(t=arguments.length>1?e:{},o=r.length,n=new Array(o),ui("Reading %d files...",o),u=0;u<o;u++){if(ui("Reading file: %s (%d of %d).",r[u],u+1,o),(i=re(r[u],t))instanceof Error)return ui("Encountered an error when reading file: %s (%d of %d). Error: %s",r[u],u,o,i.message),i;ui("Successfully read file: %s (%d of %d).",r[u],u,o),n[u]={file:r[u],data:i}}return ui("Finished reading files."),n}));var ai,fi=Object.getPrototypeOf;ai=Ir(Object.getPrototypeOf)?fi:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ci=ai;var li=Object.prototype;function si(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Vr(r)}(r)&&(e=function(r){return null==r?null:(r=We(r),ci(r))}(r),!e||!X(r,"constructor")&&X(e,"constructor")&&Ir(e.constructor)&&"[object Function]"===J(e.constructor)&&X(e,"isPrototypeOf")&&Ir(e.isPrototypeOf)&&(e===li||function(r){var e;for(e in r)if(!X(r,e))return!1;return!0}(r)))}var pi=65279;function gi(r){if(!ne(r))throw new TypeError(F("invalid argument. Must provide a string. Value: `%s`.",r));return r.charCodeAt(0)===pi?r.slice(1):r}function vi(r,e){if(!ne(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(arguments.length>1&&!Ir(e))throw new TypeError(F("invalid argument. Reviver argument must be a function. Value: `%s`.",e));try{return JSON.parse(r,e)}catch(r){return r}}function di(r,e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}function yi(r,e,n){var t,i;if(arguments.length<3)t={},i=e;else{if(ne(e))t={encoding:e};else{if(!si(e))throw new TypeError(F("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));t=e}i=n}if(!Ir(i))throw new TypeError(F("invalid argument. Callback argument must be a function. Value: `%s`.",i));Kr(r,t,(function(r,e){if(r)return i(r);e=e.toString(),"utf8"===t.encoding&&(e=gi(e));e=t.reviver?vi(e,t.reviver):vi(e);if(di(e,Error))return i(e);i(null,e)}))}function hi(r,e,n){var t,i;if(arguments.length<3)t={},i=e;else{if(!si(e))throw new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e));t=e,i=n}if(!Ir(i))throw new TypeError(F("invalid argument. Callback argument must be a function. Value: `%s`.",i));t.encoding=null,Kr(r,t,(function(r,e){var n,t;if(r)return i(r);if(sn(e))return i(null,e);for(n=new dn(e.length),t=0;t<e.length;t++)n[t]=e[t];i(null,n)}))}C(yi,"sync",(function(r,e){var n,t;if(arguments.length>1)if(ne(e))n={encoding:e};else{if(!si(e))throw new TypeError(F("invalid argument. Options argument must be either a string or an object. Value: `%s`.",e));n=e}else n={};return di(t=re(r,n),Error)?t:(t=t.toString(),"utf8"===n.encoding&&(t=gi(t)),n.reviver?vi(t,n.reviver):vi(t))})),C(hi,"sync",(function(r,e){var n,t,i,o;if(arguments.length>1){if(!si(e))throw new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e));n=e}else n={};if(n.encoding=null,di(i=re(r,n),Error))return i;if(sn(i))return i;for(t=new dn(i.length),o=0;o<i.length;o++)t[o]=i[o];return t}));var mi=$.rename;function bi(r,e,n){mi(r,e,n)}var wi=$.renameSync;function Ei(r,e){for(var n=0,t=r.length-1;t>=0;t--){var i=r[t];"."===i?r.splice(t,1):".."===i?(r.splice(t,1),n++):n&&(r.splice(t,1),n--)}if(e)for(;n--;n)r.unshift("..");return r}C(bi,"sync",(function(r,e){try{wi(r,e)}catch(r){return r}return null}));var ji=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,Ti=function(r){return ji.exec(r).slice(1)};function Oi(){for(var r="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var t=n>=0?arguments[n]:"/";if("string"!=typeof t)throw new TypeError("Arguments to path.resolve must be strings");t&&(r=t+"/"+r,e="/"===t.charAt(0))}return(e?"/":"")+(r=Ei(Ii(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function Ai(r){var e=Si(r),n="/"===Ui(r,-1);return(r=Ei(Ii(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&n&&(r+="/"),(e?"/":"")+r}function Si(r){return"/"===r.charAt(0)}function _i(){return Ai(Ii(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function Vi(r,e){function n(r){for(var e=0;e<r.length&&""===r[e];e++);for(var n=r.length-1;n>=0&&""===r[n];n--);return e>n?[]:r.slice(e,n-e+1)}r=Oi(r).substr(1),e=Oi(e).substr(1);for(var t=n(r.split("/")),i=n(e.split("/")),o=Math.min(t.length,i.length),u=o,a=0;a<o;a++)if(t[a]!==i[a]){u=a;break}var f=[];for(a=u;a<t.length;a++)f.push("..");return(f=f.concat(i.slice(u))).join("/")}function Fi(r){var e=Ti(r),n=e[0],t=e[1];return n||t?(t&&(t=t.substr(0,t.length-1)),n+t):"."}function ki(r,e){var n=Ti(r)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n}function xi(r){return Ti(r)[3]}var Pi={extname:xi,basename:ki,dirname:Fi,sep:"/",delimiter:":",relative:Vi,join:_i,isAbsolute:Si,normalize:Ai,resolve:Oi};function Ii(r,e){if(r.filter)return r.filter(e);for(var n=[],t=0;t<r.length;t++)e(r[t],t,r)&&n.push(r[t]);return n}var Ui="b"==="ab".substr(-1)?function(r,e,n){return r.substr(e,n)}:function(r,e,n){return e<0&&(e=r.length+e),r.substr(e,n)},Li=W(Object.freeze({__proto__:null,basename:ki,default:Pi,delimiter:":",dirname:Fi,extname:xi,isAbsolute:Si,join:_i,normalize:Ai,relative:Vi,resolve:Oi,sep:"/"})),Ni="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function Mi(){throw new Error("setTimeout has not been defined")}function Ri(){throw new Error("clearTimeout has not been defined")}var Ci=Mi,Wi=Ri;function $i(r){if(Ci===setTimeout)return setTimeout(r,0);if((Ci===Mi||!Ci)&&setTimeout)return Ci=setTimeout,setTimeout(r,0);try{return Ci(r,0)}catch(e){try{return Ci.call(null,r,0)}catch(e){return Ci.call(this,r,0)}}}"function"==typeof Ni.setTimeout&&(Ci=setTimeout),"function"==typeof Ni.clearTimeout&&(Wi=clearTimeout);var Gi,Hi=[],Bi=!1,zi=-1;function Di(){Bi&&Gi&&(Bi=!1,Gi.length?Hi=Gi.concat(Hi):zi=-1,Hi.length&&Xi())}function Xi(){if(!Bi){var r=$i(Di);Bi=!0;for(var e=Hi.length;e;){for(Gi=Hi,Hi=[];++zi<e;)Gi&&Gi[zi].run();zi=-1,e=Hi.length}Gi=null,Bi=!1,function(r){if(Wi===clearTimeout)return clearTimeout(r);if((Wi===Ri||!Wi)&&clearTimeout)return Wi=clearTimeout,clearTimeout(r);try{return Wi(r)}catch(e){try{return Wi.call(null,r)}catch(e){return Wi.call(this,r)}}}(r)}}function Zi(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Hi.push(new Yi(r,e)),1!==Hi.length||Bi||$i(Xi)}function Yi(r,e){this.fun=r,this.array=e}Yi.prototype.run=function(){this.fun.apply(null,this.array)};var Ji="browser",qi="browser",Ki={},Qi=[],ro={},eo={},no={};function to(){}var io=to,oo=to,uo=to,ao=to,fo=to,co=to,lo=to;function so(r){throw new Error("process.binding is not supported")}function po(){return"/"}function go(r){throw new Error("process.chdir is not supported")}function vo(){return 0}var yo=Ni.performance||{},ho=yo.now||yo.mozNow||yo.msNow||yo.oNow||yo.webkitNow||function(){return(new Date).getTime()};function mo(r){var e=.001*ho.call(yo),n=Math.floor(e),t=Math.floor(e%1*1e9);return r&&(n-=r[0],(t-=r[1])<0&&(n--,t+=1e9)),[n,t]}var bo=new Date;function wo(){return(new Date-bo)/1e3}var Eo={nextTick:Zi,title:Ji,browser:true,env:Ki,argv:Qi,version:"",versions:ro,on:io,addListener:oo,once:uo,off:ao,removeListener:fo,removeAllListeners:co,emit:lo,binding:so,cwd:po,chdir:go,umask:vo,hrtime:mo,platform:qi,release:eo,config:no,uptime:wo},jo=W(Object.freeze({__proto__:null,addListener:oo,argv:Qi,binding:so,browser:true,chdir:go,config:no,cwd:po,default:Eo,emit:lo,env:Ki,hrtime:mo,nextTick:Zi,off:ao,on:io,once:uo,platform:qi,release:eo,removeAllListeners:co,removeListener:fo,title:Ji,umask:vo,uptime:wo,version:"",versions:ro}));function To(){return jo.cwd()}function Oo(r,e){return si(e)?X(e,"dir")&&(r.dir=e.dir,!ne(r.dir))?new TypeError(F("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e))}var Ao=Li.resolve;function So(r,e,n){var t,i,o,u,a,f;if(!ne(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(o={},arguments.length>2){if(u=n,f=Oo(o,e))throw f}else u=e;if(!Ir(u))throw new TypeError(F("invalid argument. Callback argument must be a function. Value: `%s`.",u));a=o.dir?Ao(To(),o.dir):To(),Cr(t=Ao(a,r),(function e(n,o){if(o)return u(null,t);if(i=a,a=Ao(a,".."),i===a)return u(null,null);Cr(t=Ao(a,r),e)}))}var _o=Li.resolve;function Vo(r,e){return si(e)?X(e,"dir")&&(r.dir=e.dir,!ne(r.dir))?new TypeError(F("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e))}C(So,"sync",(function(r,e){var n,t,i,o,u;if(!ne(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(i={},arguments.length>1&&(u=Oo(i,e)))throw u;for(o=i.dir?_o(To(),i.dir):To();t!==o;){if(Gr(n=_o(o,r)))return n;t=o,o=_o(o,"..")}return null}));var Fo=Li.resolve;function ko(r,e,n,t){var i,o,u,a,f,c,l;if(!ne(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(a={},arguments.length>3){if(l=Vo(a,e))throw l;u=n,f=t}else u=e,f=n;if(!Ir(u))throw new TypeError(F("invalid argument. Predicate function must be a function. Value: `%s`.",u));if(!Ir(f))throw new TypeError(F("invalid argument. Callback argument must be a function. Value: `%s`.",f));function s(){if(o=c,c=Fo(c,".."),o===c)return f(null,null);Cr(i=Fo(c,r),p)}function p(r,e){if(e)return u(i,g);s()}function g(r,e){return r?f(r):e?f(null,i):void s()}c=a.dir?Fo(To(),a.dir):To(),Cr(i=Fo(c,r),p)}var xo=Li.resolve;C(ko,"sync",(function(r,e,n){var t,i,o,u,a,f;if(!ne(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));if(u={},arguments.length>2){if(f=Vo(u,e))throw f;o=n}else o=e;if(!Ir(o))throw new TypeError(F("invalid argument. Last argument must be a function. Value: `%s`.",o));for(a=u.dir?xo(To(),u.dir):To();i!==a;){if(Gr(t=xo(a,r))&&o(t))return t;i=a,a=xo(a,"..")}return null}));var Po=$.unlink;function Io(r,e){Po(r,e)}var Uo=$.unlinkSync;C(Io,"sync",(function(r){try{Uo(r)}catch(r){return r}return null}));var Lo=$.writeFile;function No(){var r,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);Lo.apply(null,r)}var Mo=$.writeFileSync;C(No,"sync",(function(r,e,n){try{arguments.length>2?Mo(r,e,n):Mo(r,e)}catch(r){return r}return null}));var Ro={};return R(Ro,"close",Lr),R(Ro,"exists",Cr),R(Ro,"open",Dr),R(Ro,"readDir",Yr),R(Ro,"readFile",Kr),R(Ro,"readFileList",oi),R(Ro,"readJSON",yi),R(Ro,"readWASM",hi),R(Ro,"rename",bi),R(Ro,"resolveParentPath",So),R(Ro,"resolveParentPathBy",ko),R(Ro,"unlink",Io),R(Ro,"writeFile",No),Ro}));
//# sourceMappingURL=browser.js.map
