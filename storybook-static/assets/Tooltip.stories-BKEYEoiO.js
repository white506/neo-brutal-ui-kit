import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-BO0djaYt.js";import{d as u,l as t,o as P,t as w}from"./theme-CVLJDHQM.js";import{B as R}from"./Button-DRdVrqju.js";const v=(e,o)=>{switch(e){case"orange":return o.colors.orange;case"blue":return o.colors.blueGray;case"red":return o.colors.accentRed;default:return o.colors.brown}},y=u.span`
  position: relative;
  display: inline-block;
`,j=u.div`
  position: absolute;
  z-index: 100;
  min-width: 180px;
  max-width: 320px;
  padding: 20px 32px;
  background: ${({theme:e})=>e.colors.beige};
  color: ${({theme:e})=>e.colors.black};
  border: ${({theme:e,$accent:o})=>e.borderWidth} solid ${({theme:e,$accent:o})=>v(o,e)};
  border-radius: ${({theme:e})=>e.borderRadius};
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-size: 1.2rem;
  font-weight: ${({theme:e})=>e.fontWeightBold};
  box-shadow: none;
  text-transform: none;
  pointer-events: none;
  white-space: pre-line;
  ${({$position:e})=>e==="top"&&t`bottom: 100%; left: 50%; transform: translateX(-50%) translateY(-12px);`}
  ${({$position:e})=>e==="bottom"&&t`top: 100%; left: 50%; transform: translateX(-50%) translateY(12px);`}
  ${({$position:e})=>e==="left"&&t`right: 100%; top: 50%; transform: translateY(-50%) translateX(-12px);`}
  ${({$position:e})=>e==="right"&&t`left: 100%; top: 50%; transform: translateY(-50%) translateX(12px);`}
`,S=u.div`
  position: absolute;
  width: 18px;
  height: 18px;
  background: ${({theme:e})=>e.colors.beige};
  border: ${({theme:e,$accent:o})=>e.borderWidth} solid ${({theme:e,$accent:o})=>v(o,e)};
  box-sizing: border-box;
  z-index: 101;
  ${({$position:e})=>e==="top"&&t`bottom: -10px; left: 50%; transform: translateX(-50%) rotate(45deg); border-top: none; border-left: none;`}
  ${({$position:e})=>e==="bottom"&&t`top: -10px; left: 50%; transform: translateX(-50%) rotate(45deg); border-bottom: none; border-right: none;`}
  ${({$position:e})=>e==="left"&&t`right: -10px; top: 50%; transform: translateY(-50%) rotate(45deg); border-top: none; border-right: none;`}
  ${({$position:e})=>e==="right"&&t`left: -10px; top: 50%; transform: translateY(-50%) rotate(45deg); border-bottom: none; border-left: none;`}
`,g=({content:e,position:o="top",accent:h,children:$})=>{const[B,b]=x.useState(!1),m=x.useRef(null),T=()=>{m.current=setTimeout(()=>b(!0),100)},f=()=>{m.current&&clearTimeout(m.current),b(!1)};return n.jsxs(y,{onMouseEnter:T,onMouseLeave:f,onFocus:T,onBlur:f,tabIndex:0,children:[$,B&&n.jsxs(j,{$position:o,$accent:h,children:[e,n.jsx(S,{$position:o,$accent:h})]})]})};g.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},accent:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'red'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'red'"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const _={title:"Components/Tooltip",component:g,argTypes:{content:{control:"text"},position:{control:"select",options:["top","right","bottom","left"]},accent:{control:"select",options:["orange","blue","red",void 0]}}},r=e=>n.jsx(P,{theme:w,children:n.jsx(g,{...e,children:n.jsx(R,{children:"Наведи"})})}),s=r.bind({});s.args={content:"Сверху",position:"top"};const a=r.bind({});a.args={content:"Справа",position:"right"};const i=r.bind({});i.args={content:"Снизу",position:"bottom"};const c=r.bind({});c.args={content:"Слева",position:"left"};const l=r.bind({});l.args={content:"Оранжевый акцент",accent:"orange"};const p=r.bind({});p.args={content:"Синий акцент",accent:"blue"};const d=r.bind({});d.args={content:"Красный акцент",accent:"red"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: TooltipProps) => <ThemeProvider theme={theme}>
    <Tooltip {...args}>
      <Button>Наведи</Button>
    </Tooltip>
  </ThemeProvider>`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: TooltipProps) => <ThemeProvider theme={theme}>
    <Tooltip {...args}>
      <Button>Наведи</Button>
    </Tooltip>
  </ThemeProvider>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: TooltipProps) => <ThemeProvider theme={theme}>
    <Tooltip {...args}>
      <Button>Наведи</Button>
    </Tooltip>
  </ThemeProvider>`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: TooltipProps) => <ThemeProvider theme={theme}>
    <Tooltip {...args}>
      <Button>Наведи</Button>
    </Tooltip>
  </ThemeProvider>`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: TooltipProps) => <ThemeProvider theme={theme}>
    <Tooltip {...args}>
      <Button>Наведи</Button>
    </Tooltip>
  </ThemeProvider>`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: TooltipProps) => <ThemeProvider theme={theme}>
    <Tooltip {...args}>
      <Button>Наведи</Button>
    </Tooltip>
  </ThemeProvider>`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: TooltipProps) => <ThemeProvider theme={theme}>
    <Tooltip {...args}>
      <Button>Наведи</Button>
    </Tooltip>
  </ThemeProvider>`,...d.parameters?.docs?.source}}};const q=["Top","Right","Bottom","Left","AccentOrange","AccentBlue","AccentRed"];export{p as AccentBlue,l as AccentOrange,d as AccentRed,i as Bottom,c as Left,a as Right,s as Top,q as __namedExportsOrder,_ as default};
