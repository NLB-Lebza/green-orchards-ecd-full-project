import {
  ApiService
} from "./chunk-7IZRSUFE.js";
import {
  CommonModule,
  NgForOf
} from "./chunk-R7EQXQS4.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-IDCGIEV6.js";

// src/app/pages/programs/programs.component.ts
function ProgramsComponent_article_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r1.minimumAge, "\u2013", p_r1.maximumAge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Ages ", p_r1.minimumAge, "\u2013", p_r1.maximumAge);
  }
}
var _ProgramsComponent = class _ProgramsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.programs = [];
  }
  ngOnInit() {
    this.api.get("Programs").subscribe({
      next: (d) => this.programs = d,
      error: () => this.programs = [
        { id: 1, name: "Little Explorers", description: "Early learning through play and discovery.", minimumAge: 2, maximumAge: 3, imageUrl: "", createdAt: "" },
        { id: 2, name: "Growing Minds", description: "Creative learning and social development.", minimumAge: 4, maximumAge: 5, imageUrl: "", createdAt: "" }
      ]
    });
  }
};
_ProgramsComponent.\u0275fac = function ProgramsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProgramsComponent)();
};
_ProgramsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgramsComponent, selectors: [["ng-component"]], decls: 11, vars: 1, consts: [[1, "page", "programs-page"], [1, "container"], [1, "page-header"], [1, "eyebrow"], [1, "page-intro"], [1, "grid", "programs-grid"], ["class", "card program-card", 4, "ngFor", "ngForOf"], [1, "card", "program-card"], [1, "program-badge"]], template: function ProgramsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "p", 3);
    \u0275\u0275text(4, "OUR PROGRAMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1");
    \u0275\u0275text(6, "Our Programs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8, "Age-appropriate programs designed to help every child grow.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275template(10, ProgramsComponent_article_10_Template, 9, 6, "article", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx.programs);
  }
}, dependencies: [CommonModule, NgForOf], styles: ["\n\n.programs-page[_ngcontent-%COMP%] {\n  padding: 72px 0 96px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2.3rem, 4vw, 3.4rem);\n  line-height: 1.1;\n  color: #1b5e20;\n}\n.programs-grid[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.program-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.6rem 1.5rem 1.5rem;\n  overflow: hidden;\n}\n.program-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 86px;\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  background: #e8f5e9;\n  color: #2e7d32;\n  font-weight: 800;\n  font-size: 0.72rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n}\n.program-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.7rem;\n  color: #1b5e20;\n  font-size: 1.5rem;\n}\n.program-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  line-height: 1.75;\n  color: #4d6253;\n}\n.program-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-size: 0.95rem;\n}\n/*# sourceMappingURL=programs.component.css.map */"] });
var ProgramsComponent = _ProgramsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgramsComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [CommonModule], template: '<section class="page programs-page">\r\n  <div class="container">\r\n    <header class="page-header">\r\n      <p class="eyebrow">OUR PROGRAMS</p>\r\n      <h1>Our Programs</h1>\r\n    </header>\r\n\r\n    <p class="page-intro">Age-appropriate programs designed to help every child grow.</p>\r\n\r\n    <div class="grid programs-grid">\r\n      <article class="card program-card" *ngFor="let p of programs">\r\n        <div class="program-badge">{{ p.minimumAge }}\u2013{{ p.maximumAge }}</div>\r\n        <h2>{{ p.name }}</h2>\r\n        <p>{{ p.description }}</p>\r\n        <strong>Ages {{ p.minimumAge }}\u2013{{ p.maximumAge }}</strong>\r\n      </article>\r\n    </div>\r\n  </div>\r\n</section>', styles: ["/* src/app/pages/programs/programs.component.scss */\n.programs-page {\n  padding: 72px 0 96px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: clamp(2.3rem, 4vw, 3.4rem);\n  line-height: 1.1;\n  color: #1b5e20;\n}\n.programs-grid {\n  margin-top: 2rem;\n}\n.program-card {\n  position: relative;\n  padding: 1.6rem 1.5rem 1.5rem;\n  overflow: hidden;\n}\n.program-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 86px;\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  background: #e8f5e9;\n  color: #2e7d32;\n  font-weight: 800;\n  font-size: 0.72rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n}\n.program-card h2 {\n  margin: 0 0 0.7rem;\n  color: #1b5e20;\n  font-size: 1.5rem;\n}\n.program-card p {\n  margin: 0 0 1rem;\n  line-height: 1.75;\n  color: #4d6253;\n}\n.program-card strong {\n  color: #2e7d32;\n  font-size: 0.95rem;\n}\n/*# sourceMappingURL=programs.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgramsComponent, { className: "ProgramsComponent", filePath: "src/app/pages/programs/programs.component.ts", lineNumber: 12 });
})();
export {
  ProgramsComponent
};
//# sourceMappingURL=chunk-W365DRQU.js.map
