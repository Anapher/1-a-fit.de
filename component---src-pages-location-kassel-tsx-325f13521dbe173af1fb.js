"use strict";(self.webpackChunk_1_a_fit=self.webpackChunk_1_a_fit||[]).push([[649],{1749:function(e,t,n){var a=n(5987),i=n(7462),s=n(7294),o=n(6010),c=n(4670),r=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var f=s.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,r=e.alignItems,l=void 0===r?"stretch":r,d=e.classes,f=e.className,g=e.component,p=void 0===g?"div":g,x=e.container,u=void 0!==x&&x,m=e.direction,b=void 0===m?"row":m,w=e.item,h=void 0!==w&&w,v=e.justify,y=e.justifyContent,S=void 0===y?"flex-start":y,_=e.lg,k=void 0!==_&&_,C=e.md,j=void 0!==C&&C,E=e.sm,Z=void 0!==E&&E,W=e.spacing,z=void 0===W?0:W,B=e.wrap,I=void 0===B?"wrap":B,M=e.xl,D=void 0!==M&&M,F=e.xs,N=void 0!==F&&F,G=e.zeroMinWidth,K=void 0!==G&&G,J=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),O=(0,o.Z)(d.root,f,u&&[d.container,0!==z&&d["spacing-xs-".concat(String(z))]],h&&d.item,K&&d.zeroMinWidth,"row"!==b&&d["direction-xs-".concat(String(b))],"wrap"!==I&&d["wrap-xs-".concat(String(I))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==(v||S)&&d["justify-content-xs-".concat(String(v||S))],!1!==N&&d["grid-xs-".concat(String(N))],!1!==Z&&d["grid-sm-".concat(String(Z))],!1!==j&&d["grid-md-".concat(String(j))],!1!==k&&d["grid-lg-".concat(String(k))],!1!==D&&d["grid-xl-".concat(String(D))]);return s.createElement(p,(0,i.Z)({className:O,ref:t},J))})),g=(0,c.Z)((function(e){return(0,i.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return r.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,i.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(f);t.Z=g},7174:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(7294),i=n(6784),s=n(2825),o=n(4854),c=n(1120),r=n(2318),l=n(9956),d=n(1749),f=n(5944),g=n(8032);const p=(0,c.Z)({container:{...f.nC,paddingTop:32,paddingBottom:32}});function x(){const{site:{siteMetadata:{maps:{kassel:e}}}}=(0,o.useStaticQuery)("899040384"),t=p();return a.createElement(i.Z,null,a.createElement(s.Z,{title:"Kassel"}),a.createElement("div",{id:"kassel"},a.createElement("iframe",{src:e.src,frameBorder:0,allowFullScreen:!1,tabIndex:0,style:{border:0},width:"100%",height:400}),a.createElement("div",{className:t.container},a.createElement(r.Z,{variant:"h6",gutterBottom:!0},"Eindrücke von unserem Fitnessstudio in Kassel"),a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},a.createElement("iframe",{src:"https://player.vimeo.com/video/474992738?title=0&byline=0&portrait=0",frameBorder:"0",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0},allowFullScreen:!0})),a.createElement(l.Z,{mt:4,display:"flex",flexDirection:"row"},a.createElement(d.Z,{container:!0,spacing:4},a.createElement(d.Z,{item:!0,xs:6,style:{display:"flex",justifyContent:"flex-end"}},a.createElement(g.S,{src:"../../assets/kassel/ks_logo.png",alt:"Kassel",objectFit:"contain",style:{width:"100%",height:"100%",maxWidth:320},__imageData:n(7424)})),a.createElement(d.Z,{item:!0,xs:6},a.createElement(g.S,{src:"../../assets/kassel/eu_logo.png",alt:"Kassel",objectFit:"contain",style:{width:"100%",height:"100%",maxWidth:320},__imageData:n(5374)})))))))}},7424:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e80818","images":{"fallback":{"src":"/1-a-fit.de/static/d8f005fbc99ba4f477a1342e9e378265/ca29f/ks_logo.png","srcSet":"/1-a-fit.de/static/d8f005fbc99ba4f477a1342e9e378265/ed2b8/ks_logo.png 240w,\\n/1-a-fit.de/static/d8f005fbc99ba4f477a1342e9e378265/d6f6e/ks_logo.png 480w,\\n/1-a-fit.de/static/d8f005fbc99ba4f477a1342e9e378265/ca29f/ks_logo.png 960w","sizes":"(min-width: 960px) 960px, 100vw"},"sources":[{"srcSet":"/1-a-fit.de/static/d8f005fbc99ba4f477a1342e9e378265/781cb/ks_logo.webp 240w,\\n/1-a-fit.de/static/d8f005fbc99ba4f477a1342e9e378265/9c7e9/ks_logo.webp 480w,\\n/1-a-fit.de/static/d8f005fbc99ba4f477a1342e9e378265/af480/ks_logo.webp 960w","type":"image/webp","sizes":"(min-width: 960px) 960px, 100vw"}]},"width":960,"height":93}')},5374:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/1-a-fit.de/static/21a4f9dfa37891e8cae8eb9dbb49df35/fadb7/eu_logo.png","srcSet":"/1-a-fit.de/static/21a4f9dfa37891e8cae8eb9dbb49df35/9bbde/eu_logo.png 400w,\\n/1-a-fit.de/static/21a4f9dfa37891e8cae8eb9dbb49df35/a6b72/eu_logo.png 800w,\\n/1-a-fit.de/static/21a4f9dfa37891e8cae8eb9dbb49df35/fadb7/eu_logo.png 1600w","sizes":"(min-width: 1600px) 1600px, 100vw"},"sources":[{"srcSet":"/1-a-fit.de/static/21a4f9dfa37891e8cae8eb9dbb49df35/af5ec/eu_logo.webp 400w,\\n/1-a-fit.de/static/21a4f9dfa37891e8cae8eb9dbb49df35/864a3/eu_logo.webp 800w,\\n/1-a-fit.de/static/21a4f9dfa37891e8cae8eb9dbb49df35/b6e68/eu_logo.webp 1600w","type":"image/webp","sizes":"(min-width: 1600px) 1600px, 100vw"}]},"width":1600,"height":220}')}}]);
//# sourceMappingURL=component---src-pages-location-kassel-tsx-325f13521dbe173af1fb.js.map