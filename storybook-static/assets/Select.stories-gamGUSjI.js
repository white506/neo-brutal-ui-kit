import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./iframe-BO0djaYt.js";import{d as c,o as b,t as h}from"./theme-CVLJDHQM.js";const f=(e,r)=>{switch(e){case"orange":return r.colors.orange;case"blue":return r.colors.blueGray;case"red":return r.colors.accentRed;default:return r.colors.brown}},S=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`,x=c.label`
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-weight: ${({theme:e})=>e.fontWeightBold};
  font-size: 1.5rem;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.black};
`,$=c.select`
  font-family: ${({theme:e})=>e.fontFamilies.mono};
  font-size: 1.35rem;
  font-weight: ${({theme:e})=>e.fontWeightBold};
  color: ${({theme:e})=>e.colors.black};
  background: ${({theme:e})=>e.colors.beige};
  border: ${({theme:e,$accent:r,$error:t})=>t?`${e.borderWidth} solid ${e.colors.accentRed}`:`${e.borderWidth} solid ${f(r,e)}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  padding: 20px 32px;
  outline: none;
  box-shadow: none;
  transition: none;
  min-height: 64px;
  cursor: pointer;
  &:disabled {
    background: ${({theme:e})=>e.colors.blueGray};
    color: ${({theme:e})=>e.colors.darkGray};
    cursor: not-allowed;
  }
`,y=c.span`
  color: ${({theme:e})=>e.colors.accentRed};
  font-size: 1.1rem;
  font-family: ${({theme:e})=>e.fontFamilies.mono};
  font-weight: ${({theme:e})=>e.fontWeightBold};
`,p=({label:e,error:r,accent:t,options:u,disabled:m,...g})=>o.jsxs(S,{children:[e&&o.jsx(x,{children:e}),o.jsx($,{$accent:t,$error:!!r,disabled:m,...g,children:u.map(d=>o.jsx("option",{value:d.value,children:d.label},d.value))}),r&&o.jsx(y,{children:r})]});p.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},accent:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'red'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'red'"}]},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""}}};const T=[{value:"",label:"Выберите вариант"},{value:"one",label:"Вариант 1"},{value:"two",label:"Вариант 2"},{value:"three",label:"Вариант 3"}],V={title:"Components/Select",component:p,argTypes:{label:{control:"text"},error:{control:"text"},accent:{control:"select",options:["orange","blue","red",void 0]},disabled:{control:"boolean"},value:{control:"text"}}},i=e=>{const[r,t]=v.useState(e.value||"");return o.jsx(b,{theme:h,children:o.jsx(p,{...e,value:r,onChange:u=>t(u.target.value),options:T})})},a=i.bind({});a.args={label:"Выбор"};const s=i.bind({});s.args={label:"Accent",accent:"orange"};const n=i.bind({});n.args={label:"Disabled",disabled:!0};const l=i.bind({});l.args={label:"Ошибка",error:"Ошибка"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: SelectProps) => {
  const [value, setValue] = useState(args.value || '');
  return <ThemeProvider theme={theme}>
      <Select {...args} value={value} onChange={e => setValue(e.target.value)} options={options} />
    </ThemeProvider>;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: SelectProps) => {
  const [value, setValue] = useState(args.value || '');
  return <ThemeProvider theme={theme}>
      <Select {...args} value={value} onChange={e => setValue(e.target.value)} options={options} />
    </ThemeProvider>;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: SelectProps) => {
  const [value, setValue] = useState(args.value || '');
  return <ThemeProvider theme={theme}>
      <Select {...args} value={value} onChange={e => setValue(e.target.value)} options={options} />
    </ThemeProvider>;
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: SelectProps) => {
  const [value, setValue] = useState(args.value || '');
  return <ThemeProvider theme={theme}>
      <Select {...args} value={value} onChange={e => setValue(e.target.value)} options={options} />
    </ThemeProvider>;
}`,...l.parameters?.docs?.source}}};const C=["Default","Accent","Disabled","Error"];export{s as Accent,a as Default,n as Disabled,l as Error,C as __namedExportsOrder,V as default};
