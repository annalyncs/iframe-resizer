/**
 *  iframe-resizer (child) v5.0.0-alpha.1
 *
 *  License:    GPL-3.0
 *  Copyright:  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 * 
 *  Desciption: Keep same and cross domain iFrames sized to their content with
 *              support for window/content resizing, and multiple iFrames.
 *
 *  @preserve
 *  @module @iframe-resizer/child
 *  @version 5.0.0-alpha.1
 *  @license GPL-3.0
 *  @author David J. Bradshaw <dave@bradshaw.net>
 *  @fileoverview Child window script for iframe-resizer.
 *  @copyright (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 *  @see {@link https://github.com/davidjbradshaw/iframe-resizer}
 */


!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e=10,t="data-iframe-size",n=(e,t,n,o)=>e.addEventListener(t,n,o||!1),o=(e,t,n)=>e.removeEventListener(t,n,!1),i={contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0},a={height:()=>(ee("Custom height calculation function not defined"),Se.auto()),width:()=>(ee("Custom width calculation function not defined"),ze.auto())},r={bodyOffset:1,bodyScroll:1,offset:1,documentElementOffset:1,documentElementScroll:1,documentElementBoundingClientRect:1,max:1,min:1,grow:1,lowestElement:1},c=128,s={},d="checkVisibility"in window,m="auto",l="[iFrameSizer]",u=l.length,f={max:1,min:1,bodyScroll:1,documentElementScroll:1},h=["body"],g="scroll";let p=!0,w="",y=0,v="",b=null,$="",E=!0,S=!1,z=null,O=!0,M=!1,T=1,C=m,I=!0,x="",R={},N=!0,P=!1,A=!1,B="",L=0,k=0,F="child",H=null,q=!1,D=window.parent,U="*",W=0,V=!1,j=1,J=g,Q=window,X=()=>{ee("onMessage function not defined")},Y=()=>{},G=null,K=null;const Z=e=>""!=`${e}`&&void 0!==e;const _=(...e)=>[`${l}[${B}]`,...e].join(" "),ee=(...e)=>console?.warn(_(...e)),te=(...e)=>console?.warn(window.chrome?_(...e):_(...e).replaceAll(/\u001B\[[\d;]*m/gi,""));function ne(){!function(){try{q="iFrameListener"in window.parent}catch(e){}}(),function(){const e=e=>"true"===e,t=x.slice(u).split(":");B=t[0],y=void 0===t[1]?y:Number(t[1]),S=void 0===t[2]?S:e(t[2]),P=void 0===t[3]?P:e(t[3]),p=void 0===t[6]?p:e(t[6]),v=t[7],C=void 0===t[8]?C:t[8],w=t[9],$=t[10],W=void 0===t[11]?W:Number(t[11]),R.enable=void 0!==t[12]&&e(t[12]),F=void 0===t[13]?F:t[13],J=void 0===t[14]?J:t[14],A=void 0===t[15]?A:e(t[15]),L=void 0===t[16]?L:Number(t[16]),k=void 0===t[17]?k:Number(t[17]),E=void 0===t[18]?E:e(t[18])}(),function(){function e(){const e=window.iFrameResizer;X=e?.onMessage||X,Y=e?.onReady||Y,L=e?.offsetHeight||L,k=e?.offsetWidth||k,U=e?.targetOrigin||U,C=e?.heightCalculationMethod||C,J=e?.widthCalculationMethod||J}function t(e,t){return"function"==typeof e&&(a[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),C=t(C,"height"),J=t(J,"width"))}(),function(){void 0===v&&(v=`${y}px`);oe("margin",function(e,t){t.includes("-")&&(ee(`Negative CSS value ignored for ${e}`),t="");return t}("margin",v))}(),oe("background",w),oe("padding",$),function(){const e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.append(e)}(),function(){const e=e=>e.style.setProperty("height","auto","important");e(document.documentElement),e(document.body)}(),se(),de(),function(){let e=!1;const n=n=>document.querySelectorAll(`[${n}]`).forEach((o=>{e=!0,o.removeAttribute(n),o.setAttribute(t,null)}));n("data-iframe-height"),n("data-iframe-width"),e&&te("\n[31;1mDeprecated Attributes[m\n          \nThe [1mdata-iframe-height[m and [1mdata-iframe-width[m attributes have been deprecated and replaced with the single [1mdata-iframe-size[m attribute. Use of the old attributes will be removed in a future version of [3miframe-resizer[m.")}(),document.querySelectorAll(`[${t}]`).length>0&&("auto"===C&&(C="autoOverflow"),"auto"===J&&(J="autoOverflow")),re(),Q.parentIFrame={autoResize:e=>(!0===e&&!1===p?(p=!0,me()):!1===e&&!0===p&&(p=!1,ae("remove"),H?.disconnect(),b?.disconnect()),xe(0,0,"autoResize",JSON.stringify(p)),p),close(){xe(0,0,"close")},getId:()=>B,getPageInfo(e){if("function"==typeof e)return G=e,xe(0,0,"pageInfo"),void te("\n[31;1mDeprecated Method (getPageInfo()[m\n          \nThe [1mgetPageInfo()[m method has been deprecated and replaced with  [1mgetParentInfo()[m. Use of this method will be removed in a future version of [3miframe-resizer[m.\n");G=null,xe(0,0,"pageInfoStop")},getParentInfo(e){if("function"==typeof e)return K=e,void xe(0,0,"parentInfo");K=null,xe(0,0,"parentInfoStop")},moveToAnchor(e){R.findTarget(e)},reset(){Ie()},scrollTo(e,t){xe(t,e,"scrollTo")},scrollToOffset(e,t){xe(t,e,"scrollToOffset")},sendMessage(e,t){xe(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod(e){C=e,se()},setWidthCalculationMethod(e){J=e,de()},setTargetOrigin(e){U=e},size(e,t){Me("size",`parentIFrame.size(${e||""}${t?`,${t}`:""})`,e,t)}},function(){if(!0!==A)return;function e(e){xe(0,0,e.type,`${e.screenY}:${e.screenX}`)}function t(t,o){n(window.document,t,e)}t("mouseenter"),t("mouseleave")}(),me(),R=function(){const t=()=>({x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop});function o(n){const o=n.getBoundingClientRect(),i=t();return{x:parseInt(o.left,e)+parseInt(i.x,e),y:parseInt(o.top,e)+parseInt(i.y,e)}}function i(e){function t(e){const t=o(e);xe(t.y,t.x,"scrollToOffset")}const n=e.split("#")[1]||e,i=decodeURIComponent(n),a=document.getElementById(i)||document.getElementsByName(i)[0];void 0===a?xe(0,0,"inPageLink",`#${n}`):t(a)}function a(){const{hash:e,href:t}=window.location;""!==e&&"#"!==e&&i(t)}function r(){function e(e){function t(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&n(e,"click",t)}document.querySelectorAll('a[href^="#"]').forEach(e)}function s(){n(window,"hashchange",a)}function d(){setTimeout(a,c)}function m(){r(),s(),d()}R.enable&&m();return{findTarget:i}}(),Me("init","Init message from host page"),Y(),N=!1}function oe(e,t){void 0!==t&&""!==t&&"null"!==t&&document.body.style.setProperty(e,t)}function ie(e){({add(t){function o(){Me(e.eventName,e.eventType)}s[t]=o,n(window,t,o,{passive:!0})},remove(e){const t=s[e];delete s[e],o(window,e,t)}})[e.method](e.eventName)}function ae(e){ie({method:e,eventType:"After Print",eventName:"afterprint"}),ie({method:e,eventType:"Before Print",eventName:"beforeprint"}),ie({method:e,eventType:"Ready State Change",eventName:"readystatechange"})}function re(){const e=document.querySelectorAll(`[${t}]`);M=e.length>0,z=M?e:ve(document)()}function ce(e,t,n,o){return t!==e&&(e in n||(ee(`${e} is not a valid option for ${o}CalculationMethod.`),e=t),e in r&&te(`\n[31;1mDeprecated ${o}CalculationMethod (${e})[m\n\nThis version of [3miframe-resizer[m can auto detect the most suitable ${o} calculation method. It is recommended that you remove this option.`)),e}function se(){C=ce(C,m,Se,"height")}function de(){J=ce(J,g,ze,"width")}function me(){!0===p&&(ae("add"),b=function(){function e(e){e.forEach(pe),re()}function t(){const t=new window.MutationObserver(e),n=document.querySelector("body"),o={attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0};return t.observe(n,o),t}const n=t();return{disconnect(){n.disconnect()}}}(),H=new ResizeObserver(le),ge(window.document))}function le(e){Me("resizeObserver",`resizeObserver: ${function(e){switch(!0){case!Z(e):return"";case Z(e.id):return`${e.nodeName.toUpperCase()}#${e.id}`;case Z(e.name):return`${e.nodeName.toUpperCase()} (${e.name})`;default:return e.nodeName.toUpperCase()+(Z(e.className)?`.${e.className}`:"")}}(e[0].target)}`)}const ue=e=>{const t=getComputedStyle(e);return""!==t?.position&&"static"!==t?.position},fe=()=>[...ve(document)()].filter(ue);function he(e){e&&H.observe(e)}function ge(e){[...fe(),...h.flatMap((t=>e.querySelector(t)))].forEach(he)}function pe(e){"childList"===e.type&&ge(e.target)}function we(e){const t=(n=e).charAt(0).toUpperCase()+n.slice(1);var n;let o,a=0,r=z.length,c=0,s=performance.now();z.forEach((n=>{M||!d||n.checkVisibility(i)?(a=n.getBoundingClientRect()[e]+getComputedStyle(n).getPropertyValue(`margin${t}`),a>c&&(c=a,o=n)):r-=1})),s=performance.now()-s;const m=`\nParsed ${r} element${r=""} in ${s.toPrecision(3)}ms\n${t} ${M?"tagged":""} element found at: ${c}px\nPosition calculated from HTML element: ${function(e){const t=e?.outerHTML?.toString();return t?t.length<30?t:`${t.slice(0,30).replaceAll("\n"," ")}...`:e}(o)}`;return s<1.1||N||M||te(`\n[31;1mPerformance Warning[m\n\nCalculateing the page size took an excessive amount of time. To improve performace add the [1mdata-iframe-size[m attribute to the ${e} element on the page.\n${m}`),c}const ye=e=>[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll(),e.documentElementBoundingClientRect()],ve=e=>()=>e.querySelectorAll("* :not(head):not(meta):not(base):not(title):not(script):not(link):not(style):not(map):not(area):not(option):not(optgroup):not(template):not(track):not(wbr):not(nobr)");const be={height:0,width:0},$e={height:0,width:0};function Ee(e,t){function n(){return $e[i]=a,be[i]=s,a}const o=e===Se,i=o?"height":"width",a=e.documentElementBoundingClientRect(),r=Math.ceil(a),c=Math.floor(a),s=(e=>e.documentElementScroll()+Math.max(0,e.getOffset()))(e);switch(!0){case!e.enabled():return s;case!t&&0===$e[i]&&0===be[i]:if(e.taggedElement(!0)<=r)return n();break;case V&&a===$e[i]&&s===be[i]:return Math.max(a,s);case 0===a:return s;case!t&&a!==$e[i]&&s<=be[i]:case!t&&a<$e[i]:case s===c||s===r:case a>s:return n();case!t:!function({ceilBoundingSize:e,dimension:t,isHeight:n,scrollSize:o}){const i=n?"bottom":"right";te(`\n[31;1mDetected content overflowing html element[m\n    \nThis causes [3miframe-resizer[m to fall back to checking the position of every element on the page in order to calculate the correct dimensions of the iframe. Inspecting the size, ${i} margin, and position of every visable HTML element will have a performace impact on more complex pages. \n\nTo fix this issue, and remove this warning, you can either ensure the content of the page does not overflow the [1m<HTML>[m element or alternatively you can add the attribute [1mdata-iframe-size[m to the elements on the page that you want [3miframe-resizer[m to use when calculating the dimensions of the iframe. \n  \nWhen present the [3m${i} margin of the ${n?"lowest":"right most"} element[m with a [1mdata-iframe-size[m attribute will be used to set the ${t} of the iframe.\n    \n(Page size: ${o} > document size: ${e})`),n?C="autoOverflow":J="autoOverflow"}({ceilBoundingSize:r,dimension:i,isHeight:o,scrollSize:s})}return Math.max(e.taggedElement(),n())}const Se={enabled:()=>E,getOffset:()=>L,type:"height",auto:()=>Ee(Se,!1),autoOverflow:()=>Ee(Se,!0),bodyOffset:()=>{const{body:t}=document,n=getComputedStyle(t);return t.offsetHeight+parseInt(n.marginTop,e)+parseInt(n.marginBottom,e)},bodyScroll:()=>document.body.scrollHeight,offset:()=>Se.bodyOffset(),custom:()=>a.height(),documentElementOffset:()=>document.documentElement.offsetHeight,documentElementScroll:()=>document.documentElement.scrollHeight,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().bottom,max:()=>Math.max(...ye(Se)),min:()=>Math.min(...ye(Se)),grow:()=>Se.max(),lowestElement:()=>we("bottom"),taggedElement:()=>we("bottom")},ze={enabled:()=>S,getOffset:()=>k,type:"width",auto:()=>Ee(ze,!1),autoOverflow:()=>Ee(ze,!0),bodyScroll:()=>document.body.scrollWidth,bodyOffset:()=>document.body.offsetWidth,custom:()=>a.width(),documentElementScroll:()=>document.documentElement.scrollWidth,documentElementOffset:()=>document.documentElement.offsetWidth,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().right,max:()=>Math.max(...ye(ze)),min:()=>Math.min(...ye(ze)),rightMostElement:()=>we("right"),scroll:()=>Math.max(ze.bodyScroll(),ze.documentElementScroll()),taggedElement:()=>we("right")};function Oe(e,t,n,o){let i,a;!function(){const e=(e,t)=>!(Math.abs(e-t)<=W);return i=Math.ceil(void 0===n?Se[C]():n),a=Math.ceil(void 0===o?ze[J]():o),E&&e(T,i)||S&&e(j,a)}()&&"init"!==e?!(e in{init:1,size:1})&&(E&&C in f||S&&J in f)&&Ie():(Te(),T=i,j=a,xe(T,j,e))}function Me(e,t,n,o){document.hidden||Oe(e,0,n,o)}function Te(){V||(V=!0,requestAnimationFrame((()=>{V=!1})))}function Ce(e){T=Se[C](),j=ze[J](),xe(T,j,e)}function Ie(e){const t=C;C=m,Te(),Ce("reset"),C=t}function xe(e,t,n,o,i){void 0!==i||(i=U),function(){const a=`${B}:${e+L}:${t+k}:${n}${void 0===o?"":`:${o}`}`;q?window.parent.iFrameListener(l+a):D.postMessage(l+a,i)}()}function Re(e){const t={init:function(){x=e.data,D=e.source,ne(),O=!1,setTimeout((()=>{I=!1}),c)},reset(){I||Ce("resetPage")},resize(){Me("resizeParent")},moveToAnchor(){R.findTarget(o())},inPageLink(){this.moveToAnchor()},pageInfo(){const e=o();G?G(JSON.parse(e)):xe(0,0,"pageInfoStop")},parentInfo(){const e=o();K?K(Object.freeze(JSON.parse(e))):xe(0,0,"parentInfoStop")},message(){const e=o();X(JSON.parse(e))}},n=()=>e.data.split("]")[1].split(":")[0],o=()=>e.data.slice(e.data.indexOf(":")+1),i=()=>"iFrameResize"in window||void 0!==window.jQuery&&"iFrameResize"in window.jQuery.prototype,a=()=>e.data.split(":")[2]in{true:1,false:1};l===`${e.data}`.slice(0,u)&&(!1!==O?a()&&t.init():function(){const o=n();o in t?t[o]():i()||a()||ee(`Unexpected message (${e.data})`)}())}function Ne(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}function Pe(e){return Re(e),Q}"undefined"!=typeof window&&(window.iFrameListener=e=>Re({data:e,sameDomian:!0}),n(window,"message",Re),n(window,"readystatechange",Ne),Ne());try{top?.document?.getElementById("banner")&&(Q={},o(window,"message",Re),define([],(()=>Pe)))}catch(e){}}));