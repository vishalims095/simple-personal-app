(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{qdgq:function(n,e,o){"use strict";o.r(e);var t=o("ofXK"),r=o("3Pt+"),i=o("tyNb"),a=o("McNs"),g=o("ibrm"),c=o("fXoL"),l=o("aceb");function s(n,e){1&n&&(c.Wb(0,"p",24),c.Bc(1," Email is required! "),c.Vb())}function u(n,e){1&n&&(c.Wb(0,"p",24),c.Bc(1," Email should be the real one! "),c.Vb())}function b(n,e){if(1&n&&(c.Ub(0),c.zc(1,s,2,0,"p",23),c.zc(2,u,2,0,"p",23),c.Tb()),2&n){c.gc();const n=c.rc(12);c.Eb(1),c.mc("ngIf",null==n.errors?null:n.errors.required),c.Eb(1),c.mc("ngIf",null==n.errors?null:n.errors.pattern)}}function d(n,e){1&n&&(c.Wb(0,"p",24),c.Bc(1," Password is required! "),c.Vb())}function p(n,e){if(1&n&&(c.Wb(0,"p",24),c.Bc(1),c.Vb()),2&n){const n=c.gc(2);c.Eb(1),c.Ec(" Password should contain from ",n.getConfigValue("forms.validation.password.minLength")," to ",n.getConfigValue("forms.validation.password.maxLength")," characters ")}}function m(n,e){if(1&n&&(c.Ub(0),c.zc(1,d,2,0,"p",23),c.zc(2,p,2,2,"p",23),c.Tb()),2&n){c.gc();const n=c.rc(21);c.Eb(1),c.mc("ngIf",null==n.errors?null:n.errors.required),c.Eb(1),c.mc("ngIf",(null==n.errors?null:n.errors.minlength)||(null==n.errors?null:n.errors.maxlength))}}function f(n,e){if(1&n){const n=c.Xb();c.Wb(0,"nb-checkbox",25),c.ec("ngModelChange",(function(e){return c.tc(n),c.gc().user.rememberMe=e})),c.Bc(1,"Remember me"),c.Vb()}if(2&n){const n=c.gc();c.mc("ngModel",n.user.rememberMe)}}function h(n,e){if(1&n&&(c.Wb(0,"div"),c.Wb(1,"p",26),c.Wb(2,"b"),c.Bc(3),c.Vb(),c.Vb(),c.Vb()),2&n){const n=c.gc();c.Eb(3),c.Cc(n.message)}}const M=[{path:"",component:(()=>{class n extends a.d{constructor(n,e,o,t){super(e,"",o,t),this.MyCustomAuthService=n,this.email="",this.password="",this.error="false",this.message=""}ngOnInit(){}login(){console.log("login calling",this.user),this.MyCustomAuthService.post("login",this.user,null).subscribe(n=>{this.MyCustomAuthService.navigatePage("pages/dashboard")},n=>{this.error="true",this.message="Invalid Credential"})}}return n.\u0275fac=function(e){return new(e||n)(c.Qb(g.a),c.Qb(a.b),c.Qb(c.h),c.Qb(i.c))},n.\u0275cmp=c.Kb({type:n,selectors:[["ngx-login"]],features:[c.Bb],decls:32,vars:16,consts:[[1,"login-page"],[1,"login-page-container"],[1,"login-logo"],["src","assets/images/logo.png",1,"logo"],[1,"sub-title"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group","email-group"],["for","input-email",1,"label"],["nbInput","","fullWidth","","name","email","id","input-email","pattern",".+@.+\\..+","placeholder","Email address","fieldSize","large","autofocus","",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],[4,"ngIf"],[1,"form-control-group","password-group"],[1,"label-with-link"],["for","input-password",1,"label"],["routerLink","/auth/forgot-password",1,"forgot-password","caption-2"],["nbInput","","fullWidth","","name","password","type","password","id","input-password","placeholder","Password","fieldSize","large",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],[1,"form-control-group","accept-group"],["name","rememberMe",3,"ngModel","ngModelChange",4,"ngIf"],["nbButton","","fullWidth","","status","primary","size","large",1,"submit-btn",3,"click"],["aria-label","Register",1,"another-action"],["routerLink","../register",1,"text-link","register-btn"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],["name","rememberMe",3,"ngModel","ngModelChange"],[2,"color","red"]],template:function(n,e){if(1&n&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Rb(3,"img",3),c.Wb(4,"p",4),c.Bc(5,"Hello! Log in with your email."),c.Vb(),c.Vb(),c.Wb(6,"form",5,6),c.ec("ngSubmit",(function(){return e.login()})),c.Wb(8,"div",7),c.Wb(9,"label",8),c.Bc(10,"Email address:"),c.Vb(),c.Wb(11,"input",9,10),c.ec("ngModelChange",(function(n){return e.user.email=n})),c.Vb(),c.zc(13,b,3,2,"ng-container",11),c.Vb(),c.Wb(14,"div",12),c.Wb(15,"span",13),c.Wb(16,"label",14),c.Bc(17,"Password: "),c.Vb(),c.Wb(18,"a",15),c.Bc(19,"Forgot Password?"),c.Vb(),c.Vb(),c.Wb(20,"input",16,17),c.ec("ngModelChange",(function(n){return e.user.password=n})),c.Vb(),c.zc(22,m,3,2,"ng-container",11),c.Vb(),c.Wb(23,"div",18),c.zc(24,f,2,1,"nb-checkbox",19),c.Vb(),c.zc(25,h,4,1,"div",11),c.Wb(26,"button",20),c.ec("click",(function(){return e.login()})),c.Bc(27," Log In "),c.Vb(),c.Vb(),c.Wb(28,"section",21),c.Bc(29," Don't have an account? "),c.Wb(30,"a",22),c.Bc(31," Register"),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&n){const n=c.rc(12),o=c.rc(21);c.Eb(11),c.mc("ngModel",e.user.email)("status",n.dirty?n.invalid?"danger":"success":"basic")("required",e.getConfigValue("forms.validation.email.required")),c.Fb("aria-invalid",!(!n.invalid||!n.touched)||null),c.Eb(2),c.mc("ngIf",n.invalid&&n.touched),c.Eb(7),c.mc("ngModel",e.user.password)("status",o.dirty?o.invalid?"danger":"success":"basic")("required",e.getConfigValue("forms.validation.password.required"))("minlength",e.getConfigValue("forms.validation.password.minLength"))("maxlength",e.getConfigValue("forms.validation.password.maxLength")),c.Fb("aria-invalid",!(!o.invalid||!o.touched)||null),c.Eb(2),c.mc("ngIf",o.invalid&&o.touched),c.Eb(2),c.mc("ngIf",e.rememberMe),c.Eb(1),c.mc("ngIf","true"==e.error),c.Eb(1),c.Hb("btn-pulse",e.submitted)}},directives:[r.o,r.h,r.i,l.C,r.a,r.k,r.g,r.j,r.m,t.m,i.f,r.d,r.c,l.k,l.q],styles:[".login-page[_ngcontent-%COMP%]{background-image:url(admin-back.5b9ebc1e1ab12e8553de.jpg);height:100%;display:flex;background-size:100% 100%}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]{margin:auto;display:block;width:100%;max-width:600px;padding:30px;background:#fff;border-radius:10px}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]{text-align:center}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;text-align:center;max-width:100px}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{margin-bottom:10px;text-align:center}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .password-group[_ngcontent-%COMP%]   span.label-with-link[_ngcontent-%COMP%]{margin-top:10px;display:block}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .password-group[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]{color:#f70052;font-size:12px;margin-left:5px}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%]{padding:10px 0}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{background-color:#3393c7;color:#fff}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]{padding:10px 0}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   .register-btn[_ngcontent-%COMP%]{color:#f70052;font-size:12px}  .nb-theme-default .status-success{border-color:#3393c7!important;color:#222b45!important}  .nb-theme-default .status-success:hover{border-color:#3393c7!important}  .layout-container .content .columns nb-layout-column{padding:0!important}"]}),n})()}];let C=(()=>{class n{}return n.\u0275mod=c.Ob({type:n}),n.\u0275inj=c.Nb({factory:function(e){return new(e||n)},imports:[[i.g.forChild(M)],i.g]}),n})();var P=o("vTDv");o.d(e,"LoginModule",(function(){return w}));let w=(()=>{class n{}return n.\u0275mod=c.Ob({type:n}),n.\u0275inj=c.Nb({factory:function(e){return new(e||n)},imports:[[t.c,C,P.a,r.b,l.p,l.D,l.l,l.r]]}),n})()}}]);