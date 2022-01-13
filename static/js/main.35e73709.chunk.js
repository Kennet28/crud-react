(this["webpackJsonpcrud-react"]=this["webpackJsonpcrud-react"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(18),s=a.n(n),i=(a(24),a(25),a(9)),l=a(10),d=a(12),o=a(11),h=a(7),j="https://workersapi.000webhostapp.com/",b=a(0),m=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).dataDelete=function(e){fetch(j+"?delete="+e).then((function(e){return e.json()})).then((function(e){r.dataCharge()})).catch(console.log)},r.state={chargeData:!1,workers:[]},r}return Object(l.a)(a,[{key:"dataCharge",value:function(){var e=this;fetch(j).then((function(e){return e.json()})).then((function(t){e.setState({chargeData:!0,workers:t})})).catch(console.log)}},{key:"componentDidMount",value:function(){this.dataCharge()}},{key:"render",value:function(){var e=this,t=this.state,a=t.chargeData,r=t.workers;return a?Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)(h.b,{to:"/create",className:"btn btn-success",children:"Create a new worker"})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title",children:"List of workers"}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{className:"table-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Actions"})]})}),Object(b.jsx)("tbody",{children:r.map((function(t){return 0!==t.success?(console.log(t),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.id}),Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:t.email}),Object(b.jsx)("td",{children:Object(b.jsxs)("div",{className:"btn-group",role:"group","aria-label":"",children:[Object(b.jsx)(h.b,{to:"/Edit/"+t.id,className:"btn btn-warning",children:"Edit"}),Object(b.jsx)("button",{onClick:function(){return e.dataDelete(t.id)},className:"btn btn-danger",children:"Delete"})]})})]},t.id)):Object(b.jsxs)("tr",{className:"text-danger",children:[Object(b.jsx)("td",{children:"No data"}),Object(b.jsx)("td",{children:"No data"}),Object(b.jsx)("td",{children:"No data"}),Object(b.jsx)("td",{children:"No data"})]},"")}))})]})})]}),Object(b.jsx)("div",{className:"card-footer text-muted"})]}):Object(b.jsx)("div",{children:"Loading..."})}}]),a}(c.a.Component),u=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).sendData=function(e){var t=r.state,a=t.name,c=t.email;e.preventDefault();var n={nombre:a,correo:c},s=[];if(a||s.push("error_name"),c||s.push("error_email"),r.setState({errors:s}),s.length>0)return!1;fetch(j+"?create=1",{method:"POST",body:JSON.stringify(n)}).then((function(e){r.props.history.push("/")})).catch(console.log)},r.changeValue=function(e){var t=r.state;t[e.target.name]=e.target.value,r.setState({state:t,errors:[]})},r.state={name:"",email:"",errors:[]},r}return Object(l.a)(a,[{key:"verifyError",value:function(e){return-1!==this.state.errors.indexOf(e)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:"Workers"}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("form",{onSubmit:this.sendData,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"",children:"Name:"}),Object(b.jsx)("input",{type:"text",name:"name",id:"name",onChange:this.changeValue,value:t,className:(this.verifyError("error_name")?"is-invalid":"")+" form-control",placeholder:"","aria-describedby":"helpId"}),Object(b.jsx)("small",{id:"helpId",className:"invalid-feedback",children:"Write a name"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"",children:"Email:"}),Object(b.jsx)("input",{type:"email",name:"email",id:"email",onChange:this.changeValue,value:a,className:(this.verifyError("error_email")?"is-invalid":"")+" form-control",placeholder:"","aria-describedby":"helpId"}),Object(b.jsx)("small",{id:"helpId",className:"invalid-feedback",children:"Write a email"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"btn-group",role:"group","aria-label":"",children:[Object(b.jsx)("button",{type:"submit",className:"btn btn-success",children:"Add new worker"}),Object(b.jsx)(h.b,{to:"/",className:"btn btn-primary",children:"Cancel"})]})]})}),Object(b.jsx)("div",{className:"card-footer text-muted"})]})}}]),a}(c.a.Component),O=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).sendData=function(e){var t=r.state.worker,a=t.id,c=t.name,n=t.email;e.preventDefault();var s=[],i={id:a,nombre:c,correo:n};if(c||s.push("error_name"),n||s.push("error_email"),r.setState({errors:s}),s.length>0)return!1;fetch(j+"?update=1",{method:"POST",body:JSON.stringify(i)}).then((function(e){r.props.history.push("/")})).catch(console.log)},r.changeValue=function(e){var t=r.state.worker;t[e.target.name]=e.target.value,r.setState({worker:t,errors:[]})},r.state={chargeData:!1,worker:[],errors:[]},r}return Object(l.a)(a,[{key:"verifyError",value:function(e){return-1!==this.state.errors.indexOf(e)}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch(j+"?read="+t).then((function(e){return e.json()})).then((function(t){e.setState({chargeData:!0,worker:t[0]})})).catch(console.log)}},{key:"render",value:function(){var e=this.state,t=e.chargeData,a=e.worker;return t?Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header",children:"Edit workers"}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("form",{onSubmit:this.sendData,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"",children:"Key:"}),Object(b.jsx)("input",{type:"text",readOnly:!0,name:"id",id:"id",value:a.id,onChange:this.changeValue,className:"form-control",placeholder:"","aria-describedby":"helpId"}),Object(b.jsx)("small",{id:"helpId",className:"text-muted",children:"Worker's identification"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"",children:"Name:"}),Object(b.jsx)("input",{type:"text",name:"name",id:"name",onChange:this.changeValue,value:a.name,className:(this.verifyError("error_name")?"is-invalid":"")+" form-control",placeholder:"","aria-describedby":"helpId"}),Object(b.jsx)("small",{id:"helpId",className:"invalid-feedback",children:"Write a name"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"",children:"Email:"}),Object(b.jsx)("input",{type:"email",name:"email",id:"email",onChange:this.changeValue,value:a.email,className:(this.verifyError("error_email")?"is-invalid":"")+" form-control",placeholder:"","aria-describedby":"helpId"}),Object(b.jsx)("small",{id:"helpId",className:"invalid-feedback",children:"Write a email"})]}),Object(b.jsxs)("div",{className:"btn-group",role:"group","aria-label":"",children:[Object(b.jsx)("button",{type:"submit",className:"btn btn-success",children:"Save"}),Object(b.jsx)(h.b,{to:"/",className:"btn btn-primary",children:"Cancel"})]})]})}),Object(b.jsx)("div",{className:"card-footer text-muted"})]}):Object(b.jsx)("div",{children:"Loading..."})}}]),a}(c.a.Component),x=a(2);var v=function(){return Object(b.jsxs)(h.a,{children:[Object(b.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(b.jsx)("div",{className:"nav navbar-nav",children:Object(b.jsx)(h.b,{className:"nav-item nav-link active",to:"/",children:"Sistema"})})}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{exact:!0,path:"/",component:m}),Object(b.jsx)(x.a,{path:"/create",component:u}),Object(b.jsx)(x.a,{path:"/Edit/:id",component:O})]})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};a(35);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),p()}},[[36,1,2]]]);
//# sourceMappingURL=main.35e73709.chunk.js.map