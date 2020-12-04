(window["webpackJsonpreact-login-signup-ui-template"]=window["webpackJsonpreact-login-signup-ui-template"]||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(58),s=a.n(l),c=a(13),o=(a(77),a(78),a(79),a(1)),i=a(7),u=a(8),m=a(10),d=a(9),b=a(11),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={email:null,password:null},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"logout",value:function(){fetch("/api/v2/users/tokens",{method:"DELETE",body:JSON.stringify(this.state)}).then((function(e){return localStorage.setItem("jwt",e.headers.map.authorization)}))}},{key:"login",value:function(){fetch("/api/v2/users/tokens",{method:"POST",body:JSON.stringify(this.state)}).then((function(e){return localStorage.setItem("jwt",e.headers.map.authorization)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",null,"Login"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("br",null),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password",onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",onClick:function(){e.login()}},"Sign In"),r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",onClick:function(){e.logout()}},"Logout"),r.a.createElement("div",null))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={id:null,email:null,first_name:null,last_name:null,jobs_count:null,active:null,slack_username:null},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"signup",value:function(){var e=localStorage.getItem("jwt");fetch("/api/v2/users",{headers:{Authorization:e},method:"POST",body:JSON.stringify(this.state)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",null,"User Creation"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("br",null),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("br",null),r.a.createElement("input",{type:"first_name",className:"form-control",placeholder:"Enter First Name",onChange:function(t){return e.setState({first_name:t.target.value})}})),r.a.createElement("div",{className:"mt-6"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"last_name",className:"form-control",placeholder:"Enter Last Name",onChange:function(t){return e.setState({last_name:t.target.value})}})),r.a.createElement("div",{className:"mt-6"},r.a.createElement("label",null,"User ID"),r.a.createElement("input",{type:"id",className:"form-control",placeholder:"Enter User id",onChange:function(t){return e.setState({id:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Count"),r.a.createElement("input",{type:"job_count",className:"form-control",placeholder:"Enter Job Count",onChange:function(t){return e.setState({job_count:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Active"),r.a.createElement("input",{type:"active",className:"form-control",placeholder:"Enter True or False",onChange:function(t){return e.setState({active:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Slack Username"),r.a.createElement("input",{type:"slack_username",className:"form-control",placeholder:"Enter Slack username",onChange:function(t){return e.setState({slack_username:t.target.value})}})),r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",onClick:function(){e.signup()}},"Create User"),r.a.createElement("div",null))}}]),t}(n.Component),p=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={id:null,email:null,first_name:null,last_name:null,jobs_count:null,active:null,slack_username:null},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"edit",value:function(){var e=localStorage.getItem("jwt");fetch("/api/v2/users/:id",{headers:{Authorization:e},method:"PATCH",body:JSON.stringify(this.state)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",null,"Edit User Details"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," User Id"),r.a.createElement("input",{type:"id",className:"form-control",placeholder:"Enter user ID",onChange:function(t){return e.setState({id:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("br",null),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"first_name",className:"form-control",placeholder:"Enter First Name",onChange:function(t){return e.setState({first_name:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"last_name",className:"form-control",placeholder:"Enter Last Name",onChange:function(t){return e.setState({last_name:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Count"),r.a.createElement("input",{type:"job_count",className:"form-control",placeholder:"Enter Job Count",onChange:function(t){return e.setState({job_count:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Active"),r.a.createElement("input",{type:"active",className:"form-control",placeholder:"Enter True or False",onChange:function(t){return e.setState({active:t.target.value})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Slack Username"),r.a.createElement("input",{type:"slack_username",className:"form-control",placeholder:"Enter Slack username",onChange:function(t){return e.setState({slack_username:t.target.value})}})),r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",onClick:function(){e.edit()}},"Update Details"),r.a.createElement("div",null))}}]),t}(n.Component),h=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={email:null,password:null,items:[]},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"showuserindex",value:function(){var e=this,t=localStorage.getItem("jwt");fetch("/api/v2/users",{headers:{Authorization:t},method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.users})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state.items;return"undefined"===localStorage.getItem("jwt")?r.a.createElement("div",null,'"PLease Login!'):r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",null,"All Users"),r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",onClick:function(){e.showuserindex()}},"Show User Index"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},"Email: ",e.email,r.a.createElement("br",null)," User ID: ",e.id,r.a.createElement("br",null)," Jobs Count: ",e.jobs_count,r.a.createElement("br",null)," Active state:",e.active)}))))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={id:null,items:[]},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"showuserindex",value:function(){var e=this,t=localStorage.getItem("jwt");fetch("/api/v2/users/:id",{headers:{Authorization:t},method:"POST",body:JSON.stringify(this.state)}).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.users})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this;return 0===this.state.items.length?r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",null,"Show User Details"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," User ID"),r.a.createElement("br",null),r.a.createElement("input",{type:"id",className:"form-control",placeholder:"Enter user id",onChange:function(t){return e.setState({id:t.target.value})}})),r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",onClick:function(){e.showuserindex()}},"Get user details")):r.a.createElement("div",{className:"form-group"},r.a.createElement("h1",null,"User Details"),r.a.createElement("p",null,"User ID :",r.a.createElement("br",null)," ",this.state.items.id,r.a.createElement("br",null),"Email:",r.a.createElement("br",null),this.state.items.email,r.a.createElement("br",null),"First Name:",r.a.createElement("br",null),this.state.items.first_name,r.a.createElement("br",null),"Last Name:",r.a.createElement("br",null),this.state.items.last_name,r.a.createElement("br",null),"Active:",r.a.createElement("br",null),this.state.items.active,r.a.createElement("br",null),"Job Count: ",r.a.createElement("br",null),this.state.items.jobs_count,r.a.createElement("br",null),"Slack Username:",r.a.createElement("br",null)," ",this.state.items.slack_username))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={id:null,email:null,first_name:null,last_name:null,jobs_count:null,active:null,slack_username:null},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"delete",value:function(){var e=localStorage.getItem("jwt");fetch("/api/v2/users/:id",{headers:{Authorization:e},method:"DELETE",body:JSON.stringify(this.state)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-group"},r.a.createElement("h3",null,"Delete User"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," User Id"),r.a.createElement("br",null),r.a.createElement("input",{type:"id",className:"form-control",placeholder:"Enter user ID",onChange:function(t){return e.setState({id:t.target.value})}})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",onClick:function(){e.delete()}},"Delete User"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null))}}]),t}(n.Component);var N=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement(c.b,{className:"navbar-brand",to:"/sign-in"},"Skand Frontend Tasks!"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/sign-in"},"Sign in")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/sign-up"},"User Creation")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/edit"},"Edit")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/delete"},"Delete")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/userindex"},"User Index")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:"/userdetails"},"User Details")))))),r.a.createElement("div",{className:"outer"},r.a.createElement("div",{className:"inner"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:f}),r.a.createElement(o.a,{path:"/sign-in",component:f}),r.a.createElement(o.a,{path:"/sign-up",component:E}),r.a.createElement(o.a,{exact:!0,path:"/userdetails",component:v}),r.a.createElement(o.a,{path:"/userindex",component:h}),r.a.createElement(o.a,{path:"/delete",component:g}),r.a.createElement(o.a,{path:"/edit",component:p}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(4),y=a(60),j=a(61),O=a.n(j);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var _=function(e){e.namespace="/api/v2",e.get("/users",(function(e,t){var a=t.requestHeaders.authorization;return"undefined"!==a&&a?e.users.all():new k.b(401,{},{message:"Please Login"})})),e.post("/users/:id",(function(e,t){var a=t.requestHeaders.authorization;if("undefined"===a||!a)return new k.b(401,{},{message:"Please Login"});var n=JSON.parse(t.requestBody).id,r=e.users.find(n);return r||new k.b(500,{},{message:"No user with id: ".concat(t.params.id," found")})})),e.post("/users",(function(e,t){var a=t.requestHeaders.authorization;if("undefined"===a||!a)return new k.b(401,{},{message:"Please Login"});var n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},JSON.parse(t.requestBody));return e.users.create(n)})),e.patch("/users/:id",(function(e,t){var a=t.requestHeaders.authorization;if("undefined"===a||!a)return new k.b(401,{},{message:"Please Login"});var n=JSON.parse(t.requestBody),r=n.id,l=e.users.find(r);return l?l.update(n):new k.b(500,{},{message:"No user with id: ".concat(t.params.id," found")})})),e.delete("/users/:id",(function(e,t){var a=t.requestHeaders.authorization,n=JSON.parse(t.requestBody).id,r=e.users.find(n);return"undefined"!==a&&a?r?(r.destroy(),new k.b(200,{},{})):new k.b(500,{},{message:"No user with id: ".concat(t.params.id," found")}):new k.b(401,{},{message:"Please Login"})})),e.post("/users/tokens",(function(e,t){var a={email:"test@skand.io",password:"password"},n=JSON.parse(t.requestBody);return!!a&&O()(n,a)?new k.b(200,{Authorization:"123abc456def789ghi"},"ok"):new k.b(401,{},{message:"Email does not match the password"})})),e.delete("/users/tokens",(function(){return new k.b(200,{"Content-Type":"application/json; charset=utf-8"},{})}))},w=a(71),C=JSON.parse(JSON.stringify(w)),U=new k.c({models:{users:k.a},seeds:function(e){C.data.forEach((function(t){e.schema.users.create(t)}))}});_(U);s.a.render(r.a.createElement(c.a,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e){e.exports=JSON.parse('{"data":[{"id":"5f07599680b803abb0997c15","email":"test1@skand.io","first_name":"Test","last_name":"User 1","jobs_count":1,"active":"true","slack_username":"U57V3NH8W"},{"id":"5f27e597364664a7f3770f92","email":"random@gmail.com","first_name":"Random","last_name":"Gmail","jobs_count":12,"active":"true","slack_username":"ES9V3NH2A"},{"id":"5f27e588ef01b4a7d615c377","email":"size@skand.io","first_name":"Size","last_name":"ASDF","jobs_count":30,"active":"false","slack_username":null},{"id":"5f27e51be071e6a778ed6bbd","email":"ml@skand.io","first_name":"Machine","last_name":"Learning","jobs_count":0,"active":"true","slack_username":"ES9V3AH2A"},{"id":"5f27e481c7956fa728038b15","email":"YAhOO@yahoo.com","first_name":"Yahoo","last_name":"Com","jobs_count":1,"active":"true","slack_username":null},{"id":"5f21101d2ec106dfbe585335","email":"acceleration@skand.io","first_name":"Accelerate","last_name":"Velocity","jobs_count":2,"active":"true","slack_username":""},{"id":"5f2110142ec106dfbe585331","email":"community@skand.io","first_name":"Community","last_name":"Friendly","jobs_count":0,"active":"true","slack_username":""}]}')},72:function(e,t,a){e.exports=a(153)},77:function(e,t,a){},79:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.048bd9c7.chunk.js.map