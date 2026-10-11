import {
  HttpClient
} from "./chunk-R7EQXQS4.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IDCGIEV6.js";

// src/app/services/api.service.ts
var _ApiService = class _ApiService {
  constructor() {
    this.http = inject(HttpClient);
    this.baseUrl = "https://localhost:7080/api";
  }
  get(endpoint) {
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }
  post(endpoint, body) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, body);
  }
  put(endpoint, body) {
    return this.http.put(`${this.baseUrl}/${endpoint}`, body);
  }
  delete(endpoint) {
    return this.http.delete(`${this.baseUrl}/${endpoint}`);
  }
};
_ApiService.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApiService)();
};
_ApiService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
var ApiService = _ApiService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ApiService
};
//# sourceMappingURL=chunk-7IZRSUFE.js.map
