import {
  AuthService
} from "./chunk-FL5EID2E.js";
import {
  Router
} from "./chunk-VIAZ62ZB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TNJ5J3JW.js";
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IDCGIEV6.js";

// src/app/pages/admin-dashboard/admin-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminDashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function AdminDashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function AdminDashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Loading dashboard data\u2026");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_Conditional_14_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label")(2, "span");
    \u0275\u0275text(3, "Full name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Conditional_14_Conditional_15_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.fullName, $event) || (ctx_r0.editForm.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label")(6, "span");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Conditional_14_Conditional_15_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.email, $event) || (ctx_r0.editForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label")(10, "span");
    \u0275\u0275text(11, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Conditional_14_Conditional_15_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.role, $event) || (ctx_r0.editForm.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 18);
    \u0275\u0275text(14, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 19);
    \u0275\u0275text(16, "Staff");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "label")(18, "span");
    \u0275\u0275text(19, "New password (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Conditional_14_Conditional_15_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.password, $event) || (ctx_r0.editForm.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 21)(22, "button", 22);
    \u0275\u0275listener("click", function AdminDashboardComponent_Conditional_14_Conditional_15_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveUser());
    });
    \u0275\u0275text(23, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 23);
    \u0275\u0275listener("click", function AdminDashboardComponent_Conditional_14_Conditional_15_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275text(25, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.role);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.password);
  }
}
function AdminDashboardComponent_Conditional_14_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 24)(12, "button", 25);
    \u0275\u0275listener("click", function AdminDashboardComponent_Conditional_14_For_32_Template_button_click_12_listener() {
      const account_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startEditAccount(account_r4));
    });
    \u0275\u0275text(13, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 26);
    \u0275\u0275listener("click", function AdminDashboardComponent_Conditional_14_For_32_Template_button_click_14_listener() {
      const account_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteUser(account_r4.id));
    });
    \u0275\u0275text(15, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const account_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r4.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r4.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 4, account_r4.createdAt, "dd MMM yyyy"));
  }
}
function AdminDashboardComponent_Conditional_14_For_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275element(9, "br");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 25);
    \u0275\u0275listener("click", function AdminDashboardComponent_Conditional_14_For_52_Template_button_click_12_listener() {
      const child_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openChildDetails(child_r6.id));
    });
    \u0275\u0275text(13, "View");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.parentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.childName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.childAge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.phone);
  }
}
function AdminDashboardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "article", 10)(2, "span");
    \u0275\u0275text(3, "Total Accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "article", 10)(7, "span");
    \u0275\u0275text(8, "Registered Children");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 11)(12, "section", 12)(13, "h2");
    \u0275\u0275text(14, "Accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, AdminDashboardComponent_Conditional_14_Conditional_15_Template, 26, 4, "div", 13);
    \u0275\u0275elementStart(16, "div", 14)(17, "table")(18, "thead")(19, "tr")(20, "th");
    \u0275\u0275text(21, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tbody");
    \u0275\u0275repeaterCreate(31, AdminDashboardComponent_Conditional_14_For_32_Template, 16, 7, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "section", 12)(34, "h2");
    \u0275\u0275text(35, "Registered Children");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 14)(37, "table")(38, "thead")(39, "tr")(40, "th");
    \u0275\u0275text(41, "Parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43, "Child");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th");
    \u0275\u0275text(47, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49, "Details");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "tbody");
    \u0275\u0275repeaterCreate(51, AdminDashboardComponent_Conditional_14_For_52_Template, 14, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalAccounts());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.totalChildren());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.editingUserId !== null ? 15 : -1);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r0.accounts);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r0.children);
  }
}
var _AdminDashboardComponent = class _AdminDashboardComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.accounts = [];
    this.children = [];
    this.loading = true;
    this.errorMessage = "";
    this.successMessage = "";
    this.editingUserId = null;
    this.editForm = { fullName: "", email: "", role: "Admin", password: "" };
  }
  ngOnInit() {
    this.loadDashboard();
  }
  loadDashboard() {
    this.loading = true;
    this.successMessage = "";
    this.auth.getUsers().subscribe({
      next: (users) => {
        this.accounts = users;
      },
      error: () => this.errorMessage = "Unable to load accounts."
    });
    this.auth.getEnrollmentInquiries().subscribe({
      next: (records) => {
        this.children = records;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "Unable to load child registrations.";
        this.loading = false;
      }
    });
  }
  totalAccounts() {
    return this.accounts.length;
  }
  totalChildren() {
    return this.children.length;
  }
  startEditAccount(account) {
    this.editingUserId = account.id;
    this.editForm = {
      fullName: account.fullName,
      email: account.email,
      role: account.role,
      password: ""
    };
  }
  cancelEdit() {
    this.editingUserId = null;
    this.editForm = { fullName: "", email: "", role: "Admin", password: "" };
  }
  saveUser() {
    if (!this.editingUserId)
      return;
    this.auth.updateUser(this.editingUserId, this.editForm).subscribe({
      next: () => {
        this.successMessage = "Account updated successfully.";
        this.cancelEdit();
        this.loadDashboard();
      },
      error: () => this.errorMessage = "Unable to update this account."
    });
  }
  deleteUser(userId) {
    const confirmed = window.confirm("Delete this account?");
    if (!confirmed)
      return;
    this.auth.deleteUser(userId).subscribe({
      next: () => {
        this.successMessage = "Account deleted successfully.";
        this.loadDashboard();
      },
      error: () => this.errorMessage = "Unable to delete this account."
    });
  }
  openChildDetails(childId) {
    this.router.navigate(["/admin/children", childId]);
  }
  logout() {
    this.auth.clearSession();
    this.router.navigate(["/admin-login"]);
  }
};
_AdminDashboardComponent.\u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminDashboardComponent)();
};
_AdminDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["ng-component"]], decls: 15, vars: 3, consts: [[1, "admin-page"], [1, "container"], [1, "page-header"], [1, "page-header-row"], [1, "eyebrow"], ["type", "button", 1, "logout-button", 3, "click"], [1, "message", "error"], [1, "message", "success"], [1, "loading"], [1, "stats-grid"], [1, "stat-card"], [1, "panel-grid"], [1, "panel"], [1, "edit-form"], [1, "table-wrap"], ["name", "editFullName", 3, "ngModelChange", "ngModel"], ["name", "editEmail", 3, "ngModelChange", "ngModel"], ["name", "editRole", 3, "ngModelChange", "ngModel"], ["value", "Admin"], ["value", "Staff"], ["type", "password", "name", "editPassword", "placeholder", "Leave blank to keep current", 3, "ngModelChange", "ngModel"], [1, "inline-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "action-stack"], ["type", "button", 1, "mini-btn", 3, "click"], ["type", "button", 1, "mini-btn", "danger", 3, "click"]], template: function AdminDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div")(5, "p", 4);
    \u0275\u0275text(6, "ADMIN DASHBOARD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1");
    \u0275\u0275text(8, "Center Management");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_9_listener() {
      return ctx.logout();
    });
    \u0275\u0275text(10, "Logout");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, AdminDashboardComponent_Conditional_11_Template, 2, 1, "div", 6);
    \u0275\u0275conditionalCreate(12, AdminDashboardComponent_Conditional_12_Template, 2, 1, "div", 7);
    \u0275\u0275conditionalCreate(13, AdminDashboardComponent_Conditional_13_Template, 2, 0, "div", 8)(14, AdminDashboardComponent_Conditional_14_Template, 53, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx.errorMessage ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.successMessage ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading ? 13 : 14);
  }
}, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.admin-page[_ngcontent-%COMP%] {\n  padding: 72px 0 96px;\n  background: #fffdf5;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0.75rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  font-weight: 800;\n  color: #2e7d32;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2.3rem, 4vw, 3.4rem);\n  line-height: 1.1;\n  color: #1b5e20;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #d7e6d8;\n  border-radius: 18px;\n  box-shadow: 0 10px 30px rgba(27, 94, 32, 0.06);\n  padding: 1.5rem;\n}\n.stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #4d6253;\n  margin-bottom: 0.7rem;\n  font-weight: 700;\n}\n.stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 3vw, 2.8rem);\n  color: #1b5e20;\n}\n.panel-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.3fr;\n  gap: 1.5rem;\n}\n.panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #d7e6d8;\n  border-radius: 18px;\n  padding: 1.2rem;\n  box-shadow: 0 10px 30px rgba(27, 94, 32, 0.05);\n}\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #1b5e20;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.8rem 0.75rem;\n  border-bottom: 1px solid #edf2ee;\n  vertical-align: top;\n}\nth[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-size: 0.82rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.message[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: 10px;\n  margin-bottom: 1rem;\n  font-weight: 700;\n}\n.error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #b71c1c;\n}\n.loading[_ngcontent-%COMP%] {\n  color: #4d6253;\n  font-weight: 700;\n}\n@media (max-width: 780px) {\n  .stats-grid[_ngcontent-%COMP%], \n   .panel-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
var AdminDashboardComponent = _AdminDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [CommonModule, FormsModule], template: `<section class="admin-page">\r
  <div class="container">\r
    <header class="page-header">\r
      <div class="page-header-row">\r
        <div>\r
          <p class="eyebrow">ADMIN DASHBOARD</p>\r
          <h1>Center Management</h1>\r
        </div>\r
        <button class="logout-button" type="button" (click)="logout()">Logout</button>\r
      </div>\r
    </header>\r
\r
    @if (errorMessage) {\r
      <div class="message error">{{ errorMessage }}</div>\r
    }\r
\r
    @if (successMessage) {\r
      <div class="message success">{{ successMessage }}</div>\r
    }\r
\r
    @if (loading) {\r
      <div class="loading">Loading dashboard data\u2026</div>\r
    } @else {\r
      <div class="stats-grid">\r
        <article class="stat-card">\r
          <span>Total Accounts</span>\r
          <strong>{{ totalAccounts() }}</strong>\r
        </article>\r
        <article class="stat-card">\r
          <span>Registered Children</span>\r
          <strong>{{ totalChildren() }}</strong>\r
        </article>\r
      </div>\r
\r
      <div class="panel-grid">\r
        <section class="panel">\r
          <h2>Accounts</h2>\r
\r
          @if (editingUserId !== null) {\r
            <div class="edit-form">\r
              <label>\r
                <span>Full name</span>\r
                <input [(ngModel)]="editForm.fullName" name="editFullName" />\r
              </label>\r
              <label>\r
                <span>Email</span>\r
                <input [(ngModel)]="editForm.email" name="editEmail" />\r
              </label>\r
              <label>\r
                <span>Role</span>\r
                <select [(ngModel)]="editForm.role" name="editRole">\r
                  <option value="Admin">Admin</option>\r
                  <option value="Staff">Staff</option>\r
                </select>\r
              </label>\r
              <label>\r
                <span>New password (optional)</span>\r
                <input [(ngModel)]="editForm.password" type="password" name="editPassword" placeholder="Leave blank to keep current" />\r
              </label>\r
              <div class="inline-actions">\r
                <button type="button" class="btn btn-primary" (click)="saveUser()">Save</button>\r
                <button type="button" class="btn btn-secondary" (click)="cancelEdit()">Cancel</button>\r
              </div>\r
            </div>\r
          }\r
\r
          <div class="table-wrap">\r
            <table>\r
              <thead>\r
                <tr>\r
                  <th>Full Name</th>\r
                  <th>Email</th>\r
                  <th>Role</th>\r
                  <th>Created</th>\r
                  <th>Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (account of accounts; track account.id) {\r
                  <tr>\r
                    <td>{{ account.fullName }}</td>\r
                    <td>{{ account.email }}</td>\r
                    <td>{{ account.role }}</td>\r
                    <td>{{ account.createdAt | date: 'dd MMM yyyy' }}</td>\r
                    <td>\r
                      <div class="action-stack">\r
                        <button type="button" class="mini-btn" (click)="startEditAccount(account)">Edit</button>\r
                        <button type="button" class="mini-btn danger" (click)="deleteUser(account.id)">Delete</button>\r
                      </div>\r
                    </td>\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
        </section>\r
\r
        <section class="panel">\r
          <h2>Registered Children</h2>\r
          <div class="table-wrap">\r
            <table>\r
              <thead>\r
                <tr>\r
                  <th>Parent</th>\r
                  <th>Child</th>\r
                  <th>Age</th>\r
                  <th>Contact</th>\r
                  <th>Details</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                @for (child of children; track child.id) {\r
                  <tr>\r
                    <td>{{ child.parentName }}</td>\r
                    <td>{{ child.childName }}</td>\r
                    <td>{{ child.childAge }}</td>\r
                    <td>{{ child.email }}<br>{{ child.phone }}</td>\r
                    <td><button type="button" class="mini-btn" (click)="openChildDetails(child.id)">View</button></td>\r
                  </tr>\r
                }\r
              </tbody>\r
            </table>\r
          </div>\r
        </section>\r
      </div>\r
    }\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/admin-dashboard/admin-dashboard.component.scss */\n.admin-page {\n  padding: 72px 0 96px;\n  background: #fffdf5;\n}\n.page-header {\n  margin-bottom: 2rem;\n}\n.eyebrow {\n  display: inline-block;\n  margin: 0 0 0.75rem;\n  font-size: 0.72rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  font-weight: 800;\n  color: #2e7d32;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: clamp(2.3rem, 4vw, 3.4rem);\n  line-height: 1.1;\n  color: #1b5e20;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n}\n.stat-card {\n  background: #fff;\n  border: 1px solid #d7e6d8;\n  border-radius: 18px;\n  box-shadow: 0 10px 30px rgba(27, 94, 32, 0.06);\n  padding: 1.5rem;\n}\n.stat-card span {\n  display: block;\n  color: #4d6253;\n  margin-bottom: 0.7rem;\n  font-weight: 700;\n}\n.stat-card strong {\n  font-size: clamp(2rem, 3vw, 2.8rem);\n  color: #1b5e20;\n}\n.panel-grid {\n  display: grid;\n  grid-template-columns: 1fr 1.3fr;\n  gap: 1.5rem;\n}\n.panel {\n  background: #fff;\n  border: 1px solid #d7e6d8;\n  border-radius: 18px;\n  padding: 1.2rem;\n  box-shadow: 0 10px 30px rgba(27, 94, 32, 0.05);\n}\n.panel h2 {\n  margin-top: 0;\n  color: #1b5e20;\n}\n.table-wrap {\n  overflow: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth,\ntd {\n  text-align: left;\n  padding: 0.8rem 0.75rem;\n  border-bottom: 1px solid #edf2ee;\n  vertical-align: top;\n}\nth {\n  color: #2e7d32;\n  font-size: 0.82rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\ntbody tr:last-child td {\n  border-bottom: none;\n}\n.message {\n  padding: 12px 14px;\n  border-radius: 10px;\n  margin-bottom: 1rem;\n  font-weight: 700;\n}\n.error {\n  background: #ffebee;\n  color: #b71c1c;\n}\n.loading {\n  color: #4d6253;\n  font-weight: 700;\n}\n@media (max-width: 780px) {\n  .stats-grid,\n  .panel-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/pages/admin-dashboard/admin-dashboard.component.ts", lineNumber: 13 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-J5SCYT3B.js.map
