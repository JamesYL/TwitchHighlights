(this.webpackJsonptwitchhighlights=this.webpackJsonptwitchhighlights||[]).push([[0],{428:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n.n(a),c=n(67),o=n(475),i=n(481),s=n(18),l=n(0),u=n.n(l),d=n(474),h=n(26),b=n(138),m=n.n(b),f=n(70),j=n(506),p=n(504),v=n(3),g=function(e){var t=function(){e.setOpen(!1)};return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(j.a,Object(f.a)(Object(f.a)({open:e.open,autoHideDuration:5e3,onClose:t},e.snackbarProps),{},{children:Object(v.jsx)(p.a,Object(f.a)(Object(f.a)({elevation:6,variant:"filled",severity:"error"},e.alertProps),{},{onClose:t,children:e.message}))}))})},x=Object(o.a)((function(e){return{root:{border:"1px solid #696969",borderRadius:25,display:"flex",width:"100%",maxWidth:800,background:e.palette.background.paper},button:{marginLeft:"auto",marginTop:e.spacing(2),marginBottom:e.spacing(2)},input:{border:0,flex:1,marginLeft:20,outlineStyle:"none",boxShadow:"none",borderColor:"transparent","input::-ms-clear":{display:"none"},fontSize:"calc(0.75em + 1vmin)",background:e.palette.background.paper}}})),O=function(){var e=Object(h.f)(),t=x(),n=u.a.useState(!1),a=Object(s.a)(n,2),r=a[0],c=a[1],o=u.a.useState(""),i=Object(s.a)(o,2),l=i[0],b=i[1],f=u.a.useState(""),j=Object(s.a)(f,2),p=j[0],O=j[1];u.a.useEffect((function(){var e=setInterval((function(){O("..."===p?"":p+".")}),500);return function(){return clearInterval(e)}}),[p]);var w=function(){var t=parseInt(l);if(!t){var n=l.indexOf("videos/");if(n>=0){var a=l.slice(n+7),r=a.indexOf("/");t=r>=0?parseInt(a.slice(0,r)):parseInt(a)}}t?(e.push("/search/".concat(t)),e.go(0)):c(!0)};return Object(v.jsxs)("div",{className:t.root,children:[Object(v.jsx)("input",{autoFocus:!0,className:t.input,type:"text",onChange:function(e){return b(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&w()},placeholder:"Analyze Vod: Enter twitch vod URL".concat(p)}),Object(v.jsx)(d.a,{onClick:w,className:t.button,children:Object(v.jsx)(m.a,{})}),Object(v.jsx)(g,{message:"Vod id cannot be determined from the input",open:r,setOpen:c})]})},w=n(14),y=n.n(w),k=n(27),I=n(509),N=n(476),D=n(477),C=n(114),S=n(480),_=n(253),T=n.n(_),F=Object(o.a)((function(e){return{root:{border:"1px solid lightgrey",borderRadius:25,maxWidth:600,display:"flex",width:"100%",background:e.palette.background.paper},button:{marginLeft:"auto"},input:{border:0,flex:1,marginLeft:20,outlineStyle:"none",boxShadow:"none",borderColor:"transparent","input::-ms-clear":{display:"none"},fontSize:16,background:e.palette.background.paper}}})),L=function(){var e=Object(h.f)(),t=F(),n=u.a.useState(!1),a=Object(s.a)(n,2),r=a[0],c=a[1],o=u.a.useState(""),i=Object(s.a)(o,2),l=i[0],b=i[1],f=function(){var t=parseInt(l);if(!t){var n=l.indexOf("videos/");if(n>=0){var a=l.slice(n+7),r=a.indexOf("/");t=r>=0?parseInt(a.slice(0,r)):parseInt(a)}}t?(e.push("/search/".concat(t)),e.go(0)):c(!0)};return Object(v.jsxs)("div",{className:t.root,children:[Object(v.jsx)("input",{type:"text",onChange:function(e){return b(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&f()},placeholder:"Enter twitch vod URL",className:t.input}),Object(v.jsx)(d.a,{onClick:f,className:t.button,children:Object(v.jsx)(m.a,{})}),Object(v.jsx)(g,{message:"Failed to find the VOD",open:r,setOpen:c})]})},E=n(510),B=n(184),R=n(64),z=n(87),V=n(248),U=n(272),P=new(function(e){Object(V.a)(n,e);var t=Object(U.a)(n);function n(){var e;return Object(R.a)(this,n),(e=t.call(this,"Database")).vod=void 0,e.channel=void 0,e.version(1).stores({vod:"vodID",channel:"channelID, name"}),e.vod=e.table("vod"),e.channel=e.table("channel"),e}return n}(n(251).a)),W=function(){function e(t,n,a,r){Object(R.a)(this,e),this.vodID=void 0,this.channelID=void 0,this.comments=void 0,this.vodInfo=void 0,this.vodID=t,this.channelID=n,this.comments=a,this.vodInfo=r}return Object(z.a)(e,[{key:"save",value:function(){P.vod.put(this)}},{key:"getComments",value:function(){return this.comments}}]),e}(),A=function(){return P.vod.count()},M=function(){function e(t,n,a){Object(R.a)(this,e),this.channelID=void 0,this.name=void 0,this.channel=void 0,this.channelID=t,this.name=n,this.channel=a}return Object(z.a)(e,[{key:"save",value:function(){P.channel.put(this)}}]),e}(),G=function(e){return P.channel.get(e)},H=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=t,P.vod.get(r);case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,G(n.channelID);case 7:if(a=e.sent){e.next=10;break}return e.abrupt("return",null);case 10:return e.abrupt("return",{vodID:n.vodID,channelID:a.channelID,channelName:a.name,channelInfo:a.channel,vodInfo:n.vodInfo,comments:n.comments});case 11:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e,t,n){var a=t.channel,r=Object(B.a)(t,["channel"]);return{vodID:e,channelID:a._id,channelName:a.display_name,channelInfo:{logo:a.logo,url:a.url},vodInfo:r,comments:$(n)}},$=function(e){return e.map((function(e){return{seconds:e.content_offset_seconds,message:e.message.body,commenter:e.commenter.display_name}}))},q=function(e,t,n){var a=new M(t.channel._id,t.channel.display_name,{logo:t.channel.logo,url:t.channel.url});a.save();t.channel;var r=Object(B.a)(t,["channel"]);new W(e,a.channelID,$(n),r).save()},J=function(e){return t=e,P.vod.where("vodID").equals(t).delete();var t},Z=function(){return A()},K=function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Promise,e.next=3,P.vod.toArray();case 3:return e.t1=e.sent.map((function(e){return H(e.vodID)})),e.abrupt("return",e.t0.all.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=n(478),X=n(139),ee=n.n(X),te=Object(o.a)((function(e){var t;return Object(I.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:(t={fontFamily:"Alfa Slab One",color:"white"},Object(c.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(c.a)(t,"marginRight",e.spacing(2)),t),root:{flexGrow:1,backgroundColor:"transparent"},search:{marginTop:e.spacing(1),marginBottom:e.spacing(1),width:"100%"},appbar:function(e){return e.transparent?{background:"transparent"}:{}}})}));function ne(e){var t=e.transparent,n=e.disableSearch,a=e.bookmarkNum,r=Object(h.f)(),c=te({transparent:t}),o=u.a.useState(a),i=Object(s.a)(o,2),l=i[0],b=i[1];return u.a.useEffect((function(){Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=8;break}return e.t0=b,e.next=4,Z();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=9;break;case 8:b(a);case 9:case"end":return e.stop()}}),e)})))()}),[a]),Object(v.jsx)("div",{className:c.root,children:Object(v.jsx)(N.a,{position:"static",className:c.appbar,elevation:0,children:Object(v.jsxs)(D.a,{children:[Object(v.jsx)(C.a,{className:c.title,variant:"h6",children:Object(v.jsx)(Q.a,{href:"/",color:"inherit",variant:"inherit",children:"Streamalytics"})}),!n&&Object(v.jsx)("div",{className:c.search,children:Object(v.jsx)(L,{})}),Object(v.jsx)("div",{className:c.grow}),Object(v.jsx)(E.a,{title:"Download Clips","aria-label":"download clips",children:Object(v.jsx)(d.a,{"aria-label":"get desktop app",color:"inherit",onClick:function(){r.push("/releases"),r.go(0)},children:Object(v.jsx)(ee.a,{})})}),Object(v.jsx)(E.a,{title:"Saved vods","aria-label":"saved vods",children:Object(v.jsx)(d.a,{"aria-label":"show saved vod analytics",color:"inherit",onClick:function(){r.push("/bookmarks"),r.go(0)},children:Object(v.jsx)(S.a,{badgeContent:l||null,color:"secondary",children:Object(v.jsx)(T.a,{})})})})]})})})}var ae=Object(o.a)((function(e){var t;return{bar:{animation:"$comeDown 2000ms",position:"fixed",top:0,left:0,flexGrow:1,width:"100%",background:"transparent"},title:(t={fontFamily:"Alfa Slab One, cursive",color:"white"},Object(c.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(c.a)(t,"marginRight",e.spacing(2)),t),root:{display:"flex",flexDirection:"column",minHeight:200,height:"100vh",justifyContent:"center",overflow:"hidden",margin:0,padding:0,width:"100vw"},search:{width:"100%",justifyContent:"center",display:"flex",flexDirection:"row",animation:"$comeUp 2000ms"},"@keyframes comeUp":{"0%":{opacity:0,transform:"translateY(200%)"},"100%":{opacity:1,transform:"translateY(0)"}},"@keyframes comeDown":{"0%":{opacity:0,transform:"translateY(-200%)"},"100%":{opacity:1,transform:"translateY(0)"}},"@keyframes gradient":{"0%":{backgroundPosition:"0% 50%"},"50%":{backgroundPosition:"25% 50%"},"100%":{backgroundPosition:"0% 50%"}},background:{position:"fixed",width:"400%",height:"200%",background:"radial-gradient(circle, rgba(57,226,182,1) 8%, rgba(20,176,103,1) 24%, rgba(67,145,207,1) 40%, rgba(81,40,184,1) 54%, rgba(139,79,205,1) 68%, rgba(186,60,162,1) 80%, rgba(204,139,68,1) 93%)",top:"-150%",left:"-200%",zIndex:-8,transform:"rotateZ(-10deg)",backgroundPosition:"80%",backgroundSize:"400% 400%",animation:"$gradient 15s ease infinite",overflow:"hidden"},grow:{flexGrow:1}}})),re=function(){var e=ae();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:e.bar,children:Object(v.jsx)(ne,{transparent:!0,disableSearch:!0})}),Object(v.jsxs)(i.a,{maxWidth:!1,className:e.root,children:[Object(v.jsx)("div",{className:e.background}),Object(v.jsx)("div",{className:e.search,children:Object(v.jsx)(O,{})})]})]})},ce=(n(297),n(254)),oe=n(113),ie=n(76),se=n.n(ie),le={headers:{"Client-ID":"kimne78kx3ncx6brgo4mv6wki5h1ko"}},ue=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,a,r,c,o=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:0,a="https://api.twitch.tv/v5/videos/".concat(t,"/comments?content_offset_seconds=").concat(n),e.prev=2,e.next=5,se.a.get(a,le);case 5:return r=e.sent,c=r.data,e.abrupt("return",c);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",{comments:[]});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(k.a)(y.a.mark((function e(t,n){var a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.twitch.tv/v5/videos/".concat(t,"/comments?cursor=").concat(n),e.prev=1,e.next=4,se.a.get(a,le);case 4:return r=e.sent.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{comments:[]});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),he=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,a,r,c,o,i,s,l,u,d=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>1&&void 0!==d[1]?d[1]:null,a=d.length>2&&void 0!==d[2]?d[2]:0,r=d.length>3&&void 0!==d[3]?d[3]:2e5,c=r-a,!(a<0||r<0||r<a)){e.next=8;break}return e.abrupt("return",[]);case 8:if(!(c<5e3)){e.next=25;break}return e.next=11,ue(t,a);case 11:o=e.sent,i=o.comments.filter((function(e){var t=e.content_offset_seconds;return a<=t&&t<r})).map((function(e){var t=e.content_offset_seconds,a=e._id,r=e.message,c=e.commenter;return n&&n.updateProgress(1),{content_offset_seconds:t,_id:a,message:{body:r.body},commenter:{display_name:c.display_name}}}));case 13:if(!o.comments.length||!o._next){e.next=22;break}if(!(o.comments[o.comments.length-1].content_offset_seconds>r)){e.next=16;break}return e.abrupt("break",22);case 16:return e.next=18,de(t,o._next);case 18:o=e.sent,i.push.apply(i,Object(oe.a)(o.comments.filter((function(e){var t=e.content_offset_seconds;return a<=t&&t<r})).map((function(e){var t=e.content_offset_seconds,a=e._id,r=e.message,c=e.commenter;return n&&n.updateProgress(1),{content_offset_seconds:t,_id:a,message:{body:r.body},commenter:{display_name:c.display_name}}})))),e.next=13;break;case 22:return e.abrupt("return",i);case 25:for(s=[],l=50,u=1;u<=l;u++)s.push(he(t,n,a+(u-1)*c/l,a+u*c/l));return e.abrupt("return",Promise.all(s).then((function(e){return e.reduce((function(e,t){return e.push.apply(e,Object(oe.a)(t)),e}))})));case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=function(){function e(t){Object(R.a)(this,e),this.progress=void 0,this.onUpdate=void 0,this.progress=0,this.onUpdate=t}return Object(z.a)(e,[{key:"updateProgress",value:function(e){this.progress+=Math.abs(e),this.onUpdate&&this.onUpdate(this.progress,!1)}},{key:"finish",value:function(){this.onUpdate&&this.onUpdate(this.progress,!0)}}]),e}(),me={headers:{"Client-ID":"kimne78kx3ncx6brgo4mv6wki5h1ko"}},fe=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,a,r,c,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.twitch.tv/v5/videos/".concat(t),a={title:"",views:0,url:"",language:"",created_at:"",published_at:"",recorded_at:"",game:"",length:0,preview:{small:"",medium:"",large:""},channel:{display_name:"",logo:"",url:"",_id:""}},e.next=4,se.a.get(n,me);case 4:for(c in r=e.sent.data,a)if("object"===typeof a[c])for(o in a[c])a[c][o]=r[c][o];else a[c]=r[c];return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(k.a)(y.a.mark((function e(t,n){var a,r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new be(n),e.next=3,fe(t);case 3:return r=e.sent,e.next=6,he(t,a,0,r.length);case 6:return c=e.sent,a.finish(),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,a=[];if((t=t.filter((function(e){return e.length>0})).map((function(e){return e.toLowerCase()}))).length){var r=new Set(t);e.forEach((function(e){var t,n=e.message.toLowerCase().replace(/[,\/#!$%\^\*{}?`~]/g,"").split(" "),c=Object(ce.a)(n);try{for(c.s();!(t=c.n()).done;){var o=t.value;if(r.has(o)){a.push(e);break}}}catch(i){c.e(i)}finally{c.f()}}))}else a=e;if(0===a.length)return{increment:n,speeds:[]};var c=a[a.length-1].seconds,o=Array(2+~~(c/n)).fill(0);return a.forEach((function(e){var t=e.seconds;o[~~(t/n)]+=1/n})),{increment:n,speeds:o}},ve=function(e,t){for(var n=e.speeds.map((function(e){return e/t})),a=[],r=0;r<n.length;){for(var c=0,o=0;o<t&&r!==n.length;o++)c+=n[r],r++;a.push(c)}return{increment:e.increment*t,speeds:a}},ge=Object(o.a)((function(e){return{title:{marginBottom:e.spacing(2),fontFamily:"'New Tegomin', serif"},subtitle:{fontFamily:"'New Tegomin', serif"},info:{margin:e.spacing(5)}}})),xe=function(){var e=ge();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:e.info,children:[Object(v.jsx)(C.a,{variant:"h2",component:"h1",className:e.title,align:"center",children:Object(v.jsx)("b",{children:" Uh Oh! "})}),Object(v.jsx)(C.a,{variant:"h4",component:"h2",className:e.subtitle,align:"center",children:"The VOD you are looking for doesn't seem to exist! Are you sure this VOD hasn't expired?"})]})})},Oe=n(490),we=n(482),ye=n(483),ke=n(511),Ie=n(484),Ne=n(485),De=n(486),Ce=n(487),Se=Object(o.a)({media:{height:0,paddingTop:"56.25%"},root:{height:"100%"}}),_e=function(e){var t=e.vodInfo,n=e.elevation,a=e.downloadComments,r=e.saveVod,c=Se();return Object(v.jsxs)(we.a,{elevation:n,className:c.root,children:[Object(v.jsx)(ye.a,{avatar:Object(v.jsx)(d.a,{onClick:function(){window.open(t.channelInfo.url)},children:Object(v.jsx)(ke.a,{"aria-label":"avatar image",src:t.channelInfo.logo})}),title:Object(v.jsx)(C.a,{variant:"subtitle1",children:t.vodInfo.title}),subheader:Object(v.jsxs)(C.a,{variant:"subtitle2",children:["By"," ",Object(v.jsx)(Q.a,{href:t.channelInfo.url,target:"_blank",rel:"noreferrer",children:t.channelName})]})}),Object(v.jsx)(Ie.a,{onClick:function(){window.open(t.vodInfo.url)},children:Object(v.jsx)(Ne.a,{image:t.vodInfo.preview.large,title:"Go to vod",className:c.media})}),Object(v.jsxs)(De.a,{children:[Object(v.jsx)(Ce.a,{size:"small",color:"primary",onClick:a,children:"download chat"}),Object(v.jsx)(Ce.a,{size:"small",color:"primary",onClick:r,children:"save this vod"})]})]})},Te=n(489),Fe=n(512),Le=n(498),Ee=n(500),Be=n(503),Re=n(516),ze=n(508),Ve=n(497),Ue=function(){return{width:window.innerWidth,height:window.innerHeight}},Pe=function(){var e=Object(l.useState)(Ue()),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(l.useEffect)((function(){var e=function(){return a(Ue())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},We=function(e){var t=Object(Ee.a)("zoom","voronoi"),n=u.a.useState([0,1e6]),a=Object(s.a)(n,2),r=a[0],c=a[1],o=u.a.useState(),i=Object(s.a)(o,2),l=i[0],d=i[1];u.a.useEffect((function(){e.data.speeds.length&&d({x:[0,e.data.speeds.length*e.data.increment],y:[0,Math.max.apply(Math,Object(oe.a)(e.data.speeds))+.5]})}),[e.data]);var h,b=Pe().width,m=u.a.useState(0),f=Object(s.a)(m,2),j=f[0],p=f[1],g=u.a.useCallback((function(e){null!==e&&p(e.getBoundingClientRect().width)}),[b]);return Object(v.jsx)("div",{style:{width:"100%",height:"100%"},ref:g,children:Object(v.jsxs)(Be.a,{height:300,width:j,padding:{top:50,left:80,right:50,bottom:50},domain:l,containerComponent:Object(v.jsx)(t,{zoomDimension:"x",responsive:!1,onZoomDomainChange:function(e){c(e.x)}}),children:[Object(v.jsx)(Re.a,{dependentAxis:!0,label:"Messages",axisLabelComponent:Object(v.jsx)(ze.a,{dy:-20})}),Object(v.jsx)(Re.a,{label:"Time (s)",tickFormat:function(e){return function(e){var t=~~(e/3600),n=~~((e-3600*t)/60),a=e-3600*t-60*n;return"".concat(t,"h ").concat(n,"m ").concat(a,"s")}(e)}}),Object(v.jsx)(Ve.a,{data:(h=ve(e.data,e.flatten),h.speeds.map((function(e,t){return{time:t*h.increment,speed:e}}))).filter((function(e){return e.time>=r[0]&&e.time<=r[1]})),interpolation:"natural",x:"time",y:"speed"})]})},e.data.speeds.length)},Ae=u.a.memo(We,(function(e,t){return e.flatten===t.flatten&&e.data.speeds.length===t.data.speeds.length})),Me=Object(o.a)((function(e){return{slider:{paddingLeft:e.spacing(10),paddingRight:e.spacing(8),width:250,margin:0,paddingTop:e.spacing(.5)},header:{paddingBottom:0},chart:{marginTop:-40,paddingBottom:0},action:{margin:0,padding:0,marginBottom:e.spacing(1)},form:{display:"flex",marginBottom:e.spacing(2),paddingRight:e.spacing(2),alignItems:"flex-start"},filter:{paddingLeft:e.spacing(5),paddingRight:e.spacing(3),width:"100%"},updateButton:{padding:e.spacing(2)}}})),Ge=function(e){var t=e.vodInfo,n=e.elevation,a=Me(),r=u.a.useState(1),c=Object(s.a)(r,2),o=c[0],i=c[1],l=u.a.useState(pe(t.comments)),d=Object(s.a)(l,2),h=d[0],b=d[1];return Object(v.jsxs)(we.a,{elevation:n,children:[Object(v.jsx)(ye.a,{title:Object(v.jsx)(C.a,{variant:"subtitle1",children:"Chat Intensity"}),subheader:Object(v.jsx)(C.a,{variant:"subtitle2",children:"Zoom in and drag to check out the graph"}),className:a.header}),Object(v.jsx)(Te.a,{className:a.chart,children:Object(v.jsx)(Ae,{data:h,flatten:o})}),Object(v.jsx)(De.a,{className:a.action,children:Object(v.jsxs)(Oe.a,{container:!0,children:[Object(v.jsx)(Oe.a,{item:!0,xs:12,md:4,xl:3,className:a.slider,children:Object(v.jsx)(Fe.a,{name:"slider",value:o,marks:[{value:1,label:"Most detailed"},{value:10,label:"Least detailed"}],min:1,max:10,defaultValue:o,onChange:function(e,t){i(t)},"aria-labelledby":"flatten size"})}),Object(v.jsx)(Oe.a,{item:!0,xs:12,md:!0,xl:6,children:Object(v.jsxs)("form",{className:a.form,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault();var n=e.currentTarget.elements.filter.value;b(pe(t.comments,n.split("\n")))},children:[Object(v.jsx)("div",{className:a.filter,children:Object(v.jsx)(Le.a,{variant:"filled",label:"Filter by keywords (Put each keyword on a new line)",name:"filter",multiline:!0,fullWidth:!0})}),Object(v.jsx)(Ce.a,{type:"submit",variant:"contained",color:"primary",className:a.updateButton,children:"Update"})]})})]})})]})},He=n(270),Ye=function(e){var t=e.data,n=e.setHoveredData,a=u.a.useState(null),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(v.jsx)("div",{children:Object(v.jsx)(He.PieChart,{data:t,onMouseOver:function(e,a){n(t[a])},onClick:function(e,n){o(t[n])},onMouseOut:function(){n(c)}})})},$e=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,a,r,c,o,i,s,l,u,d;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se.a.get("/api/emotes/".concat(t.channelID));case 3:for(s in n=e.sent.data,a={},n.forEach((function(e){a[e.emoteName.toLowerCase()]={url:e.emoteImgURL,name:e.emoteName}})),r={},c=0,t.comments.map((function(e){return e.message.trim().toLowerCase().replace(/[,\/#!$%\^\*{}?`~]/g,"")})).filter((function(e){return e.length>0})).forEach((function(e){for(var t=e.split(" "),n=new Set,o=0;o<t.length;o++){var i=e.trim();if(i in a&&!n.has(i)){n.add(a[i].name),i in r||(r[i]=0),r[i]++,c++;break}}})),o=[],i=["#2d080a","#c2f970","#7c3626","#a499b3","#f5853f","#89d2dc","#093824","#98a6d4","#ffcdbc","#6564db"],r)o.push({title:a[s].name,value:100*r[s]/c,color:"#E38627",url:a[s].url});for(o.sort((function(e,t){return e.value>=t.value?-1:0})),l=[],u=0,d=0;d<o.length;d++)o[d].value>=.5?l.push(Object(f.a)(Object(f.a)({},o[d]),{},{color:i[d%i.length]})):u+=o[d].value;return u>0&&l.push({title:"Other",value:u,color:"#E38627",url:""}),e.abrupt("return",l);case 20:return e.prev=20,e.t0=e.catch(0),e.abrupt("return",[{title:"Error",value:100,color:"#E38627",url:""}]);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}(),qe=Object(o.a)((function(e){return{slider:{paddingLeft:e.spacing(10),paddingRight:e.spacing(5),width:250,margin:0},header:{paddingBottom:0},action:{margin:0,padding:0,marginBottom:e.spacing(1)},pie:{maxWidth:"23vw"},content:{display:"flex"},info:{alignSelf:"center",marginLeft:e.spacing(3)},root:{height:"100%"}}})),Je=function(e){var t=e.vodInfo,n=e.elevation,a=u.a.useState(null),r=Object(s.a)(a,2),c=r[0],o=r[1],i=u.a.useState([]),l=Object(s.a)(i,2),d=l[0],h=l[1];u.a.useEffect((function(){Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h,e.next=3,$e(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[t]);var b=qe();return Object(v.jsxs)(we.a,{elevation:n,className:b.root,children:[Object(v.jsx)(ye.a,{title:Object(v.jsx)(C.a,{variant:"subtitle1",children:"Most Frequent Emotes"}),subheader:Object(v.jsx)(C.a,{variant:"subtitle2",children:"Hover over or click for info"}),className:b.header}),Object(v.jsxs)(Te.a,{className:b.content,children:[Object(v.jsx)("div",{className:b.pie,children:Object(v.jsx)(Ye,{data:d,setHoveredData:o})}),Object(v.jsx)("div",{className:b.info,children:c&&Object(v.jsxs)("div",{children:[Object(v.jsxs)(C.a,{component:"h4",variant:"h6",children:[c.title," (",Math.round(10*c.value)/10,"%)"]}),c.url&&Object(v.jsx)("img",{src:c.url,alt:"".concat(c.title)})]})})]}),Object(v.jsx)(De.a,{className:b.action})]})},Ze=n(275),Ke=n(491),Qe=n(492),Xe=n(493),et=n(494),tt=Object(o.a)((function(e){return{cell:{border:0},container:{height:"100%"}}})),nt=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},at=function(e){var t=~~(e/3600),n=~~((e-3600*t)/60),a=e-3600*t-60*n;return"".concat(t,"h ").concat(n,"m ").concat(a,"s")},rt=function(e){var t=e.vodInfo,n=e.elevation,a=tt(),r=[{x:"Total Chat Messages",y:nt(t.comments.length)},{x:"Total Commenters",y:nt(new Set(t.comments.map((function(e){return e.commenter}))).size)},{x:"Total Views",y:nt(t.vodInfo.views)},{x:"Vod Length",y:at(t.vodInfo.length)},{x:"Recorded Time",y:"".concat(new Date(t.vodInfo.recorded_at).toUTCString())}];return Object(v.jsx)(Ze.a,{elevation:n,className:a.container,children:Object(v.jsx)(Ke.a,{"aria-label":"extra vod info",children:Object(v.jsx)(Qe.a,{children:r.map((function(e){var t=e.x,n=e.y;return Object(v.jsxs)(Xe.a,{children:[Object(v.jsx)(et.a,{component:"th",scope:"row",className:a.cell,children:t}),Object(v.jsx)(et.a,{align:"right",className:a.cell,children:n})]},t)}))})})})},ct=Object(o.a)((function(e){return{loadedText:{margin:e.spacing(5),fontFamily:"'Delta Gothic One', cursive"}}})),ot=function(){var e=ct(),t=Object(h.g)().vodID,n=u.a.useState(null),a=Object(s.a)(n,2),r=a[0],c=a[1],o=u.a.useState([]),l=Object(s.a)(o,2),d=l[0],b=l[1],m=u.a.useState(null),f=Object(s.a)(m,2),j=f[0],p=f[1],x=u.a.useState(!1),O=Object(s.a)(x,2),w=O[0],I=O[1],N=u.a.useState(-2),D=Object(s.a)(N,2),S=D[0],_=D[1],T=u.a.useState(!1),F=Object(s.a)(T,2),L=F[0],E=F[1],B=u.a.useState(""),R=Object(s.a)(B,2),z=R[0],V=R[1],U=u.a.useState(0),P=Object(s.a)(U,2),W=P[0],M=P[1],G=function(){var e=Object(k.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je(t,(function(e,t){_(t?-1:e)}));case 3:return n=e.sent,b(n),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),I(!0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();u.a.useEffect((function(){Object(k.a)(y.a.mark((function e(){var n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t);case 2:return n=e.sent,c(n),e.t0=M,e.next=7,A();case 7:if(e.t1=e.sent,(0,e.t0)(e.t1),!n){e.next=13;break}_(-1),e.next=21;break;case 13:return e.next=15,G();case 15:return a=e.sent,e.next=18,fe(t);case 18:r=e.sent,p(r),c(Y(t,r,a));case 21:case"end":return e.stop()}}),e)})))()}),[t]);var $=function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t);case 2:if(!e.sent){e.next=7;break}return E(!0),V("Already saved"),e.abrupt("return");case 7:if(M(W+1),j)try{q(t,j,d)}catch(n){E(!0),V("Failed to save vod")}case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(k.a)(y.a.mark((function e(){var t,n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&(t="VodID: ".concat(r.vodID,"\n").concat(r.comments.map((function(e){return"".concat(e.commenter,"[").concat(e.seconds,"s]: ").concat(e.message)})).join("\n")),n=document.createElement("a"),a=new Blob([t],{type:"text/plain;charset=utf-8"}),n.href=URL.createObjectURL(a),n.download="comments.txt",document.body.appendChild(n),n.click(),document.body.removeChild(n));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ne,{bookmarkNum:W}),Object(v.jsxs)(i.a,{maxWidth:"xl",children:[Object(v.jsx)("br",{}),w?Object(v.jsx)(xe,{}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Oe.a,{container:!0,spacing:3,children:-1===S&&r&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Oe.a,{item:!0,xs:12,md:6,lg:4,xl:3,children:Object(v.jsx)(_e,{vodInfo:r,elevation:5,downloadComments:J,saveVod:$,loadComments:G})}),Object(v.jsx)(Oe.a,{item:!0,xs:12,md:6,lg:8,xl:4,children:Object(v.jsx)(rt,{elevation:5,vodInfo:r})}),Object(v.jsx)(Oe.a,{item:!0,xs:12,xl:5,children:Object(v.jsx)(Je,{elevation:5,vodInfo:r})}),Object(v.jsx)(Oe.a,{item:!0,xs:12,children:Object(v.jsx)(Ge,{elevation:5,vodInfo:r})})]})}),S>=0&&Object(v.jsxs)(C.a,{component:"h2",variant:"h4",align:"center",className:e.loadedText,children:["Loaded ",S," comments..."]})]}),Object(v.jsx)(g,{message:z,setOpen:E,open:L})]})]})},it=n(501),st=n(495),lt=Object(o.a)((function(e){return{media:{height:0,paddingTop:"56.25%"},noSaved:{paddingTop:e.spacing(4),fontFamily:"'New Tegomin', serif"}}})),ut=function(){var e=u.a.useState(null),t=Object(s.a)(e,2),n=t[0],a=t[1],r=lt(),c=u.a.useState(0),o=Object(s.a)(c,2),l=o[0],b=o[1];u.a.useEffect((function(){Object(k.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:return t=e.sent,a(t),e.t0=b,e.next=7,Z();case 7:e.t1=e.sent,(0,e.t0)(e.t1);case 9:case"end":return e.stop()}}),e)})))()}),[]);var m=function(e){var t=e.cardInner;return Object(v.jsx)(Oe.a,{item:!0,xs:12,sm:12,md:6,lg:4,children:Object(v.jsx)(we.a,{elevation:5,children:t})})},f=Object(h.f)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ne,{bookmarkNum:l}),Object(v.jsxs)(i.a,{maxWidth:"xl",children:[Object(v.jsx)("br",{}),n&&Object(v.jsx)(Oe.a,{container:!0,spacing:3,children:n.map((function(e,t){return Object(v.jsx)(m,{cardInner:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ye.a,{avatar:Object(v.jsx)(d.a,{onClick:function(){window.open(n[t].channelInfo.url)},children:Object(v.jsx)(ke.a,{"aria-label":"avatar image",src:n[t].channelInfo.logo})}),title:Object(v.jsx)(C.a,{variant:"subtitle1",children:n[t].vodInfo.title}),subheader:Object(v.jsxs)(C.a,{variant:"subtitle2",children:["By"," ",Object(v.jsx)(Q.a,{href:n[t].channelInfo.url,target:"_blank",rel:"noreferrer",children:n[t].channelName})," ","at"," ",new Date(n[t].vodInfo.recorded_at).toDateString()]})}),Object(v.jsx)(Ie.a,{onClick:function(){window.open(n[t].vodInfo.url)},children:Object(v.jsx)(Ne.a,{image:n[t].vodInfo.preview.large,title:"Go to vod",className:r.media})}),Object(v.jsxs)(De.a,{children:[Object(v.jsx)(Ce.a,{size:"small",color:"primary",onClick:function(){f.push("/search/".concat(e.vodID)),f.go(0)},children:"Analytics"}),Object(v.jsx)(Ce.a,{size:"small",color:"primary",onClick:(c=e.vodID,o=t,function(){n&&(a(n.filter((function(e,t){return t!==o}))),J(c),b(l-1))}),children:"Remove vod"})]})]})},e.vodID);var c,o}))}),n&&0===n.length&&Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(C.a,{align:"center",component:"h1",variant:"h2",className:r.noSaved,children:"No Saved Vods"})})]})]})},dt=Object(o.a)((function(e){return{download:{background:e.palette.primary.main,margin:0,paddingTop:e.spacing(6),paddingBottom:e.spacing(10)},title:{color:"white",marginBottom:e.spacing(4)},mainDownload:{background:"white",color:e.palette.primary.main,"&:hover":{background:"#C4ACE6"},borderRadius:20,fontSize:"1.5em",textTransform:"none",marginBottom:e.spacing(15)},icon:{marginRight:e.spacing(1)}}})),ht=function(){var e=dt();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ne,{}),Object(v.jsx)("div",{className:e.download,children:Object(v.jsxs)(i.a,{maxWidth:"md",children:[Object(v.jsx)(C.a,{variant:"h2",component:"h1",className:e.title,children:"Get Streamalytics for Desktop"}),Object(v.jsx)(C.a,{variant:"h5",component:"h3",className:e.title,children:"Download clips of a VOD quickly and efficiently."}),Object(v.jsxs)(Ce.a,{variant:"outlined",className:e.mainDownload,onClick:function(){return window.open("https://github.com/JamesYL/TwitchClips/releases/download/v1.0.0/Streamalytics-1.0.0.exe")},children:[Object(v.jsx)(ee.a,{className:e.icon}),"Download for Windows"]}),Object(v.jsx)(C.a,{variant:"h2",component:"h2",className:e.title,children:"Why Download?"}),Object(v.jsx)(C.a,{variant:"h5",component:"h3",className:e.title,children:"There are plenty of alternatives for downloading Twitch VODs such as using online VOD downloaders, ffmpeg, or youtube-dl. While these are perfectly valid options, they are much slower."}),Object(v.jsx)(C.a,{variant:"h5",component:"h3",className:e.title,children:"This app downloads video packets directly from Twitch using all available internet bandwidth, and then combines that into a single video file through your own computer."}),Object(v.jsx)(C.a,{variant:"h5",component:"h3",className:e.title,children:"There are online VOD downloaders that do this exact process, but then downloading a video file that is potentially hundreds of megabytes or gigabytes big will be a bottleneck."})]})})]})},bt=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(st.a,{}),Object(v.jsx)(it.b,{injectFirst:!0,children:Object(v.jsxs)(h.c,{children:[Object(v.jsx)(h.a,{path:"/releases",children:Object(v.jsx)(ht,{})}),Object(v.jsx)(h.a,{path:"/search/:vodID",children:Object(v.jsx)(ot,{})}),Object(v.jsx)(h.a,{path:"/bookmarks",children:Object(v.jsx)(ut,{})}),Object(v.jsx)(h.a,{path:"/",children:Object(v.jsx)(re,{})})]})})]})},mt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,517)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},ft=n(80),jt=n(496),pt=n(271),vt=Object(pt.a)({palette:{primary:{main:"#7015c2"},secondary:{main:"#25e220"},background:{default:"azure",paper:"azure"}}});r.a.render(Object(v.jsx)(jt.a,{theme:vt,children:Object(v.jsx)(ft.a,{children:Object(v.jsx)(bt,{})})}),document.getElementById("root")),mt()}},[[428,1,2]]]);
//# sourceMappingURL=main.f6de4e40.chunk.js.map