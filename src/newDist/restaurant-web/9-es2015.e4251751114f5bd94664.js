(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+iOL":function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),a=n("3Pt+"),o=n("vTDv"),r=n("tyNb"),s=n("McNs"),l=n("ibrm"),c=n("fXoL"),b=n("aceb");const u=["stepper"];function g(e,t){1&e&&c.Ac(0,"Basic Details")}function d(e,t){if(1&e&&c.Rb(0,"img",53),2&e){const e=c.gc();c.mc("src",e.imageUrl,c.uc)}}function p(e,t){if(1&e&&c.Rb(0,"img",53),2&e){const e=c.gc();c.mc("src",e.imageUrl1,c.uc)}}function m(e,t){if(1&e&&c.Rb(0,"img",53),2&e){const e=c.gc();c.mc("src",e.imageUrl2,c.uc)}}function h(e,t){if(1&e){const e=c.Xb();c.Wb(0,"div",54),c.Wb(1,"nb-checkbox",55),c.ec("ngModelChange",(function(t){return c.sc(e),c.gc().user.terms=t})),c.Ac(2," Agree to "),c.Wb(3,"a",56),c.Wb(4,"strong"),c.Ac(5,"Terms & Conditions"),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){const e=c.gc();c.Eb(1),c.mc("ngModel",e.user.terms)("required",e.getConfigValue("forms.register.terms"))}}function f(e,t){1&e&&c.Ac(0,"Enroll Subscription")}function W(e,t){if(1&e){const e=c.Xb();c.Wb(0,"div",10),c.Wb(1,"div",36),c.Wb(2,"nb-radio-group"),c.Wb(3,"nb-radio",57),c.ec("click",(function(){c.sc(e);const n=t.$implicit;return c.gc().selectValue(n._id)})),c.Ac(4),c.Vb(),c.Vb(),c.Vb(),c.Wb(5,"div",37),c.Wb(6,"article",58),c.Wb(7,"h3"),c.Wb(8,"span"),c.Ac(9,"Subscription Type: "),c.Vb(),c.Ac(10),c.Vb(),c.Wb(11,"p"),c.Wb(12,"span"),c.Ac(13,"Time:"),c.Vb(),c.Ac(14),c.Vb(),c.Wb(15,"a"),c.Wb(16,"span"),c.Ac(17,"Plan Details:"),c.Vb(),c.Ac(18),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){const e=t.$implicit;c.Eb(3),c.mc("value","Gold"),c.Eb(1),c.Cc(" ",e.planName," "),c.Eb(6),c.Bc(e.planName),c.Eb(4),c.Dc(" ",e.totalTimeline," ",e.timeLineType,""),c.Eb(4),c.Bc(e.planDetails)}}function V(e,t){1&e&&c.Ac(0,"Choose Your Theme")}function _(e,t){1&e&&c.Ac(0,"Set Password")}function M(e,t){if(1&e){const e=c.Xb();c.Wb(0,"a",59),c.ec("click",(function(){return c.sc(e),c.gc().showPWD()})),c.Rb(1,"i",60),c.Vb()}}function C(e,t){if(1&e){const e=c.Xb();c.Wb(0,"a",59),c.ec("click",(function(){return c.sc(e),c.gc().showPWD()})),c.Rb(1,"i",61),c.Vb()}}function v(e,t){if(1&e){const e=c.Xb();c.Wb(0,"a",59),c.ec("click",(function(){return c.sc(e),c.gc().showNewPWD()})),c.Rb(1,"i",60),c.Vb()}}function w(e,t){if(1&e){const e=c.Xb();c.Wb(0,"a",59),c.ec("click",(function(){return c.sc(e),c.gc().showNewPWD()})),c.Rb(1,"i",61),c.Vb()}}function x(e,t){if(1&e&&(c.Wb(0,"div",62),c.Wb(1,"p",63),c.Wb(2,"b"),c.Ac(3),c.Vb(),c.Vb(),c.Vb()),2&e){const e=c.gc();c.Eb(3),c.Bc(e.message)}}function P(e,t){1&e&&(c.Wb(0,"div",64),c.Wb(1,"b"),c.Ac(2,"Registration successful"),c.Vb(),c.Vb())}const y=[{path:"",component:(()=>{class e extends s.e{constructor(e,t,n,i){super(t,"",n,i),this.MyCustomAuthService=e,this.stepperIndex=0,this.error="false",this.message="",this.show=!1,this.showPopup=!1,this.idButtonDisabled=!1,this.stepTwoButtonDisabled=!0,this.subscriptionValue="",this.show1=!1,this.subscriptionData=[]}getSubscription(){this.MyCustomAuthService.post("getSubscription",{},null).subscribe(e=>{this.subscriptionData=e.data})}ngOnInit(){this.getSubscription()}showPWD(){this.show=!this.show}showNewPWD(){this.show1=!this.show1}ngDoCheck(){console.log("DO CHECK"),this.idButtonDisabled=""==this.user.name||null==this.user.name||null==this.user.name||""==this.user.email||null==this.user.email||null==this.user.email||""==this.user.name||null==this.user.name||null==this.user.name||""==this.user.phone||null==this.user.phone||null==this.user.phone||""==this.user.address||null==this.user.address||null==this.user.address||""==this.user.reg_no||null==this.user.reg_no||null==this.user.reg_no||""==this.user.tax_number||null==this.user.tax_number||null==this.user.tax_number||""==this.user.national_id||null==this.user.national_id||null==this.user.national_id||""==this.commercial_image||null==this.commercial_image||null==this.commercial_image||""==this.tax_certificate||null==this.tax_certificate||null==this.tax_certificate||""==this.national_id_img||null==this.national_id_img||null==this.national_id_img,console.log(this.user)}getConfigValue(e){}stepOne(){console.log("stepOne")}stepTwo(){console.log("step two")}finalStep(){let e=this.user.password,t=this.user.confirmPassword;if(console.log("reset password",e,t),""==e||null==e||""==t||null==t)return this.error="true",void(this.message="Password required.");if(e!=t)return this.error="true",void(this.message="Password not matched.");if(e.length<8)return this.error="true",void(this.message="Password should be greater than 8 character.");let n=new FormData;n.append("name",this.user.name),n.append("address",this.user.address),n.append("email",this.user.email),n.append("phone",this.user.phone),n.append("tax_number",this.user.tax_number),n.append("national_id",this.user.national_id),n.append("subscriptionId",this.subscriptionId),n.append("password",this.user.password),n.append("reg_no",this.user.reg_no),n.append("tax_certificate",this.tax_certificate1),n.append("commercial_image",this.commercial_image1),n.append("national_id_img",this.national_id_img1),this.MyCustomAuthService.post("/resturantSignup",n,null).subscribe(e=>{console.log("success===========>",e.data),this.showPopup=!0,setTimeout(()=>{this.router.navigate(["/login"]),this.showPopup=!1},1e3)},e=>{this.error="true",this.message="Resturant details already registered."})}uploadCommercialImg(e,t){this.fileToUpload=e.item(0);let n=new FileReader;n.onload=e=>{this.imageUrl=e.target.result,this.commercial_image=this.imageUrl,this.commercial_image1=t.target.files[0]},n.readAsDataURL(this.fileToUpload)}uploadTaxImg(e,t){this.fileToUpload1=e.item(0);let n=new FileReader;n.onload=e=>{this.imageUrl1=e.target.result,this.tax_certificate=this.imageUrl1,this.tax_certificate1=t.target.files[0]},n.readAsDataURL(this.fileToUpload1)}uploadNationalIDImg(e,t){this.fileToUpload2=e.item(0);let n=new FileReader;n.onload=e=>{this.imageUrl2=e.target.result,this.national_id_img=this.imageUrl2,this.national_id_img1=t.target.files[0]},n.readAsDataURL(this.fileToUpload2)}selectValue(e){console.log("=======",e),this.subscriptionId=e,this.stepTwoButtonDisabled=!1}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(l.a),c.Qb(s.b),c.Qb(c.h),c.Qb(r.c))},e.\u0275cmp=c.Kb({type:e,selectors:[["ngx-register"]],viewQuery:function(e,t){var n;1&e&&c.Fc(u,!0),2&e&&c.pc(n=c.fc())&&(t.stepper=n.first)},features:[c.Bb],decls:138,vars:43,consts:[[1,"register-page"],[1,"register-page-container"],[1,"register-logo"],["src","assets/images/logo.png",1,"logo"],[1,"col-md-12","col-lg-12","col-xxxl-12"],["orientation","horizontal"],[3,"label"],["labelOne",""],["aria-labelledby","title",1,"form-height",3,"ngSubmit"],["form","ngForm"],[1,"row"],[1,"form-control-group","col-md-6"],["for","input-name",1,"label"],["nbInput","","id","input-name","name","fullName","placeholder","Full name","autofocus","","fullWidth","","fieldSize","large",3,"ngModel","status","ngModelChange"],["fullName","ngModel"],["for","input-email",1,"label"],["nbInput","","id","input-email","name","email","placeholder","Email address","fullWidth","","fieldSize","large",3,"ngModel","ngModelChange"],["nbInput","","id","input-name","name","phone","placeholder","Restaurant Contact Number","autofocus","","fullWidth","","fieldSize","large",3,"ngModel","status","ngModelChange"],["nbInput","","id","input-email","name","address","placeholder","Restaurant Address","fullWidth","","fieldSize","large",3,"ngModel","ngModelChange"],["nbInput","","name","reg_no","id","registrationNumber","placeholder","Commercial Registration Number","autofocus","","fullWidth","","fieldSize","large",3,"ngModel","ngModelChange"],["type","file",3,"change"],["width","50px","height","50px",3,"src",4,"ngIf"],["nbInput","","id","input-name","name","tax_number","placeholder","Tax Number","autofocus","","fullWidth","","fieldSize","large",3,"ngModel","status","ngModelChange"],["nbInput","","id","input-name","name","national_id","placeholder","National ID","autofocus","","fullWidth","","fieldSize","large",3,"ngModel","status","ngModelChange"],["class","form-control-group accept-group",4,"ngIf"],[1,"button-container"],["nbButton","","disabled","","nbStepperNext","","status","primary","size","large"],["nbButton","","nbStepperNext","","status","primary","size","large",3,"disabled","click"],["aria-label","Sign in",1,"another-action"],["routerLink","../login",1,"text-link","login-btn"],["labelTwo",""],[1,"inner-container"],[1,"form-control-group","col-md-12"],["class","row",4,"ngFor","ngForOf"],["nbButton","","nbStepperPrevious","","status","primary","size","large"],["labelThree",""],[1,"form-control-group","col-md-4"],[1,"form-control-group","col-md-8"],[3,"value"],["nbButton","","nbStepperNext","","status","primary","size","large"],["labelFour",""],[1,"form-control-group"],["for","input-password",1,"label"],[1,"password-block"],["nbInput","","id","input-password","name","password","placeholder","Password","fullWidth","","fieldSize","large",3,"ngModel","type","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],["class","eye-icon",3,"click",4,"ngIf"],["for","input-re-password",1,"label"],["nbInput","","id","input-re-password","name","rePass","placeholder","Confirm Password","fullWidth","","fieldSize","large",3,"ngModel","type","status","required","ngModelChange"],["rePass","ngModel"],["style","margin-left: 190px;",4,"ngIf"],["nbButton","","nbStepperNext","","status","primary","size","large",3,"click"],["class","topcorner",4,"ngIf"],["width","50px","height","50px",3,"src"],[1,"form-control-group","accept-group"],["name","terms",3,"ngModel","required","ngModelChange"],["href","#","target","_blank"],[3,"value","click"],[1,"plan-detail"],[1,"eye-icon",3,"click"],["aria-hidden","true",1,"fa","fa-eye-slash"],["aria-hidden","true",1,"fa","fa-eye"],[2,"margin-left","190px"],[2,"color","red"],[1,"topcorner"]],template:function(e,t){if(1&e&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Rb(3,"img",3),c.Wb(4,"p"),c.Ac(5,"Restaurant Registration"),c.Vb(),c.Vb(),c.Wb(6,"nb-card",4),c.Wb(7,"nb-card-body"),c.Wb(8,"nb-stepper",5),c.Wb(9,"nb-step",6),c.yc(10,g,1,0,"ng-template",null,7,c.zc),c.Wb(12,"form",8,9),c.ec("ngSubmit",(function(){return t.register()})),c.Wb(14,"div",10),c.Wb(15,"div",11),c.Wb(16,"label",12),c.Ac(17,"Restaurant Name:"),c.Vb(),c.Wb(18,"input",13,14),c.ec("ngModelChange",(function(e){return t.user.name=e})),c.Vb(),c.Vb(),c.Wb(20,"div",11),c.Wb(21,"label",15),c.Ac(22,"Restaurant Email Address:"),c.Vb(),c.Wb(23,"input",16),c.ec("ngModelChange",(function(e){return t.user.email=e})),c.Vb(),c.Vb(),c.Vb(),c.Wb(24,"div",10),c.Wb(25,"div",11),c.Wb(26,"label",12),c.Ac(27,"Restaurant Contact Number:"),c.Vb(),c.Wb(28,"input",17,14),c.ec("ngModelChange",(function(e){return t.user.phone=e})),c.Vb(),c.Vb(),c.Wb(30,"div",11),c.Wb(31,"label",15),c.Ac(32,"Restaurant Address:"),c.Vb(),c.Wb(33,"input",18),c.ec("ngModelChange",(function(e){return t.user.address=e})),c.Vb(),c.Vb(),c.Vb(),c.Wb(34,"div",10),c.Wb(35,"div",11),c.Wb(36,"label",12),c.Ac(37,"Commercial Registration Number:"),c.Vb(),c.Wb(38,"input",19),c.ec("ngModelChange",(function(e){return t.user.reg_no=e})),c.Vb(),c.Vb(),c.Wb(39,"div",11),c.Wb(40,"label",15),c.Ac(41,"Upload Commercial Registration Image:"),c.Vb(),c.Wb(42,"input",20),c.ec("change",(function(e){return t.uploadCommercialImg(e.target.files,e)})),c.Vb(),c.yc(43,d,1,1,"img",21),c.Vb(),c.Vb(),c.Wb(44,"div",10),c.Wb(45,"div",11),c.Wb(46,"label",12),c.Ac(47,"Tax Number:"),c.Vb(),c.Wb(48,"input",22,14),c.ec("ngModelChange",(function(e){return t.user.tax_number=e})),c.Vb(),c.Vb(),c.Wb(50,"div",11),c.Wb(51,"label",15),c.Ac(52,"Upload Tax Certificate Image:"),c.Vb(),c.Wb(53,"input",20),c.ec("change",(function(e){return t.uploadTaxImg(e.target.files,e)})),c.Vb(),c.yc(54,p,1,1,"img",21),c.Vb(),c.Vb(),c.Wb(55,"div",10),c.Wb(56,"div",11),c.Wb(57,"label",12),c.Ac(58,"Naional Id:"),c.Vb(),c.Wb(59,"input",23,14),c.ec("ngModelChange",(function(e){return t.user.national_id=e})),c.Vb(),c.Vb(),c.Wb(61,"div",11),c.Wb(62,"label",15),c.Ac(63,"Upload Naional Id Image:"),c.Vb(),c.Wb(64,"input",20),c.ec("change",(function(e){return t.uploadNationalIDImg(e.target.files,e)})),c.Vb(),c.yc(65,m,1,1,"img",21),c.Vb(),c.Vb(),c.yc(66,h,6,2,"div",24),c.Vb(),c.Wb(67,"div",25),c.Wb(68,"button",26),c.Ac(69,"prev"),c.Vb(),c.Wb(70,"button",27),c.ec("click",(function(){return t.stepOne()})),c.Ac(71,"next"),c.Vb(),c.Vb(),c.Wb(72,"section",28),c.Ac(73," Already have an account? "),c.Wb(74,"a",29),c.Ac(75,"Log in"),c.Vb(),c.Vb(),c.Vb(),c.Wb(76,"nb-step",6),c.yc(77,f,1,0,"ng-template",null,30,c.zc),c.Wb(79,"div",31),c.Wb(80,"div",10),c.Wb(81,"div",32),c.Wb(82,"label",12),c.Ac(83,"Select Your Plan:"),c.Vb(),c.Vb(),c.Vb(),c.yc(84,W,19,6,"div",33),c.Vb(),c.Wb(85,"div",25),c.Wb(86,"button",34),c.Ac(87,"prev"),c.Vb(),c.Wb(88,"button",27),c.ec("click",(function(){return t.stepTwo()})),c.Ac(89,"next"),c.Vb(),c.Vb(),c.Vb(),c.Wb(90,"nb-step",6),c.yc(91,V,1,0,"ng-template",null,35,c.zc),c.Wb(93,"div",31),c.Wb(94,"div",10),c.Wb(95,"div",36),c.Wb(96,"label",12),c.Ac(97,"Select Your Plan:"),c.Vb(),c.Vb(),c.Wb(98,"div",37),c.Wb(99,"nb-radio-group"),c.Wb(100,"nb-radio",38),c.Ac(101," Theme1 "),c.Vb(),c.Wb(102,"nb-radio",38),c.Ac(103," Theme2 "),c.Vb(),c.Wb(104,"nb-radio",38),c.Ac(105," Theme3 "),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(106,"div",25),c.Wb(107,"button",34),c.Ac(108,"prev"),c.Vb(),c.Wb(109,"button",39),c.Ac(110,"next"),c.Vb(),c.Vb(),c.Vb(),c.Wb(111,"nb-step",6),c.yc(112,_,1,0,"ng-template",null,40,c.zc),c.Wb(114,"div",31),c.Wb(115,"div",41),c.Wb(116,"label",42),c.Ac(117,"Password:"),c.Vb(),c.Wb(118,"div",43),c.Wb(119,"input",44,45),c.ec("ngModelChange",(function(e){return t.user.password=e})),c.Vb(),c.yc(121,M,2,0,"a",46),c.yc(122,C,2,0,"a",46),c.Vb(),c.Vb(),c.Wb(123,"div",41),c.Wb(124,"label",47),c.Ac(125,"Repeat password:"),c.Vb(),c.Wb(126,"div",43),c.Wb(127,"input",48,49),c.ec("ngModelChange",(function(e){return t.user.confirmPassword=e})),c.Vb(),c.yc(129,v,2,0,"a",46),c.yc(130,w,2,0,"a",46),c.Vb(),c.Vb(),c.Vb(),c.yc(131,x,4,1,"div",50),c.Wb(132,"div",25),c.Wb(133,"button",34),c.Ac(134,"prev"),c.Vb(),c.Wb(135,"button",51),c.ec("click",(function(){return t.finalStep()})),c.Ac(136,"Submit"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.yc(137,P,3,0,"div",52)),2&e){const e=c.qc(11),n=c.qc(19),i=c.qc(78),a=c.qc(92),o=c.qc(113),r=c.qc(120),s=c.qc(128);c.Eb(9),c.mc("label",e),c.Eb(9),c.mc("ngModel",t.user.name)("status",n.dirty?n.invalid?"danger":"success":"basic"),c.Eb(5),c.mc("ngModel",t.user.email),c.Eb(5),c.mc("ngModel",t.user.phone)("status",n.dirty?n.invalid?"danger":"success":"basic"),c.Eb(5),c.mc("ngModel",t.user.address),c.Eb(5),c.mc("ngModel",t.user.reg_no),c.Eb(5),c.mc("ngIf",t.imageUrl),c.Eb(5),c.mc("ngModel",t.user.tax_number)("status",n.dirty?n.invalid?"danger":"success":"basic"),c.Eb(6),c.mc("ngIf",t.imageUrl1),c.Eb(5),c.mc("ngModel",t.user.national_id)("status",n.dirty?n.invalid?"danger":"success":"basic"),c.Eb(6),c.mc("ngIf",t.imageUrl2),c.Eb(1),c.mc("ngIf",t.getConfigValue("forms.register.terms")),c.Eb(4),c.mc("disabled",t.idButtonDisabled),c.Eb(6),c.mc("label",i),c.Eb(8),c.mc("ngForOf",t.subscriptionData),c.Eb(4),c.mc("disabled",t.stepTwoButtonDisabled),c.Eb(2),c.mc("label",a),c.Eb(10),c.mc("value","Bronze"),c.Eb(2),c.mc("value","Gold"),c.Eb(2),c.mc("value","Silver"),c.Eb(7),c.mc("label",o),c.Eb(8),c.mc("ngModel",t.user.password)("type",t.show?"text":"password")("status",r.dirty?r.invalid?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.password.required"))("minlength",t.getConfigValue("forms.validation.password.minLength"))("maxlength",t.getConfigValue("forms.validation.password.maxLength")),c.Fb("aria-invalid",!(!r.invalid||!r.touched)||null),c.Eb(2),c.mc("ngIf",1==t.show),c.Eb(1),c.mc("ngIf",0==t.show),c.Eb(5),c.mc("ngModel",t.user.confirmPassword)("type",t.show1?"text":"password")("status",s.dirty?s.invalid||r.value!=s.value?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.password.required")),c.Fb("aria-invalid",!(!s.invalid||!s.touched)||null),c.Eb(2),c.mc("ngIf",1==t.show1),c.Eb(1),c.mc("ngIf",0==t.show1),c.Eb(1),c.mc("ngIf","true"==t.error),c.Eb(6),c.mc("ngIf",1==t.showPopup)}},directives:[b.n,b.m,b.X,b.W,a.p,a.h,a.i,b.y,a.a,a.g,a.j,i.m,b.k,b.Z,r.f,i.l,b.ab,b.N,b.M,a.n,a.d,a.c,b.q],styles:[".register-page[_ngcontent-%COMP%]{background:url(admin-back.5b9ebc1e1ab12e8553de.jpg);height:100%;display:flex;background-size:100% 100%}.register-page[_ngcontent-%COMP%]   .register-page-container[_ngcontent-%COMP%]{margin:auto;display:block;width:100%;max-width:1000px;padding:15px;background:#fff;border-radius:10px}.register-page[_ngcontent-%COMP%]   .form-height[_ngcontent-%COMP%]{max-height:350px;overflow-y:scroll;overflow-x:hidden}.register-page[_ngcontent-%COMP%]   .register-logo[_ngcontent-%COMP%]{text-align:center;display:flex;align-items:center;justify-content:center;margin-bottom:15px}.register-page[_ngcontent-%COMP%]   .register-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:24px;margin-left:15px;margin-bottom:0}.register-page[_ngcontent-%COMP%]   .register-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;text-align:center;max-width:100px}.register-page[_ngcontent-%COMP%]   .register-logo[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{margin-bottom:10px;text-align:center}.register-page[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]{margin-bottom:10px}.register-page[_ngcontent-%COMP%]   .plan-detail[_ngcontent-%COMP%]{border:1px solid #ccc;padding:15px;border-radius:5px;margin-bottom:15px}.register-page[_ngcontent-%COMP%]   .plan-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;margin:0}.register-page[_ngcontent-%COMP%]   .plan-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin:0}.register-page[_ngcontent-%COMP%]   .plan-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}.register-page[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{text-align:center;margin-top:15px}.register-page[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 15px}.register-page[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]{max-width:500px;margin:0 auto}.register-page[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]{padding:5px 0 0}.register-page[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{color:#f70052;font-size:12px}.register-page[_ngcontent-%COMP%]   .password-block[_ngcontent-%COMP%]{position:relative}.register-page[_ngcontent-%COMP%]   .password-block[_ngcontent-%COMP%]   a.eye-icon[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;color:#333}  .nb-theme-default .status-success{border-color:#3393c7!important;color:#222b45!important}  .nb-theme-default .status-success:hover{border-color:#3393c7!important}  .layout-container .content .columns nb-layout-column{padding:0!important}  .nb-theme-default nb-card{margin-bottom:0}  .nb-theme-default nb-card-body,   .nb-theme-default nb-stepper .step-content{padding:15px}.topcorner[_ngcontent-%COMP%]{font-weight:20px;font-size:20px;height:50px;width:150px;position:absolute;top:10px;right:10px;background-color:#90ee90;text-align:center;float:right}"]}),e})()}];let O=(()=>{class e{}return e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({factory:function(t){return new(t||e)},imports:[[r.g.forChild(y)],r.g]}),e})();n.d(t,"RegisterModule",(function(){return A}));let A=(()=>{class e{}return e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({factory:function(t){return new(t||e)},imports:[[i.c,a.m,O,a.b,b.p,b.z,b.l,b.r,b.Y,b.O,b.S,o.a]]}),e})()}}]);