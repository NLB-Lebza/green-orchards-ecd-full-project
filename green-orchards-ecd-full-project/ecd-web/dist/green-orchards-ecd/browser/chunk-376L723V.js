import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-TNJ5J3JW.js";
import {
  ApiService
} from "./chunk-7IZRSUFE.js";
import "./chunk-R7EQXQS4.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IDCGIEV6.js";

// src/app/pages/enroll/enroll.component.ts
var _EnrollComponent = class _EnrollComponent {
  constructor() {
    this.api = inject(ApiService);
    this.form = { parentName: "", childName: "", childAge: 0, email: "", phone: "", message: "" };
    this.message = "";
  }
  submit() {
    if (!this.form.parentName.trim() || !this.form.childName.trim() || !this.form.email.includes("@") || !this.form.phone.trim()) {
      this.message = "Please complete the required fields.";
      return;
    }
    this.api.post("Enrollment", this.form).subscribe({
      next: () => this.message = "Thank you. Your enrollment inquiry was received.",
      error: () => this.message = "The inquiry could not be submitted. Please try again."
    });
  }
};
_EnrollComponent.\u0275fac = function EnrollComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EnrollComponent)();
};
_EnrollComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnrollComponent, selectors: [["ng-component"]], decls: 40, vars: 7, consts: [[1, "page", "enroll-page"], [1, "container"], [1, "page-header"], [1, "eyebrow"], [1, "page-intro"], [1, "card", "enrollment-form", 3, "ngSubmit"], [1, "field-grid"], [1, "field"], ["name", "parentName", 3, "ngModelChange", "ngModel"], ["name", "childName", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "childAge", "min", "0", "max", "12", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", 3, "ngModelChange", "ngModel"], ["name", "phone", 3, "ngModelChange", "ngModel"], [1, "field", "full-width"], ["name", "message", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "submit", 1, "btn"], [1, "form-message"]], template: function EnrollComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "p", 3);
    \u0275\u0275text(4, "ENROLLMENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1");
    \u0275\u0275text(6, "Enrollment Inquiry");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8, "Complete the form and Green Orchards can follow up with you.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "form", 5);
    \u0275\u0275listener("ngSubmit", function EnrollComponent_Template_form_ngSubmit_9_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(10, "div", 6)(11, "label", 7)(12, "span");
    \u0275\u0275text(13, "Parent Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function EnrollComponent_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.parentName, $event) || (ctx.form.parentName = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "label", 7)(16, "span");
    \u0275\u0275text(17, "Child Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function EnrollComponent_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.childName, $event) || (ctx.form.childName = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label", 7)(20, "span");
    \u0275\u0275text(21, "Child Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function EnrollComponent_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.childAge, $event) || (ctx.form.childAge = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "label", 7)(24, "span");
    \u0275\u0275text(25, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function EnrollComponent_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "label", 7)(28, "span");
    \u0275\u0275text(29, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function EnrollComponent_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "label", 13)(32, "span");
    \u0275\u0275text(33, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "textarea", 14);
    \u0275\u0275twoWayListener("ngModelChange", function EnrollComponent_Template_textarea_ngModelChange_34_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form.message, $event) || (ctx.form.message = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 15)(36, "button", 16);
    \u0275\u0275text(37, "Submit Inquiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 17);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.parentName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.childName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.childAge);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.phone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.form.message);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.message);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, NgModel, NgForm], styles: ["\n\n.enroll-page[_ngcontent-%COMP%] {\n  padding: 72px 0 96px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2.3rem, 4vw, 3.4rem);\n  line-height: 1.1;\n  color: #1b5e20;\n}\n.page-intro[_ngcontent-%COMP%] {\n  margin: 0 0 2rem;\n  color: #4d6253;\n  font-size: 1.08rem;\n  line-height: 1.7;\n}\n.enrollment-form[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.1rem 1.25rem;\n  margin-bottom: 1.1rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  font-weight: 700;\n  color: #2e4c3f;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #cfe1d2;\n  border-radius: 12px;\n  padding: 0.9rem 1rem;\n  background: #fff;\n  font: inherit;\n  color: #193d2c;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #66bb6a;\n  box-shadow: 0 0 0 4px rgba(102, 187, 106, 0.14);\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 140px;\n  resize: vertical;\n}\n.full-width[_ngcontent-%COMP%] {\n  margin-bottom: 1.1rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.form-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  color: #1b5e20;\n}\n@media (max-width: 680px) {\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=enroll.component.css.map */"] });
var EnrollComponent = _EnrollComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnrollComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [FormsModule], template: '<section class="page enroll-page">\r\n  <div class="container">\r\n    <header class="page-header">\r\n      <p class="eyebrow">ENROLLMENT</p>\r\n      <h1>Enrollment Inquiry</h1>\r\n    </header>\r\n\r\n    <p class="page-intro">Complete the form and Green Orchards can follow up with you.</p>\r\n\r\n    <form class="card enrollment-form" (ngSubmit)="submit()">\r\n      <div class="field-grid">\r\n        <label class="field">\r\n          <span>Parent Name</span>\r\n          <input [(ngModel)]="form.parentName" name="parentName">\r\n        </label>\r\n\r\n        <label class="field">\r\n          <span>Child Name</span>\r\n          <input [(ngModel)]="form.childName" name="childName">\r\n        </label>\r\n\r\n        <label class="field">\r\n          <span>Child Age</span>\r\n          <input type="number" [(ngModel)]="form.childAge" name="childAge" min="0" max="12">\r\n        </label>\r\n\r\n        <label class="field">\r\n          <span>Email</span>\r\n          <input type="email" [(ngModel)]="form.email" name="email">\r\n        </label>\r\n\r\n        <label class="field">\r\n          <span>Phone</span>\r\n          <input [(ngModel)]="form.phone" name="phone">\r\n        </label>\r\n      </div>\r\n\r\n      <label class="field full-width">\r\n        <span>Message</span>\r\n        <textarea [(ngModel)]="form.message" name="message"></textarea>\r\n      </label>\r\n\r\n      <div class="form-actions">\r\n        <button class="btn" type="submit">Submit Inquiry</button>\r\n        <p class="form-message">{{message}}</p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>', styles: ["/* src/app/pages/enroll/enroll.component.scss */\n.enroll-page {\n  padding: 72px 0 96px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: clamp(2.3rem, 4vw, 3.4rem);\n  line-height: 1.1;\n  color: #1b5e20;\n}\n.page-intro {\n  margin: 0 0 2rem;\n  color: #4d6253;\n  font-size: 1.08rem;\n  line-height: 1.7;\n}\n.enrollment-form {\n  padding: 2rem;\n}\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.1rem 1.25rem;\n  margin-bottom: 1.1rem;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  font-weight: 700;\n  color: #2e4c3f;\n}\n.field input,\n.field textarea {\n  width: 100%;\n  border: 1px solid #cfe1d2;\n  border-radius: 12px;\n  padding: 0.9rem 1rem;\n  background: #fff;\n  font: inherit;\n  color: #193d2c;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.field input:focus,\n.field textarea:focus {\n  outline: none;\n  border-color: #66bb6a;\n  box-shadow: 0 0 0 4px rgba(102, 187, 106, 0.14);\n}\n.field textarea {\n  min-height: 140px;\n  resize: vertical;\n}\n.full-width {\n  margin-bottom: 1.1rem;\n}\n.form-actions {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.form-message {\n  margin: 0;\n  font-weight: 700;\n  color: #1b5e20;\n}\n@media (max-width: 680px) {\n  .field-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-actions {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=enroll.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnrollComponent, { className: "EnrollComponent", filePath: "src/app/pages/enroll/enroll.component.ts", lineNumber: 11 });
})();
export {
  EnrollComponent
};
//# sourceMappingURL=chunk-376L723V.js.map
