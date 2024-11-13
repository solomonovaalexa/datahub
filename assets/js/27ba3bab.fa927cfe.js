"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[10011],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),g=r,c=d["".concat(l,".").concat(g)]||d[g]||m[g]||i;return a?n.createElement(c,o(o({ref:t},p),{},{components:a})):n.createElement(c,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},13906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>u,toc:()=>d});a(96540);var n=a(15680);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"v0.3.6",slug:"/managed-datahub/release-notes/v_0_3_6",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_3_6.md"},l="v0.3.6",u={unversionedId:"docs/managed-datahub/release-notes/v_0_3_6",id:"docs/managed-datahub/release-notes/v_0_3_6",title:"v0.3.6",description:"---",source:"@site/genDocs/docs/managed-datahub/release-notes/v_0_3_6.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_3_6",permalink:"/docs/managed-datahub/release-notes/v_0_3_6",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_3_6.md",tags:[],version:"current",frontMatter:{title:"v0.3.6",slug:"/managed-datahub/release-notes/v_0_3_6",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_3_6.md"},sidebar:"overviewSidebar",previous:{title:"v0.3.7",permalink:"/docs/managed-datahub/release-notes/v_0_3_7"},next:{title:"v0.3.5",permalink:"/docs/managed-datahub/release-notes/v_0_3_5"}},p={},d=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Recommended CLI/SDK",id:"recommended-clisdk",level:2},{value:"Release Changelog",id:"release-changelog",level:2}],m={toc:d},g="wrapper";function c(e){var{components:t}=e,a=o(e,["components"]);return(0,n.yg)(g,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"v036"},"v0.3.6"),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,n.yg)("p",null,"08-Oct-2024"),(0,n.yg)("h2",{id:"recommended-clisdk"},"Recommended CLI/SDK"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"v0.14.1.1")," with release notes at ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/releases/tag/v0.14.1"},"https://github.com/datahub-project/datahub/releases/tag/v0.14.1"))),(0,n.yg)("p",null,"If you are using an older CLI/SDK version, then please upgrade it. This applies for all CLI/SDK usages, if you are using it through your terminal, GitHub Actions, Airflow, in Python SDK somewhere, Java SDK, etc. This is a strong recommendation to upgrade, as we keep on pushing fixes in the CLI, and it helps us support you better."),(0,n.yg)("h2",{id:"release-changelog"},"Release Changelog"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"All changes in ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/releases/tag/v0.14.1"},"https://github.com/datahub-project/datahub/releases/tag/v0.14.1")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Note Breaking Changes: ",(0,n.yg)("a",{parentName:"li",href:"https://datahubproject.io/docs/how/updating-datahub/#0141"},"https://datahubproject.io/docs/how/updating-datahub/#0141")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Breaking Changes"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Automatic downgrade to a previous release is not supported. Please reach out to support if required."),(0,n.yg)("li",{parentName:"ul"},"Metadata tests that are created/edited will not automatically run on a small batch (less than 10,000 assets) immediately anymore, but instead will rely on the scheduled run. Scheduled runs and metadata tests running on asset changes are unimpacted. This bug is fixed in 0.3.6.1."),(0,n.yg)("li",{parentName:"ul"},"Rest API Authorization enabled by default"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Bug Fixes"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"No longer push notifications for soft-deleted entities"),(0,n.yg)("li",{parentName:"ul"},"Fixed a bug in the share modal where sharing was disabled even if instances to share were selected"),(0,n.yg)("li",{parentName:"ul"},"Correctly show the lineage count of upstreams and downstreams when there are large numbers"),(0,n.yg)("li",{parentName:"ul"},"Combine sibling entities in all search lists throughout the app, and not just the main search page"),(0,n.yg)("li",{parentName:"ul"},"Fix view select for Impact Analysis Tab"),(0,n.yg)("li",{parentName:"ul"},'Remove "Remove from Domain", "Remove from Data Product", and "Remove from Glossary" buttons when adding assets to domains, data products, and glossary'),(0,n.yg)("li",{parentName:"ul"},"Add 'explore all' button below all autocomplete results"),(0,n.yg)("li",{parentName:"ul"},"Remove Ctrl-K as a mechanism to invoke the search bar on Mac (Command K only)"),(0,n.yg)("li",{parentName:"ul"},"Adding Nullable tag back to V2 UI Columns tab."),(0,n.yg)("li",{parentName:"ul"},"Remove Resources section on Homepage"),(0,n.yg)("li",{parentName:"ul"},"Use Browse Path instead of Container Path for rendering the context paths for assets across Search, Entity Profile, and more."),(0,n.yg)("li",{parentName:"ul"},"Minor fixes with Snowflake Tag Sync automation to prevent rate limiting on removals of tags that do not yet exist in Snowflake"),(0,n.yg)("li",{parentName:"ul"},"Minor improvements to the Home Page Settings experience (Settings > Home Page)"),(0,n.yg)("li",{parentName:"ul"},"Show the number of assets ingested when ingestion succeeds with warnings"),(0,n.yg)("li",{parentName:"ul"},"Fetch more than 20 related proposals for an asset when rendering profile page (Glossary term, Tag proposals)"),(0,n.yg)("li",{parentName:"ul"},"Add 'ALTER TABLE' expression to BigQuery Audit Log based Freshness Assertion"),(0,n.yg)("li",{parentName:"ul"},"Hide the 'For You' section on the home page if there is no applicable content"),(0,n.yg)("li",{parentName:"ul"},"Fixed mouse interactions with graphs on statistics pages"),(0,n.yg)("li",{parentName:"ul"},"Fixed rare issues with lineage visualization node positioning and edge drawing"),(0,n.yg)("li",{parentName:"ul"},"Fixed bug with changing advanced search filter condition"),(0,n.yg)("li",{parentName:"ul"},'Hide "Remove from ',"[",'X]" buttons when adding assets to domains, data products, and glossary terms'),(0,n.yg)("li",{parentName:"ul"},"Change lineage sidebar summaries to use the default lineage time range"),(0,n.yg)("li",{parentName:"ul"},"Impact analysis and data product assets pages properly show results based on the currently selected view"),(0,n.yg)("li",{parentName:"ul"},"The New Users section in the Analytics page now tracks actual new users instead of last login"),(0,n.yg)("li",{parentName:"ul"},"Data Contracts builder now shows custom assertions as expected"),(0,n.yg)("li",{parentName:"ul"},'"View in Platform" buttons link location fixed '),(0,n.yg)("li",{parentName:"ul"},"Compact search cards unnecessary title truncation fixed "),(0,n.yg)("li",{parentName:"ul"},"Domain contents summary updates after domain is changed, without refresh "),(0,n.yg)("li",{parentName:"ul"},"Incidents tab updates after an incident is created, updated, or resolved, without refresh "),(0,n.yg)("li",{parentName:"ul"},"On lineage visualization, fix lineage expansion through transformation nodes while hiding transformations "),(0,n.yg)("li",{parentName:"ul"},"On lineage visualization, fix positioning of query nodes on lineage expansion "),(0,n.yg)("li",{parentName:"ul"},"On lineage visualization, cycles in graphs should no longer result in disappearing edges "),(0,n.yg)("li",{parentName:"ul"},"Remote executor cleans up temporary files to avoid disk memory leak"),(0,n.yg)("li",{parentName:"ul"},"Fixed hover cards when using Compact Card View"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Product changes"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Show total (nested) asset count on home page Domain cards"),(0,n.yg)("li",{parentName:"ul"},"Add the ability to copy an urn from the ML Model asset profile page"),(0,n.yg)("li",{parentName:"ul"},"Added the ",(0,n.yg)("inlineCode",{parentName:"li"},"deleteStructuredProperty")," GraphQL API to delete structured properties"),(0,n.yg)("li",{parentName:"ul"},'Improved "matched" section on search cards to let users know if a column is matched by a search term'),(0,n.yg)("li",{parentName:"ul"},'The "Documentation" button under the "Govern" dropdown has been rebranded to the "Compliance Forms" button to more accurately reflect this feature.'),(0,n.yg)("li",{parentName:"ul"},"On the Compliance Forms page, we now show you an overview of your organization's forms created to help govern your data assets. Here, you'll be able to manage all of your forms from the UI. The previous content of this page still exists under the \"Analytics\" tab."),(0,n.yg)("li",{parentName:"ul"},"We have several new question types available for forms - questions to collect documentation, ownership, domains, and glossary terms."),(0,n.yg)("li",{parentName:"ul"},"You can also now submit a response on up to 10,000 assets in the bulk form submission screen even if you have more than 10,000 assets. You can always submit again once these answers are processed."),(0,n.yg)("li",{parentName:"ul"},"We now show the bulk form submission screen first when entering a form from the Task Center."),(0,n.yg)("li",{parentName:"ul"},"We added a search bar in the bulk form submission flow to allow users to search when selecting assets to submit a response for."),(0,n.yg)("li",{parentName:"ul"},"Support Generating AI summaries of Queries via the UI - Request this to be enabled your by Acryl representative."),(0,n.yg)("li",{parentName:"ul"},'Allow hiding "Pending Tasks" module on home page, allows horizontal expansion of content'),(0,n.yg)("li",{parentName:"ul"},'Moved "Pinned Links" up to the top of the home page as a separate category, from the left sidebar bottom (based on requests)'),(0,n.yg)("li",{parentName:"ul"},"Assertions page uplift! Redesigned Asset Assertions (Entity Profile > Quality) to include a new Summary tab as well as search, filtering, and grouping capabilities on the assertions list."),(0,n.yg)("li",{parentName:"ul"},"Add toggle in lineage visualization for showing soft-deleted and non-existent entities"),(0,n.yg)("li",{parentName:"ul"},'Add "Last Updated (in Source)" filter to search'),(0,n.yg)("li",{parentName:"ul"},'Add "View In ',"[",'Source]" button to lineage visualization sidebar'),(0,n.yg)("li",{parentName:"ul"},"Send test notification button will always be visible in the subscriptions side bar if the user has set their memberID"),(0,n.yg)("li",{parentName:"ul"},"On sibling combined entity page, viewing different schema versions no longer supported"),(0,n.yg)("li",{parentName:"ul"},"On sibling combined entity page, change history drawer reflects changes to both siblings"),(0,n.yg)("li",{parentName:"ul"},"On sibling combined entity sidebar, lineage summary is hidden to avoid confusion"),(0,n.yg)("li",{parentName:"ul"},'For siblings combined entity page or search / hover card, multiple "View in Platform" icons should appear if applicable '),(0,n.yg)("li",{parentName:"ul"},"Search cards configured to better handle smaller widths"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Ingestion changes")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Platform changes"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Python images based on ubuntu base image"),(0,n.yg)("li",{parentName:"ul"},"Postgres NPE fixed (upgraded ebean framework)"),(0,n.yg)("li",{parentName:"ul"},"Domains/Containers have additional conditions: ","[DESCENDANTS_INCL, ANCESTORS_INCL, RELATED_INCL]"),(0,n.yg)("li",{parentName:"ul"},"Removed legacy browsePathV2 GMS bootstrap job"),(0,n.yg)("li",{parentName:"ul"},"Graphql dataloaders are now lazy loaded"),(0,n.yg)("li",{parentName:"ul"},"Added fallback versioning strategy to aggregation query"),(0,n.yg)("li",{parentName:"ul"},"Authorization cache added per request"),(0,n.yg)("li",{parentName:"ul"},"API Throttling on Kafka lag extended to API for programmatic access"),(0,n.yg)("li",{parentName:"ul"},"New GraphQL API to create subscriptions on behalf of individual users. Simply provide a new optional 'userUrn' parameter to the ",(0,n.yg)("inlineCode",{parentName:"li"},"createSubscription")," mutation."),(0,n.yg)("li",{parentName:"ul"},"Several Timeline/Schema History bugs have been fixed which may impact version calculations in some scenarios"),(0,n.yg)("li",{parentName:"ul"},"OIDC callback does not update corpUserStatus if the user is already ACTIVE")))))}c.isMDXComponent=!0}}]);