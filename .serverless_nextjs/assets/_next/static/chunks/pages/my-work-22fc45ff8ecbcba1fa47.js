_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{ngaV:function(t,a,e){"use strict";e.r(a);var n=e("o0o1"),o=e.n(n),r=e("HaE+"),i=e("1OyB"),c=e("vuIU"),s=e("Ji7U"),l=e("md7G"),u=e("foSv"),p=e("q1tI"),f=e.n(p),h=e("Qog0"),m=e("J+EQ"),d=f.a.createElement;function g(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=Object(u.a)(t);if(a){var o=Object(u.a)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Object(l.a)(this,e)}}var y=function(t){Object(s.a)(e,t);var a=g(e);function e(){return Object(i.a)(this,e),a.call(this)}return Object(c.a)(e,[{key:"render",value:function(){return d("a",{className:"img",href:this.props.link?this.props.link:this.props.src},d("img",{src:this.props.src,alt:this.props.alt}),d("p",null,this.props.alt))}}]),e}(f.a.Component),b=f.a.createElement;function k(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=Object(u.a)(t);if(a){var o=Object(u.a)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Object(l.a)(this,e)}}var v=function(t){Object(s.a)(e,t);var a=k(e);function e(){return Object(i.a)(this,e),a.call(this)}return Object(c.a)(e,[{key:"render",value:function(){for(var t=[],a=0;a<this.props.imgs.length;a++)t.push(b(y,{src:this.props.imgs[a].src,alt:this.props.imgs[a].alt,link:this.props.imgs[a].link,key:a}));return b("div",{className:"img-galary ".concat(3==this.props.collumns?"x3":"x2")},t)}}]),e}(f.a.Component),w=e("oFhU"),W=e("hYtW"),M=e("vbBv"),R=e("9ixD"),O=f.a.createElement;function P(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=Object(u.a)(t);if(a){var o=Object(u.a)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Object(l.a)(this,e)}}var T=function(t){Object(s.a)(e,t);var a=P(e);function e(){return Object(i.a)(this,e),a.apply(this,arguments)}return Object(c.a)(e,[{key:"componentDidMount",value:function(){w.a.pageView()}},{key:"render",value:function(){return O(h.a,{initialQuote:this.props.initialQuote},O(R.a,{title:"My Work - The Personal Blog of Curtis Ward",description:"Curtis Ward is a software engineer and student at West Virginia University"}),O("div",{className:"page-wrapper "},O(m.a,{post_directory:this.props.directory},O("main",{className:"showcase"},O("h1",{className:"title"},"My Work"),O("p",null,"Hello! My name is Curtis Ward. I've been developing software and hacking on projects since 2009. I'm passionate about building tools that connect people. The following are a breif example of websites and projects I have worked on over time, more information is avaible in ",O("a",{href:"https://docs.google.com/document/d/1vhwH7axBRgfhWjD5VN-RhfLr2CxDIAPINlk-V9Kmfs0/edit?usp=sharing"},"my full resume.")),O("article",null,O("h2",{className:"sub-title"},"Jade"),O("p",null,O("a",{href:"https://jadeapp.live/"},"Jade")," is a real time location based chat app for college students available for IOS and Android."),O(v,{collumns:3,imgs:[{src:"".concat(M.a,"/MyWork/Jade/MapThumb.png"),link:"".concat(M.a,"/MyWork/Jade/Map.png"),alt:"Map showing all active chatrooms in your area."},{src:"".concat(M.a,"/MyWork/Jade/TopicThumb.png"),link:"".concat(M.a,"/MyWork/Jade/Topic.png"),alt:"Community chatrooms for a topic."},{src:"".concat(M.a,"/MyWork/Jade/FeedThumb.png"),link:"".concat(M.a,"/MyWork/Jade/Feed.png"),alt:"User feed of active chatrooms."}]})),O("article",null,O("h2",{className:"sub-title"},"PRT Scanner"),O("p",null,O("a",{href:"https://prtscanner.com/"},"PRTScanner.com")," is a website that shows the current status and statistics of the ",O("a",{href:"https://en.wikipedia.org/wiki/Morgantown_Personal_Rapid_Transit"},"WVU PRT")," while also notifying users of outages."),O(v,{collumns:2,imgs:[{src:"".concat(M.a,"/MyWork/PRTScanner/HomeLaptopThumb.png"),link:"".concat(M.a,"/MyWork/PRTScanner/HomeLaptop.png"),alt:"Home page showing uptime and graphs for all stations."},{src:"".concat(M.a,"/MyWork/PRTScanner/StationLaptopThumb.png"),link:"".concat(M.a,"/MyWork/PRTScanner/StationLaptop.png"),alt:"Station page showing statistics for a single station."}]})),O("article",null,O("h2",{className:"sub-title"},"Favii"),O("p",null,"Favii was an interest based social media site. Over a period of 1-2 years I built everything about Favii from the ground up including all graphic design and front end work."),O(v,{imgs:[{src:"".concat(M.a,"/MyWork/Favii/FeedThumb.png"),link:"".concat(M.a,"/MyWork/Favii/Feed.png"),alt:"Feed page showing posts from users."},{src:"".concat(M.a,"/MyWork/Favii/InterestThumb.png"),link:"".concat(M.a,"/MyWork/Favii/Interest.png"),alt:"Interest page for a community on the site."}]})),O("article",null,O("h2",{className:"sub-title"},"Proof Giant"),O("p",null,"Proof Giant was a SAAS platform for marketers to automatically watermark their work and get client feedback on them safely, without the need for long email chains."),O(v,{imgs:[{src:"".concat(M.a,"/MyWork/ProofGiant/LandingPageThumb.png"),link:"".concat(M.a,"/MyWork/ProofGiant/LandingPage.png"),alt:"Landing page with a call to action."},{src:"".concat(M.a,"/MyWork/ProofGiant/DashboardThumb.png"),link:"".concat(M.a,"/MyWork/ProofGiant/Dashboard.png"),alt:"User feedback in the dashboard."}]})),O("article",null,O("h2",{className:"sub-title"},"Stonebox Studios"),O("p",null,"Stonebox Studios was a small company I started at 16 to do local contract web design work."),O(v,{imgs:[{src:"".concat(M.a,"/MyWork/Stonebox/FamilyRentalThumb.png"),link:"".concat(M.a,"/MyWork/Stonebox/FamilyRental.png"),alt:"Online storefront of equipment availible for rental."},{src:"".concat(M.a,"/MyWork/Stonebox/AutoUnlockThumb.png"),link:"".concat(M.a,"/MyWork/Stonebox/AutoUnlock.png"),alt:"Landing page for a local locksmith."}]})),O("a",{href:"https://drive.google.com/file/d/16lBRLFPu2UFYN17_O1qmniHT_ArbR9zW/view?usp=sharing"},O("button",{className:"cta"},"View my full resume"))),O("div",{className:"float-clear"}))))}}],[{key:"getInitialProps",value:function(){var t=Object(r.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.a.getAllPosts();case 2:return a=t.sent,t.abrupt("return",{initialQuote:Math.random(),directory:a});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),e}(f.a.Component);a.default=T},qbFn:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-work",function(){return e("ngaV")}])}},[["qbFn",0,2,1,3,4]]]);