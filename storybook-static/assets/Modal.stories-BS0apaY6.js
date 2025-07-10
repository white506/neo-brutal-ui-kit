import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-BO0djaYt.js";import{d as i,o as m,t as g}from"./theme-CVLJDHQM.js";import{c as h}from"./concreteTexture-Btar8fLl.js";import{B as f}from"./Button-DRdVrqju.js";const x=i.div`
  position: fixed;
  z-index: 1000;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
`,b=i.div`
  background: ${({theme:e,$background:r})=>r==="concrete"?`${e.colors.beige} ${h} repeat`:e.colors.beige};
  color: ${({theme:e})=>e.colors.black};
  border: ${({theme:e})=>e.borderWidth} solid ${({theme:e})=>e.colors.brown};
  border-radius: ${({theme:e})=>e.borderRadius};
  min-width: 600px;
  max-width: 90vw;
  min-height: 320px;
  padding: 64px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-blend-mode: multiply;
  opacity: 0.98;
`,y=i.div`
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-size: 3rem;
  font-weight: ${({theme:e})=>e.fontWeightBold};
  text-transform: uppercase;
  margin-bottom: 48px;
`,$=i.button`
  position: absolute;
  top: 24px;
  right: 32px;
  background: ${({theme:e})=>e.colors.orange};
  color: ${({theme:e})=>e.colors.white};
  border: ${({theme:e})=>e.borderWidth} solid ${({theme:e})=>e.colors.brown};
  border-radius: ${({theme:e})=>e.borderRadius};
  font-size: 1.2rem;
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-weight: ${({theme:e})=>e.fontWeightBold};
  padding: 4px 16px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  z-index: 1;
`,k=i.div`
  position: relative;
  width: 100%;
`,a=({open:e,onClose:r,title:t,children:l,background:c})=>e?o.jsx(x,{"data-testid":"modal-overlay",onClick:r,children:o.jsxs(k,{onClick:p=>p.stopPropagation(),children:[o.jsx($,{onClick:r,children:"X"}),o.jsxs(b,{$background:c,children:[t&&o.jsx(y,{children:t}),l]})]})}):null;a.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},background:{required:!1,tsType:{name:"literal",value:"'concrete'"},description:""}}};const j={title:"Components/Modal",component:a,argTypes:{open:{control:"boolean"},title:{control:"text"},children:{control:"text"}}},d=e=>{const[r,t]=u.useState(e.open??!1);return o.jsxs(m,{theme:g,children:[o.jsx(f,{onClick:()=>t(!0),children:"Открыть модалку"}),o.jsx(a,{...e,open:r,onClose:()=>t(!1),children:e.children||"Контент модального окна"})]})},n=d.bind({});n.args={title:"Заголовок",open:!1,children:"Контент модального окна"};const s=d.bind({});s.args={title:"Бетон",open:!0,children:"Модалка с бетонной текстурой",background:"concrete"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: ModalProps) => {
  const [open, setOpen] = useState(args.open ?? false);
  return <ThemeProvider theme={theme}>
      <Button onClick={() => setOpen(true)}>Открыть модалку</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        {args.children || 'Контент модального окна'}
      </Modal>
    </ThemeProvider>;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ModalProps) => {
  const [open, setOpen] = useState(args.open ?? false);
  return <ThemeProvider theme={theme}>
      <Button onClick={() => setOpen(true)}>Открыть модалку</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        {args.children || 'Контент модального окна'}
      </Modal>
    </ThemeProvider>;
}`,...s.parameters?.docs?.source}}};const B=["Default","Concrete"];export{s as Concrete,n as Default,B as __namedExportsOrder,j as default};
