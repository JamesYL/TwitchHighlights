(this.webpackJsonptwitchhighlights=this.webpackJsonptwitchhighlights||[]).push([[0],{404:function(e,t,n){"use strict";n.r(t);var a=n(31),r=n.n(a),c=n(64),i=n(439),s=n(444),o=n(19),l=n(1),u=n.n(l),d=n(438),b=n(21),j=n(128),h=n.n(j),p=n(104),f=n(464),m=n(462),v=n(4),x=function(e){var t=function(){e.setOpen(!1)};return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(f.a,Object(p.a)(Object(p.a)({open:e.open,autoHideDuration:5e3,onClose:t},e.snackbarProps),{},{children:Object(v.jsx)(m.a,Object(p.a)(Object(p.a)({elevation:6,variant:"filled",severity:"error"},e.alertProps),{},{onClose:t,children:e.message}))}))})},O=Object(i.a)((function(e){return{root:{border:"1px solid #696969",borderRadius:25,display:"flex",width:"100%",maxWidth:800,background:e.palette.background.paper},button:{marginLeft:"auto",marginTop:e.spacing(2),marginBottom:e.spacing(2)},input:{border:0,flex:1,marginLeft:20,outlineStyle:"none",boxShadow:"none",borderColor:"transparent","input::-ms-clear":{display:"none"},fontSize:"calc(0.75em + 1vmin)",background:e.palette.background.paper}}})),g=function(){var e=Object(b.f)(),t=O(),n=u.a.useState(!1),a=Object(o.a)(n,2),r=a[0],c=a[1],i=u.a.useState(""),s=Object(o.a)(i,2),l=s[0],j=s[1],p=function(){var t=parseInt(l);if(!t){var n=l.indexOf("videos/");if(n>=0){var a=l.slice(n+7),r=a.indexOf("/");t=r>=0?parseInt(a.slice(0,r)):parseInt(a)}}t?(e.push("/search/".concat(t)),e.go(0)):c(!0)};return Object(v.jsxs)("div",{className:t.root,children:[Object(v.jsx)("input",{className:t.input,type:"text",onChange:function(e){return j(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&p()},placeholder:"Analyze Vod: Enter twitch vod URL"}),Object(v.jsx)(d.a,{onClick:p,className:t.button,children:Object(v.jsx)(h.a,{})}),Object(v.jsx)(x,{message:"Vod id cannot be determined from the input",open:r,setOpen:c})]})},w=n(468),k=n(440),y=n(441),_=n(105),C=n(443),S=n(233),I=n.n(S),D=Object(i.a)((function(e){return{root:{border:"1px solid lightgrey",borderRadius:25,maxWidth:600,display:"flex",width:"100%",background:e.palette.background.paper},button:{marginLeft:"auto"},input:{border:0,flex:1,marginLeft:20,outlineStyle:"none",boxShadow:"none",borderColor:"transparent","input::-ms-clear":{display:"none"},fontSize:16,background:e.palette.background.paper}}})),N=function(){var e=Object(b.f)(),t=D(),n=u.a.useState(!1),a=Object(o.a)(n,2),r=a[0],c=a[1],i=u.a.useState(""),s=Object(o.a)(i,2),l=s[0],j=s[1],p=function(){var t=parseInt(l);if(!t){var n=l.indexOf("videos/");if(n>=0){var a=l.slice(n+7),r=a.indexOf("/");t=r>=0?parseInt(a.slice(0,r)):parseInt(a)}}t?(e.push("/search/".concat(t)),e.go(0)):c(!0)};return Object(v.jsxs)("div",{className:t.root,children:[Object(v.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&p()},placeholder:"Enter twitch vod URL",className:t.input}),Object(v.jsx)(d.a,{onClick:p,className:t.button,children:Object(v.jsx)(h.a,{})}),Object(v.jsx)(x,{message:"Vod id cannot be determined from the input",open:r,setOpen:c})]})},F=n(465),L="vods",z=function(){var e=window.localStorage.getItem(L);if(!e)return window.localStorage.setItem(L,JSON.stringify({})),{};try{return JSON.parse(e)}catch(t){return{}}},E=function(e){try{return window.localStorage.setItem(L,JSON.stringify(e)),""}catch(t){return console.log("test"),t.name}},R=function(e){var t=z();return t[e.vodID]=e,E(t)},P=function(e){var t=z();if(e in t)return t[e]},U=function(){return Object.keys(z()).length},B=n(442),T=Object(i.a)((function(e){var t;return Object(w.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:(t={fontFamily:"Alfa Slab One, cursive",color:"white"},Object(c.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(c.a)(t,"marginRight",e.spacing(2)),t),root:{flexGrow:1,backgroundColor:"transparent"},search:{marginTop:e.spacing(1),marginBottom:e.spacing(1),width:"100%"},appbar:function(e){return e.transparent?{background:"transparent"}:{}}})}));function V(e){var t=Object(b.f)(),n=T(e);return Object(v.jsx)("div",{className:n.root,children:Object(v.jsx)(k.a,{position:"static",className:n.appbar,elevation:0,children:Object(v.jsxs)(y.a,{children:[Object(v.jsx)(_.a,{className:n.title,variant:"h6",children:Object(v.jsx)(B.a,{href:"/",color:"inherit",variant:"inherit",children:"Streamalytics"})}),!e.disableSearch&&Object(v.jsx)("div",{className:n.search,children:Object(v.jsx)(N,{})}),Object(v.jsx)("div",{className:n.grow}),Object(v.jsx)(F.a,{title:"Saved vods","aria-label":"saved vods",children:Object(v.jsx)(d.a,{"aria-label":"show saved vod analytics",color:"inherit",onClick:function(){t.push("/bookmarks"),t.go(0)},children:Object(v.jsx)(C.a,{badgeContent:e.bookmarkNum?e.bookmarkNum:U(),color:"secondary",children:Object(v.jsx)(I.a,{})})})})]})})})}var A=Object(i.a)((function(e){var t;return{bar:{animation:"$comeDown 2000ms",position:"fixed",top:0,left:0,flexGrow:1,width:"100%",background:"transparent"},title:(t={fontFamily:"Alfa Slab One, cursive",color:"white"},Object(c.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(c.a)(t,"marginRight",e.spacing(2)),t),root:{display:"flex",flexDirection:"column",minHeight:200,height:"100vh",justifyContent:"center",overflow:"hidden",margin:0,padding:0,width:"100vw"},search:{width:"100%",justifyContent:"center",display:"flex",flexDirection:"row",animation:"$comeUp 2000ms"},"@keyframes comeUp":{"0%":{opacity:0,transform:"translateY(200%)"},"100%":{opacity:1,transform:"translateY(0)"}},"@keyframes comeDown":{"0%":{opacity:0,transform:"translateY(-200%)"},"100%":{opacity:1,transform:"translateY(0)"}},"@keyframes gradient":{"0%":{backgroundPosition:"0% 50%"},"50%":{backgroundPosition:"25% 50%"},"100%":{backgroundPosition:"0% 50%"}},background:{position:"fixed",width:"400%",height:"200%",background:"radial-gradient(circle, rgba(57,226,182,1) 8%, rgba(20,176,103,1) 24%, rgba(67,145,207,1) 40%, rgba(81,40,184,1) 54%, rgba(139,79,205,1) 68%, rgba(186,60,162,1) 80%, rgba(204,139,68,1) 93%)",top:"-150%",left:"-200%",zIndex:-8,transform:"rotateZ(-10deg)",backgroundPosition:"80%",backgroundSize:"400% 400%",animation:"$gradient 30s ease infinite",overflow:"hidden"},grow:{flexGrow:1}}})),G=function(){var e=A();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:e.bar,children:Object(v.jsx)(V,{transparent:!0,disableSearch:!0})}),Object(v.jsxs)(s.a,{maxWidth:!1,className:e.root,children:[Object(v.jsx)("div",{className:e.background}),Object(v.jsx)("div",{className:e.search,children:Object(v.jsx)(g,{})})]})]})},M=(n(273),n(20)),W=n.n(M),J=n(32),Y=n(67),H=n(101),Z=n.n(H),$={headers:{"Client-ID":"kimne78kx3ncx6brgo4mv6wki5h1ko"}},K=function(){var e=Object(J.a)(W.a.mark((function e(t){var n,a,r,c,i=arguments;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:0,a="https://api.twitch.tv/v5/videos/".concat(t,"/comments?content_offset_seconds=").concat(n),e.prev=2,e.next=5,Z.a.get(a,$);case 5:return r=e.sent,c=r.data,e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",{comments:[]});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(J.a)(W.a.mark((function e(t,n){var a,r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.twitch.tv/v5/videos/".concat(t,"/comments?cursor=").concat(n),e.prev=1,e.next=4,Z.a.get(a,$);case 4:return r=e.sent.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{comments:[]});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(J.a)(W.a.mark((function e(t){var n,a,r,c,i,s,o,l,u,d=arguments;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>1&&void 0!==d[1]?d[1]:null,a=d.length>2&&void 0!==d[2]?d[2]:0,r=d.length>3&&void 0!==d[3]?d[3]:2e5,c=r-a,!(a<0||r<0||r<a)){e.next=8;break}return e.abrupt("return",[]);case 8:if(!(c<5e3)){e.next=25;break}return e.next=11,K(t,a);case 11:i=e.sent,s=i.comments.filter((function(e){var t=e.content_offset_seconds;return a<=t&&t<r})).map((function(e){var t=e.content_offset_seconds,a=e._id,r=e.message,c=e.commenter;return n&&n.updateProgress(1),{content_offset_seconds:t,_id:a,message:{body:r.body},commenter:{display_name:c.display_name}}}));case 13:if(!i.comments.length||!i._next){e.next=22;break}if(!(i.comments[i.comments.length-1].content_offset_seconds>r)){e.next=16;break}return e.abrupt("break",22);case 16:return e.next=18,Q(t,i._next);case 18:i=e.sent,s.push.apply(s,Object(Y.a)(i.comments.filter((function(e){var t=e.content_offset_seconds;return a<=t&&t<r})).map((function(e){var t=e.content_offset_seconds,a=e._id,r=e.message,c=e.commenter;return n&&n.updateProgress(1),{content_offset_seconds:t,_id:a,message:{body:r.body},commenter:{display_name:c.display_name}}})))),e.next=13;break;case 22:return e.abrupt("return",s);case 25:for(o=[],l=50,u=1;u<=l;u++)o.push(q(t,n,a+(u-1)*c/l,a+u*c/l));return e.abrupt("return",Promise.all(o).then((function(e){return e.reduce((function(e,t){return e.push.apply(e,Object(Y.a)(t)),e}))})));case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=n(234),ee=n(235),te=function(){function e(t){Object(X.a)(this,e),this.progress=void 0,this.onUpdate=void 0,this.progress=0,this.onUpdate=t}return Object(ee.a)(e,[{key:"updateProgress",value:function(e){this.progress+=Math.abs(e),this.onUpdate&&this.onUpdate(this.progress,!1)}},{key:"finish",value:function(){this.onUpdate&&this.onUpdate(this.progress,!0)}}]),e}(),ne={headers:{"Client-ID":"kimne78kx3ncx6brgo4mv6wki5h1ko"}},ae=function(){var e=Object(J.a)(W.a.mark((function e(t){var n,a,r,c,i;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.twitch.tv/v5/videos/".concat(t),e.prev=1,a={title:"",views:0,url:"",language:"",created_at:"",published_at:"",recorded_at:"",game:"",length:0,preview:{small:"",medium:"",large:""},channel:{display_name:"",logo:"",url:""}},e.next=5,Z.a.get(n,ne);case 5:for(c in r=e.sent.data,a)if("object"===typeof a[c])for(i in a[c])a[c][i]=r[c][i];else a[c]=r[c];return e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(J.a)(W.a.mark((function e(t,n){var a,r,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new te(n),e.next=3,ae(t);case 3:if(r=e.sent){e.next=6;break}return e.abrupt("return",null);case 6:return e.next=8,q(t,a,0,r.length);case 8:return c=e.sent,a.finish(),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(0===e.length)return{increment:t,speeds:[]};var n=e[e.length-1].content_offset_seconds,a=Array(2+~~(n/t)).fill(0);return e.forEach((function(e){var n=e.content_offset_seconds;a[~~(n/t)]+=1/t})),{increment:t,speeds:a}},ie=function(e,t){for(var n=e.speeds.map((function(e){return e/t})),a=[],r=0;r<n.length;){for(var c=0,i=0;i<t&&r!==n.length;i++)c+=n[r],r++;a.push(c)}return{increment:e.increment*t,speeds:a}},se=Object(i.a)((function(e){return{title:{marginBottom:e.spacing(2),fontFamily:"'New Tegomin', serif"},subtitle:{fontFamily:"'New Tegomin', serif"},info:{margin:e.spacing(5)}}})),oe=function(){var e=se();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:e.info,children:[Object(v.jsx)(_.a,{variant:"h2",component:"h1",className:e.title,align:"center",children:Object(v.jsx)("b",{children:" Uh Oh! "})}),Object(v.jsx)(_.a,{variant:"h4",component:"h2",className:e.subtitle,align:"center",children:"The VOD you are looking for doesn't seem to exist!"})]})})},le=n(453),ue=n(445),de=n(446),be=n(469),je=n(447),he=n(448),pe=n(449),fe=n(450),me=Object(i.a)({media:{height:0,paddingTop:"56.25%"}}),ve=function(e){var t=e.vodID,n=e.elevation,a=e.downloadComments,r=e.saveVod,c=me(),i=u.a.useState(null),s=Object(o.a)(i,2),l=s[0],b=s[1];return u.a.useEffect((function(){Object(J.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,ae(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[t]),l?Object(v.jsxs)(ue.a,{elevation:n,children:[Object(v.jsx)(de.a,{avatar:Object(v.jsx)(d.a,{onClick:function(){window.open(l.channel.url)},children:Object(v.jsx)(be.a,{"aria-label":"avatar image",src:l.channel.logo})}),title:Object(v.jsx)(_.a,{variant:"subtitle1",children:l.title}),subheader:Object(v.jsxs)(_.a,{variant:"subtitle2",children:["By"," ",Object(v.jsx)(B.a,{href:l.channel.url,target:"_blank",rel:"noreferrer",children:l.channel.display_name})," ","at ",new Date(l.recorded_at).toDateString()]})}),Object(v.jsx)(je.a,{onClick:function(){window.open(l.url)},children:Object(v.jsx)(he.a,{image:l.preview.large,title:"Go to vod",className:c.media})}),Object(v.jsxs)(pe.a,{children:[Object(v.jsx)(fe.a,{size:"small",color:"primary",onClick:a,children:"download comments"}),Object(v.jsx)(fe.a,{size:"small",color:"primary",onClick:r,children:"save vod"})]})]}):Object(v.jsx)(ue.a,{elevation:n,children:Object(v.jsx)(de.a,{title:Object(v.jsx)(_.a,{variant:"subtitle1",children:"Loading..."})})})},xe=n(452),Oe=n(470),ge=n(458),we=n(461),ke=n(474),ye=n(467),_e=n(456),Ce=function(){return{width:window.innerWidth,height:window.innerHeight}},Se=function(){var e=Object(l.useState)(Ce()),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(l.useEffect)((function(){var e=function(){return a(Ce())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},Ie=function(e){var t,n=Object(ge.a)("zoom","voronoi"),a=u.a.useState([0,1e6]),r=Object(o.a)(a,2),c=r[0],i=r[1],s=Se().width,l=u.a.useState(0),d=Object(o.a)(l,2),b=d[0],j=d[1],h=u.a.useCallback((function(e){null!==e&&j(e.getBoundingClientRect().width)}),[s]);return Object(v.jsx)("div",{style:{width:"100%",height:"100%"},ref:h,children:Object(v.jsxs)(we.a,{height:300,width:b,padding:{top:50,left:80,right:50,bottom:50},domain:function(){if(e.data.speeds.length)return{x:[0,e.data.speeds.length*e.data.increment],y:[0,Math.max.apply(Math,Object(Y.a)(e.data.speeds))+.5]}}(),containerComponent:Object(v.jsx)(n,{zoomDimension:"x",responsive:!1,onZoomDomainChange:function(e){i(e.x)}}),children:[Object(v.jsx)(ke.a,{dependentAxis:!0,label:"Messages",tickFormat:function(e){return e},axisLabelComponent:Object(v.jsx)(ye.a,{dy:-20})}),Object(v.jsx)(ke.a,{label:"Time (s)"}),Object(v.jsx)(_e.a,{data:(t=ie(e.data,e.flatten),t.speeds.map((function(e,n){return{time:n*t.increment,speed:e}}))).filter((function(e){return e.time>=c[0]&&e.time<=c[1]})),interpolation:"natural",x:"time",y:"speed"})]})})},De=Object(i.a)((function(e){return{slider:{paddingLeft:e.spacing(5),paddingRight:e.spacing(5),width:200,margin:0}}})),Ne=function(e){var t=e.vodInfo,n=e.elevation,a=De(),r=u.a.useState(1),c=Object(o.a)(r,2),i=c[0],s=c[1];return Object(v.jsxs)(ue.a,{elevation:n,children:[Object(v.jsx)(de.a,{title:Object(v.jsx)(_.a,{variant:"subtitle1",children:"Number of Chat Messages"}),subheader:Object(v.jsx)(_.a,{variant:"subtitle2",children:"Zoom in and drag to check out the graph"})}),Object(v.jsxs)(xe.a,{children:[Object(v.jsx)("div",{className:a.slider,children:Object(v.jsx)(Oe.a,{value:i,marks:[{value:1,label:"More detailed"},{value:10,label:"Less detailed"}],min:1,max:10,defaultValue:i,onChange:function(e,t){s(t)},"aria-labelledby":"flatten size"})}),Object(v.jsx)(Ie,{data:t.speeds,flatten:i,vodID:t.vodID})]})]})},Fe=function(){var e=u.a.useState({vodID:-1,speeds:{increment:1,speeds:[]}}),t=Object(o.a)(e,2),n=t[0],a=t[1],r=u.a.useState(!1),c=Object(o.a)(r,2),i=c[0],l=c[1],d=u.a.useState(0),j=Object(o.a)(d,2),h=j[0],p=j[1],f=u.a.useState(!1),m=Object(o.a)(f,2),O=m[0],g=m[1],w=u.a.useState(""),k=Object(o.a)(w,2),y=k[0],_=k[1],C=u.a.useState(null),S=Object(o.a)(C,2),I=S[0],D=S[1],N=u.a.useState(U()),F=Object(o.a)(N,2),L=F[0],z=F[1],E=Object(b.g)().vodID,B=function(){var e=Object(J.a)(W.a.mark((function e(){var t,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(0),e.next=3,re(E,(function(e,t){p(t?null:e)}));case 3:if(null!==(t=e.sent)){e.next=7;break}return l(!0),e.abrupt("return",[]);case 7:return D(t),n={vodID:E,speeds:ce(t)},a(n),e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();u.a.useEffect((function(){var e=P(E);e?(p(null),a(e)):B()}),[E]);var T=function(){var e=Object(J.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P(E)){e.next=2;break}return e.abrupt("return");case 2:if(""!==(t=R(n))){e.next=8;break}return z(L+1),e.abrupt("return");case 8:"QuotaExceededError"===t?(g(!0),_("Not enough memory to save the vod, remove some vods in bookmarks")):(g(!0),_("ERROR: Could not save vod due to ".concat(n)));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(J.a)(W.a.mark((function e(){var t,n,a,r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=I){e.next=5;break}return e.next=4,re(E,null);case 4:t=e.sent;case 5:null!==t&&(n="VodID: ".concat(E,"\n").concat(t.map((function(e){return"".concat(e.commenter.display_name,"[").concat(e.content_offset_seconds,"s]: ").concat(e.message.body)})).join("\n")),a=document.createElement("a"),r=new Blob([n],{type:"text/plain;charset=utf-8"}),a.href=URL.createObjectURL(r),a.download="comments.txt",document.body.appendChild(a),a.click(),document.body.removeChild(a));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(V,{bookmarkNum:L}),Object(v.jsxs)(s.a,{maxWidth:"xl",children:[Object(v.jsx)("br",{}),i?Object(v.jsx)(oe,{}):Object(v.jsxs)(le.a,{container:!0,spacing:3,children:[null===h?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(le.a,{item:!0,xs:5,md:5,xl:5,children:Object(v.jsx)(ve,{vodID:E,elevation:5,downloadComments:A,saveVod:T})}),Object(v.jsx)(le.a,{item:!0,xs:12,xl:6,children:Object(v.jsx)(Ne,{elevation:5,vodInfo:n})})]}):Object(v.jsxs)("div",{children:["Loaded ",h," comments"]}),Object(v.jsx)(x,{message:y,setOpen:g,open:O})]})]})]})},Le=n(459),ze=n(454),Ee=Object(i.a)({media:{height:0,paddingTop:"56.25%"}}),Re=function(){var e=Object(b.f)(),t=u.a.useState(function(){var e=[],t=z();for(var n in t)e.push(t[n]);return e}()),n=Object(o.a)(t,2),a=n[0],r=n[1],c=u.a.useState(Array(a.length).fill(-1)),i=Object(o.a)(c,2),l=i[0],j=i[1],h=Ee();u.a.useEffect((function(){Object(J.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.map((function(e){return ae(e.vodID)})),e.t0=j,e.next=4,Promise.all(t);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))()}),[a]);var p=function(e,t){return function(){var n=Object(Y.a)(l),c=Object(Y.a)(a);n.splice(t),c.splice(t),j(n),r(c),function(e){var t=z();e in t&&delete t[e],E(t)}(e)}},f=function(e){var t=e.cardInner;return Object(v.jsx)(le.a,{item:!0,xs:12,sm:12,md:6,lg:4,children:Object(v.jsx)(ue.a,{elevation:5,children:t})})};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(V,{}),Object(v.jsxs)(s.a,{maxWidth:"xl",children:[Object(v.jsx)("br",{}),Object(v.jsx)(le.a,{container:!0,spacing:3,children:a.map((function(t,n){return null===l[n]?Object(v.jsx)(f,{cardInner:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(xe.a,{children:Object(v.jsxs)(_.a,{variant:"subtitle1",children:["Could not find vod with vod id ",t.vodID," (Vod might have expired)"]})}),Object(v.jsx)(pe.a,{children:Object(v.jsx)(fe.a,{size:"small",color:"primary",onClick:p(t.vodID,n),children:"Remove vod"})})," "]})},t.vodID):-1===l[n]?Object(v.jsx)(f,{cardInner:Object(v.jsx)(xe.a,{children:Object(v.jsxs)(_.a,{variant:"subtitle1",children:["Loading ",t.vodID]})})},t.vodID):Object(v.jsx)(f,{cardInner:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(de.a,{avatar:Object(v.jsx)(d.a,{onClick:function(){window.open(l[n].channel.url)},children:Object(v.jsx)(be.a,{"aria-label":"avatar image",src:l[n].channel.logo})}),title:Object(v.jsx)(_.a,{variant:"subtitle1",children:l[n].title}),subheader:Object(v.jsxs)(_.a,{variant:"subtitle2",children:["By"," ",Object(v.jsx)(B.a,{href:l[n].channel.url,target:"_blank",rel:"noreferrer",children:l[n].channel.display_name})," ","at"," ",new Date(l[n].recorded_at).toDateString()]})}),Object(v.jsx)(je.a,{onClick:function(){window.open(l[n].url)},children:Object(v.jsx)(he.a,{image:l[n].preview.large,title:"Go to vod",className:h.media})}),Object(v.jsxs)(pe.a,{children:[Object(v.jsx)(fe.a,{size:"small",color:"primary",onClick:function(){e.push("/search/".concat(t.vodID)),e.go(0)},children:"Analytics"}),Object(v.jsx)(fe.a,{size:"small",color:"primary",onClick:p(t.vodID,n),children:"Remove vod"})]})]})},t.vodID)}))})]})]})},Pe=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ze.a,{}),Object(v.jsx)(Le.b,{injectFirst:!0,children:Object(v.jsxs)(b.c,{children:[Object(v.jsx)(b.a,{path:"/search/:vodID",children:Object(v.jsx)(Fe,{})}),Object(v.jsx)(b.a,{path:"/bookmarks",children:Object(v.jsx)(Re,{})}),Object(v.jsx)(b.a,{path:"/",children:Object(v.jsx)(G,{})})]})})]})},Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,475)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},Be=n(74),Te=n(455),Ve=n(251),Ae=Object(Ve.a)({palette:{primary:{main:"#7015c2"},secondary:{main:"#25e220"},background:{default:"azure",paper:"azure"}}});r.a.render(Object(v.jsx)(Te.a,{theme:Ae,children:Object(v.jsx)(Be.a,{children:Object(v.jsx)(Pe,{})})}),document.getElementById("root")),Ue()}},[[404,1,2]]]);
//# sourceMappingURL=main.9c219949.chunk.js.map