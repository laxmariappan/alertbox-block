(()=>{"use strict";var e,t={273:()=>{const e=window.wp.blocks,t=window.wp.element,r=(window.wp.i18n,window.wp.blockEditor),{Fragment:n}=wp.element;(0,e.registerBlockType)("lax/alertbox",{edit:function(e){let{attributes:o,setAttributes:a}=e;const{content:i}=o;return(0,t.createElement)(n,null,(0,t.createElement)("div",(0,r.useBlockProps)(),(0,t.createElement)(r.RichText,{identifier:"content",tagName:"p",value:i,onChange:e=>a({content:e})})))},save:function(e){let{attributes:n}=e;const{content:o}=n;return(0,t.createElement)("div",r.useBlockProps.save(),(0,t.createElement)(r.RichText.Content,{tagName:"p",value:o}))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,l,c]=r,s=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var u=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=globalThis.webpackChunkalertbox=globalThis.webpackChunkalertbox||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[431],(()=>n(273)));o=n.O(o)})();