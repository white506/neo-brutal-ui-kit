import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d,o as u,t as f}from"./theme-CVLJDHQM.js";import{c as x}from"./concreteTexture-Btar8fLl.js";import{B as b}from"./Button-DRdVrqju.js";import"./iframe-BO0djaYt.js";const C=d.div`
  background: ${({theme:e,$background:c})=>c==="concrete"?`${e.colors.beige} ${x} repeat`:e.colors.beige};
  color: ${({theme:e})=>e.colors.black};
  border: ${({theme:e})=>e.borderWidth} solid ${({theme:e})=>e.colors.brown};
  border-radius: ${({theme:e})=>e.borderRadius};
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 480px;
  max-width: 100%;
  box-shadow: none;
  background-blend-mode: multiply;
  opacity: 0.98;
`,T=d.div`
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-size: 2.5rem;
  font-weight: ${({theme:e})=>e.fontWeightBold};
  text-transform: uppercase;
`,R=d.div`
  font-family: ${({theme:e})=>e.fontFamilies.mono};
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.blueGray};
  font-weight: ${({theme:e})=>e.fontWeightBold};
`,v=d.div`
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-size: 1.1rem;
  font-weight: 500;
`,y=d.div`
  display: flex;
  gap: 32px;
  margin-top: 40px;
  border-top: ${({theme:e})=>e.borderWidth} solid ${({theme:e})=>e.colors.brown};
  padding-top: 24px;
  margin-left: -48px;
  margin-right: -48px;
  padding-left: 48px;
  padding-right: 48px;
  background: ${({theme:e})=>e.colors.blueGray};
`,l=({title:e,subtitle:c,children:p,actions:m,className:h,background:g})=>r.jsxs(C,{className:h,$background:g,children:[e&&r.jsx(T,{children:e}),c&&r.jsx(R,{children:c}),r.jsx(v,{children:p}),m&&r.jsx(y,{children:m})]});l.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"literal",value:"'concrete'"},description:""}}};const W={title:"Components/Card",component:l,argTypes:{title:{control:"text"},subtitle:{control:"text"},children:{control:"text"}}},n=e=>r.jsx(u,{theme:f,children:r.jsx(l,{...e})}),t=n.bind({});t.args={children:"Контент карточки"};const o=n.bind({});o.args={title:"Заголовок",children:"Карточка с заголовком"};const a=n.bind({});a.args={title:"Заголовок",subtitle:"Подзаголовок",children:"Карточка с заголовком и подзаголовком"};const s=n.bind({});s.args={title:"Заголовок",children:"Карточка с actions",actions:r.jsx(b,{variant:"accent",children:"Действие"})};const i=n.bind({});i.args={title:"Бетон",children:"Карточка с бетонной текстурой"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: CardProps) => <ThemeProvider theme={theme}>
    <Card {...args} />
  </ThemeProvider>`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: CardProps) => <ThemeProvider theme={theme}>
    <Card {...args} />
  </ThemeProvider>`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: CardProps) => <ThemeProvider theme={theme}>
    <Card {...args} />
  </ThemeProvider>`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: CardProps) => <ThemeProvider theme={theme}>
    <Card {...args} />
  </ThemeProvider>`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: CardProps) => <ThemeProvider theme={theme}>
    <Card {...args} />
  </ThemeProvider>`,...i.parameters?.docs?.source}}};const k=["Default","WithTitle","WithSubtitle","WithActions","Concrete"];export{i as Concrete,t as Default,s as WithActions,a as WithSubtitle,o as WithTitle,k as __namedExportsOrder,W as default};
