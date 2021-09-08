!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e||self).reactMultiSelectComponent={},e.react)}(this,function(e,t){function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=r(t);let n;const l={allItemsAreSelected:"All items are selected.",clearSearch:"Clear Search",clearSelected:"Clear Selected",noOptions:"No options",search:"Search",selectAll:"Select All",selectSomeItems:"Select...",create:"Create"},o={value:[],hasSelectAll:!0,className:"multi-select",debounceDuration:200,options:[]},s=a.default.createContext({}),c=({props:e,children:r})=>{const[c,i]=t.useState(e.options);return t.useMemo(()=>{"undefined"==typeof document||n||(n=document.createElement("style"),n.innerHTML=".rmsc{--rmsc-main:#4285f4;--rmsc-hover:#f1f3f5;--rmsc-selected:#e2e6ea;--rmsc-border:#ccc;--rmsc-gray:#aaa;--rmsc-bg:#fff;--rmsc-p:10px;--rmsc-radius:4px;--rmsc-h:38px}.rmsc *{box-sizing:border-box;transition:all .2s ease}.rmsc .gray{color:var(--rmsc-gray)}.rmsc .dropdown-content{padding-top:8px;position:absolute;top:100%;width:100%;z-index:1}.rmsc .dropdown-content .panel-content{background:var(--rmsc-bg);border-radius:var(--rmsc-radius);box-shadow:0 0 0 1px rgba(0,0,0,.1),0 4px 11px rgba(0,0,0,.1);overflow:hidden}.rmsc .dropdown-container{background-color:var(--rmsc-bg);border:1px solid var(--rmsc-border);border-radius:var(--rmsc-radius);outline:0;position:relative}.rmsc .dropdown-container[aria-disabled=true]:focus-within{border-color:var(--rmsc-gray);box-shadow:var(--rmsc-gray) 0 0 0 1px}.rmsc .dropdown-container:focus-within{border-color:var(--rmsc-main);box-shadow:var(--rmsc-main) 0 0 0 1px}.rmsc .dropdown-heading{align-items:center;cursor:default;display:flex;height:var(--rmsc-h);outline:0;padding:0 var(--rmsc-p);position:relative;width:100%}.rmsc .dropdown-heading .dropdown-heading-value{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rmsc .clear-selected-button{background:none;border:0;cursor:pointer;display:flex;padding:0}.rmsc .options{margin:0;max-height:260px;overflow-y:auto;padding-left:0}.rmsc .options li{list-style:none;margin:0}.rmsc .select-item{box-sizing:border-box;cursor:pointer;display:block;outline:0;padding:var(--rmsc-p)}.rmsc .select-item:focus,.rmsc .select-item:hover{background:var(--rmsc-hover)}.rmsc .select-item.selected{background:var(--rmsc-selected)}.rmsc .no-options{color:var(--rmsc-gray);padding:var(--rmsc-p);text-align:center}.rmsc .search{border-bottom:1px solid var(--rmsc-border);position:relative;width:100%}.rmsc .search input{border:0;height:var(--rmsc-h);outline:0;padding:0 var(--rmsc-p);width:100%}.rmsc .search-clear-button{background:none;border:0;bottom:0;cursor:pointer;padding:0 calc(var(--rmsc-p)/2);position:absolute;right:0;top:0}.rmsc .search-clear-button [hidden]{display:none}.rmsc .item-renderer{align-items:baseline;display:flex}.rmsc .item-renderer input{margin:0 5px 0 0}.rmsc .item-renderer.disabled{opacity:.5}.rmsc .spinner{-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite}.rmsc .spinner .path{stroke:var(--rmsc-border);stroke-width:4px;stroke-linecap:round;-webkit-animation:dash 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite}@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}",document.head.appendChild(n))},[]),t.useEffect(()=>{i(e.options)},[e.options]),a.default.createElement(s.Provider,{value:{t:t=>{var r;return(null==(r=e.overrideStrings)?void 0:r[t])||l[t]},...o,...e,options:c,setOptions:i}},r)},i=()=>a.default.useContext(s),d={when:!0,eventTypes:["keydown"]};function u(e,r,a){const n=t.useMemo(()=>Array.isArray(e)?e:[e],[e]),l=Object.assign({},d,a),{when:o,eventTypes:s}=l,c=t.useRef(r),{target:i}=l;t.useEffect(()=>{c.current=r});const u=t.useCallback(e=>{n.some(t=>e.key===t||e.code===t)&&c.current(e)},[n]);t.useEffect(()=>{if(o&&"undefined"!=typeof window){const e=i?i.current:window;return s.forEach(t=>{e&&e.addEventListener(t,u)}),()=>{s.forEach(t=>{e&&e.removeEventListener(t,u)})}}},[o,s,n,i,r])}const m={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",ENTER:"Enter",ESCAPE:"Escape",SPACE:"Space"};function f(e,t){const r=e.length,a=t.length,n=[];if(!r||!a)return 0;if(r<a&&([e,t]=[t,e]),-1!==e.indexOf(t))return a+1/r;for(let e=0;e<=r;++e)n[e]=[0];for(let e=0;e<=a;++e)n[0][e]=0;for(let l=1;l<=r;++l)for(let r=1;r<=a;++r)n[l][r]=e[l-1]===t[r-1]?1+n[l-1][r-1]:Math.max(n[l][r-1],n[l-1][r]);return n[r][a]}function p(e,t){if(!e)return"";if(e=e.toUpperCase().replace(/((?=[^\u00E0-\u00FC])\W)|_/g,""),!t)return e;const r=t;return Object.keys(r).reduce((e,t)=>{const a=new RegExp(t,"g");return e.replace(a,r[t])},e)}const h=()=>a.default.createElement("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-search-clear-icon gray"},a.default.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.default.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),b=({checked:e,option:t,onClick:r,disabled:n})=>a.default.createElement("div",{className:`item-renderer ${n&&"disabled"}`},a.default.createElement("input",{type:"checkbox",onChange:r,checked:e,tabIndex:-1,disabled:n}),a.default.createElement("span",null,t.label)),g=({itemRenderer:e=b,option:r,checked:n,tabIndex:l,disabled:o,onSelectionChanged:s,onClick:c})=>{const i=t.useRef(),d=()=>{o||s(!n)};return u([m.ENTER,m.SPACE],e=>{d(),e.preventDefault()},{target:i}),a.default.createElement("label",{className:`select-item ${n&&"selected"}`,role:"option","aria-selected":n,tabIndex:l,ref:i},a.default.createElement(e,{option:r,checked:n,onClick:e=>{d(),c(e)},disabled:o}))},v=({options:e,onClick:t,skipIndex:r})=>{const{disabled:n,value:l,onChange:o,ItemRenderer:s}=i();return a.default.createElement(a.default.Fragment,null,e.map((e,c)=>{const i=c+r;return a.default.createElement("li",{key:(null==e?void 0:e.key)||c},a.default.createElement(g,{tabIndex:i,option:e,onSelectionChanged:t=>{return r=e,void(n||o(t?[...l,r]:l.filter(e=>e.value!==r.value)));var r},checked:!!l.find(t=>t.value===e.value),onClick:e=>t(e,i),itemRenderer:s,disabled:e.disabled||n}))}))};var E;!function(e){e[e.SEARCH=0]="SEARCH",e[e.NONE=-1]="NONE"}(E||(E={}));const y=()=>{const{t:e,onChange:r,options:n,setOptions:l,value:o,filterOptions:s,selectAllLabel:c,ItemRenderer:d,disabled:b,disableSearch:y,hasSelectAll:k,ClearIcon:x,debounceDuration:w,isCreatable:C,onCreateOption:S}=i(),R=t.useRef(),N=t.useRef(),[A,O]=t.useState(""),[I,P]=t.useState(n),[M,T]=t.useState(""),[W,_]=t.useState(0),D=t.useCallback(((e,t)=>{let r;return function(){clearTimeout(r),r=setTimeout(()=>{e.apply(null,[].slice.call(arguments))},t)}})(e=>T(e),w),[]),j=t.useMemo(()=>{let e=0;return y||(e+=1),k&&(e+=1),e},[y,k]),L={label:c||e("selectAll"),value:""},H=()=>{var e;T(""),O(""),null==N||null==(e=N.current)||e.focus()},$=e=>_(e);u([m.ARROW_DOWN,m.ARROW_UP],e=>{switch(e.code){case m.ARROW_UP:F(-1);break;case m.ARROW_DOWN:F(1);break;default:return}e.stopPropagation(),e.preventDefault()},{target:R});const F=e=>{let t=W+e;t=Math.max(0,t),t=Math.min(t,n.length+Math.max(j-1,0)),_(t)};t.useEffect(()=>{var e,t;null==R||null==(e=R.current)||null==(t=e.querySelector(`[tabIndex='${W}']`))||t.focus()},[W]);const[U,z]=t.useMemo(()=>{const e=I.filter(e=>!e.disabled);return[e.every(e=>-1!==o.findIndex(t=>t.value===e.value)),0!==e.length]},[I,o]);return t.useEffect(()=>{(function(){try{return Promise.resolve(s?s(n,M):function(e,t,r){if(!t)return e;const a=p(t,r);return e.filter(({label:e,value:t})=>null!=e&&null!=t).map(e=>({option:e,score:f(p(e.label,r),a)})).filter(e=>e.score>=a.length-2).sort((e,t)=>t.score-e.score).map(e=>e.option)}(n,M))}catch(e){return Promise.reject(e)}})().then(P)},[M,n]),a.default.createElement("div",{className:"select-panel",role:"listbox",ref:R},!y&&a.default.createElement("div",{className:"search"},a.default.createElement("input",{placeholder:e("search"),type:"text","aria-describedby":e("search"),onChange:e=>{D(e.target.value),O(e.target.value),_(E.SEARCH)},onFocus:()=>{_(E.SEARCH)},value:A,ref:N,tabIndex:0}),a.default.createElement("button",{type:"button",className:"search-clear-button",hidden:!A,onClick:H,"aria-label":e("clearSearch")},x||a.default.createElement(h,null))),a.default.createElement("ul",{className:"options"},k&&z&&a.default.createElement(g,{tabIndex:1===j?0:1,checked:U,option:L,onSelectionChanged:e=>{const t=(e=>{const t=I.filter(e=>!e.disabled).map(e=>e.value);if(e){const e=[...o.map(e=>e.value),...t];return I.filter(t=>e.includes(t.value))}return o.filter(e=>!t.includes(e.value))})(e);r(t)},onClick:()=>$(1),itemRenderer:d,disabled:b}),I.length?a.default.createElement(v,{skipIndex:j,options:I,onClick:(e,t)=>$(t)}):C?a.default.createElement("li",{onClick:function(){try{function e(){l([t,...n]),H(),r([...o,t])}let t={label:A,value:A,__isNew__:!0};const a=function(){if(S)return Promise.resolve(S(A)).then(function(e){t=e})}();return Promise.resolve(a&&a.then?a.then(e):e())}catch(e){return Promise.reject(e)}},className:"select-item creatable"},`${e("create")} "${A}"`):a.default.createElement("li",{className:"no-options"},e("noOptions"))))},k=({expanded:e})=>a.default.createElement("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-heading-dropdown-arrow gray"},a.default.createElement("path",{d:e?"M18 15 12 9 6 15":"M6 9L12 15 18 9"})),x=()=>{const{t:e,value:t,options:r,valueRenderer:n}=i(),l=0===t.length,o=t.length===r.length,s=n&&n(t,r);return l?a.default.createElement("span",{className:"gray"},s||e("selectSomeItems")):a.default.createElement("span",null,s||(o?e("allItemsAreSelected"):t.map(e=>e.label).join(", ")))},w=({size:e=24})=>a.default.createElement("span",{style:{width:e,marginRight:"0.2rem"}},a.default.createElement("svg",{width:e,height:e,className:"spinner",viewBox:"0 0 50 50",style:{display:"inline",verticalAlign:"middle"}},a.default.createElement("circle",{cx:"25",cy:"25",r:"20",fill:"none",className:"path"}))),C=()=>{const{t:e,onMenuToggle:r,ArrowRenderer:n,shouldToggleOnHover:l,isLoading:o,disabled:s,onChange:c,labelledBy:d,value:f,isOpen:p,defaultIsOpen:b,ClearSelectedIcon:g,actionButtons:v=a.default.createElement(a.default.Fragment,null," ")}=i(),[E,C]=t.useState(!0),[S,R]=t.useState(b),[N,A]=t.useState(!1),O=n||k,I=t.useRef();!function(e,a){const n=t.useRef(!1);t.useEffect(()=>{n.current?r&&r(S):n.current=!0},a)}(0,[S]),t.useEffect(()=>{void 0===b&&"boolean"==typeof p&&(C(!1),R(p))},[p]),u([m.ENTER,m.ARROW_DOWN,m.SPACE,m.ESCAPE],e=>{var t;["text","button"].includes(e.target.type)&&[m.SPACE,m.ENTER].includes(e.code)||(E&&(e.code===m.ESCAPE?(R(!1),null==I||null==(t=I.current)||t.focus()):R(!0)),e.preventDefault())},{target:I});const P=e=>{E&&l&&R(e)};return a.default.createElement("div",{tabIndex:0,className:"dropdown-container","aria-labelledby":d,"aria-expanded":S,"aria-readonly":!0,"aria-disabled":s,ref:I,onFocus:()=>!N&&A(!0),onBlur:e=>{!e.currentTarget.contains(e.relatedTarget)&&E&&(A(!1),R(!1))},onMouseEnter:()=>P(!0),onMouseLeave:()=>P(!1)},a.default.createElement("div",{className:"dropdown-heading",onClick:()=>{E&&R(!o&&!s&&!S)}},a.default.createElement("div",{className:"dropdown-heading-value"},a.default.createElement(x,null)),o&&a.default.createElement(w,null),f.length>0&&a.default.createElement("button",{type:"button",className:"clear-selected-button",onClick:e=>{e.stopPropagation(),c([]),E&&R(!1)},disabled:s,"aria-label":e("clearSelected")},g||a.default.createElement(h,null)),a.default.createElement(O,{expanded:S})),S&&a.default.createElement("div",{className:"dropdown-content"},a.default.createElement("div",{className:"panel-content"},a.default.createElement(y,null),v)))};e.Dropdown=C,e.MultiSelect=e=>a.default.createElement(c,{props:e},a.default.createElement("div",{className:`rmsc ${e.className||"multi-select"}`},a.default.createElement(C,null))),e.SelectItem=g,e.SelectPanel=y});