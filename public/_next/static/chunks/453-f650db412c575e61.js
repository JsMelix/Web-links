(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[453],{7498:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return a},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return o},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return c}});let a="refresh",l="navigate",i="restore",o="server-patch",s="prefetch",u="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(8754),a=r._(n(7294)),l=n(4450),i=n(2227),o=n(4364),s=n(109),u=n(3607),c=n(1823),f=n(9031),d=n(920),m=n(30),p=n(7192),v=n(7498),h=new Set;function prefetch(e,t,n,r,a,l){if(!l&&!(0,i.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+a;if(h.has(l))return;h.add(l)}let o=l?e.prefetch(t,a):e.prefetch(t,n,r);Promise.resolve(o).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,n,r,l,o,s,u,c,f){let{nodeName:d}=e.currentTarget,m="A"===d.toUpperCase();if(m&&(isModifiedEvent(e)||!c&&!(0,i.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==s||s;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:o,locale:u,scroll:e}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!f,scroll:e})};c?a.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}let g=a.default.forwardRef(function(e,t){let n,r;let{href:i,as:o,children:h,prefetch:g=null,passHref:y,replace:x,shallow:b,scroll:_,locale:j,onClick:k,onMouseEnter:S,onTouchStart:C,legacyBehavior:N=!1,...I}=e;n=h,N&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let E=a.default.useContext(c.RouterContext),O=a.default.useContext(f.AppRouterContext),A=null!=E?E:O,L=!E,B=!1!==g,M=null===g?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:T,as:P}=a.default.useMemo(()=>{if(!E){let e=formatStringOrUrl(i);return{href:e,as:o?formatStringOrUrl(o):e}}let[e,t]=(0,l.resolveHref)(E,i,!0);return{href:e,as:o?(0,l.resolveHref)(E,o):t||e}},[E,i,o]),R=a.default.useRef(T),w=a.default.useRef(P);N&&(r=a.default.Children.only(n));let G=N?r&&"object"==typeof r&&r.ref:t,[F,U,D]=(0,d.useIntersection)({rootMargin:"200px"}),W=a.default.useCallback(e=>{(w.current!==P||R.current!==T)&&(D(),w.current=P,R.current=T),F(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[P,G,T,D,F]);a.default.useEffect(()=>{A&&U&&B&&prefetch(A,T,P,{locale:j},{kind:M},L)},[P,T,U,j,B,null==E?void 0:E.locale,A,L,M]);let K={ref:W,onClick(e){N||"function"!=typeof k||k(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&linkClicked(e,A,T,P,x,b,_,j,L,B)},onMouseEnter(e){N||"function"!=typeof S||S(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&(B||!L)&&prefetch(A,T,P,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:M},L)},onTouchStart(e){N||"function"!=typeof C||C(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&(B||!L)&&prefetch(A,T,P,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:M},L)}};if((0,s.isAbsoluteUrl)(P))K.href=P;else if(!N||y||"a"===r.type&&!("href"in r.props)){let e=void 0!==j?j:null==E?void 0:E.locale,t=(null==E?void 0:E.isLocaleDomain)&&(0,m.getDomainLocale)(P,e,null==E?void 0:E.locales,null==E?void 0:E.domainLocales);K.href=t||(0,p.addBasePath)((0,u.addLocale)(P,e,null==E?void 0:E.defaultLocale))}return N?a.default.cloneElement(r,K):a.default.createElement("a",{...I,...K},n)}),y=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),a=n(3436),l="function"==typeof IntersectionObserver,i=new Map,o=[];function createObserver(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=o.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let a=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:a},o.push(n),i.set(n,t),t}function observe(e,t,n){let{id:r,observer:a,elements:l}=createObserver(n);return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),i.delete(r);let e=o.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&o.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:i}=e,o=i||!l,[s,u]=(0,r.useState)(!1),c=(0,r.useRef)(null),f=(0,r.useCallback)(e=>{c.current=e},[]);(0,r.useEffect)(()=>{if(l){if(o||s)return;let e=c.current;if(e&&e.tagName){let r=observe(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=(0,a.requestIdleCallback)(()=>u(!0));return()=>(0,a.cancelIdleCallback)(e)}},[o,n,t,s,c.current]);let d=(0,r.useCallback)(()=>{u(!1)},[]);return[f,s,d]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,n){e.exports=n(5170)},9432:function(e,t,n){"use strict";n.d(t,{q:function(){return p}});var[r,a]=(0,n(5227).k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"}),l=n(8866),i=n(5893);function initials(e){var t;let n=e.split(" "),r=null!=(t=n.at(0))?t:"",a=n.length>1?n.at(-1):"";return r&&a?`${r.charAt(0)}${a.charAt(0)}`:r.charAt(0)}function AvatarName(e){let{name:t,getInitials:n,...r}=e,o=a();return(0,i.jsx)(l.m.div,{role:"img","aria-label":t,...r,__css:o.label,children:t?null==n?void 0:n(t):null})}AvatarName.displayName="AvatarName";var GenericAvatarIcon=e=>(0,i.jsxs)(l.m.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[(0,i.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,i.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),o=n(5721),s=n(7294);function AvatarImage(e){let{src:t,srcSet:n,onError:r,onLoad:a,getInitials:u,name:c,borderRadius:f,loading:d,iconLabel:m,icon:p=(0,i.jsx)(GenericAvatarIcon,{}),ignoreFallback:v,referrerPolicy:h,crossOrigin:g}=e,y=(0,o.d)({src:t,onError:r,crossOrigin:g,ignoreFallback:v}),x=!t||"loaded"!==y;return x?c?(0,i.jsx)(AvatarName,{className:"chakra-avatar__initials",getInitials:u,name:c}):(0,s.cloneElement)(p,{role:"img","aria-label":m}):(0,i.jsx)(l.m.img,{src:t,srcSet:n,alt:c,onLoad:a,referrerPolicy:h,crossOrigin:null!=g?g:void 0,className:"chakra-avatar__img",loading:d,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:f}})}AvatarImage.displayName="AvatarImage";var u=n(5059),c=n(1628),f=n(3179),d=n(5432),m={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},p=(0,u.G)((e,t)=>{let n=(0,c.jC)("Avatar",e),[a,o]=(0,s.useState)(!1),{src:u,srcSet:p,name:v,showBorder:h,borderRadius:g="full",onError:y,onLoad:x,getInitials:b=initials,icon:_=(0,i.jsx)(GenericAvatarIcon,{}),iconLabel:j=" avatar",loading:k,children:S,borderColor:C,ignoreFallback:N,crossOrigin:I,...E}=(0,f.Lr)(e),O={borderRadius:g,borderWidth:h?"2px":void 0,...m,...n.container};return C&&(O.borderColor=C),(0,i.jsx)(l.m.span,{ref:t,...E,className:(0,d.cx)("chakra-avatar",e.className),"data-loaded":(0,d.PB)(a),__css:O,children:(0,i.jsxs)(r,{value:n,children:[(0,i.jsx)(AvatarImage,{src:u,srcSet:p,loading:k,onLoad:(0,d.v0)(x,()=>{o(!0)}),onError:y,getInitials:b,name:v,borderRadius:g,icon:_,iconLabel:j,ignoreFallback:N,crossOrigin:I}),S]})})});p.displayName="Avatar"},9222:function(e,t,n){"use strict";n.d(t,{z:function(){return p}});var r=n(7294);function useButtonType(e){let[t,n]=(0,r.useState)(!e),a=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:a,type:t?"button":void 0}}var[a,l]=(0,n(5227).k)({strict:!1,name:"ButtonGroupContext"}),i=n(8866),o=n(5432),s=n(5893);function ButtonIcon(e){let{children:t,className:n,...a}=e,l=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,u=(0,o.cx)("chakra-button__icon",n);return(0,s.jsx)(i.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:u,children:l})}ButtonIcon.displayName="ButtonIcon";var u=n(295);function ButtonSpinner(e){let{label:t,placement:n,spacing:a="0.5rem",children:l=(0,s.jsx)(u.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:f,...d}=e,m=(0,o.cx)("chakra-button__spinner",c),p="start"===n?"marginEnd":"marginStart",v=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[p]:t?a:0,fontSize:"1em",lineHeight:"normal",...f}),[f,t,p,a]);return(0,s.jsx)(i.m.div,{className:m,...d,__css:v,children:l})}ButtonSpinner.displayName="ButtonSpinner";var c=n(1103),f=n(5059),d=n(1628),m=n(3179),p=(0,f.G)((e,t)=>{let n=l(),a=(0,d.mq)("Button",{...n,...e}),{isDisabled:u=null==n?void 0:n.isDisabled,isLoading:f,isActive:p,children:v,leftIcon:h,rightIcon:g,loadingText:y,iconSpacing:x="0.5rem",type:b,spinner:_,spinnerPlacement:j="start",className:k,as:S,...C}=(0,m.Lr)(e),N=(0,r.useMemo)(()=>{let e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:e}}},[a,n]),{ref:I,type:E}=useButtonType(S),O={rightIcon:g,leftIcon:h,iconSpacing:x,children:v};return(0,s.jsxs)(i.m.button,{ref:(0,c.qq)(t,I),as:S,type:null!=b?b:E,"data-active":(0,o.PB)(p),"data-loading":(0,o.PB)(f),__css:N,className:(0,o.cx)("chakra-button",k),...C,disabled:u||f,children:[f&&"start"===j&&(0,s.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:x,children:_}),f?y||(0,s.jsx)(i.m.span,{opacity:0,children:(0,s.jsx)(ButtonContent,{...O})}):(0,s.jsx)(ButtonContent,{...O}),f&&"end"===j&&(0,s.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:x,children:_})]})});function ButtonContent(e){let{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)(ButtonIcon,{marginEnd:a,children:t}),r,n&&(0,s.jsx)(ButtonIcon,{marginStart:a,children:n})]})}p.displayName="Button"},5721:function(e,t,n){"use strict";n.d(t,{d:function(){return useImage},z:function(){return shouldShowFallbackImage}});var r=n(6245),a=n(7294);function useImage(e){let{loading:t,src:n,srcSet:l,onLoad:i,onError:o,crossOrigin:s,sizes:u,ignoreFallback:c}=e,[f,d]=(0,a.useState)("pending");(0,a.useEffect)(()=>{d(n?"loading":"pending")},[n]);let m=(0,a.useRef)(),p=(0,a.useCallback)(()=>{if(!n)return;flush();let e=new Image;e.src=n,s&&(e.crossOrigin=s),l&&(e.srcset=l),u&&(e.sizes=u),t&&(e.loading=t),e.onload=e=>{flush(),d("loaded"),null==i||i(e)},e.onerror=e=>{flush(),d("failed"),null==o||o(e)},m.current=e},[n,s,l,u,i,o,t]),flush=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,r.G)(()=>{if(!c)return"loading"===f&&p(),()=>{flush()}},[f,p,c]),c?"loaded":f}var shouldShowFallbackImage=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t},1941:function(e,t,n){"use strict";n.d(t,{E:function(){return s}});var r=n(5059),a=n(5893),l=(0,r.G)(function(e,t){let{htmlWidth:n,htmlHeight:r,alt:l,...i}=e;return(0,a.jsx)("img",{width:n,height:r,ref:t,alt:l,...i})});l.displayName="NativeImage";var i=n(5721),o=n(8866);function omit(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var s=(0,r.G)(function(e,t){let{fallbackSrc:n,fallback:r,src:s,srcSet:u,align:c,fit:f,loading:d,ignoreFallback:m,crossOrigin:p,fallbackStrategy:v="beforeLoadOrError",referrerPolicy:h,...g}=e,y=null!=d||m||!(void 0!==n||void 0!==r),x=(0,i.d)({...e,crossOrigin:p,ignoreFallback:y}),b=(0,i.z)(x,v),_={ref:t,objectFit:f,objectPosition:c,...y?g:omit(g,["onError","onLoad"])};return b?r||(0,a.jsx)(o.m.img,{as:l,className:"chakra-image__placeholder",src:n,..._}):(0,a.jsx)(o.m.img,{as:l,src:s,srcSet:u,crossOrigin:p,loading:d,referrerPolicy:h,className:"chakra-image",..._})});s.displayName="Image"},7754:function(e,t,n){"use strict";n.d(t,{M:function(){return i}});var r=n(8866),a=n(5059),l=n(5893),i=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.displayName="Center";var o={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.G)(function(e,t){let{axis:n="both",...a}=e;return(0,l.jsx)(r.m.div,{ref:t,__css:o[n],...a,position:"absolute"})})},3100:function(e,t,n){"use strict";n.d(t,{xu:function(){return i}});var r=n(8866),a=n(5059),l=n(5893),i=(0,r.m)("div");i.displayName="Box";var o=(0,a.G)(function(e,t){let{size:n,centerContent:r=!0,...a}=e;return(0,l.jsx)(i,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});o.displayName="Square",(0,a.G)(function(e,t){let{size:n,...r}=e;return(0,l.jsx)(o,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle"},5034:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var r=(0,n(8866).m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});r.displayName="Spacer"},4418:function(e,t,n){"use strict";n.d(t,{X:function(){return u}});var r=n(5059),a=n(1628),l=n(3179),i=n(8866),o=n(5432),s=n(5893),u=(0,r.G)(function(e,t){let n=(0,a.mq)("Heading",e),{className:r,...u}=(0,l.Lr)(e);return(0,s.jsx)(i.m.h2,{ref:t,className:(0,o.cx)("chakra-heading",e.className),...u,__css:n})});u.displayName="Heading"},4641:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var r=n(7073),a=n(5059),l=n(5893),i=(0,a.G)((e,t)=>(0,l.jsx)(r.K,{align:"center",...e,direction:"row",ref:t}));i.displayName="HStack"},204:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});var r=n(5059),a=n(8866),l=n(5893),i=(0,r.G)(function(e,t){let{direction:n,align:r,justify:i,wrap:o,basis:s,grow:u,shrink:c,...f}=e;return(0,l.jsx)(a.m.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:r,justifyContent:i,flexWrap:o,flexBasis:s,flexGrow:u,flexShrink:c},...f})});i.displayName="Flex"},1669:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(7073),a=n(5059),l=n(5893),i=(0,a.G)((e,t)=>(0,l.jsx)(r.K,{align:"center",...e,direction:"column",ref:t}));i.displayName="VStack"},7073:function(e,t,n){"use strict";n.d(t,{K:function(){return u}});var r=n(8866),a=n(5893),StackItem=e=>(0,a.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});StackItem.displayName="StackItem";var l=n(5432);function mapResponsive(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,l.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"]);var i="& > *:not(style) ~ *:not(style)";function getStackStyles(e){let{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[i]:mapResponsive(n,e=>r[e])}}function getDividerStyles(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":mapResponsive(n,e=>r[e])}}var o=n(5059),s=n(7294);function getValidChildren(e){return s.Children.toArray(e).filter(e=>(0,s.isValidElement)(e))}var u=(0,o.G)((e,t)=>{let{isInline:n,direction:o,align:u,justify:c,spacing:f="0.5rem",wrap:d,children:m,divider:p,className:v,shouldWrapChildren:h,...g}=e,y=n?"row":null!=o?o:"column",x=(0,s.useMemo)(()=>getStackStyles({direction:y,spacing:f}),[y,f]),b=(0,s.useMemo)(()=>getDividerStyles({spacing:f,direction:y}),[f,y]),_=!!p,j=!h&&!_,k=(0,s.useMemo)(()=>{let e=getValidChildren(m);return j?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,l=n+1===e.length,i=(0,a.jsx)(StackItem,{children:t},r),o=h?i:t;if(!_)return o;let u=(0,s.cloneElement)(p,{__css:b});return(0,a.jsxs)(s.Fragment,{children:[o,l?null:u]},r)})},[p,b,_,j,h,m]),S=(0,l.cx)("chakra-stack",v);return(0,a.jsx)(r.m.div,{ref:t,display:"flex",alignItems:u,justifyContent:c,flexDirection:x.flexDirection,flexWrap:d,className:S,__css:_?{}:{[i]:x[i]},...g,children:k})});u.displayName="Stack"},3838:function(e,t,n){"use strict";n.d(t,{r:function(){return u}});var r=n(5059),a=n(1628),l=n(3179),i=n(8866),o=n(5432),s=n(5893),u=(0,r.G)(function(e,t){let n=(0,a.mq)("Link",e),{className:r,isExternal:u,...c}=(0,l.Lr)(e);return(0,s.jsx)(i.m.a,{target:u?"_blank":void 0,rel:u?"noopener":void 0,ref:t,className:(0,o.cx)("chakra-link",r),...c,__css:n})});u.displayName="Link"}}]);