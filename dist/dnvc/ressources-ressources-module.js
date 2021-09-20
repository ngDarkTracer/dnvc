(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ressources-ressources-module"],{

/***/ "/nEN":
/*!*************************************************!*\
  !*** ./src/app/ressources/ressources.module.ts ***!
  \*************************************************/
/*! exports provided: RessourcesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourcesModule", function() { return RessourcesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ressources_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ressources-routing.module */ "ohmN");
/* harmony import */ var _ressources_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ressources.component */ "iIxV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class RessourcesModule {
}
RessourcesModule.ɵfac = function RessourcesModule_Factory(t) { return new (t || RessourcesModule)(); };
RessourcesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RessourcesModule });
RessourcesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ressources_routing_module__WEBPACK_IMPORTED_MODULE_1__["RessourcesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RessourcesModule, { declarations: [_ressources_component__WEBPACK_IMPORTED_MODULE_2__["RessourcesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ressources_routing_module__WEBPACK_IMPORTED_MODULE_1__["RessourcesRoutingModule"]] }); })();


/***/ }),

/***/ "iIxV":
/*!****************************************************!*\
  !*** ./src/app/ressources/ressources.component.ts ***!
  \****************************************************/
/*! exports provided: RessourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourcesComponent", function() { return RessourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RessourcesComponent {
    constructor() { }
    ngOnInit() {
    }
}
RessourcesComponent.ɵfac = function RessourcesComponent_Factory(t) { return new (t || RessourcesComponent)(); };
RessourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RessourcesComponent, selectors: [["app-ressources"]], decls: 2, vars: 0, template: function RessourcesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ressources works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNzb3VyY2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ohmN":
/*!*********************************************************!*\
  !*** ./src/app/ressources/ressources-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: RessourcesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessourcesRoutingModule", function() { return RessourcesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ressources_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ressources.component */ "iIxV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _ressources_component__WEBPACK_IMPORTED_MODULE_1__["RessourcesComponent"] }];
class RessourcesRoutingModule {
}
RessourcesRoutingModule.ɵfac = function RessourcesRoutingModule_Factory(t) { return new (t || RessourcesRoutingModule)(); };
RessourcesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RessourcesRoutingModule });
RessourcesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RessourcesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=ressources-ressources-module.js.map