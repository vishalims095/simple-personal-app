function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var o,n=_getPrototypeOf(t);if(e){var r=_getPrototypeOf(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return _possibleConstructorReturn(this,o)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{AHOq:function(t,e,o){"use strict";o.r(e);var n=o("ofXK"),r=o("tyNb"),s=o("McNs"),i=o("ibrm"),c=o("fXoL"),a=o("aceb");function u(t,e){if(1&t){var o=c.Xb();c.Wb(0,"a",17),c.ec("click",(function(){return c.sc(o),c.gc().showPWD()})),c.Rb(1,"i",18),c.Vb()}}function l(t,e){if(1&t){var o=c.Xb();c.Wb(0,"a",17),c.ec("click",(function(){return c.sc(o),c.gc().showPWD()})),c.Rb(1,"i",19),c.Vb()}}function p(t,e){if(1&t){var o=c.Xb();c.Wb(0,"a",17),c.ec("click",(function(){return c.sc(o),c.gc().showNewPWD()})),c.Rb(1,"i",18),c.Vb()}}function b(t,e){if(1&t){var o=c.Xb();c.Wb(0,"a",17),c.ec("click",(function(){return c.sc(o),c.gc().showNewPWD()})),c.Rb(1,"i",19),c.Vb()}}function f(t,e){if(1&t&&(c.Wb(0,"div"),c.Wb(1,"p",20),c.Wb(2,"b"),c.Ac(3),c.Vb(),c.Vb(),c.Vb()),2&t){var o=c.gc();c.Eb(3),c.Bc(o.message)}}function d(t,e){1&t&&(c.Wb(0,"div",21),c.Wb(1,"p",22),c.Ac(2,"Password updated successfully."),c.Vb(),c.Vb())}var g,h,w=[{path:"",component:(g=function(t){_inherits(o,t);var e=_createSuper(o);function o(t,n,r,s){var i;return _classCallCheck(this,o),(i=e.call(this,n,"",r,s)).MyCustomAuthService=t,i.error="false",i.message="",i.email="",i.token="",i.show=!1,i.show1=!1,i.url="",i.showPopup=!1,i}return _createClass(o,[{key:"ngOnInit",value:function(){if(this.token=localStorage.getItem("token"),console.log("==============>",this.router.url.split("?")),2!=this.router.url.split("?").length)return alert("Session expired"),void this.router.navigate(["/login"]);this.url=this.router.url.split("?")[1],this.url=this.url.slice(0,-1),console.log(this.url),this.checkPasswordStatus()}},{key:"checkPasswordStatus",value:function(){var t=this;this.MyCustomAuthService.post("checkResetPassword",{access_token:this.url},null).subscribe((function(t){console.log("You can update")}),(function(e){alert("session expired."),t.router.navigate(["/login"])}))}},{key:"resetPassword",value:function(){var t=this,e=$("#input-password").val(),o=$("#input-password1").val();return console.log("reset password",e,o),e!=o?(this.error="true",void(this.message="Password not matched.")):e.length<8&&e.length>16?(this.error="true",void(this.message="Password should be 8-16 characters.")):void this.MyCustomAuthService.post("resetPassword",{password:e,access_token:this.url},null).subscribe((function(e){t.showPopup=!0,setTimeout((function(){t.MyCustomAuthService.navigatePage("auth/login")}),1e3)}),(function(e){t.error="true",t.message="Something went wrong"}))}},{key:"showPWD",value:function(){this.show=!this.show}},{key:"showNewPWD",value:function(){this.show1=!this.show1}}]),o}(s.g),g.\u0275fac=function(t){return new(t||g)(c.Qb(i.a),c.Qb(s.b),c.Qb(c.h),c.Qb(r.c))},g.\u0275cmp=c.Kb({type:g,selectors:[["ngx-set-password"]],features:[c.Bb],decls:31,vars:8,consts:[[1,"reset-password-page"],[1,"reset-password-container"],[1,"reset-password-logo"],["src","assets/images/logo.png",1,"logo"],[1,"sub-title"],[1,"form-control-group","password-group"],[1,"label-with-link"],["for","input-password",1,"label"],[1,"password-block"],["nbInput","","name","password","id","input-password","placeholder","Password","fieldSize","large","fullWidth","","fieldSize","large",3,"type"],["class","eye-icon",3,"click",4,"ngIf"],["nbInput","","name","password","id","input-password1","placeholder","Password","fieldSize","large","fullWidth","","fieldSize","large",3,"type"],[4,"ngIf"],["size","large","type","button",1,"btn","btn-primary",2,"width","100%",3,"click"],["aria-label","Register",1,"another-action"],["routerLink","../login",1,"text-link","login-btn"],["class","topcorner",4,"ngIf"],[1,"eye-icon",3,"click"],["aria-hidden","true",1,"fa","fa-eye-slash"],["aria-hidden","true",1,"fa","fa-eye"],[2,"color","red"],[1,"topcorner"],[2,"font-size","15px","font-weight","700"]],template:function(t,e){1&t&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Rb(3,"img",3),c.Wb(4,"p",4),c.Ac(5,"Set Your Password"),c.Vb(),c.Vb(),c.Wb(6,"form"),c.Wb(7,"div",5),c.Wb(8,"span",6),c.Wb(9,"label",7),c.Ac(10,"Password: "),c.Vb(),c.Vb(),c.Wb(11,"div",8),c.Rb(12,"input",9),c.yc(13,u,2,0,"a",10),c.yc(14,l,2,0,"a",10),c.Vb(),c.Vb(),c.Wb(15,"div",5),c.Wb(16,"span",6),c.Wb(17,"label",7),c.Ac(18,"Repeat Password: "),c.Vb(),c.Vb(),c.Wb(19,"div",8),c.Rb(20,"input",11),c.yc(21,p,2,0,"a",10),c.yc(22,b,2,0,"a",10),c.Vb(),c.Vb(),c.yc(23,f,4,1,"div",12),c.Wb(24,"button",13),c.ec("click",(function(){return e.resetPassword()})),c.Ac(25,"Reset Password"),c.Vb(),c.Vb(),c.Wb(26,"section",14),c.Ac(27," Already have an account? "),c.Wb(28,"a",15),c.Ac(29,"Log in"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.yc(30,d,3,0,"div",16)),2&t&&(c.Eb(12),c.mc("type",e.show?"text":"password"),c.Eb(1),c.mc("ngIf",1==e.show),c.Eb(1),c.mc("ngIf",0==e.show),c.Eb(6),c.mc("type",e.show1?"text":"password"),c.Eb(1),c.mc("ngIf",1==e.show1),c.Eb(1),c.mc("ngIf",0==e.show1),c.Eb(1),c.mc("ngIf","true"==e.error),c.Eb(7),c.mc("ngIf",1==e.showPopup))},directives:[a.y,n.m,r.f],styles:[".reset-password-page[_ngcontent-%COMP%]{background-image:url(admin-back.5b9ebc1e1ab12e8553de.jpg);height:100%;display:flex;background-size:100% 100%}.reset-password-page[_ngcontent-%COMP%]   .reset-password-container[_ngcontent-%COMP%]{margin:auto;display:block;width:100%;max-width:600px;padding:30px;background:#fff;border-radius:10px}.reset-password-page[_ngcontent-%COMP%]   .reset-password-logo[_ngcontent-%COMP%]{text-align:center}.reset-password-page[_ngcontent-%COMP%]   .reset-password-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;text-align:center;max-width:100px}.reset-password-page[_ngcontent-%COMP%]   .reset-password-logo[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{margin-bottom:10px;text-align:center}.reset-password-page[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]{margin-bottom:10px}.reset-password-page[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]{padding:10px 0}.reset-password-page[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{color:#f70052;font-size:12px}.reset-password-page[_ngcontent-%COMP%]   .password-block[_ngcontent-%COMP%]{position:relative}.reset-password-page[_ngcontent-%COMP%]   .password-block[_ngcontent-%COMP%]   a.eye-icon[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;color:#333}  .nb-theme-default .status-success{border-color:#3393c7!important;color:#222b45!important}  .nb-theme-default .status-success:hover{border-color:#3393c7!important}  .layout-container .content .columns nb-layout-column{padding:0!important}  .nb-theme-default nb-card{border:0!important}.topcorner[_ngcontent-%COMP%]{font-weight:20px;font-size:20px;height:50px;width:150px;position:absolute;top:10px;right:10px;background-color:#90ee90;text-align:center;float:right}"]}),g)}],y=((h=function t(){_classCallCheck(this,t)}).\u0275mod=c.Ob({type:h}),h.\u0275inj=c.Nb({factory:function(t){return new(t||h)},imports:[[r.g.forChild(w)],r.g]}),h),P=o("vTDv");o.d(e,"SetPasswordModule",(function(){return _}));var m,_=((m=function t(){_classCallCheck(this,t)}).\u0275mod=c.Ob({type:m}),m.\u0275inj=c.Nb({factory:function(t){return new(t||m)},imports:[[n.c,y,a.p,a.z,a.l,a.r,P.a]]}),m)}}]);