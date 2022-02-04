(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{117:function(e,t,n){},157:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var c=n(38),a=n.n(c),o=n(42),i=n(231),r=n(232),s=n(252),l=n(254),d=n(255),u=n(256),j=n(236),O=n(237),b=n(18),h=(n(157),n(2));function x(e){var t=e.children,n=e.window,c=Object(i.a)({target:n?n():void 0});return Object(h.jsx)(r.a,{appear:!1,direction:"down",in:!c,children:t})}var f,v=function(){var e=Object(b.f)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{children:Object(h.jsx)(s.a,{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(d.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(h.jsx)(j.a,{})}),Object(h.jsx)(u.a,{onClick:function(){return e.push("/")},variant:"h6",component:"a",className:"header-link",sx:{flexGrow:1},children:"Todo List"}),Object(h.jsx)(d.a,{size:"large",color:"inherit",children:Object(h.jsx)(O.a,{})})]})})}),Object(h.jsx)(l.a,{})]})},m=(n(167),function(){return Object(h.jsx)("footer",{className:"footer",children:Object(h.jsx)(l.a,{children:Object(h.jsx)(u.a,{variant:"body1",color:"white",children:"\xa9 2021 Todo List"})})})});!function(e){e.ROOT="/",e.TODO_DETAIL="/todo/:id",e.NOT_FOUND="*"}(f||(f={}));var p,g=n(125),T=n.n(g),D=n(257),k=(n(168),function(e){var t=e.icon,n=e.message;return Object(h.jsxs)("div",{className:"empty-container",children:[t,Object(h.jsx)(u.a,{variant:"h5",component:"h5",children:n})]})}),C=(n(169),function(){var e=Object(b.f)();return Object(h.jsxs)("div",{className:"not-found-container",children:[Object(h.jsx)(k,{icon:Object(h.jsx)(T.a,{}),message:"Page not found"}),Object(h.jsx)(D.a,{onClick:function(){return e.push("/")},children:"Go to main page"})]})}),N=n(130),y=n.n(N),E=n(98),L=n(129),w=n.n(L),S=n(246),P=n(243),_=n(250),I=n(259),Q=n(260),F=n(241),A=n(261),G=n(258),M=n(0);!function(e){e.PENDING="PENDING",e.COMPLETED="COMPLETED"}(p||(p={}));var U,z=n(41);!function(e){e.TODO="/todo",e.FIND_TODO="/todo/{id}",e.CREATE_TODO="/todo",e.UPDATE_TODO="/todo/{id}",e.DELETE_TODO="/todo/{id}"}(U||(U={}));var R=n(81),B=n(82),J=n(126),q=n.n(J).a.create({baseURL:"http://localhost:3001"}),H=function(){function e(){Object(R.a)(this,e)}return Object(B.a)(e,null,[{key:"get",value:function(e){return q.get(e)}},{key:"post",value:function(e,t){return q.post(e,t)}},{key:"put",value:function(e,t){return q.put(e,t)}},{key:"delete",value:function(e){return q.delete(e)}}]),e}(),K=function(){return H.get(U.TODO).then((function(e){return e.data}))},V=function(e){return H.post(U.CREATE_TODO,e).then((function(e){return e.data}))},W=function(e){var t=e.id.toString(),n=U.DELETE_TODO.replace("{id}",t);return H.put(n,e).then((function(e){return e.data}))},X=function(e){var t=e.id.toString(),n=U.DELETE_TODO.replace("{id}",t);return H.delete(n).then((function(e){return e.data}))},Y=function(){var e=Object(z.useQueryClient)(),t=Object(b.g)(),n=Object(z.useQuery)("todoList",K,{enabled:!t.id}),c=n.data,a=n.isLoading,o=Object(z.useQuery)("todo",(function(){return function(e){var t=U.FIND_TODO.replace("{id}",e);return H.get(t).then((function(e){return e.data}))}(t.id)}),{enabled:!!t.id});return{todo:o.data,isLoading:o.isLoading||a,todoList:c,createTodo:Object(z.useMutation)(V,{onSuccess:function(){e.invalidateQueries("todoList"),e.invalidateQueries("todo")}}).mutate,removeTodo:Object(z.useMutation)(X,{onSuccess:function(){e.invalidateQueries("todoList"),e.invalidateQueries("todo")}}).mutate,updateTodo:Object(z.useMutation)(W,{onSuccess:function(){e.invalidateQueries("todoList"),e.invalidateQueries("todo")}}).mutate}},Z=n(245),$=function(e){var t=e.label,n=e.date,c=Object(M.useMemo)((function(){return function(e){return Object(Z.a)(new Date(e),{addSuffix:!0})}(n)}),[n]);return Object(h.jsxs)(u.a,{variant:"caption",color:"text.secondary",children:[t,"\xa0",c]})},ee=n(248),te=n(128),ne=n.n(te),ce=n(127),ae=n.n(ce),oe=function(e){return e.isPending?Object(h.jsx)(ee.a,{icon:Object(h.jsx)(ae.a,{}),label:"Pending",color:"warning",variant:"outlined"}):Object(h.jsx)(ee.a,{icon:Object(h.jsx)(ne.a,{}),label:"Completed",color:"success",variant:"outlined"})},ie=(n(117),n(249)),re=function(e){var t=e.todo,n=e.type,c=void 0===n?"small":n,a=Y(),i=a.removeTodo,r=a.updateTodo,s=Object(M.useMemo)((function(){return t.status===p.PENDING}),[t.status]),l=Object(M.useCallback)((function(){return s?p.COMPLETED:p.PENDING}),[s]),d=Object(M.useCallback)((function(){return i(t)}),[i,t]),j=Object(M.useCallback)((function(){var e=l(),n=Object(E.a)(Object(E.a)({},t),{},{status:e});r(n)}),[t,l,r]),O=function(){return Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsx)(S.a,{defaultChecked:!s,onClick:j}),Object(h.jsx)(P.a,{title:"See details",children:Object(h.jsx)(_.a,{component:o.b,to:"/todo/".concat(t.id),className:"card-link",color:"primary",children:Object(h.jsx)("p",{className:"label",style:{textDecoration:s?"none":"line-through"},children:t.title})})}),Object(h.jsx)(P.a,{title:"Delete",children:Object(h.jsx)(_.a,{color:"error",onClick:d,children:Object(h.jsx)(w.a,{})})})]})},b=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(I.a,{component:"img",alt:"todo list",height:"200",image:"https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}),Object(h.jsxs)(Q.a,{children:[Object(h.jsxs)(F.a,{direction:"row",justifyContent:"space-between",children:[Object(h.jsx)(F.a,{direction:"row",alignItems:"flex-end",children:Object(h.jsx)(u.a,{variant:"h5",component:"div",sx:{textDecoration:s?"none":"line-through"},children:t.title})}),Object(h.jsx)(oe,{isPending:s})]}),Object(h.jsxs)(F.a,{children:[Object(h.jsx)($,{label:"Created",date:t.createdAt}),Object(h.jsx)($,{label:"Updated",date:t.updatedAt})]}),Object(h.jsx)(u.a,{variant:"h6",color:"text.secondary",sx:{marginTop:3},children:t.description})]}),Object(h.jsxs)(A.a,{children:[Object(h.jsx)(_.a,{size:"small",onClick:d,children:"Delete Todo"}),Object(h.jsx)(_.a,{size:"small",onClick:j,children:s?"Complete Todo":"Uncomplete Todo"})]})]})};return Object(h.jsx)(G.a,{className:"card",children:"small"===c?Object(h.jsx)(O,{}):Object(h.jsx)(b,{})})};re.Skeleton=function(e){var t,n=e.type,c=void 0===n?"small":n;return Object(h.jsx)(h.Fragment,{children:null===(t=[1])||void 0===t?void 0:t.map((function(e){return Object(h.jsx)(G.a,{className:"card",children:Object(h.jsx)("div",{style:{width:"100%",height:"small"===c?"64px":"406px"},children:Object(h.jsx)(ie.a,{animation:"wave",sx:{width:"100%",height:"100%"},variant:"rectangular"})})})}))})};var se=re,le=n(131),de=n.n(le),ue=(n(188),function(){var e=Object(b.f)(),t=Y(),n=t.todo;return t.isLoading?Object(h.jsx)(se.Skeleton,{type:"large"}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(u.a,{variant:"h5",component:"a",onClick:function(){return e.goBack()},className:"back-link",sx:{flexGrow:1},children:[Object(h.jsx)(y.a,{sx:{fontSize:20}}),"Go back"]}),n?Object(h.jsx)(se,{todo:n,type:"large"}):Object(h.jsx)(k,{icon:Object(h.jsx)(de.a,{}),message:"No data found"})]})}),je=n(262),Oe=n(251),be=function(){var e=Y(),t=e.todoList;return e.isLoading?Object(h.jsx)(se.Skeleton,{}):Object(h.jsx)(Oe.a,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(h.jsx)(je.a,{children:Object(h.jsx)(se,{todo:e})},e.id)}))})},he=n(14),xe=n(244),fe=(n(189),function(){var e=Y().createTodo,t=Object(M.useState)(),n=Object(he.a)(t,2),c=n[0],a=n[1],o=Object(M.useState)(!1),i=Object(he.a)(o,2),r=i[0],s=i[1],l=Object(M.useState)(),d=Object(he.a)(l,2),u=d[0],j=d[1],O=Object(M.useState)(!1),b=Object(he.a)(O,2),x=b[0],f=b[1],v=Object(M.useCallback)((function(e){var t=e.target.value;s(t.length<3),a(t)}),[]),m=Object(M.useCallback)((function(e){var t=e.target.value;f(t.length<3),j(t)}),[]),p=Object(M.useCallback)((function(t){if(t.preventDefault(),c&&u){var n={title:c,description:u};a(void 0),j(void 0),e(n)}}),[e,u,c]);return Object(h.jsxs)("form",{onSubmit:p,className:"form",children:[Object(h.jsx)(xe.a,{className:"text-field",variant:"standard",value:null!==c&&void 0!==c?c:"",error:r,helperText:r&&"Title must have more than 3 characters",placeholder:"Today I have to...",onChange:v}),Object(h.jsx)(xe.a,{className:"text-field",variant:"standard",value:null!==u&&void 0!==u?u:"",error:x,helperText:x&&"Descrition must have more than 3 characters",placeholder:"Description",onChange:m}),Object(h.jsx)(_.a,{className:"button",variant:"contained",type:"submit",value:"Submit",disabled:!c||!u||r||x,children:"Add"})]})}),ve=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(fe,{}),Object(h.jsx)(be,{})]})},me=function(){var e={routes:[{key:"welcome",url:f.ROOT,Component:ve},{key:"todoDetail",url:f.TODO_DETAIL,Component:ue},{key:"notFound",url:f.NOT_FOUND,Component:C}]}.routes;return Object(h.jsx)(b.c,{children:e.map((function(e){var t=e.Component,n=e.url,c=e.key;return Object(h.jsx)(b.a,{path:n,exact:!0,children:Object(h.jsx)(t,{})},c)}))})},pe=(n(191),function(e){var t=e.children;return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"content",children:t})})}),ge=(n(192),function(){return Object(h.jsxs)(o.a,{basename:"/todo-list",children:[Object(h.jsx)(v,{}),Object(h.jsx)(pe,{children:Object(h.jsx)(me,{})}),Object(h.jsx)(m,{})]})}),Te=new z.QueryClient;a.a.render(Object(h.jsx)(z.QueryClientProvider,{client:Te,children:Object(h.jsx)(o.a,{children:Object(h.jsx)(ge,{})})}),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.c4b995c1.chunk.js.map