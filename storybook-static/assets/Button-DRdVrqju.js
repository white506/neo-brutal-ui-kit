import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{l as o,d as l}from"./theme-CVLJDHQM.js";const p={sm:o`
    font-size: 1rem;
    padding: 12px 24px;
    min-height: 40px;
    min-width: 80px;
    gap: 8px;
  `,md:o`
    font-size: 1.35rem;
    padding: 20px 48px;
    min-height: 72px;
    min-width: 200px;
    gap: 16px;
  `,lg:o`
    font-size: 2rem;
    padding: 32px 64px;
    min-height: 96px;
    min-width: 280px;
    gap: 24px;
  `},u=(e="primary",r)=>{switch(e){case"accent":return o`
        background: ${r.colors.orange};
        color: ${r.colors.white};
        border-color: ${r.colors.orange};
      `;case"danger":return o`
        background: ${r.colors.accentRed};
        color: ${r.colors.white};
        border-color: ${r.colors.accentRed};
      `;case"ghost":return o`
        background: transparent;
        color: ${r.colors.brown};
        border-color: ${r.colors.brown};
      `;case"primary":default:return o`
        background: ${r.colors.brown};
        color: ${r.colors.white};
        border-color: ${r.colors.brown};
      `}},m=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.fontFamilies.grotesk};
  font-weight: ${({theme:e})=>e.fontWeightBold};
  text-transform: uppercase;
  border: ${({theme:e})=>e.borderWidth} solid;
  border-radius: ${({theme:e})=>e.borderRadius};
  transition: none;
  outline: none;
  box-shadow: none;
  letter-spacing: 0.04em;
  ${({size:e="md"})=>p[e]}
  ${({variant:e="primary",theme:r})=>u(e,r)}
  ${({fullWidth:e})=>e&&o`width: 100%;`}
  &:active {
    filter: brightness(0.85);
  }
  &:disabled {
    background: ${({theme:e})=>e.colors.blueGray};
    color: ${({theme:e})=>e.colors.white};
    opacity: 0.5;
    cursor: not-allowed;
  }
`,i=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,g=({children:e,variant:r="primary",size:s="md",fullWidth:c,iconLeft:t,iconRight:n,...d})=>a.jsxs(m,{variant:r,size:s,fullWidth:c,...d,children:[t&&a.jsx(i,{children:t}),e,n&&a.jsx(i,{children:n})]});g.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'accent' | 'danger' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},iconLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{g as B};
