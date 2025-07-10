import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./Icon-BempnW7T.js";import{o as t,t as r}from"./theme-CVLJDHQM.js";import"./iframe-BO0djaYt.js";const u={title:"Icons/Icon",component:n,argTypes:{name:{control:"select",options:["search","close","user"]},size:{control:"number"},color:{control:"color"}}},m=l=>e.jsx(t,{theme:r,children:e.jsx(n,{...l})}),o=m.bind({});o.args={name:"search",size:32};const s=m.bind({});s.args={name:"close",size:32,color:r.colors.brown};const a=m.bind({});a.args={name:"user",size:32,color:r.colors.orange};const c=()=>e.jsx(t,{theme:r,children:e.jsxs("div",{style:{display:"flex",gap:32},children:[e.jsx(n,{name:"search",size:40,color:r.colors.brown}),e.jsx(n,{name:"close",size:40,color:r.colors.orange}),e.jsx(n,{name:"user",size:40,color:r.colors.blueGray})]})});c.__docgenInfo={description:"",methods:[],displayName:"AllIcons"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: any) => <ThemeProvider theme={theme}>
    <Icon {...args} />
  </ThemeProvider>`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: any) => <ThemeProvider theme={theme}>
    <Icon {...args} />
  </ThemeProvider>`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: any) => <ThemeProvider theme={theme}>
    <Icon {...args} />
  </ThemeProvider>`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <ThemeProvider theme={theme}>
    <div style={{
    display: 'flex',
    gap: 32
  }}>
      <Icon name="search" size={40} color={theme.colors.brown} />
      <Icon name="close" size={40} color={theme.colors.orange} />
      <Icon name="user" size={40} color={theme.colors.blueGray} />
    </div>
  </ThemeProvider>`,...c.parameters?.docs?.source}}};const g=["Search","Close","User","AllIcons"];export{c as AllIcons,s as Close,o as Search,a as User,g as __namedExportsOrder,u as default};
