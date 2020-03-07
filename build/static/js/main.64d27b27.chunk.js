(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{3:function(e){e.exports=JSON.parse('{"information":{"name":"Anthony","lastname":"Tapia Cossio","email":"ptonyptc@gmail.com","title":"Remote Web Developer","subTitle":"Full-Stack","phone":"(+51) 958-990-875","location":"Arequipa, Peru","facebook":"https://www.facebook.com/anthonytapiac","twitter":"https://twitter.com/ptonypTC","linkedin":"https://www.linkedin.com/in/anthony-tapia-cossio/","github":"https://github.com/AnthonyTC89"},"aboutMe":{"fullText":"I\'m available. I\'m looking for a remote job like a web developer. I have a lot of experience programming especially on back-end. I like new challenges, everything could be achieved step by step. I want to help people to make their live or business easier.","techSkills":["HTML","CSS","Bootstrap","JavaScript","Webpack","React","Redux","Jest","Express","NodeJS","MongoDB","Ruby","RoR","RailsAPI","Rspec","SQL","MySql","PostgreSQL"]},"experience":[{"date":"July 2011 - June 2012","company":"BanTotal","position":"Software Developer","goals":"Build functions according to new requirements."},{"date":"May 2016 - December 2018","company":"Andean University Nestor Caceres Velasquez","position":"Software Developer","goals":"Get, process, manage and report information."}],"projects":[{"title":"Events","description":"Mobile App, Schedule events","live":"https://react-rails-events.herokuapp.com/","source":"https://github.com/AnthonyTC89/react-rails-events","screenshots":["https://raw.githubusercontent.com/AnthonyTC89/react-rails-events/develop/screenshots/01.png","https://raw.githubusercontent.com/AnthonyTC89/react-rails-events/develop/screenshots/02.png"],"pinned":true},{"title":"Odonto App","description":"Web aplication where is showed the teeth and is possible to select each teeth to know the description of each face.","live":"https://raw.githack.com/AnthonyTC89/odonto_app_uap/develop/index.html","source":"https://github.com/AnthonyTC89/odonto_app_uap","screenshots":["https://raw.githubusercontent.com/AnthonyTC89/odonto_app_uap/develop/screenshots/01.png","https://raw.githubusercontent.com/AnthonyTC89/odonto_app_uap/develop/screenshots/02.png"],"pinned":true},{"title":"Calculator","description":"Calculator made on React","live":"https://develop.d1mt0f332rdrd4.amplifyapp.com/","source":"https://github.com/AnthonyTC89/react_calculator","screenshots":["https://raw.githubusercontent.com/AnthonyTC89/react_calculator/develop/screenshots/01.png","https://raw.githubusercontent.com/AnthonyTC89/react_calculator/develop/screenshots/02.png"],"pinned":true}],"education":[{"date":"Abril 2007 - December 2012","institution":"Santa Maria Catholic University","grade":"Bachelor Systems Engineering","goals":"Programming. Algorithms. Data Structures."},{"date":"July 2019 - Current","institution":"Microverse","grade":"Web Developer","goals":"Full-Stack Development"}]}')},43:function(e,t,a){e.exports=a.p+"static/media/imageProfile.263a3fdb.png"},48:function(e,t,a){e.exports=a(89)},60:function(e,t,a){},79:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),i=a(44),l=a(20),s=a(46),u=a(24),m={isLoggedIn:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{isLoggedIn:!0};case"LOGOUT":return{isLoggedIn:!1};default:return e}},h=Object(u.b)({session:p}),d=Object(u.c)(h),f=(a(28),a(57),a(60),function(){return c.a.createElement("nav",{className:"navbar fixed-top navbar-expand-sm navbar-light"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},c.a.createElement("div",{className:"navbar-nav"},c.a.createElement("a",{className:"nav-item nav-link",href:"#AboutMe"},"About me"),c.a.createElement("a",{className:"nav-item nav-link",href:"#Experience"},"Experience"),c.a.createElement("a",{className:"nav-item nav-link",href:"#Projects"},"Projects"),c.a.createElement("a",{className:"nav-item nav-link",href:"#Education"},"Education"))),c.a.createElement("a",{className:"navbar-brand",href:"#Profile"},"Anthony"))}),v=a(6),g=a.n(v),b=a(15),E=a(9),k=a(10),y=a(12),N=a(11),w=a(13),j=a(16),O=a.n(j),x=a(43),C=a.n(x),S=a(3),A=(a(79),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).state=S.information,a}return Object(w.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(b.a)(g.a.mark((function e(){var t=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("api/information",{withCredentials:!0}).then((function(e){t.setState(e.data[0])})).catch((function(){t.setState(S.information)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,a=e.lastname,n=e.email,r=e.title,o=e.phone,i=e.location,l=e.facebook,s=e.twitter,u=e.linkedin,m=e.github,p="mailto: ".concat(n),h="".concat(t," ").concat(a);return c.a.createElement("section",{id:"Profile",className:"container"},c.a.createElement("div",{className:"row row-profile"},c.a.createElement("div",{className:"col-12 col-sm-6"},c.a.createElement("div",{className:"info-profile"},c.a.createElement("img",{src:C.a,className:"img-profile",alt:"img-profile"}),c.a.createElement("h2",null,h),c.a.createElement("h5",null,r))),c.a.createElement("div",{className:"col-12 col-sm-6 col-info"},c.a.createElement("div",{className:"info-profile"},c.a.createElement("img",{src:"https://img.icons8.com/wired/64/000000/email.png",alt:"icon-email",className:"icon-profile"}),c.a.createElement("span",null,c.a.createElement("a",{className:"link-email",href:p},n))),c.a.createElement("div",{className:"info-profile"},c.a.createElement("img",{src:"https://img.icons8.com/material-sharp/48/000000/phone-not-being-used.png",alt:"icon-phone",className:"icon-profile"}),c.a.createElement("span",null,o)),c.a.createElement("div",{className:"info-profile"},c.a.createElement("img",{src:"https://img.icons8.com/material/48/000000/worldwide-location--v1.png",alt:"icon-location",className:"icon-profile"}),c.a.createElement("span",null,i)),c.a.createElement("div",{className:"info-profile"},c.a.createElement("a",{href:l},c.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/facebook.png",className:"icon-social",alt:"icon-facebook"})),c.a.createElement("a",{href:s},c.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/twitter.png",className:"icon-social",alt:"icon-twitter"})),c.a.createElement("a",{href:u},c.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/linkedin.png",className:"icon-social",alt:"icon-linkedin"})),c.a.createElement("a",{href:m},c.a.createElement("img",{src:"https://img.icons8.com/material-sharp/48/000000/github.png",className:"icon-social",alt:"icon-github"}))))))}}]),t}(c.a.Component)),D=a(17),M=a.n(D),T=(a(29),a(82),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).state={fullText:S.aboutMe.fullText,techSkills:S.aboutMe.techSkills},a}return Object(w.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(b.a)(g.a.mark((function e(){var t=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("api/aboutMe",{withCredentials:!0}).then((function(e){t.setState(e.data[0])})).catch((function(){t.setState({fullText:S.aboutMe.fullText,techSkills:S.aboutMe.techSkills})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.fullText,a=e.techSkills;return c.a.createElement("section",{id:"AboutMe",className:"container"},c.a.createElement("h2",{className:"header-aboutMe"},"About Me"),c.a.createElement("div",{className:"row-about-me"},c.a.createElement("span",null,t),c.a.createElement("ul",null,a.map((function(e){return c.a.createElement("li",{key:M()()},c.a.createElement("span",null,e))})))))}}]),t}(c.a.Component)),I=(a(83),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).state={experience:S.experience},a}return Object(w.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(b.a)(g.a.mark((function e(){var t=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("api/experience",{withCredentials:!0}).then((function(e){t.setState({experience:e.data})})).catch((function(){t.setState({experience:S.experience})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.experience;return c.a.createElement("section",{id:"Experience",className:"container"},c.a.createElement("h2",{className:"header-experience"},"Work Experience"),c.a.createElement("div",{className:"row row-experience"},e.map((function(e){return c.a.createElement("article",{key:M()(),className:"col-12 col-sm-6 experience"},c.a.createElement("h6",null,e.date),c.a.createElement("div",{className:"company"},c.a.createElement("h4",null,e.company)),c.a.createElement("strong",null,e.position),c.a.createElement("p",null,e.goals))}))))}}]),t}(c.a.Component)),_=a(19),P=a(92),J=a(91),L=(a(84),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).state={currentImage:0},a.handleClick=a.handleClick.bind(Object(_.a)(a)),a.handleKeyUp=a.handleKeyUp.bind(Object(_.a)(a)),a}return Object(w.a)(t,e),Object(k.a)(t,[{key:"changeImage",value:function(){var e=this.state.currentImage;this.setState({currentImage:1===e?0:1})}},{key:"handleKeyUp",value:function(e){37!==e.keyCode&&39!==e.keyCode||this.changeImage()}},{key:"handleClick",value:function(){this.changeImage()}},{key:"render",value:function(){var e=this.state.currentImage,t=this.props.images;return c.a.createElement(P.a,{className:"slide-container",onClick:this.handleClick},c.a.createElement(J.a,{key:M()(),timeout:1e3,classNames:"slide"},c.a.createElement("img",{className:"img-slide",src:t[e],alt:"img-screnshot"})))}}]),t}(c.a.Component)),R=(a(85),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).state={projects:S.projects},a}return Object(w.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(b.a)(g.a.mark((function e(){var t=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("api/projects",{withCredentials:!0}).then((function(e){t.setState(e.data)})).catch((function(){t.setState({projects:S.projects})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.projects;return c.a.createElement("section",{id:"Projects",className:"container"},c.a.createElement("h2",{className:"header-projects"},"Projects"),e.map((function(e){return e.pinned?c.a.createElement("article",{key:M()(),className:"row row-project"},c.a.createElement("div",{className:"col-12 col-sm-6"},c.a.createElement(L,{images:e.screenshots})),c.a.createElement("div",{className:"col-12 col-sm-6 info-project"},c.a.createElement("h3",null,e.title),c.a.createElement("p",null,e.description),c.a.createElement("div",null,c.a.createElement("a",{className:"link",href:e.live,target:"_blank",rel:"noopener noreferrer"},"Live Demo"),c.a.createElement("a",{className:"link",href:e.source,target:"_blank",rel:"noopener noreferrer"},"Source")))):null})))}}]),t}(c.a.Component)),B=(a(86),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(y.a)(this,Object(N.a)(t).call(this,e))).state={education:S.education},a}return Object(w.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(b.a)(g.a.mark((function e(){var t=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("api/education",{withCredentials:!0}).then((function(e){t.setState({education:e.data})})).catch((function(){t.setState({education:S.education})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.education;return c.a.createElement("section",{id:"Education",className:"container"},c.a.createElement("h2",{className:"header-education"},"Education"),c.a.createElement("div",{className:"row row-education"},e.map((function(e){return c.a.createElement("article",{key:M()(),className:"col-12 col-sm-6 education"},c.a.createElement("h6",null,e.date),c.a.createElement("div",{className:"institution"},c.a.createElement("h4",null,e.institution)),c.a.createElement("strong",null,e.grade),c.a.createElement("p",null,e.goals))}))))}}]),t}(c.a.Component)),U=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement(f,null)),c.a.createElement("main",null,c.a.createElement(A,null),c.a.createElement(T,null),c.a.createElement(I,null),c.a.createElement(R,null),c.a.createElement(B,null)))},W=function(){return c.a.createElement(s.a,{store:d},c.a.createElement(i.a,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",component:U}))))};a(88);o.a.render(c.a.createElement(W,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.64d27b27.chunk.js.map