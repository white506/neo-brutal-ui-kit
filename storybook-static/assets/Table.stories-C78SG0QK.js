import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{d as s,l as h,o as d,t as c}from"./theme-CVLJDHQM.js";import"./iframe-BO0djaYt.js";const b=s.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: ${({theme:e})=>e.colors.beige};
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-size: 1.3rem;
  font-weight: ${({theme:e})=>e.fontWeightBold};
  color: ${({theme:e})=>e.colors.black};
  box-shadow: none;
`,w=s.th`
  border: ${({theme:e})=>e.borderWidth} solid ${({theme:e})=>e.colors.brown};
  background: ${({theme:e,$accent:r})=>r?e.colors.orange:e.colors.blueGray};
  color: ${({theme:e,$accent:r})=>r?e.colors.white:e.colors.black};
  padding: 24px 32px;
  text-align: left;
  text-transform: uppercase;
  font-size: 1.2em;
`,y=s.td`
  border: ${({theme:e})=>e.borderWidth} solid ${({theme:e})=>e.colors.brown};
  padding: 24px 32px;
  background: ${({theme:e})=>e.colors.beige};
  font-family: ${({theme:e})=>e.fontFamilies.mono};
  font-size: 1.1em;
`,T=s.tr`
  ${({$highlight:e,theme:r})=>e&&h`
    background: ${r.colors.blueGray};
    color: ${r.colors.white};
    td { background: ${r.colors.blueGray}; color: ${r.colors.white}; }
  `}
`;function i({columns:e,data:r,rowKey:p,highlightRow:g}){return o.jsxs(b,{children:[o.jsx("thead",{children:o.jsx("tr",{children:e.map(t=>o.jsx(w,{$accent:t.accent,style:{width:t.width,textAlign:t.align},children:t.title},String(t.key)))})}),o.jsx("tbody",{children:r.map(t=>o.jsx(T,{$highlight:g?.(t),children:e.map(l=>o.jsx(y,{style:{textAlign:l.align},children:String(t[l.key])},String(l.key)))},p(t)))})]})}i.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!0,tsType:{name:"signature",type:"function",raw:"(row: T) => string | number",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:""},highlightRow:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"boolean"}}},description:""}}};const m=[{key:"id",title:"ID",width:"80px",accent:!0},{key:"name",title:"Имя"},{key:"email",title:"Email"},{key:"status",title:"Статус",accent:!0}],u=[{id:1,name:"Иван",email:"ivan@example.com",status:"active"},{id:2,name:"Ольга",email:"olga@example.com",status:"pending"},{id:3,name:"Петр",email:"petr@example.com",status:"blocked"}],k={title:"Components/Table",component:i},a=()=>o.jsx(d,{theme:c,children:o.jsx(i,{columns:m,data:u,rowKey:e=>e.id})}),n=()=>o.jsx(d,{theme:c,children:o.jsx(i,{columns:m,data:u,rowKey:e=>e.id,highlightRow:e=>e.status==="blocked"})});a.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"HighlightRow"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <ThemeProvider theme={theme}>
    <Table columns={columns} data={data} rowKey={row => row.id} />
  </ThemeProvider>`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <ThemeProvider theme={theme}>
    <Table columns={columns} data={data} rowKey={row => row.id} highlightRow={row => row.status === 'blocked'} />
  </ThemeProvider>`,...n.parameters?.docs?.source}}};const j=["Default","HighlightRow"];export{a as Default,n as HighlightRow,j as __namedExportsOrder,k as default};
