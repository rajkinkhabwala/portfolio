import{u as f,aO as P,j as e,ar as h,aP as j,aQ as I,Y as B,as as E,aR as H,ap as k,ag as C,aS as R,m as S}from"./studio-component.IoN_1_w5.js";import{r as l}from"./client.CwOmHWpG.js";const b=f(S)`
  position: relative;
`;function g(a){const{children:o}=a,{collapsed:t}=I();return e.jsx(b,{hidden:t,height:"fill",overflow:"auto",children:o})}function v(a){const{actionHandlers:o,index:t,menuItems:n,menuItemGroups:r,title:i}=a,{features:s}=B();return!(n!=null&&n.length)&&!i?null:e.jsx(E,{actions:e.jsx(H,{menuItems:n,menuItemGroups:r,actionHandlers:o}),backButton:s.backButton&&t>0&&e.jsx(k,{as:C,"data-as":"a",icon:R,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function w(a){const{index:o,pane:t,paneKey:n,...r}=a,{child:i,component:s,menuItems:c,menuItemGroups:d,type:y,...m}=t,[u,p]=l.useState(null),{title:x=""}=P(t);return e.jsxs(h,{id:n,minWidth:320,selected:r.isSelected,children:[e.jsx(v,{actionHandlers:u?.actionHandlers,index:o,menuItems:c,menuItemGroups:d,title:x}),e.jsxs(g,{children:[j.isValidElementType(s)&&l.createElement(s,{...r,...m,ref:p,child:i,paneKey:n}),l.isValidElement(s)&&s]})]})}export{w as default};