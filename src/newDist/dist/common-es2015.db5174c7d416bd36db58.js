(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{FuD7:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));const n=[{title:"Dashboard",icon:"home-outline",link:"/pages/dashboard",home:!0},{title:"Admin",icon:"lock-outline",children:[{title:"Listing",link:"/admin/list"},{title:"Create",link:"/admin/create"}]},{title:"Subscription",icon:"lock-outline",children:[{title:"Create Subscription",link:"/pages/create-subscription"},{title:"Subscription List",link:"/pages/list-subscriptions"}]},{title:"Authentication",icon:"lock-outline",children:[{title:"Login",link:"/auth/login"},{title:"Register",link:"/auth/register"},{title:"Forgot Password",link:"/auth/forgot-password"},{title:"Reset Password",link:"/auth/reset-password"}]}]},ibrm:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("AytR"),r=i("fXoL"),o=i("tyNb"),s=i("tk/3");let a=(()=>{class t{constructor(t,e){this.routetingPage=t,this.http=e,this.baseUrl=n.a.baseUrl,this.imageUrl=n.a.imageUrl}navigatePage(t){this.routetingPage.navigate(["/"+t])}post(t,e,i){return 1==i?this.http.post(this.baseUrl+t,e,{headers:this.headers}):this.http.post(this.baseUrl+t,e)}get(t,e){return 1==e?this.http.get(this.baseUrl+t,{headers:this.headers}):this.http.get(this.baseUrl+t)}}return t.\u0275fac=function(e){return new(e||t)(r.ac(o.c),r.ac(s.a))},t.\u0275prov=r.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},lBUW:function(t,e,i){"use strict";i.r(e);var n=i("ofXK"),r=i("3Pt+"),o=i("tyNb"),s=i("FuD7"),a=i("fXoL"),l=i("k/qf");const u=[{path:"",component:(()=>{class t{constructor(){this.menu=s.a}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-pages"]],decls:2,vars:0,template:function(t,e){1&t&&(a.Wb(0,"ngx-full-view-layout"),a.Rb(1,"router-outlet"),a.Vb())},directives:[l.a,o.h],encapsulation:2}),t})(),children:[{path:"login",loadChildren:()=>Promise.all([i.e(0),i.e(9)]).then(i.bind(null,"qdgq")).then(t=>t.LoginModule)},{path:"register",loadChildren:()=>i.e(10).then(i.bind(null,"+iOL")).then(t=>t.RegisterModule)},{path:"reset-password",loadChildren:()=>Promise.all([i.e(0),i.e(11)]).then(i.bind(null,"AHOq")).then(t=>t.SetPasswordModule)},{path:"forgot-password",loadChildren:()=>Promise.all([i.e(0),i.e(8)]).then(i.bind(null,"dzbQ")).then(t=>t.ForgotPasswordModule)},{path:"",redirectTo:"/login",pathMatch:"full"}]}];let c=(()=>{class t{}return t.\u0275mod=a.Ob({type:t}),t.\u0275inj=a.Nb({factory:function(e){return new(e||t)},imports:[[o.g.forChild(u)],o.g]}),t})();var h=i("aceb"),d=i("vTDv");i.d(e,"AuthModule",(function(){return p}));let p=(()=>{class t{}return t.\u0275mod=a.Ob({type:t}),t.\u0275inj=a.Nb({factory:function(e){return new(e||t)},imports:[[n.c,r.b,o.g,h.M,c,d.a,h.p]]}),t})()}}]);