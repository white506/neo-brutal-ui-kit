import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as m}from"./Button-DRdVrqju.js";import{o as l,t as h}from"./theme-CVLJDHQM.js";import{I as d}from"./Icon-BempnW7T.js";import"./iframe-BO0djaYt.js";const x={title:"Components/Button",component:m,argTypes:{variant:{control:"select",options:["primary","accent","danger","ghost"]},size:{control:"select",options:["sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"},iconLeft:{control:!1},iconRight:{control:!1},children:{control:"text"}}},r=p=>e.jsx(l,{theme:h,children:e.jsx(m,{...p})}),o=r.bind({});o.args={children:"Primary",variant:"primary"};const t=r.bind({});t.args={children:"Accent",variant:"accent"};const s=r.bind({});s.args={children:"Danger",variant:"danger"};const a=r.bind({});a.args={children:"Ghost",variant:"ghost"};const n=r.bind({});n.args={children:"Full width",fullWidth:!0};const i=r.bind({});i.args={children:"С иконками",iconLeft:e.jsx(d,{name:"search"}),iconRight:e.jsx(d,{name:"close"})};const c=()=>e.jsx(l,{theme:h,children:e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(m,{size:"sm",children:"Small"}),e.jsx(m,{size:"md",children:"Medium"}),e.jsx(m,{size:"lg",children:"Large"})]})});c.__docgenInfo={description:"",methods:[],displayName:"Sizes"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: ButtonProps) => <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: ButtonProps) => <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ButtonProps) => <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: ButtonProps) => <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: ButtonProps) => <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: ButtonProps) => <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <ThemeProvider theme={theme}>
    <div style={{
    display: 'flex',
    gap: 24
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  </ThemeProvider>`,...c.parameters?.docs?.source}}};const T=["Primary","Accent","Danger","Ghost","FullWidth","WithIcons","Sizes"];export{t as Accent,s as Danger,n as FullWidth,a as Ghost,o as Primary,c as Sizes,i as WithIcons,T as __namedExportsOrder,x as default};
