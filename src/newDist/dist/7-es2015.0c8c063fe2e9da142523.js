(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{dzbQ:function(t,e,o){"use strict";o.r(e);var n=o("ofXK"),r=o("vTDv"),a=o("aceb"),s=o("tyNb"),i=o("McNs"),c=o("ibrm"),g=o("fXoL");function l(t,e){if(1&t&&(g.Wb(0,"div"),g.Wb(1,"p",12),g.Wb(2,"b"),g.Bc(3),g.Vb(),g.Vb(),g.Vb()),2&t){const t=g.gc();g.Eb(3),g.Cc(t.message)}}const b=[{path:"",component:(()=>{class t extends i.f{constructor(t,e,o,n){super(e,"",o,n),this.MyCustomAuthService=t,this.error="false",this.message="",this.email=""}ngOnInit(){}forgetPassword(){let t=$("#email").val();if(0==/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t))return this.error="true",void(this.message="Please enter valid email");console.log("forgotPassword",$("#email").val()),this.MyCustomAuthService.post("forgetPassword",{email:t},null).subscribe(t=>{localStorage.setItem("token",t.token),this.MyCustomAuthService.navigatePage("auth/reset-password")},t=>{this.error="true",this.message="Invalid Credential"})}}return t.\u0275fac=function(e){return new(e||t)(g.Qb(c.a),g.Qb(i.b),g.Qb(g.h),g.Qb(s.c))},t.\u0275cmp=g.Kb({type:t,selectors:[["ngx-forgot-password"]],features:[g.Bb],decls:20,vars:1,consts:[[1,"forget-password-page"],[1,"forget-password-container"],[1,"forget-logo"],["src","assets/images/logo.png",1,"logo"],[1,"sub-title"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","id","input-email","name","email","placeholder","Email address","fullWidth","","fieldSize","large","id","email"],[4,"ngIf"],["size","large","type","button",1,"btn","btn-primary",2,"width","100%",3,"click"],["aria-label","Register",1,"another-action"],["routerLink","../register",1,"text-link","register-btn"],[2,"color","red"]],template:function(t,e){1&t&&(g.Wb(0,"div",0),g.Wb(1,"div",1),g.Wb(2,"div",2),g.Rb(3,"img",3),g.Wb(4,"h1"),g.Bc(5,"Forget Your Password"),g.Vb(),g.Wb(6,"p",4),g.Bc(7,"Enter Your email and we'll send you a link to reset your password."),g.Vb(),g.Vb(),g.Wb(8,"form"),g.Wb(9,"div",5),g.Wb(10,"label",6),g.Bc(11,"Email address:"),g.Vb(),g.Rb(12,"input",7),g.Vb(),g.zc(13,l,4,1,"div",8),g.Wb(14,"button",9),g.ec("click",(function(){return e.forgetPassword()})),g.Bc(15,"Reset Password"),g.Vb(),g.Vb(),g.Wb(16,"section",10),g.Bc(17," Don't have an account? "),g.Wb(18,"a",11),g.Bc(19," Register"),g.Vb(),g.Vb(),g.Vb(),g.Vb()),2&t&&(g.Eb(13),g.mc("ngIf","true"==e.error))},directives:[a.C,n.m,s.f],styles:[".forget-password-page[_ngcontent-%COMP%]{background-image:url(admin-back.5b9ebc1e1ab12e8553de.jpg);height:100%;display:flex;background-size:100% 100%}.forget-password-page[_ngcontent-%COMP%]   .forget-password-container[_ngcontent-%COMP%]{margin:auto;display:block;width:100%;max-width:600px;padding:30px;background:#fff;border-radius:10px}.forget-password-page[_ngcontent-%COMP%]   .forget-logo[_ngcontent-%COMP%]{text-align:center}.forget-password-page[_ngcontent-%COMP%]   .forget-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;text-align:center;max-width:100px}.forget-password-page[_ngcontent-%COMP%]   .forget-logo[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{margin-bottom:10px;text-align:center}.forget-password-page[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]{margin-bottom:10px}.forget-password-page[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]{padding:10px 0}.forget-password-page[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{color:#f70052;font-size:12px}  .nb-theme-default .status-success{border-color:#3393c7!important;color:#222b45!important}  .nb-theme-default .status-success:hover{border-color:#3393c7!important}  .layout-container .content .columns nb-layout-column{padding:0!important}  .nb-theme-default nb-card{border:0!important}"]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=g.Ob({type:t}),t.\u0275inj=g.Nb({factory:function(e){return new(e||t)},imports:[[s.g.forChild(b)],s.g]}),t})();o.d(e,"ForgotPasswordModule",(function(){return p}));let p=(()=>{class t{}return t.\u0275mod=g.Ob({type:t}),t.\u0275inj=g.Nb({factory:function(e){return new(e||t)},imports:[[n.c,d,a.p,a.D,a.l,a.r,r.a]]}),t})()}}]);