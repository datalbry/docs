(self.webpackChunkdocs_datalbry_io=self.webpackChunkdocs_datalbry_io||[]).push([[404],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5045:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={},s={unversionedId:"Connectors/JetBrains Space/OVERVIEW",id:"Connectors/JetBrains Space/OVERVIEW",isDocsHomePage:!1,title:"Overview",description:"This document is giving you an overview of the DataLbry's JetBrains Space Connector for version 0.0.1.",source:"@site/docs/Connectors/JetBrains Space/OVERVIEW.mdx",sourceDirName:"Connectors/JetBrains Space",slug:"/Connectors/JetBrains Space/OVERVIEW",permalink:"/Connectors/JetBrains Space/OVERVIEW",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/Connectors/GitHub/OVERVIEW"},next:{title:"Concepts",permalink:"/Integrations/Connector-SDK/CONCEPT"}},l=[{value:"What is JetBrains Space?",id:"what-is-jetbrains-space",children:[]},{value:"Obtaining Credentials",id:"obtaining-credentials",children:[]},{value:"Targeted Documents",id:"targeted-documents",children:[]},{value:"Additional Options",id:"additional-options",children:[{value:"Project Filter",id:"project-filter",children:[]}]}],c={toc:l};function p(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document is giving you an overview of the DataLbry's JetBrains Space Connector for version ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.1"),"."),(0,i.kt)("h2",{id:"what-is-jetbrains-space"},"What is JetBrains Space?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/space/"},"JetBrains Space")," is an all-in-one solution for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"building and delivering software"),(0,i.kt)("li",{parentName:"ul"},"collaboration and communication"),(0,i.kt)("li",{parentName:"ul"},"team management"),(0,i.kt)("li",{parentName:"ul"},"project management")),(0,i.kt)("h2",{id:"obtaining-credentials"},"Obtaining Credentials"),(0,i.kt)("p",null,"To be able to use this connector you need the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Client ID"),(0,i.kt)("li",{parentName:"ol"},"Client Secret"),(0,i.kt)("li",{parentName:"ol"},"JetBrains Space URL")),(0,i.kt)("p",null,"A JetBrains Space URL looks like the following: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<your-organization>.jetbrains.space"),". Where you set the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"<your-organization>")," upon creating the JetBrains Space instance. For example here at DataLbry we would use ",(0,i.kt)("inlineCode",{parentName:"p"},"https://datalbry.jetbrains.space")),(0,i.kt)("p",null,"To obtain the Client ID and Client Secret you need to have an existing JetBrains Space instance. Then you can head over to ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/space/client-credentials.html#basics"},"JetBrains' official documentation on how to obtain the credentials"),". Thereafter you will have an Application setup in your JetBrains Space instance. Additionally you need to give this application all Read/View permissions. "),(0,i.kt)("h2",{id:"targeted-documents"},"Targeted Documents"),(0,i.kt)("p",null,"The following documents are provided by the connector with detailed information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Absences"),(0,i.kt)("li",{parentName:"ul"},"Blogs"),(0,i.kt)("li",{parentName:"ul"},"Profiles"),(0,i.kt)("li",{parentName:"ul"},"Projects"),(0,i.kt)("li",{parentName:"ul"},"Issues"),(0,i.kt)("li",{parentName:"ul"},"Checklists"),(0,i.kt)("li",{parentName:"ul"},"Repositories"),(0,i.kt)("li",{parentName:"ul"},"CodeReviews")),(0,i.kt)("h2",{id:"additional-options"},"Additional Options"),(0,i.kt)("h3",{id:"project-filter"},"Project Filter"),(0,i.kt)("p",null,"Filtering for projects can be achieved in two ways. Either by using an ",(0,i.kt)("strong",{parentName:"p"},"Allow\nFilter")," or an ",(0,i.kt)("strong",{parentName:"p"},"Deny Filter"),". To use any filter you hae to provide ",(0,i.kt)("strong",{parentName:"p"},"Project\nKeys"),". "),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Allow Filter")," allows the connector to process only the Projects you specified.\nThe ",(0,i.kt)("em",{parentName:"p"},"Deny Filter")," denies the connector to process Projects you specified."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If a project is in both filters, then the connector will be denied processing it."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The filter affect also documents that are part of a project. For example: If\nyou deny the connector processing a project, then it's issues will not be\nprocessed either. This is because an issue if part of a project."))),(0,i.kt)("p",null,"To use these filters you have to provide the ",(0,i.kt)("em",{parentName:"p"},"Project key"),". In the following picture you see a test project in our\nJetBrains Space instance. The ",(0,i.kt)("em",{parentName:"p"},"Project key")," - surrounded by the red box - in this example is ",(0,i.kt)("inlineCode",{parentName:"p"},"TEST-PROJECT"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6414).Z,title:"Project Key Example"})))}p.isMDXComponent=!0},6414:function(e,t,n){"use strict";t.Z=n.p+"assets/images/project-key-42313e49f4d2ff124def9f309278542a.png"}}]);