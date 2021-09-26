(this["webpackJsonplive-interact"]=this["webpackJsonplive-interact"]||[]).push([[0],{197:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(27),s=n.n(r),i=(n(197),n(62)),o=n(14),u=n.n(o),j=n(22);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var d=Object(i.b)("counter/fetchCount",function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(i.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(d.pending,(function(e){e.status="loading"})).addCase(d.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),h=b.actions,p=(h.increment,h.decrement,h.incrementByAmount,b.reducer),O=Object(i.c)({name:"user",initialState:{name:"",id:"",score:0,status:"visitor"},reducers:{userLogin:function(e,t){var n;e.id=null!==(n=t.payload._id)&&void 0!==n?n:"",e.name=t.payload.name,e.status="user",e.score=0},getUser:function(e){return{id:e.id,name:e.name,status:e.status,score:e.score}}}}),x=O.actions,m=(x.userLogin,x.getUser,function(e){return e.user}),f=O.reducer,v=Object(i.a)({reducer:{counter:p,user:f}}),g=n(89);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(24),w=(n(82),n(293)),I=n(149),k=n(297),C=n(80),S=n(47),q=n(295),A=n(46),N=n(296),R=function(){return Object(g.b)()},z=g.c,H=n(302),L=n(171),F=n(172),T=n(79),P=n.n(T),E=function(){function e(){Object(L.a)(this,e)}return Object(F.a)(e,[{key:"postUser",value:function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post("/v1/login",{name:t.name,password:t.password,verification_code:t.verification_code});case 2:if(205!==(n=e.sent).status){e.next=6;break}return a={result:!1,name:""},e.abrupt("return",a);case 6:return console.log(n),c={result:!0,name:t.name},e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"postRoom",value:function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.getRandomKey(8),e.next=3,P.a.post("/v1/rooms",{owner:n.id,roomId:a,questions:t});case 3:return c=e.sent,e.abrupt("return",c.data.room);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getRoom",value:function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("/v1/rooms/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.rooms);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllOwnRooms",value:function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null!==(n=t.id)&&void 0!==n?n:"",e.next=3,P.a.get("/v1/owner-rooms/".concat(a));case 3:return c=e.sent,e.abrupt("return",c.data.rooms);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateRoom",value:function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t._id,e.next=3,P.a.put("/v1/rooms/".concat(n),{questions:t.questions,_id:n,roomId:t.roomId,owner:t.owner});case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRandomKey",value:function(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n="",a=0;a<e;a++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}}]),e}(),U=n(31),_=n(5);n(135);var B=n(26),Q=n(148),M=n(299);var W=n(147),G=n(298),J=n(300);var K=n(301);var V=n(191),D=n(294);s.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(g.a,{store:v,children:Object(_.jsx)(U.a,{children:Object(_.jsxs)(B.c,{children:[Object(_.jsx)(B.a,{exact:!0,path:"/",component:function(){R();var e=z(m),t=w.a.Header,n=w.a.Content,c=w.a.Footer,r=Object(a.useState)(!1),s=Object(y.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(""),d=Object(y.a)(l,2),b=(d[0],d[1]),h=Object(a.useState)(""),p=Object(y.a)(h,2),O=p[0],x=p[1];function f(){return v.apply(this,arguments)}function v(){return(v=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(!1);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return new E,Object(a.useEffect)((function(){"visitor"===e.status&&o(!0)}),[]),Object(_.jsxs)(w.a,{children:[Object(_.jsxs)(t,{style:{position:"fixed",zIndex:1,width:"100%"},children:[Object(_.jsx)("div",{className:"logo"}),Object(_.jsxs)(I.a,{theme:"dark",mode:"horizontal",children:[Object(_.jsx)(I.a.Item,{children:e.name},"1"),Object(_.jsx)(U.b,{to:{pathname:"/dashboard"},children:Object(_.jsx)(I.a.Item,{children:"\u500b\u4eba\u7e3d\u89bd"},"2")})]})]}),Object(_.jsxs)(n,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:[Object(_.jsxs)(k.a,{style:{margin:"16px 0"},children:[Object(_.jsx)(k.a.Item,{children:"Home"}),Object(_.jsx)(k.a.Item,{children:"App"})]}),Object(_.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:[Object(_.jsxs)(C.a,{children:[Object(_.jsx)(S.a,{span:8}),Object(_.jsxs)(S.a,{span:8,children:["Enter Room:",Object(_.jsx)(q.a,{size:"middle",placeholder:"\u8f38\u5165\u4ee3\u865f",onChange:function(e){return x(e.target.value)}}),Object(_.jsx)(U.b,{to:{pathname:"/question-room/"+O},children:Object(_.jsx)(A.a,{children:"Go"})})]}),Object(_.jsx)(S.a,{span:8})]}),Object(_.jsx)("br",{}),Object(_.jsxs)(C.a,{children:[Object(_.jsx)(S.a,{span:8}),Object(_.jsx)(S.a,{span:8,children:Object(_.jsx)(U.b,{to:{pathname:"/create-room"},children:Object(_.jsx)(A.a,{block:!0,children:"Create Room"})})}),Object(_.jsx)(S.a,{span:8})]})]}),Object(_.jsx)(N.a,{title:"Login",visible:i,onCancel:f,footer:[Object(_.jsx)(A.a,{type:"primary",onClick:f,children:"Submit"},"submit")],children:Object(_.jsx)(q.a,{size:"middle",placeholder:"\u8f38\u5165\u59d3\u540d",prefix:Object(_.jsx)(H.a,{}),onChange:function(e){return b(e.target.value)}})})]}),Object(_.jsx)(c,{style:{textAlign:"center"},children:"Live Interact"})]})}}),Object(_.jsx)(B.a,{exact:!0,path:"/create-room",component:function(){R();var e=z(m),t=w.a.Header,n=w.a.Content,c=w.a.Footer,r=Object(a.useState)(!1),s=Object(y.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(""),d=Object(y.a)(l,2),b=d[0],h=d[1],p=Object(a.useState)([]),O=Object(y.a)(p,2),x=O[0],f=O[1],v=Object(a.useState)(""),g=Object(y.a)(v,2),H=g[0],L=g[1],F=Object(a.useState)(""),T=Object(y.a)(F,2),P=T[0],B=T[1],W=Object(a.useState)([]),G=Object(y.a)(W,2),J=G[0],K=G[1],V=Object(a.useState)(""),D=Object(y.a)(V,2),X=(D[0],D[1],new E);function Y(){return(Y=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:J.length.toString(),option:P,selectedList:[]},e.next=3,K((function(e){return[].concat(Object(Q.a)(e),[t])}));case 3:B("");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(){o(!1)};function $(){return($=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={question:H,choices:J},e.next=3,f((function(e){return[].concat(Object(Q.a)(e),[t])}));case 3:K([]),B(""),L("");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(){return(ee=Object(j.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.postRoom(x,e);case 2:n=t.sent,h(n.roomId),o(!0),L(""),f([]),K([]),B("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var te=function(e){return Object(_.jsx)("div",{children:Object(_.jsx)("p",{children:e.option})})};return Object(a.useEffect)((function(){console.log(e)}),[]),Object(_.jsxs)(w.a,{children:[Object(_.jsxs)(t,{style:{position:"fixed",zIndex:1,width:"100%"},children:[Object(_.jsx)("div",{className:"logo"}),Object(_.jsxs)(I.a,{theme:"dark",mode:"horizontal",children:[Object(_.jsx)(I.a.Item,{children:e.name},"1"),Object(_.jsx)(U.b,{to:{pathname:"/dashboard"},children:Object(_.jsx)(I.a.Item,{children:"\u500b\u4eba\u7e3d\u89bd"},"2")}),Object(_.jsx)(U.b,{to:{pathname:"/"},children:Object(_.jsx)(I.a.Item,{children:"\u9996\u9801"},"3")})]})]}),Object(_.jsxs)(n,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:[Object(_.jsxs)(k.a,{style:{margin:"16px 0"},children:[Object(_.jsx)(k.a.Item,{children:"Home"}),Object(_.jsx)(k.a.Item,{children:"App"})]}),Object(_.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:Object(_.jsxs)(C.a,{children:[Object(_.jsx)(S.a,{span:6,children:Object(_.jsx)(M.a,{title:"\u5df2\u8a2d\u5b9a\u6e05\u55ae",children:x.map((function(e){return t=e,Object(_.jsx)("div",{children:Object(_.jsx)(M.a,{title:t.question,children:t.choices.map((function(e){return te(e)}))})});var t}))})}),Object(_.jsx)(S.a,{span:3}),Object(_.jsxs)(S.a,{span:12,children:[Object(_.jsxs)(M.a,{title:"\u65b0\u589e\u984c\u76ee",children:[Object(_.jsx)("p",{children:"\u984c\u76ee\u6558\u8ff0\uff1a"}),Object(_.jsx)(q.a,{size:"middle",value:H,onChange:function(e){return L(e.target.value)}}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{}),Object(_.jsx)("p",{children:"\u65b0\u589e\u9078\u9805\uff1a"}),Object(_.jsx)("div",{children:J.map((function(e){return te(e)}))}),Object(_.jsx)(q.a,{size:"middle",value:P,onChange:function(e){return B(e.target.value)}}),Object(_.jsx)(A.a,{onClick:function(){return Y.apply(this,arguments)},children:"\u6dfb\u52a0\u9078\u9805"}),Object(_.jsx)(A.a,{onClick:function(){K([])},children:"\u522a\u9664\u6240\u6709\u9078\u9805"}),Object(_.jsx)(A.a,{onClick:function(){return $.apply(this,arguments)},children:"\u9001\u51fa\u984c\u76ee"})]}),Object(_.jsx)(A.a,{onClick:function(){return ee.apply(this,arguments)},children:"\u9001\u51fa\u6240\u6709\u984c\u76ee\u8a2d\u5b9a"})]}),Object(_.jsx)(S.a,{span:3})]})}),Object(_.jsx)(N.a,{title:"Room ID",visible:i,onCancel:Z,footer:[Object(_.jsx)(A.a,{type:"primary",onClick:Z,children:"Close"},"submit")],children:Object(_.jsx)("h2",{children:b})})]}),Object(_.jsx)(c,{style:{textAlign:"center"},children:"Live Interact"})]})}}),Object(_.jsx)(B.a,{exact:!0,path:"/login",component:function(){var e=w.a.Header,t=w.a.Content,n=w.a.Footer,c=Object(a.useState)(!1),r=Object(y.a)(c,2),s=(r[0],r[1],Object(a.useState)("")),i=Object(y.a)(s,2),o=(i[0],i[1],Object(a.useState)("")),l=Object(y.a)(o,2),d=(l[0],l[1],new E);function b(e){return h.apply(this,arguments)}function h(){return(h=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.postUser(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:!1===e.sent.result?(console.log("Fail "),O()):console.log("Success ");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){}),[]);var O=function(){V.a.open({message:"\u767b\u5165\u5931\u6557",description:"\u5e33\u865f\u8a3b\u518a\u5931\u6557\u6216\u662f\u5bc6\u78bc\u6709\u8aa4",onClick:function(){console.log("Notification Clicked!")}})};return Object(_.jsxs)(w.a,{children:[Object(_.jsxs)(e,{style:{position:"fixed",zIndex:1,width:"100%"},children:[Object(_.jsx)("div",{className:"logo"}),Object(_.jsxs)(I.a,{theme:"dark",mode:"horizontal",children:[Object(_.jsx)(I.a.Item,{},"1"),Object(_.jsx)(U.b,{to:{pathname:"/dashboard"},children:Object(_.jsx)(I.a.Item,{children:"\u500b\u4eba\u7e3d\u89bd"},"2")})]})]}),Object(_.jsxs)(t,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:[Object(_.jsxs)(k.a,{style:{margin:"16px 0"},children:[Object(_.jsx)(k.a.Item,{children:"Home"}),Object(_.jsx)(k.a.Item,{children:"App"})]}),Object(_.jsx)("div",{children:Object(_.jsxs)(D.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:8},initialValues:{remember:!0},onFinish:function(e){return p.apply(this,arguments)},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[Object(_.jsx)(D.a.Item,{label:"Username",name:"name",rules:[{required:!0,message:"Please input your username!"}],children:Object(_.jsx)(q.a,{})}),Object(_.jsx)(D.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(_.jsx)(q.a.Password,{})}),Object(_.jsx)(D.a.Item,{label:"Verification Code",name:"verification_code",rules:[{required:!0,message:"Please input your verification code!"}],children:Object(_.jsx)(q.a,{})}),Object(_.jsx)(D.a.Item,{wrapperCol:{offset:10,span:16},children:Object(_.jsx)(A.a,{type:"ghost",htmlType:"submit",children:"Login / Register"})})]})})]}),Object(_.jsx)(n,{style:{textAlign:"center"},children:"Live Interact"})]})}}),Object(_.jsx)(B.a,{path:"/question-room/:roomId",component:function(){var e=Object(B.f)().roomId,t=(R(),z(m)),n=w.a.Header,c=w.a.Content,r=w.a.Footer,s=W.a.TabPane,i=Object(a.useState)({id:"",option:"",selectedList:[]}),o=Object(y.a)(i,2),l=o[0],d=o[1],b=Object(a.useState)([]),h=Object(y.a)(b,2),p=(h[0],h[1],{roomId:"",questions:[],owner:t.id}),O=Object(a.useState)(p),x=Object(y.a)(O,2),f=x[0],v=x[1],g=Object(a.useState)(!1),q=Object(y.a)(g,2),N=q[0],H=q[1],L=new E,F=function(e,t){return Object(_.jsx)(G.a,{value:e,disabled:N,children:e.option})};function T(){return(T=Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.getRoom(e).then((function(e){e.length>0&&v(e[0])}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return Q.apply(this,arguments)}function Q(){return(Q=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.updateRoom(f);case 2:H(!0);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null!==(t=parseInt(l.id))&&void 0!==t?t:-1,console.log(n),-1!==n&&v(f),e.next=5,P();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){console.log(t),console.log(e),function(){T.apply(this,arguments)}()}),[]),Object(_.jsxs)(w.a,{children:[Object(_.jsxs)(n,{style:{position:"fixed",zIndex:1,width:"100%"},children:[Object(_.jsx)("div",{className:"logo"}),Object(_.jsxs)(I.a,{theme:"dark",mode:"horizontal",children:[Object(_.jsx)(I.a.Item,{children:t.name},"1"),Object(_.jsx)(U.b,{to:{pathname:"/dashboard"},children:Object(_.jsx)(I.a.Item,{children:"\u500b\u4eba\u7e3d\u89bd"},"2")}),Object(_.jsx)(U.b,{to:{pathname:"/"},children:Object(_.jsx)(I.a.Item,{children:"\u9996\u9801"},"3")})]})]}),Object(_.jsxs)(c,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:[Object(_.jsxs)(k.a,{style:{margin:"16px 0"},children:[Object(_.jsx)(k.a.Item,{children:"Home"}),Object(_.jsx)(k.a.Item,{children:"App"})]}),Object(_.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:Object(_.jsxs)(C.a,{children:[Object(_.jsx)(S.a,{span:6}),Object(_.jsx)(S.a,{span:3}),Object(_.jsxs)(S.a,{span:12,children:[Object(_.jsx)(W.a,{children:f.questions.map((function(e,t){return function(e,t){console.log(e);var n="Q".concat(t+1);return Object(_.jsxs)(s,{tab:n,children:[Object(_.jsxs)("h4",{children:["Question: ",e.question]}),Object(_.jsx)(G.a.Group,{onChange:function(e){return d(e.target.value)},children:Object(_.jsx)(J.b,{direction:"vertical",children:e.choices.map((function(e,t){return F(e,t)}))})})]},t)}(e,t)}))}),Object(_.jsx)("br",{}),Object(_.jsx)(A.a,{onClick:function(){return M.apply(this,arguments)},disabled:N,children:"Submit"})]}),Object(_.jsx)(S.a,{span:3})]})})]}),Object(_.jsx)(r,{style:{textAlign:"center"},children:"Live Interact"})]})}}),Object(_.jsx)(B.a,{exact:!0,path:"/dashboard",component:function(){R();var e=z(m),t=Object(a.useState)([]),n=Object(y.a)(t,2),c=n[0],r=n[1],s=w.a.Header,i=w.a.Content,o=w.a.Footer,l=W.a.TabPane,d=new E;function b(){return(b=Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.getAllOwnRooms(e).then((function(e){return r(e)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=function(e,t){return Object(_.jsxs)("div",{children:[Object(_.jsxs)("h4",{children:[t+1,") ",e.option]}),Object(_.jsx)("h5",{children:"Who choice this?"}),Object(_.jsx)("div",{children:e.selectedList.map((function(e){return p(e)}))})]})},p=function(e){return Object(_.jsx)(K.a,{children:e.name})};return Object(a.useEffect)((function(){console.log(e),function(){b.apply(this,arguments)}()}),[]),Object(_.jsxs)(w.a,{children:[Object(_.jsxs)(s,{style:{position:"fixed",zIndex:1,width:"100%"},children:[Object(_.jsx)("div",{className:"logo"}),Object(_.jsxs)(I.a,{theme:"dark",mode:"horizontal",children:[Object(_.jsx)(I.a.Item,{children:e.name},"1"),Object(_.jsx)(U.b,{to:{pathname:"/dashboard"},children:Object(_.jsx)(I.a.Item,{children:"\u500b\u4eba\u7e3d\u89bd"},"2")}),Object(_.jsx)(U.b,{to:{pathname:"/"},children:Object(_.jsx)(I.a.Item,{children:"\u9996\u9801"},"3")})]})]}),Object(_.jsxs)(i,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:[Object(_.jsxs)(k.a,{style:{margin:"16px 0"},children:[Object(_.jsx)(k.a.Item,{children:"Home"}),Object(_.jsx)(k.a.Item,{children:"App"})]}),Object(_.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:Object(_.jsxs)(C.a,{children:[Object(_.jsx)(S.a,{span:6}),Object(_.jsx)(S.a,{span:3}),Object(_.jsx)(S.a,{span:12,children:Object(_.jsx)(W.a,{children:c.map((function(e,t){return function(e,t){var n="Q".concat(t);return Object(_.jsxs)(l,{tab:n,children:[Object(_.jsxs)("h2",{children:["Question: ",e.questions[0].question]}),Object(_.jsx)("h3",{children:"Answer:"}),void 0===e.questions?"":e.questions[0].choices.map((function(e,t){return h(e,t)}))]},t)}(e,t)}))})}),Object(_.jsx)(S.a,{span:3})]})})]}),Object(_.jsx)(o,{style:{textAlign:"center"},children:"Live Interact"})]})}})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[290,1,2]]]);
//# sourceMappingURL=main.9a0df8f8.chunk.js.map