import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{r as x}from"./index-CTjT7uj6.js";import{F as C}from"./HelpMessage-8RhooMOY.js";import"./index-CCQ3W5xA.js";import{u as y}from"./useOptionsWithId-BhtwyMuM.js";import{g as I}from"./getOptionClassName-B6m0JZo2.js";const g=x.forwardRef(({disabled:e=!1,value:o="",id:c,children:l,label:i,isChecked:r,className:n,classModifier:d,...f},u)=>{const m=l||i,p=x.useId(),a=c??p,t=I(n??"",d??"","af-form__checkbox",e);return s.jsxs("div",{className:t,children:[s.jsx("input",{...f,className:"af-form__input-checkbox",value:o,id:a,disabled:e,checked:r,type:"checkbox",ref:u}),s.jsxs("label",{className:"af-form__label",htmlFor:a,children:[s.jsx("span",{className:"af-form__indicator",children:s.jsx("i",{className:"glyphicon glyphicon-ok"})}),s.jsx("span",{className:"af-form__description",children:m})]})]})});g.displayName="CheckboxItem";g.__docgenInfo={description:"",methods:[],displayName:"CheckboxItem",props:{classModifier:{required:!1,tsType:{name:"string"},description:""},optionClassName:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},isChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},value:{defaultValue:{value:'""',computed:!1},required:!1}}};var b=(e=>(e.classic="classic",e.default="default",e.inline="inline",e.toggle="toggle",e))(b||{});const j=e=>{switch(e){case b.default:return"af-form__checkbox-custom";case b.classic:return"af-form__checkbox";default:return`af-form__checkbox-${e}`}},N=x.forwardRef(({id:e,name:o,options:c,disabled:l,children:i,values:r=[],mode:n=b.default,onChange:d=()=>{},...f},u)=>{const m=j(n),p=({target:{value:a,checked:t}})=>{const h=t?[...r,a]:r.filter(_=>_!==a);d({values:h,target:{value:a,checked:t},id:e,name:o})};return s.jsx(s.Fragment,{children:c.map(a=>{const t=r?r.indexOf(a.value)>=0:!1;return x.createElement(g,{...f,onChange:p,key:a.value,className:m,isChecked:t,name:o,disabled:a.disabled||l,ref:u,...a},i)})})});N.displayName="Checkbox";const q=N;N.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{values:{defaultValue:{value:"[]",computed:!1},required:!1},mode:{defaultValue:{value:"CheckboxModes.default",computed:!0},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const k=x.forwardRef(({mode:e,messageType:o,message:c,classModifier:l,options:i,classNameContainerLabel:r,classNameContainerInput:n,label:d,isVisible:f,className:u,forceDisplayMessage:m,required:p,...a},t)=>{let h=l;e===b.classic&&(h+=" label-top"),p&&(h+=" required");const _=y(i);return s.jsx(C,{label:d,id:_[0].id,message:c,messageType:o,isVisible:f,forceDisplayMessage:m,className:u,classModifier:h,classNameContainerLabel:r,classNameContainerInput:n,children:s.jsx(q,{mode:e,options:_,classModifier:l,ref:t,...a})})});k.displayName="CheckboxInput";k.__docgenInfo={description:"",methods:[],displayName:"CheckboxInput"};export{k as C,b as a,g as b,q as c};
