import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{d as i,o as u,t as g}from"./theme-CVLJDHQM.js";import"./iframe-BO0djaYt.js";const p=(e,r)=>{switch(e){case"success":return r.colors.blueGray;case"error":return r.colors.accentRed;case"warning":return r.colors.orange;case"info":default:return r.colors.brown}},f=i.div`
  display: flex;
  align-items: center;
  gap: 32px;
  min-width: 400px;
  max-width: 600px;
  padding: 32px 48px;
  background: ${({theme:e})=>e.colors.beige};
  color: ${({theme:e})=>e.colors.black};
  border: ${({theme:e,$type:r})=>e.borderWidth} solid ${({theme:e,$type:r})=>p(r,e)};
  border-radius: ${({theme:e})=>e.borderRadius};
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-size: 1.5rem;
  font-weight: ${({theme:e})=>e.fontWeightBold};
  box-shadow: none;
  position: relative;
`,h=i.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: ${({theme:e,$type:r})=>p(r,e)};
`,T=i.span`
  flex: 1;
  word-break: break-word;
`,x=i.button`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.gray400};
  font-size: 2rem;
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-weight: ${({theme:e})=>e.fontWeightBold};
  cursor: pointer;
  outline: none;
  margin-left: 24px;
`,d=({type:e="info",message:r,icon:l,onClose:m})=>o.jsxs(f,{$type:e,children:[l&&o.jsx(h,{$type:e,children:l}),o.jsx(T,{children:r}),m&&o.jsx(x,{onClick:m,"aria-label":"Закрыть",children:"×"})]});d.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{type:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},message:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const w={title:"Components/Toast",component:d,argTypes:{type:{control:"select",options:["info","success","error","warning"]},message:{control:"text"},action:{control:"text"}}},c=e=>o.jsx(u,{theme:g,children:o.jsx(d,{...e})}),s=c.bind({});s.args={type:"info",message:"Информационный тост"};const t=c.bind({});t.args={type:"success",message:"Успешно!"};const a=c.bind({});a.args={type:"error",message:"Ошибка!"};const n=c.bind({});n.args={type:"warning",message:"Внимание!"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ToastProps) => <ThemeProvider theme={theme}>
    <Toast {...args} />
  </ThemeProvider>`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: ToastProps) => <ThemeProvider theme={theme}>
    <Toast {...args} />
  </ThemeProvider>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: ToastProps) => <ThemeProvider theme={theme}>
    <Toast {...args} />
  </ThemeProvider>`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: ToastProps) => <ThemeProvider theme={theme}>
    <Toast {...args} />
  </ThemeProvider>`,...n.parameters?.docs?.source}}};const $=["Info","Success","Error","Warning"];export{a as Error,s as Info,t as Success,n as Warning,$ as __namedExportsOrder,w as default};
