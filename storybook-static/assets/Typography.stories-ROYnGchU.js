import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as n,o as p,t as c}from"./theme-CVLJDHQM.js";import"./iframe-BO0djaYt.js";const u=n.h1`
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-size: 3.2rem;
  font-weight: ${({theme:e})=>e.fontWeightBold};
  line-height: 1.1;
  color: ${({theme:e})=>e.colors.brown};
  margin: 0;
`,h=n.h2`
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-size: 2rem;
  font-weight: ${({theme:e})=>e.fontWeightBold};
  line-height: 1.15;
  color: ${({theme:e})=>e.colors.orange};
  margin: 0;
`,f=n.p`
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-size: ${({$size:e})=>e==="lg"?"1.5rem":"1.1rem"};
  font-weight: 500;
  line-height: 1.4;
  color: ${({theme:e})=>e.colors.black};
  margin: 0;
`,v=n.span`
  font-family: ${({theme:e})=>e.fontFamilies.mono};
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${({theme:e})=>e.colors.darkGray};
`,r=({as:e="h1",children:l,className:t})=>a.jsx(u,{as:e,className:t,children:l}),o=({as:e="h2",children:l,className:t})=>a.jsx(h,{as:e,className:t,children:l}),s=({as:e="p",size:l="md",children:t,className:m})=>a.jsx(f,{as:e,$size:l,className:m,children:t}),d=({as:e="span",children:l,className:t})=>a.jsx(v,{as:e,className:t,children:l});r.__docgenInfo={description:"",methods:[],displayName:"Title",props:{as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"",defaultValue:{value:"'h1'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"Subtitle",props:{as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"",defaultValue:{value:"'p'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};d.__docgenInfo={description:"",methods:[],displayName:"Caption",props:{as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"",defaultValue:{value:"'span'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const x={title:"Components/Typography"},i=()=>a.jsx(p,{theme:c,children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[a.jsx(r,{as:"h1",children:"Заголовок H1"}),a.jsx(o,{as:"h2",children:"Подзаголовок H2"}),a.jsx(s,{size:"lg",children:"Крупный текст (lg)"}),a.jsx(s,{children:"Обычный текст (md)"}),a.jsx(d,{children:"Подпись/Caption"})]})});i.__docgenInfo={description:"",methods:[],displayName:"All"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <ThemeProvider theme={theme}>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <Title as="h1">Заголовок H1</Title>
      <Subtitle as="h2">Подзаголовок H2</Subtitle>
      <Text size="lg">Крупный текст (lg)</Text>
      <Text>Обычный текст (md)</Text>
      <Caption>Подпись/Caption</Caption>
    </div>
  </ThemeProvider>`,...i.parameters?.docs?.source}}};const N=["All"];export{i as All,N as __namedExportsOrder,x as default};
