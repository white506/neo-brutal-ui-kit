import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as m,o as v,t as f}from"./theme-CVLJDHQM.js";import"./iframe-BO0djaYt.js";const d=(e,r)=>{switch(e){case"orange":return r.colors.orange;case"blue":return r.colors.blueGray;case"red":return r.colors.accentRed;default:return r.colors.brown}},i={md:64,lg:96},b=m.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({$size:e})=>i[e]}px;
  height: ${({$size:e})=>i[e]}px;
  min-width: ${({$size:e})=>i[e]}px;
  min-height: ${({$size:e})=>i[e]}px;
  background: ${({theme:e})=>e.colors.beige};
  border: ${({theme:e,$accent:r})=>e.borderWidth} solid ${({theme:e,$accent:r})=>d(r,e)};
  border-radius: ${({theme:e})=>e.borderRadius};
  overflow: hidden;
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-size: ${({$size:e})=>e==="lg"?"2.5rem":"1.7rem"};
  font-weight: ${({theme:e})=>e.fontWeightBold};
  color: ${({theme:e,$accent:r})=>d(r,e)};
  user-select: none;
`,T=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,l=({src:e,alt:r,initials:p,accent:g,size:u="md",className:h})=>n.jsx(b,{$accent:g,$size:u,className:h,children:e?n.jsx(T,{src:e,alt:r||"avatar"}):p||"?"});l.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},initials:{required:!1,tsType:{name:"string"},description:""},accent:{required:!1,tsType:{name:"union",raw:"'orange' | 'blue' | 'red'",elements:[{name:"literal",value:"'orange'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'red'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"Components/Avatar",component:l,argTypes:{initials:{control:"text"},accent:{control:"select",options:["orange","blue","red",void 0]},size:{control:"select",options:["md","lg"]},src:{control:"text"}}},c=e=>n.jsx(v,{theme:f,children:n.jsx(l,{...e})}),a=c.bind({});a.args={initials:"AB",size:"md"};const t=c.bind({});t.args={initials:"NB",accent:"orange"};const s=c.bind({});s.args={src:"https://randomuser.me/api/portraits/men/32.jpg",initials:"NB"};const o=c.bind({});o.args={initials:"LG",size:"lg"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: AvatarProps) => <ThemeProvider theme={theme}>
    <Avatar {...args} />
  </ThemeProvider>`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: AvatarProps) => <ThemeProvider theme={theme}>
    <Avatar {...args} />
  </ThemeProvider>`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: AvatarProps) => <ThemeProvider theme={theme}>
    <Avatar {...args} />
  </ThemeProvider>`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: AvatarProps) => <ThemeProvider theme={theme}>
    <Avatar {...args} />
  </ThemeProvider>`,...o.parameters?.docs?.source}}};const y=["Initials","Accent","Photo","Large"];export{t as Accent,a as Initials,o as Large,s as Photo,y as __namedExportsOrder,P as default};
