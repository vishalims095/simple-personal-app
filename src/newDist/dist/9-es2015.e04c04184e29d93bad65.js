(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{qdgq:function(n,e,o){"use strict";o.r(e);var t=o("ofXK"),i=o("3Pt+"),r=o("tyNb"),a=o("McNs"),c=o("ibrm"),s=o("fXoL"),g=o("aceb");function l(n,e){1&n&&(s.Wb(0,"p",25),s.Ac(1," Email is required! "),s.Vb())}function u(n,e){1&n&&(s.Wb(0,"p",25),s.Ac(1," Email should be the real one! "),s.Vb())}function b(n,e){if(1&n&&(s.Ub(0),s.yc(1,l,2,0,"p",24),s.yc(2,u,2,0,"p",24),s.Tb()),2&n){s.gc();const n=s.qc(12);s.Eb(1),s.mc("ngIf",null==n.errors?null:n.errors.required),s.Eb(1),s.mc("ngIf",null==n.errors?null:n.errors.pattern)}}function d(n,e){if(1&n){const n=s.Xb();s.Wb(0,"a",26),s.ec("click",(function(){return s.sc(n),s.gc().showPWD()})),s.Rb(1,"i",27),s.Vb()}}function p(n,e){if(1&n){const n=s.Xb();s.Wb(0,"a",26),s.ec("click",(function(){return s.sc(n),s.gc().showPWD()})),s.Rb(1,"i",28),s.Vb()}}function m(n,e){1&n&&(s.Wb(0,"p",25),s.Ac(1," Password is required! "),s.Vb())}function f(n,e){if(1&n&&(s.Wb(0,"p",25),s.Ac(1),s.Vb()),2&n){const n=s.gc(2);s.Eb(1),s.Dc(" Password should contain from ",n.getConfigValue("forms.validation.password.minLength")," to ",n.getConfigValue("forms.validation.password.maxLength")," characters ")}}function h(n,e){if(1&n&&(s.Ub(0),s.yc(1,m,2,0,"p",24),s.yc(2,f,2,2,"p",24),s.Tb()),2&n){s.gc();const n=s.qc(20);s.Eb(1),s.mc("ngIf",null==n.errors?null:n.errors.required),s.Eb(1),s.mc("ngIf",(null==n.errors?null:n.errors.minlength)||(null==n.errors?null:n.errors.maxlength))}}function M(n,e){if(1&n){const n=s.Xb();s.Wb(0,"nb-checkbox",29),s.ec("ngModelChange",(function(e){return s.sc(n),s.gc().user.rememberMe=e})),s.Ac(1,"Remember me"),s.Vb()}if(2&n){const n=s.gc();s.mc("ngModel",n.user.rememberMe)}}function C(n,e){if(1&n&&(s.Wb(0,"div"),s.Wb(1,"p",30),s.Wb(2,"b"),s.Ac(3),s.Vb(),s.Vb(),s.Vb()),2&n){const n=s.gc();s.Eb(3),s.Bc(n.message)}}const w=[{path:"",component:(()=>{class n extends a.d{constructor(n,e,o,t){super(e,"",o,t),this.MyCustomAuthService=n,this.email="",this.password="",this.error="false",this.message="",this.show=!1}ngOnInit(){}login(){console.log("login calling",this.user);let n=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email);return""==this.user.email||""==this.user.password?(this.error="true",void(this.message="Please enter valid email or password")):0==n?(this.error="true",void(this.message="Please enter valid email")):void this.MyCustomAuthService.post("login",this.user,null).subscribe(n=>{this.MyCustomAuthService.navigatePage("pages/dashboard")},n=>{this.error="true",this.message="Invalid Credential"})}showPWD(){this.show=!this.show}}return n.\u0275fac=function(e){return new(e||n)(s.Qb(c.a),s.Qb(a.b),s.Qb(s.h),s.Qb(r.c))},n.\u0275cmp=s.Kb({type:n,selectors:[["ngx-login"]],features:[s.Bb],decls:32,vars:19,consts:[[1,"login-page"],[1,"login-page-container"],[1,"login-logo"],["src","assets/images/logo.png",1,"logo"],[1,"sub-title"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group","email-group"],["for","input-email",1,"label"],["nbInput","","fullWidth","","name","email","id","input-email","pattern",".+@.+\\..+","placeholder","Email address","fieldSize","large","autofocus","",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],[4,"ngIf"],[1,"form-control-group","password-group"],[1,"label-with-link"],["for","input-password",1,"label"],[1,"password-block"],["nbInput","","fullWidth","","name","password","id","input-password","placeholder","Password","fieldSize","large",3,"ngModel","type","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],["class","eye-icon",3,"click",4,"ngIf"],["routerLink","/auth/forgot-password",1,"forgot-password","caption-2"],[1,"form-control-group","accept-group"],["name","rememberMe",3,"ngModel","ngModelChange",4,"ngIf"],["nbButton","","fullWidth","","status","primary","size","large",1,"submit-btn",3,"click"],["aria-label","Register",1,"another-action"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[1,"eye-icon",3,"click"],["aria-hidden","true",1,"fa","fa-eye-slash"],["aria-hidden","true",1,"fa","fa-eye"],["name","rememberMe",3,"ngModel","ngModelChange"],[2,"color","red"]],template:function(n,e){if(1&n&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Rb(3,"img",3),s.Wb(4,"p",4),s.Ac(5,"Hello! Log in with your email."),s.Vb(),s.Vb(),s.Wb(6,"form",5,6),s.ec("ngSubmit",(function(){return e.login()})),s.Wb(8,"div",7),s.Wb(9,"label",8),s.Ac(10,"Email address:"),s.Vb(),s.Wb(11,"input",9,10),s.ec("ngModelChange",(function(n){return e.user.email=n})),s.Vb(),s.yc(13,b,3,2,"ng-container",11),s.Vb(),s.Wb(14,"div",12),s.Wb(15,"span",13),s.Wb(16,"label",14),s.Ac(17,"Password: "),s.Vb(),s.Vb(),s.Wb(18,"div",15),s.Wb(19,"input",16,17),s.ec("ngModelChange",(function(n){return e.user.password=n})),s.Vb(),s.yc(21,d,2,0,"a",18),s.yc(22,p,2,0,"a",18),s.Wb(23,"a",19),s.Ac(24,"Forgot Password?"),s.Vb(),s.Vb(),s.yc(25,h,3,2,"ng-container",11),s.Vb(),s.Wb(26,"div",20),s.yc(27,M,2,1,"nb-checkbox",21),s.Vb(),s.yc(28,C,4,1,"div",11),s.Wb(29,"button",22),s.ec("click",(function(){return e.login()})),s.Ac(30," Log In "),s.Vb(),s.Vb(),s.Rb(31,"section",23),s.Vb(),s.Vb()),2&n){const n=s.qc(12),o=s.qc(20);s.Eb(11),s.mc("ngModel",e.user.email)("status",n.dirty?n.invalid?"danger":"success":"basic")("required",e.getConfigValue("forms.validation.email.required")),s.Fb("aria-invalid",!(!n.invalid||!n.touched)||null),s.Eb(2),s.mc("ngIf",n.invalid&&n.touched),s.Eb(6),s.mc("ngModel",e.user.password)("type",e.show?"text":"password")("status",o.dirty?o.invalid?"danger":"success":"basic")("required",e.getConfigValue("forms.validation.password.required"))("minlength",e.getConfigValue("forms.validation.password.minLength"))("maxlength",e.getConfigValue("forms.validation.password.maxLength")),s.Fb("aria-invalid",!(!o.invalid||!o.touched)||null),s.Eb(2),s.mc("ngIf",1==e.show),s.Eb(1),s.mc("ngIf",0==e.show),s.Eb(3),s.mc("ngIf",o.invalid&&o.touched),s.Eb(2),s.mc("ngIf",e.rememberMe),s.Eb(1),s.mc("ngIf","true"==e.error),s.Eb(1),s.Hb("btn-pulse",e.submitted)}},directives:[i.o,i.h,i.i,g.B,i.a,i.k,i.g,i.j,i.m,t.m,i.d,i.c,r.f,g.k,g.q],styles:[".login-page[_ngcontent-%COMP%]{background-image:url(admin-back.5b9ebc1e1ab12e8553de.jpg);height:100%;display:flex;background-size:100% 100%}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]{margin:auto;display:block;width:100%;max-width:600px;padding:30px;background:#fff;border-radius:10px}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]{text-align:center}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;text-align:center;max-width:100px}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{margin-bottom:10px;text-align:center}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .password-group[_ngcontent-%COMP%]   .password-block[_ngcontent-%COMP%]{position:relative}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .password-group[_ngcontent-%COMP%]   .password-block[_ngcontent-%COMP%]   a.eye-icon[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;color:#333}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .password-group[_ngcontent-%COMP%]   span.label-with-link[_ngcontent-%COMP%]{margin-top:10px;display:block}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .password-group[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]{color:#f70052;font-size:12px;margin-left:430px}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%]{padding:10px 0}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{background-color:#3393c7;color:#fff}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]{padding:10px 0}.login-page[_ngcontent-%COMP%]   .login-page-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   .register-btn[_ngcontent-%COMP%]{color:#f70052;font-size:12px}  .nb-theme-default [nbButton]:focus{border:0}  .nb-theme-default .status-success{border-color:#3393c7!important;color:#222b45!important}  .nb-theme-default .status-success:hover{border-color:#3393c7!important}  .layout-container .content .columns nb-layout-column{padding:0!important}  .nb-theme-default [nbButton]:focus{box-shadow:none}"]}),n})()}];let P=(()=>{class n{}return n.\u0275mod=s.Ob({type:n}),n.\u0275inj=s.Nb({factory:function(e){return new(e||n)},imports:[[r.g.forChild(w)],r.g]}),n})();var O=o("vTDv");o.d(e,"LoginModule",(function(){return _}));let _=(()=>{class n{}return n.\u0275mod=s.Ob({type:n}),n.\u0275inj=s.Nb({factory:function(e){return new(e||n)},imports:[[t.c,P,O.a,i.b,g.p,g.C,g.l,g.r]]}),n})()}}]);