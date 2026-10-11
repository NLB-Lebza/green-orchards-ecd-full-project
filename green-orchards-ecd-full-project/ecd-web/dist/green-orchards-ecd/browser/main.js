import {
  AuthService
} from "./chunk-FL5EID2E.js";
import {
  Router,
  RouterLink,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-VIAZ62ZB.js";
import "./chunk-7IZRSUFE.js";
import {
  provideHttpClient
} from "./chunk-R7EQXQS4.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-IDCGIEV6.js";

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 38, vars: 0, consts: [[1, "navbar"], [1, "left"], ["routerLink", "/", 1, "brand"], [1, "brand-icon"], ["routerLink", "/"], ["routerLink", "/programs"], ["routerLink", "/gallery"], ["routerLink", "/about"], ["routerLink", "/login"], ["routerLink", "/admin-login", 1, "nav-login", 2, "margin-left", "auto"], [1, "container", "footer-inner"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
    \u0275\u0275text(4, "\u{1F333}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span")(6, "strong");
    \u0275\u0275text(7, "Green Orchards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9, "day Care Center");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "nav")(11, "a", 4);
    \u0275\u0275text(12, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 5);
    \u0275\u0275text(14, "Programs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 6);
    \u0275\u0275text(16, "Gallery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 7);
    \u0275\u0275text(18, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 8);
    \u0275\u0275text(20, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 9);
    \u0275\u0275text(22, "Admin Login");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "main");
    \u0275\u0275element(24, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "footer")(26, "div", 10)(27, "div")(28, "strong");
    \u0275\u0275text(29, "\u{1F333} Green Orchards Day Care Center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31, "Contact us at info@greenorchards.com ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "You can call us at 083 866 4654");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35, "870 Finetown, Grasmere, Johannesburg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "p");
    \u0275\u0275text(37, "\xA9 2026 Green Orchards Day Care Center. All rights reserved.");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [RouterOutlet, RouterLink], styles: ["\n\n.navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background: #fff;\n  border-bottom: 1px solid #d7e6d8;\n}\n.nav-inner[_ngcontent-%COMP%] {\n  min-height: 74px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #1b5e20;\n  text-decoration: none;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n.brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #607d63;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #263238;\n  text-decoration: none;\n  font-weight: 600;\n}\n.nav-login[_ngcontent-%COMP%] {\n  background: #2e7d32;\n  color: #fff !important;\n  padding: 10px 15px;\n  border-radius: 10px;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #1b5e20;\n  color: #fff;\n  margin-top: 50px;\n}\n.footer-inner[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  display: flex;\n  justify-content: space-between;\n}\n.footer-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #e8f5e9;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, RouterLink], template: '<header class="navbar">\r\n    <div class="left"><a class="brand" routerLink="/"><span\r\n                class="brand-icon">\u{1F333}</span><span><strong>Green Orchards</strong><small>day Care Center</small></span></a>\r\n\r\n        <nav><a routerLink="/">Home</a><a routerLink="/programs">Programs</a><a routerLink="/gallery">Gallery</a><a\r\n                routerLink="/about">About</a>\r\n                <a routerLink="/login">Login</a>\r\n                <a class="nav-login" routerLink="/admin-login" style="margin-left: auto;">Admin Login</a>\r\n            \r\n            </nav>\r\n    </div>\r\n</header>\r\n<main><router-outlet /></main>\r\n<footer>\r\n    <div class="container footer-inner">\r\n        <div><strong>\u{1F333} Green Orchards Day Care Center</strong>\r\n            <p>Contact us at info@greenorchards.com </p>\r\n            <p>You can call us at 083 866 4654</p>\r\n            <p>870 Finetown, Grasmere, Johannesburg</p>\r\n        </div>\r\n        <p>\xA9 2026 Green Orchards Day Care Center. All rights reserved.</p>\r\n    </div>\r\n</footer>', styles: ["/* src/app/app.component.scss */\n.navbar {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background: #fff;\n  border-bottom: 1px solid #d7e6d8;\n}\n.nav-inner {\n  min-height: 74px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #1b5e20;\n  text-decoration: none;\n}\n.brand-icon {\n  font-size: 34px;\n}\n.brand strong,\n.brand small {\n  display: block;\n}\n.brand small {\n  font-size: 11px;\n  color: #607d63;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\nnav {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\nnav a {\n  color: #263238;\n  text-decoration: none;\n  font-weight: 600;\n}\n.nav-login {\n  background: #2e7d32;\n  color: #fff !important;\n  padding: 10px 15px;\n  border-radius: 10px;\n}\nfooter {\n  background: #1b5e20;\n  color: #fff;\n  margin-top: 50px;\n}\n.footer-inner {\n  padding: 30px 0;\n  display: flex;\n  justify-content: space-between;\n}\n.footer-inner p {\n  color: #e8f5e9;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 1 });
})();

// src/app/guards/admin-auth.guard.ts
var adminAuthGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isAdminLoggedIn() ? true : router.createUrlTree(["/admin-login"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", loadComponent: () => import("./chunk-OCUKJ7TY.js").then((m) => m.HomeComponent) },
  { path: "programs", loadComponent: () => import("./chunk-W365DRQU.js").then((m) => m.ProgramsComponent) },
  { path: "gallery", loadComponent: () => import("./chunk-ZQO5MFQW.js").then((m) => m.GalleryComponent) },
  { path: "about", loadComponent: () => import("./chunk-AQKBESUX.js").then((m) => m.AboutComponent) },
  { path: "enroll", loadComponent: () => import("./chunk-376L723V.js").then((m) => m.EnrollComponent) },
  { path: "login", loadComponent: () => import("./chunk-AVJZHJ4W.js").then((m) => m.LoginComponent) },
  { path: "admin-login", loadComponent: () => import("./chunk-GGKYYEE6.js").then((m) => m.AdminLoginComponent) },
  { path: "admin", loadComponent: () => import("./chunk-J5SCYT3B.js").then((m) => m.AdminDashboardComponent), canActivate: [adminAuthGuard] },
  { path: "admin/children/:id", loadComponent: () => import("./chunk-APILN6U5.js").then((m) => m.AdminChildDetailComponent), canActivate: [adminAuthGuard] },
  { path: "create-account", loadComponent: () => import("./chunk-TDJ2KTM4.js").then((m) => m.CreateAccountComponent) },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = { providers: [provideRouter(routes), provideHttpClient()] };

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch(console.error);
//# sourceMappingURL=main.js.map
