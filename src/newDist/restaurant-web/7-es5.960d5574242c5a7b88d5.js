function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var o,n=_getPrototypeOf(t);if(e){var r=_getPrototypeOf(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return _possibleConstructorReturn(this,o)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{dzbQ:function(t,e,o){"use strict";o.r(e);var n=o("ofXK"),r=o("vTDv"),i=o("aceb"),a=o("tyNb"),c=o("McNs"),s=o("ibrm"),l=o("fXoL");function u(t,e){if(1&t&&(l.Wb(0,"div"),l.Wb(1,"p",12),l.Wb(2,"b"),l.Ac(3),l.Vb(),l.Vb(),l.Vb()),2&t){var o=l.gc();l.Eb(3),l.Bc(o.message)}}function f(t,e){1&t&&(l.Wb(0,"div",13),l.Wb(1,"p",14),l.Ac(2,"Reset password link sent to your email"),l.Vb(),l.Vb())}var p,g,b=[{path:"",component:(p=function(t){_inherits(o,t);var e=_createSuper(o);function o(t,n,r,i){var a;return _classCallCheck(this,o),(a=e.call(this,n,"",r,i)).MyCustomAuthService=t,a.error="false",a.message="",a.email="",a.showPopup=!1,a}return _createClass(o,[{key:"ngOnInit",value:function(){}},{key:"forgetPassword",value:function(){var t=this,e=$("#email").val();if(0==/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e))return this.error="true",void(this.message="Please enter valid email");console.log("forgotPassword",$("#email").val()),this.MyCustomAuthService.post("forgetPassword",{email:e},null).subscribe((function(e){localStorage.setItem("token",e.token),t.showPopup=!0,setTimeout((function(){t.MyCustomAuthService.navigatePage("auth/login")}),1e3)}),(function(e){t.error="true",t.message="Invalid Credential"}))}}]),o}(c.f),p.\u0275fac=function(t){return new(t||p)(l.Qb(s.a),l.Qb(c.b),l.Qb(l.h),l.Qb(a.c))},p.\u0275cmp=l.Kb({type:p,selectors:[["ngx-forgot-password"]],features:[l.Bb],decls:18,vars:2,consts:[[1,"forget-password-page"],[1,"forget-password-container"],[1,"forget-logo"],["src","assets/images/logo.png",1,"logo"],[1,"sub-title"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","id","input-email","name","email","placeholder","Email address","fullWidth","","fieldSize","large","id","email"],[4,"ngIf"],["size","large","type","button",1,"btn","btn-primary",2,"width","100%",3,"click"],["aria-label","Register",1,"another-action"],["class","topcorner",4,"ngIf"],[2,"color","red"],[1,"topcorner"],[2,"font-size","15px","font-weight","700"]],template:function(t,e){1&t&&(l.Wb(0,"div",0),l.Wb(1,"div",1),l.Wb(2,"div",2),l.Rb(3,"img",3),l.Wb(4,"h1"),l.Ac(5,"Forget Your Password"),l.Vb(),l.Wb(6,"p",4),l.Ac(7,"Enter Your email and we'll send you a link to reset your password."),l.Vb(),l.Vb(),l.Wb(8,"form"),l.Wb(9,"div",5),l.Wb(10,"label",6),l.Ac(11,"Email address:"),l.Vb(),l.Rb(12,"input",7),l.Vb(),l.yc(13,u,4,1,"div",8),l.Wb(14,"button",9),l.ec("click",(function(){return e.forgetPassword()})),l.Ac(15,"Send Link"),l.Vb(),l.Vb(),l.Rb(16,"section",10),l.Vb(),l.Vb(),l.yc(17,f,3,0,"div",11)),2&t&&(l.Eb(13),l.mc("ngIf","true"==e.error),l.Eb(4),l.mc("ngIf",1==e.showPopup))},directives:[i.y,n.m],styles:[".forget-password-page[_ngcontent-%COMP%]{background-image:url(admin-back.5b9ebc1e1ab12e8553de.jpg);height:100%;display:flex;background-size:100% 100%}.forget-password-page[_ngcontent-%COMP%]   .forget-password-container[_ngcontent-%COMP%]{margin:auto;display:block;width:100%;max-width:600px;padding:30px;background:#fff;border-radius:10px}.forget-password-page[_ngcontent-%COMP%]   .forget-logo[_ngcontent-%COMP%]{text-align:center}.forget-password-page[_ngcontent-%COMP%]   .forget-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-top:0;margin-bottom:5px;text-align:center;max-width:100px}.forget-password-page[_ngcontent-%COMP%]   .forget-logo[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{margin-bottom:10px;text-align:center}.forget-password-page[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]{margin-bottom:10px}.forget-password-page[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]{padding:10px 0}.forget-password-page[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{color:#f70052;font-size:12px}  .nb-theme-default .status-success{border-color:#3393c7!important;color:#222b45!important}  .nb-theme-default .status-success:hover{border-color:#3393c7!important}  .layout-container .content .columns nb-layout-column{padding:0!important}  .nb-theme-default nb-card{border:0!important}.topcorner[_ngcontent-%COMP%]{font-weight:20px;font-size:20px;height:50px;width:150px;position:absolute;top:10px;right:10px;background-color:#90ee90;text-align:center;float:right}"]}),p)}],d=((g=function t(){_classCallCheck(this,t)}).\u0275mod=l.Ob({type:g}),g.\u0275inj=l.Nb({factory:function(t){return new(t||g)},imports:[[a.g.forChild(b)],a.g]}),g);o.d(e,"ForgotPasswordModule",(function(){return h}));var m,h=((m=function t(){_classCallCheck(this,t)}).\u0275mod=l.Ob({type:m}),m.\u0275inj=l.Nb({factory:function(t){return new(t||m)},imports:[[n.c,d,i.p,i.z,i.l,i.r,r.a]]}),m)}}]);