function _mergeNamespaces(e,i){for(var o=0;o<i.length;o++){const a=i[o];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in e)){const c=Object.getOwnPropertyDescriptor(a,s);c&&Object.defineProperty(e,s,c.get?c:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jsxRuntime={exports:{}},reactJsxRuntime_production_min={},react={exports:{}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(e){return e===null||typeof e!="object"?null:(e=z$1&&e[z$1]||e["@@iterator"],typeof e=="function"?e:null)}var B$1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(e,i,o){this.props=e,this.context=i,this.refs=D$1,this.updater=o||B$1}E$1.prototype.isReactComponent={};E$1.prototype.setState=function(e,i){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,i,"setState")};E$1.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function F(){}F.prototype=E$1.prototype;function G$1(e,i,o){this.props=e,this.context=i,this.refs=D$1,this.updater=o||B$1}var H$1=G$1.prototype=new F;H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=!0;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};function M$1(e,i,o){var a,s={},c=null,d=null;if(i!=null)for(a in i.ref!==void 0&&(d=i.ref),i.key!==void 0&&(c=""+i.key),i)J.call(i,a)&&!L$1.hasOwnProperty(a)&&(s[a]=i[a]);var _=arguments.length-2;if(_===1)s.children=o;else if(1<_){for(var h=Array(_),g=0;g<_;g++)h[g]=arguments[g+2];s.children=h}if(e&&e.defaultProps)for(a in _=e.defaultProps,_)s[a]===void 0&&(s[a]=_[a]);return{$$typeof:l$1,type:e,key:c,ref:d,props:s,_owner:K$1.current}}function N$1(e,i){return{$$typeof:l$1,type:e.type,key:i,ref:e.ref,props:e.props,_owner:e._owner}}function O$1(e){return typeof e=="object"&&e!==null&&e.$$typeof===l$1}function escape(e){var i={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return i[o]})}var P$1=/\/+/g;function Q$1(e,i){return typeof e=="object"&&e!==null&&e.key!=null?escape(""+e.key):i.toString(36)}function R$1(e,i,o,a,s){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var d=!1;if(e===null)d=!0;else switch(c){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case l$1:case n$1:d=!0}}if(d)return d=e,s=s(d),e=a===""?"."+Q$1(d,0):a,I$1(s)?(o="",e!=null&&(o=e.replace(P$1,"$&/")+"/"),R$1(s,i,o,"",function(g){return g})):s!=null&&(O$1(s)&&(s=N$1(s,o+(!s.key||d&&d.key===s.key?"":(""+s.key).replace(P$1,"$&/")+"/")+e)),i.push(s)),1;if(d=0,a=a===""?".":a+":",I$1(e))for(var _=0;_<e.length;_++){c=e[_];var h=a+Q$1(c,_);d+=R$1(c,i,o,h,s)}else if(h=A$1(e),typeof h=="function")for(e=h.call(e),_=0;!(c=e.next()).done;)c=c.value,h=a+Q$1(c,_++),d+=R$1(c,i,o,h,s);else if(c==="object")throw i=String(e),Error("Objects are not valid as a React child (found: "+(i==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":i)+"). If you meant to render a collection of children, use an array instead.");return d}function S$1(e,i,o){if(e==null)return e;var a=[],s=0;return R$1(e,a,"","",function(c){return i.call(o,c,s++)}),a}function T$1(e){if(e._status===-1){var i=e._result;i=i(),i.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=i)}if(e._status===1)return e._result.default;throw e._result}var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};function X$1(){throw Error("act(...) is not supported in production builds of React.")}react_production_min.Children={map:S$1,forEach:function(e,i,o){S$1(e,function(){i.apply(this,arguments)},o)},count:function(e){var i=0;return S$1(e,function(){i++}),i},toArray:function(e){return S$1(e,function(i){return i})||[]},only:function(e){if(!O$1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.act=X$1;react_production_min.cloneElement=function(e,i,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=C$1({},e.props),s=e.key,c=e.ref,d=e._owner;if(i!=null){if(i.ref!==void 0&&(c=i.ref,d=K$1.current),i.key!==void 0&&(s=""+i.key),e.type&&e.type.defaultProps)var _=e.type.defaultProps;for(h in i)J.call(i,h)&&!L$1.hasOwnProperty(h)&&(a[h]=i[h]===void 0&&_!==void 0?_[h]:i[h])}var h=arguments.length-2;if(h===1)a.children=o;else if(1<h){_=Array(h);for(var g=0;g<h;g++)_[g]=arguments[g+2];a.children=_}return{$$typeof:l$1,type:e.type,key:s,ref:c,props:a,_owner:d}};react_production_min.createContext=function(e){return e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:t,_context:e},e.Consumer=e};react_production_min.createElement=M$1;react_production_min.createFactory=function(e){var i=M$1.bind(null,e);return i.type=e,i};react_production_min.createRef=function(){return{current:null}};react_production_min.forwardRef=function(e){return{$$typeof:v$1,render:e}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:T$1}};react_production_min.memo=function(e,i){return{$$typeof:x,type:e,compare:i===void 0?null:i}};react_production_min.startTransition=function(e){var i=V$1.transition;V$1.transition={};try{e()}finally{V$1.transition=i}};react_production_min.unstable_act=X$1;react_production_min.useCallback=function(e,i){return U$1.current.useCallback(e,i)};react_production_min.useContext=function(e){return U$1.current.useContext(e)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(e){return U$1.current.useDeferredValue(e)};react_production_min.useEffect=function(e,i){return U$1.current.useEffect(e,i)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(e,i,o){return U$1.current.useImperativeHandle(e,i,o)};react_production_min.useInsertionEffect=function(e,i){return U$1.current.useInsertionEffect(e,i)};react_production_min.useLayoutEffect=function(e,i){return U$1.current.useLayoutEffect(e,i)};react_production_min.useMemo=function(e,i){return U$1.current.useMemo(e,i)};react_production_min.useReducer=function(e,i,o){return U$1.current.useReducer(e,i,o)};react_production_min.useRef=function(e){return U$1.current.useRef(e)};react_production_min.useState=function(e){return U$1.current.useState(e)};react_production_min.useSyncExternalStore=function(e,i,o){return U$1.current.useSyncExternalStore(e,i,o)};react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.3.1";react.exports=react_production_min;var reactExports=react.exports;const index=getDefaultExportFromCjs(reactExports),React=_mergeNamespaces({__proto__:null,default:index},[reactExports]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$1={key:!0,ref:!0,__self:!0,__source:!0};function q(e,i,o){var a,s={},c=null,d=null;o!==void 0&&(c=""+o),i.key!==void 0&&(c=""+i.key),i.ref!==void 0&&(d=i.ref);for(a in i)m$1.call(i,a)&&!p$1.hasOwnProperty(a)&&(s[a]=i[a]);if(e&&e.defaultProps)for(a in i=e.defaultProps,i)s[a]===void 0&&(s[a]=i[a]);return{$$typeof:k,type:e,key:c,ref:d,props:s,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;jsxRuntime.exports=reactJsxRuntime_production_min;var jsxRuntimeExports=jsxRuntime.exports,client={},reactDom={exports:{}},reactDom_production_min={},scheduler={exports:{}},scheduler_production_min={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function i(gt,St){var kt=gt.length;gt.push(St);e:for(;0<kt;){var It=kt-1>>>1,wt=gt[It];if(0<s(wt,St))gt[It]=St,gt[kt]=wt,kt=It;else break e}}function o(gt){return gt.length===0?null:gt[0]}function a(gt){if(gt.length===0)return null;var St=gt[0],kt=gt.pop();if(kt!==St){gt[0]=kt;e:for(var It=0,wt=gt.length,lt=wt>>>1;It<lt;){var it=2*(It+1)-1,j=gt[it],rt=it+1,ot=gt[rt];if(0>s(j,kt))rt<wt&&0>s(ot,j)?(gt[It]=ot,gt[rt]=kt,It=rt):(gt[It]=j,gt[it]=kt,It=it);else if(rt<wt&&0>s(ot,kt))gt[It]=ot,gt[rt]=kt,It=rt;else break e}}return St}function s(gt,St){var kt=gt.sortIndex-St.sortIndex;return kt!==0?kt:gt.id-St.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var d=Date,_=d.now();e.unstable_now=function(){return d.now()-_}}var h=[],g=[],nt=1,_e=null,tt=3,st=!1,ft=!1,ut=!1,_t=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function et(gt){for(var St=o(g);St!==null;){if(St.callback===null)a(g);else if(St.startTime<=gt)a(g),St.sortIndex=St.expirationTime,i(h,St);else break;St=o(g)}}function ct(gt){if(ut=!1,et(gt),!ft)if(o(h)!==null)ft=!0,Ht(ht);else{var St=o(g);St!==null&&Wt(ct,St.startTime-gt)}}function ht(gt,St){ft=!1,ut&&(ut=!1,b($t),$t=-1),st=!0;var kt=tt;try{for(et(St),_e=o(h);_e!==null&&(!(_e.expirationTime>St)||gt&&!Ot());){var It=_e.callback;if(typeof It=="function"){_e.callback=null,tt=_e.priorityLevel;var wt=It(_e.expirationTime<=St);St=e.unstable_now(),typeof wt=="function"?_e.callback=wt:_e===o(h)&&a(h),et(St)}else a(h);_e=o(h)}if(_e!==null)var lt=!0;else{var it=o(g);it!==null&&Wt(ct,it.startTime-St),lt=!1}return lt}finally{_e=null,tt=kt,st=!1}}var vt=!1,yt=null,$t=-1,xt=5,Rt=-1;function Ot(){return!(e.unstable_now()-Rt<xt)}function zt(){if(yt!==null){var gt=e.unstable_now();Rt=gt;var St=!0;try{St=yt(!0,gt)}finally{St?Mt():(vt=!1,yt=null)}}else vt=!1}var Mt;if(typeof $=="function")Mt=function(){$(zt)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,Dt=Ut.port2;Ut.port1.onmessage=zt,Mt=function(){Dt.postMessage(null)}}else Mt=function(){_t(zt,0)};function Ht(gt){yt=gt,vt||(vt=!0,Mt())}function Wt(gt,St){$t=_t(function(){gt(e.unstable_now())},St)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(gt){gt.callback=null},e.unstable_continueExecution=function(){ft||st||(ft=!0,Ht(ht))},e.unstable_forceFrameRate=function(gt){0>gt||125<gt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xt=0<gt?Math.floor(1e3/gt):5},e.unstable_getCurrentPriorityLevel=function(){return tt},e.unstable_getFirstCallbackNode=function(){return o(h)},e.unstable_next=function(gt){switch(tt){case 1:case 2:case 3:var St=3;break;default:St=tt}var kt=tt;tt=St;try{return gt()}finally{tt=kt}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(gt,St){switch(gt){case 1:case 2:case 3:case 4:case 5:break;default:gt=3}var kt=tt;tt=gt;try{return St()}finally{tt=kt}},e.unstable_scheduleCallback=function(gt,St,kt){var It=e.unstable_now();switch(typeof kt=="object"&&kt!==null?(kt=kt.delay,kt=typeof kt=="number"&&0<kt?It+kt:It):kt=It,gt){case 1:var wt=-1;break;case 2:wt=250;break;case 5:wt=1073741823;break;case 4:wt=1e4;break;default:wt=5e3}return wt=kt+wt,gt={id:nt++,callback:St,priorityLevel:gt,startTime:kt,expirationTime:wt,sortIndex:-1},kt>It?(gt.sortIndex=kt,i(g,gt),o(h)===null&&gt===o(g)&&(ut?(b($t),$t=-1):ut=!0,Wt(ct,kt-It))):(gt.sortIndex=wt,i(h,gt),ft||st||(ft=!0,Ht(ht))),gt},e.unstable_shouldYield=Ot,e.unstable_wrapCallback=function(gt){var St=tt;return function(){var kt=tt;tt=St;try{return gt.apply(this,arguments)}finally{tt=kt}}}})(scheduler_production_min);scheduler.exports=scheduler_production_min;var schedulerExports=scheduler.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=reactExports,ca=schedulerExports;function p(e){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(e,i){ha(e,i),ha(e+"Capture",i)}function ha(e,i){for(ea[e]=i,e=0;e<i.length;e++)da.add(i[e])}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma={};function oa(e){return ja.call(ma,e)?!0:ja.call(la,e)?!1:ka.test(e)?ma[e]=!0:(la[e]=!0,!1)}function pa(e,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qa(e,i,o,a){if(i===null||typeof i>"u"||pa(e,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function v(e,i,o,a,s,c,d){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=s,this.mustUseProperty=o,this.propertyName=e,this.type=i,this.sanitizeURL=c,this.removeEmptyString=d}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new v(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var i=e[0];z[i]=new v(i,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new v(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){z[e]=new v(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){z[e]=new v(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){z[e]=new v(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){z[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var i=e.replace(ra,sa);z[i]=new v(i,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var i=e.replace(ra,sa);z[i]=new v(i,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var i=e.replace(ra,sa);z[i]=new v(i,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){z[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)});z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){z[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function ta(e,i,o,a){var s=z.hasOwnProperty(i)?z[i]:null;(s!==null?s.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(qa(i,o,s,a)&&(o=null),a||s===null?oa(i)&&(o===null?e.removeAttribute(i):e.setAttribute(i,""+o)):s.mustUseProperty?e[s.propertyName]=o===null?s.type===3?!1:"":o:(i=s.attributeName,a=s.attributeNamespace,o===null?e.removeAttribute(i):(s=s.type,o=s===3||s===4&&o===!0?"":""+o,a?e.setAttributeNS(a,i,o):e.setAttribute(i,o))))}var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy"),Ia=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function Ka(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,La;function Ma(e){if(La===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);La=i&&i[1]||""}return`
`+La+e}var Na=!1;function Oa(e,i){if(!e||Na)return"";Na=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(g){var a=g}Reflect.construct(e,[],i)}else{try{i.call()}catch(g){a=g}e.call(i.prototype)}else{try{throw Error()}catch(g){a=g}e()}}catch(g){if(g&&a&&typeof g.stack=="string"){for(var s=g.stack.split(`
`),c=a.stack.split(`
`),d=s.length-1,_=c.length-1;1<=d&&0<=_&&s[d]!==c[_];)_--;for(;1<=d&&0<=_;d--,_--)if(s[d]!==c[_]){if(d!==1||_!==1)do if(d--,_--,0>_||s[d]!==c[_]){var h=`
`+s[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=_);break}}}finally{Na=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?Ma(e):""}function Pa(e){switch(e.tag){case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return e=Oa(e.type,!1),e;case 11:return e=Oa(e.type.render,!1),e;case 1:return e=Oa(e.type,!0),e;default:return""}}function Qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ca:return(e.displayName||"Context")+".Consumer";case Ba:return(e._context.displayName||"Context")+".Provider";case Da:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ga:return i=e.displayName||null,i!==null?i:Qa(e.type)||"Memo";case Ha:i=e._payload,e=e._init;try{return Qa(e(i))}catch{}}return null}function Ra(e){var i=e.type;switch(e.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=i.render,e=e.displayName||e.name||"",i.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(i);case 8:return i===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Sa(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ta(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ua(e){var i=Ta(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),a=""+e[i];if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var s=o.get,c=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return s.call(this)},set:function(d){a=""+d,c.call(this,d)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Va(e){e._valueTracker||(e._valueTracker=Ua(e))}function Wa(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return e&&(a=Ta(e)?e.checked?"true":"false":e.value),e=a,e!==o?(i.setValue(e),!0):!1}function Xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,i){var o=i.checked;return A({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Za(e,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=Sa(i.value!=null?i.value:o),e._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ab(e,i){i=i.checked,i!=null&&ta(e,"checked",i,!1)}function bb(e,i){ab(e,i);var o=Sa(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}i.hasOwnProperty("value")?cb(e,i.type,o):i.hasOwnProperty("defaultValue")&&cb(e,i.type,Sa(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(e.defaultChecked=!!i.defaultChecked)}function db(e,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+e._wrapperState.initialValue,o||i===e.value||(e.value=i),e.defaultValue=i}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function cb(e,i,o){(i!=="number"||Xa(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var eb=Array.isArray;function fb(e,i,o,a){if(e=e.options,i){i={};for(var s=0;s<o.length;s++)i["$"+o[s]]=!0;for(o=0;o<e.length;o++)s=i.hasOwnProperty("$"+e[o].value),e[o].selected!==s&&(e[o].selected=s),s&&a&&(e[o].defaultSelected=!0)}else{for(o=""+Sa(o),i=null,s=0;s<e.length;s++){if(e[s].value===o){e[s].selected=!0,a&&(e[s].defaultSelected=!0);return}i!==null||e[s].disabled||(i=e[s])}i!==null&&(i.selected=!0)}}function gb(e,i){if(i.dangerouslySetInnerHTML!=null)throw Error(p(91));return A({},i,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hb(e,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(p(92));if(eb(o)){if(1<o.length)throw Error(p(93));o=o[0]}i=o}i==null&&(i=""),o=i}e._wrapperState={initialValue:Sa(o)}}function ib(e,i){var o=Sa(i.value),a=Sa(i.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),i.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),a!=null&&(e.defaultValue=""+a)}function jb(e){var i=e.textContent;i===e._wrapperState.initialValue&&i!==""&&i!==null&&(e.value=i)}function kb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lb(e,i){return e==null||e==="http://www.w3.org/1999/xhtml"?kb(i):e==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mb,nb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,s){MSApp.execUnsafeLocalFunction(function(){return e(i,o,a,s)})}:e}(function(e,i){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=i;else{for(mb=mb||document.createElement("div"),mb.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=mb.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;i.firstChild;)e.appendChild(i.firstChild)}});function ob(e,i){if(i){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=i;return}}e.textContent=i}var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(e){qb.forEach(function(i){i=i+e.charAt(0).toUpperCase()+e.substring(1),pb[i]=pb[e]})});function rb(e,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||pb.hasOwnProperty(e)&&pb[e]?(""+i).trim():i+"px"}function sb(e,i){e=e.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,s=rb(o,i[o],a);o==="float"&&(o="cssFloat"),a?e.setProperty(o,s):e[o]=s}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ub(e,i){if(i){if(tb[e]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(p(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(p(61))}if(i.style!=null&&typeof i.style!="object")throw Error(p(62))}}function vb(e,i){if(e.indexOf("-")===-1)return typeof i.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb=null;function xb(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yb=null,zb=null,Ab=null;function Bb(e){if(e=Cb(e)){if(typeof yb!="function")throw Error(p(280));var i=e.stateNode;i&&(i=Db(i),yb(e.stateNode,e.type,i))}}function Eb(e){zb?Ab?Ab.push(e):Ab=[e]:zb=e}function Fb(){if(zb){var e=zb,i=Ab;if(Ab=zb=null,Bb(e),i)for(e=0;e<i.length;e++)Bb(i[e])}}function Gb(e,i){return e(i)}function Hb(){}var Ib=!1;function Jb(e,i,o){if(Ib)return e(i,o);Ib=!0;try{return Gb(e,i,o)}finally{Ib=!1,(zb!==null||Ab!==null)&&(Hb(),Fb())}}function Kb(e,i){var o=e.stateNode;if(o===null)return null;var a=Db(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(p(231,i,typeof o));return o}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}}),window.addEventListener("test",Mb,Mb),window.removeEventListener("test",Mb,Mb)}catch{Lb=!1}function Nb(e,i,o,a,s,c,d,_,h){var g=Array.prototype.slice.call(arguments,3);try{i.apply(o,g)}catch(nt){this.onError(nt)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(e){Ob=!0,Pb=e}};function Tb(e,i,o,a,s,c,d,_,h){Ob=!1,Pb=null,Nb.apply(Sb,arguments)}function Ub(e,i,o,a,s,c,d,_,h){if(Tb.apply(this,arguments),Ob){if(Ob){var g=Pb;Ob=!1,Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=g)}}function Vb(e){var i=e,o=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,i.flags&4098&&(o=i.return),e=i.return;while(e)}return i.tag===3?o:null}function Wb(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function Xb(e){if(Vb(e)!==e)throw Error(p(188))}function Yb(e){var i=e.alternate;if(!i){if(i=Vb(e),i===null)throw Error(p(188));return i!==e?null:e}for(var o=e,a=i;;){var s=o.return;if(s===null)break;var c=s.alternate;if(c===null){if(a=s.return,a!==null){o=a;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===o)return Xb(s),e;if(c===a)return Xb(s),i;c=c.sibling}throw Error(p(188))}if(o.return!==a.return)o=s,a=c;else{for(var d=!1,_=s.child;_;){if(_===o){d=!0,o=s,a=c;break}if(_===a){d=!0,a=s,o=c;break}_=_.sibling}if(!d){for(_=c.child;_;){if(_===o){d=!0,o=c,a=s;break}if(_===a){d=!0,a=c,o=s;break}_=_.sibling}if(!d)throw Error(p(189))}}if(o.alternate!==a)throw Error(p(190))}if(o.tag!==3)throw Error(p(188));return o.stateNode.current===o?e:i}function Zb(e){return e=Yb(e),e!==null?$b(e):null}function $b(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var i=$b(e);if(i!==null)return i;e=e.sibling}return null}var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(e){if(lc&&typeof lc.onCommitFiberRoot=="function")try{lc.onCommitFiberRoot(kc,e,void 0,(e.current.flags&128)===128)}catch{}}var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(e){return e>>>=0,e===0?32:31-(pc(e)/qc|0)|0}var rc=64,sc=4194304;function tc(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uc(e,i){var o=e.pendingLanes;if(o===0)return 0;var a=0,s=e.suspendedLanes,c=e.pingedLanes,d=o&268435455;if(d!==0){var _=d&~s;_!==0?a=tc(_):(c&=d,c!==0&&(a=tc(c)))}else d=o&~s,d!==0?a=tc(d):c!==0&&(a=tc(c));if(a===0)return 0;if(i!==0&&i!==a&&!(i&s)&&(s=a&-a,c=i&-i,s>=c||s===16&&(c&4194240)!==0))return i;if(a&4&&(a|=o&16),i=e.entangledLanes,i!==0)for(e=e.entanglements,i&=a;0<i;)o=31-oc(i),s=1<<o,a|=e[o],i&=~s;return a}function vc(e,i){switch(e){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc(e,i){for(var o=e.suspendedLanes,a=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes;0<c;){var d=31-oc(c),_=1<<d,h=s[d];h===-1?(!(_&o)||_&a)&&(s[d]=vc(_,i)):h<=i&&(e.expiredLanes|=_),c&=~_}}function xc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yc(){var e=rc;return rc<<=1,!(rc&4194240)&&(rc=64),e}function zc(e){for(var i=[],o=0;31>o;o++)i.push(e);return i}function Ac(e,i,o){e.pendingLanes|=i,i!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,i=31-oc(i),e[i]=o}function Bc(e,i){var o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<o;){var s=31-oc(o),c=1<<s;i[s]=0,a[s]=-1,e[s]=-1,o&=~c}}function Cc(e,i){var o=e.entangledLanes|=i;for(e=e.entanglements;o;){var a=31-oc(o),s=1<<a;s&i|e[a]&i&&(e[a]|=i),o&=~s}}var C=0;function Dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(e,i){switch(e){case"focusin":case"focusout":Lc=null;break;case"dragenter":case"dragleave":Mc=null;break;case"mouseover":case"mouseout":Nc=null;break;case"pointerover":case"pointerout":Oc.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(i.pointerId)}}function Tc(e,i,o,a,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:c,targetContainers:[s]},i!==null&&(i=Cb(i),i!==null&&Fc(i)),e):(e.eventSystemFlags|=a,i=e.targetContainers,s!==null&&i.indexOf(s)===-1&&i.push(s),e)}function Uc(e,i,o,a,s){switch(i){case"focusin":return Lc=Tc(Lc,e,i,o,a,s),!0;case"dragenter":return Mc=Tc(Mc,e,i,o,a,s),!0;case"mouseover":return Nc=Tc(Nc,e,i,o,a,s),!0;case"pointerover":var c=s.pointerId;return Oc.set(c,Tc(Oc.get(c)||null,e,i,o,a,s)),!0;case"gotpointercapture":return c=s.pointerId,Pc.set(c,Tc(Pc.get(c)||null,e,i,o,a,s)),!0}return!1}function Vc(e){var i=Wc(e.target);if(i!==null){var o=Vb(i);if(o!==null){if(i=o.tag,i===13){if(i=Wb(o),i!==null){e.blockedOn=i,Ic(e.priority,function(){Gc(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var o=Yc(e.domEventName,e.eventSystemFlags,i[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var a=new o.constructor(o.type,o);wb=a,o.target.dispatchEvent(a),wb=null}else return i=Cb(o),i!==null&&Fc(i),e.blockedOn=o,!1;i.shift()}return!0}function Zc(e,i,o){Xc(e)&&o.delete(i)}function $c(){Jc=!1,Lc!==null&&Xc(Lc)&&(Lc=null),Mc!==null&&Xc(Mc)&&(Mc=null),Nc!==null&&Xc(Nc)&&(Nc=null),Oc.forEach(Zc),Pc.forEach(Zc)}function ad(e,i){e.blockedOn===i&&(e.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}function bd(e){function i(s){return ad(s,e)}if(0<Kc.length){ad(Kc[0],e);for(var o=1;o<Kc.length;o++){var a=Kc[o];a.blockedOn===e&&(a.blockedOn=null)}}for(Lc!==null&&ad(Lc,e),Mc!==null&&ad(Mc,e),Nc!==null&&ad(Nc,e),Oc.forEach(i),Pc.forEach(i),o=0;o<Qc.length;o++)a=Qc[o],a.blockedOn===e&&(a.blockedOn=null);for(;0<Qc.length&&(o=Qc[0],o.blockedOn===null);)Vc(o),o.blockedOn===null&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;function ed(e,i,o,a){var s=C,c=cd.transition;cd.transition=null;try{C=1,fd(e,i,o,a)}finally{C=s,cd.transition=c}}function gd(e,i,o,a){var s=C,c=cd.transition;cd.transition=null;try{C=4,fd(e,i,o,a)}finally{C=s,cd.transition=c}}function fd(e,i,o,a){if(dd){var s=Yc(e,i,o,a);if(s===null)hd(e,i,a,id,o),Sc(e,a);else if(Uc(s,e,i,o,a))a.stopPropagation();else if(Sc(e,a),i&4&&-1<Rc.indexOf(e)){for(;s!==null;){var c=Cb(s);if(c!==null&&Ec(c),c=Yc(e,i,o,a),c===null&&hd(e,i,a,id,o),c===s)break;s=c}s!==null&&a.stopPropagation()}else hd(e,i,a,null,o)}}var id=null;function Yc(e,i,o,a){if(id=null,e=xb(a),e=Wc(e),e!==null)if(i=Vb(e),i===null)e=null;else if(o=i.tag,o===13){if(e=Wb(i),e!==null)return e;e=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null);return id=e,null}function jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var e,i=ld,o=i.length,a,s="value"in kd?kd.value:kd.textContent,c=s.length;for(e=0;e<o&&i[e]===s[e];e++);var d=o-e;for(a=1;a<=d&&i[o-a]===s[c-a];a++);return md=s.slice(e,1<a?1-a:void 0)}function od(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function pd(){return!0}function qd(){return!1}function rd(e){function i(o,a,s,c,d){this._reactName=o,this._targetInst=s,this.type=a,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(o=e[_],this[_]=o?o(c):c[_]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?pd:qd,this.isPropagationStopped=qd,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd}),i}var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yd&&(yd&&e.type==="mousemove"?(wd=e.screenX-yd.screenX,xd=e.screenY-yd.screenY):xd=wd=0,yd=e),wd)},movementY:function(e){return"movementY"in e?e.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Od[e])?!!i[e]:!1}function zd(){return Pd}var Qd=A({},ud,{key:function(e){if(e.key){var i=Md[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=od(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(e){return e.type==="keypress"?od(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?od(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=" ",fe=!1;function ge(e,i){switch(e){case"keyup":return $d.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ie=!1;function je(e,i){switch(e){case"compositionend":return he(i);case"keypress":return i.which!==32?null:(fe=!0,ee);case"textInput":return e=i.data,e===ee&&fe?null:e;default:return null}}function ke(e,i){if(ie)return e==="compositionend"||!ae&&ge(e,i)?(e=nd(),md=ld=kd=null,ie=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return de&&i.locale!=="ko"?null:i.data;default:return null}}var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!le[e.type]:i==="textarea"}function ne(e,i,o,a){Eb(a),i=oe(i,"onChange"),0<i.length&&(o=new td("onChange","change",null,o,a),e.push({event:o,listeners:i}))}var pe=null,qe=null;function re(e){se(e,0)}function te(e){var i=ue(e);if(Wa(i))return e}function ve(e,i){if(e==="change")return i}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;"),ye=typeof ze.oninput=="function"}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(e){if(e.propertyName==="value"&&te(qe)){var i=[];ne(i,qe,e,xb(e)),Jb(re,i)}}function Ce(e,i,o){e==="focusin"?(Ae(),pe=i,qe=o,pe.attachEvent("onpropertychange",Be)):e==="focusout"&&Ae()}function De(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return te(qe)}function Ee(e,i){if(e==="click")return te(i)}function Fe(e,i){if(e==="input"||e==="change")return te(i)}function Ge(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var He=typeof Object.is=="function"?Object.is:Ge;function Ie(e,i){if(He(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var o=Object.keys(e),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var s=o[a];if(!ja.call(i,s)||!He(e[s],i[s]))return!1}return!0}function Je(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ke(e,i){var o=Je(e);e=0;for(var a;o;){if(o.nodeType===3){if(a=e+o.textContent.length,e<=i&&a>=i)return{node:o,offset:i-e};e=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Je(o)}}function Le(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Le(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Me(){for(var e=window,i=Xa();i instanceof e.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)e=i.contentWindow;else break;i=Xa(e.document)}return i}function Ne(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function Oe(e){var i=Me(),o=e.focusedElem,a=e.selectionRange;if(i!==o&&o&&o.ownerDocument&&Le(o.ownerDocument.documentElement,o)){if(a!==null&&Ne(o)){if(i=a.start,e=a.end,e===void 0&&(e=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(e,o.value.length);else if(e=(i=o.ownerDocument||document)&&i.defaultView||window,e.getSelection){e=e.getSelection();var s=o.textContent.length,c=Math.min(a.start,s);a=a.end===void 0?c:Math.min(a.end,s),!e.extend&&c>a&&(s=a,a=c,c=s),s=Ke(o,c);var d=Ke(o,a);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(i=i.createRange(),i.setStart(s.node,s.offset),e.removeAllRanges(),c>a?(e.addRange(i),e.extend(d.node,d.offset)):(i.setEnd(d.node,d.offset),e.addRange(i)))}}for(i=[],e=o;e=e.parentNode;)e.nodeType===1&&i.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)e=i[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;function Ue(e,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Te||Qe==null||Qe!==Xa(a)||(a=Qe,"selectionStart"in a&&Ne(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Se&&Ie(Se,a)||(Se=a,a=oe(Re,"onSelect"),0<a.length&&(i=new td("onSelect","select",null,i,o),e.push({event:i,listeners:a}),i.target=Qe)))}function Ve(e,i){var o={};return o[e.toLowerCase()]=i.toLowerCase(),o["Webkit"+e]="webkit"+i,o["Moz"+e]="moz"+i,o}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(e){if(Xe[e])return Xe[e];if(!We[e])return e;var i=We[e],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ye)return Xe[e]=i[o];return e}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ff(e,i){df.set(e,i),fa(i,[e])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));function nf(e,i,o){var a=e.type||"unknown-event";e.currentTarget=o,Ub(a,i,void 0,e),e.currentTarget=null}function se(e,i){i=(i&4)!==0;for(var o=0;o<e.length;o++){var a=e[o],s=a.event;a=a.listeners;e:{var c=void 0;if(i)for(var d=a.length-1;0<=d;d--){var _=a[d],h=_.instance,g=_.currentTarget;if(_=_.listener,h!==c&&s.isPropagationStopped())break e;nf(s,_,g),c=h}else for(d=0;d<a.length;d++){if(_=a[d],h=_.instance,g=_.currentTarget,_=_.listener,h!==c&&s.isPropagationStopped())break e;nf(s,_,g),c=h}}}if(Qb)throw e=Rb,Qb=!1,Rb=null,e}function D(e,i){var o=i[of];o===void 0&&(o=i[of]=new Set);var a=e+"__bubble";o.has(a)||(pf(i,e,2,!1),o.add(a))}function qf(e,i,o){var a=0;i&&(a|=4),pf(o,e,a,i)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(e){if(!e[rf]){e[rf]=!0,da.forEach(function(o){o!=="selectionchange"&&(mf.has(o)||qf(o,!1,e),qf(o,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[rf]||(i[rf]=!0,qf("selectionchange",!1,i))}}function pf(e,i,o,a){switch(jd(i)){case 1:var s=ed;break;case 4:s=gd;break;default:s=fd}o=s.bind(null,i,o,e),s=void 0,!Lb||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(s=!0),a?s!==void 0?e.addEventListener(i,o,{capture:!0,passive:s}):e.addEventListener(i,o,!0):s!==void 0?e.addEventListener(i,o,{passive:s}):e.addEventListener(i,o,!1)}function hd(e,i,o,a,s){var c=a;if(!(i&1)&&!(i&2)&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var _=a.stateNode.containerInfo;if(_===s||_.nodeType===8&&_.parentNode===s)break;if(d===4)for(d=a.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===s||h.nodeType===8&&h.parentNode===s))return;d=d.return}for(;_!==null;){if(d=Wc(_),d===null)return;if(h=d.tag,h===5||h===6){a=c=d;continue e}_=_.parentNode}}a=a.return}Jb(function(){var g=c,nt=xb(o),_e=[];e:{var tt=df.get(e);if(tt!==void 0){var st=td,ft=e;switch(e){case"keypress":if(od(o)===0)break e;case"keydown":case"keyup":st=Rd;break;case"focusin":ft="focus",st=Fd;break;case"focusout":ft="blur",st=Fd;break;case"beforeblur":case"afterblur":st=Fd;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Vd;break;case $e:case af:case bf:st=Hd;break;case cf:st=Xd;break;case"scroll":st=vd;break;case"wheel":st=Zd;break;case"copy":case"cut":case"paste":st=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Td}var ut=(i&4)!==0,_t=!ut&&e==="scroll",b=ut?tt!==null?tt+"Capture":null:tt;ut=[];for(var $=g,et;$!==null;){et=$;var ct=et.stateNode;if(et.tag===5&&ct!==null&&(et=ct,b!==null&&(ct=Kb($,b),ct!=null&&ut.push(tf($,ct,et)))),_t)break;$=$.return}0<ut.length&&(tt=new st(tt,ft,null,o,nt),_e.push({event:tt,listeners:ut}))}}if(!(i&7)){e:{if(tt=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",tt&&o!==wb&&(ft=o.relatedTarget||o.fromElement)&&(Wc(ft)||ft[uf]))break e;if((st||tt)&&(tt=nt.window===nt?nt:(tt=nt.ownerDocument)?tt.defaultView||tt.parentWindow:window,st?(ft=o.relatedTarget||o.toElement,st=g,ft=ft?Wc(ft):null,ft!==null&&(_t=Vb(ft),ft!==_t||ft.tag!==5&&ft.tag!==6)&&(ft=null)):(st=null,ft=g),st!==ft)){if(ut=Bd,ct="onMouseLeave",b="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(ut=Td,ct="onPointerLeave",b="onPointerEnter",$="pointer"),_t=st==null?tt:ue(st),et=ft==null?tt:ue(ft),tt=new ut(ct,$+"leave",st,o,nt),tt.target=_t,tt.relatedTarget=et,ct=null,Wc(nt)===g&&(ut=new ut(b,$+"enter",ft,o,nt),ut.target=et,ut.relatedTarget=_t,ct=ut),_t=ct,st&&ft)t:{for(ut=st,b=ft,$=0,et=ut;et;et=vf(et))$++;for(et=0,ct=b;ct;ct=vf(ct))et++;for(;0<$-et;)ut=vf(ut),$--;for(;0<et-$;)b=vf(b),et--;for(;$--;){if(ut===b||b!==null&&ut===b.alternate)break t;ut=vf(ut),b=vf(b)}ut=null}else ut=null;st!==null&&wf(_e,tt,st,ut,!1),ft!==null&&_t!==null&&wf(_e,_t,ft,ut,!0)}}e:{if(tt=g?ue(g):window,st=tt.nodeName&&tt.nodeName.toLowerCase(),st==="select"||st==="input"&&tt.type==="file")var ht=ve;else if(me(tt))if(we)ht=Fe;else{ht=De;var vt=Ce}else(st=tt.nodeName)&&st.toLowerCase()==="input"&&(tt.type==="checkbox"||tt.type==="radio")&&(ht=Ee);if(ht&&(ht=ht(e,g))){ne(_e,ht,o,nt);break e}vt&&vt(e,tt,g),e==="focusout"&&(vt=tt._wrapperState)&&vt.controlled&&tt.type==="number"&&cb(tt,"number",tt.value)}switch(vt=g?ue(g):window,e){case"focusin":(me(vt)||vt.contentEditable==="true")&&(Qe=vt,Re=g,Se=null);break;case"focusout":Se=Re=Qe=null;break;case"mousedown":Te=!0;break;case"contextmenu":case"mouseup":case"dragend":Te=!1,Ue(_e,o,nt);break;case"selectionchange":if(Pe)break;case"keydown":case"keyup":Ue(_e,o,nt)}var yt;if(ae)e:{switch(e){case"compositionstart":var $t="onCompositionStart";break e;case"compositionend":$t="onCompositionEnd";break e;case"compositionupdate":$t="onCompositionUpdate";break e}$t=void 0}else ie?ge(e,o)&&($t="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&($t="onCompositionStart");$t&&(de&&o.locale!=="ko"&&(ie||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&ie&&(yt=nd()):(kd=nt,ld="value"in kd?kd.value:kd.textContent,ie=!0)),vt=oe(g,$t),0<vt.length&&($t=new Ld($t,e,null,o,nt),_e.push({event:$t,listeners:vt}),yt?$t.data=yt:(yt=he(o),yt!==null&&($t.data=yt)))),(yt=ce?je(e,o):ke(e,o))&&(g=oe(g,"onBeforeInput"),0<g.length&&(nt=new Ld("onBeforeInput","beforeinput",null,o,nt),_e.push({event:nt,listeners:g}),nt.data=yt))}se(_e,i)})}function tf(e,i,o){return{instance:e,listener:i,currentTarget:o}}function oe(e,i){for(var o=i+"Capture",a=[];e!==null;){var s=e,c=s.stateNode;s.tag===5&&c!==null&&(s=c,c=Kb(e,o),c!=null&&a.unshift(tf(e,c,s)),c=Kb(e,i),c!=null&&a.push(tf(e,c,s))),e=e.return}return a}function vf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wf(e,i,o,a,s){for(var c=i._reactName,d=[];o!==null&&o!==a;){var _=o,h=_.alternate,g=_.stateNode;if(h!==null&&h===a)break;_.tag===5&&g!==null&&(_=g,s?(h=Kb(o,c),h!=null&&d.unshift(tf(o,h,_))):s||(h=Kb(o,c),h!=null&&d.push(tf(o,h,_)))),o=o.return}d.length!==0&&e.push({event:i,listeners:d})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(e){return(typeof e=="string"?e:""+e).replace(xf,`
`).replace(yf,"")}function Af(e,i,o){if(i=zf(i),zf(e)!==i&&o)throw Error(p(425))}function Bf(){}var Cf=null,Df=null;function Ef(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(e){return Hf.resolve(null).then(e).catch(If)}:Ff;function If(e){setTimeout(function(){throw e})}function Kf(e,i){var o=i,a=0;do{var s=o.nextSibling;if(e.removeChild(o),s&&s.nodeType===8)if(o=s.data,o==="/$"){if(a===0){e.removeChild(s),bd(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=s}while(o);bd(i)}function Lf(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return e}function Mf(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return e;i--}else o==="/$"&&i++}e=e.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;function Wc(e){var i=e[Of];if(i)return i;for(var o=e.parentNode;o;){if(i=o[uf]||o[Of]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(e=Mf(e);e!==null;){if(o=e[Of])return o;e=Mf(e)}return i}e=o,o=e.parentNode}return null}function Cb(e){return e=e[Of]||e[uf],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ue(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function Db(e){return e[Pf]||null}var Sf=[],Tf=-1;function Uf(e){return{current:e}}function E(e){0>Tf||(e.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(e,i){Tf++,Sf[Tf]=e.current,e.current=i}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(e,i){var o=e.type.contextTypes;if(!o)return Vf;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var s={},c;for(c in o)s[c]=i[c];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),s}function Zf(e){return e=e.childContextTypes,e!=null}function $f(){E(Wf),E(H)}function ag(e,i,o){if(H.current!==Vf)throw Error(p(168));G(H,i),G(Wf,o)}function bg(e,i,o){var a=e.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var s in a)if(!(s in i))throw Error(p(108,Ra(e)||"Unknown",s));return A({},o,a)}function cg(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vf,Xf=H.current,G(H,e),G(Wf,Wf.current),!0}function dg(e,i,o){var a=e.stateNode;if(!a)throw Error(p(169));o?(e=bg(e,i,Xf),a.__reactInternalMemoizedMergedChildContext=e,E(Wf),E(H),G(H,e)):E(Wf),G(Wf,o)}var eg=null,fg=!1,gg=!1;function hg(e){eg===null?eg=[e]:eg.push(e)}function ig(e){fg=!0,hg(e)}function jg(){if(!gg&&eg!==null){gg=!0;var e=0,i=C;try{var o=eg;for(C=1;e<o.length;e++){var a=o[e];do a=a(!0);while(a!==null)}eg=null,fg=!1}catch(s){throw eg!==null&&(eg=eg.slice(e+1)),ac(fc,jg),s}finally{C=i,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(e,i){kg[lg++]=ng,kg[lg++]=mg,mg=e,ng=i}function ug(e,i,o){og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,qg=e;var a=rg;e=sg;var s=32-oc(a)-1;a&=~(1<<s),o+=1;var c=32-oc(i)+s;if(30<c){var d=s-s%5;c=(a&(1<<d)-1).toString(32),a>>=d,s-=d,rg=1<<32-oc(i)+s|o<<s|a,sg=c+e}else rg=1<<c|o<<s|a,sg=e}function vg(e){e.return!==null&&(tg(e,1),ug(e,1,0))}function wg(e){for(;e===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;e===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;function Ag(e,i){var o=Bg(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=e,i=e.deletions,i===null?(e.deletions=[o],e.flags|=16):i.push(o)}function Cg(e,i){switch(e.tag){case 5:var o=e.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(e.stateNode=i,xg=e,yg=Lf(i.firstChild),!0):!1;case 6:return i=e.pendingProps===""||i.nodeType!==3?null:i,i!==null?(e.stateNode=i,xg=e,yg=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=qg!==null?{id:rg,overflow:sg}:null,e.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Bg(18,null,null,0),o.stateNode=i,o.return=e,e.child=o,xg=e,yg=null,!0):!1;default:return!1}}function Dg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Eg(e){if(I){var i=yg;if(i){var o=i;if(!Cg(e,i)){if(Dg(e))throw Error(p(418));i=Lf(o.nextSibling);var a=xg;i&&Cg(e,i)?Ag(a,o):(e.flags=e.flags&-4097|2,I=!1,xg=e)}}else{if(Dg(e))throw Error(p(418));e.flags=e.flags&-4097|2,I=!1,xg=e}}}function Fg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xg=e}function Gg(e){if(e!==xg)return!1;if(!I)return Fg(e),I=!0,!1;var i;if((i=e.tag!==3)&&!(i=e.tag!==5)&&(i=e.type,i=i!=="head"&&i!=="body"&&!Ef(e.type,e.memoizedProps)),i&&(i=yg)){if(Dg(e))throw Hg(),Error(p(418));for(;i;)Ag(e,i),i=Lf(i.nextSibling)}if(Fg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(i===0){yg=Lf(e.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}e=e.nextSibling}yg=null}}else yg=xg?Lf(e.stateNode.nextSibling):null;return!0}function Hg(){for(var e=yg;e;)e=Lf(e.nextSibling)}function Ig(){yg=xg=null,I=!1}function Jg(e){zg===null?zg=[e]:zg.push(e)}var Kg=ua.ReactCurrentBatchConfig;function Lg(e,i,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(p(309));var a=o.stateNode}if(!a)throw Error(p(147,e));var s=a,c=""+e;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===c?i.ref:(i=function(d){var _=s.refs;d===null?delete _[c]:_[c]=d},i._stringRef=c,i)}if(typeof e!="string")throw Error(p(284));if(!o._owner)throw Error(p(290,e))}return e}function Mg(e,i){throw e=Object.prototype.toString.call(i),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e))}function Ng(e){var i=e._init;return i(e._payload)}function Og(e){function i(b,$){if(e){var et=b.deletions;et===null?(b.deletions=[$],b.flags|=16):et.push($)}}function o(b,$){if(!e)return null;for(;$!==null;)i(b,$),$=$.sibling;return null}function a(b,$){for(b=new Map;$!==null;)$.key!==null?b.set($.key,$):b.set($.index,$),$=$.sibling;return b}function s(b,$){return b=Pg(b,$),b.index=0,b.sibling=null,b}function c(b,$,et){return b.index=et,e?(et=b.alternate,et!==null?(et=et.index,et<$?(b.flags|=2,$):et):(b.flags|=2,$)):(b.flags|=1048576,$)}function d(b){return e&&b.alternate===null&&(b.flags|=2),b}function _(b,$,et,ct){return $===null||$.tag!==6?($=Qg(et,b.mode,ct),$.return=b,$):($=s($,et),$.return=b,$)}function h(b,$,et,ct){var ht=et.type;return ht===ya?nt(b,$,et.props.children,ct,et.key):$!==null&&($.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===Ha&&Ng(ht)===$.type)?(ct=s($,et.props),ct.ref=Lg(b,$,et),ct.return=b,ct):(ct=Rg(et.type,et.key,et.props,null,b.mode,ct),ct.ref=Lg(b,$,et),ct.return=b,ct)}function g(b,$,et,ct){return $===null||$.tag!==4||$.stateNode.containerInfo!==et.containerInfo||$.stateNode.implementation!==et.implementation?($=Sg(et,b.mode,ct),$.return=b,$):($=s($,et.children||[]),$.return=b,$)}function nt(b,$,et,ct,ht){return $===null||$.tag!==7?($=Tg(et,b.mode,ct,ht),$.return=b,$):($=s($,et),$.return=b,$)}function _e(b,$,et){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Qg(""+$,b.mode,et),$.return=b,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case va:return et=Rg($.type,$.key,$.props,null,b.mode,et),et.ref=Lg(b,null,$),et.return=b,et;case wa:return $=Sg($,b.mode,et),$.return=b,$;case Ha:var ct=$._init;return _e(b,ct($._payload),et)}if(eb($)||Ka($))return $=Tg($,b.mode,et,null),$.return=b,$;Mg(b,$)}return null}function tt(b,$,et,ct){var ht=$!==null?$.key:null;if(typeof et=="string"&&et!==""||typeof et=="number")return ht!==null?null:_(b,$,""+et,ct);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case va:return et.key===ht?h(b,$,et,ct):null;case wa:return et.key===ht?g(b,$,et,ct):null;case Ha:return ht=et._init,tt(b,$,ht(et._payload),ct)}if(eb(et)||Ka(et))return ht!==null?null:nt(b,$,et,ct,null);Mg(b,et)}return null}function st(b,$,et,ct,ht){if(typeof ct=="string"&&ct!==""||typeof ct=="number")return b=b.get(et)||null,_($,b,""+ct,ht);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case va:return b=b.get(ct.key===null?et:ct.key)||null,h($,b,ct,ht);case wa:return b=b.get(ct.key===null?et:ct.key)||null,g($,b,ct,ht);case Ha:var vt=ct._init;return st(b,$,et,vt(ct._payload),ht)}if(eb(ct)||Ka(ct))return b=b.get(et)||null,nt($,b,ct,ht,null);Mg($,ct)}return null}function ft(b,$,et,ct){for(var ht=null,vt=null,yt=$,$t=$=0,xt=null;yt!==null&&$t<et.length;$t++){yt.index>$t?(xt=yt,yt=null):xt=yt.sibling;var Rt=tt(b,yt,et[$t],ct);if(Rt===null){yt===null&&(yt=xt);break}e&&yt&&Rt.alternate===null&&i(b,yt),$=c(Rt,$,$t),vt===null?ht=Rt:vt.sibling=Rt,vt=Rt,yt=xt}if($t===et.length)return o(b,yt),I&&tg(b,$t),ht;if(yt===null){for(;$t<et.length;$t++)yt=_e(b,et[$t],ct),yt!==null&&($=c(yt,$,$t),vt===null?ht=yt:vt.sibling=yt,vt=yt);return I&&tg(b,$t),ht}for(yt=a(b,yt);$t<et.length;$t++)xt=st(yt,b,$t,et[$t],ct),xt!==null&&(e&&xt.alternate!==null&&yt.delete(xt.key===null?$t:xt.key),$=c(xt,$,$t),vt===null?ht=xt:vt.sibling=xt,vt=xt);return e&&yt.forEach(function(Ot){return i(b,Ot)}),I&&tg(b,$t),ht}function ut(b,$,et,ct){var ht=Ka(et);if(typeof ht!="function")throw Error(p(150));if(et=ht.call(et),et==null)throw Error(p(151));for(var vt=ht=null,yt=$,$t=$=0,xt=null,Rt=et.next();yt!==null&&!Rt.done;$t++,Rt=et.next()){yt.index>$t?(xt=yt,yt=null):xt=yt.sibling;var Ot=tt(b,yt,Rt.value,ct);if(Ot===null){yt===null&&(yt=xt);break}e&&yt&&Ot.alternate===null&&i(b,yt),$=c(Ot,$,$t),vt===null?ht=Ot:vt.sibling=Ot,vt=Ot,yt=xt}if(Rt.done)return o(b,yt),I&&tg(b,$t),ht;if(yt===null){for(;!Rt.done;$t++,Rt=et.next())Rt=_e(b,Rt.value,ct),Rt!==null&&($=c(Rt,$,$t),vt===null?ht=Rt:vt.sibling=Rt,vt=Rt);return I&&tg(b,$t),ht}for(yt=a(b,yt);!Rt.done;$t++,Rt=et.next())Rt=st(yt,b,$t,Rt.value,ct),Rt!==null&&(e&&Rt.alternate!==null&&yt.delete(Rt.key===null?$t:Rt.key),$=c(Rt,$,$t),vt===null?ht=Rt:vt.sibling=Rt,vt=Rt);return e&&yt.forEach(function(zt){return i(b,zt)}),I&&tg(b,$t),ht}function _t(b,$,et,ct){if(typeof et=="object"&&et!==null&&et.type===ya&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case va:e:{for(var ht=et.key,vt=$;vt!==null;){if(vt.key===ht){if(ht=et.type,ht===ya){if(vt.tag===7){o(b,vt.sibling),$=s(vt,et.props.children),$.return=b,b=$;break e}}else if(vt.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===Ha&&Ng(ht)===vt.type){o(b,vt.sibling),$=s(vt,et.props),$.ref=Lg(b,vt,et),$.return=b,b=$;break e}o(b,vt);break}else i(b,vt);vt=vt.sibling}et.type===ya?($=Tg(et.props.children,b.mode,ct,et.key),$.return=b,b=$):(ct=Rg(et.type,et.key,et.props,null,b.mode,ct),ct.ref=Lg(b,$,et),ct.return=b,b=ct)}return d(b);case wa:e:{for(vt=et.key;$!==null;){if($.key===vt)if($.tag===4&&$.stateNode.containerInfo===et.containerInfo&&$.stateNode.implementation===et.implementation){o(b,$.sibling),$=s($,et.children||[]),$.return=b,b=$;break e}else{o(b,$);break}else i(b,$);$=$.sibling}$=Sg(et,b.mode,ct),$.return=b,b=$}return d(b);case Ha:return vt=et._init,_t(b,$,vt(et._payload),ct)}if(eb(et))return ft(b,$,et,ct);if(Ka(et))return ut(b,$,et,ct);Mg(b,et)}return typeof et=="string"&&et!==""||typeof et=="number"?(et=""+et,$!==null&&$.tag===6?(o(b,$.sibling),$=s($,et),$.return=b,b=$):(o(b,$),$=Qg(et,b.mode,ct),$.return=b,b=$),d(b)):o(b,$)}return _t}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(e){var i=Wg.current;E(Wg),e._currentValue=i}function bh(e,i,o){for(;e!==null;){var a=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),e===o)break;e=e.return}}function ch(e,i){Xg=e,Zg=Yg=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&i&&(dh=!0),e.firstContext=null)}function eh(e){var i=e._currentValue;if(Zg!==e)if(e={context:e,memoizedValue:i,next:null},Yg===null){if(Xg===null)throw Error(p(308));Yg=e,Xg.dependencies={lanes:0,firstContext:e}}else Yg=Yg.next=e;return i}var fh=null;function gh(e){fh===null?fh=[e]:fh.push(e)}function hh(e,i,o,a){var s=i.interleaved;return s===null?(o.next=o,gh(i)):(o.next=s.next,s.next=o),i.interleaved=o,ih(e,a)}function ih(e,i){e.lanes|=i;var o=e.alternate;for(o!==null&&(o.lanes|=i),o=e,e=e.return;e!==null;)e.childLanes|=i,o=e.alternate,o!==null&&(o.childLanes|=i),o=e,e=e.return;return o.tag===3?o.stateNode:null}var jh=!1;function kh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mh(e,i){return{eventTime:e,lane:i,tag:0,payload:null,callback:null,next:null}}function nh(e,i,o){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,K&2){var s=a.pending;return s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i,ih(e,o)}return s=a.interleaved,s===null?(i.next=i,gh(a)):(i.next=s.next,s.next=i),a.interleaved=i,ih(e,o)}function oh(e,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=e.pendingLanes,o|=a,i.lanes=o,Cc(e,o)}}function ph(e,i){var o=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var s=null,c=null;if(o=o.firstBaseUpdate,o!==null){do{var d={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};c===null?s=c=d:c=c.next=d,o=o.next}while(o!==null);c===null?s=c=i:c=c.next=i}else s=c=i;o={baseState:a.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:a.shared,effects:a.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=i:e.next=i,o.lastBaseUpdate=i}function qh(e,i,o,a){var s=e.updateQueue;jh=!1;var c=s.firstBaseUpdate,d=s.lastBaseUpdate,_=s.shared.pending;if(_!==null){s.shared.pending=null;var h=_,g=h.next;h.next=null,d===null?c=g:d.next=g,d=h;var nt=e.alternate;nt!==null&&(nt=nt.updateQueue,_=nt.lastBaseUpdate,_!==d&&(_===null?nt.firstBaseUpdate=g:_.next=g,nt.lastBaseUpdate=h))}if(c!==null){var _e=s.baseState;d=0,nt=g=h=null,_=c;do{var tt=_.lane,st=_.eventTime;if((a&tt)===tt){nt!==null&&(nt=nt.next={eventTime:st,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var ft=e,ut=_;switch(tt=i,st=o,ut.tag){case 1:if(ft=ut.payload,typeof ft=="function"){_e=ft.call(st,_e,tt);break e}_e=ft;break e;case 3:ft.flags=ft.flags&-65537|128;case 0:if(ft=ut.payload,tt=typeof ft=="function"?ft.call(st,_e,tt):ft,tt==null)break e;_e=A({},_e,tt);break e;case 2:jh=!0}}_.callback!==null&&_.lane!==0&&(e.flags|=64,tt=s.effects,tt===null?s.effects=[_]:tt.push(_))}else st={eventTime:st,lane:tt,tag:_.tag,payload:_.payload,callback:_.callback,next:null},nt===null?(g=nt=st,h=_e):nt=nt.next=st,d|=tt;if(_=_.next,_===null){if(_=s.shared.pending,_===null)break;tt=_,_=tt.next,tt.next=null,s.lastBaseUpdate=tt,s.shared.pending=null}}while(!0);if(nt===null&&(h=_e),s.baseState=h,s.firstBaseUpdate=g,s.lastBaseUpdate=nt,i=s.shared.interleaved,i!==null){s=i;do d|=s.lane,s=s.next;while(s!==i)}else c===null&&(s.shared.lanes=0);rh|=d,e.lanes=d,e.memoizedState=_e}}function sh(e,i,o){if(e=i.effects,i.effects=null,e!==null)for(i=0;i<e.length;i++){var a=e[i],s=a.callback;if(s!==null){if(a.callback=null,a=o,typeof s!="function")throw Error(p(191,s));s.call(a)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(e){if(e===th)throw Error(p(174));return e}function yh(e,i){switch(G(wh,i),G(vh,e),G(uh,th),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:lb(null,"");break;default:e=e===8?i.parentNode:i,i=e.namespaceURI||null,e=e.tagName,i=lb(i,e)}E(uh),G(uh,i)}function zh(){E(uh),E(vh),E(wh)}function Ah(e){xh(wh.current);var i=xh(uh.current),o=lb(i,e.type);i!==o&&(G(vh,e),G(uh,o))}function Bh(e){vh.current===e&&(E(uh),E(vh))}var L=Uf(0);function Ch(e){for(var i=e;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Dh=[];function Eh(){for(var e=0;e<Dh.length;e++)Dh[e]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321))}function Mh(e,i){if(i===null)return!1;for(var o=0;o<i.length&&o<e.length;o++)if(!He(e[o],i[o]))return!1;return!0}function Nh(e,i,o,a,s,c){if(Hh=c,M=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Fh.current=e===null||e.memoizedState===null?Oh:Ph,e=o(a,s),Jh){c=0;do{if(Jh=!1,Kh=0,25<=c)throw Error(p(301));c+=1,O=N=null,i.updateQueue=null,Fh.current=Qh,e=o(a,s)}while(Jh)}if(Fh.current=Rh,i=N!==null&&N.next!==null,Hh=0,O=N=M=null,Ih=!1,i)throw Error(p(300));return e}function Sh(){var e=Kh!==0;return Kh=0,e}function Th(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return O===null?M.memoizedState=O=e:O=O.next=e,O}function Uh(){if(N===null){var e=M.alternate;e=e!==null?e.memoizedState:null}else e=N.next;var i=O===null?M.memoizedState:O.next;if(i!==null)O=i,N=e;else{if(e===null)throw Error(p(310));N=e,e={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null},O===null?M.memoizedState=O=e:O=O.next=e}return O}function Vh(e,i){return typeof i=="function"?i(e):i}function Wh(e){var i=Uh(),o=i.queue;if(o===null)throw Error(p(311));o.lastRenderedReducer=e;var a=N,s=a.baseQueue,c=o.pending;if(c!==null){if(s!==null){var d=s.next;s.next=c.next,c.next=d}a.baseQueue=s=c,o.pending=null}if(s!==null){c=s.next,a=a.baseState;var _=d=null,h=null,g=c;do{var nt=g.lane;if((Hh&nt)===nt)h!==null&&(h=h.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),a=g.hasEagerState?g.eagerState:e(a,g.action);else{var _e={lane:nt,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};h===null?(_=h=_e,d=a):h=h.next=_e,M.lanes|=nt,rh|=nt}g=g.next}while(g!==null&&g!==c);h===null?d=a:h.next=_,He(a,i.memoizedState)||(dh=!0),i.memoizedState=a,i.baseState=d,i.baseQueue=h,o.lastRenderedState=a}if(e=o.interleaved,e!==null){s=e;do c=s.lane,M.lanes|=c,rh|=c,s=s.next;while(s!==e)}else s===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Xh(e){var i=Uh(),o=i.queue;if(o===null)throw Error(p(311));o.lastRenderedReducer=e;var a=o.dispatch,s=o.pending,c=i.memoizedState;if(s!==null){o.pending=null;var d=s=s.next;do c=e(c,d.action),d=d.next;while(d!==s);He(c,i.memoizedState)||(dh=!0),i.memoizedState=c,i.baseQueue===null&&(i.baseState=c),o.lastRenderedState=c}return[c,a]}function Yh(){}function Zh(e,i){var o=M,a=Uh(),s=i(),c=!He(a.memoizedState,s);if(c&&(a.memoizedState=s,dh=!0),a=a.queue,$h(ai.bind(null,o,a,e),[e]),a.getSnapshot!==i||c||O!==null&&O.memoizedState.tag&1){if(o.flags|=2048,bi(9,ci.bind(null,o,a,s,i),void 0,null),Q===null)throw Error(p(349));Hh&30||di(o,i,s)}return s}function di(e,i,o){e.flags|=16384,e={getSnapshot:i,value:o},i=M.updateQueue,i===null?(i={lastEffect:null,stores:null},M.updateQueue=i,i.stores=[e]):(o=i.stores,o===null?i.stores=[e]:o.push(e))}function ci(e,i,o,a){i.value=o,i.getSnapshot=a,ei(i)&&fi(e)}function ai(e,i,o){return o(function(){ei(i)&&fi(e)})}function ei(e){var i=e.getSnapshot;e=e.value;try{var o=i();return!He(e,o)}catch{return!0}}function fi(e){var i=ih(e,1);i!==null&&gi(i,e,1,-1)}function hi(e){var i=Th();return typeof e=="function"&&(e=e()),i.memoizedState=i.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:e},i.queue=e,e=e.dispatch=ii.bind(null,M,e),[i.memoizedState,e]}function bi(e,i,o,a){return e={tag:e,create:i,destroy:o,deps:a,next:null},i=M.updateQueue,i===null?(i={lastEffect:null,stores:null},M.updateQueue=i,i.lastEffect=e.next=e):(o=i.lastEffect,o===null?i.lastEffect=e.next=e:(a=o.next,o.next=e,e.next=a,i.lastEffect=e)),e}function ji(){return Uh().memoizedState}function ki(e,i,o,a){var s=Th();M.flags|=e,s.memoizedState=bi(1|i,o,void 0,a===void 0?null:a)}function li(e,i,o,a){var s=Uh();a=a===void 0?null:a;var c=void 0;if(N!==null){var d=N.memoizedState;if(c=d.destroy,a!==null&&Mh(a,d.deps)){s.memoizedState=bi(i,o,c,a);return}}M.flags|=e,s.memoizedState=bi(1|i,o,c,a)}function mi(e,i){return ki(8390656,8,e,i)}function $h(e,i){return li(2048,8,e,i)}function ni(e,i){return li(4,2,e,i)}function oi(e,i){return li(4,4,e,i)}function pi(e,i){if(typeof i=="function")return e=e(),i(e),function(){i(null)};if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function qi(e,i,o){return o=o!=null?o.concat([e]):null,li(4,4,pi.bind(null,i,e),o)}function ri(){}function si(e,i){var o=Uh();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&Mh(i,a[1])?a[0]:(o.memoizedState=[e,i],e)}function ti(e,i){var o=Uh();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&Mh(i,a[1])?a[0]:(e=e(),o.memoizedState=[e,i],e)}function ui(e,i,o){return Hh&21?(He(o,i)||(o=yc(),M.lanes|=o,rh|=o,e.baseState=!0),i):(e.baseState&&(e.baseState=!1,dh=!0),e.memoizedState=o)}function vi(e,i){var o=C;C=o!==0&&4>o?o:4,e(!0);var a=Gh.transition;Gh.transition={};try{e(!1),i()}finally{C=o,Gh.transition=a}}function wi(){return Uh().memoizedState}function xi(e,i,o){var a=yi(e);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},zi(e))Ai(i,o);else if(o=hh(e,i,o,a),o!==null){var s=R();gi(o,e,a,s),Bi(o,i,a)}}function ii(e,i,o){var a=yi(e),s={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(zi(e))Ai(i,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=i.lastRenderedReducer,c!==null))try{var d=i.lastRenderedState,_=c(d,o);if(s.hasEagerState=!0,s.eagerState=_,He(_,d)){var h=i.interleaved;h===null?(s.next=s,gh(i)):(s.next=h.next,h.next=s),i.interleaved=s;return}}catch{}finally{}o=hh(e,i,s,a),o!==null&&(s=R(),gi(o,e,a,s),Bi(o,i,a))}}function zi(e){var i=e.alternate;return e===M||i!==null&&i===M}function Ai(e,i){Jh=Ih=!0;var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}function Bi(e,i,o){if(o&4194240){var a=i.lanes;a&=e.pendingLanes,o|=a,i.lanes=o,Cc(e,o)}}var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(e,i){return Th().memoizedState=[e,i===void 0?null:i],e},useContext:eh,useEffect:mi,useImperativeHandle:function(e,i,o){return o=o!=null?o.concat([e]):null,ki(4194308,4,pi.bind(null,i,e),o)},useLayoutEffect:function(e,i){return ki(4194308,4,e,i)},useInsertionEffect:function(e,i){return ki(4,2,e,i)},useMemo:function(e,i){var o=Th();return i=i===void 0?null:i,e=e(),o.memoizedState=[e,i],e},useReducer:function(e,i,o){var a=Th();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=xi.bind(null,M,e),[a.memoizedState,e]},useRef:function(e){var i=Th();return e={current:e},i.memoizedState=e},useState:hi,useDebugValue:ri,useDeferredValue:function(e){return Th().memoizedState=e},useTransition:function(){var e=hi(!1),i=e[0];return e=vi.bind(null,e[1]),Th().memoizedState=e,[i,e]},useMutableSource:function(){},useSyncExternalStore:function(e,i,o){var a=M,s=Th();if(I){if(o===void 0)throw Error(p(407));o=o()}else{if(o=i(),Q===null)throw Error(p(349));Hh&30||di(a,i,o)}s.memoizedState=o;var c={value:o,getSnapshot:i};return s.queue=c,mi(ai.bind(null,a,c,e),[e]),a.flags|=2048,bi(9,ci.bind(null,a,c,o,i),void 0,null),o},useId:function(){var e=Th(),i=Q.identifierPrefix;if(I){var o=sg,a=rg;o=(a&~(1<<32-oc(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=Kh++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Lh++,i=":"+i+"r"+o.toString(32)+":";return e.memoizedState=i},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},useDebugValue:ri,useDeferredValue:function(e){var i=Uh();return ui(i,N.memoizedState,e)},useTransition:function(){var e=Wh(Vh)[0],i=Uh().memoizedState;return[e,i]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(e){var i=Uh();return N===null?i.memoizedState=e:ui(i,N.memoizedState,e)},useTransition:function(){var e=Xh(Vh)[0],i=Uh().memoizedState;return[e,i]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(e,i){if(e&&e.defaultProps){i=A({},i),e=e.defaultProps;for(var o in e)i[o]===void 0&&(i[o]=e[o]);return i}return i}function Di(e,i,o,a){i=e.memoizedState,o=o(a,i),o=o==null?i:A({},i,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Ei={isMounted:function(e){return(e=e._reactInternals)?Vb(e)===e:!1},enqueueSetState:function(e,i,o){e=e._reactInternals;var a=R(),s=yi(e),c=mh(a,s);c.payload=i,o!=null&&(c.callback=o),i=nh(e,c,s),i!==null&&(gi(i,e,s,a),oh(i,e,s))},enqueueReplaceState:function(e,i,o){e=e._reactInternals;var a=R(),s=yi(e),c=mh(a,s);c.tag=1,c.payload=i,o!=null&&(c.callback=o),i=nh(e,c,s),i!==null&&(gi(i,e,s,a),oh(i,e,s))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var o=R(),a=yi(e),s=mh(o,a);s.tag=2,i!=null&&(s.callback=i),i=nh(e,s,a),i!==null&&(gi(i,e,a,o),oh(i,e,a))}};function Fi(e,i,o,a,s,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,d):i.prototype&&i.prototype.isPureReactComponent?!Ie(o,a)||!Ie(s,c):!0}function Gi(e,i,o){var a=!1,s=Vf,c=i.contextType;return typeof c=="object"&&c!==null?c=eh(c):(s=Zf(i)?Xf:H.current,a=i.contextTypes,c=(a=a!=null)?Yf(e,s):Vf),i=new i(o,c),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ei,e.stateNode=i,i._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=c),i}function Hi(e,i,o,a){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==e&&Ei.enqueueReplaceState(i,i.state,null)}function Ii(e,i,o,a){var s=e.stateNode;s.props=o,s.state=e.memoizedState,s.refs={},kh(e);var c=i.contextType;typeof c=="object"&&c!==null?s.context=eh(c):(c=Zf(i)?Xf:H.current,s.context=Yf(e,c)),s.state=e.memoizedState,c=i.getDerivedStateFromProps,typeof c=="function"&&(Di(e,i,c,o),s.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(i=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),i!==s.state&&Ei.enqueueReplaceState(s,s.state,null),qh(e,o,s,a),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Ji(e,i){try{var o="",a=i;do o+=Pa(a),a=a.return;while(a);var s=o}catch(c){s=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:i,stack:s,digest:null}}function Ki(e,i,o){return{value:e,source:null,stack:o??null,digest:i??null}}function Li(e,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Mi=typeof WeakMap=="function"?WeakMap:Map;function Ni(e,i,o){o=mh(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Oi||(Oi=!0,Pi=a),Li(e,i)},o}function Qi(e,i,o){o=mh(-1,o),o.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;o.payload=function(){return a(s)},o.callback=function(){Li(e,i)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(o.callback=function(){Li(e,i),typeof a!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var d=i.stack;this.componentDidCatch(i.value,{componentStack:d!==null?d:""})}),o}function Si(e,i,o){var a=e.pingCache;if(a===null){a=e.pingCache=new Mi;var s=new Set;a.set(i,s)}else s=a.get(i),s===void 0&&(s=new Set,a.set(i,s));s.has(o)||(s.add(o),e=Ti.bind(null,e,i,o),i.then(e,e))}function Ui(e){do{var i;if((i=e.tag===13)&&(i=e.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return e;e=e.return}while(e!==null);return null}function Vi(e,i,o,a,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===i?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=mh(-1,1),i.tag=2,nh(o,i,1))),o.lanes|=1),e)}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(e,i,o,a){i.child=e===null?Vg(i,null,o,a):Ug(i,e.child,o,a)}function Yi(e,i,o,a,s){o=o.render;var c=i.ref;return ch(i,s),a=Nh(e,i,o,a,c,s),o=Sh(),e!==null&&!dh?(i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s,Zi(e,i,s)):(I&&o&&vg(i),i.flags|=1,Xi(e,i,a,s),i.child)}function $i(e,i,o,a,s){if(e===null){var c=o.type;return typeof c=="function"&&!aj(c)&&c.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=c,bj(e,i,c,a,s)):(e=Rg(o.type,null,a,i,i.mode,s),e.ref=i.ref,e.return=i,i.child=e)}if(c=e.child,!(e.lanes&s)){var d=c.memoizedProps;if(o=o.compare,o=o!==null?o:Ie,o(d,a)&&e.ref===i.ref)return Zi(e,i,s)}return i.flags|=1,e=Pg(c,a),e.ref=i.ref,e.return=i,i.child=e}function bj(e,i,o,a,s){if(e!==null){var c=e.memoizedProps;if(Ie(c,a)&&e.ref===i.ref)if(dh=!1,i.pendingProps=a=c,(e.lanes&s)!==0)e.flags&131072&&(dh=!0);else return i.lanes=e.lanes,Zi(e,i,s)}return cj(e,i,o,a,s)}function dj(e,i,o){var a=i.pendingProps,s=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=o;else{if(!(o&1073741824))return e=c!==null?c.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:e,cachePool:null,transitions:null},i.updateQueue=null,G(ej,fj),fj|=e,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=c!==null?c.baseLanes:o,G(ej,fj),fj|=a}else c!==null?(a=c.baseLanes|o,i.memoizedState=null):a=o,G(ej,fj),fj|=a;return Xi(e,i,s,o),i.child}function gj(e,i){var o=i.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function cj(e,i,o,a,s){var c=Zf(o)?Xf:H.current;return c=Yf(i,c),ch(i,s),o=Nh(e,i,o,a,c,s),a=Sh(),e!==null&&!dh?(i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s,Zi(e,i,s)):(I&&a&&vg(i),i.flags|=1,Xi(e,i,o,s),i.child)}function hj(e,i,o,a,s){if(Zf(o)){var c=!0;cg(i)}else c=!1;if(ch(i,s),i.stateNode===null)ij(e,i),Gi(i,o,a),Ii(i,o,a,s),a=!0;else if(e===null){var d=i.stateNode,_=i.memoizedProps;d.props=_;var h=d.context,g=o.contextType;typeof g=="object"&&g!==null?g=eh(g):(g=Zf(o)?Xf:H.current,g=Yf(i,g));var nt=o.getDerivedStateFromProps,_e=typeof nt=="function"||typeof d.getSnapshotBeforeUpdate=="function";_e||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==a||h!==g)&&Hi(i,d,a,g),jh=!1;var tt=i.memoizedState;d.state=tt,qh(i,a,d,s),h=i.memoizedState,_!==a||tt!==h||Wf.current||jh?(typeof nt=="function"&&(Di(i,o,nt,a),h=i.memoizedState),(_=jh||Fi(i,o,_,a,tt,h,g))?(_e||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=h),d.props=a,d.state=h,d.context=g,a=_):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{d=i.stateNode,lh(e,i),_=i.memoizedProps,g=i.type===i.elementType?_:Ci(i.type,_),d.props=g,_e=i.pendingProps,tt=d.context,h=o.contextType,typeof h=="object"&&h!==null?h=eh(h):(h=Zf(o)?Xf:H.current,h=Yf(i,h));var st=o.getDerivedStateFromProps;(nt=typeof st=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==_e||tt!==h)&&Hi(i,d,a,h),jh=!1,tt=i.memoizedState,d.state=tt,qh(i,a,d,s);var ft=i.memoizedState;_!==_e||tt!==ft||Wf.current||jh?(typeof st=="function"&&(Di(i,o,st,a),ft=i.memoizedState),(g=jh||Fi(i,o,g,a,tt,ft,h)||!1)?(nt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,ft,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,ft,h)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&tt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&tt===e.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=ft),d.props=a,d.state=ft,d.context=h,a=g):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&tt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&tt===e.memoizedState||(i.flags|=1024),a=!1)}return jj(e,i,o,a,c,s)}function jj(e,i,o,a,s,c){gj(e,i);var d=(i.flags&128)!==0;if(!a&&!d)return s&&dg(i,o,!1),Zi(e,i,c);a=i.stateNode,Wi.current=i;var _=d&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,e!==null&&d?(i.child=Ug(i,e.child,null,c),i.child=Ug(i,null,_,c)):Xi(e,i,_,c),i.memoizedState=a.state,s&&dg(i,o,!0),i.child}function kj(e){var i=e.stateNode;i.pendingContext?ag(e,i.pendingContext,i.pendingContext!==i.context):i.context&&ag(e,i.context,!1),yh(e,i.containerInfo)}function lj(e,i,o,a,s){return Ig(),Jg(s),i.flags|=256,Xi(e,i,o,a),i.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(e){return{baseLanes:e,cachePool:null,transitions:null}}function oj(e,i,o){var a=i.pendingProps,s=L.current,c=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=e!==null&&e.memoizedState===null?!1:(s&2)!==0),_?(c=!0,i.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),G(L,s&1),e===null)return Eg(i),e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(i.mode&1?e.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(d=a.children,e=a.fallback,c?(a=i.mode,c=i.child,d={mode:"hidden",children:d},!(a&1)&&c!==null?(c.childLanes=0,c.pendingProps=d):c=pj(d,a,0,null),e=Tg(e,a,o,null),c.return=i,e.return=i,c.sibling=e,i.child=c,i.child.memoizedState=nj(o),i.memoizedState=mj,e):qj(i,d));if(s=e.memoizedState,s!==null&&(_=s.dehydrated,_!==null))return rj(e,i,d,a,_,s,o);if(c){c=a.fallback,d=i.mode,s=e.child,_=s.sibling;var h={mode:"hidden",children:a.children};return!(d&1)&&i.child!==s?(a=i.child,a.childLanes=0,a.pendingProps=h,i.deletions=null):(a=Pg(s,h),a.subtreeFlags=s.subtreeFlags&14680064),_!==null?c=Pg(_,c):(c=Tg(c,d,o,null),c.flags|=2),c.return=i,a.return=i,a.sibling=c,i.child=a,a=c,c=i.child,d=e.child.memoizedState,d=d===null?nj(o):{baseLanes:d.baseLanes|o,cachePool:null,transitions:d.transitions},c.memoizedState=d,c.childLanes=e.childLanes&~o,i.memoizedState=mj,a}return c=e.child,e=c.sibling,a=Pg(c,{mode:"visible",children:a.children}),!(i.mode&1)&&(a.lanes=o),a.return=i,a.sibling=null,e!==null&&(o=i.deletions,o===null?(i.deletions=[e],i.flags|=16):o.push(e)),i.child=a,i.memoizedState=null,a}function qj(e,i){return i=pj({mode:"visible",children:i},e.mode,0,null),i.return=e,e.child=i}function sj(e,i,o,a){return a!==null&&Jg(a),Ug(i,e.child,null,o),e=qj(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function rj(e,i,o,a,s,c,d){if(o)return i.flags&256?(i.flags&=-257,a=Ki(Error(p(422))),sj(e,i,d,a)):i.memoizedState!==null?(i.child=e.child,i.flags|=128,null):(c=a.fallback,s=i.mode,a=pj({mode:"visible",children:a.children},s,0,null),c=Tg(c,s,d,null),c.flags|=2,a.return=i,c.return=i,a.sibling=c,i.child=a,i.mode&1&&Ug(i,e.child,null,d),i.child.memoizedState=nj(d),i.memoizedState=mj,c);if(!(i.mode&1))return sj(e,i,d,null);if(s.data==="$!"){if(a=s.nextSibling&&s.nextSibling.dataset,a)var _=a.dgst;return a=_,c=Error(p(419)),a=Ki(c,a,void 0),sj(e,i,d,a)}if(_=(d&e.childLanes)!==0,dh||_){if(a=Q,a!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(a.suspendedLanes|d)?0:s,s!==0&&s!==c.retryLane&&(c.retryLane=s,ih(e,s),gi(a,e,s,-1))}return tj(),a=Ki(Error(p(421))),sj(e,i,d,a)}return s.data==="$?"?(i.flags|=128,i.child=e.child,i=uj.bind(null,e),s._reactRetry=i,null):(e=c.treeContext,yg=Lf(s.nextSibling),xg=i,I=!0,zg=null,e!==null&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=e.id,sg=e.overflow,qg=i),i=qj(i,a.children),i.flags|=4096,i)}function vj(e,i,o){e.lanes|=i;var a=e.alternate;a!==null&&(a.lanes|=i),bh(e.return,i,o)}function wj(e,i,o,a,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:s}:(c.isBackwards=i,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=o,c.tailMode=s)}function xj(e,i,o){var a=i.pendingProps,s=a.revealOrder,c=a.tail;if(Xi(e,i,a.children,o),a=L.current,a&2)a=a&1|2,i.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vj(e,o,i);else if(e.tag===19)vj(e,o,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(G(L,a),!(i.mode&1))i.memoizedState=null;else switch(s){case"forwards":for(o=i.child,s=null;o!==null;)e=o.alternate,e!==null&&Ch(e)===null&&(s=o),o=o.sibling;o=s,o===null?(s=i.child,i.child=null):(s=o.sibling,o.sibling=null),wj(i,!1,s,o,c);break;case"backwards":for(o=null,s=i.child,i.child=null;s!==null;){if(e=s.alternate,e!==null&&Ch(e)===null){i.child=s;break}e=s.sibling,s.sibling=o,o=s,s=e}wj(i,!0,o,null,c);break;case"together":wj(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ij(e,i){!(i.mode&1)&&e!==null&&(e.alternate=null,i.alternate=null,i.flags|=2)}function Zi(e,i,o){if(e!==null&&(i.dependencies=e.dependencies),rh|=i.lanes,!(o&i.childLanes))return null;if(e!==null&&i.child!==e.child)throw Error(p(153));if(i.child!==null){for(e=i.child,o=Pg(e,e.pendingProps),i.child=o,o.return=i;e.sibling!==null;)e=e.sibling,o=o.sibling=Pg(e,e.pendingProps),o.return=i;o.sibling=null}return i.child}function yj(e,i,o){switch(i.tag){case 3:kj(i),Ig();break;case 5:Ah(i);break;case 1:Zf(i.type)&&cg(i);break;case 4:yh(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,s=i.memoizedProps.value;G(Wg,a._currentValue),a._currentValue=s;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(G(L,L.current&1),i.flags|=128,null):o&i.child.childLanes?oj(e,i,o):(G(L,L.current&1),e=Zi(e,i,o),e!==null?e.sibling:null);G(L,L.current&1);break;case 19:if(a=(o&i.childLanes)!==0,e.flags&128){if(a)return xj(e,i,o);i.flags|=128}if(s=i.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),G(L,L.current),a)break;return null;case 22:case 23:return i.lanes=0,dj(e,i,o)}return Zi(e,i,o)}var zj,Aj,Bj,Cj;zj=function(e,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}};Aj=function(){};Bj=function(e,i,o,a){var s=e.memoizedProps;if(s!==a){e=i.stateNode,xh(uh.current);var c=null;switch(o){case"input":s=Ya(e,s),a=Ya(e,a),c=[];break;case"select":s=A({},s,{value:void 0}),a=A({},a,{value:void 0}),c=[];break;case"textarea":s=gb(e,s),a=gb(e,a),c=[];break;default:typeof s.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Bf)}ub(o,a);var d;o=null;for(g in s)if(!a.hasOwnProperty(g)&&s.hasOwnProperty(g)&&s[g]!=null)if(g==="style"){var _=s[g];for(d in _)_.hasOwnProperty(d)&&(o||(o={}),o[d]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(ea.hasOwnProperty(g)?c||(c=[]):(c=c||[]).push(g,null));for(g in a){var h=a[g];if(_=s!=null?s[g]:void 0,a.hasOwnProperty(g)&&h!==_&&(h!=null||_!=null))if(g==="style")if(_){for(d in _)!_.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(o||(o={}),o[d]="");for(d in h)h.hasOwnProperty(d)&&_[d]!==h[d]&&(o||(o={}),o[d]=h[d])}else o||(c||(c=[]),c.push(g,o)),o=h;else g==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,_=_?_.__html:void 0,h!=null&&_!==h&&(c=c||[]).push(g,h)):g==="children"?typeof h!="string"&&typeof h!="number"||(c=c||[]).push(g,""+h):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(ea.hasOwnProperty(g)?(h!=null&&g==="onScroll"&&D("scroll",e),c||_===h||(c=[])):(c=c||[]).push(g,h))}o&&(c=c||[]).push("style",o);var g=c;(i.updateQueue=g)&&(i.flags|=4)}};Cj=function(e,i,o,a){o!==a&&(i.flags|=4)};function Dj(e,i){if(!I)switch(e.tailMode){case"hidden":i=e.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function S(e){var i=e.alternate!==null&&e.alternate.child===e.child,o=0,a=0;if(i)for(var s=e.child;s!==null;)o|=s.lanes|s.childLanes,a|=s.subtreeFlags&14680064,a|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)o|=s.lanes|s.childLanes,a|=s.subtreeFlags,a|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=a,e.childLanes=o,i}function Ej(e,i,o){var a=i.pendingProps;switch(wg(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(i),null;case 1:return Zf(i.type)&&$f(),S(i),null;case 3:return a=i.stateNode,zh(),E(Wf),E(H),Eh(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gg(i)?i.flags|=4:e===null||e.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,zg!==null&&(Fj(zg),zg=null))),Aj(e,i),S(i),null;case 5:Bh(i);var s=xh(wh.current);if(o=i.type,e!==null&&i.stateNode!=null)Bj(e,i,o,a,s),e.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(p(166));return S(i),null}if(e=xh(uh.current),Gg(i)){a=i.stateNode,o=i.type;var c=i.memoizedProps;switch(a[Of]=i,a[Pf]=c,e=(i.mode&1)!==0,o){case"dialog":D("cancel",a),D("close",a);break;case"iframe":case"object":case"embed":D("load",a);break;case"video":case"audio":for(s=0;s<lf.length;s++)D(lf[s],a);break;case"source":D("error",a);break;case"img":case"image":case"link":D("error",a),D("load",a);break;case"details":D("toggle",a);break;case"input":Za(a,c),D("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!c.multiple},D("invalid",a);break;case"textarea":hb(a,c),D("invalid",a)}ub(o,c),s=null;for(var d in c)if(c.hasOwnProperty(d)){var _=c[d];d==="children"?typeof _=="string"?a.textContent!==_&&(c.suppressHydrationWarning!==!0&&Af(a.textContent,_,e),s=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(c.suppressHydrationWarning!==!0&&Af(a.textContent,_,e),s=["children",""+_]):ea.hasOwnProperty(d)&&_!=null&&d==="onScroll"&&D("scroll",a)}switch(o){case"input":Va(a),db(a,c,!0);break;case"textarea":Va(a),jb(a);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(a.onclick=Bf)}a=s,i.updateQueue=a,a!==null&&(i.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kb(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=d.createElement(o,{is:a.is}):(e=d.createElement(o),o==="select"&&(d=e,a.multiple?d.multiple=!0:a.size&&(d.size=a.size))):e=d.createElementNS(e,o),e[Of]=i,e[Pf]=a,zj(e,i,!1,!1),i.stateNode=e;e:{switch(d=vb(o,a),o){case"dialog":D("cancel",e),D("close",e),s=a;break;case"iframe":case"object":case"embed":D("load",e),s=a;break;case"video":case"audio":for(s=0;s<lf.length;s++)D(lf[s],e);s=a;break;case"source":D("error",e),s=a;break;case"img":case"image":case"link":D("error",e),D("load",e),s=a;break;case"details":D("toggle",e),s=a;break;case"input":Za(e,a),s=Ya(e,a),D("invalid",e);break;case"option":s=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},s=A({},a,{value:void 0}),D("invalid",e);break;case"textarea":hb(e,a),s=gb(e,a),D("invalid",e);break;default:s=a}ub(o,s),_=s;for(c in _)if(_.hasOwnProperty(c)){var h=_[c];c==="style"?sb(e,h):c==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&nb(e,h)):c==="children"?typeof h=="string"?(o!=="textarea"||h!=="")&&ob(e,h):typeof h=="number"&&ob(e,""+h):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ea.hasOwnProperty(c)?h!=null&&c==="onScroll"&&D("scroll",e):h!=null&&ta(e,c,h,d))}switch(o){case"input":Va(e),db(e,a,!1);break;case"textarea":Va(e),jb(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Sa(a.value));break;case"select":e.multiple=!!a.multiple,c=a.value,c!=null?fb(e,!!a.multiple,c,!1):a.defaultValue!=null&&fb(e,!!a.multiple,a.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Bf)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return S(i),null;case 6:if(e&&i.stateNode!=null)Cj(e,i,e.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(p(166));if(o=xh(wh.current),xh(uh.current),Gg(i)){if(a=i.stateNode,o=i.memoizedProps,a[Of]=i,(c=a.nodeValue!==o)&&(e=xg,e!==null))switch(e.tag){case 3:Af(a.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Af(a.nodeValue,o,(e.mode&1)!==0)}c&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Of]=i,i.stateNode=a}return S(i),null;case 13:if(E(L),a=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(I&&yg!==null&&i.mode&1&&!(i.flags&128))Hg(),Ig(),i.flags|=98560,c=!1;else if(c=Gg(i),a!==null&&a.dehydrated!==null){if(e===null){if(!c)throw Error(p(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(p(317));c[Of]=i}else Ig(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;S(i),c=!1}else zg!==null&&(Fj(zg),zg=null),c=!0;if(!c)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(i.child.flags|=8192,i.mode&1&&(e===null||L.current&1?T===0&&(T=3):tj())),i.updateQueue!==null&&(i.flags|=4),S(i),null);case 4:return zh(),Aj(e,i),e===null&&sf(i.stateNode.containerInfo),S(i),null;case 10:return ah(i.type._context),S(i),null;case 17:return Zf(i.type)&&$f(),S(i),null;case 19:if(E(L),c=i.memoizedState,c===null)return S(i),null;if(a=(i.flags&128)!==0,d=c.rendering,d===null)if(a)Dj(c,!1);else{if(T!==0||e!==null&&e.flags&128)for(e=i.child;e!==null;){if(d=Ch(e),d!==null){for(i.flags|=128,Dj(c,!1),a=d.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)c=o,e=a,c.flags&=14680066,d=c.alternate,d===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=d.childLanes,c.lanes=d.lanes,c.child=d.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=d.memoizedProps,c.memoizedState=d.memoizedState,c.updateQueue=d.updateQueue,c.type=d.type,e=d.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return G(L,L.current&1|2),i.child}e=e.sibling}c.tail!==null&&B()>Gj&&(i.flags|=128,a=!0,Dj(c,!1),i.lanes=4194304)}else{if(!a)if(e=Ch(d),e!==null){if(i.flags|=128,a=!0,o=e.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Dj(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!I)return S(i),null}else 2*B()-c.renderingStartTime>Gj&&o!==1073741824&&(i.flags|=128,a=!0,Dj(c,!1),i.lanes=4194304);c.isBackwards?(d.sibling=i.child,i.child=d):(o=c.last,o!==null?o.sibling=d:i.child=d,c.last=d)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=B(),i.sibling=null,o=L.current,G(L,a?o&1|2:o&1),i):(S(i),null);case 22:case 23:return Hj(),a=i.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(i.flags|=8192),a&&i.mode&1?fj&1073741824&&(S(i),i.subtreeFlags&6&&(i.flags|=8192)):S(i),null;case 24:return null;case 25:return null}throw Error(p(156,i.tag))}function Ij(e,i){switch(wg(i),i.tag){case 1:return Zf(i.type)&&$f(),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return zh(),E(Wf),E(H),Eh(),e=i.flags,e&65536&&!(e&128)?(i.flags=e&-65537|128,i):null;case 5:return Bh(i),null;case 13:if(E(L),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(p(340));Ig()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(i.type._context),null;case 22:case 23:return Hj(),null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj=typeof WeakSet=="function"?WeakSet:Set,V=null;function Lj(e,i){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){W(e,i,a)}else o.current=null}function Mj(e,i,o){try{o()}catch(a){W(e,i,a)}}var Nj=!1;function Oj(e,i){if(Cf=dd,e=Me(),Ne(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var s=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{o.nodeType,c.nodeType}catch{o=null;break e}var d=0,_=-1,h=-1,g=0,nt=0,_e=e,tt=null;t:for(;;){for(var st;_e!==o||s!==0&&_e.nodeType!==3||(_=d+s),_e!==c||a!==0&&_e.nodeType!==3||(h=d+a),_e.nodeType===3&&(d+=_e.nodeValue.length),(st=_e.firstChild)!==null;)tt=_e,_e=st;for(;;){if(_e===e)break t;if(tt===o&&++g===s&&(_=d),tt===c&&++nt===a&&(h=d),(st=_e.nextSibling)!==null)break;_e=tt,tt=_e.parentNode}_e=st}o=_===-1||h===-1?null:{start:_,end:h}}else o=null}o=o||{start:0,end:0}}else o=null;for(Df={focusedElem:e,selectionRange:o},dd=!1,V=i;V!==null;)if(i=V,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,V=e;else for(;V!==null;){i=V;try{var ft=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ft!==null){var ut=ft.memoizedProps,_t=ft.memoizedState,b=i.stateNode,$=b.getSnapshotBeforeUpdate(i.elementType===i.type?ut:Ci(i.type,ut),_t);b.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var et=i.stateNode.containerInfo;et.nodeType===1?et.textContent="":et.nodeType===9&&et.documentElement&&et.removeChild(et.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(ct){W(i,i.return,ct)}if(e=i.sibling,e!==null){e.return=i.return,V=e;break}V=i.return}return ft=Nj,Nj=!1,ft}function Pj(e,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var s=a=a.next;do{if((s.tag&e)===e){var c=s.destroy;s.destroy=void 0,c!==void 0&&Mj(i,o,c)}s=s.next}while(s!==a)}}function Qj(e,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Rj(e){var i=e.ref;if(i!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof i=="function"?i(e):i.current=e}}function Sj(e){var i=e.alternate;i!==null&&(e.alternate=null,Sj(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&(delete i[Of],delete i[Pf],delete i[of],delete i[Qf],delete i[Rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tj(e){return e.tag===5||e.tag===3||e.tag===4}function Uj(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tj(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vj(e,i,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(e,i):o.insertBefore(e,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(e,o)):(i=o,i.appendChild(e)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Bf));else if(a!==4&&(e=e.child,e!==null))for(Vj(e,i,o),e=e.sibling;e!==null;)Vj(e,i,o),e=e.sibling}function Wj(e,i,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,i?o.insertBefore(e,i):o.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Wj(e,i,o),e=e.sibling;e!==null;)Wj(e,i,o),e=e.sibling}var X=null,Xj=!1;function Yj(e,i,o){for(o=o.child;o!==null;)Zj(e,i,o),o=o.sibling}function Zj(e,i,o){if(lc&&typeof lc.onCommitFiberUnmount=="function")try{lc.onCommitFiberUnmount(kc,o)}catch{}switch(o.tag){case 5:U||Lj(o,i);case 6:var a=X,s=Xj;X=null,Yj(e,i,o),X=a,Xj=s,X!==null&&(Xj?(e=X,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):X.removeChild(o.stateNode));break;case 18:X!==null&&(Xj?(e=X,o=o.stateNode,e.nodeType===8?Kf(e.parentNode,o):e.nodeType===1&&Kf(e,o),bd(e)):Kf(X,o.stateNode));break;case 4:a=X,s=Xj,X=o.stateNode.containerInfo,Xj=!0,Yj(e,i,o),X=a,Xj=s;break;case 0:case 11:case 14:case 15:if(!U&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){s=a=a.next;do{var c=s,d=c.destroy;c=c.tag,d!==void 0&&(c&2||c&4)&&Mj(o,i,d),s=s.next}while(s!==a)}Yj(e,i,o);break;case 1:if(!U&&(Lj(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){W(o,i,_)}Yj(e,i,o);break;case 21:Yj(e,i,o);break;case 22:o.mode&1?(U=(a=U)||o.memoizedState!==null,Yj(e,i,o),U=a):Yj(e,i,o);break;default:Yj(e,i,o)}}function ak(e){var i=e.updateQueue;if(i!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Kj),i.forEach(function(a){var s=bk.bind(null,e,a);o.has(a)||(o.add(a),a.then(s,s))})}}function ck(e,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var s=o[a];try{var c=e,d=i,_=d;e:for(;_!==null;){switch(_.tag){case 5:X=_.stateNode,Xj=!1;break e;case 3:X=_.stateNode.containerInfo,Xj=!0;break e;case 4:X=_.stateNode.containerInfo,Xj=!0;break e}_=_.return}if(X===null)throw Error(p(160));Zj(c,d,s),X=null,Xj=!1;var h=s.alternate;h!==null&&(h.return=null),s.return=null}catch(g){W(s,i,g)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dk(i,e),i=i.sibling}function dk(e,i){var o=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ck(i,e),ek(e),a&4){try{Pj(3,e,e.return),Qj(3,e)}catch(ut){W(e,e.return,ut)}try{Pj(5,e,e.return)}catch(ut){W(e,e.return,ut)}}break;case 1:ck(i,e),ek(e),a&512&&o!==null&&Lj(o,o.return);break;case 5:if(ck(i,e),ek(e),a&512&&o!==null&&Lj(o,o.return),e.flags&32){var s=e.stateNode;try{ob(s,"")}catch(ut){W(e,e.return,ut)}}if(a&4&&(s=e.stateNode,s!=null)){var c=e.memoizedProps,d=o!==null?o.memoizedProps:c,_=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{_==="input"&&c.type==="radio"&&c.name!=null&&ab(s,c),vb(_,d);var g=vb(_,c);for(d=0;d<h.length;d+=2){var nt=h[d],_e=h[d+1];nt==="style"?sb(s,_e):nt==="dangerouslySetInnerHTML"?nb(s,_e):nt==="children"?ob(s,_e):ta(s,nt,_e,g)}switch(_){case"input":bb(s,c);break;case"textarea":ib(s,c);break;case"select":var tt=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!c.multiple;var st=c.value;st!=null?fb(s,!!c.multiple,st,!1):tt!==!!c.multiple&&(c.defaultValue!=null?fb(s,!!c.multiple,c.defaultValue,!0):fb(s,!!c.multiple,c.multiple?[]:"",!1))}s[Pf]=c}catch(ut){W(e,e.return,ut)}}break;case 6:if(ck(i,e),ek(e),a&4){if(e.stateNode===null)throw Error(p(162));s=e.stateNode,c=e.memoizedProps;try{s.nodeValue=c}catch(ut){W(e,e.return,ut)}}break;case 3:if(ck(i,e),ek(e),a&4&&o!==null&&o.memoizedState.isDehydrated)try{bd(i.containerInfo)}catch(ut){W(e,e.return,ut)}break;case 4:ck(i,e),ek(e);break;case 13:ck(i,e),ek(e),s=e.child,s.flags&8192&&(c=s.memoizedState!==null,s.stateNode.isHidden=c,!c||s.alternate!==null&&s.alternate.memoizedState!==null||(fk=B())),a&4&&ak(e);break;case 22:if(nt=o!==null&&o.memoizedState!==null,e.mode&1?(U=(g=U)||nt,ck(i,e),U=g):ck(i,e),ek(e),a&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!nt&&e.mode&1)for(V=e,nt=e.child;nt!==null;){for(_e=V=nt;V!==null;){switch(tt=V,st=tt.child,tt.tag){case 0:case 11:case 14:case 15:Pj(4,tt,tt.return);break;case 1:Lj(tt,tt.return);var ft=tt.stateNode;if(typeof ft.componentWillUnmount=="function"){a=tt,o=tt.return;try{i=a,ft.props=i.memoizedProps,ft.state=i.memoizedState,ft.componentWillUnmount()}catch(ut){W(a,o,ut)}}break;case 5:Lj(tt,tt.return);break;case 22:if(tt.memoizedState!==null){gk(_e);continue}}st!==null?(st.return=tt,V=st):gk(_e)}nt=nt.sibling}e:for(nt=null,_e=e;;){if(_e.tag===5){if(nt===null){nt=_e;try{s=_e.stateNode,g?(c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(_=_e.stateNode,h=_e.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,_.style.display=rb("display",d))}catch(ut){W(e,e.return,ut)}}}else if(_e.tag===6){if(nt===null)try{_e.stateNode.nodeValue=g?"":_e.memoizedProps}catch(ut){W(e,e.return,ut)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===e)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===e)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===e)break e;nt===_e&&(nt=null),_e=_e.return}nt===_e&&(nt=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:ck(i,e),ek(e),a&4&&ak(e);break;case 21:break;default:ck(i,e),ek(e)}}function ek(e){var i=e.flags;if(i&2){try{e:{for(var o=e.return;o!==null;){if(Tj(o)){var a=o;break e}o=o.return}throw Error(p(160))}switch(a.tag){case 5:var s=a.stateNode;a.flags&32&&(ob(s,""),a.flags&=-33);var c=Uj(e);Wj(e,c,s);break;case 3:case 4:var d=a.stateNode.containerInfo,_=Uj(e);Vj(e,_,d);break;default:throw Error(p(161))}}catch(h){W(e,e.return,h)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function hk(e,i,o){V=e,ik(e)}function ik(e,i,o){for(var a=(e.mode&1)!==0;V!==null;){var s=V,c=s.child;if(s.tag===22&&a){var d=s.memoizedState!==null||Jj;if(!d){var _=s.alternate,h=_!==null&&_.memoizedState!==null||U;_=Jj;var g=U;if(Jj=d,(U=h)&&!g)for(V=s;V!==null;)d=V,h=d.child,d.tag===22&&d.memoizedState!==null?jk(s):h!==null?(h.return=d,V=h):jk(s);for(;c!==null;)V=c,ik(c),c=c.sibling;V=s,Jj=_,U=g}kk(e)}else s.subtreeFlags&8772&&c!==null?(c.return=s,V=c):kk(e)}}function kk(e){for(;V!==null;){var i=V;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:U||Qj(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!U)if(o===null)a.componentDidMount();else{var s=i.elementType===i.type?o.memoizedProps:Ci(i.type,o.memoizedProps);a.componentDidUpdate(s,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var c=i.updateQueue;c!==null&&sh(i,c,a);break;case 3:var d=i.updateQueue;if(d!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}sh(i,d,o)}break;case 5:var _=i.stateNode;if(o===null&&i.flags&4){o=_;var h=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&o.focus();break;case"img":h.src&&(o.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var g=i.alternate;if(g!==null){var nt=g.memoizedState;if(nt!==null){var _e=nt.dehydrated;_e!==null&&bd(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}U||i.flags&512&&Rj(i)}catch(tt){W(i,i.return,tt)}}if(i===e){V=null;break}if(o=i.sibling,o!==null){o.return=i.return,V=o;break}V=i.return}}function gk(e){for(;V!==null;){var i=V;if(i===e){V=null;break}var o=i.sibling;if(o!==null){o.return=i.return,V=o;break}V=i.return}}function jk(e){for(;V!==null;){var i=V;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Qj(4,i)}catch(h){W(i,o,h)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var s=i.return;try{a.componentDidMount()}catch(h){W(i,s,h)}}var c=i.return;try{Rj(i)}catch(h){W(i,c,h)}break;case 5:var d=i.return;try{Rj(i)}catch(h){W(i,d,h)}}}catch(h){W(i,i.return,h)}if(i===e){V=null;break}var _=i.sibling;if(_!==null){_.return=i.return,V=_;break}V=i.return}}var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=1/0,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return K&6?B():Ak!==-1?Ak:Ak=B()}function yi(e){return e.mode&1?K&2&&Z!==0?Z&-Z:Kg.transition!==null?(Bk===0&&(Bk=yc()),Bk):(e=C,e!==0||(e=window.event,e=e===void 0?16:jd(e.type)),e):1}function gi(e,i,o,a){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(e,o,a),(!(K&2)||e!==Q)&&(e===Q&&(!(K&2)&&(qk|=o),T===4&&Ck(e,Z)),Dk(e,a),o===1&&K===0&&!(i.mode&1)&&(Gj=B()+500,fg&&jg()))}function Dk(e,i){var o=e.callbackNode;wc(e,i);var a=uc(e,e===Q?Z:0);if(a===0)o!==null&&bc(o),e.callbackNode=null,e.callbackPriority=0;else if(i=a&-a,e.callbackPriority!==i){if(o!=null&&bc(o),i===1)e.tag===0?ig(Ek.bind(null,e)):hg(Ek.bind(null,e)),Jf(function(){!(K&6)&&jg()}),o=null;else{switch(Dc(a)){case 1:o=fc;break;case 4:o=gc;break;case 16:o=hc;break;case 536870912:o=jc;break;default:o=hc}o=Fk(o,Gk.bind(null,e))}e.callbackPriority=i,e.callbackNode=o}}function Gk(e,i){if(Ak=-1,Bk=0,K&6)throw Error(p(327));var o=e.callbackNode;if(Hk()&&e.callbackNode!==o)return null;var a=uc(e,e===Q?Z:0);if(a===0)return null;if(a&30||a&e.expiredLanes||i)i=Ik(e,a);else{i=a;var s=K;K|=2;var c=Jk();(Q!==e||Z!==i)&&(uk=null,Gj=B()+500,Kk(e,i));do try{Lk();break}catch(_){Mk(e,_)}while(!0);$g(),mk.current=c,K=s,Y!==null?i=0:(Q=null,Z=0,i=T)}if(i!==0){if(i===2&&(s=xc(e),s!==0&&(a=s,i=Nk(e,s))),i===1)throw o=pk,Kk(e,0),Ck(e,a),Dk(e,B()),o;if(i===6)Ck(e,a);else{if(s=e.current.alternate,!(a&30)&&!Ok(s)&&(i=Ik(e,a),i===2&&(c=xc(e),c!==0&&(a=c,i=Nk(e,c))),i===1))throw o=pk,Kk(e,0),Ck(e,a),Dk(e,B()),o;switch(e.finishedWork=s,e.finishedLanes=a,i){case 0:case 1:throw Error(p(345));case 2:Pk(e,tk,uk);break;case 3:if(Ck(e,a),(a&130023424)===a&&(i=fk+500-B(),10<i)){if(uc(e,0)!==0)break;if(s=e.suspendedLanes,(s&a)!==a){R(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ff(Pk.bind(null,e,tk,uk),i);break}Pk(e,tk,uk);break;case 4:if(Ck(e,a),(a&4194240)===a)break;for(i=e.eventTimes,s=-1;0<a;){var d=31-oc(a);c=1<<d,d=i[d],d>s&&(s=d),a&=~c}if(a=s,a=B()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*lk(a/1960))-a,10<a){e.timeoutHandle=Ff(Pk.bind(null,e,tk,uk),a);break}Pk(e,tk,uk);break;case 5:Pk(e,tk,uk);break;default:throw Error(p(329))}}}return Dk(e,B()),e.callbackNode===o?Gk.bind(null,e):null}function Nk(e,i){var o=sk;return e.current.memoizedState.isDehydrated&&(Kk(e,i).flags|=256),e=Ik(e,i),e!==2&&(i=tk,tk=o,i!==null&&Fj(i)),e}function Fj(e){tk===null?tk=e:tk.push.apply(tk,e)}function Ok(e){for(var i=e;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var s=o[a],c=s.getSnapshot;s=s.value;try{if(!He(c(),s))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ck(e,i){for(i&=~rk,i&=~qk,e.suspendedLanes|=i,e.pingedLanes&=~i,e=e.expirationTimes;0<i;){var o=31-oc(i),a=1<<o;e[o]=-1,i&=~a}}function Ek(e){if(K&6)throw Error(p(327));Hk();var i=uc(e,0);if(!(i&1))return Dk(e,B()),null;var o=Ik(e,i);if(e.tag!==0&&o===2){var a=xc(e);a!==0&&(i=a,o=Nk(e,a))}if(o===1)throw o=pk,Kk(e,0),Ck(e,i),Dk(e,B()),o;if(o===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=i,Pk(e,tk,uk),Dk(e,B()),null}function Qk(e,i){var o=K;K|=1;try{return e(i)}finally{K=o,K===0&&(Gj=B()+500,fg&&jg())}}function Rk(e){wk!==null&&wk.tag===0&&!(K&6)&&Hk();var i=K;K|=1;var o=ok.transition,a=C;try{if(ok.transition=null,C=1,e)return e()}finally{C=a,ok.transition=o,K=i,!(K&6)&&jg()}}function Hj(){fj=ej.current,E(ej)}function Kk(e,i){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Gf(o)),Y!==null)for(o=Y.return;o!==null;){var a=o;switch(wg(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&$f();break;case 3:zh(),E(Wf),E(H),Eh();break;case 5:Bh(a);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(a.type._context);break;case 22:case 23:Hj()}o=o.return}if(Q=e,Y=e=Pg(e.current,null),Z=fj=i,T=0,pk=null,rk=qk=rh=0,tk=sk=null,fh!==null){for(i=0;i<fh.length;i++)if(o=fh[i],a=o.interleaved,a!==null){o.interleaved=null;var s=a.next,c=o.pending;if(c!==null){var d=c.next;c.next=s,a.next=d}o.pending=a}fh=null}return e}function Mk(e,i){do{var o=Y;try{if($g(),Fh.current=Rh,Ih){for(var a=M.memoizedState;a!==null;){var s=a.queue;s!==null&&(s.pending=null),a=a.next}Ih=!1}if(Hh=0,O=N=M=null,Jh=!1,Kh=0,nk.current=null,o===null||o.return===null){T=1,pk=i,Y=null;break}e:{var c=e,d=o.return,_=o,h=i;if(i=Z,_.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var g=h,nt=_,_e=nt.tag;if(!(nt.mode&1)&&(_e===0||_e===11||_e===15)){var tt=nt.alternate;tt?(nt.updateQueue=tt.updateQueue,nt.memoizedState=tt.memoizedState,nt.lanes=tt.lanes):(nt.updateQueue=null,nt.memoizedState=null)}var st=Ui(d);if(st!==null){st.flags&=-257,Vi(st,d,_,c,i),st.mode&1&&Si(c,g,i),i=st,h=g;var ft=i.updateQueue;if(ft===null){var ut=new Set;ut.add(h),i.updateQueue=ut}else ft.add(h);break e}else{if(!(i&1)){Si(c,g,i),tj();break e}h=Error(p(426))}}else if(I&&_.mode&1){var _t=Ui(d);if(_t!==null){!(_t.flags&65536)&&(_t.flags|=256),Vi(_t,d,_,c,i),Jg(Ji(h,_));break e}}c=h=Ji(h,_),T!==4&&(T=2),sk===null?sk=[c]:sk.push(c),c=d;do{switch(c.tag){case 3:c.flags|=65536,i&=-i,c.lanes|=i;var b=Ni(c,h,i);ph(c,b);break e;case 1:_=h;var $=c.type,et=c.stateNode;if(!(c.flags&128)&&(typeof $.getDerivedStateFromError=="function"||et!==null&&typeof et.componentDidCatch=="function"&&(Ri===null||!Ri.has(et)))){c.flags|=65536,i&=-i,c.lanes|=i;var ct=Qi(c,_,i);ph(c,ct);break e}}c=c.return}while(c!==null)}Sk(o)}catch(ht){i=ht,Y===o&&o!==null&&(Y=o=o.return);continue}break}while(!0)}function Jk(){var e=mk.current;return mk.current=Rh,e===null?Rh:e}function tj(){(T===0||T===3||T===2)&&(T=4),Q===null||!(rh&268435455)&&!(qk&268435455)||Ck(Q,Z)}function Ik(e,i){var o=K;K|=2;var a=Jk();(Q!==e||Z!==i)&&(uk=null,Kk(e,i));do try{Tk();break}catch(s){Mk(e,s)}while(!0);if($g(),K=o,mk.current=a,Y!==null)throw Error(p(261));return Q=null,Z=0,T}function Tk(){for(;Y!==null;)Uk(Y)}function Lk(){for(;Y!==null&&!cc();)Uk(Y)}function Uk(e){var i=Vk(e.alternate,e,fj);e.memoizedProps=e.pendingProps,i===null?Sk(e):Y=i,nk.current=null}function Sk(e){var i=e;do{var o=i.alternate;if(e=i.return,i.flags&32768){if(o=Ij(o,i),o!==null){o.flags&=32767,Y=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{T=6,Y=null;return}}else if(o=Ej(o,i,fj),o!==null){Y=o;return}if(i=i.sibling,i!==null){Y=i;return}Y=i=e}while(i!==null);T===0&&(T=5)}function Pk(e,i,o){var a=C,s=ok.transition;try{ok.transition=null,C=1,Wk(e,i,o,a)}finally{ok.transition=s,C=a}return null}function Wk(e,i,o,a){do Hk();while(wk!==null);if(K&6)throw Error(p(327));o=e.finishedWork;var s=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var c=o.lanes|o.childLanes;if(Bc(e,c),e===Q&&(Y=Q=null,Z=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||vk||(vk=!0,Fk(hc,function(){return Hk(),null})),c=(o.flags&15990)!==0,o.subtreeFlags&15990||c){c=ok.transition,ok.transition=null;var d=C;C=1;var _=K;K|=4,nk.current=null,Oj(e,o),dk(o,e),Oe(Df),dd=!!Cf,Df=Cf=null,e.current=o,hk(o),dc(),K=_,C=d,ok.transition=c}else e.current=o;if(vk&&(vk=!1,wk=e,xk=s),c=e.pendingLanes,c===0&&(Ri=null),mc(o.stateNode),Dk(e,B()),i!==null)for(a=e.onRecoverableError,o=0;o<i.length;o++)s=i[o],a(s.value,{componentStack:s.stack,digest:s.digest});if(Oi)throw Oi=!1,e=Pi,Pi=null,e;return xk&1&&e.tag!==0&&Hk(),c=e.pendingLanes,c&1?e===zk?yk++:(yk=0,zk=e):yk=0,jg(),null}function Hk(){if(wk!==null){var e=Dc(xk),i=ok.transition,o=C;try{if(ok.transition=null,C=16>e?16:e,wk===null)var a=!1;else{if(e=wk,wk=null,xk=0,K&6)throw Error(p(331));var s=K;for(K|=4,V=e.current;V!==null;){var c=V,d=c.child;if(V.flags&16){var _=c.deletions;if(_!==null){for(var h=0;h<_.length;h++){var g=_[h];for(V=g;V!==null;){var nt=V;switch(nt.tag){case 0:case 11:case 15:Pj(8,nt,c)}var _e=nt.child;if(_e!==null)_e.return=nt,V=_e;else for(;V!==null;){nt=V;var tt=nt.sibling,st=nt.return;if(Sj(nt),nt===g){V=null;break}if(tt!==null){tt.return=st,V=tt;break}V=st}}}var ft=c.alternate;if(ft!==null){var ut=ft.child;if(ut!==null){ft.child=null;do{var _t=ut.sibling;ut.sibling=null,ut=_t}while(ut!==null)}}V=c}}if(c.subtreeFlags&2064&&d!==null)d.return=c,V=d;else e:for(;V!==null;){if(c=V,c.flags&2048)switch(c.tag){case 0:case 11:case 15:Pj(9,c,c.return)}var b=c.sibling;if(b!==null){b.return=c.return,V=b;break e}V=c.return}}var $=e.current;for(V=$;V!==null;){d=V;var et=d.child;if(d.subtreeFlags&2064&&et!==null)et.return=d,V=et;else e:for(d=$;V!==null;){if(_=V,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:Qj(9,_)}}catch(ht){W(_,_.return,ht)}if(_===d){V=null;break e}var ct=_.sibling;if(ct!==null){ct.return=_.return,V=ct;break e}V=_.return}}if(K=s,jg(),lc&&typeof lc.onPostCommitFiberRoot=="function")try{lc.onPostCommitFiberRoot(kc,e)}catch{}a=!0}return a}finally{C=o,ok.transition=i}}return!1}function Xk(e,i,o){i=Ji(o,i),i=Ni(e,i,1),e=nh(e,i,1),i=R(),e!==null&&(Ac(e,1,i),Dk(e,i))}function W(e,i,o){if(e.tag===3)Xk(e,e,o);else for(;i!==null;){if(i.tag===3){Xk(i,e,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ri===null||!Ri.has(a))){e=Ji(o,e),e=Qi(i,e,1),i=nh(i,e,1),e=R(),i!==null&&(Ac(i,1,e),Dk(i,e));break}}i=i.return}}function Ti(e,i,o){var a=e.pingCache;a!==null&&a.delete(i),i=R(),e.pingedLanes|=e.suspendedLanes&o,Q===e&&(Z&o)===o&&(T===4||T===3&&(Z&130023424)===Z&&500>B()-fk?Kk(e,0):rk|=o),Dk(e,i)}function Yk(e,i){i===0&&(e.mode&1?(i=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):i=1);var o=R();e=ih(e,i),e!==null&&(Ac(e,i,o),Dk(e,o))}function uj(e){var i=e.memoizedState,o=0;i!==null&&(o=i.retryLane),Yk(e,o)}function bk(e,i){var o=0;switch(e.tag){case 13:var a=e.stateNode,s=e.memoizedState;s!==null&&(o=s.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(p(314))}a!==null&&a.delete(i),Yk(e,o)}var Vk;Vk=function(e,i,o){if(e!==null)if(e.memoizedProps!==i.pendingProps||Wf.current)dh=!0;else{if(!(e.lanes&o)&&!(i.flags&128))return dh=!1,yj(e,i,o);dh=!!(e.flags&131072)}else dh=!1,I&&i.flags&1048576&&ug(i,ng,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;ij(e,i),e=i.pendingProps;var s=Yf(i,H.current);ch(i,o),s=Nh(null,i,a,e,s,o);var c=Sh();return i.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Zf(a)?(c=!0,cg(i)):c=!1,i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,kh(i),s.updater=Ei,i.stateNode=s,s._reactInternals=i,Ii(i,a,e,o),i=jj(null,i,a,!0,c,o)):(i.tag=0,I&&c&&vg(i),Xi(null,i,s,o),i=i.child),i;case 16:a=i.elementType;e:{switch(ij(e,i),e=i.pendingProps,s=a._init,a=s(a._payload),i.type=a,s=i.tag=Zk(a),e=Ci(a,e),s){case 0:i=cj(null,i,a,e,o);break e;case 1:i=hj(null,i,a,e,o);break e;case 11:i=Yi(null,i,a,e,o);break e;case 14:i=$i(null,i,a,Ci(a.type,e),o);break e}throw Error(p(306,a,""))}return i;case 0:return a=i.type,s=i.pendingProps,s=i.elementType===a?s:Ci(a,s),cj(e,i,a,s,o);case 1:return a=i.type,s=i.pendingProps,s=i.elementType===a?s:Ci(a,s),hj(e,i,a,s,o);case 3:e:{if(kj(i),e===null)throw Error(p(387));a=i.pendingProps,c=i.memoizedState,s=c.element,lh(e,i),qh(i,a,null,o);var d=i.memoizedState;if(a=d.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},i.updateQueue.baseState=c,i.memoizedState=c,i.flags&256){s=Ji(Error(p(423)),i),i=lj(e,i,a,o,s);break e}else if(a!==s){s=Ji(Error(p(424)),i),i=lj(e,i,a,o,s);break e}else for(yg=Lf(i.stateNode.containerInfo.firstChild),xg=i,I=!0,zg=null,o=Vg(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ig(),a===s){i=Zi(e,i,o);break e}Xi(e,i,a,o)}i=i.child}return i;case 5:return Ah(i),e===null&&Eg(i),a=i.type,s=i.pendingProps,c=e!==null?e.memoizedProps:null,d=s.children,Ef(a,s)?d=null:c!==null&&Ef(a,c)&&(i.flags|=32),gj(e,i),Xi(e,i,d,o),i.child;case 6:return e===null&&Eg(i),null;case 13:return oj(e,i,o);case 4:return yh(i,i.stateNode.containerInfo),a=i.pendingProps,e===null?i.child=Ug(i,null,a,o):Xi(e,i,a,o),i.child;case 11:return a=i.type,s=i.pendingProps,s=i.elementType===a?s:Ci(a,s),Yi(e,i,a,s,o);case 7:return Xi(e,i,i.pendingProps,o),i.child;case 8:return Xi(e,i,i.pendingProps.children,o),i.child;case 12:return Xi(e,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,s=i.pendingProps,c=i.memoizedProps,d=s.value,G(Wg,a._currentValue),a._currentValue=d,c!==null)if(He(c.value,d)){if(c.children===s.children&&!Wf.current){i=Zi(e,i,o);break e}}else for(c=i.child,c!==null&&(c.return=i);c!==null;){var _=c.dependencies;if(_!==null){d=c.child;for(var h=_.firstContext;h!==null;){if(h.context===a){if(c.tag===1){h=mh(-1,o&-o),h.tag=2;var g=c.updateQueue;if(g!==null){g=g.shared;var nt=g.pending;nt===null?h.next=h:(h.next=nt.next,nt.next=h),g.pending=h}}c.lanes|=o,h=c.alternate,h!==null&&(h.lanes|=o),bh(c.return,o,i),_.lanes|=o;break}h=h.next}}else if(c.tag===10)d=c.type===i.type?null:c.child;else if(c.tag===18){if(d=c.return,d===null)throw Error(p(341));d.lanes|=o,_=d.alternate,_!==null&&(_.lanes|=o),bh(d,o,i),d=c.sibling}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===i){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}Xi(e,i,s.children,o),i=i.child}return i;case 9:return s=i.type,a=i.pendingProps.children,ch(i,o),s=eh(s),a=a(s),i.flags|=1,Xi(e,i,a,o),i.child;case 14:return a=i.type,s=Ci(a,i.pendingProps),s=Ci(a.type,s),$i(e,i,a,s,o);case 15:return bj(e,i,i.type,i.pendingProps,o);case 17:return a=i.type,s=i.pendingProps,s=i.elementType===a?s:Ci(a,s),ij(e,i),i.tag=1,Zf(a)?(e=!0,cg(i)):e=!1,ch(i,o),Gi(i,a,s),Ii(i,a,s,o),jj(null,i,a,!0,e,o);case 19:return xj(e,i,o);case 22:return dj(e,i,o)}throw Error(p(156,i.tag))};function Fk(e,i){return ac(e,i)}function $k(e,i,o,a){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bg(e,i,o,a){return new $k(e,i,o,a)}function aj(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zk(e){if(typeof e=="function")return aj(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Da)return 11;if(e===Ga)return 14}return 2}function Pg(e,i){var o=e.alternate;return o===null?(o=Bg(e.tag,i,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=i,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,i=e.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Rg(e,i,o,a,s,c){var d=2;if(a=e,typeof e=="function")aj(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ya:return Tg(o.children,s,c,i);case za:d=8,s|=8;break;case Aa:return e=Bg(12,o,i,s|2),e.elementType=Aa,e.lanes=c,e;case Ea:return e=Bg(13,o,i,s),e.elementType=Ea,e.lanes=c,e;case Fa:return e=Bg(19,o,i,s),e.elementType=Fa,e.lanes=c,e;case Ia:return pj(o,s,c,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ba:d=10;break e;case Ca:d=9;break e;case Da:d=11;break e;case Ga:d=14;break e;case Ha:d=16,a=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return i=Bg(d,o,i,s),i.elementType=e,i.type=a,i.lanes=c,i}function Tg(e,i,o,a){return e=Bg(7,e,a,i),e.lanes=o,e}function pj(e,i,o,a){return e=Bg(22,e,a,i),e.elementType=Ia,e.lanes=o,e.stateNode={isHidden:!1},e}function Qg(e,i,o){return e=Bg(6,e,null,i),e.lanes=o,e}function Sg(e,i,o){return i=Bg(4,e.children!==null?e.children:[],e.key,i),i.lanes=o,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function al(e,i,o,a,s){this.tag=i,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=a,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function bl(e,i,o,a,s,c,d,_,h){return e=new al(e,i,o,_,h),i===1?(i=1,c===!0&&(i|=8)):i=0,c=Bg(3,null,null,i),e.current=c,c.stateNode=e,c.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(c),e}function cl(e,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa,key:a==null?null:""+a,children:e,containerInfo:i,implementation:o}}function dl(e){if(!e)return Vf;e=e._reactInternals;e:{if(Vb(e)!==e||e.tag!==1)throw Error(p(170));var i=e;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Zf(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(p(171))}if(e.tag===1){var o=e.type;if(Zf(o))return bg(e,o,i)}return i}function el(e,i,o,a,s,c,d,_,h){return e=bl(o,a,!0,e,s,c,d,_,h),e.context=dl(null),o=e.current,a=R(),s=yi(o),c=mh(a,s),c.callback=i??null,nh(o,c,s),e.current.lanes=s,Ac(e,s,a),Dk(e,a),e}function fl(e,i,o,a){var s=i.current,c=R(),d=yi(s);return o=dl(o),i.context===null?i.context=o:i.pendingContext=o,i=mh(c,d),i.payload={element:e},a=a===void 0?null:a,a!==null&&(i.callback=a),e=nh(s,i,d),e!==null&&(gi(e,s,d,c),oh(e,s,d)),d}function gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hl(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<i?o:i}}function il(e,i){hl(e,i),(e=e.alternate)&&hl(e,i)}function jl(){return null}var kl=typeof reportError=="function"?reportError:function(e){console.error(e)};function ll(e){this._internalRoot=e}ml.prototype.render=ll.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(p(409));fl(e,i,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Rk(function(){fl(null,e,null,null)}),i[uf]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var i=Hc();e={blockedOn:null,target:e,priority:i};for(var o=0;o<Qc.length&&i!==0&&i<Qc[o].priority;o++);Qc.splice(o,0,e),o===0&&Vc(e)}};function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pl(){}function ql(e,i,o,a,s){if(s){if(typeof a=="function"){var c=a;a=function(){var g=gl(d);c.call(g)}}var d=el(i,a,e,0,null,!1,!1,"",pl);return e._reactRootContainer=d,e[uf]=d.current,sf(e.nodeType===8?e.parentNode:e),Rk(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof a=="function"){var _=a;a=function(){var g=gl(h);_.call(g)}}var h=bl(e,0,!1,null,null,!1,!1,"",pl);return e._reactRootContainer=h,e[uf]=h.current,sf(e.nodeType===8?e.parentNode:e),Rk(function(){fl(i,h,o,a)}),h}function rl(e,i,o,a,s){var c=o._reactRootContainer;if(c){var d=c;if(typeof s=="function"){var _=s;s=function(){var h=gl(d);_.call(h)}}fl(i,d,e,s)}else d=ql(o,i,e,s,a);return gl(d)}Ec=function(e){switch(e.tag){case 3:var i=e.stateNode;if(i.current.memoizedState.isDehydrated){var o=tc(i.pendingLanes);o!==0&&(Cc(i,o|1),Dk(i,B()),!(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var a=ih(e,1);if(a!==null){var s=R();gi(a,e,1,s)}}),il(e,1)}};Fc=function(e){if(e.tag===13){var i=ih(e,134217728);if(i!==null){var o=R();gi(i,e,134217728,o)}il(e,134217728)}};Gc=function(e){if(e.tag===13){var i=yi(e),o=ih(e,i);if(o!==null){var a=R();gi(o,e,i,a)}il(e,i)}};Hc=function(){return C};Ic=function(e,i){var o=C;try{return C=e,i()}finally{C=o}};yb=function(e,i,o){switch(i){case"input":if(bb(e,o),i=o.name,o.type==="radio"&&i!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==e&&a.form===e.form){var s=Db(a);if(!s)throw Error(p(90));Wa(a),bb(a,s)}}}break;case"textarea":ib(e,o);break;case"select":i=o.value,i!=null&&fb(e,!!o.multiple,i,!1)}};Gb=Qk;Hb=Rk;var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zb(e),e===null?null:e.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch{}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;reactDom_production_min.createPortal=function(e,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nl(i))throw Error(p(200));return cl(e,i,null,o)};reactDom_production_min.createRoot=function(e,i){if(!nl(e))throw Error(p(299));var o=!1,a="",s=kl;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(s=i.onRecoverableError)),i=bl(e,1,!1,null,null,o,!1,a,s),e[uf]=i.current,sf(e.nodeType===8?e.parentNode:e),new ll(i)};reactDom_production_min.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=Zb(i),e=e===null?null:e.stateNode,e};reactDom_production_min.flushSync=function(e){return Rk(e)};reactDom_production_min.hydrate=function(e,i,o){if(!ol(i))throw Error(p(200));return rl(null,e,i,!0,o)};reactDom_production_min.hydrateRoot=function(e,i,o){if(!nl(e))throw Error(p(405));var a=o!=null&&o.hydratedSources||null,s=!1,c="",d=kl;if(o!=null&&(o.unstable_strictMode===!0&&(s=!0),o.identifierPrefix!==void 0&&(c=o.identifierPrefix),o.onRecoverableError!==void 0&&(d=o.onRecoverableError)),i=el(i,null,e,1,o??null,s,!1,c,d),e[uf]=i.current,sf(e),a)for(e=0;e<a.length;e++)o=a[e],s=o._getVersion,s=s(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,s]:i.mutableSourceEagerHydrationData.push(o,s);return new ml(i)};reactDom_production_min.render=function(e,i,o){if(!ol(i))throw Error(p(200));return rl(null,e,i,!1,o)};reactDom_production_min.unmountComponentAtNode=function(e){if(!ol(e))throw Error(p(40));return e._reactRootContainer?(Rk(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[uf]=null})}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Qk;reactDom_production_min.unstable_renderSubtreeIntoContainer=function(e,i,o,a){if(!ol(o))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return rl(e,i,o,!1,a)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";function checkDCE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(e){console.error(e)}}checkDCE(),reactDom.exports=reactDom_production_min;var reactDomExports=reactDom.exports,m=reactDomExports;client.createRoot=m.createRoot,client.hydrateRoot=m.hydrateRoot;var figlet$1={exports:{}};(function(e){const i=(()=>{const d={},_={font:"Standard",fontPath:"./fonts"};function h(lt,it){let j={},rt,ot,at,mt,pt=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(rt=it!==null?it:lt,ot=0,at=pt.length;ot<at;)mt=pt[ot],rt>=mt[0]?(rt=rt-mt[0],j[mt[1]]=typeof j[mt[1]]>"u"?mt[2]:j[mt[1]]):mt[1]!=="vLayout"&&mt[1]!=="hLayout"&&(j[mt[1]]=!1),ot++;return typeof j.hLayout>"u"?lt===0?j.hLayout=1:lt===-1?j.hLayout=0:j.hRule1||j.hRule2||j.hRule3||j.hRule4||j.hRule5||j.hRule6?j.hLayout=3:j.hLayout=2:j.hLayout===2&&(j.hRule1||j.hRule2||j.hRule3||j.hRule4||j.hRule5||j.hRule6)&&(j.hLayout=3),typeof j.vLayout>"u"?j.vRule1||j.vRule2||j.vRule3||j.vRule4||j.vRule5?j.vLayout=3:j.vLayout=0:j.vLayout===2&&(j.vRule1||j.vRule2||j.vRule3||j.vRule4||j.vRule5)&&(j.vLayout=3),j}function g(lt,it,j){return lt===it&&lt!==j?lt:!1}function nt(lt,it){let j="|/\\[]{}()<>";if(lt==="_"){if(j.indexOf(it)!==-1)return it}else if(it==="_"&&j.indexOf(lt)!==-1)return lt;return!1}function _e(lt,it){let j="| /\\ [] {} () <>",rt=j.indexOf(lt),ot=j.indexOf(it);if(rt!==-1&&ot!==-1&&rt!==ot&&Math.abs(rt-ot)!==1){const at=Math.max(rt,ot),mt=at+1;return j.substring(at,mt)}return!1}function tt(lt,it){let j="[] {} ()",rt=j.indexOf(lt),ot=j.indexOf(it);return rt!==-1&&ot!==-1&&Math.abs(rt-ot)<=1?"|":!1}function st(lt,it){let j="/\\ \\/ ><",rt={0:"|",3:"Y",6:"X"},ot=j.indexOf(lt),at=j.indexOf(it);return ot!==-1&&at!==-1&&at-ot===1?rt[ot]:!1}function ft(lt,it,j){return lt===j&&it===j?j:!1}function ut(lt,it){return lt===it?lt:!1}function _t(lt,it){let j="|/\\[]{}()<>";if(lt==="_"){if(j.indexOf(it)!==-1)return it}else if(it==="_"&&j.indexOf(lt)!==-1)return lt;return!1}function b(lt,it){let j="| /\\ [] {} () <>",rt=j.indexOf(lt),ot=j.indexOf(it);if(rt!==-1&&ot!==-1&&rt!==ot&&Math.abs(rt-ot)!==1){const at=Math.max(rt,ot),mt=at+1;return j.substring(at,mt)}return!1}function $(lt,it){return lt==="-"&&it==="_"||lt==="_"&&it==="-"?"=":!1}function et(lt,it){return lt==="|"&&it==="|"?"|":!1}function ct(lt,it,j){return it===" "||it===""||it===j&&lt!==" "?lt:it}function ht(lt,it,j){if(j.fittingRules.vLayout===0)return"invalid";let rt,ot=Math.min(lt.length,it.length),at,mt,pt=!1,dt;if(ot===0)return"invalid";for(rt=0;rt<ot;rt++)if(at=lt.substring(rt,rt+1),mt=it.substring(rt,rt+1),at!==" "&&mt!==" "){if(j.fittingRules.vLayout===1)return"invalid";if(j.fittingRules.vLayout===2)return"end";if(et(at,mt)){pt=pt||!1;continue}if(dt=!1,dt=j.fittingRules.vRule1?ut(at,mt):dt,dt=!dt&&j.fittingRules.vRule2?_t(at,mt):dt,dt=!dt&&j.fittingRules.vRule3?b(at,mt):dt,dt=!dt&&j.fittingRules.vRule4?$(at,mt):dt,pt=!0,!dt)return"invalid"}return pt?"end":"valid"}function vt(lt,it,j){let rt=lt.length,ot=lt.length;it.length;let at,mt,pt,dt=1,Et,Nt,Lt;for(;dt<=rt;){for(at=lt.slice(Math.max(0,ot-dt),ot),mt=it.slice(0,Math.min(rt,dt)),pt=mt.length,Lt="",Et=0;Et<pt;Et++)if(Nt=ht(at[Et],mt[Et],j),Nt==="end")Lt=Nt;else if(Nt==="invalid"){Lt=Nt;break}else Lt===""&&(Lt="valid");if(Lt==="invalid"){dt--;break}if(Lt==="end")break;Lt==="valid"&&dt++}return Math.min(rt,dt)}function yt(lt,it,j){let rt,ot=Math.min(lt.length,it.length),at,mt,pt="",dt;for(rt=0;rt<ot;rt++)at=lt.substring(rt,rt+1),mt=it.substring(rt,rt+1),at!==" "&&mt!==" "?j.fittingRules.vLayout===1||j.fittingRules.vLayout===2?pt+=ct(at,mt):(dt=!1,dt=j.fittingRules.vRule5?et(at,mt):dt,dt=!dt&&j.fittingRules.vRule1?ut(at,mt):dt,dt=!dt&&j.fittingRules.vRule2?_t(at,mt):dt,dt=!dt&&j.fittingRules.vRule3?b(at,mt):dt,dt=!dt&&j.fittingRules.vRule4?$(at,mt):dt,pt+=dt):pt+=ct(at,mt);return pt}function $t(lt,it,j,rt){let ot=lt.length,at=it.length,mt=lt.slice(0,Math.max(0,ot-j)),pt=lt.slice(Math.max(0,ot-j),ot),dt=it.slice(0,Math.min(j,at)),Et,Nt,Lt,Tt=[],Ct,Ft=[];for(Nt=pt.length,Et=0;Et<Nt;Et++)Et>=at?Lt=pt[Et]:Lt=yt(pt[Et],dt[Et],rt),Tt.push(Lt);return Ct=it.slice(Math.min(j,at),at),Ft.concat(mt,Tt,Ct)}function xt(lt,it){let j,rt=lt.length,ot="";for(j=0;j<it;j++)ot+=" ";for(j=0;j<rt;j++)lt[j]+=ot}function Rt(lt,it,j){let rt=lt[0].length,ot=it[0].length,at;return rt>ot?xt(it,rt-ot):ot>rt&&xt(lt,ot-rt),at=vt(lt,it,j),$t(lt,it,at,j)}function Ot(lt,it,j){if(j.fittingRules.hLayout===0)return 0;let rt,ot=lt.length,at=it.length,mt=ot,pt=1,dt=!1,Et=!1,Nt,Lt,Tt,Ct;if(ot===0)return 0;e:for(;pt<=mt;){const Ft=ot-pt;for(Nt=lt.substring(Ft,Ft+pt),Lt=it.substring(0,Math.min(pt,at)),rt=0;rt<Math.min(pt,at);rt++)if(Tt=Nt.substring(rt,rt+1),Ct=Lt.substring(rt,rt+1),Tt!==" "&&Ct!==" "){if(j.fittingRules.hLayout===1){pt=pt-1;break e}else if(j.fittingRules.hLayout===2){(Tt===j.hardBlank||Ct===j.hardBlank)&&(pt=pt-1);break e}else if(dt=!0,Et=!1,Et=j.fittingRules.hRule1?g(Tt,Ct,j.hardBlank):Et,Et=!Et&&j.fittingRules.hRule2?nt(Tt,Ct,j.hardBlank):Et,Et=!Et&&j.fittingRules.hRule3?_e(Tt,Ct,j.hardBlank):Et,Et=!Et&&j.fittingRules.hRule4?tt(Tt,Ct,j.hardBlank):Et,Et=!Et&&j.fittingRules.hRule5?st(Tt,Ct,j.hardBlank):Et,Et=!Et&&j.fittingRules.hRule6?ft(Tt,Ct,j.hardBlank):Et,!Et){pt=pt-1;break e}}if(dt)break;pt++}return Math.min(mt,pt)}function zt(lt,it,j,rt){let ot,at,mt=[],pt,dt,Et,Nt,Lt,Tt,Ct,Ft;for(ot=0;ot<rt.height;ot++){Ct=lt[ot],Ft=it[ot],Lt=Ct.length,Tt=Ft.length,pt=Lt-j,dt=Ct.substr(0,Math.max(0,pt)),Et="";const Gt=Math.max(0,Lt-j);var Vt=Ct.substring(Gt,Gt+j),Bt=Ft.substring(0,Math.min(j,Tt));for(at=0;at<j;at++){var At=at<Lt?Vt.substring(at,at+1):" ",jt=at<Tt?Bt.substring(at,at+1):" ";if(At!==" "&&jt!==" ")if(rt.fittingRules.hLayout===1)Et+=ct(At,jt,rt.hardBlank);else if(rt.fittingRules.hLayout===2)Et+=ct(At,jt,rt.hardBlank);else{var Pt="";Pt=!Pt&&rt.fittingRules.hRule1?g(At,jt,rt.hardBlank):Pt,Pt=!Pt&&rt.fittingRules.hRule2?nt(At,jt,rt.hardBlank):Pt,Pt=!Pt&&rt.fittingRules.hRule3?_e(At,jt,rt.hardBlank):Pt,Pt=!Pt&&rt.fittingRules.hRule4?tt(At,jt,rt.hardBlank):Pt,Pt=!Pt&&rt.fittingRules.hRule5?st(At,jt,rt.hardBlank):Pt,Pt=!Pt&&rt.fittingRules.hRule6?ft(At,jt,rt.hardBlank):Pt,Pt=Pt||ct(At,jt,rt.hardBlank),Et+=Pt}else Et+=ct(At,jt,rt.hardBlank)}j>=Tt?Nt="":Nt=Ft.substring(j,j+Math.max(0,Tt-j)),mt[ot]=dt+Et+Nt}return mt}function Mt(lt){let it=[],j;for(j=0;j<lt;j++)it[j]="";return it}const Ut=function(lt){return Math.max.apply(Math,lt.map(function(it,j){return it.length}))};function Dt(lt,it,j){return lt.reduce(function(rt,ot){return zt(rt,ot.fig,ot.overlap,j)},Mt(it))}function Ht(lt,it,j){const rt={};for(let ot=lt.length;--ot;){let at=Dt(lt.slice(0,ot),it,j);if(Ut(at)<=j.width){rt.outputFigText=at,ot<lt.length?rt.chars=lt.slice(ot):rt.chars=[];break}}return rt}function Wt(lt,it,j){let rt,ot,at=0,mt,pt,dt,Et=j.height,Nt=[],Lt,Tt,Ct=[],Ft,Vt,Bt,At,jt;for(pt=Mt(Et),j.width>0&&j.whitespaceBreak&&(Tt={chars:[],overlap:at}),j.printDirection===1&&(lt=lt.split("").reverse().join("")),dt=lt.length,rt=0;rt<dt;rt++)if(Ft=lt.substring(rt,rt+1),Vt=Ft.match(/\s/),ot=it[Ft.charCodeAt(0)],At=null,ot){if(j.fittingRules.hLayout!==0){for(at=1e4,mt=0;mt<j.height;mt++)at=Math.min(at,Ot(pt[mt],ot[mt],j));at=at===1e4?0:at}if(j.width>0&&(j.whitespaceBreak?(Bt=Dt(Tt.chars.concat([{fig:ot,overlap:at}]),Et,j),At=Dt(Ct.concat([{fig:Bt,overlap:Tt.overlap}]),Et,j),Lt=Ut(At)):(At=zt(pt,ot,at,j),Lt=Ut(At)),Lt>=j.width&&rt>0&&(j.whitespaceBreak?(pt=Dt(Ct.slice(0,-1),Et,j),Ct.length>1&&(Nt.push(pt),pt=Mt(Et)),Ct=[]):(Nt.push(pt),pt=Mt(Et)))),j.width>0&&j.whitespaceBreak&&((!Vt||rt===dt-1)&&Tt.chars.push({fig:ot,overlap:at}),Vt||rt===dt-1)){for(jt=null;At=Dt(Tt.chars,Et,j),Lt=Ut(At),Lt>=j.width;)jt=Ht(Tt.chars,Et,j),Tt={chars:jt.chars},Nt.push(jt.outputFigText);Lt>0&&(jt?Ct.push({fig:At,overlap:1}):Ct.push({fig:At,overlap:Tt.overlap})),Vt&&(Ct.push({fig:ot,overlap:at}),pt=Mt(Et)),rt===dt-1&&(pt=Dt(Ct,Et,j)),Tt={chars:[],overlap:at};continue}pt=zt(pt,ot,at,j)}return Ut(pt)>0&&Nt.push(pt),j.showHardBlanks!==!0&&Nt.forEach(function(Pt){for(dt=Pt.length,mt=0;mt<dt;mt++)Pt[mt]=Pt[mt].replace(new RegExp("\\"+j.hardBlank,"g")," ")}),Nt}const gt=function(lt,it){let j=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],rt={},ot;if(lt==="default")for(ot=0;ot<j.length;ot++)rt[j[ot]]=it.fittingRules[j[ot]];else if(lt==="full")rt={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(lt==="fitted")rt={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(lt==="controlled smushing")rt={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(lt==="universal smushing")rt={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return rt},St=function(lt,it){let j=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],rt={},ot;if(lt==="default")for(ot=0;ot<j.length;ot++)rt[j[ot]]=it.fittingRules[j[ot]];else if(lt==="full")rt={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(lt==="fitted")rt={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(lt==="controlled smushing")rt={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(lt==="universal smushing")rt={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return rt},kt=function(lt,it,j){j=j.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let rt=j.split(`
`),ot=[],at,mt,pt;for(mt=rt.length,at=0;at<mt;at++)ot=ot.concat(Wt(rt[at],d[lt],it));for(mt=ot.length,pt=ot[0],at=1;at<mt;at++)pt=Rt(pt,ot[at],it);return pt?pt.join(`
`):""};function It(lt,it){let j=JSON.parse(JSON.stringify(lt)),rt,ot;if(typeof it.horizontalLayout<"u"){rt=gt(it.horizontalLayout,lt);for(ot in rt)rt.hasOwnProperty(ot)&&(j.fittingRules[ot]=rt[ot])}if(typeof it.verticalLayout<"u"){rt=St(it.verticalLayout,lt);for(ot in rt)rt.hasOwnProperty(ot)&&(j.fittingRules[ot]=rt[ot])}return j.printDirection=typeof it.printDirection<"u"?it.printDirection:lt.printDirection,j.showHardBlanks=it.showHardBlanks||!1,j.width=it.width||-1,j.whitespaceBreak=it.whitespaceBreak||!1,j}const wt=function(lt,it,j){return wt.text(lt,it,j)};return wt.text=async function(lt,it,j){let rt="";return lt=lt+"",typeof arguments[1]=="function"&&(j=it,it={},it.font=_.font),typeof it=="string"?(rt=it,it={}):(it=it||{},rt=it.font||_.font),await new Promise((ot,at)=>{wt.loadFont(rt,function(mt,pt){if(mt){at(mt),j&&j(mt);return}const dt=kt(rt,It(pt,it),lt);ot(dt),j&&j(null,dt)})})},wt.textSync=function(lt,it){let j="";lt=lt+"",typeof it=="string"?(j=it,it={}):(it=it||{},j=it.font||_.font);var rt=It(wt.loadFontSync(j),it);return kt(j,rt,lt)},wt.metadata=function(lt,it){lt=lt+"",wt.loadFont(lt,function(j,rt){if(j){it(j);return}it(null,rt,d[lt].comment)})},wt.defaults=function(lt){if(typeof lt=="object"&&lt!==null)for(var it in lt)lt.hasOwnProperty(it)&&(_[it]=lt[it]);return JSON.parse(JSON.stringify(_))},wt.parseFont=function(lt,it){it=it.replace(/\r\n/g,`
`).replace(/\r/g,`
`),d[lt]={};var j=it.split(`
`),rt=j.splice(0,1)[0].split(" "),ot=d[lt],at={};if(at.hardBlank=rt[0].substr(5,1),at.height=parseInt(rt[1],10),at.baseline=parseInt(rt[2],10),at.maxLength=parseInt(rt[3],10),at.oldLayout=parseInt(rt[4],10),at.numCommentLines=parseInt(rt[5],10),at.printDirection=rt.length>=6?parseInt(rt[6],10):0,at.fullLayout=rt.length>=7?parseInt(rt[7],10):null,at.codeTagCount=rt.length>=8?parseInt(rt[8],10):null,at.fittingRules=h(at.oldLayout,at.fullLayout),ot.options=at,at.hardBlank.length!==1||isNaN(at.height)||isNaN(at.baseline)||isNaN(at.maxLength)||isNaN(at.oldLayout)||isNaN(at.numCommentLines))throw new Error("FIGlet header contains invalid values.");let mt=[],pt;for(pt=32;pt<=126;pt++)mt.push(pt);if(mt=mt.concat(196,214,220,228,246,252,223),j.length<at.numCommentLines+at.height*mt.length)throw new Error("FIGlet file is missing data.");let dt,Et,Nt=!1;for(ot.comment=j.splice(0,at.numCommentLines).join(`
`),ot.numChars=0;j.length>0&&ot.numChars<mt.length;){for(dt=mt[ot.numChars],ot[dt]=j.splice(0,at.height),pt=0;pt<at.height;pt++)typeof ot[dt][pt]>"u"?ot[dt][pt]="":(Et=new RegExp("\\"+ot[dt][pt].substr(ot[dt][pt].length-1,1)+"+$"),ot[dt][pt]=ot[dt][pt].replace(Et,""));ot.numChars++}for(;j.length>0;){if(dt=j.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(dt))dt=parseInt(dt,16);else if(/^0[0-7]+$/.test(dt))dt=parseInt(dt,8);else if(/^[0-9]+$/.test(dt))dt=parseInt(dt,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(dt))dt=parseInt(dt,16);else{if(dt==="")break;console.log("Invalid data:"+dt),Nt=!0;break}for(ot[dt]=j.splice(0,at.height),pt=0;pt<at.height;pt++)typeof ot[dt][pt]>"u"?ot[dt][pt]="":(Et=new RegExp("\\"+ot[dt][pt].substr(ot[dt][pt].length-1,1)+"+$"),ot[dt][pt]=ot[dt][pt].replace(Et,""));ot.numChars++}if(Nt===!0)throw new Error("Error parsing data.");return at},wt.loadFont=function(lt,it){if(d[lt]){it(null,d[lt].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(_.fontPath+"/"+lt+".flf").then(function(j){if(j.ok)return j.text();throw console.log("Unexpected response",j),new Error("Network response was not ok.")}).then(function(j){it(null,wt.parseFont(lt,j))}).catch(it)},wt.loadFontSync=function(lt){if(d[lt])return d[lt].options;throw new Error("synchronous font loading is not implemented for the browser")},wt.preloadFonts=function(lt,it){let j=[];lt.reduce(function(rt,ot){return rt.then(function(){return fetch(_.fontPath+"/"+ot+".flf").then(at=>at.text()).then(function(at){j.push(at)})})},Promise.resolve()).then(function(rt){for(var ot in lt)lt.hasOwnProperty(ot)&&wt.parseFont(lt[ot],j[ot]);it&&it()})},wt.figFonts=d,wt})();e.exports=i})(figlet$1);var figletExports=figlet$1.exports;const figlet=getDefaultExportFromCjs(figletExports);var __defProp=Object.defineProperty,__getOwnPropNames=Object.getOwnPropertyNames,__knownSymbol=(e,i)=>(i=Symbol[e])?i:Symbol.for("Symbol."+e),__esm=(e,i)=>function(){return e&&(i=(0,e[__getOwnPropNames(e)[0]])(e=0)),i},__export=(e,i)=>{for(var o in i)__defProp(e,o,{get:i[o],enumerable:!0})},__async=(e,i,o)=>new Promise((a,s)=>{var c=h=>{try{_(o.next(h))}catch(g){s(g)}},d=h=>{try{_(o.throw(h))}catch(g){s(g)}},_=h=>h.done?a(h.value):Promise.resolve(h.value).then(c,d);_((o=o.apply(e,i)).next())}),__forAwait=(e,i,o)=>(i=e[__knownSymbol("asyncIterator")])?i.call(e):(e=e[__knownSymbol("iterator")](),i={},o=(a,s)=>(s=e[a])&&(i[a]=c=>new Promise((d,_,h)=>(c=s.call(e,c),h=c.done,Promise.resolve(c.value).then(g=>d({value:g,done:h}),_)))),o("next"),o("return"),i),Slant_exports={};__export(Slant_exports,{default:()=>Slant_default});var Slant_default,init_Slant=__esm({"src/fonts/Slant.js"(){Slant_default=`flf2a$ 6 5 16 15 10 0 18319
Slant by Glenn Chappell 3/93 -- based on Standard
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
    __@
   / /@
  / / @
 /_/  @
(_)   @
      @@
 _ _ @
( | )@
|/|/ @
 $   @
$    @
     @@
     __ __ @
  __/ // /_@
 /_  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
     __@
   _/ /@
  / __/@
 (_  ) @
/  _/  @
/_/    @@
   _   __@
  (_)_/_/@
   _/_/  @
 _/_/_   @
/_/ (_)  @
         @@
   ___   @
  ( _ )  @
 / __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
  _ @
 ( )@
 |/ @
 $  @
$   @
    @@
     __@
   _/_/@
  / /  @
 / /   @
/ /    @
|_|    @@
     _ @
    | |@
    / /@
   / / @
 _/_/  @
/_/    @@
       @
  __/|_@
 |    /@
/_ __| @
 |/    @
       @@
       @
    __ @
 __/ /_@
/_  __/@
 /_/   @
       @@
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
 ______@
/_____/@
  $    @
       @@
   @
   @
   @
 _ @
(_)@
   @@
       __@
     _/_/@
   _/_/  @
 _/_/    @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
   ___@
  <  /@
  / / @
 / /  @
/_/   @
      @@
   ___ @
  |__ \\@
  __/ /@
 / __/ @
/____/ @
       @@
   _____@
  |__  /@
   /_ < @
 ___/ / @
/____/  @
        @@
   __ __@
  / // /@
 / // /_@
/__  __/@
  /_/   @
        @@
    ______@
   / ____/@
  /___ \\  @
 ____/ /  @
/_____/   @
          @@
   _____@
  / ___/@
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
 _____@
/__  /@
  / / @
 / /  @
/_/   @
      @@
   ____ @
  ( __ )@
 / __  |@
/ /_/ / @
\\____/  @
        @@
   ____ @
  / __ \\@
 / /_/ /@
 \\__, / @
/____/  @
        @@
     @
   _ @
  (_)@
 _   @
(_)  @
     @@
     @
   _ @
  (_)@
 _   @
( )  @
|/   @@
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
  _____@
 /____/@
/____/ @
  $    @
       @@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
  ___ @
 /__ \\@
  / _/@
 /_/  @
(_)   @
      @@
   ______ @
  / ____ \\@
 / / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
    ___ @
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
    ____ @
   / __ )@
  / __  |@
 / /_/ / @
/_____/  @
         @@
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
         @@
    ____ @
   / __ \\@
  / / / /@
 / /_/ / @
/_____/  @
         @@
    ______@
   / ____/@
  / __/   @
 / /___   @
/_____/   @
          @@
    ______@
   / ____/@
  / /_    @
 / __/    @
/_/       @
          @@
   ______@
  / ____/@
 / / __  @
/ /_/ /  @
\\____/   @
         @@
    __  __@
   / / / /@
  / /_/ / @
 / __  /  @
/_/ /_/   @
          @@
    ____@
   /  _/@
   / /  @
 _/ /   @
/___/   @
        @@
       __@
      / /@
 __  / / @
/ /_/ /  @
\\____/   @
         @@
    __ __@
   / //_/@
  / ,<   @
 / /| |  @
/_/ |_|  @
         @@
    __ @
   / / @
  / /  @
 / /___@
/_____/@
       @@
    __  ___@
   /  |/  /@
  / /|_/ / @
 / /  / /  @
/_/  /_/   @
           @@
    _   __@
   / | / /@
  /  |/ / @
 / /|  /  @
/_/ |_/   @
          @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / ____/ @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\___\\_\\ @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / _, _/ @
/_/ |_|  @
         @@
   _____@
  / ___/@
  \\__ \\ @
 ___/ / @
/____/  @
        @@
  ______@
 /_  __/@
  / /   @
 / /    @
/_/     @
        @@
   __  __@
  / / / /@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
 _    __@
| |  / /@
| | / / @
| |/ /  @
|___/   @
        @@
 _       __@
| |     / /@
| | /| / / @
| |/ |/ /  @
|__/|__/   @
           @@
   _  __@
  | |/ /@
  |   / @
 /   |  @
/_/|_|  @
        @@
__  __@
\\ \\/ /@
 \\  / @
 / /  @
/_/   @
      @@
 _____@
/__  /@
  / / @
 / /__@
/____/@
      @@
     ___@
    / _/@
   / /  @
  / /   @
 / /    @
/__/    @@
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
     ___@
    /  /@
    / / @
   / /  @
 _/ /   @
/__/    @@
  //|@
 |/||@
  $  @
 $   @
$    @
     @@
       @
       @
       @
       @
 ______@
/_____/@@
  _ @
 ( )@
  V @
 $  @
$   @
    @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
    __  @
   / /_ @
  / __ \\@
 / /_/ /@
/_.___/ @
        @@
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
       @@
       __@
  ____/ /@
 / __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
  ___ @
 / _ \\@
/  __/@
\\___/ @
      @@
    ____@
   / __/@
  / /_  @
 / __/  @
/_/     @
        @@
         @
   ____ _@
  / __ \`/@
 / /_/ / @
 \\__, /  @
/____/   @@
    __  @
   / /_ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
       _ @
      (_)@
     / / @
    / /  @
 __/ /   @
/___/    @@
    __  @
   / /__@
  / //_/@
 / ,<   @
/_/|_|  @
        @@
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
            @
   ____ ___ @
  / __ \`__ \\@
 / / / / / /@
/_/ /_/ /_/ @
            @@
        @
   ____ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
       @
  ____ @
 / __ \\@
/ /_/ /@
\\____/ @
       @@
         @
    ____ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
   _____@
  / ___/@
 / /    @
/_/     @
        @@
        @
   _____@
  / ___/@
 (__  ) @
/____/  @
        @@
   __ @
  / /_@
 / __/@
/ /_  @
\\__/  @
      @@
        @
  __  __@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
       @
 _   __@
| | / /@
| |/ / @
|___/  @
       @@
          @
 _      __@
| | /| / /@
| |/ |/ / @
|__/|__/  @
          @@
        @
   _  __@
  | |/_/@
 _>  <  @
/_/|_|  @
        @@
         @
   __  __@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
     @
 ____@
/_  /@
 / /_@
/___/@
     @@
     __@
   _/_/@
 _/_/  @
< <    @
/ /    @
\\_\\    @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @@
     _ @
    | |@
    / /@
   _>_>@
 _/_/  @
/_/    @@
  /\\//@
 //\\/ @
  $   @
 $    @
$     @
      @@
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
160  NO-BREAK SPACE
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161  INVERTED EXCLAMATION MARK
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
162  CENT SIGN
     __@
  __/ /@
 / ___/@
/ /__  @
\\  _/  @
/_/    @@
163  POUND SIGN
     ____ @
    / ,__\\@
 __/ /_   @
 _/ /___  @
(_,____/  @
          @@
164  CURRENCY SIGN
    /|___/|@
   | __  / @
  / /_/ /  @
 /___  |   @
|/   |/    @
           @@
165  YEN SIGN
    ____@
  _| / /@
 /_  __/@
/_  __/ @
 /_/    @
        @@
166  BROKEN BAR
     __@
    / /@
   /_/ @
  __   @
 / /   @
/_/    @@
167  SECTION SIGN
     __ @
   _/ _)@
  / | | @
 | || | @
 | |_/  @
(__/    @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169  COPYRIGHT SIGN
    ______  @
   / _____\\ @
  / / ___/ |@
 / / /__  / @
|  \\___/ /  @
 \\______/   @@
170  FEMININE ORDINAL INDICATOR
   ___ _@
  / _ \`/@
 _\\_,_/ @
/____/  @
 $      @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
  ____@
 / / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
172  NOT SIGN
       @
 ______@
/___  /@
   /_/ @
 $     @
       @@
173  SOFT HYPHEN
      @
      @
 _____@
/____/@
  $   @
      @@
174  REGISTERED SIGN
    ______  @
   / ___  \\ @
  / / _ \\  |@
 / / , _/ / @
| /_/|_| /  @
 \\______/   @@
175  MACRON
 ______@
/_____/@
  $    @
 $     @
$      @
       @@
176  DEGREE SIGN
  ___ @
 / _ \\@
/ // /@
\\___/ @
 $    @
      @@
177  PLUS-MINUS SIGN
      __ @
   __/ /_@
  /_  __/@
 __/_/_  @
/_____/  @
         @@
178  SUPERSCRIPT TWO
   ___ @
  |_  |@
 / __/ @
/____/ @
 $     @
       @@
179  SUPERSCRIPT THREE
   ____@
  |_  /@
 _/_ < @
/____/ @
 $     @
       @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
 $  @
$   @
    @@
181  MICRO SIGN
          @
    __  __@
   / / / /@
  / /_/ / @
 / ._,_/  @
/_/       @@
182  PILCROW SIGN
  _______@
 / _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183  MIDDLE DOT
   @
 _ @
(_)@
 $ @
$  @
   @@
184  CEDILLA
   @
   @
   @
   @
 _ @
/_)@@
185  SUPERSCRIPT ONE
  ___@
 <  /@
 / / @
/_/  @
$    @
     @@
186  MASCULINE ORDINAL INDICATOR
   ___ @
  / _ \\@
 _\\___/@
/____/ @
 $     @
       @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
____  @
\\ \\ \\ @
 \\ \\ \\@
 / / /@
/_/_/ @
      @@
188  VULGAR FRACTION ONE QUARTER
  ___   __ @
 <  / _/_/ @
 / /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189  VULGAR FRACTION ONE HALF
  ___   __   @
 <  / _/_/__ @
 / /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190  VULGAR FRACTION THREE QUARTERS
   ____    __ @
  |_  /  _/_/ @
 _/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191  INVERTED QUESTION MARK
    _ @
   (_)@
 _/ / @
/ _/_ @
\\___/ @
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __ @
   _\\_\\@
  / _ |@
 / __ |@
/_/ |_|@
       @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __@
   _/_/@
  / _ |@
 / __ |@
/_/ |_|@
       @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
     //|@
   _|/||@
  / _ | @
 / __ | @
/_/ |_| @
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
     /\\//@
   _//\\/ @
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    (())@
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
198  LATIN CAPITAL LETTER AE
    __________@
   /     ____/@
  / /|  __/   @
 / __  /___   @
/_/ /_____/   @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
 /_)     @@
200  LATIN CAPITAL LETTER E WITH GRAVE
    __ @
   _\\_\\@
  / __/@
 / _/  @
/___/  @
       @@
201  LATIN CAPITAL LETTER E WITH ACUTE
     __@
   _/_/@
  / __/@
 / _/  @
/___/  @
       @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
     //|@
   _|/||@
  / __/ @
 / _/   @
/___/   @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
    _  _ @
   (_)(_)@
  / __/  @
 / _/    @
/___/    @
         @@
204  LATIN CAPITAL LETTER I WITH GRAVE
    __ @
   _\\_\\@
  /  _/@
 _/ /  @
/___/  @
       @@
205  LATIN CAPITAL LETTER I WITH ACUTE
     __@
   _/_/@
  /  _/@
 _/ /  @
/___/  @
       @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
     //|@
   _|/||@
  /  _/ @
 _/ /   @
/___/   @
        @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
    _  _ @
   (_)(_)@
  /  _/  @
 _/ /    @
/___/    @
         @@
208  LATIN CAPITAL LETTER ETH
     ____ @
    / __ \\@
 __/ /_/ /@
/_  __/ / @
 /_____/  @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / |/ / @
 /    /  @
/_/|_/   @
         @@
210  LATIN CAPITAL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
215  MULTIPLICATION SIGN
     @
     @
 /|/|@
 > < @
|/|/ @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / _// \\@
 / //// /@
/ //// / @
\\_//__/  @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   __ @
__/_/_@
\\ \\/ /@
 \\  / @
 /_/  @
      @@
222  LATIN CAPITAL LETTER THORN
    __  @
   / /_ @
  / __ \\@
 / ____/@
/_/     @
        @@
223  LATIN SMALL LETTER SHARP S
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
224  LATIN SMALL LETTER A WITH GRAVE
    __  @
  __\\_\\_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
     __ @
  __/_/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
    //| @
  _|/||_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227  LATIN SMALL LETTER A WITH TILDE
    /\\//@
  _//\\/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229  LATIN SMALL LETTER A WITH RING ABOVE
     __ @
  __(())@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230  LATIN SMALL LETTER AE
           @
  ____ ___ @
 / __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
/_)    @@
232  LATIN SMALL LETTER E WITH GRAVE
   __ @
  _\\_\\@
 / _ \\@
/  __/@
\\___/ @
      @@
233  LATIN SMALL LETTER E WITH ACUTE
    __@
  _/_/@
 / _ \\@
/  __/@
\\___/ @
      @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
    //|@
  _|/||@
 / _ \\ @
/  __/ @
\\___/  @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
   _  _ @
  (_)(_)@
 / _ \\  @
/  __/  @
\\___/   @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
   __ @
   \\_\\@
  / / @
 / /  @
/_/   @
      @@
237  LATIN SMALL LETTER I WITH ACUTE
    __@
   /_/@
  / / @
 / /  @
/_/   @
      @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
    //|@
   |/||@
  / /  @
 / /   @
/_/    @
       @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / /   @
 / /    @
/_/     @
        @@
240  LATIN SMALL LETTER ETH
     || @
    =||=@
 ___ || @
/ __\` | @
\\____/  @
        @@
241  LATIN SMALL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / __ \\ @
 / / / / @
/_/ /_/  @
         @@
242  LATIN SMALL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
243  LATIN SMALL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
245  LATIN SMALL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
247  DIVISION SIGN
       @
    _  @
 __(_)_@
/_____/@
 (_)   @
       @@
248  LATIN SMALL LETTER O WITH STROKE
        @
  _____ @
 / _// \\@
/ //// /@
\\_//__/ @
        @@
249  LATIN SMALL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
253  LATIN SMALL LETTER Y WITH ACUTE
      __ @
   __/_/_@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
254  LATIN SMALL LETTER THORN
     __  @
    / /_ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
    _   _ @
   (_) (_)@
  / / / / @
 / /_/ /  @
 \\__, /   @
/____/    @@
`}});function createSpacing(e,i){return e.replace(/.(?=.)/g,`$&${" ".repeat(i)}`)}function replaceText(e,i,o){return e.substring(0,i)+o+e.substring(i+o.length)}function getRandomCharacter(e){return e[Math.floor(Math.random()*e.length)]}function replaceNonWhitespaceWithRandom(e,i){return e.split("").map(o=>/\s/.test(o)?o:getRandomCharacter(i)).join("")}function createVerticalAnimationFrames({asciiText:e,animationDirection:i,animationCharacters:o,animationCharacterSpacing:a}){return e.reduce((s,c,d)=>{if(d===0)return s;const _=s!=null&&s[s.length-1]?[...s[s.length-1]]:void 0;if(!_)return s;const h=/\S/.test(_[d-1]),g=_.length-d,nt=/\S/.test(_[g]);let _e=[..._];if(h&&(i==="up"||i==="vertical")&&(_!=null&&_[d]&&(_[d]=replaceNonWhitespaceWithRandom(_[d],createSpacing(o,a))),_!=null&&_[d-1]&&(_[d-1]=" ".repeat(c.length)),_e[d]&&(_e[d]=replaceNonWhitespaceWithRandom(_e[d],o))),nt&&(i==="down"||i==="vertical")&&(_!=null&&_[g]&&(_[g]=replaceNonWhitespaceWithRandom(_[g],createSpacing(o,a))),_!=null&&_[g+1]&&(_[g+1]=" ".repeat(c.length)),_e!=null&&_e[g]&&(_e[g]=replaceNonWhitespaceWithRandom(_e[g],o))),(h||nt)&&s.push(_e,_),d===e.length-1&&i==="up"){const tt=[..._];tt[tt.length-1]=" ".repeat(tt[tt.length-1].length),s.push(tt)}if(d===e.length-1&&i==="down"){const tt=[..._];tt[_e.length-d]=" ".repeat(tt[_e.length-d].length),s.push(tt);const st=[...tt];if(!/\S/.test(st[0]))return s;st[0]=replaceNonWhitespaceWithRandom(st[0],createSpacing(o,a)),s.push(st);const ut=[...st];if(!/\S/.test(ut[0]))return s;ut[0]=replaceNonWhitespaceWithRandom(ut[0],createSpacing(o,a)),s.push(ut);const _t=[...ut];if(!/\S/.test(_t[0]))return s;_t[0]=" ".repeat(_t[0].length),s.push(_t)}return e.length-1,s},[[...e]])}var CENTER_Y=1;function createHorizontalAnimationFrames({asciiText:e,animationDirection:i,animationCharacters:o}){const a=[[...structuredClone(e)]],s=e[0].length/(i==="left"||i==="right"?1:2);for(let c=0;c<s;c++){if(c===0){a.push(e);continue}const d=a[c].map((_,h,g)=>{const nt=_.search(/\S/),_e=_.search(/\S(?!.*\S)/);if(nt===-1||_e===-1)return _;const tt=h>CENTER_Y?-1:1;if((i==="left"||i==="horizontal")&&(_=replaceText(_,nt," ")),(i==="right"||i==="horizontal")&&(_=replaceText(_,_e," ")),_e-nt<=2)return _;if(i==="left"||i==="horizontal"){const st=getRandomCharacter(o);g[h+tt]=replaceText(g[h+tt],nt+1,st)}return _});a.push(d)}return a}function createFrames(e){return __async(this,arguments,function*({asciiText:i,animationDirection:o,animationCharacters:a,animationCharacterSpacing:s,fadeInOnly:c=!1,fadeOutOnly:d=!1}){try{if(o==="down"||o==="up"||o==="vertical"){const nt=createVerticalAnimationFrames({asciiText:i,animationDirection:o,animationCharacters:a,animationCharacterSpacing:s});if(d)return nt;const _e=structuredClone(nt).reverse();return c?_e:_e.concat(nt)}const _=createHorizontalAnimationFrames({asciiText:i,animationDirection:o,animationCharacters:a,animationCharacterSpacing:s});if(c)return structuredClone(_).reverse();const h=structuredClone(_).reverse();return d?_:h.concat(_)}catch(_){throw _+" @createFrames"}})}var DEFAULT_FONT="Slant";function createAsciiText(e,i){return __async(this,null,function*(){const o=i?"":(yield Promise.resolve().then(()=>(init_Slant(),Slant_exports))).default;figlet.parseFont(DEFAULT_FONT,i||o);const a=g=>__async(this,null,function*(){return yield new Promise((nt,_e)=>{figlet.text(g,{font:DEFAULT_FONT},(tt,st)=>{tt&&_e("Failed to load font"),st?nt(st.split(`
`)):_e("No ASCII text generated")})})}),s=[];try{for(var c=__forAwait(Array.isArray(e)?e:[e]),d,_,h;d=!(_=yield c.next()).done;d=!1){const g=_.value,nt=yield a(g);s.push(nt)}}catch(g){h=[g]}finally{try{d&&(_=c.return)&&(yield _.call(c))}finally{if(h)throw h[0]}}return s})}var CHARACTER_SET="/*+#";function useAsciiText({animationCharacters:e=CHARACTER_SET,animationCharacterSpacing:i=1,animationDelay:o=500,animationDirection:a="horizontal",animationInterval:s=1e3,animationIteration:c=1,animationLoop:d=!0,animationSpeed:_=20,fadeInOnly:h=!1,fadeOutOnly:g=!1,font:nt,isAnimated:_e=!0,isPaused:tt=!1,text:st=["React","ASCII","Text"]}){const ft=reactExports.useRef(),ut=reactExports.useRef({animationFrameId:0,animationIndex:0,animationIterationCount:1,animations:null,frameId:0,frameIndex:0,isPaused:!1,isTimeout:!1,previousTimeStamp:0,timeoutId:0}),_t=$=>__async(this,null,function*(){const{animations:et,isPaused:ct,isTimeout:ht,previousTimeStamp:vt}=ut.current;if(!ft.current||!(et!=null&&et.length)||ct||ht)return;if($-vt>_){const{animationIndex:$t,animationIterationCount:xt,animations:Rt,frameId:Ot,frameIndex:zt}=ut.current,Mt=Rt==null?void 0:Rt[$t];if(!Mt||ht)return;const Ut=zt===0,Dt=zt===Mt.length-1,Ht=$t===Rt.length-1;if(ft.current.textContent=Mt[zt].join(`
`),!d&&xt===c&&Ht&&Dt){cancelAnimationFrame(Ot);return}ut.current.previousTimeStamp=$;const Wt=zt===Math.floor(Mt.length/2),gt=h||g,St=kt=>__async(this,null,function*(){yield new Promise(It=>{ut.current.isTimeout=!0,setTimeout(It,kt)}),ut.current.isTimeout=!1});gt&&Dt&&o&&(yield St(o)),gt&&Ut&&s&&(yield St(s)),!gt&&Wt&&o&&(yield St(o)),!gt&&Dt&&s&&(yield St(s)),Dt?(ut.current.frameIndex=0,ut.current.animationIndex++,ut.current.animationIterationCount++):ut.current.frameIndex++,d&&ut.current.animationIndex===Rt.length&&(ut.current.animationIndex=0)}ut.current.frameId=requestAnimationFrame(_t)});reactExports.useEffect(()=>{tt?(ut.current.isPaused=!0,cancelAnimationFrame(ut.current.frameId)):(ut.current.isPaused=!1,ut.current.frameId=requestAnimationFrame(_t))},[tt,ut]);const b=reactExports.useCallback(()=>__async(this,null,function*(){try{const $=yield createAsciiText(st,nt);!_e&&ft.current?ft.current.textContent=$[0].join(`
`):$.length===(Array.isArray(st)?st:[st]).length&&(ut.current.animations=yield Promise.all([...$.map(et=>__async(this,null,function*(){return yield createFrames({asciiText:et,animationDirection:a,animationCharacters:e,animationCharacterSpacing:i,fadeInOnly:h,fadeOutOnly:g})}))]),requestAnimationFrame(_t))}catch($){console.error({error:$})}}),[]);return reactExports.useEffect(()=>{b()},[st,b]),ft}var Alligator_default=`flf2a$ 7 7 26 32 3
Alligator by Simon Bradley <syb3@aber.ac.uk>
17th June, 1994

$  $@
$  $@
$  $@
$  $@
$  $@
$  $@
$  $@@
      :::$@
     :+:$ @
    +:+$  @
   +#+$   @
  +#+$    @
 $ $      @
###$      @@
      ::: :::$@
     :+: :+:$ @
    $     $   @
   $     $    @
  $     $     @
 $     $      @
$     $       @@
       :::   :::$ @
      :+:   :+:$  @
  +:+:+:+:+:+:+:+$@
    +#+   +:+$    @
+#+#+#+#+#+#+#+$  @
  #+#   #+#$      @
 ###   ###$       @@
        :::$  @
    :+:+:+:+:$@
  +:+ +:+$    @
  +#++:++#+$  @
    +#+ +#+$  @
#+#+#+#+#$    @
  ###$        @@
 :::   :::$ @
:+:   :+:$  @
     +:+$   @
    +#+$    @
   +#+$     @
  #+#   #+#$@
 ###   ###$ @@
       :::::::$ @
     :+:   :+:$ @
     +:+ +:+$   @
     +#++:  ++#$@
   +#+ +#+#+#$  @
 #+#   #+#+$    @
 ##########$    @@
      :::$@
     :+$  @
    $$    @
   $$     @
  $$      @
 $$       @
$$        @@
      :::$@
    :+:$  @
  +:+$    @
 +#+$     @
+#+$      @
#+#$      @
###$      @@
      :::$@
      :+:$@
      +:+$@
     +#+$ @
    +#+$  @
  #+#$    @
###$      @@
      $ $     $ $@
     :+:     :+:$@
      +:+ +:+$   @
  +#++:++#++:++$ @
    +#+ +#+$     @
 #+#     #+#$    @
$ $     $ $      @@
        $ $   @
       :+:$   @
      +:+$    @
+#++:++#++:++$@
    +#+$      @
   #+#$       @
  $ $         @@
      $ $@
     $ $ @
    $ $  @
   $ $   @
  $ $    @
 #+#$    @
##$      @@
      $           $@
     $           $ @
    $           $  @
   +#++:++#++:++$  @
  $           $    @
 $           $     @
$           $      @@
      $ $@
     $ $ @
    $ $  @
   $ $   @
  $ $    @
 #+#$    @
###$     @@
            :::$@
          :+:$  @
        +:+$    @
      +#+$      @
    +#+$        @
  #+#$          @
###$            @@
      :::::::$@
    :+:   :+:$@
   +:+   +:+$ @
  +#+   +:+$  @
 +#+   +#+$   @
#+#   #+#$    @
#######$      @@
        :::$@
     :+:+:$ @
      +:+$  @
     +#+$   @
    +#+$    @
   #+#$     @
#######$    @@
       ::::::::$@
     :+:    :+:$@
    $     +:+$  @
   $   +#+$     @
  $ +#+$        @
  #+#$          @
##########$     @@
      ::::::::$@
    :+:    :+:$@
   $      +:+$ @
  $   +#++:$   @
 $      +#+$   @
#+#    #+#$    @
########$      @@
        :::$@
      :+:$  @
    +:+ +:+$@
  +#+  +:+$ @
+#+#+#+#+#+$@
     #+#$   @
    ###$    @@
     ::::::::::$@
    :+:    :+:$ @
   +:+      $   @
  +#++:++#+$    @
 $      +#+$    @
#+#    #+#$     @
########$       @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  +#++:++#+$   @
 +#+    +#+$   @
#+#    #+#$    @
########$      @@
  :::::::::::$@
 :+:     :+:$ @
       +:+$   @
     +#+$     @
   +#+$       @
 #+#$         @
###$          @@
      ::::::::$@
    :+:    :+:$@
   +:+    +:+$ @
   +#++:++#$   @
 +#+    +#+$   @
#+#    #+#$    @
########$      @@
      ::::::::$@
    :+:    :+:$@
   +:+    +:+$ @
   +#++:++#+$  @
 $      +#+$   @
#+#    #+#$    @
########$      @@
      $ $@
     :+:$@
    $ $  @
   $ $   @
  $ $    @
 #+#$    @
$ $      @@
      $ $@
     :+:$@
    $ $  @
   $ $   @
  $ $    @
 #+#$    @
##$      @@
      :::$@
    :+:$  @
  +:+$    @
+#+$      @
+#+$      @
#+#$      @
###$      @@
      $           $@
     $           $ @
    +:+:+:+:+:+:+$ @
   $           $   @
  +#+#+#+#+#+#+$   @
 $           $     @
$           $      @@
      :::$@
      :+:$@
      +:+$@
      +#+$@
    +#+$  @
  #+#$    @
###$      @@
   :::::::::$@
 :+:     :+:$@
       +:+$  @
     +#+$    @
  +#+$       @
 $ $         @
###$         @@
       :::::::::::$ @
    :+: :+:+:+:+:+:$@
  +:+ +:+   +:+ +:+$@
 +#+ +:+   +#+ +:+$ @
+#+ +#+   +#+ +#+$  @
#+# #+#+#+#+#+$     @
 #####$             @@
          :::$ @
       :+: :+:$@
     +:+   +:+$@
   +#++:++#++:$@
  +#+     +#+$ @
 #+#     #+#$  @
###     ###$   @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#++:++#+$   @
  +#+    +#+$   @
 #+#    #+#$    @
#########$      @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  +#+      $   @
 +#+      $    @
#+#    #+#$    @
########$      @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#+    +:+$  @
  +#+    +#+$   @
 #+#    #+#$    @
#########$      @@
      ::::::::::$@
     :+:$        @
    +:+$         @
   +#++:++#$     @
  +#+$           @
 #+#$            @
##########$      @@
      ::::::::::$@
     :+:$        @
    +:+$         @
   :#::+::#$     @
  +#+$           @
 #+#$            @
###$             @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  :#:      $   @
 +#+   +#+#$   @
#+#    #+#$    @
########$      @@
      :::    :::$@
     :+:    :+:$ @
    +:+    +:+$  @
   +#++:++#++$   @
  +#+    +#+$    @
 #+#    #+#$     @
###    ###$      @@
      :::::::::::$@
         :+:$     @
        +:+$      @
       +#+$       @
      +#+$        @
     #+#$         @
###########$      @@
     :::::::::::$@
        :+:$     @
       +:+$      @
      +#+$       @
     +#+$        @
#+# #+#$         @
#####$           @@
      :::    :::$@
     :+:   :+:$  @
    +:+  +:+$    @
   +#++:++$      @
  +#+  +#+$      @
 #+#   #+#$      @
###    ###$      @@
      :::$ @
     :+:$  @
    +:+$   @
   +#+$    @
  +#+$     @
 #+#$      @
##########$@@
        :::   :::$@
      :+:+: :+:+:$@
    +:+ +:+:+ +:+$@
   +#+  +:+  +#+$ @
  +#+       +#+$  @
 #+#       #+#$   @
###       ###$    @@
      ::::    :::$@
     :+:+:   :+:$ @
    :+:+:+  +:+$  @
   +#+ +:+ +#+$   @
  +#+  +#+#+#$    @
 #+#   #+#+#$     @
###    ####$      @@
      ::::::::$@
    :+:    :+:$@
   +:+    +:+$ @
  +#+    +:+$  @
 +#+    +#+$   @
#+#    #+#$    @
########$      @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#++:++#+$   @
  +#+$          @
 #+#$           @
###$            @@
      ::::::::$@
    :+:    :+:$@
   +:+    +:+$ @
  +#+    +:+$  @
 +#+    +#+$   @
#+#    #+#$    @
###########$   @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#++:++#:$   @
  +#+    +#+$   @
 #+#    #+#$    @
###    ###$     @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  +#++:++#++$  @
 $      +#+$   @
#+#    #+#$    @
########$      @@
  :::::::::::$@
     :+:$     @
    +:+$      @
   +#+$       @
  +#+$        @
 #+#$         @
###$          @@
     :::    :::$@
    :+:    :+:$ @
   +:+    +:+$  @
  +#+    +:+$   @
 +#+    +#+$    @
#+#    #+#$     @
########$       @@
   :::     :::$@
  :+:     :+:$ @
 +:+     +:+$  @
+#+     +:+$   @
+#+   +#+$     @
#+#+#+#$       @
 ###$          @@
    :::       :::$@
   :+:       :+:$ @
  +:+       +:+$  @
 +#+  +:+  +#+$   @
+#+ +#+#+ +#+$    @
#+#+# #+#+#$      @
###   ###$        @@
      :::    :::$@
     :+:    :+:$ @
     +:+  +:+$   @
     +#++:+$     @
   +#+  +#+$     @
 #+#    #+#$     @
###    ###$      @@
   :::   :::$@
  :+:   :+:$ @
  +:+ +:+$   @
  +#++:$     @
  +#+$       @
 #+#$        @
###$         @@
      :::::::::$@
          :+:$  @
        +:+$    @
      +#+$      @
    +#+$        @
  #+#$          @
#########$      @@
      ::::::$@
     :+:$    @
    +:+$     @
   +#+$      @
  +#+$       @
 #+#$        @
######$      @@
:::$@
:+:$@
+:+$@
+#+$@
+#+$@
#+#$@
###$@@
      ::::::$@
        :+:$ @
       +:+$  @
      +#+$   @
     +#+$    @
    #+#$     @
######$      @@
          :::$  @
       :+: :+:$ @
    +:+     +:+$@
   $         $  @
  $         $   @
 $         $    @
$         $     @@
      $        $@
     $        $ @
    $        $  @
   $        $   @
  $        $    @
 $        $     @
##########$     @@
     :::$@
     :+$ @
    $$   @
   $$    @
  $$     @
 $$      @
$$       @@
          :::$ @
       :+: :+:$@
     +:+   +:+$@
   +#++:++#++:$@
  +#+     +#+$ @
 #+#     #+#$  @
###     ###$   @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#++:++#+$   @
  +#+    +#+$   @
 #+#    #+#$    @
#########$      @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  +#+      $   @
 +#+      $    @
#+#    #+#$    @
########$      @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#+    +:+$  @
  +#+    +#+$   @
 #+#    #+#$    @
#########$      @@
      ::::::::::$@
     :+:$        @
    +:+$         @
   +#++:++#$     @
  +#+$           @
 #+#$            @
##########$      @@
      ::::::::::$@
     :+:$        @
    +:+$         @
   :#::+::#$     @
  +#+$           @
 #+#$            @
###$             @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  :#:      $   @
 +#+   +#+#$   @
#+#    #+#$    @
########$      @@
      :::    :::$@
     :+:    :+:$ @
    +:+    +:+$  @
   +#++:++#++$   @
  +#+    +#+$    @
 #+#    #+#$     @
###    ###$      @@
      :::::::::::$@
         :+:$     @
        +:+$      @
       +#+$       @
      +#+$        @
     #+#$         @
###########$      @@
     :::::::::::$@
        :+:$     @
       +:+$      @
      +#+$       @
     +#+$        @
#+# #+#$         @
#####$           @@
      :::    :::$@
     :+:   :+:$  @
    +:+  +:+$    @
   +#++:++$      @
  +#+  +#+$      @
 #+#   #+#$      @
###    ###$      @@
      :::$ @
     :+:$  @
    +:+$   @
   +#+$    @
  +#+$     @
 #+#$      @
##########$@@
        :::   :::$@
      :+:+: :+:+:$@
    +:+ +:+:+ +:+$@
   +#+  +:+  +#+$ @
  +#+       +#+$  @
 #+#       #+#$   @
###       ###$    @@
      ::::    :::$@
     :+:+:   :+:$ @
    :+:+:+  +:+$  @
   +#+ +:+ +#+$   @
  +#+  +#+#+#$    @
 #+#   #+#+#$     @
###    ####$      @@
      ::::::::$@
    :+:    :+:$@
   +:+    +:+$ @
  +#+    +:+$  @
 +#+    +#+$   @
#+#    #+#$    @
########$      @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#++:++#+$   @
  +#+$          @
 #+#$           @
###$            @@
      ::::::::$@
    :+:    :+:$@
   +:+    +:+$ @
  +#+    +:+$  @
 +#+    +#+$   @
#+#    #+#$    @
###########$   @@
      :::::::::$@
     :+:    :+:$@
    +:+    +:+$ @
   +#++:++#:$   @
  +#+    +#+$   @
 #+#    #+#$    @
###    ###$     @@
      ::::::::$@
    :+:    :+:$@
   +:+      $  @
  +#++:++#++$  @
 $      +#+$   @
#+#    #+#$    @
########$      @@
  :::::::::::$@
     :+:$     @
    +:+$      @
   +#+$       @
  +#+$        @
 #+#$         @
###$          @@
     :::    :::$@
    :+:    :+:$ @
   +:+    +:+$  @
  +#+    +:+$   @
 +#+    +#+$    @
#+#    #+#$     @
########$       @@
   :::     :::$@
  :+:     :+:$ @
 +:+     +:+$  @
+#+     +:+$   @
+#+   +#+$     @
#+#+#+#$       @
 ###$          @@
    :::       :::$@
   :+:       :+:$ @
  +:+       +:+$  @
 +#+  +:+  +#+$   @
+#+ +#+#+ +#+$    @
#+#+# #+#+#$      @
###   ###$        @@
      :::    :::$@
     :+:    :+:$ @
     +:+  +:+$   @
     +#++:+$     @
   +#+  +#+$     @
 #+#    #+#$     @
###    ###$      @@
   :::   :::$@
  :+:   :+:$ @
  +:+ +:+$   @
  +#++:$     @
  +#+$       @
 #+#$        @
###$         @@
      :::::::::$@
          :+:$  @
        +:+$    @
      +#+$      @
    +#+$        @
  #+#$          @
#########$      @@
      ::::$@
    :+:$   @
   +:+$    @
+#+$       @
 +#+$      @
#+#$       @
####$      @@
      :::$@
     :+:$ @
    +:+$  @
   $ $    @
  +#+$    @
 #+#$     @
###$      @@
      ::::$@
       :+:$@
      +:+$ @
       +#+$@
    +#+$   @
   #+#$    @
####$      @@
        :::::   :::$@
     :+:   :+:+:$   @
    $         $     @
   $         $      @
  $         $       @
 $         $        @
$         $         @@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@@
`;init_Slant();function Ascii(){const e=useAsciiText({animationCharacters:"▒░█",animationCharacterSpacing:1,animationDelay:2e3,animationDirection:"down",animationInterval:100,animationLoop:!0,animationSpeed:30,font:Alligator_default,text:["TERMINAL","SIGNAL"]});return jsxRuntimeExports.jsx("pre",{ref:e})}/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},_extends$1.apply(this,arguments)}var Action;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Action||(Action={}));const PopStateEventType="popstate";function createHashHistory(e){e===void 0&&(e={});function i(s,c){let{pathname:d="/",search:_="",hash:h=""}=parsePath(s.location.hash.substr(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),createLocation("",{pathname:d,search:_,hash:h},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(s,c){let d=s.document.querySelector("base"),_="";if(d&&d.getAttribute("href")){let h=s.location.href,g=h.indexOf("#");_=g===-1?h:h.slice(0,g)}return _+"#"+(typeof c=="string"?c:createPath(c))}function a(s,c){warning(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(c)+")")}return getUrlBasedHistory(i,o,a,e)}function invariant(e,i){if(e===!1||e===null||typeof e>"u")throw new Error(i)}function warning(e,i){if(!e){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function createKey(){return Math.random().toString(36).substr(2,8)}function getHistoryState(e,i){return{usr:e.state,key:e.key,idx:i}}function createLocation(e,i,o,a){return o===void 0&&(o=null),_extends$1({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof i=="string"?parsePath(i):i,{state:o,key:i&&i.key||a||createKey()})}function createPath(e){let{pathname:i="/",search:o="",hash:a=""}=e;return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),a&&a!=="#"&&(i+=a.charAt(0)==="#"?a:"#"+a),i}function parsePath(e){let i={};if(e){let o=e.indexOf("#");o>=0&&(i.hash=e.substr(o),e=e.substr(0,o));let a=e.indexOf("?");a>=0&&(i.search=e.substr(a),e=e.substr(0,a)),e&&(i.pathname=e)}return i}function getUrlBasedHistory(e,i,o,a){a===void 0&&(a={});let{window:s=document.defaultView,v5Compat:c=!1}=a,d=s.history,_=Action.Pop,h=null,g=nt();g==null&&(g=0,d.replaceState(_extends$1({},d.state,{idx:g}),""));function nt(){return(d.state||{idx:null}).idx}function _e(){_=Action.Pop;let _t=nt(),b=_t==null?null:_t-g;g=_t,h&&h({action:_,location:ut.location,delta:b})}function tt(_t,b){_=Action.Push;let $=createLocation(ut.location,_t,b);o&&o($,_t),g=nt()+1;let et=getHistoryState($,g),ct=ut.createHref($);try{d.pushState(et,"",ct)}catch(ht){if(ht instanceof DOMException&&ht.name==="DataCloneError")throw ht;s.location.assign(ct)}c&&h&&h({action:_,location:ut.location,delta:1})}function st(_t,b){_=Action.Replace;let $=createLocation(ut.location,_t,b);o&&o($,_t),g=nt();let et=getHistoryState($,g),ct=ut.createHref($);d.replaceState(et,"",ct),c&&h&&h({action:_,location:ut.location,delta:0})}function ft(_t){let b=s.location.origin!=="null"?s.location.origin:s.location.href,$=typeof _t=="string"?_t:createPath(_t);return $=$.replace(/ $/,"%20"),invariant(b,"No window.location.(origin|href) available to create URL for href: "+$),new URL($,b)}let ut={get action(){return _},get location(){return e(s,d)},listen(_t){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(PopStateEventType,_e),h=_t,()=>{s.removeEventListener(PopStateEventType,_e),h=null}},createHref(_t){return i(s,_t)},createURL:ft,encodeLocation(_t){let b=ft(_t);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:tt,replace:st,go(_t){return d.go(_t)}};return ut}var ResultType;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ResultType||(ResultType={}));function matchRoutes(e,i,o){return o===void 0&&(o="/"),matchRoutesImpl(e,i,o,!1)}function matchRoutesImpl(e,i,o,a){let s=typeof i=="string"?parsePath(i):i,c=stripBasename(s.pathname||"/",o);if(c==null)return null;let d=flattenRoutes(e);rankRouteBranches(d);let _=null;for(let h=0;_==null&&h<d.length;++h){let g=decodePath(c);_=matchRouteBranch(d[h],g,a)}return _}function flattenRoutes(e,i,o,a){i===void 0&&(i=[]),o===void 0&&(o=[]),a===void 0&&(a="");let s=(c,d,_)=>{let h={relativePath:_===void 0?c.path||"":_,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};h.relativePath.startsWith("/")&&(invariant(h.relativePath.startsWith(a),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(a.length));let g=joinPaths([a,h.relativePath]),nt=o.concat(h);c.children&&c.children.length>0&&(invariant(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),flattenRoutes(c.children,i,nt,g)),!(c.path==null&&!c.index)&&i.push({path:g,score:computeScore(g,c.index),routesMeta:nt})};return e.forEach((c,d)=>{var _;if(c.path===""||!((_=c.path)!=null&&_.includes("?")))s(c,d);else for(let h of explodeOptionalSegments(c.path))s(c,d,h)}),i}function explodeOptionalSegments(e){let i=e.split("/");if(i.length===0)return[];let[o,...a]=i,s=o.endsWith("?"),c=o.replace(/\?$/,"");if(a.length===0)return s?[c,""]:[c];let d=explodeOptionalSegments(a.join("/")),_=[];return _.push(...d.map(h=>h===""?c:[c,h].join("/"))),s&&_.push(...d),_.map(h=>e.startsWith("/")&&h===""?"/":h)}function rankRouteBranches(e){e.sort((i,o)=>i.score!==o.score?o.score-i.score:compareIndexes(i.routesMeta.map(a=>a.childrenIndex),o.routesMeta.map(a=>a.childrenIndex)))}const paramRe=/^:[\w-]+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=e=>e==="*";function computeScore(e,i){let o=e.split("/"),a=o.length;return o.some(isSplat)&&(a+=splatPenalty),i&&(a+=indexRouteValue),o.filter(s=>!isSplat(s)).reduce((s,c)=>s+(paramRe.test(c)?dynamicSegmentValue:c===""?emptySegmentValue:staticSegmentValue),a)}function compareIndexes(e,i){return e.length===i.length&&e.slice(0,-1).every((a,s)=>a===i[s])?e[e.length-1]-i[i.length-1]:0}function matchRouteBranch(e,i,o){let{routesMeta:a}=e,s={},c="/",d=[];for(let _=0;_<a.length;++_){let h=a[_],g=_===a.length-1,nt=c==="/"?i:i.slice(c.length)||"/",_e=matchPath({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},nt),tt=h.route;if(!_e&&g&&o&&!a[a.length-1].route.index&&(_e=matchPath({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},nt)),!_e)return null;Object.assign(s,_e.params),d.push({params:s,pathname:joinPaths([c,_e.pathname]),pathnameBase:normalizePathname(joinPaths([c,_e.pathnameBase])),route:tt}),_e.pathnameBase!=="/"&&(c=joinPaths([c,_e.pathnameBase]))}return d}function matchPath(e,i){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,a]=compilePath(e.path,e.caseSensitive,e.end),s=i.match(o);if(!s)return null;let c=s[0],d=c.replace(/(.)\/+$/,"$1"),_=s.slice(1);return{params:a.reduce((g,nt,_e)=>{let{paramName:tt,isOptional:st}=nt;if(tt==="*"){let ut=_[_e]||"";d=c.slice(0,c.length-ut.length).replace(/(.)\/+$/,"$1")}const ft=_[_e];return st&&!ft?g[tt]=void 0:g[tt]=(ft||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:d,pattern:e}}function compilePath(e,i,o){i===void 0&&(i=!1),o===void 0&&(o=!0),warning(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,_,h)=>(a.push({paramName:_,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),a]}function decodePath(e){try{return e.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return warning(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),e}}function stripBasename(e,i){if(i==="/")return e;if(!e.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,a=e.charAt(o);return a&&a!=="/"?null:e.slice(o)||"/"}const joinPaths=e=>e.join("/").replace(/\/\/+/g,"/"),normalizePathname=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function isRouteErrorResponse(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const validMutationMethodsArr=["post","put","patch","delete"];new Set(validMutationMethodsArr);const validRequestMethodsArr=["get",...validMutationMethodsArr];new Set(validRequestMethodsArr);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},_extends.apply(this,arguments)}const DataRouterContext=reactExports.createContext(null),DataRouterStateContext=reactExports.createContext(null),NavigationContext=reactExports.createContext(null),LocationContext=reactExports.createContext(null),RouteContext=reactExports.createContext({outlet:null,matches:[],isDataRoute:!1}),RouteErrorContext=reactExports.createContext(null);function useInRouterContext(){return reactExports.useContext(LocationContext)!=null}function useLocation(){return useInRouterContext()||invariant(!1),reactExports.useContext(LocationContext).location}function useRoutes(e,i){return useRoutesImpl(e,i)}function useRoutesImpl(e,i,o,a){useInRouterContext()||invariant(!1);let{navigator:s}=reactExports.useContext(NavigationContext),{matches:c}=reactExports.useContext(RouteContext),d=c[c.length-1],_=d?d.params:{};d&&d.pathname;let h=d?d.pathnameBase:"/";d&&d.route;let g=useLocation(),nt;if(i){var _e;let _t=typeof i=="string"?parsePath(i):i;h==="/"||(_e=_t.pathname)!=null&&_e.startsWith(h)||invariant(!1),nt=_t}else nt=g;let tt=nt.pathname||"/",st=tt;if(h!=="/"){let _t=h.replace(/^\//,"").split("/");st="/"+tt.replace(/^\//,"").split("/").slice(_t.length).join("/")}let ft=matchRoutes(e,{pathname:st}),ut=_renderMatches(ft&&ft.map(_t=>Object.assign({},_t,{params:Object.assign({},_,_t.params),pathname:joinPaths([h,s.encodeLocation?s.encodeLocation(_t.pathname).pathname:_t.pathname]),pathnameBase:_t.pathnameBase==="/"?h:joinPaths([h,s.encodeLocation?s.encodeLocation(_t.pathnameBase).pathname:_t.pathnameBase])})),c,o,a);return i&&ut?reactExports.createElement(LocationContext.Provider,{value:{location:_extends({pathname:"/",search:"",hash:"",state:null,key:"default"},nt),navigationType:Action.Pop}},ut):ut}function DefaultErrorComponent(){let e=useRouteError(),i=isRouteErrorResponse(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return reactExports.createElement(reactExports.Fragment,null,reactExports.createElement("h2",null,"Unexpected Application Error!"),reactExports.createElement("h3",{style:{fontStyle:"italic"}},i),o?reactExports.createElement("pre",{style:s},o):null,null)}const defaultErrorElement=reactExports.createElement(DefaultErrorComponent,null);class RenderErrorBoundary extends reactExports.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?reactExports.createElement(RouteContext.Provider,{value:this.props.routeContext},reactExports.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RenderedRoute(e){let{routeContext:i,match:o,children:a}=e,s=reactExports.useContext(DataRouterContext);return s&&s.static&&s.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=o.route.id),reactExports.createElement(RouteContext.Provider,{value:i},a)}function _renderMatches(e,i,o,a){var s;if(i===void 0&&(i=[]),o===void 0&&(o=null),a===void 0&&(a=null),e==null){var c;if((c=o)!=null&&c.errors)e=o.matches;else return null}let d=e,_=(s=o)==null?void 0:s.errors;if(_!=null){let nt=d.findIndex(_e=>_e.route.id&&(_==null?void 0:_[_e.route.id])!==void 0);nt>=0||invariant(!1),d=d.slice(0,Math.min(d.length,nt+1))}let h=!1,g=-1;if(o&&a&&a.v7_partialHydration)for(let nt=0;nt<d.length;nt++){let _e=d[nt];if((_e.route.HydrateFallback||_e.route.hydrateFallbackElement)&&(g=nt),_e.route.id){let{loaderData:tt,errors:st}=o,ft=_e.route.loader&&tt[_e.route.id]===void 0&&(!st||st[_e.route.id]===void 0);if(_e.route.lazy||ft){h=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}return d.reduceRight((nt,_e,tt)=>{let st,ft=!1,ut=null,_t=null;o&&(st=_&&_e.route.id?_[_e.route.id]:void 0,ut=_e.route.errorElement||defaultErrorElement,h&&(g<0&&tt===0?(ft=!0,_t=null):g===tt&&(ft=!0,_t=_e.route.hydrateFallbackElement||null)));let b=i.concat(d.slice(0,tt+1)),$=()=>{let et;return st?et=ut:ft?et=_t:_e.route.Component?et=reactExports.createElement(_e.route.Component,null):_e.route.element?et=_e.route.element:et=nt,reactExports.createElement(RenderedRoute,{match:_e,routeContext:{outlet:nt,matches:b,isDataRoute:o!=null},children:et})};return o&&(_e.route.ErrorBoundary||_e.route.errorElement||tt===0)?reactExports.createElement(RenderErrorBoundary,{location:o.location,revalidation:o.revalidation,component:ut,error:st,children:$(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):$()},null)}var DataRouterStateHook$1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(DataRouterStateHook$1||{});function useDataRouterState(e){let i=reactExports.useContext(DataRouterStateContext);return i||invariant(!1),i}function useRouteContext(e){let i=reactExports.useContext(RouteContext);return i||invariant(!1),i}function useCurrentRouteId(e){let i=useRouteContext(),o=i.matches[i.matches.length-1];return o.route.id||invariant(!1),o.route.id}function useRouteError(){var e;let i=reactExports.useContext(RouteErrorContext),o=useDataRouterState(DataRouterStateHook$1.UseRouteError),a=useCurrentRouteId(DataRouterStateHook$1.UseRouteError);return i!==void 0?i:(e=o.errors)==null?void 0:e[a]}function Route(e){invariant(!1)}function Router(e){let{basename:i="/",children:o=null,location:a,navigationType:s=Action.Pop,navigator:c,static:d=!1,future:_}=e;useInRouterContext()&&invariant(!1);let h=i.replace(/^\/*/,"/"),g=reactExports.useMemo(()=>({basename:h,navigator:c,static:d,future:_extends({v7_relativeSplatPath:!1},_)}),[h,_,c,d]);typeof a=="string"&&(a=parsePath(a));let{pathname:nt="/",search:_e="",hash:tt="",state:st=null,key:ft="default"}=a,ut=reactExports.useMemo(()=>{let _t=stripBasename(nt,h);return _t==null?null:{location:{pathname:_t,search:_e,hash:tt,state:st,key:ft},navigationType:s}},[h,nt,_e,tt,st,ft,s]);return ut==null?null:reactExports.createElement(NavigationContext.Provider,{value:g},reactExports.createElement(LocationContext.Provider,{children:o,value:ut}))}function Routes(e){let{children:i,location:o}=e;return useRoutes(createRoutesFromChildren(i),o)}new Promise(()=>{});function createRoutesFromChildren(e,i){i===void 0&&(i=[]);let o=[];return reactExports.Children.forEach(e,(a,s)=>{if(!reactExports.isValidElement(a))return;let c=[...i,s];if(a.type===reactExports.Fragment){o.push.apply(o,createRoutesFromChildren(a.props.children,c));return}a.type!==Route&&invariant(!1),!a.props.index||!a.props.children||invariant(!1);let d={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=createRoutesFromChildren(a.props.children,c)),o.push(d)}),o}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const REACT_ROUTER_VERSION="6";try{window.__reactRouterVersion=REACT_ROUTER_VERSION}catch{}const START_TRANSITION="startTransition",startTransitionImpl=React[START_TRANSITION];function HashRouter(e){let{basename:i,children:o,future:a,window:s}=e,c=reactExports.useRef();c.current==null&&(c.current=createHashHistory({window:s,v5Compat:!0}));let d=c.current,[_,h]=reactExports.useState({action:d.action,location:d.location}),{v7_startTransition:g}=a||{},nt=reactExports.useCallback(_e=>{g&&startTransitionImpl?startTransitionImpl(()=>h(_e)):h(_e)},[h,g]);return reactExports.useLayoutEffect(()=>d.listen(nt),[d,nt]),reactExports.createElement(Router,{basename:i,children:o,location:_.location,navigationType:_.action,navigator:d,future:a})}var DataRouterHook;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(DataRouterHook||(DataRouterHook={}));var DataRouterStateHook;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(DataRouterStateHook||(DataRouterStateHook={}));function App(){const userInputRef=reactExports.useRef(null),outputRef=reactExports.useRef(null),terminalBodyRef=reactExports.useRef(null),[outputContent,setOutputContent]=reactExports.useState([]),[typingEffect,setTypingEffect]=reactExports.useState({text:"",index:0}),[stopwatch,setStopwatch]=reactExports.useState({isRunning:!1,startTime:null,elapsedTime:0}),stopwatchInterval=reactExports.useRef(null),[clearAnimation,setClearAnimation]=reactExports.useState(!1),[isGlitching,setIsGlitching]=reactExports.useState(!1);reactExports.useEffect(()=>(focusUserInput(),document.addEventListener("click",handleDocumentClick),()=>{document.removeEventListener("click",handleDocumentClick),stopwatchInterval.current&&clearInterval(stopwatchInterval.current)}),[]);function focusUserInput(){var e;(e=userInputRef.current)==null||e.focus()}function handleDocumentClick(e){var i;(i=userInputRef.current)!=null&&i.contains(e.target)||focusUserInput()}function handleKeyDown(e){if(e.key==="Enter"){e.preventDefault();const i=userInputRef.current.value.trim();i&&setOutputContent(a=>[...a,{type:"command",content:i}]);const o=processCommand(i);userInputRef.current.value="",focusUserInput(),setOutputContent(o!==null?a=>[...a,{type:"response",content:o}]:a=>[...a,{type:"response",content:""}])}}function processCommand(command){const cmd=command.toLowerCase();let response="";switch(cmd){case"creator":response='Hey! My name is Maxim, and I am a frontend developer. I made this terminal "SIGNAL" just for fun in 4 hours, enjoy.';break;case"about":response='This is a Terminal "SIGNAL" which functions like a terminal with its own commands. Write other commands to see what happens.';break;case"help":response=`Types of commands:
about
calc
contact
creator
clear
echo
problem
watch start/watch end`;break;case"contact":response='You can reach me via email at "kokorewmaxim@inbox.ru" or my telegramm account @hopelesshex.';break;case"problem":response="If you had found a bug or problem try to clear or press F5 to refresh the page. If that doesnt help to resolve the issue, please write about it in my telegramm account @hopelesshex.";break;case"clear":return setClearAnimation(!0),setTimeout(()=>{setOutputContent([]),setClearAnimation(!1)},1e3),"";case"signal":setIsGlitching(!0),setTimeout(()=>{setIsGlitching(!1)},3e3),response="Signal Error...";break;case"":return"";default:if(cmd.startsWith("echo "))response=cmd.substring(5);else if(cmd.startsWith("calc "))try{const expression=cmd.substring(5),result=eval(expression);response=`Result: ${result}`}catch(e){response="Error: Incorrect math expression"}else cmd==="watch start"?stopwatch.isRunning?response="Stopwatch already running":(setStopwatch({isRunning:!0,startTime:Date.now(),elapsedTime:0}),stopwatchInterval.current=setInterval(()=>{setStopwatch(e=>({...e,elapsedTime:Date.now()-e.startTime}))},10),response="Stopwatch started"):cmd==="watch end"?stopwatch.isRunning?(clearInterval(stopwatchInterval.current),setStopwatch(e=>({...e,isRunning:!1})),response=`Stopwatch stopped. Time elapsed: ${formatTime(stopwatch.elapsedTime)}`):response="Stopwatch was not started":response=`Command not found: ${command}`}return setTypingEffect({text:response,index:0}),null}function formatTime(e){const i=Math.floor(e/1e3),o=Math.floor(i/60),a=i%60,s=e%1e3;return`${o.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}.${s.toString().padStart(3,"0")}`}return reactExports.useEffect(()=>{if(typingEffect.index<typingEffect.text.length){const e=setTimeout(()=>{setTypingEffect(i=>({...i,index:i.index+1})),setOutputContent(i=>{const o=[...i];return o[o.length-1]={type:"response",content:typingEffect.text.slice(0,typingEffect.index+1)},o})},50);return()=>clearTimeout(e)}},[typingEffect]),reactExports.useEffect(()=>{terminalBodyRef.current&&(terminalBodyRef.current.scrollTop=terminalBodyRef.current.scrollHeight)},[outputContent]),jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(Routes,{children:jsxRuntimeExports.jsx(Route,{path:"/",element:jsxRuntimeExports.jsxs("div",{className:`terminal-window ${isGlitching?"glitch":""}`,children:[jsxRuntimeExports.jsx("div",{className:"scanline"}),jsxRuntimeExports.jsx("div",{className:"crt-overlay"}),jsxRuntimeExports.jsxs("div",{className:"terminal-header",children:[jsxRuntimeExports.jsx("div",{className:"button red"}),jsxRuntimeExports.jsx("div",{className:"button yellow"}),jsxRuntimeExports.jsx("div",{className:"button green"})]}),jsxRuntimeExports.jsx("div",{className:"ascii-art",children:jsxRuntimeExports.jsx(Ascii,{})}),jsxRuntimeExports.jsxs("div",{className:`terminal-body ${clearAnimation?"clear-animation":""} ${isGlitching?"glitch-text":""}`,ref:terminalBodyRef,children:[jsxRuntimeExports.jsxs("p",{children:["Write ",jsxRuntimeExports.jsx("span",{children:"help"})," to see all commands"]}),stopwatch.isRunning&&jsxRuntimeExports.jsxs("div",{className:"stopwatch",children:["Stopwatch: ",formatTime(stopwatch.elapsedTime)]}),jsxRuntimeExports.jsx("div",{className:"output",ref:outputRef,children:outputContent.map((e,i)=>jsxRuntimeExports.jsx("div",{className:e.type==="command"?"command-line":"response-line",children:e.type==="command"?`user@signal.terminal:~$ ${e.content}`:e.content},i))}),jsxRuntimeExports.jsxs("div",{className:"command-line",children:[jsxRuntimeExports.jsx("span",{children:" user@signal.terminal:~$ "}),jsxRuntimeExports.jsx("input",{type:"text",id:"userInput",autoComplete:"off",ref:userInputRef,onKeyDown:handleKeyDown})]})]})]})})})})}const root=client.createRoot(document.getElementById("root"));root.render(jsxRuntimeExports.jsx(HashRouter,{children:jsxRuntimeExports.jsx(App,{})}));
