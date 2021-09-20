(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sectors-sectors-module"],{

/***/ "0cCU":
/*!*******************************************!*\
  !*** ./src/app/sectors/sectors.module.ts ***!
  \*******************************************/
/*! exports provided: SectorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorsModule", function() { return SectorsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sectors_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sectors-routing.module */ "YDJe");
/* harmony import */ var _sectors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sectors.component */ "gQRn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SectorsModule {
}
SectorsModule.ɵfac = function SectorsModule_Factory(t) { return new (t || SectorsModule)(); };
SectorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SectorsModule });
SectorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _sectors_routing_module__WEBPACK_IMPORTED_MODULE_1__["SectorsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SectorsModule, { declarations: [_sectors_component__WEBPACK_IMPORTED_MODULE_2__["SectorsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _sectors_routing_module__WEBPACK_IMPORTED_MODULE_1__["SectorsRoutingModule"]] }); })();


/***/ }),

/***/ "YDJe":
/*!***************************************************!*\
  !*** ./src/app/sectors/sectors-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SectorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorsRoutingModule", function() { return SectorsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sectors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sectors.component */ "gQRn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _sectors_component__WEBPACK_IMPORTED_MODULE_1__["SectorsComponent"] }];
class SectorsRoutingModule {
}
SectorsRoutingModule.ɵfac = function SectorsRoutingModule_Factory(t) { return new (t || SectorsRoutingModule)(); };
SectorsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SectorsRoutingModule });
SectorsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SectorsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "gQRn":
/*!**********************************************!*\
  !*** ./src/app/sectors/sectors.component.ts ***!
  \**********************************************/
/*! exports provided: SectorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorsComponent", function() { return SectorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SectorsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectorsComponent.ɵfac = function SectorsComponent_Factory(t) { return new (t || SectorsComponent)(); };
SectorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectorsComponent, selectors: [["app-sectors"]], decls: 2, vars: 0, template: function SectorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sectors works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0b3JzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=sectors-sectors-module.js.map