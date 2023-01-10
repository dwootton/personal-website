"use strict";(self.webpackChunkgatsby_starter_apple=self.webpackChunkgatsby_starter_apple||[]).push([[317],{4020:function(e){var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function i(e,t){try{return[decodeURIComponent(e.join(""))]}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],i(r),i(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=i(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},i=n.exec(e);i;){try{r[i[0]]=decodeURIComponent(i[0])}catch(t){var a=o(i[0]);a!==i[0]&&(r[i[0]]=a)}i=n.exec(e)}r["%C2"]="�";for(var s=Object.keys(r),l=0;l<s.length;l++){var c=s[l];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},7187:function(e){var t,r="object"==typeof Reflect?Reflect:null,n=r&&"function"==typeof r.apply?r.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};t=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(r,n){function i(r){e.removeListener(t,o),n(r)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",i),r([].slice.call(arguments))}g(e,t,o,{once:!0}),"error"!==t&&function(e,t,r){"function"==typeof e.on&&g(e,"error",t,r)}(e,i,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var a=10;function s(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function c(e,t,r,n){var i,o,a,c;if(s(r),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),o=e._events),a=o[t]),void 0===a)a=o[t]=r,++e._eventsCount;else if("function"==typeof a?a=o[t]=n?[r,a]:[a,r]:n?a.unshift(r):a.push(r),(i=l(e))>0&&a.length>i&&!a.warned){a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=a.length,c=u,console&&console.warn&&console.warn(c)}return e}function u(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},i=u.bind(n);return i.listener=r,n.wrapFn=i,i}function p(e,t,r){var n=e._events;if(void 0===n)return[];var i=n[t];return void 0===i?[]:"function"==typeof i?r?[i.listener||i]:[i]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(i):m(i,i.length)}function f(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function m(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}function g(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){n.once&&e.removeEventListener(t,i),r(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return l(this)},o.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var l=o[e];if(void 0===l)return!1;if("function"==typeof l)n(l,this,t);else{var c=l.length,u=m(l,c);for(r=0;r<c;++r)n(u[r],this,t)}return!0},o.prototype.addListener=function(e,t){return c(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return c(this,e,t,!0)},o.prototype.once=function(e,t){return s(t),this.on(e,d(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return s(t),this.prependListener(e,d(this,e,t)),this},o.prototype.removeListener=function(e,t){var r,n,i,o,a;if(s(t),void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(i=-1,o=r.length-1;o>=0;o--)if(r[o]===t||r[o].listener===t){a=r[o].listener,i=o;break}if(i<0)return this;0===i?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,i),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,a||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var i,o=Object.keys(r);for(n=0;n<o.length;++n)"removeListener"!==(i=o[n])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},o.prototype.listeners=function(e){return p(this,e,!0)},o.prototype.rawListeners=function(e){return p(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):f.call(e,t)},o.prototype.listenerCount=f,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},2806:function(e){e.exports=function(e,t){for(var r={},n=Object.keys(e),i=Array.isArray(t),o=0;o<n.length;o++){var a=n[o],s=e[a];(i?-1!==t.indexOf(a):t(a,s,e))&&(r[a]=s)}return r}},3723:function(e,t,r){r.d(t,{G:function(){return S},L:function(){return f},M:function(){return E},P:function(){return w},_:function(){return s},a:function(){return a},b:function(){return c},g:function(){return u},h:function(){return l}});var n=r(7294),i=(r(2369),r(5697)),o=r.n(i);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r,n,i){return void 0===i&&(i={}),a({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:a({},i,{opacity:t?1:0})})}function u(e,t,r,n,i,o,s,l){const c={};o&&(c.backgroundColor=o,"fixed"===r?(c.width=n,c.height=i,c.backgroundColor=o,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=a({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const d=["children"],p=function(e){let{layout:t,width:r,height:i}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,r=s(e,d);return n.createElement(n.Fragment,null,n.createElement(p,a({},r)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:r,loading:i,alt:o="",shouldLoad:l}=e,c=s(e,m);return n.createElement("img",a({},c,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:o}))},y=function(e){let{fallback:t,sources:r=[],shouldLoad:i=!0}=e,o=s(e,g);const l=o.sizes||(null==t?void 0:t.sizes),c=n.createElement(h,a({},o,t,{sizes:l,shouldLoad:i}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:o}=e;return n.createElement("source",{key:t+"-"+o+"-"+r,type:o,media:t,srcSet:i?r:void 0,"data-srcset":i?void 0:r,sizes:l})})),c):c};var v;h.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},y.displayName="Picture",y.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const b=["fallback"],w=function(e){let{fallback:t}=e,r=s(e,b);return t?n.createElement(y,a({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",a({},r))};w.displayName="Placeholder",w.propTypes={fallback:i.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(y,a({},e)),n.createElement("noscript",null,n.createElement(y,a({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const x=function(e,t,r){for(var n=arguments.length,i=new Array(n>3?n-3:0),a=3;a<n;a++)i[a-3]=arguments[a];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(i)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:o().object.isRequired,alt:x},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],L=new Set;let O,j;const I=function(e){let{as:t="div",image:i,style:o,backgroundColor:c,className:u,class:d,onStartLoad:p,onLoad:f,onError:m}=e,g=s(e,k);const{width:h,height:y,layout:v}=i,b=function(e,t,r){const n={};let i="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}(h,y,v),{style:w,className:E}=b,x=s(b,C),_=(0,n.useRef)(),I=(0,n.useMemo)((()=>JSON.stringify(i.images)),[i.images]);d&&(u=d);const S=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,h,y);return(0,n.useEffect)((()=>{O||(O=Promise.all([r.e(774),r.e(223)]).then(r.bind(r,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=_.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(I);if(j&&L.has(I))return;let t,n;return O.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;_.current&&(_.current.innerHTML=r(a({isLoading:!0,isLoaded:L.has(I),image:i},g)),L.has(I)||(t=requestAnimationFrame((()=>{_.current&&(n=s(_.current,I,L,o,p,f,m))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[i]),(0,n.useLayoutEffect)((()=>{L.has(I)&&j&&(_.current.innerHTML=j(a({isLoading:L.has(I),isLoaded:L.has(I),image:i},g)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,n.createElement)(t,a({},x,{style:a({},w,o,{backgroundColor:c}),className:E+(u?" "+u:""),ref:_,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},S=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));S.propTypes=_,S.displayName="GatsbyImage";const N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],P=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},T=new Set(["fixed","fullWidth","constrained"]),F={src:o().string.isRequired,alt:x,width:P,height:P,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!T.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(q=S,function(e){let{src:t,__imageData:r,__error:i}=e,o=s(e,N);return i&&console.warn(i),r?n.createElement(q,a({image:r},o)):(console.warn("Image not loaded",t),null)});var q;A.displayName="StaticImage",A.propTypes=F},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,r=!1,n=!1;for(let i=0;i<e.length;i++){const o=e[i];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,n=r,r=!0,i++):r&&n&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,i-1)+"-"+e.slice(i-1),n=r,r=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,n=r,r=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r;var r};e.exports=t,e.exports.default=t},3901:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n=r(7294),i=r(2788),o=r(3009),a=r(3622),s=r(3951),l=r(1883),c=r(2307),u=r(3247),d=r(3723);const p=e=>{let{src:t,alt:r}=e;const i=(0,l.useStaticQuery)("1044384444"),o=(0,n.useMemo)((()=>{const e=i.allImageSharp.edges.find((e=>e.node.id===t));return null==e?void 0:e.node.gatsbyImageData}),[t,i.allImageSharp.edges]);return n.createElement(f,null,n.createElement(m,null,n.createElement(d.G,{image:o,loading:"eager",alt:null!=r?r:"Thumbnail Image"})))},f=i.default.div.withConfig({displayName:"centeredImg__ThumbnailWrapper",componentId:"sc-ku254p-0"})(['position:relative;width:100%;&::after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;background-color:var(--color-dimmed);transition:0.3s ease;}']),m=i.default.div.withConfig({displayName:"centeredImg__InnerWrapper",componentId:"sc-ku254p-1"})(["overflow:hidden;"]);var g=n.memo(p);const h=e=>{let{thumbnail:t,alt:r,category:i,title:o,desc:a,date:s}=e;return n.createElement(y,null,n.createElement(g,{src:t,alt:r}),n.createElement(v,null,n.createElement("div",null,n.createElement(c.Z,null,i),n.createElement(b,null,o),n.createElement(w,null,a)),n.createElement(u.Z,{dateTime:s},s)))},y=i.default.div.withConfig({displayName:"card__Wrapper",componentId:"sc-nx3lqc-0"})(["position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;border-radius:var(--border-radius-base);background-color:var(--color-card);transform:translateZ(0);"]),v=i.default.div.withConfig({displayName:"card__Text",componentId:"sc-nx3lqc-1"})(["display:flex;flex-direction:column;flex:1 1 auto;justify-content:space-between;padding:var(--sizing-md);& > *{display:block;}"]),b=i.default.h3.withConfig({displayName:"card__Title",componentId:"sc-nx3lqc-2"})(["margin-top:var(--sizing-xs);font-size:var(--text-lg);font-weight:var(--font-weight-bold);line-height:1.3;@media (max-width:","){font-size:1.3125rem;}@media (max-width:","){font-size:var(--text-md);}"],(e=>{let{theme:t}=e;return t.device.md}),(e=>{let{theme:t}=e;return t.device.sm})),w=i.default.p.withConfig({displayName:"card__Desc",componentId:"sc-nx3lqc-3"})(["line-height:1.5;margin-top:8px;padding-bottom:var(--sizing-sm);color:var(--color-text-2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word;overflow:hidden;text-overflow:ellipsis;"]);var E=n.memo(h);const x=i.default.ul.withConfig({displayName:"postGrid__Grid",componentId:"sc-14uqf8l-0"})(["display:grid;grid-gap:var(--grid-gap-xl);grid-template-columns:repeat(2,1fr);list-style:none;& > li{margin-bottom:0;}@media (max-width:","){grid-gap:var(--grid-gap-lg);}"],(e=>{let{theme:t}=e;return t.device.sm})),_=i.default.li.withConfig({displayName:"postGrid__List",componentId:"sc-14uqf8l-1"})(["box-sizing:border-box;grid-column:span 1;a{display:block;height:100%;}a:hover ","::after,a:focus ","::after{opacity:1;}& .gatsby-image-wrapper{transition:opacity 1s ease-out,transform 0.5s ease;}a:hover,a:focus{.gatsby-image-wrapper{transform:scale(1.03);}}@media (max-width:","){grid-column:span 2;}"],f,f,(e=>{let{theme:t}=e;return t.device.sm}));var k=e=>{let{posts:t}=e;console.log("in render postgrid",t);const r=(0,n.useRef)(null);return n.createElement(x,{role:"list"},t.map((e=>{const{id:t,slug:r,title:i,desc:o,date:a,category:s,thumbnail:c,alt:u}=e,d=i+" - "+s+" - Posted on "+a;return n.createElement(_,{key:t,role:"listitem"},n.createElement(l.Link,{to:null!=r?r:"","aria-label":d},n.createElement(E,{thumbnail:c,alt:u,category:s,title:i,desc:o,date:a})))})),n.createElement("div",{ref:r}))},C=r(5785);var L=e=>{let{ref:t,targetId:r}=e;(0,n.useLayoutEffect)((()=>{const e=t.current;if(!e)return;if(!(e.scrollWidth>=e.offsetWidth))return;const n=e.querySelector("#"+r);if(!n)return;const i=n.offsetLeft-e.offsetLeft;e.scrollTo(i-e.offsetWidth/2+n.offsetWidth/2,0)}),[t,r])},O=r(5638);const j=i.default.nav.withConfig({displayName:"categoryFilter__Nav",componentId:"sc-p3qwnv-0"})(["display:flex;align-items:center;background-color:var(--color-card);margin-bottom:48px;padding:12px var(--sizing-md);border-radius:var(--border-radius-base);scrollbar-width:none;scrollbar-height:none;a#active{color:var(--color-white);background-color:var(--color-blue);}@media (max-width:","){padding:12px;}"],(e=>{let{theme:t}=e;return t.device.sm})),I=i.default.em.withConfig({displayName:"categoryFilter__CategoryTitle",componentId:"sc-p3qwnv-1"})(["position:static;width:auto;height:auto;clip:auto;white-space:auto;flex-shrink:0;font-size:var(--text-base);font-weight:var(--font-weight-semi-bold);font-style:initial;margin-right:var(--sizing-lg);@media (max-width:","){position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:no-wrap;}"],(e=>{let{theme:t}=e;return t.device.sm})),S=i.default.div.withConfig({displayName:"categoryFilter__CategoryButton",componentId:"sc-p3qwnv-2"})(["cursor:pointer;display:block;background-color:var(--color-category-button);padding:var(--sizing-sm) var(--sizing-base);border-radius:var(--border-radius-base);font-size:0.875rem;font-weight:var(--font-weight-semi-bold);:focus{outline:none;}&:hover{color:var(--color-white);background-color:var(--color-blue);}&:focus-visible{color:var(--color-white);background-color:var(--color-blue);}"]),N=i.default.div.withConfig({displayName:"categoryFilter__Divider",componentId:"sc-p3qwnv-3"})(["width:1px;height:32px;margin:0 var(--sizing-sm);transform:translateX(-50%);background-color:var(--color-divider);"]),P=i.default.ul.withConfig({displayName:"categoryFilter__CategoryUl",componentId:"sc-p3qwnv-4"})(["display:flex;list-style:none;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none;li + li{margin-left:6px;}&::-webkit-scrollbar{background:transparent;width:0px;height:0px;}"]);var T=e=>{let{categoryList:t}=e;const r=(0,n.useRef)(null),[i,o]=(0,O.useQueryParamString)("category","");L({ref:r,targetId:"active"});const a=(0,n.useMemo)((()=>(0,C.Z)(t).sort(((e,t)=>t.totalCount-e.totalCount))),[t]);return n.createElement(j,{"aria-label":"Category Filter"},n.createElement(I,null,"Category"),n.createElement(S,{style:""==i?{background:"var(--color-blue)",color:"var(--color-white)"}:{},onClick:()=>o("")},"All"),n.createElement(N,null),n.createElement(P,{ref:r,className:"invisible-scrollbar"},a.map(((e,t)=>{const r=e.fieldValue;return n.createElement("li",{key:t},n.createElement(S,{style:r==i?{background:"var(--color-blue)",color:"var(--color-white)"}:{},onClick:()=>o(r)},r))}))))};const F={all:"All",code:"Code",instruction:"Instruction",markdown:"Markdown",something:"Something"},A=i.default.main.withConfig({displayName:"projects__Main",componentId:"sc-y6eb1u-0"})(["min-width:var(--min-width);min-height:calc(100vh - var(--nav-height) - var(--footer-height));background-color:var(--color-background);"]),q=i.default.div.withConfig({displayName:"projects__Content",componentId:"sc-y6eb1u-1"})(["box-sizing:content-box;width:87.5%;max-width:var(--width);padding-top:var(--sizing-lg);padding-bottom:var(--sizing-lg);margin:0 auto;@media (max-width:","){padding-top:var(--grid-gap-lg);width:87.5%;}"],(e=>{let{theme:t}=e;return t.device.sm})),R=i.default.h2.withConfig({displayName:"projects__PostTitle",componentId:"sc-y6eb1u-2"})(["font-size:2rem;font-weight:var(--font-weight-extra-bold);margin-bottom:var(--sizing-md);line-height:1.21875;@media (max-width:","){font-size:1.75rem;}"],(e=>{let{theme:t}=e;return t.device.sm}));var z=e=>{let{pageContext:t,data:r,location:i}=e;const{0:l,1:c}=(0,n.useState)([]),[u]=(0,O.useQueryParamString)("category",""),d=r.allMarkdownRemark.edges;(0,n.useLayoutEffect)((()=>{console.log("in change layout",u);const e=(""!==u?d.filter((e=>{var t;let{node:r}=e;return(null==r||null===(t=r.frontmatter)||void 0===t?void 0:t.category)===u})):d).map((e=>{let{node:t}=e;const{id:r}=t,{slug:n}=t.fields,{title:i,desc:o,date:a,category:s,thumbnail:l,alt:c}=t.frontmatter,{childImageSharp:u}=l;return{id:r,slug:n,title:i,desc:o,date:a,category:s,thumbnail:null==u?void 0:u.id,alt:c}}));c(e)}),[u,d]);(0,o.Z)();const p=F[u]||"Projects";return console.log("posts",l),n.createElement(a.Z,null,n.createElement(s.Z,{title:"Pages"}),n.createElement(A,null,n.createElement(q,null,n.createElement(T,{categoryList:r.allMarkdownRemark.group}),n.createElement(R,null,p),n.createElement(k,{posts:l}))))}},2307:function(e,t,r){const n=r(2788).default.span.withConfig({displayName:"category__Category",componentId:"sc-wcpv1v-0"})(["display:block;font-size:0.875rem;font-weight:var(--font-weight-semi-bold);color:var(--color-text-3);"]);t.Z=n},3247:function(e,t,r){const n=r(2788).default.time.withConfig({displayName:"dateTime__DateTime",componentId:"sc-105pimp-0"})(["margin-top:12px;font-size:0.875rem;font-weight:var(--font-weight-regular);color:var(--color-text-3);"]);t.Z=n},4529:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Subs=t.Subscribe=void 0;class r{static subscribe(e){try{return e()}catch(t){console.error(t)}return()=>{}}static subscribeEvent(e,t,r){return e.addListener(t,r),()=>{e.removeListener(t,r)}}static subscribeDOMEvent(e,t,r,n){return e.addEventListener(t,r,n),()=>{e.removeEventListener(t,r,n)}}static setTimeout(e,t,...r){const n=setTimeout(e,t,r);return()=>clearTimeout(n)}static setInterval(e,t,...r){const n=setInterval(e,t,r);return()=>clearInterval(n)}static unsubAll(e){if(Array.isArray(e))e.forEach((e=>{try{e()}catch(t){console.error(t)}}));else try{e()}catch(t){console.error(t)}}static createCleanup(e){return()=>r.unsubAll(e)}}t.Subscribe=r;t.Subs=class{constructor(e=[]){this.list=e}subscribe(e){const t=r.subscribe(e);return this.push(t),t}subscribeEvent(e,t,n){const i=r.subscribeEvent(e,t,n);return this.push(i),i}subscribeDOMEvent(e,t,n){const i=r.subscribeDOMEvent(e,t,n);return this.push(i),i}setTimeout(e,t,...r){const n=setTimeout(e,t,r),i=()=>clearTimeout(n);return this.push(i),i}setInterval(e,t,...r){const n=setInterval(e,t,r),i=()=>clearInterval(n);return this.push(i),i}push(e){this.list.push(e)}unsubAll(){r.unsubAll(this.list),this.list.splice(0,this.list.length)}createCleanup(){return()=>{this.unsubAll()}}}},1232:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.clearQueryParam=t.setQueryParams=t.getQueryParams=t.useQueryParamString=t.queryParamsEventEmitter=void 0;const s=a(r(7294)),l=o(r(1377)),c=r(7187),u=r(4529);function d(){let e={};return"undefined"!=typeof window&&(e=l.parse(window.location.search)),e}function p(e){if("undefined"!=typeof window){const r=Object.keys(e).length>0?`?${l.stringify(e)}`:"";window.history.replaceState(window.history.state,"",`${window.location.pathname}${r}`),t.queryParamsEventEmitter.emit("update")}}function f(e){const t=d();delete t[e],p(t)}t.queryParamsEventEmitter=new c.EventEmitter,t.queryParamsEventEmitter.setMaxListeners(100),t.useQueryParamString=function(e,r,n=!0){const[i,o]=s.default.useState(!1),[a,l]=s.default.useState(0),[c,m]=s.default.useState(r),g=s.default.useCallback((()=>{f(e)}),[e]),h=s.default.useCallback((t=>{m(t),n&&t===r?g():p(Object.assign(Object.assign({},d()),{[e]:t}))}),[g,n,r,e]),y=s.default.useCallback((()=>{const t=d()[e];m("string"==typeof t?t:r)}),[r,e]);return s.default.useEffect((()=>{i||(y(),o(!0))}),[y,r,i,e]),s.default.useEffect((()=>{a>0&&y()}),[y,a]),s.default.useEffect((()=>{const e=new u.Subs;return e.subscribeEvent(t.queryParamsEventEmitter,"update",(()=>{l(Date.now())})),e.createCleanup()}),[]),[c,h,i,g]},t.getQueryParams=d,t.setQueryParams=p,t.clearQueryParam=f},5638:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(1232),t)},1377:function(e,t,r){const n=r(610),i=r(4020),o=r(500),a=r(2806),s=Symbol("encodeFragmentIdentifier");function l(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?i(e):e}function d(e){return Array.isArray(e)?e.sort():"object"==typeof e?d(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function p(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){const t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function m(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const i="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!i&&u(r,e).includes(e.arrayFormatSeparator);r=o?u(r,e):r;const a=i||o?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);n[t]=a};case"bracket-separator":return(t,r,n)=>{const i=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!i)return void(n[t]=r?u(r,e):r);const o=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const i of e.split("&")){if(""===i)continue;let[e,a]=o(t.decode?i.replace(/\+/g," "):i,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:u(a,t),r(u(e,t),a,n)}for(const i of Object.keys(n)){const e=n[i];if("object"==typeof e&&null!==e)for(const r of Object.keys(e))e[r]=m(e[r],t);else n[i]=m(e,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=d(r):e[t]=r,e}),Object.create(null))}t.extract=f,t.parse=g,t.stringify=(e,t)=>{if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const i=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[",i,"]"].join("")]:[...r,[c(t,e),"[",c(i,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),":list="].join("")]:[...r,[c(t,e),":list=",c(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:(i=null===i?"":i,0===n.length?[[c(r,e),t,c(i,e)].join("")]:[[n,c(i,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}(t),i={};for(const a of Object.keys(e))r(a)||(i[a]=e[a]);const o=Object.keys(i);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const i=e[r];return void 0===i?"":null===i?c(r,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?c(r,t)+"[]":i.reduce(n(r),[]).join("&"):c(r,t)+"="+c(i,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:g(f(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[s]:!0},r);const n=p(e.url).split("?")[0]||"",i=t.extract(e.url),o=t.parse(i,{sort:!1}),a=Object.assign(o,e.query);let l=t.stringify(a,r);l&&(l=`?${l}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[s]?c(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${l}${u}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[s]:!1},n);const{url:i,query:o,fragmentIdentifier:l}=t.parseUrl(e,n);return t.stringifyUrl({url:i,query:a(o,r),fragmentIdentifier:l},n)},t.exclude=(e,r,n)=>{const i=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,i,n)}},500:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},610:function(e){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-3b688a815857eec119dd.js.map