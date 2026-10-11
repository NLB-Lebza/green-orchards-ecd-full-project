import {
  AuthService
} from "./chunk-FL5EID2E.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-VIAZ62ZB.js";
import "./chunk-7IZRSUFE.js";
import {
  CommonModule,
  DatePipe
} from "./chunk-R7EQXQS4.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IDCGIEV6.js";

// src/app/pages/admin-child-detail/admin-child-detail.component.ts
function AdminChildDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function AdminChildDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 4)(1, "p", 5);
    \u0275\u0275text(2, "ENROLLMENT DETAILS");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 6)(6, "div")(7, "span");
    \u0275\u0275text(8, "Parent");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div")(12, "span");
    \u0275\u0275text(13, "Child age");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div")(17, "span");
    \u0275\u0275text(18, "Email");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(21, "div")(22, "span");
    \u0275\u0275text(23, "Phone");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(26, "div")(27, "span");
    \u0275\u0275text(28, "Submitted");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(32, "div", 7)(33, "h2");
    \u0275\u0275text(34, "Notes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(35, "p");
    \u0275\u0275text(36);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.child.childName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.child.parentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.child.childAge);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.child.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.child.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 7, ctx_r0.child.submittedAt, "dd MMM yyyy, h:mm a"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.child.message || "No additional notes were provided.");
  }
}
var _AdminChildDetailComponent = class _AdminChildDetailComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.child = null;
    this.errorMessage = "";
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.auth.getEnrollmentInquiries().subscribe({
      next: (records) => {
        this.child = records.find((r) => r.id === id) ?? null;
        if (!this.child) {
          this.errorMessage = "Enrollment record was not found.";
        }
      },
      error: () => {
        this.errorMessage = "Unable to load child registration details.";
      }
    });
  }
  goBack() {
    this.router.navigate(["/admin"]);
  }
};
_AdminChildDetailComponent.\u0275fac = function AdminChildDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminChildDetailComponent)();
};
_AdminChildDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminChildDetailComponent, selectors: [["ng-component"]], decls: 6, vars: 2, consts: [[1, "detail-page"], [1, "container", "detail-shell"], ["type", "button", 1, "back-link", 3, "click"], [1, "message", "error"], [1, "detail-card"], [1, "eyebrow"], [1, "detail-grid"], [1, "notes-box"]], template: function AdminChildDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275domListener("click", function AdminChildDetailComponent_Template_button_click_2_listener() {
      return ctx.goBack();
    });
    \u0275\u0275text(3, "\u2190 Back to dashboard");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, AdminChildDetailComponent_Conditional_4_Template, 2, 1, "div", 3);
    \u0275\u0275conditionalCreate(5, AdminChildDetailComponent_Conditional_5_Template, 37, 10, "article", 4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.errorMessage ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.child ? 5 : -1);
  }
}, dependencies: [CommonModule, DatePipe], styles: ["\n\n.detail-page[_ngcontent-%COMP%] {\n  padding: 4rem 1.5rem 5rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7f2eb 0%,\n      #f4eadf 100%);\n  min-height: 100vh;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n}\n.detail-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.back-link[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  border: none;\n  background: transparent;\n  color: #7a4b2d;\n  font-weight: 700;\n  cursor: pointer;\n}\n.detail-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(87, 58, 42, 0.08);\n  border-radius: 24px;\n  box-shadow: 0 18px 40px rgba(81, 55, 43, 0.08);\n  padding: 2rem;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n  color: #7a4b2d;\n  font-size: 0.74rem;\n  font-weight: 800;\n  letter-spacing: 0.15em;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0 0 2rem;\n  font-size: clamp(2rem, 3vw, 2.75rem);\n  color: #39271d;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem 1.5rem;\n  margin-bottom: 2rem;\n}\n.detail-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  background: #f8f3ee;\n  border-radius: 16px;\n  padding: 1rem;\n}\n.detail-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #6d5a4f;\n}\n.detail-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2d211d;\n  font-size: 1rem;\n}\n.notes-box[_ngcontent-%COMP%] {\n  background: #fffaf5;\n  border: 1px solid rgba(122, 75, 45, 0.12);\n  border-radius: 18px;\n  padding: 1.4rem;\n}\n.notes-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  color: #39271d;\n}\n.notes-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #4c3a32;\n  line-height: 1.7;\n}\n.message[_ngcontent-%COMP%] {\n  padding: 0.9rem 1rem;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.message.error[_ngcontent-%COMP%] {\n  background: #ffe4e1;\n  color: #8d2d2d;\n}\n/*# sourceMappingURL=admin-child-detail.component.css.map */"] });
var AdminChildDetailComponent = _AdminChildDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminChildDetailComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [CommonModule], template: `<section class="detail-page">\r
  <div class="container detail-shell">\r
    <button type="button" class="back-link" (click)="goBack()">\u2190 Back to dashboard</button>\r
\r
    @if (errorMessage) {\r
      <div class="message error">{{ errorMessage }}</div>\r
    }\r
\r
    @if (child) {\r
      <article class="detail-card">\r
        <p class="eyebrow">ENROLLMENT DETAILS</p>\r
        <h1>{{ child.childName }}</h1>\r
\r
        <div class="detail-grid">\r
          <div><span>Parent</span><strong>{{ child.parentName }}</strong></div>\r
          <div><span>Child age</span><strong>{{ child.childAge }}</strong></div>\r
          <div><span>Email</span><strong>{{ child.email }}</strong></div>\r
          <div><span>Phone</span><strong>{{ child.phone }}</strong></div>\r
          <div><span>Submitted</span><strong>{{ child.submittedAt | date: 'dd MMM yyyy, h:mm a' }}</strong></div>\r
        </div>\r
\r
        <div class="notes-box">\r
          <h2>Notes</h2>\r
          <p>{{ child.message || 'No additional notes were provided.' }}</p>\r
        </div>\r
      </article>\r
    }\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/admin-child-detail/admin-child-detail.component.scss */\n.detail-page {\n  padding: 4rem 1.5rem 5rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7f2eb 0%,\n      #f4eadf 100%);\n  min-height: 100vh;\n}\n.container {\n  max-width: 960px;\n  margin: 0 auto;\n}\n.detail-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.back-link {\n  align-self: flex-start;\n  border: none;\n  background: transparent;\n  color: #7a4b2d;\n  font-weight: 700;\n  cursor: pointer;\n}\n.detail-card {\n  background: #fff;\n  border: 1px solid rgba(87, 58, 42, 0.08);\n  border-radius: 24px;\n  box-shadow: 0 18px 40px rgba(81, 55, 43, 0.08);\n  padding: 2rem;\n}\n.eyebrow {\n  margin: 0 0 0.8rem;\n  color: #7a4b2d;\n  font-size: 0.74rem;\n  font-weight: 800;\n  letter-spacing: 0.15em;\n}\nh1 {\n  margin: 0 0 2rem;\n  font-size: clamp(2rem, 3vw, 2.75rem);\n  color: #39271d;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem 1.5rem;\n  margin-bottom: 2rem;\n}\n.detail-grid div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  background: #f8f3ee;\n  border-radius: 16px;\n  padding: 1rem;\n}\n.detail-grid span {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #6d5a4f;\n}\n.detail-grid strong {\n  color: #2d211d;\n  font-size: 1rem;\n}\n.notes-box {\n  background: #fffaf5;\n  border: 1px solid rgba(122, 75, 45, 0.12);\n  border-radius: 18px;\n  padding: 1.4rem;\n}\n.notes-box h2 {\n  margin: 0 0 0.5rem;\n  color: #39271d;\n}\n.notes-box p {\n  margin: 0;\n  color: #4c3a32;\n  line-height: 1.7;\n}\n.message {\n  padding: 0.9rem 1rem;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.message.error {\n  background: #ffe4e1;\n  color: #8d2d2d;\n}\n/*# sourceMappingURL=admin-child-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminChildDetailComponent, { className: "AdminChildDetailComponent", filePath: "src/app/pages/admin-child-detail/admin-child-detail.component.ts", lineNumber: 12 });
})();
export {
  AdminChildDetailComponent
};
//# sourceMappingURL=chunk-APILN6U5.js.map
