(self.webpackChunkdocs_datalbry_io=self.webpackChunkdocs_datalbry_io||[]).push([[55],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3862:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={},s={unversionedId:"Connectors/Atlassian Jira Cloud connector/OVERVIEW",id:"Connectors/Atlassian Jira Cloud connector/OVERVIEW",isDocsHomePage:!1,title:"Overview",description:"This document is giving you an overview of the DataLbry's Jira Cloud Connector for version 0.1.0-alpha.1643636787.",source:"@site/docs/Connectors/Atlassian Jira Cloud connector/OVERVIEW.mdx",sourceDirName:"Connectors/Atlassian Jira Cloud connector",slug:"/Connectors/Atlassian Jira Cloud connector/OVERVIEW",permalink:"/Connectors/Atlassian Jira Cloud connector/OVERVIEW",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/Connectors/Atlassian Confluence Cloud connector/OVERVIEW"},next:{title:"Overview",permalink:"/Connectors/JetBrains Space connector/OVERVIEW"}},l=[{value:"What is Jira Cloud ?",id:"what-is-jira-cloud-",children:[]},{value:"Obtaining Credentials",id:"obtaining-credentials",children:[]},{value:"Targeted Documents",id:"targeted-documents",children:[]},{value:"Additional Options",id:"additional-options",children:[{value:"Project Filter",id:"project-filter",children:[]}]}],c={toc:l};function u(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is giving you an overview of the DataLbry's Jira Cloud Connector for version ",(0,a.kt)("inlineCode",{parentName:"p"},"0.1.0-alpha.1643636787"),"."),(0,a.kt)("h2",{id:"what-is-jira-cloud-"},"What is Jira Cloud ?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.atlassian.com/software/jira"},"Jira Cloud")," is software to manage software development better by planning and tracking."),(0,a.kt)("h2",{id:"obtaining-credentials"},"Obtaining Credentials"),(0,a.kt)("p",null,"The following credentials are required to use the Jira Cloud Connector:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jira Cloud URL"),(0,a.kt)("li",{parentName:"ul"},"Jira Cloud username"),(0,a.kt)("li",{parentName:"ul"},"Jira Cloud personal access token (secret)")),(0,a.kt)("p",null,"Typically, the ",(0,a.kt)("strong",{parentName:"p"},"URL")," of a Jira Cloud instance looks like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<your-organization>.atlassian.net"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"username")," is simply your email address which you use to log into your Jira Cloud instance."),(0,a.kt)("p",null,"Lastly you will need a  ",(0,a.kt)("strong",{parentName:"p"},"personal access token"),". To obtain such a token you can simply follow ",(0,a.kt)("a",{parentName:"p",href:"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/"},"Atlassians offical\ndocumentation on how to do so")),(0,a.kt)("p",null,"We have captured the next steps in form of images for you too."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9485).Z}),"\n",(0,a.kt)("img",{src:n(5575).Z}),"\n",(0,a.kt)("img",{src:n(75).Z}),"\n",(0,a.kt)("img",{src:n(5094).Z}),"\n",(0,a.kt)("img",{src:n(7203).Z})),(0,a.kt)("h2",{id:"targeted-documents"},"Targeted Documents"),(0,a.kt)("p",null,"The following documents are provided by the connector with detailed information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Board"),(0,a.kt)("li",{parentName:"ul"},"Board configurations"),(0,a.kt)("li",{parentName:"ul"},"Issues in a board"),(0,a.kt)("li",{parentName:"ul"},"Projects"),(0,a.kt)("li",{parentName:"ul"},"Quickfilters of a board"),(0,a.kt)("li",{parentName:"ul"},"Reports of a board"),(0,a.kt)("li",{parentName:"ul"},"Versions/Releases")),(0,a.kt)("h2",{id:"additional-options"},"Additional Options"),(0,a.kt)("h3",{id:"project-filter"},"Project Filter"),(0,a.kt)("p",null,"There is an ",(0,a.kt)("strong",{parentName:"p"},"Allow Filter")," and ",(0,a.kt)("strong",{parentName:"p"},"Deny Filter")," for projects. The ",(0,a.kt)("em",{parentName:"p"},"Allow Filter")," lets only pass project boards\nwhich you configured and accordingly the ",(0,a.kt)("em",{parentName:"p"},"Deny Filter")," does not let the project boards pass which you configured."),(0,a.kt)("p",null,"To use these filters you have to provide the ",(0,a.kt)("em",{parentName:"p"},"Project key"),". In the following picture you see some projects in our\nJira Cloud instance. The ",(0,a.kt)("em",{parentName:"p"},"Project keys")," - surrounded by the red box - in this example are ",(0,a.kt)("inlineCode",{parentName:"p"},"TEST")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TESTKANBAN"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4664).Z,title:"Project Key Example"})),(0,a.kt)("p",null,"If you provide this ",(0,a.kt)("em",{parentName:"p"},"Project key")," in the ",(0,a.kt)("em",{parentName:"p"},"Allow Filter")," then this project board will be in the final document set.\nIf it is set in the ",(0,a.kt)("em",{parentName:"p"},"Deny Filter")," on the other hand it will be filtered out and therefore not be present in the\nfinal document set. If the ",(0,a.kt)("em",{parentName:"p"},"Project key")," is in both filters it will always be filtered out. This goes for all documents\nderived by the project board too."))}u.isMDXComponent=!0},9485:function(e,t,n){"use strict";t.Z=n.p+"assets/images/API_TOKEN_00-e32319deca977a2639a0334b383e5c7e.png"},5575:function(e,t,n){"use strict";t.Z=n.p+"assets/images/API_TOKEN_01-edf85b127b553c2bec9217059e3b6157.png"},75:function(e,t,n){"use strict";t.Z=n.p+"assets/images/API_TOKEN_02-9ed1714190de0a07aedaa5854684937f.png"},5094:function(e,t,n){"use strict";t.Z=n.p+"assets/images/API_TOKEN_03-646710a45c4f6a98b85971451c254e09.png"},7203:function(e,t,n){"use strict";t.Z=n.p+"assets/images/API_TOKEN_04-cf2bfd78c51dc98c9b5bb3397a0a63c2.png"},4664:function(e,t,n){"use strict";t.Z=n.p+"assets/images/PROJECT_KEY-3e2ebb31bf662a185a00045691680f20.png"}}]);