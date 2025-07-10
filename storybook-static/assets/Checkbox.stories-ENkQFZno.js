import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-BO0djaYt.js";import{d as i,o as g,t as b}from"./theme-CVLJDHQM.js";const m=(e,r)=>{switch(e){case"orange":return r.colors.orange;case"blue":return r.colors.blueGray;case"red":return r.colors.accentRed;default:return r.colors.brown}},x=i.label`
  display: flex;
  align-items: center;
  gap: 24px;
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-size: 1.3rem;
  font-weight: ${({theme:e})=>e.fontWeightBold};
  cursor: pointer;
  user-select: none;
`,C=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border: ${({theme:e,$accent:r,$error:o})=>o?`${e.borderWidth} solid ${e.colors.accentRed}`:`${e.borderWidth} solid ${m(r,e)}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e,$disabled:r})=>r?e.colors.blueGray:e.colors.beige};
  transition: none;
  box-shadow: none;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
`,f=i.input`
  display: none;
`,$=i.svg`
  display: ${({$checked:e})=>e?"block":"none"};
  width: 24px;
  height: 24px;
  stroke: ${({theme:e,$accent:r,$disabled:o})=>o?e.colors.darkGray:m(r,e)};
  stroke-width: 4px;
  stroke-linecap: square;
  fill: none;
`,y=i.span`
  color: ${({theme:e})=>e.colors.accentRed};
  font-size: 1.1rem;
  font-family: ${({theme:e})=>e.fontFamilies.mono};
  font-weight: ${({theme:e})=>e.fontWeightBold};
  margin-left: 12px;
`,p=({label:e,error:r,accent:o,disabled:c,checked:h,...k})=>t.jsxs(x,{children:[t.jsxs(C,{$checked:!!h,$accent:o,$error:!!r,$disabled:c,children:[t.jsx(f,{type:"checkbox",checked:h,disabled:c,...k}),t.jsx($,{$checked:!!h,$accent:o,$disabled:c,viewBox:"0 0 24 24",children:t.jsx("polyline",{points:"4,12 10,18 20,6"})})]}),e,r&&t.jsx(y,{children:r})]});p.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},accent:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'red'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'red'"}]},description:""}}};const P={title:"Components/Checkbox",component:p,argTypes:{label:{control:"text"},error:{control:"text"},accent:{control:"select",options:["orange","blue","red",void 0]},disabled:{control:"boolean"},checked:{control:"boolean"}}},l=e=>{const[r,o]=u.useState(!!e.checked);return t.jsx(g,{theme:b,children:t.jsx(p,{...e,checked:r,onChange:c=>o(c.target.checked)})})},s=l.bind({});s.args={label:"Чекбокс"};const n=l.bind({});n.args={label:"Accent",accent:"orange"};const a=l.bind({});a.args={label:"Disabled",disabled:!0};const d=l.bind({});d.args={label:"Ошибка",error:"Ошибка"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: CheckboxProps) => {
  const [checked, setChecked] = useState(!!args.checked);
  return <ThemeProvider theme={theme}>
      <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />
    </ThemeProvider>;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: CheckboxProps) => {
  const [checked, setChecked] = useState(!!args.checked);
  return <ThemeProvider theme={theme}>
      <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />
    </ThemeProvider>;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: CheckboxProps) => {
  const [checked, setChecked] = useState(!!args.checked);
  return <ThemeProvider theme={theme}>
      <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />
    </ThemeProvider>;
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: CheckboxProps) => {
  const [checked, setChecked] = useState(!!args.checked);
  return <ThemeProvider theme={theme}>
      <Checkbox {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />
    </ThemeProvider>;
}`,...d.parameters?.docs?.source}}};const j=["Default","Accent","Disabled","Error"];export{n as Accent,s as Default,a as Disabled,d as Error,j as __namedExportsOrder,P as default};
