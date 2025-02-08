"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[999],{1300:(e,s,t)=>{t.d(s,{default:()=>i});var r=t(5155),l=t(5565),n=t(2115),a=t(1635);let i=e=>{let{images:s}=e,[t,i]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=e=>{e.preventDefault()};return document.addEventListener("contextmenu",e),function(){document.removeEventListener("contextmenu",e)}},[]),(0,r.jsxs)("div",{className:"relative w-full m-auto overflow-hidden",children:[(0,r.jsx)("button",{onClick:()=>{i(e=>(e-1+s.length)%s.length)},className:"top-1/2 absolute bg-black/40 text-white/85 p-2 rounded-r-sm left-0 z-10",children:(0,r.jsx)(a.e3,{className:"size-3 md:size-5"})}),(0,r.jsx)("div",{className:"relative flex justify-center rounded overflow-hidden",children:(0,r.jsx)(l.default,{src:s[t],width:"800",height:"300",alt:"image",className:"w-full h-full rounded"})}),(0,r.jsx)("button",{onClick:()=>{i(e=>(e+1)%s.length)},className:"top-1/2 absolute bg-black/40 text-white/85 p-2 rounded-l-sm right-0 z-10",children:(0,r.jsx)(a.UU,{className:"size-3 md:size-5"})})]})}},5999:(e,s,t)=>{t.d(s,{default:()=>h});var r=t(5155),l=t(8173),n=t.n(l),a=t(2115),i=t(1635),o=t(1300);let c=e=>{let{showModal:s,setShowModal:t,project:l}=e;return(0,r.jsx)("div",{className:"fixed ".concat(s?"flex":"hidden"," justify-center px-5 bg-black/15 w-full top-0 h-screen left-0 right-0 z-50"),children:(0,r.jsxs)("div",{className:" sm:w-[90%] md:w-[85%] lg:w-[60%] h-fit my-auto max-h-screen overflow-y-auto bg-gray-100 dark:bg-gray-900 p-5 rounded space-y-5 shadow-light",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center border-b w-full pb-2",children:[(0,r.jsx)("p",{className:"text-lg md:text-2xl font-bold",children:l.title}),(0,r.jsx)("button",{className:"w-fit p-1 hover:opacity-35",onClick:()=>t(!1),children:(0,r.jsx)(i.tl,{})})]}),(0,r.jsx)("div",{className:"py-2 mt-5",children:l.description}),l.images.length>0&&(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("p",{className:"font-bold",children:" Sample screenshots "}),(0,r.jsx)(o.default,{images:l.images})]}),(0,r.jsx)("div",{className:"",children:(0,r.jsxs)("p",{children:["Visit the website"," ",(0,r.jsx)(n(),{href:l.demo,target:"blank",className:"text-blue-500",children:"HERE"}),"."]})})]})})},d=e=>{let{className:s}=e;return(0,r.jsx)("div",{className:"w-6 h-6",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:s||"size-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"})})})},h=e=>{let{index:s,project:t}=e,[l,o]=(0,a.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"w-full border rounded-md p-3 space-y-4 min-h-24",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center border-b pb-2",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,r.jsxs)(n(),{target:"_blank",href:t.demo||t.git,className:"flex items-center text-blue-500 dark:text-blue-400 hover:underline",children:[(0,r.jsx)(d,{className:" size-5 mt-1"}),t.title]}),(0,r.jsx)("p",{className:" border rounded-md px-2 opacity-85 text-xs",children:t.sub_category})]}),(0,r.jsx)("button",{type:"button",className:"cursor-pointer hover:opacity-65 flex items-center text-blue-500",onClick:()=>o(!0),children:(0,r.jsx)(i.iW,{className:"size-6"})})]}),(0,r.jsx)("div",{className:"line-clamp-4 dark:font-thin tracking-wider",children:t.description}),(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex w-full items-center space-x-2",children:[t.tech_stack.map((e,s)=>s>2?null:(0,r.jsxs)("div",{className:"flex w-fit items-center space-x-1 text-xs opacity-65 border rounded-md px-2 py-1 md:py-0",children:[(0,r.jsx)(i.Sm,{className:"w-4 h-4"}),(0,r.jsx)("p",{children:e})]},s)),t.tech_stack.length>3&&(0,r.jsxs)("p",{className:"text-sm opacity-60",children:["+",t.tech_stack.length-3]})]}),(0,r.jsxs)("div",{className:"flex items-center min-h-0 space-x-0",children:[(null==t?void 0:t.youtube)&&(0,r.jsx)(n(),{target:"_blank",href:t.youtube,className:"flex items-center space-x-1 border-transparent border hover:border-red-500 p-1 rounded-full hover:opacity-65",children:(0,r.jsx)(i.Dr,{className:"size-4 md:size-5"})}),(null==t?void 0:t.git)&&(0,r.jsx)(n(),{target:"_blank",href:t.git,className:"flex items-center space-x-1 border-transparent border hover:border-gray-700 p-1 rounded-full hover:opacity-65",children:(0,r.jsx)(i.tx,{className:"size-4 md:size-5"})})]})]})]},s),(0,r.jsx)(c,{showModal:l,setShowModal:o,project:t},"".concat(s,"_").concat(t.title))]})}},1635:(e,s,t)=>{t.d(s,{LN:()=>n,tl:()=>a,iW:()=>c,tx:()=>m,e3:()=>i,QL:()=>d,Ac:()=>h,Sm:()=>o,Dr:()=>x,UU:()=>l});var r=t(5155);let l=e=>{let{className:s}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:s||"size-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})})};t(2115);let n=e=>{let{className:s}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:s||"size-5",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"})})},a=e=>{let{className:s}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:s||"size-5",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"})})},i=e=>{let{className:s}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:s||"size-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"})})},o=e=>{let{className:s}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:s||"size-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"})})},c=e=>{let{className:s}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:s||"size-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"})})},d=e=>{let{className:s}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:s||"size-5",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"})})},h=()=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"})}),m=e=>{let{className:s}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:s||"size-6",viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"})})},x=e=>{let{className:s}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#FF0033",className:s||"size-6",viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"})})}}}]);