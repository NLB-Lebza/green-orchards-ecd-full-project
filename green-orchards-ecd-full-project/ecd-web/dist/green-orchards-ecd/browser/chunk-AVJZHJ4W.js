import {
  AuthService
} from "./chunk-FL5EID2E.js";
import {
  RouterLink
} from "./chunk-VIAZ62ZB.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-TNJ5J3JW.js";
import "./chunk-7IZRSUFE.js";
import "./chunk-R7EQXQS4.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IDCGIEV6.js";

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function LoginComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage);
  }
}
var _LoginComponent = class _LoginComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.email = "";
    this.password = "";
    this.rememberMe = false;
    this.showPassword = false;
    this.errorMessage = "";
    this.successMessage = "";
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  login() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.email.trim()) {
      this.errorMessage = "Email is required.";
      return;
    }
    if (!this.email.includes("@")) {
      this.errorMessage = "Please enter a valid email address.";
      return;
    }
    if (!this.password.trim()) {
      this.errorMessage = "Password is required.";
      return;
    }
    if (this.password.length < 6) {
      this.errorMessage = "Password must contain at least 6 characters.";
      return;
    }
    this.auth.login(this.email, this.password).subscribe({
      next: (r) => this.successMessage = `Welcome back, ${r.fullName}.`,
      error: (e) => this.errorMessage = e?.error?.message ?? "Login failed."
    });
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)();
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["ng-component"]], decls: 56, vars: 7, consts: [[1, "login-page"], [1, "login-visual"], [1, "visual-content"], [1, "eyebrow"], [1, "login-section"], [1, "login-card"], [1, "logo"], [1, "logo-tree"], [1, "login-heading"], [3, "ngSubmit"], [1, "form-group"], ["type", "email", "name", "email", "placeholder", "Enter your email", 3, "ngModelChange", "ngModel"], [1, "password-row"], ["name", "password", "placeholder", "Enter your password", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 3, "click"], [1, "login-options"], ["type", "checkbox", "name", "rememberMe", 3, "ngModelChange", "ngModel"], ["href", "#"], [1, "message", "error"], [1, "message", "success"], ["type", "submit", 1, "login-button"], [1, "login-footer"], ["routerLink", "/create-account"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4, "GREEN ORCHARDS ECD CENTER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1");
    \u0275\u0275text(6, "Nurturing Young Minds,");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Growing Bright Futures");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Green Orchards Early Childhood Development");
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12, "Where every child blossoms.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "section", 4)(14, "div", 5)(15, "div", 6)(16, "div", 7);
    \u0275\u0275text(17, "\u{1F333}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "h2");
    \u0275\u0275text(20, "GREEN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h2");
    \u0275\u0275text(22, "ORCHARDS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Day Care Center");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 8)(26, "h1");
    \u0275\u0275text(27, "Welcome Back!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, "Sign in to continue to your account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "form", 9);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_30_listener() {
      return ctx.login();
    });
    \u0275\u0275elementStart(31, "div", 10)(32, "label");
    \u0275\u0275text(33, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 10)(36, "label");
    \u0275\u0275text(37, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 12)(39, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 14);
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_40_listener() {
      return ctx.togglePassword();
    });
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 15)(43, "label")(44, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.rememberMe, $event) || (ctx.rememberMe = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Remember me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "a", 17);
    \u0275\u0275text(47, "Forgot password?");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(48, LoginComponent_Conditional_48_Template, 2, 1, "div", 18);
    \u0275\u0275conditionalCreate(49, LoginComponent_Conditional_49_Template, 2, 1, "div", 19);
    \u0275\u0275elementStart(50, "button", 20);
    \u0275\u0275text(51, "\u{1F510} Sign In");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 21);
    \u0275\u0275text(53, "Don't have an account? ");
    \u0275\u0275elementStart(54, "a", 22);
    \u0275\u0275text(55, "Create one now");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(34);
    \u0275\u0275twoWayProperty("ngModel", ctx.email);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx.password);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.showPassword ? "Hide" : "Show");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.rememberMe);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.errorMessage ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.successMessage ? 49 : -1);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 74px);\n  display: grid;\n  grid-template-columns: 50% 50%;\n  background: #fffdf5;\n}\n.login-visual[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 650px;\n  background:\n    linear-gradient(\n      to right,\n      rgba(27, 94, 32, 0.08),\n      rgba(255, 255, 255, 0.12)),\n    url(/assets/images/login-tree-bg.svg);\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  align-items: flex-end;\n  padding: 55px;\n  overflow: hidden;\n}\n.login-visual[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(27, 94, 32, 0.18),\n      transparent 70%);\n}\n.visual-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  color: #fff;\n  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n.visual-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  max-width: 620px;\n  color: #fff;\n  margin: 16px 0;\n}\n.visual-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #dff3df;\n}\n.visual-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.6;\n}\n.login-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 50px;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: min(450px, 100%);\n  background: #fff;\n  padding: 42px;\n  border-radius: 22px;\n  box-shadow: 0 18px 55px rgba(27, 94, 32, 0.12);\n  border: 1px solid #d7e6d8;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 30px;\n}\n.logo-tree[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1b5e20;\n  font-size: 20px;\n  line-height: 1;\n}\n.logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  letter-spacing: 2px;\n  color: #78907b;\n}\n.login-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 32px;\n}\n.login-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 28px;\n  color: #718077;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  margin-bottom: 7px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px 14px;\n  border: 1px solid #c9d9cc;\n  border-radius: 10px;\n  font-size: 15px;\n  outline: none;\n}\n.password-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n}\n.password-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.password-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #c9d9cc;\n  background: #fff;\n  border-radius: 10px;\n  padding: 0 12px;\n}\n.login-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 6px 0 18px;\n  font-size: 14px;\n}\n.login-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.login-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-weight: 700;\n}\n.message[_ngcontent-%COMP%] {\n  padding: 11px;\n  border-radius: 9px;\n  margin-bottom: 14px;\n  font-size: 14px;\n}\n.error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #b71c1c;\n}\n.success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #1b5e20;\n}\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border: 0;\n  border-radius: 10px;\n  background: #2e7d32;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 800;\n}\n.login-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 22px;\n  color: #718077;\n  font-size: 14px;\n}\n@media (max-width: 900px) {\n  .login-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .login-visual[_ngcontent-%COMP%] {\n    min-height: 380px;\n  }\n  .visual-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [FormsModule, RouterLink], template: `<div class="login-page">\r
    <section class="login-visual">\r
        <div class="visual-content"><span class="eyebrow">GREEN ORCHARDS ECD CENTER</span>\r
            <h1>Nurturing Young Minds,<span>Growing Bright Futures</span></h1>\r
            <p>Green Orchards Early Childhood Development<br>Where every child blossoms.</p>\r
        </div>\r
    </section>\r
    <section class="login-section">\r
        <div class="login-card">\r
            <div class="logo">\r
                <div class="logo-tree">\u{1F333}</div>\r
                <div>\r
                    <h2>GREEN</h2>\r
                    <h2>ORCHARDS</h2><span>Day Care Center</span>\r
                </div>\r
            </div>\r
            <div class="login-heading">\r
                <h1>Welcome Back!</h1>\r
                <p>Sign in to continue to your account</p>\r
            </div>\r
            <form (ngSubmit)="login()">\r
                <div class="form-group"><label>Email</label><input type="email" [(ngModel)]="email" name="email"\r
                        placeholder="Enter your email"></div>\r
                <div class="form-group"><label>Password</label>\r
                    <div class="password-row"><input [type]="showPassword?'text':'password'" [(ngModel)]="password"\r
                            name="password" placeholder="Enter your password"><button type="button"\r
                            (click)="togglePassword()">{{showPassword?'Hide':'Show'}}</button></div>\r
                </div>\r
                <div class="login-options"><label><input type="checkbox" [(ngModel)]="rememberMe" name="rememberMe">\r
                        Remember me</label><a href="#">Forgot password?</a></div>@if(errorMessage){<div\r
                    class="message error">{{errorMessage}}</div>}@if(successMessage){<div class="message success">\r
                    {{successMessage}}</div>}<button class="login-button" type="submit">\u{1F510} Sign In</button>\r
            </form>\r
            <div class="login-footer">Don't have an account? <a routerLink="/create-account">Create one now</a></div>\r
        </div>\r
    </section>\r
