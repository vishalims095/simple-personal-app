(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+iOL":function(e,n,r){"use strict";r.r(n);var t=r("ofXK"),o=r("3Pt+"),i=r("vTDv"),a=r("tyNb"),l=r("McNs"),s=r("fXoL"),c=r("aceb");function g(e,n){1&e&&(s.Wb(0,"p",29),s.Bc(1," Full name is required! "),s.Vb())}function u(e,n){if(1&e&&(s.Wb(0,"p",29),s.Bc(1),s.Vb()),2&e){const e=s.gc(2);s.Eb(1),s.Ec(" Full name should contains from ",e.getConfigValue("forms.validation.fullName.minLength")," to ",e.getConfigValue("forms.validation.fullName.maxLength")," characters ")}}function d(e,n){if(1&e&&(s.Ub(0),s.zc(1,g,2,0,"p",28),s.zc(2,u,2,2,"p",28),s.Tb()),2&e){s.gc();const e=s.rc(12);s.Eb(1),s.mc("ngIf",null==e.errors?null:e.errors.required),s.Eb(1),s.mc("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function b(e,n){1&e&&(s.Wb(0,"p",29),s.Bc(1," Email is required! "),s.Vb())}function m(e,n){1&e&&(s.Wb(0,"p",29),s.Bc(1," Email should be the real one! "),s.Vb())}function f(e,n){if(1&e&&(s.Ub(0),s.zc(1,b,2,0,"p",28),s.zc(2,m,2,0,"p",28),s.Tb()),2&e){s.gc();const e=s.rc(18);s.Eb(1),s.mc("ngIf",null==e.errors?null:e.errors.required),s.Eb(1),s.mc("ngIf",null==e.errors?null:e.errors.pattern)}}function p(e,n){1&e&&(s.Wb(0,"p",29),s.Bc(1," Password is required! "),s.Vb())}function h(e,n){if(1&e&&(s.Wb(0,"p",29),s.Bc(1),s.Vb()),2&e){const e=s.gc(2);s.Eb(1),s.Ec(" Password should contain from ",e.getConfigValue("forms.validation.password.minLength")," to ",e.getConfigValue("forms.validation.password.maxLength")," characters ")}}function v(e,n){if(1&e&&(s.Ub(0),s.zc(1,p,2,0,"p",28),s.zc(2,h,2,2,"p",28),s.Tb()),2&e){s.gc();const e=s.rc(25);s.Eb(1),s.mc("ngIf",null==e.errors?null:e.errors.required),s.Eb(1),s.mc("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function C(e,n){1&e&&(s.Wb(0,"p",29),s.Bc(1," Password confirmation is required! "),s.Vb())}function V(e,n){1&e&&(s.Wb(0,"p",29),s.Bc(1," Password does not match the confirm password. "),s.Vb())}function M(e,n){if(1&e&&(s.Ub(0),s.zc(1,C,2,0,"p",28),s.zc(2,V,2,0,"p",28),s.Tb()),2&e){s.gc();const e=s.rc(34),n=s.rc(25);s.Eb(1),s.mc("ngIf",null==e.errors?null:e.errors.required),s.Eb(1),s.mc("ngIf",n.value!=e.value&&!(null!=e.errors&&e.errors.required))}}function w(e,n){if(1&e){const e=s.Xb();s.Wb(0,"div",30),s.Wb(1,"nb-checkbox",31),s.ec("ngModelChange",(function(n){return s.tc(e),s.gc().user.terms=n})),s.Bc(2," Agree to "),s.Wb(3,"a",32),s.Wb(4,"strong"),s.Bc(5,"Terms & Conditions"),s.Vb(),s.Vb(),s.Vb(),s.Vb()}if(2&e){const e=s.gc();s.Eb(1),s.mc("ngModel",e.user.terms)("required",e.getConfigValue("forms.register.terms"))}}let W=(()=>{class e extends l.e{register(){}ngOnInit(){}getConfigValue(e){}}return e.\u0275fac=function(n){return P(n||e)},e.\u0275cmp=s.Kb({type:e,selectors:[["ngx-register"]],features:[s.Bb],decls:45,vars:28,consts:[[1,"register-page"],[1,"register-page-container"],[1,"register-logo"],["src","assets/images/logo.png",1,"logo"],[1,"sub-title"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-name",1,"label"],["nbInput","","id","input-name","name","fullName","placeholder","Full name","autofocus","","fullWidth","","fieldSize","large",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["fullName","ngModel"],[4,"ngIf"],["for","input-email",1,"label"],["nbInput","","id","input-email","name","email","pattern",".+@.+..+","placeholder","Email address","fullWidth","","fieldSize","large",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],["for","input-password",1,"label"],[1,"password-block"],["nbInput","","type","password","id","input-password","name","password","placeholder","Password","fullWidth","","fieldSize","large",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],["href","#",1,"eye-icon"],["aria-hidden","true",1,"fa","fa-eye"],["for","input-re-password",1,"label"],["nbInput","","type","password","id","input-re-password","name","rePass","placeholder","Confirm Password","fullWidth","","fieldSize","large",3,"ngModel","status","required","ngModelChange"],["rePass","ngModel"],["class","form-control-group accept-group",4,"ngIf"],["nbButton","","fullWidth","","status","primary","size","large",3,"disabled"],["aria-label","Sign in",1,"another-action"],["routerLink","../login",1,"text-link","login-btn"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[1,"form-control-group","accept-group"],["name","terms",3,"ngModel","required","ngModelChange"],["href","#","target","_blank"]],template:function(e,n){if(1&e&&(s.Wb(0,"div",0),s.Wb(1,"div",1),s.Wb(2,"div",2),s.Rb(3,"img",3),s.Wb(4,"p",4),s.Bc(5,"Hello! register with us."),s.Vb(),s.Vb(),s.Wb(6,"form",5,6),s.ec("ngSubmit",(function(){return n.register()})),s.Wb(8,"div",7),s.Wb(9,"label",8),s.Bc(10,"Full name:"),s.Vb(),s.Wb(11,"input",9,10),s.ec("ngModelChange",(function(e){return n.user.fullName=e})),s.Vb(),s.zc(13,d,3,2,"ng-container",11),s.Vb(),s.Wb(14,"div",7),s.Wb(15,"label",12),s.Bc(16,"Email address:"),s.Vb(),s.Wb(17,"input",13,14),s.ec("ngModelChange",(function(e){return n.user.email=e})),s.Vb(),s.zc(19,f,3,2,"ng-container",11),s.Vb(),s.Wb(20,"div",7),s.Wb(21,"label",15),s.Bc(22,"Password:"),s.Vb(),s.Wb(23,"div",16),s.Wb(24,"input",17,18),s.ec("ngModelChange",(function(e){return n.user.password=e})),s.Vb(),s.Wb(26,"a",19),s.Rb(27,"i",20),s.Vb(),s.Vb(),s.zc(28,v,3,2,"ng-container",11),s.Vb(),s.Wb(29,"div",7),s.Wb(30,"label",21),s.Bc(31,"Repeat password:"),s.Vb(),s.Wb(32,"div",16),s.Wb(33,"input",22,23),s.ec("ngModelChange",(function(e){return n.user.confirmPassword=e})),s.Vb(),s.Wb(35,"a",19),s.Rb(36,"i",20),s.Vb(),s.Vb(),s.zc(37,M,3,2,"ng-container",11),s.Vb(),s.zc(38,w,6,2,"div",24),s.Wb(39,"button",25),s.Bc(40," Register "),s.Vb(),s.Vb(),s.Wb(41,"section",26),s.Bc(42," Already have an account? "),s.Wb(43,"a",27),s.Bc(44,"Log in"),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&e){const e=s.rc(7),r=s.rc(12),t=s.rc(18),o=s.rc(25),i=s.rc(34);s.Eb(11),s.mc("ngModel",n.user.fullName)("status",r.dirty?r.invalid?"danger":"success":"basic")("required",n.getConfigValue("forms.validation.fullName.required"))("minlength",n.getConfigValue("forms.validation.fullName.minLength"))("maxlength",n.getConfigValue("forms.validation.fullName.maxLength")),s.Fb("aria-invalid",!(!r.invalid||!r.touched)||null),s.Eb(2),s.mc("ngIf",r.invalid&&r.touched),s.Eb(4),s.mc("ngModel",n.user.email)("status",t.dirty?t.invalid?"danger":"success":"basic")("required",n.getConfigValue("forms.validation.email.required")),s.Fb("aria-invalid",!(!t.invalid||!t.touched)||null),s.Eb(2),s.mc("ngIf",t.invalid&&t.touched),s.Eb(5),s.mc("ngModel",n.user.password)("status",o.dirty?o.invalid?"danger":"success":"basic")("required",n.getConfigValue("forms.validation.password.required"))("minlength",n.getConfigValue("forms.validation.password.minLength"))("maxlength",n.getConfigValue("forms.validation.password.maxLength")),s.Fb("aria-invalid",!(!o.invalid||!o.touched)||null),s.Eb(4),s.mc("ngIf",o.invalid&&o.touched),s.Eb(5),s.mc("ngModel",n.user.confirmPassword)("status",i.dirty?i.invalid||o.value!=i.value?"danger":"success":"basic")("required",n.getConfigValue("forms.validation.password.required")),s.Fb("aria-invalid",!(!i.invalid||!i.touched)||null),s.Eb(4),s.mc("ngIf",i.invalid&&i.touched),s.Eb(1),s.mc("ngIf",n.getConfigValue("forms.register.terms")),s.Eb(1),s.Hb("btn-pulse",n.submitted),s.mc("disabled",n.submitted||!e.valid)}},directives:[o.o,o.h,o.i,c.C,o.a,o.g,o.j,o.m,o.d,o.c,t.m,o.k,c.k,a.f,c.q],styles:[".register-page[_ngcontent-%COMP%]{background:url(admin-back.5b9ebc1e1ab12e8553de.jpg);height:100%;display:flex;background-size:100% 100%}.register-page[_ngcontent-%COMP%]   .register-page-container[_ngcontent-%COMP%]{margin:auto;display:block;width:100%;max-width:600px;padding:30px;background:#fff;border-radius:10px}.register-page[_ngcontent-%COMP%]   .register-logo[_ngcontent-%COMP%]{text-align:center}.register-page[_ngcontent-%COMP%]   .register-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;text-align:center;max-width:100px}.register-page[_ngcontent-%COMP%]   .register-logo[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{margin-bottom:10px;text-align:center}.register-page[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]{margin-bottom:10px}.register-page[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]{padding:10px 0}.register-page[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{color:#f70052;font-size:12px}.register-page[_ngcontent-%COMP%]   .password-block[_ngcontent-%COMP%]{position:relative}.register-page[_ngcontent-%COMP%]   .password-block[_ngcontent-%COMP%]   a.eye-icon[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;color:#333}  .nb-theme-default .status-success{border-color:#3393c7!important;color:#222b45!important}  .nb-theme-default .status-success:hover{border-color:#3393c7!important}  .layout-container .content .columns nb-layout-column{padding:0!important}"]}),e})();const P=s.Yb(W),x=[{path:"",component:W}];let E=(()=>{class e{}return e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({factory:function(n){return new(n||e)},imports:[[a.g.forChild(x)],a.g]}),e})();r.d(n,"RegisterModule",(function(){return O}));let O=(()=>{class e{}return e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({factory:function(n){return new(n||e)},imports:[[t.c,E,o.b,c.p,c.D,c.l,c.r,i.a]]}),e})()}}]);