import {
  ApiService
} from "./chunk-7IZRSUFE.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IDCGIEV6.js";

// src/app/services/auth.service.ts
var ADMIN_SESSION_KEY = "green_orchards_admin_session";
var _AuthService = class _AuthService {
  constructor() {
    this.api = inject(ApiService);
  }
  readSession() {
    const raw = localStorage.getItem(ADMIN_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  }
  isAdminLoggedIn() {
    const session = this.readSession();
    return !!session && session.role.toLowerCase() === "admin";
  }
  getCurrentAdmin() {
    return this.readSession();
  }
  setSession(user) {
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(user));
  }
  clearSession() {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  }
  login(email, password) {
    return this.api.post("Auth/login", { email, password });
  }
  register(fullName, email, password) {
    return this.api.post("Auth/register", { fullName, email, password });
  }
  getUsers() {
    return this.api.get("Auth/users");
  }
  updateUser(userId, payload) {
    return this.api.put(`Auth/users/${userId}`, payload);
  }
  deleteUser(userId) {
    return this.api.delete(`Auth/users/${userId}`);
  }
  getEnrollmentInquiries() {
    return this.api.get("Enrollment");
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)();
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-FL5EID2E.js.map
