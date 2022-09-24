"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[9119],{876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,v=p["".concat(i,".").concat(u)]||p[u]||d[u]||s;return n?a.createElement(v,r(r({ref:t},m),{},{components:n})):a.createElement(v,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(7896),o=(n(2784),n(876));const s={sidebar_position:2},r="Add/Remove Class Commands",l={unversionedId:"js-commands/add-remove-class",id:"js-commands/add-remove-class",title:"Add/Remove Class Commands",description:"Add or remove css classes including optional transition classes from an element using the addclass and removeclass",source:"@site/docs/11-js-commands/add-remove-class.md",sourceDirName:"11-js-commands",slug:"/js-commands/add-remove-class",permalink:"/docs/js-commands/add-remove-class",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/js-commands/overview"},next:{title:"Set/Remove Attribute Commands",permalink:"/docs/js-commands/set-remove-attr"}},i={},c=[{value:"Add Class Command",id:"add-class-command",level:2},{value:"Remove Class Command",id:"remove-class-command",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"addremove-class-commands"},"Add/Remove Class Commands"),(0,o.kt)("p",null,"Add or remove css classes including optional transition classes from an element using the ",(0,o.kt)("inlineCode",{parentName:"p"},"add_class")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"remove_class"),"\ncommands."),(0,o.kt)("h2",{id:"add-class-command"},"Add Class Command"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"add_class")," command adds one or more css classes to an element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"new JS().add_class(names: string, options?: ClassOptions)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"names")," - A string of space separated css class names to add to the element"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," - Options for the command (optional)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"to")," - A css selector to identify the element to add the class to. Defaults to the element that the JS Command is\nattached to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"time")," - The time (in milliseconds) over which to apply the transition options. Defaults to 200"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transition")," - The string of classes to apply before adding the classes, or a 3-tuple containing the transition\nclass, the class to apply to start the transition, and the class to apply to end the transition. e.g. ",'["ease-out\nduration-300", "opacity-0", "opacity-100"]')))),(0,o.kt)("p",null,"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'//... in your render function of a LiveView\n\n// add the "bg-blue-500" class to this button element on click\n<button phx-click="${new JS().add_class("bg-blue-500")}">Add Class</button>\n\n// add the "bg-blue-500" class to the element with id="target" on click\n<button phx-click="${new JS().add_class("bg-blue-500", {to: "#target"})}">Add Class</button>\n<div id="target">My Target</div>\n\n// add the "bg-blue-500" class to the element with id="target2" on click with a transition over 400ms\n<button phx-click="${new JS().add_class("bg-blue-500", {to: "#target2", transition: ["ease-out duration-300", "opacity-0", "opacity-100"], time: 400})}">Add Class</button>\n<div id="target2">My Target2</div>\n')),(0,o.kt)("h2",{id:"remove-class-command"},"Remove Class Command"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"remove_class")," command removes one or more css classes from an element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"new JS().remove_class(names: string, options?: ClassOptions)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"names")," - A string of space separated css class names to remove from the element"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," - Options for the command (optional)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"to")," - A css selector to identify the element to remove the class from. Defaults to the element that the JS Command\nis attached to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"time")," - The time (in milliseconds) over which to apply the transition options. Defaults to 200"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transition")," - The string of classes to apply before removing the classes, or a 3-tuple containing the transition\nclass, the class to apply to start the transition, and the class to apply to end the transition. e.g. ",'["ease-out\nduration-300", "opacity-0", "opacity-100"]')))),(0,o.kt)("p",null,"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'//... in your render function of a LiveView\n\n// remove the "bg-blue-500" class from this button element on click\n<button class="bg-blue-500" phx-click="${new JS().remove_class("bg-blue-500")}">Remove Class</button>\n\n// remove the "bg-blue-500" class from the element with id="target" on click\n<button phx-click="${new JS().remove_class("bg-blue-500", {to: "#target"})}">Remove Class</button>\n<div id="target" class="bg-blue-500">My Target</div>\n\n// remove the "bg-blue-500" class from the element with id="target2" on click with a transition over 400ms\n<button phx-click="${new JS().remove_class("bg-blue-500", {to: "#target2", transition: ["ease-out duration-300", "opacity-0", "opacity-100"], time: 400})}">Remove Class</button>\n<div id="target2" class="bg-blue-500">My Target2</div>\n')))}d.isMDXComponent=!0}}]);