</div>`, styles: ['/* src/app/pages/login/login.component.scss */\n.login-page {\n  min-height: calc(100vh - 74px);\n  display: grid;\n  grid-template-columns: 50% 50%;\n  background: #fffdf5;\n}\n.login-visual {\n  position: relative;\n  min-height: 650px;\n  background:\n    linear-gradient(\n      to right,\n      rgba(27, 94, 32, 0.08),\n      rgba(255, 255, 255, 0.12)),\n    url(/assets/images/login-tree-bg.svg);\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  align-items: flex-end;\n  padding: 55px;\n  overflow: hidden;\n}\n.login-visual:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(27, 94, 32, 0.18),\n      transparent 70%);\n}\n.visual-content {\n  position: relative;\n  z-index: 1;\n  color: #fff;\n  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);\n}\n.eyebrow {\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n.visual-content h1 {\n  font-size: 48px;\n  max-width: 620px;\n  color: #fff;\n  margin: 16px 0;\n}\n.visual-content h1 span {\n  display: block;\n  color: #dff3df;\n}\n.visual-content p {\n  font-size: 18px;\n  line-height: 1.6;\n}\n.login-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 50px;\n}\n.login-card {\n  width: min(450px, 100%);\n  background: #fff;\n  padding: 42px;\n  border-radius: 22px;\n  box-shadow: 0 18px 55px rgba(27, 94, 32, 0.12);\n  border: 1px solid #d7e6d8;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 30px;\n}\n.logo-tree {\n  font-size: 48px;\n}\n.logo h2 {\n  margin: 0;\n  color: #1b5e20;\n  font-size: 20px;\n  line-height: 1;\n}\n.logo span {\n  font-size: 10px;\n  letter-spacing: 2px;\n  color: #78907b;\n}\n.login-heading h1 {\n  margin: 0 0 8px;\n  font-size: 32px;\n}\n.login-heading p {\n  margin: 0 0 28px;\n  color: #718077;\n}\n.form-group {\n  margin-bottom: 18px;\n}\n.form-group label {\n  display: block;\n  font-weight: 700;\n  margin-bottom: 7px;\n}\n.form-group input {\n  width: 100%;\n  padding: 13px 14px;\n  border: 1px solid #c9d9cc;\n  border-radius: 10px;\n  font-size: 15px;\n  outline: none;\n}\n.password-row {\n  display: flex;\n  gap: 7px;\n}\n.password-row input {\n  flex: 1;\n}\n.password-row button {\n  border: 1px solid #c9d9cc;\n  background: #fff;\n  border-radius: 10px;\n  padding: 0 12px;\n}\n.login-options {\n  display: flex;\n  justify-content: space-between;\n  margin: 6px 0 18px;\n  font-size: 14px;\n}\n.login-options a,\n.login-footer a {\n  color: #2e7d32;\n  font-weight: 700;\n}\n.message {\n  padding: 11px;\n  border-radius: 9px;\n  margin-bottom: 14px;\n  font-size: 14px;\n}\n.error {\n  background: #ffebee;\n  color: #b71c1c;\n}\n.success {\n  background: #e8f5e9;\n  color: #1b5e20;\n}\n.login-button {\n  width: 100%;\n  padding: 14px;\n  border: 0;\n  border-radius: 10px;\n  background: #2e7d32;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 800;\n}\n.login-footer {\n  text-align: center;\n  margin-top: 22px;\n  color: #718077;\n  font-size: 14px;\n}\n@media (max-width: 900px) {\n  .login-page {\n    grid-template-columns: 1fr;\n  }\n  .login-visual {\n    min-height: 380px;\n  }\n  .visual-content h1 {\n    font-size: 38px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 12 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-AVJZHJ4W.js.map
