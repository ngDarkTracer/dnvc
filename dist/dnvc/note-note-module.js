(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["note-note-module"],{

/***/ "4D6J":
/*!*************************************!*\
  !*** ./src/app/note/note.module.ts ***!
  \*************************************/
/*! exports provided: NoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteModule", function() { return NoteModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _note_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-routing.module */ "t32c");
/* harmony import */ var _note_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note.component */ "8hpU");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class NoteModule {
}
NoteModule.ɵfac = function NoteModule_Factory(t) { return new (t || NoteModule)(); };
NoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NoteModule });
NoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _note_routing_module__WEBPACK_IMPORTED_MODULE_1__["NoteRoutingModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NoteModule, { declarations: [_note_component__WEBPACK_IMPORTED_MODULE_2__["NoteComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _note_routing_module__WEBPACK_IMPORTED_MODULE_1__["NoteRoutingModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]] }); })();


/***/ }),

/***/ "8hpU":
/*!****************************************!*\
  !*** ./src/app/note/note.component.ts ***!
  \****************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");





function NoteComponent_h2_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.filterValue);
} }
function NoteComponent_h2_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Toutes les notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "rotate-180": a0 }; };
function NoteComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteComponent_div_46_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Point Down Icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "polygon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.openedMenu));
} }
function NoteComponent_h6_53_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteComponent_h6_53_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r10 = ctx.$implicit; const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.filter(item_r10.note, _r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.note);
} }
function NoteComponent_h2_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Notes de veille [Toutes les notes]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NoteComponent_h2_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Notes de veille [", ctx_r6.filterValue, "]");
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
function NoteComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "March\u00E9s: CEMAC, CEDEAO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Source: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "file-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const con_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, con_r14.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](con_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](con_r14.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Partag\u00E9 par: ", con_r14.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", con_r14.text, " ");
} }
const _c2 = function (a0) { return { "d-block": a0 }; };
const _c3 = function (a1, a2) { return { itemsPerPage: 5, currentPage: a1, totalItems: a2 }; };
const _c4 = function () { return { "position": "absolute", "bottom.px": 0 }; };
const _c5 = function () { return {}; };
const _c6 = function (a0) { return { "position": a0 }; };
class NoteComponent {
    constructor(router, activatedRoute, scroller, breakPointObserver) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.scroller = scroller;
        this.breakPointObserver = breakPointObserver;
        this.filterValue = 'ALL';
        this.actualDate = new Date().toLocaleDateString();
        this.totalItems = 0;
        this.page = 1;
        this.openedMenu = false;
        this.isSmallScreen = false;
        this.filteredNotes = [];
        this.content = [
            {
                note: 'Prix',
                content: [{
                        color: 'red',
                        date: new Date().toLocaleDateString(),
                        author: 'Ministère du commerce',
                        title: 'Hausse des prix de la banane',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloribus eligendi minus molestias quia sint tempore? A, quisquam sapiente?',
                        markets: ['CEMAC', 'ZLECAF']
                    },
                    {
                        color: 'red',
                        date: new Date().toLocaleDateString(),
                        author: 'Ministère de l\'agriculture',
                        title: 'Mauvaises recoltes dans le secteur de la banane',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloribus eligendi minus molestias quia sint tempore? A, quisquam sapiente?',
                        markets: ['CEMAC', 'ZLECAF']
                    }]
            },
            {
                note: 'Procédures douanières',
                content: [{
                        color: 'green',
                        date: new Date().toLocaleDateString(),
                        author: 'Ministère de l\'agriculture',
                        title: 'Baisse des taxes sur l\'importation',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloribus eligendi minus molestias quia sint tempore? A, quisquam sapiente?',
                        markets: ['CEMAC', 'UE']
                    }]
            },
            {
                note: 'Règlementations',
                content: [{
                        color: 'red',
                        date: new Date().toLocaleDateString(),
                        author: 'Ministère du commerce',
                        title: 'Nouvelles règles concernant l\'importation de la banane',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloribus eligendi minus molestias quia sint tempore? A, quisquam sapiente?',
                        markets: ['CEMAC', 'ZLECAF']
                    }]
            },
            {
                note: 'Débouchés',
                content: [{
                        color: 'green',
                        date: new Date().toLocaleDateString(),
                        author: 'Ministère du commerce',
                        title: 'Le marché de la banane de plus en plus rentable',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloribus eligendi minus molestias quia sint tempore? A, quisquam sapiente?',
                        markets: ['CEMAC', 'CEDEAO']
                    }]
            }
        ];
    }
    filter(item, elt) {
        document.querySelectorAll('.active-item').forEach((i) => {
            i.classList.remove('active-item');
        });
        this.filterValue = item.toString();
        this.totalItems = 0;
        this.filteredNotes = [];
        this.page = 1;
        if (item === 'ALL') {
            this.content.forEach((element) => {
                element.content.forEach((alert) => {
                    this.filteredNotes.push(alert);
                });
                this.totalItems += element.content.length;
            });
        }
        else {
            this.content.forEach((element) => {
                if (element.note === item) {
                    element.content.forEach((note) => {
                        this.filteredNotes.push(note);
                    });
                    this.totalItems = element.content.length;
                }
            });
        }
        elt.classList.add('active-item');
    }
    ngOnInit() {
        const url = this.activatedRoute.snapshot.paramMap.get('note');
        this.currentNote = url;
        this.filter('ALL');
        this.breakPointObserver.observe(['(max-width: 765px)']).subscribe(result => {
            if (result.matches) {
                this.isSmallScreen = true;
            }
            else {
                this.isSmallScreen = false;
            }
        });
    }
    open() {
        this.openedMenu = !this.openedMenu;
    }
}
NoteComponent.ɵfac = function NoteComponent_Factory(t) { return new (t || NoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
NoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoteComponent, selectors: [["app-note"]], decls: 62, vars: 23, consts: [[1, "background-threads", "careers-threads"], [1, "fade-in-section", "disable-fade-in", "is-visible", "fade-in-hero", "disable-transform"], [1, "container", "hero-splash-container"], [1, "row", "pv90-60"], [1, "col-sm-12", "col-md-8", "hero-splash"], ["routerLink", "/notes", 1, "hero-parent-title", "crown-link"], [1, "h1", "small", "mb0", "d-inline"], [1, "hero-title", 2, "color", "white"], [1, "col-12"], [1, "col-sm-12", "col-md-5"], [1, "background-grid-white"], [1, "container", "teaser-container"], [1, "header-subsection-date-section", "d-flex"], [1, "header-subsection-date"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-sm-12", "col-md-5", "teaser-context", "pv120-90"], [1, "col-sm-12", "col-md-5", "order-first", "teaser-image", "pv120-90"], [1, "fade-in-section", "disable-fade-in", "is-visible"], [1, "gatsby-image-wrapper", 2, "position", "relative", "overflow", "hidden", "max-width", "533px", "max-height", "400px"], ["aria-hidden", "true", 2, "width", "100%", "padding-bottom", "75.188%"], ["aria-hidden", "true", "src", "", "alt", "", 2, "position", "absolute", "top", "0px", "left", "0px", "width", "100%", "height", "100%", "object-fit", "cover", "object-position", "center center", "opacity", "0", "transition-delay", "500ms"], ["srcset", "../../assets/notes.jpg 133w,\n../../assets/notes.jpg 267w,\n../../assets/notes.jpg 533w,\n../../assets/notes.jpg 600w", "sizes", "(max-width: 533px) 100vw, 533px"], ["sizes", "(max-width: 533px) 100vw, 533px", "srcset", "../../assets/notes.jpg 133w,\n../../assets/notes.jpg 267w,\n../../assets/notes.jpg 533w,\n../../assets/notes.jpg 600w", "src", "../../assets/notes.jpg", "alt", "", "loading", "lazy", 2, "position", "absolute", "top", "0px", "left", "0px", "width", "100%", "height", "100%", "object-fit", "cover", "object-position", "center center", "opacity", "1", "transition", "opacity 500ms ease 0s"], ["srcset", "../../assets/notes.jpeg 133w,\n../../assets/notes.jpg 267w,\n../../assets/notes.jpg 533w,\n../../assets/notes.jpg 600w", "sizes", "(max-width: 533px) 100vw, 533px"], ["loading", "lazy", "sizes", "(max-width: 533px) 100vw, 533px", "srcset", "../../assets/notes.jpg 133w,\n../../assets/notes.jpg 267w,\n../../assets/notes.jpg 533w,\n../../assets/notes.jpg 600w", "src", "../../assets/notes.jpg", "alt", "", 2, "position", "absolute", "top", "0", "left", "0", "opacity", "1", "width", "100%", "height", "100%", "object-fit", "cover", "object-position", "center"], [1, "border-top-black", "is-visible"], [1, "content-section-mobile", "background-white"], [1, "container", "content_nav-container"], [1, "row"], [1, "col-lg-4", "col-md-12", "col-sm-12", "d-md-block", "pt120", "mb45"], [1, "jump-nav"], [1, "jump-nav__container"], [1, "jump-nav__header"], [1, "label"], ["class", "h6 bold mb0 d-block d-md-none", 4, "ngIf"], ["class", "jump-nav__mobile", 4, "ngIf"], [1, "jump-nav__items", 3, "ngClass"], [1, "mb0", "pt15", "jump-nav__item-wrapper"], [1, "jump-nav__item", "bold", 2, "cursor", "pointer", 3, "click"], ["elt", ""], ["class", "mb0 pt15 jump-nav__item-wrapper", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-md-12", "col-sm-12", "border-left-black", "pb120-90", "pt120-45", "content-area-content"], [1, "free-form-content__content", "wysiwyg-wrapper"], ["class", "pb100", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["previousLabel", "Pr\u00E9c\u00E9dent", "nextLabel", "Suivant", "responsive", "true", 2, "position", "absolute", "bottom", "15px", 3, "ngStyle", "pageChange"], [1, "h6", "bold", "mb0", "d-block", "d-md-none"], [1, "jump-nav__mobile"], [1, "jump-nav__mobile-button", 3, "click"], ["aria-labelledby", "point-down-icon", "role", "img", "viewBox", "0 0 30 30", 1, "icon", "icon-white", 3, "ngClass"], ["id", "point-down-icon"], ["fill-rule", "nonzero", "points", "23.354 12.075 15.499 19.929 7.646 12.075 8.353 11.368 15.498 18.514 22.646 11.367 23.354 12.075"], [1, "pb100"], [1, "wfb-card-wrapper", "pb60"], [1, "row", "no-gutters"], [1, "col-md-12"], [1, "wfb-card__body-container"], [1, "wfb-card__link-container"], [1, "col-4", 2, "padding", "2px 12px", "width", "100px", "margin-right", "8px", 3, "ngStyle"], [1, "col-8"], [1, "thee-link-container"], [1, "wfb-card__text", "col-md-4"], [2, "color", "darkgray", "font-size", "14px"], [1, "wfb-card__text", "col-md-8"], [2, "font-weight", "normal", "margin-bottom", "0"], [1, "wfb-card__text", "col-xl-6", "col-lg-6", "col-md-6"], [1, "wfb-card__text", "col-xl-4", "col-lg-4", "col-md-4"], [2, "position", "absolute", "right", "0", "top", "-12px", "color", "darkgray", "font-size", "14px"], ["href", "#", "target", "_blank", 1, "wfb-card__icon", "pdf", "col-xl-2", "col-lg-2", "col-md-2", 2, "margin", "0", "border", "none"], ["role", "img", "aria-labelledby", "file-icon", "viewBox", "0 0 30 30", 1, "icon"], ["d", "M16.667,7 L9,7 L9,24 L22,24 L22,12.308 L16.667,7 Z M17,8.742 L20.273,12 L17,12 L17,8.742 Z M10,23 L10,8 L16,8 L16,13 L21,13 L21,23 L10,23 Z", "fill", "#161618", "fill-rule", "nonzero"]], template: function NoteComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Toutes les notes de veilles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores, consequuntur culpa eius eligendi enim eos esse excepturi, fugit id itaque laboriosam molestiae nam nesciunt nisi nobis nostrum obcaecati optio pariatur provident, quasi quibusdam rem sint vero voluptate! Asperiores atque dignissimos dolore illo impedit perferendis quia quod reiciendis rerum sit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "source", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "noscript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "source", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Contenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, NoteComponent_h2_44_Template, 2, 1, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, NoteComponent_h2_45_Template, 2, 0, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, NoteComponent_div_46_Template, 6, 3, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h6", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoteComponent_Template_a_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51); return ctx.filter("ALL", _r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Toutes les notes de veilles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, NoteComponent_h6_53_Template, 5, 1, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, NoteComponent_h2_57_Template, 2, 0, "h2", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, NoteComponent_h2_58_Template, 2, 1, "h2", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, NoteComponent_div_59_Template, 38, 7, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "pagination-controls", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function NoteComponent_Template_pagination_controls_pageChange_61_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Derniere mise a jour: ", ctx.actualDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterValue !== "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterValue === "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSmallScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.openedMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterValue === "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterValue !== "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](60, 11, ctx.filteredNotes, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c3, ctx.page, ctx.totalItems)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c6, ctx.isSmallScreen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c5)));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "t32c":
/*!*********************************************!*\
  !*** ./src/app/note/note-routing.module.ts ***!
  \*********************************************/
/*! exports provided: NoteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteRoutingModule", function() { return NoteRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _note_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note.component */ "8hpU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _note_component__WEBPACK_IMPORTED_MODULE_1__["NoteComponent"] }];
class NoteRoutingModule {
}
NoteRoutingModule.ɵfac = function NoteRoutingModule_Factory(t) { return new (t || NoteRoutingModule)(); };
NoteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NoteRoutingModule });
NoteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NoteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=note-note-module.js.map