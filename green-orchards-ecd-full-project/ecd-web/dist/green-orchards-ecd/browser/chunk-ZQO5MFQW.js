import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-IDCGIEV6.js";

// src/app/pages/gallery/gallery.component.ts
var _GalleryComponent = class _GalleryComponent {
};
_GalleryComponent.\u0275fac = function GalleryComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GalleryComponent)();
};
_GalleryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryComponent, selectors: [["ng-component"]], decls: 31, vars: 0, consts: [[1, "page", "gallery-page"], [1, "container"], [1, "page-header"], [1, "eyebrow"], [1, "page-intro"], [1, "grid", "gallery-grid"], [1, "card", "gallery-card"], [1, "card-icon"]], template: function GalleryComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "p", 3);
    \u0275\u0275text(4, "OUR MOMENTS");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "h1");
    \u0275\u0275text(6, "Gallery");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "p", 4);
    \u0275\u0275text(8, "A glimpse into the Green Orchards learning environment.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 5)(10, "article", 6)(11, "div", 7);
    \u0275\u0275text(12, "\u{1F333}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "h3");
    \u0275\u0275text(14, "Outdoor Play");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "p");
    \u0275\u0275text(16, "Learning and exploring outside.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "article", 6)(18, "div", 7);
    \u0275\u0275text(19, "\u{1F3A8}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "h3");
    \u0275\u0275text(21, "Creative Activities");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "p");
    \u0275\u0275text(23, "Art, colour and imagination.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(24, "article", 6)(25, "div", 7);
    \u0275\u0275text(26, "\u{1F4DA}");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "h3");
    \u0275\u0275text(28, "Learning Time");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(29, "p");
    \u0275\u0275text(30, "Stories, songs and discovery.");
    \u0275\u0275domElementEnd()()()()();
  }
}, styles: ["\n\n.gallery-page[_ngcontent-%COMP%] {\n  padding: 72px 0 96px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2.3rem, 4vw, 3.4rem);\n  line-height: 1.1;\n  color: #1b5e20;\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.gallery-card[_ngcontent-%COMP%] {\n  padding: 2rem 1.6rem;\n  text-align: center;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.gallery-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 18px 32px rgba(27, 94, 32, 0.12);\n}\n.card-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 72px;\n  height: 72px;\n  margin: 0 auto 1rem;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #edf7ee,\n      #dff5e0);\n  font-size: 2.2rem;\n}\n.gallery-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  color: #1b5e20;\n}\n.gallery-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.7;\n  color: #4d6253;\n}\n/*# sourceMappingURL=gallery.component.css.map */"] });
var GalleryComponent = _GalleryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryComponent, [{
    type: Component,
    args: [{ standalone: true, template: '<section class="page gallery-page">\r\n  <div class="container">\r\n    <header class="page-header">\r\n      <p class="eyebrow">OUR MOMENTS</p>\r\n      <h1>Gallery</h1>\r\n    </header>\r\n\r\n    <p class="page-intro">A glimpse into the Green Orchards learning environment.</p>\r\n\r\n    <div class="grid gallery-grid">\r\n      <article class="card gallery-card">\r\n        <div class="card-icon">\u{1F333}</div>\r\n        <h3>Outdoor Play</h3>\r\n        <p>Learning and exploring outside.</p>\r\n      </article>\r\n      <article class="card gallery-card">\r\n        <div class="card-icon">\u{1F3A8}</div>\r\n        <h3>Creative Activities</h3>\r\n        <p>Art, colour and imagination.</p>\r\n      </article>\r\n      <article class="card gallery-card">\r\n        <div class="card-icon">\u{1F4DA}</div>\r\n        <h3>Learning Time</h3>\r\n        <p>Stories, songs and discovery.</p>\r\n      </article>\r\n    </div>\r\n  </div>\r\n</section>', styles: ["/* src/app/pages/gallery/gallery.component.scss */\n.gallery-page {\n  padding: 72px 0 96px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: clamp(2.3rem, 4vw, 3.4rem);\n  line-height: 1.1;\n  color: #1b5e20;\n}\n.gallery-grid {\n  margin-top: 2rem;\n}\n.gallery-card {\n  padding: 2rem 1.6rem;\n  text-align: center;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.gallery-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 18px 32px rgba(27, 94, 32, 0.12);\n}\n.card-icon {\n  display: grid;\n  place-items: center;\n  width: 72px;\n  height: 72px;\n  margin: 0 auto 1rem;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #edf7ee,\n      #dff5e0);\n  font-size: 2.2rem;\n}\n.gallery-card h3 {\n  margin: 0 0 0.6rem;\n  color: #1b5e20;\n}\n.gallery-card p {\n  margin: 0;\n  line-height: 1.7;\n  color: #4d6253;\n}\n/*# sourceMappingURL=gallery.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryComponent, { className: "GalleryComponent", filePath: "src/app/pages/gallery/gallery.component.ts", lineNumber: 8 });
})();
export {
  GalleryComponent
};
//# sourceMappingURL=chunk-ZQO5MFQW.js.map
