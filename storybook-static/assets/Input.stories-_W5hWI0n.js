import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./iframe-BO0djaYt.js";import{d as a,o as S,t as V}from"./theme-CVLJDHQM.js";const k=a.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
`,A=a.label`
  font-family: 'Space Grotesk', 'IBM Plex Mono', 'Monument Grotesk', Arial, sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #672725;
`,$=a.div`
  display: flex;
  align-items: stretch;
  position: relative;
  flex-direction: ${({$iconLeft:t})=>t?"row":"row-reverse"};
`,j=`
  font-family: 'IBM Plex Mono', 'Space Grotesk', Arial, sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #18181A;
  background: #F9E2B0;
  border: 2px solid #672725;
  border-radius: 0;
  padding: 20px 32px;
  outline: none;
  box-shadow: none;
  transition: none;
  min-height: 64px;
  width: 100%;

  &:focus {
    border-color: #F56D39;
  }
  &:disabled {
    background: #8A9EA5;
    color: #353C42;
    cursor: not-allowed;
  }
`,B=a.input`
  ${j}
  border-color: ${({$error:t})=>t?"#F56D39":"#672725"};
`,E=a.textarea`
  ${j}
  resize: vertical;
  border-color: ${({$error:t})=>t?"#F56D39":"#672725"};
`,I=a.span`
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #8A9EA5;
`,q=a.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #8A9EA5;
  font-size: 1.2em;
  cursor: pointer;
`,D=a.div`
  color: #F56D39;
  font-size: 1rem;
  margin-top: 4px;
`,g=({label:t,error:o,icon:r,iconPosition:n="left",textarea:y,withClear:C,value:x,onChange:u,...v})=>{const p=x!==void 0,[w,f]=T.useState(""),m=p?x:w,b=h=>{p||f(h.target.value),u&&u(h)},P=()=>{p||f(""),u&&u({target:{value:""},currentTarget:{value:""}})};return e.jsxs(k,{children:[t&&e.jsx(A,{children:t}),e.jsxs($,{$iconLeft:!!(r&&n==="left"),$iconRight:!!(r&&n==="right"),children:[r&&n==="left"&&e.jsx(I,{children:r}),y?e.jsx(E,{$error:!!o,value:m,onChange:b,...v}):e.jsx(B,{$error:!!o,value:m,onChange:b,...v}),C&&m&&e.jsx(q,{type:"button","aria-label":"очистить",onClick:P,children:"×"}),r&&n==="right"&&e.jsx(I,{children:r})]}),o&&e.jsx(D,{children:o})]})};g.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},textarea:{required:!1,tsType:{name:"boolean"},description:""},withClear:{required:!1,tsType:{name:"boolean"},description:""}}};const M=()=>e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M8 12h8"})]}),F={title:"Components/Input",component:g,argTypes:{label:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},placeholder:{control:"text"},value:{control:"text"},icon:{control:!1},iconPosition:{control:"select",options:["left","right"]},textarea:{control:"boolean"},withClear:{control:"boolean"}}},d=t=>{const[o,r]=T.useState(t.value||"");return e.jsx(S,{theme:V,children:e.jsx(g,{...t,value:o,onChange:n=>r(n.target.value)})})},s=d.bind({});s.args={label:"Label",placeholder:"Введите текст"};const l=d.bind({});l.args={label:"С иконкой",icon:e.jsx(M,{}),iconPosition:"left"};const i=d.bind({});i.args={label:"С очисткой",withClear:!0,value:"Текст"};const c=d.bind({});c.args={label:"Textarea",textarea:!0,placeholder:"Введите много текста"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: InputProps) => {
  const [value, setValue] = useState(args.value || '');
  return <ThemeProvider theme={theme}>
      <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
    </ThemeProvider>;
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: InputProps) => {
  const [value, setValue] = useState(args.value || '');
  return <ThemeProvider theme={theme}>
      <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
    </ThemeProvider>;
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: InputProps) => {
  const [value, setValue] = useState(args.value || '');
  return <ThemeProvider theme={theme}>
      <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
    </ThemeProvider>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: InputProps) => {
  const [value, setValue] = useState(args.value || '');
  return <ThemeProvider theme={theme}>
      <Input {...args} value={value} onChange={e => setValue(e.target.value)} />
    </ThemeProvider>;
}`,...c.parameters?.docs?.source}}};const L=["Default","WithIcon","WithClear","Textarea"];export{s as Default,c as Textarea,i as WithClear,l as WithIcon,L as __namedExportsOrder,F as default};
