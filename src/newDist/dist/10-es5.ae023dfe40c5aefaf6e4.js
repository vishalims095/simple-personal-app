function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(t);if(e){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{AHOq:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),r=n("tyNb"),s=n("McNs"),a=n("ibrm"),i=n("fXoL"),c=n("aceb");function p(t,e){if(1&t&&(i.Wb(0,"div"),i.Wb(1,"p",14),i.Wb(2,"b"),i.Bc(3),i.Vb(),i.Vb(),i.Vb()),2&t){var n=i.gc();i.Eb(3),i.Cc(n.message)}}var u,l,b=[{path:"",component:(u=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,o,r,s){var a;return _classCallCheck(this,n),(a=e.call(this,o,"",r,s)).MyCustomAuthService=t,a.error="false",a.message="",a.email="",a.token="",a}return _createClass(n,[{key:"ngOnInit",value:function(){this.token=localStorage.getItem("token")}},{key:"resetPassword",value:function(){var t=this,e=$("#input-password").val(),n=$("#input-password1").val();if(console.log("reset password",e,n),e!=n)return this.error="true",void(this.message="Password not matched.");this.MyCustomAuthService.post("resetPassword",{password:e,access_token:this.token},null).subscribe((function(e){t.MyCustomAuthService.navigatePage("auth/login")}),(function(e){t.error="true",t.message="Something went wrong"}))}}]),n}(s.g),u.\u0275fac=function(t){return new(t||u)(i.Qb(a.a),i.Qb(s.b),i.Qb(i.h),i.Qb(r.c))},u.\u0275cmp=i.Kb({type:u,selectors:[["ngx-set-password"]],features:[i.Bb],decls:24,vars:1,consts:[[1,"reset-password-page"],[1,"reset-password-container"],[1,"reset-password-logo"],["src","assets/images/logo.png",1,"logo"],[1,"sub-title"],[1,"form-control-group","password-group"],[1,"label-with-link"],["for","input-password",1,"label"],["nbInput","","name","password","type","password","id","input-password","placeholder","Password","fieldSize","large","fullWidth","","fieldSize","large"],["nbInput","","name","password","type","password","id","input-password1","placeholder","Password","fieldSize","large","fullWidth","","fieldSize","large"],[4,"ngIf"],["size","large","type","button",1,"btn","btn-primary",2,"width","100%",3,"click"],["aria-label","Register",1,"another-action"],["routerLink","../login",1,"text-link","login-btn"],[2,"color","red"]],template:function(t,e){1&t&&(i.Wb(0,"div",0),i.Wb(1,"div",1),i.Wb(2,"div",2),i.Rb(3,"img",3),i.Wb(4,"p",4),i.Bc(5,"Set Your Password"),i.Vb(),i.Vb(),i.Wb(6,"form"),i.Wb(7,"div",5),i.Wb(8,"span",6),i.Wb(9,"label",7),i.Bc(10,"Password: "),i.Vb(),i.Vb(),i.Rb(11,"input",8),i.Vb(),i.Wb(12,"div",5),i.Wb(13,"span",6),i.Wb(14,"label",7),i.Bc(15,"Repeat Password: "),i.Vb(),i.Vb(),i.Rb(16,"input",9),i.Vb(),i.zc(17,p,4,1,"div",10),i.Wb(18,"button",11),i.ec("click",(function(){return e.resetPassword()})),i.Bc(19,"Reset Password"),i.Vb(),i.Vb(),i.Wb(20,"section",12),i.Bc(21," Already have an account? "),i.Wb(22,"a",13),i.Bc(23,"Log in"),i.Vb(),i.Vb(),i.Vb(),i.Vb()),2&t&&(i.Eb(17),i.mc("ngIf","true"==e.error))},directives:[c.C,o.m,r.f],styles:[".reset-password-page[_ngcontent-%COMP%]{background-image:url(admin-back.5b9ebc1e1ab12e8553de.jpg);height:100%;display:flex;background-size:100% 100%}.reset-password-page[_ngcontent-%COMP%]   .reset-password-container[_ngcontent-%COMP%]{margin:auto;display:block;width:100%;max-width:600px;padding:30px;background:#fff;border-radius:10px}.reset-password-page[_ngcontent-%COMP%]   .reset-password-logo[_ngcontent-%COMP%]{text-align:center}.reset-password-page[_ngcontent-%COMP%]   .reset-password-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;text-align:center;max-width:100px}.reset-password-page[_ngcontent-%COMP%]   .reset-password-logo[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{margin-bottom:10px;text-align:center}.reset-password-page[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]{margin-bottom:10px}.reset-password-page[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]{padding:10px 0}.reset-password-page[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{color:#f70052;font-size:12px}  .nb-theme-default .status-success{border-color:#3393c7!important;color:#222b45!important}  .nb-theme-default .status-success:hover{border-color:#3393c7!important}  .layout-container .content .columns nb-layout-column{padding:0!important}  .nb-theme-default nb-card{border:0!important}"]}),u)}],f=((l=function t(){_classCallCheck(this,t)}).\u0275mod=i.Ob({type:l}),l.\u0275inj=i.Nb({factory:function(t){return new(t||l)},imports:[[r.g.forChild(b)],r.g]}),l),d=n("vTDv");n.d(e,"SetPasswordModule",(function(){return w}));var g,w=((g=function t(){_classCallCheck(this,t)}).\u0275mod=i.Ob({type:g}),g.\u0275inj=i.Nb({factory:function(t){return new(t||g)},imports:[[o.c,f,c.p,c.D,c.l,c.r,d.a]]}),g)}}]);