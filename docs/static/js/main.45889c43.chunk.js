(this["webpackJsonpredux-react-5"]=this["webpackJsonpredux-react-5"]||[]).push([[0],{20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(7),r=n.n(a),i=(n(19),n(20),n(3)),s=n(2),d=n(9),o=n(4),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(i.a)(t,2),a=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},l=function(e){var t=e.target;r(Object(o.a)(Object(o.a)({},a),{},Object(d.a)({},t.name,t.value)))};return[a,l,s]},u="[CRUD] Agregar Item",j="[CRUD] Leyendo Items",b="[CRUD] Actualizar Item",m="[CRUD] Eliminar Item",O=function(e){return{type:u,payload:e}},p=function(e){return{type:m,payload:e}},h=function(e,t){return function(n){n(f(e,t))}},f=function(e,t){return{type:b,payload:{id:e,desc:t}}},x=n(1),g=function(){var e=Object(s.b)(),t=l({description:""}),n=Object(i.a)(t,3),c=n[0].description,a=n[1],r=n[2];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:"Agregar Tarea"}),Object(x.jsx)("hr",{}),Object(x.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!(c.trim().length<=1)){var n,a={id:(new Date).getTime(),desc:c,done:!1};e((n=a,function(e){e(O(n))})),r()}},children:[Object(x.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Agregar tarea...",autoComplete:"off",value:c,onChange:a}),Object(x.jsx)("div",{className:"d-grid gap-2",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-1",children:"Agregar Tarea"})})]})]})},v=function(e){var t=e.id,n=e.desc,c=Object(s.b)(),a=l({description:n}),r=Object(i.a)(a,3),d=r[0].description,o=r[1],u=r[2];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(h(t,d)),u()},className:"description",children:[Object(x.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Editar tarea...",autoComplete:"off",value:d,onChange:o}),Object(x.jsx)("div",{className:"d-grid gap-2",children:Object(x.jsx)("button",{type:"submit",className:"btn btn-success",children:"Editar"})})]})})},y=function(){var e=Object(s.c)((function(e){return e.crud})),t=Object(s.b)(),n=function(e){var n;t((n=e,function(e){e(p(n))}))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:"Listas de tareas"}),Object(x.jsx)("hr",{}),Object(x.jsx)("ul",{className:"list-group list-group-flush",children:e.map((function(e,c){return Object(x.jsx)("li",{className:"list-group-item ",children:Object(x.jsx)("div",{className:"marco rounded animate__animated animate__backInRight",children:e.done?Object(x.jsx)(v,{id:e.id,desc:e.desc}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{className:"description ".concat(e.done&&"complete"),onClick:function(){return n=e.id,c=e.desc,void t(h(n,c));var n,c},children:[c+1,". ",e.desc]}),Object(x.jsx)("button",{className:"btn btn-danger",onClick:function(){return n(e.id)},children:"eliminar"})]})})},e.id)}))})]})},N=(n(26),function(){return Object(x.jsxs)("div",{className:"container animate__animated animate__pulse",children:[Object(x.jsx)("h1",{className:"p-1 text-center",children:" CRUD Chanchito Feliz "}),Object(x.jsx)("hr",{}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-sm-12 col-md-5 mb-5",children:Object(x.jsx)(g,{})}),Object(x.jsx)("div",{className:"col-sm-12 col-md-7",children:Object(x.jsx)(y,{})})]})]})}),_=n(5),C=n(13),D=n(14),w=[{id:1234,desc:"Aprender Python",done:!1},{id:12346,desc:"Aprender Vue",done:!1}],E=Object(_.b)({crud:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return[].concat(Object(D.a)(e),[t.payload]);case m:return e.filter((function(e){return e.id!==t.payload}));case b:return console.log(t.payload),e.map((function(e){return e.id===t.payload.id?Object(o.a)(Object(o.a)({},e),{},{done:!e.done,desc:t.payload.desc}):e}));case j:default:return e}}}),A="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.c,I=Object(_.d)(E,A(Object(_.a)(C.a))),R=function(){return Object(x.jsx)(s.a,{store:I,children:Object(x.jsx)(N,{})})};r.a.render(Object(x.jsx)(R,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.45889c43.chunk.js.map