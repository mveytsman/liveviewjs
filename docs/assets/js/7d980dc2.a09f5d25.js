"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[9376],{876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(876));const r={sidebar_position:1},o="LiveViewSocket API",l={unversionedId:"liveview-socket/liveviewsocket-api",id:"liveview-socket/liveviewsocket-api",title:"LiveViewSocket API",description:"The LiveViewSocket API is the second most important API (behind the LiveView API itself). As you've seen, the",source:"@site/docs/04-liveview-socket/liveviewsocket-api.md",sourceDirName:"04-liveview-socket",slug:"/liveview-socket/liveviewsocket-api",permalink:"/docs/liveview-socket/liveviewsocket-api",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"LiveViewSocket",permalink:"/docs/category/liveviewsocket"},next:{title:"LiveViewSocket API - Context",permalink:"/docs/liveview-socket/liveviewsocket-api-context"}},d={},p=[{value:"LiveViewSocket Properties and Methods",id:"liveviewsocket-properties-and-methods",level:2},{value:"Related Parts of the API",id:"related-parts-of-the-api",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"liveviewsocket-api"},"LiveViewSocket API"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"LiveViewSocket")," API is the second most important API (behind the LiveView API itself). As you've seen, the\n",(0,i.kt)("inlineCode",{parentName:"p"},"LiveViewSocket")," is passed into (as the ",(0,i.kt)("inlineCode",{parentName:"p"},"socket")," param) just about all of the LiveView API methods (excluding ",(0,i.kt)("inlineCode",{parentName:"p"},"render"),").\nSo far we've mainly used it to update the context of the LiveView. But there is a lot more to ",(0,i.kt)("inlineCode",{parentName:"p"},"LiveViewSocket")," and in\nthis section we'll review the full API."),(0,i.kt)("h2",{id:"liveviewsocket-properties-and-methods"},"LiveViewSocket Properties and Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")," (property, read-only)"),(0,i.kt)("td",{parentName:"tr",align:null},"The (random) id of the LiveView")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connected")," (property, read-only)"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the websocket is connected. ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," if connected to a websocket, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," for http request")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"context")," (property, read-only)"),(0,i.kt)("td",{parentName:"tr",align:null},"The current context (i.e. state) of the LiveView")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"assign(context:Partial<TContext>):void;")),(0,i.kt)("td",{parentName:"tr",align:null},"Update the context (i.e. state) of the LiveView")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tempAssign(context:Partial<TContext>):void;")),(0,i.kt)("td",{parentName:"tr",align:null},"Marks any set properties as temporary and will be reset to the given value after the next render cycle. Typically used to ensure large but infrequently updated values are not kept in memory.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pageTitle(newPageTitle:string):void;")),(0,i.kt)("td",{parentName:"tr",align:null},"Updates the ",(0,i.kt)("inlineCode",{parentName:"td"},"<title>")," tag of the LiveView. Requires using the ",(0,i.kt)("inlineCode",{parentName:"td"},"live_title")," helper in rendering the page.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"putFlash(key: string, value: string): Promise<void>;")),(0,i.kt)("td",{parentName:"tr",align:null},"Add flash message to the socket for a given key and value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pushEvent(pushEvent: AnyLivePushEvent): void;")),(0,i.kt)("td",{parentName:"tr",align:null},"Pushes an event from the server to the client. Requires a client ",(0,i.kt)("inlineCode",{parentName:"td"},"Hook")," to be defined and to be listening for the event via ",(0,i.kt)("inlineCode",{parentName:"td"},"this.handleEvent")," callback.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pushPatch(path: string, params?: URLSearchParams, replaceHistory?: boolean): Promise<void>;")),(0,i.kt)("td",{parentName:"tr",align:null},"Updates the LiveView's browser URL with the given path and query parameters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pushRedirect(path: string, params?: URLSearchParams, replaceHistory?: boolean): Promise<void>;")),(0,i.kt)("td",{parentName:"tr",align:null},"Shutdowns the current LiveView and loads another LiveView in its place without reloading the whole page (i.e. making a full HTTP request). Can be used to remount the current LiveView if need be. Use ",(0,i.kt)("inlineCode",{parentName:"td"},"pushPatch")," to update the current LiveView without unloading and remounting.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sendInfo(info: Info<TInfos>): void;")),(0,i.kt)("td",{parentName:"tr",align:null},'Send an internal event (a.k.a "Info") to the LiveView\'s ',(0,i.kt)("inlineCode",{parentName:"td"},"handleInfo")," method")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"subscribe(topic: string): Promise<void>;")),(0,i.kt)("td",{parentName:"tr",align:null},"Subscribe to the given topic using pub/sub. Events published to this topic will be delivered to ",(0,i.kt)("inlineCode",{parentName:"td"},"handleInfo"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"repeat(fn: () => void, intervalMillis: number): void;")),(0,i.kt)("td",{parentName:"tr",align:null},"Runs the given function on the given interval until this LiveView is unloaded.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"allowUpload(name: string, options?: UploadConfigOptions): Promise<void>;")),(0,i.kt)("td",{parentName:"tr",align:null},"Allows file uploads for the given LiveView and configures the upload options (filetypes, size, etc).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cancelUpload(configName: string, ref: string): Promise<void>;")),(0,i.kt)("td",{parentName:"tr",align:null},"Cancels the file upload for a given UploadConfig by config name and file ref.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"consumeUploadedEntries<T>(configName: string,fn: (meta: ConsumeUploadedEntriesMeta, entry: UploadEntry) => Promise<T>):Promise<T[]>;")),(0,i.kt)("td",{parentName:"tr",align:null},'Consume the uploaded files for a given UploadConfig (by name). This should only be called after the form\'s "save" event has occurred which guarantees all the files for the upload have been fully uploaded.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"uploadedEntries(configName: string): Promise<{completed: UploadEntry[];inProgress: UploadEntry[];}>;")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns two sets of files that are being uploaded, those ",(0,i.kt)("inlineCode",{parentName:"td"},"completed")," and those ",(0,i.kt)("inlineCode",{parentName:"td"},"inProgress")," for a given UploadConfig (by name). Unlike ",(0,i.kt)("inlineCode",{parentName:"td"},"consumeUploadedEntries"),', this does not require the form\'s "save" event to have occurred and will not throw if any of the entries are not fully uploaded.')))),(0,i.kt)("h2",{id:"related-parts-of-the-api"},"Related Parts of the API"),(0,i.kt)("p",null,"We'll look at related parts of the ",(0,i.kt)("inlineCode",{parentName:"p"},"LiveViewSocket")," API over the next few sections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reading and Writing the Context"),(0,i.kt)("li",{parentName:"ul"},"Pushing Updates to the Client"),(0,i.kt)("li",{parentName:"ul"},"Server Events / Pub/Sub"),(0,i.kt)("li",{parentName:"ul"},"File Uploads"),(0,i.kt)("li",{parentName:"ul"},"Everything Else")))}m.isMDXComponent=!0}}]);