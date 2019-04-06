(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_pages_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/front-page/front-page.component */ "./src/app/components/pages/front-page/front-page.component.ts");
/* harmony import */ var _components_pages_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/job-list/job-list.component */ "./src/app/components/pages/job-list/job-list.component.ts");
/* harmony import */ var _components_sub_components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sub-components/sign-in-form/sign-in-form.component */ "./src/app/components/sub-components/sign-in-form/sign-in-form.component.ts");
/* harmony import */ var _components_sub_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sub-components/register-form/register-form.component */ "./src/app/components/sub-components/register-form/register-form.component.ts");
/* harmony import */ var _components_sub_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sub-components/editor/editor.component */ "./src/app/components/sub-components/editor/editor.component.ts");
/* harmony import */ var _components_pages_job_description_job_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/job-description/job-description.component */ "./src/app/components/pages/job-description/job-description.component.ts");
/* harmony import */ var _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/dashboard/dashboard.component */ "./src/app/components/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _components_pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/page404/page404.component */ "./src/app/components/pages/page404/page404.component.ts");
/* harmony import */ var _components_sub_components_user_applied_user_applied_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sub-components/user-applied/user-applied.component */ "./src/app/components/sub-components/user-applied/user-applied.component.ts");
/* harmony import */ var _components_sub_components_user_introduction_user_introduction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sub-components/user-introduction/user-introduction.component */ "./src/app/components/sub-components/user-introduction/user-introduction.component.ts");
/* harmony import */ var _components_sub_components_user_recommendations_user_recommendations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sub-components/user-recommendations/user-recommendations.component */ "./src/app/components/sub-components/user-recommendations/user-recommendations.component.ts");
/* harmony import */ var _components_sub_components_user_resume_user_resume_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sub-components/user-resume/user-resume.component */ "./src/app/components/sub-components/user-resume/user-resume.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: "", component: _components_pages_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_2__["FrontPageComponent"] },
    { path: "joblist", component: _components_pages_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_3__["JobListComponent"] },
    { path: "signin", component: _components_sub_components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_4__["SignInFormComponent"] },
    { path: "register", component: _components_sub_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_5__["RegisterFormComponent"] },
    { path: "post", component: _components_sub_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_6__["EditorComponent"] },
    { path: 'jobdetails/:id', component: _components_pages_job_description_job_description_component__WEBPACK_IMPORTED_MODULE_7__["JobDescriptionComponent"] },
    {
        path: 'dashboard/:user', component: _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], children: [
            { path: '', redirectTo: 'intro', pathMatch: 'full' },
            { path: 'history', component: _components_sub_components_user_applied_user_applied_component__WEBPACK_IMPORTED_MODULE_10__["UserAppliedComponent"] },
            { path: 'recommendations', component: _components_sub_components_user_recommendations_user_recommendations_component__WEBPACK_IMPORTED_MODULE_12__["UserRecommendationsComponent"] },
            { path: 'resume', component: _components_sub_components_user_resume_user_resume_component__WEBPACK_IMPORTED_MODULE_13__["UserResumeComponent"] },
            { path: 'intro', component: _components_sub_components_user_introduction_user_introduction_component__WEBPACK_IMPORTED_MODULE_11__["UserIntroductionComponent"] },
        ]
    },
    { path: '404', component: _components_pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__["Page404Component"] },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body-wrapper{\n    margin: 0 auto;\n    width: 1446px;\n    min-width: 1446px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-wrapper\">\n    <app-nav-bar></app-nav-bar>\n    <router-outlet></router-outlet>\n    <app-footer-bar></app-footer-bar>    \n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer-bar/footer-bar.component */ "./src/app/footer-bar/footer-bar.component.ts");
/* harmony import */ var _components_sub_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sub-components/search-bar/search-bar.component */ "./src/app/components/sub-components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_sub_components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sub-components/introduction/introduction.component */ "./src/app/components/sub-components/introduction/introduction.component.ts");
/* harmony import */ var _components_sub_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sub-components/tabs/tabs.component */ "./src/app/components/sub-components/tabs/tabs.component.ts");
/* harmony import */ var _components_pages_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/front-page/front-page.component */ "./src/app/components/pages/front-page/front-page.component.ts");
/* harmony import */ var _components_pages_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/job-list/job-list.component */ "./src/app/components/pages/job-list/job-list.component.ts");
/* harmony import */ var _components_sub_components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sub-components/sign-in-form/sign-in-form.component */ "./src/app/components/sub-components/sign-in-form/sign-in-form.component.ts");
/* harmony import */ var _components_sub_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sub-components/register-form/register-form.component */ "./src/app/components/sub-components/register-form/register-form.component.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _components_sub_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sub-components/editor/editor.component */ "./src/app/components/sub-components/editor/editor.component.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _components_sub_components_alerting_alerting_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sub-components/alerting/alerting.component */ "./src/app/components/sub-components/alerting/alerting.component.ts");
/* harmony import */ var _app_services_list_results_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../app/services/list-results.service */ "./src/app/services/list-results.service.ts");
/* harmony import */ var _components_sub_components_pages_pages_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sub-components/pages/pages.component */ "./src/app/components/sub-components/pages/pages.component.ts");
/* harmony import */ var _components_pages_job_description_job_description_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/job-description/job-description.component */ "./src/app/components/pages/job-description/job-description.component.ts");
/* harmony import */ var _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/dashboard/dashboard.component */ "./src/app/components/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _components_pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/page404/page404.component */ "./src/app/components/pages/page404/page404.component.ts");
/* harmony import */ var _components_sub_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/sub-components/loading/loading.component */ "./src/app/components/sub-components/loading/loading.component.ts");
/* harmony import */ var _components_sub_components_user_introduction_user_introduction_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/sub-components/user-introduction/user-introduction.component */ "./src/app/components/sub-components/user-introduction/user-introduction.component.ts");
/* harmony import */ var _components_sub_components_user_applied_user_applied_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/sub-components/user-applied/user-applied.component */ "./src/app/components/sub-components/user-applied/user-applied.component.ts");
/* harmony import */ var _components_sub_components_user_resume_user_resume_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/sub-components/user-resume/user-resume.component */ "./src/app/components/sub-components/user-resume/user-resume.component.ts");
/* harmony import */ var _components_sub_components_user_recommendations_user_recommendations_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/sub-components/user-recommendations/user-recommendations.component */ "./src/app/components/sub-components/user-recommendations/user-recommendations.component.ts");
/* harmony import */ var _services_router_service_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/router-service.service */ "./src/app/services/router-service.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// * components










// * services















// * google map component

// solve 404 problem

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_7__["FooterBarComponent"],
                _components_sub_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
                _components_sub_components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_9__["IntroductionComponent"],
                _components_sub_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["TabsComponent"],
                _components_pages_front_page_front_page_component__WEBPACK_IMPORTED_MODULE_11__["FrontPageComponent"],
                _components_pages_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_12__["JobListComponent"],
                _components_sub_components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_13__["SignInFormComponent"],
                _components_sub_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_14__["RegisterFormComponent"],
                _components_sub_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_16__["EditorComponent"],
                _components_sub_components_alerting_alerting_component__WEBPACK_IMPORTED_MODULE_18__["AlertingComponent"],
                _components_sub_components_pages_pages_component__WEBPACK_IMPORTED_MODULE_20__["PagesComponent"],
                _components_pages_job_description_job_description_component__WEBPACK_IMPORTED_MODULE_21__["JobDescriptionComponent"],
                _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
                _components_pages_page404_page404_component__WEBPACK_IMPORTED_MODULE_23__["Page404Component"],
                _components_sub_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_24__["LoadingComponent"],
                _components_sub_components_user_introduction_user_introduction_component__WEBPACK_IMPORTED_MODULE_25__["UserIntroductionComponent"],
                _components_sub_components_user_applied_user_applied_component__WEBPACK_IMPORTED_MODULE_26__["UserAppliedComponent"],
                _components_sub_components_user_resume_user_resume_component__WEBPACK_IMPORTED_MODULE_27__["UserResumeComponent"],
                _components_sub_components_user_recommendations_user_recommendations_component__WEBPACK_IMPORTED_MODULE_28__["UserRecommendationsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_17__["AngularEditorModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_30__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCmeLppnSZHxXtZG4wdFxpce2pnX1p9KA0'
                })
            ],
            providers: [_services_user_service_service__WEBPACK_IMPORTED_MODULE_15__["UserServiceService"], _app_services_list_results_service__WEBPACK_IMPORTED_MODULE_19__["ListResultsService"], _services_router_service_service__WEBPACK_IMPORTED_MODULE_29__["RouterServiceService"], _agm_core__WEBPACK_IMPORTED_MODULE_30__["GoogleMapsAPIWrapper"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_31__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_31__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/pages/dashboard/dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pages/dashboard/dashboard.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dash-borad-wrapper {\n  display: flex;\n  min-height: 500px;\n}\n\n.side-bar {\n  width: 20%;\n  position: relative;\n}\n\n.dashboard-content {\n  width: 80%;\n}\n\n.dashboard-button-group {\n  display: block;\n  text-align: center;\n  list-style-type: none;\n  padding: 0;\n}\n\n.dashboard-button {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.dashboard-button-link {\n  cursor: pointer;\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/pages/dashboard/dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/dashboard/dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dash-borad-wrapper\">\n  <!-- <div class=\"side-bar\">\n    <ul class=\"dashboard-button-group\">\n      <li class=\"dashboard-button\"><a class=\"dashboard-button-link\" [routerLink]=\"[ 'intro' ]\">我的介绍</a></li>\n      <li class=\"dashboard-button\"><a class=\"dashboard-button-link\" [routerLink]=\"[ 'history' ]\">投递历史</a></li>\n      <li class=\"dashboard-button\"><a class=\"dashboard-button-link\" [routerLink]=\"['resume']\">我的简历</a></li>\n      <li class=\"dashboard-button\"><a class=\"dashboard-button-link\" [routerLink]=\"['recommendations']\">推荐给我</a></li>\n    </ul> -->\n  <div class=\"nav flex-column nav-pills side-bar\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n    <a class=\"nav-link \" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\"\n      aria-controls=\"v-pills-home\" aria-selected=\"true\" [routerLink]=\"[ 'intro' ]\" routerLinkActive=\"active\">我的介绍</a>\n    <a class=\"nav-link \" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\"\n      aria-controls=\"v-pills-home\" aria-selected=\"true\" [routerLink]=\"[ 'history' ]\" routerLinkActive=\"active\">投递历史</a>\n    <a class=\" nav-link \" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\"\n      aria-controls=\"v-pills-home\" aria-selected=\"true\" [routerLink]=\"['resume']\" routerLinkActive=\"active\">我的简历</a>\n    <a class=\"nav-link \" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\"\n      aria-controls=\"v-pills-home\" aria-selected=\"true\" [routerLink]=\"['recommendations']\" routerLinkActive=\"active\">推荐给我</a> </div>\n  <div class=\"\n      dashboard-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/pages/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/front-page/front-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/pages/front-page/front-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/front-page/front-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/front-page/front-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-bar></app-search-bar>\n<app-tabs></app-tabs>\n<app-introduction></app-introduction>\n"

/***/ }),

/***/ "./src/app/components/pages/front-page/front-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/front-page/front-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: FrontPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPageComponent", function() { return FrontPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrontPageComponent = /** @class */ (function () {
    function FrontPageComponent() {
    }
    FrontPageComponent.prototype.ngOnInit = function () {
    };
    FrontPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-front-page',
            template: __webpack_require__(/*! ./front-page.component.html */ "./src/app/components/pages/front-page/front-page.component.html"),
            styles: [__webpack_require__(/*! ./front-page.component.css */ "./src/app/components/pages/front-page/front-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FrontPageComponent);
    return FrontPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/job-description/job-description.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/pages/job-description/job-description.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blank-space{\n    padding: 20px;\n}\n\n.job-wrapper{\n    min-height: 500px;\n    width: 1200px;\n    margin: 0 auto;\n}\n\n.job-intro-header{\n    height: 200px;\n    padding: 50px 100px 0 100px;\n    background-color: lightblue;\n    display: flex;\n    justify-content: space-between\n}\n\nagm-map {\n    height: 300px;\n  }\n\n.col-body{\n    flex: 1;\n}\n\n.sub-title{\n    margin: 0;\n    font-size: 14px;\n}\n\n.job-tags{\n    display: inline-block;\n    margin-top: 15px;\n}\n\n.job-tags span{\n    margin-left: 0px;\n    margin-right: 15px;\n    border: 1px solid black;\n    border-radius: 25px;\n    padding: 8px;\n    font-size: 12px;\n}\n\n.button-send{\n    padding: 10px 20px;\n    background-color: #f4511e;\n    border: 0;\n    color: #fff;\n    cursor: pointer;\n    outline: none;\n    border-radius: 10px;\n    transition: 0.3s;\n    opacity: 0.8;\n}\n\n.button-send:hover {\n    opacity: 1;\n  }\n\n.job-intro-body-title{\n      margin-left: 150px;\n  }\n\n.job-intro-body-title span, img{\n      display: block;\n  }\n\n.job-intro-body-title img{\n    padding-top: 12px;\n}\n\n.job-intro-body-content{\n    padding: 20px 150px;\n    font-size: 14px;\n}\n\n.job-intro-footer{\n    font-size: 14px;\n    padding: 20px 150px;\n}\n\nagm-map {\n    height: 300px !important;\n    width: 100%;  /* This is really important*/\n  }\n\n.loading-component {\n    position: absolute;\n    z-index: 9999;\n    left: 0;\n    right: 0;\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 150px;\n  }\n\n.small-title{\n      font-size: 12px;\n      display: block;\n  }\n\n.repeat-alerting{\n      text-align: center;\n      margin: 0 auto;\n  }\n"

/***/ }),

/***/ "./src/app/components/pages/job-description/job-description.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/job-description/job-description.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading class=\"loading-component animated \"  *ngIf=\"isLoading\"></app-loading>\n<app-alerting class=\"loading-component \" [alertDisplay]=\"isRepeatAlert\" [msg]='\"重复提交\"' (close)=\"repeatClose($event)\"></app-alerting>\n<app-alerting class=\"loading-component \" [alertDisplay]=\"isSubmissionAlert\" [msg]='\"提交已完成\"' (close)=\"alertClose($event)\"></app-alerting>\n<div class=\"job-wrapper\">\n  \n  <div class=\"job-intro-header\">\n    <div class=\"col-body text-center\">\n      <h3 class=\"titile\">{{job.title}}</h3>\n      <p class=\"sub-title\">{{job.postdate | date :'yyyy-MM-dd'}}</p>\n      <div class=\"job-tags\">\n        <span>{{job.area}}</span>\n        <span>{{job.category}}</span>\n        <span>{{job.author}}</span>\n      </div>\n    </div>\n    <div class=\"col-body text-center\">\n      <h3 class=\"title\">\n        联系方式\n      </h3>\n      <p>weijiexiang @email.com</p>\n    </div>\n    <div class=\"col-body text-center\">\n      <h3 class=\"title\">一键发送简历<span class=\"small-title\">(*多次发送无效)</span></h3>\n      <button class=\"button-send\" (click)=\"sendResume()\" [disabled]=\"isButtonDisabled\">发送简历</button>\n    </div>\n\n  </div>\n  <div class=\"job-intro-body\">\n    <div class=\"blank-space\"></div>\n    <div class=\"job-intro-body-title\">\n      <span>职位描述</span>\n      <img src=\"../../../../assets/line-sec.png\" alt=\"\">\n    </div>\n    <div class=\"job-intro-body-content\" [innerHTML]=\"job.content\">\n    </div>\n  </div>\n\n  <div class=\"job-intro-body\">\n    <div class=\"blank-space\"></div>\n    <div class=\"job-intro-body-title\">\n      <span>工作地点</span>\n      <img src=\"../../../../assets/line-sec.png\" alt=\"\">\n    </div>\n    <div class=\"blank-space\"></div>\n    <agm-map [zoom]='15' [latitude]=\"lat\" [longitude]=\"lng\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/job-description/job-description.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/job-description/job-description.component.ts ***!
  \*******************************************************************************/
/*! exports provided: JobDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDescriptionComponent", function() { return JobDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_job_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/job-detail.service */ "./src/app/services/job-detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_job_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/job.model */ "./src/app/models/job.model.ts");
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var src_app_services_map_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/map-service.service */ "./src/app/services/map-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JobDescriptionComponent = /** @class */ (function () {
    function JobDescriptionComponent(_httpClient, jobDescription, activateRouter, _userService, _mapService) {
        this._httpClient = _httpClient;
        this.jobDescription = jobDescription;
        this.activateRouter = activateRouter;
        this._userService = _userService;
        this._mapService = _mapService;
        this.job = new _models_job_model__WEBPACK_IMPORTED_MODULE_4__["Job"]();
        this.jobTitle = '';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.jobId = '';
        this.isButtonDisabled = false;
        this.isLoading = false;
        this.isRepeatAlert = false;
        this.isSubmissionAlert = false;
    }
    JobDescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobId = this.activateRouter.snapshot.params.id;
        this.jobDescription
            .getJobDescription(this.jobId)
            .subscribe(function (data) {
            _this.job = data;
            console.log(_this.job);
        });
        // this.findLocation('1114e 7th st, Tuscon,');
        this._mapService
            .getCodeOfAddress('1114E 7 th st tucson, arizona')
            .subscribe(function (data) {
            if (data.status != 'OK') {
                console.log('shit happens');
            }
            else {
                _this.lat = data.results[0]['geometry']['location'].lat;
                _this.lng = data.results[0]['geometry']['location'].lng;
            }
        });
    };
    JobDescriptionComponent.prototype.sendResume = function () {
        var _this = this;
        this.isLoading = true;
        var userId = JSON.parse(localStorage.getItem('thekey'));
        console.log(userId);
        setTimeout(function () {
            _this._userService
                .jobApply(userId['userid'], _this.jobId)
                .subscribe(function (data) {
                console.log(data);
                if (data.message == 'repeat application') {
                    _this.isRepeatAlert = true;
                    setTimeout(function () {
                        _this.isRepeatAlert = false;
                    }, 2000);
                }
                else if (data.meg == "apply successfully") {
                    console.log('success');
                    _this.isSubmissionAlert = true;
                    setTimeout(function () {
                        _this.isSubmissionAlert = false;
                    }, 2000);
                }
                else {
                    alert('error');
                }
            });
            _this.isLoading = false;
        }, 3000);
    };
    JobDescriptionComponent.prototype.alertClose = function ($event) {
        this.isSubmissionAlert = $event;
    };
    JobDescriptionComponent.prototype.repeatClose = function ($event) {
        this.repeatClose = $event;
    };
    JobDescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-description',
            template: __webpack_require__(/*! ./job-description.component.html */ "./src/app/components/pages/job-description/job-description.component.html"),
            styles: [__webpack_require__(/*! ./job-description.component.css */ "./src/app/components/pages/job-description/job-description.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_job_detail_service__WEBPACK_IMPORTED_MODULE_2__["JobDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"],
            src_app_services_map_service_service__WEBPACK_IMPORTED_MODULE_6__["MapServiceService"]])
    ], JobDescriptionComponent);
    return JobDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/job-list/job-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/pages/job-list/job-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover{\n    text-decoration: none;\n}\n\n\n.container{\n    margin-top: 50px;\n}\n\n\n.job-list {\n    padding: 0;\n}\n\n\n.job-list-item {\n    list-style: none;\n}\n\n\n.list-sub-col {\n    background-color: lightcyan;\n    height: 500px;\n}\n\n\n.job-list-item-wrapper{\n    padding: 25px 15px 10px 25px;\n    display: flex;\n    background-color: white;\n\n}\n\n\n.job-title{\n    color:#DE351F;\n    font-size: 16px;\n}\n\n\n.job-list-item:nth-child(n+2){\n    margin-top: 20px;\n}\n\n\n.flex-body{\n    flex:1;\n}\n\n\n.job-list-item-wrapper:hover {\n    background-color: #00A6A6;\n    color: #FDFFFC;\n}\n\n\n.job-list-item-wrapper:hover .title-font-color {\n    color: #FDFFFC;\n}\n\n\n.job-list-item-wrapper:hover .subtitle-font-color{\n    color: #FDFFFC;\n}\n\n\n.job-author{\n    margin: 0;\n}\n\n\n.small-subtitle{\n    font-size: 12px;\n}\n\n\n.job-link{\n    text-decoration: none;\n}\n\n\n.title-font-color{\n    color:#DE351F;\n}\n\n\n.subtitle-font-color{\n  color: rgb(199, 186, 164);\n}\n"

/***/ }),

/***/ "./src/app/components/pages/job-list/job-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/job-list/job-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"job-list-wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- *main part for the job list -->\n      <div class=\"col-sm-8 list-col\">\n        <ul class=\"job-list\">\n\n          <li class=\"job-list-item\" *ngFor=\"let job of jobs\">\n            <a class=\"job-link\" [routerLink]=\"[ '/jobdetails/'+job.postid ]\">\n              <div class=\"job-list-item-wrapper\">\n                <div class=\"flex-body\">\n                  <h4 class=\" job-title title-font-color\"> {{job.title}}</h4>\n                  <p class=\"small-subtitle subtitle-font-color text-center\">{{job.postdate | date: \"M/d/yy\"}}</p>\n                </div>\n                <div class=\"flex-body job-area title-font-color text-center\">\n                  {{job.area}}\n                </div>\n                <p class=\"job-author flex-body title-font-color text-center\"> {{job.author}} </p>\n              </div>\n            </a>\n          </li>\n\n        </ul>\n      </div>\n      <!-- *sub-part for the job list -->\n      <div class=\"col-sm-3 list-sub-col\">\n        {{totalPageNumber}}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div>\n  <app-pages [totalPageNumber]=\"totalPageNumber\"></app-pages>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/job-list/job-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/job-list/job-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: JobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListComponent", function() { return JobListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_results_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/list-results.service */ "./src/app/services/list-results.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobListComponent = /** @class */ (function () {
    function JobListComponent(listtingService, router, activatedRoute) {
        this.listtingService = listtingService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.page = 1;
        this.totalPageNumber = 2019;
    }
    JobListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParamMap.subscribe(function (queryParams) {
            console.log('开始检测当前页面的page参数');
            console.log(queryParams);
            console.log(Number(queryParams['params']['page']));
            _this.listtingService
                .retriveSearchListing(Number(queryParams['params']['page']))
                .subscribe(function (response) {
                console.log(response);
                _this.jobs = response.data;
                _this.totalPageNumber = response.totalPageNumber;
            }, function (error) {
                console.log(error);
            });
        });
    };
    JobListComponent.prototype.receiveCurrentPage = function ($event) {
        var _this = this;
        this.page = $event;
        this.listtingService
            .retriveSearchListing(this.page)
            .subscribe(function (response) {
            _this.jobs = response.data;
            _this.totalPageNumber = response.totalPageNumber;
        });
    };
    JobListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-list',
            template: __webpack_require__(/*! ./job-list.component.html */ "./src/app/components/pages/job-list/job-list.component.html"),
            styles: [__webpack_require__(/*! ./job-list.component.css */ "./src/app/components/pages/job-list/job-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_list_results_service__WEBPACK_IMPORTED_MODULE_1__["ListResultsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], JobListComponent);
    return JobListComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/page404/page404.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/pages/page404/page404.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/page404/page404.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/page404/page404.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page404 works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/pages/page404/page404.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/page404/page404.component.ts ***!
  \***************************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/components/pages/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/components/pages/page404/page404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/components/sub-components/alerting/alerting.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/sub-components/alerting/alerting.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alerting-wrapper{\n    background-color: black;\n    padding-top: 30px;\n    width: 300px;\n    height: 120px;\n    margin: 0 auto;\n    opacity: 0.7;\n    border-radius: 10px;\n    color: white;\n}\n\n.close-btn{\n    border: 0;\n    background-color: lightskyblue;\n    color: black;\n    border-radius: 5px;\n    margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/components/sub-components/alerting/alerting.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/sub-components/alerting/alerting.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alerting-wrapper text-center\" *ngIf=\"alertDisplay\">\n  <div class=\"alerting-body\">\n    {{alertMsg}}\n  </div>\n  <button class=\"close-btn\" (click)=\"alertCloseBtnClicked()\">关闭</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sub-components/alerting/alerting.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/sub-components/alerting/alerting.component.ts ***!
  \**************************************************************************/
/*! exports provided: AlertingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertingComponent", function() { return AlertingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertingComponent = /** @class */ (function () {
    function AlertingComponent() {
        this.closeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AlertingComponent.prototype.ngOnInit = function () {
        console.log('Alerting Component');
    };
    AlertingComponent.prototype.alertCloseBtnClicked = function () {
        console.log('alerting clicked');
        this.closeClicked.emit(false);
        console.log('alerting clicked 2');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('msg'),
        __metadata("design:type", String)
    ], AlertingComponent.prototype, "alertMsg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('alertDisplay'),
        __metadata("design:type", Boolean)
    ], AlertingComponent.prototype, "alertDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('close'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AlertingComponent.prototype, "closeClicked", void 0);
    AlertingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerting',
            template: __webpack_require__(/*! ./alerting.component.html */ "./src/app/components/sub-components/alerting/alerting.component.html"),
            styles: [__webpack_require__(/*! ./alerting.component.css */ "./src/app/components/sub-components/alerting/alerting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertingComponent);
    return AlertingComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-components/editor/editor.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/sub-components/editor/editor.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n    display: block;\n    margin: auto;\n    width: 8rem;\n}\n\n.large-space {\n    padding: 50px;\n}\n\n.middle-space {\n    padding: 10px;\n}\n\n.inline-form {\n    display: flex;\n    justify-content: space-between;\n}\n\n.inline-form-section {\n    width: 47%;\n}\n\n.inline-form-section-row{\n    width: 100%;\n    display: block;\n}\n\n.selection-title {\n    padding: 0 0 10px 0;\n    margin: 0;\n    font-size: 15px;\n    font-weight: bold;\n}\n\n.alerting-box{\n    position: absolute;\n    z-index: 999;\n    left: 0;\n    right: 0;\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 150px;}"

/***/ }),

/***/ "./src/app/components/sub-components/editor/editor.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/sub-components/editor/editor.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <!-- <app-alerting class=\"alerting-box\" [msg]=alertSucccessMsg [alertDisplay]=isAlertDisplay (alertCloseBtnClicked)=onClose($event) ></app-alerting> -->\n    <app-alerting class=\"alerting-box\" [msg]='alertSucccessMsg' [alertDisplay]='isAlertDisplay' (close)=\"onClose($event)\" ></app-alerting>\n  <div class=\"large-space\"></div>\n  <div class=\"row\">\n    <div class=\"col-sm-10 offset-sm-1\">\n      <div class=\"inline-form-section-row\">\n          <p class=\"selection-title\">工作名称</p>\n        <input type=\"text\" class=\"form-control\" placeholder='' [(ngModel)]=\"jobTitle\">\n      </div>\n      <div class=\"middle-space\"></div>\n      <form class=\"inline-form\">\n        <div class=\"inline-form-section\">\n          <p class=\"selection-title\">工作类别</p>\n          <select class=\"custom-select\" [(ngModel)]=\"category\" name='category'>\n            <option value=\"it\">IT/网络</option>\n            <option value=\"marketing\">市场</option>\n            <option value=\"internship\">实习</option>\n          </select>\n        </div>\n        <div class=\"inline-form-section\">\n          <p class=\"selection-title\">工作地区</p>\n          <select class=\"custom-select\" [(ngModel)]=\"area\" name=\"area\">\n            <option value=\"sydney\">悉尼</option>\n            <option value=\"moerben\">墨尔本</option>\n            <option value=\"kanpeila\">堪培拉</option>\n          </select>\n        </div>\n      </form>\n      <div class=\"middle-space\"></div>\n      <div class=\"middle-space\"></div>\n      <angular-editor [(ngModel)]=\"htmlContent\" [config]=\"config\"></angular-editor>\n      <div class=\"middle-space\"></div>\n      <button class=\"btn btn-success\" (click)=\"postHandler()\">马上发布</button>\n    </div>\n  </div>\n  <div class=\"large-space\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sub-components/editor/editor.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/sub-components/editor/editor.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditorComponent = /** @class */ (function () {
    function EditorComponent(postService) {
        this.postService = postService;
        this.isAlertDisplay = false;
        this.htmlContent = "";
        this.area = "";
        this.category = "";
        this.jobTitle = "";
        this.fileToUpload = null;
        this.alertSucccessMsg = "成功提交";
        this.config = {
            editable: true,
            spellcheck: true,
            height: "30rem",
            minHeight: "5rem",
            placeholder: "请输入工作详情...",
            translate: "no",
            customClasses: [
                {
                    name: "quote",
                    class: "quote"
                },
                {
                    name: "redText",
                    class: "redText"
                },
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1"
                }
            ]
        };
    }
    EditorComponent.prototype.ngOnInit = function () { };
    EditorComponent.prototype.onClose = function ($event) {
        console.log('capture the changes');
        this.isAlertDisplay = $event;
    };
    EditorComponent.prototype.handleFileInput = function (file) {
        console.log('change function is touched');
        this.fileToUpload = file.item(0);
    };
    EditorComponent.prototype.postHandler = function () {
        var _this = this;
        var formData = new FormData();
        // formData.append('uploadFile', this.imageFile, this.imageFile.name);
        var newJob = {
            area: this.area,
            category: this.category,
            title: this.jobTitle,
            description: this.htmlContent,
        };
        this.postService.postNewJob(newJob).subscribe(function (msg) {
            if (msg.state == 'success') {
                console.log('posting success');
                _this.isAlertDisplay = true;
            }
            else {
                console.log('系统错误，请稍后再试');
            }
        });
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-editor",
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/components/sub-components/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/components/sub-components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-components/introduction/introduction.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/sub-components/introduction/introduction.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-center{\n    text-align: center;\n}\n\n.head-image{\n    width: 70%;\n    border-radius: 50%;\n}\n\n.intro-title{\n    font-weight: bold;\n}\n\n.intro-body{\n    padding: 2rem;\n    font-size: 12px;\n}\n\n.large-blank-space{\n    padding: 2rem;\n}\n"

/***/ }),

/***/ "./src/app/components/sub-components/introduction/introduction.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/sub-components/introduction/introduction.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"large-blank-space\"></div>\n  <div class=\"row \">\n    <div class=\"col-sm-6 image-center\">\n      <img class=\"head-image\" src=\"http://7xugeo.com1.z0.glb.clouddn.com/portal/201611/10/152737mzf0fodftt4u3o40.jpg\"\n        alt=\"\">\n    </div>\n    <div class=\"col-sm-6 intro-body\">\n      <h3 class=\"intro-title\">建立初衷</h3>\n      <p>曾有一段时间，身为面试官，遇到一位同学，品行端正，各个方面良好，却因为种种原因最后未能加入团队，深感遗憾。</p>\n      <p>那时，暗下决心，一定要推出一个可以帮助大家寻找职位的可靠，放心的招聘平台</p>\n    </div>\n  </div>\n  <div class=\"large-blank-space\"></div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 intro-body\">\n      <h3 class=\"intro-title\">建立初衷</h3>\n      <p>曾有一段时间，身为面试官，遇到一位同学，品行端正，各个方面良好，却因为种种原因最后未能加入团队，深感遗憾。</p>\n      <p>那时，暗下决心，一定要推出一个可以帮助大家寻找职位的可靠，放心的招聘平台</p>\n    </div>\n    <div class=\"col-sm-6 image-center\">\n      <img class=\"head-image\" src=\"http://7xugeo.com1.z0.glb.clouddn.com/portal/201611/10/152737mzf0fodftt4u3o40.jpg\"\n        alt=\"\">\n    </div>\n  </div>\n  <div class=\"large-blank-space\"></div>\n  <div class=\"row\">\n    <div class=\"col-sm-8 offset-sm-2 intro-row\">\n      <h3 class=\"text-center\">我们是谁</h3>\n      <p>与你们一样，我们也是从学生一步步走来， 深知招聘是的艰难困苦，我们一直在思考，如何能够帮助大家，经过几个月的日夜兼程和不懈努力，我们终于现在可以吧这个平台分享给大家，帮助大家再职场的道路上做自己</p>\n    </div>\n  </div>\n  <div class=\"large-blank-space\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sub-components/introduction/introduction.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/sub-components/introduction/introduction.component.ts ***!
  \**********************************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent() {
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/components/sub-components/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.css */ "./src/app/components/sub-components/introduction/introduction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-components/loading/loading.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/sub-components/loading/loading.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-img{\n    height: 200px;;\n}\n\n.loading-block{\n    background-color: black;\n    padding-top: 20px;\n    width: 300px;\n    height: 300px;\n    margin: 0 auto;\n    opacity: 0.7;\n    border-radius: 10px;\n}\n\n.loading-text{\n    padding-top: 12px;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/components/sub-components/loading/loading.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/sub-components/loading/loading.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center loading-block\">\n  <img class=\"loading-img\" src=\"../../../../assets/loading.gif\" alt=\"\">\n  <p class=\"loading-text\">正在请求，请稍后</p>\n</div>"

/***/ }),

/***/ "./src/app/components/sub-components/loading/loading.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/sub-components/loading/loading.component.ts ***!
  \************************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/sub-components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/components/sub-components/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-components/pages/pages.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/sub-components/pages/pages.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active{\n    color: red !important;\n}\n\n.page-link{\n    /* width: 20px; */\n    width: 55px;\n}\n\n.control-button{\n    width: 100px;\n}\n"

/***/ }),

/***/ "./src/app/components/sub-components/pages/pages.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/sub-components/pages/pages.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <nav aria-label=\"Page navigation example\">\n    <ul class=\"pagination justify-content-center\">\n      <li class=\" page-item\" [ngClass]=\"{disabled: currentPage === 1}\">\n        <a class=\"page-link control-button\" [ngClass]=\"{disabled: currentPage === 1}\" (click)=\"setPage(currentPage-1)\">Previous</a>\n      </li>\n      <li class=\"page-item\" *ngFor=\"let page of pageArray\">\n        <a class=\"page-link\" [ngClass]=\"{active: currentPage === page}\" (click)=\"setPage(page)\">\n          {{page}}\n        </a>\n      </li>\n      <li class=\"page-item\" [ngClass]=\"{disabled: end == currentPage}\">\n        <a class=\"page-link control-button\" [ngClass]=\"{disabled: end == currentPage}\" (click)=\"setPage(currentPage+1)\">Next</a>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sub-components/pages/pages.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/sub-components/pages/pages.component.ts ***!
  \********************************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_results_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/list-results.service */ "./src/app/services/list-results.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagesComponent = /** @class */ (function () {
    function PagesComponent(listingResultService, router, activatedRouter) {
        this.listingResultService = listingResultService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.currentPageToParentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageArray = [];
        this.start = 1;
        this.end = 5;
    }
    PagesComponent.prototype.ngOnInit = function () {
        this.currentPage = 1;
        // TODO: please optimization
        for (var i = this.start; i <= this.end; i++) {
            this.pageArray.push(i);
        }
    };
    // for resetting the pageArray 
    PagesComponent.prototype.setPageArray = function () {
        var newPageArray = [];
        for (var i = this.start; i <= this.end; i++)
            newPageArray.push(i);
        this.pageArray = newPageArray;
    };
    PagesComponent.prototype.setPage = function (clickedPage) {
        // back to the top of the window
        document.documentElement.scrollTop = 0;
        this.currentPage = clickedPage;
        if (this.currentPage - 2 <= 1) {
            this.start = 1;
            this.end = this.start + 4;
        }
        else if (this.currentPage + 2 > this.totalPageNumber) {
            this.start = this.totalPageNumber - 4;
            this.end = this.totalPageNumber;
        }
        else {
            this.currentPage = this.currentPage;
            this.start = this.currentPage - 2;
            this.end = this.currentPage + 2;
        }
        this.setPageArray();
        // this.currentPageToParentEvent.emit(this.currentPage);
        this.router.navigate([], { relativeTo: this.activatedRouter, queryParams: { page: clickedPage }, queryParamsHandling: "merge" });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PagesComponent.prototype, "totalPageNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "currentPageToParentEvent", void 0);
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/components/sub-components/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.css */ "./src/app/components/sub-components/pages/pages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_list_results_service__WEBPACK_IMPORTED_MODULE_1__["ListResultsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-components/register-form/register-form.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/sub-components/register-form/register-form.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\");\n\n.login-block {\n  background: #DE6262;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to bottom, #FFB88C, #DE6262);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  float: left;\n  width: 100%;\n  padding: 50px 0;\n}\n\n.banner-sec {\n  /* background: url(https://static.pexels.com/photos/33972/pexels-photo.jpg) no-repeat left bottom; */\n  background-size: cover;\n  min-height: 500px;\n  border-radius: 0 10px 10px 0;\n  padding: 0;\n}\n\n.container {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);\n}\n\n.carousel-inner {\n  border-radius: 0 10px 10px 0;\n}\n\n.carousel-caption {\n  text-align: left;\n  left: 5%;\n}\n\n.login-sec {\n  padding: 50px 30px;\n  position: relative;\n}\n\n.login-sec .copy-text {\n  position: absolute;\n  width: 80%;\n  bottom: 20px;\n  font-size: 13px;\n  text-align: center;\n}\n\n.login-sec .copy-text i {\n  color: #FEB58A;\n}\n\n.login-sec .copy-text a {\n  color: #E36262;\n}\n\n.login-sec h2 {\n  margin-bottom: 30px;\n  font-weight: 800;\n  font-size: 30px;\n  color: #DE6262;\n}\n\n.login-sec h2:after {\n  content: \" \";\n  width: 100px;\n  height: 5px;\n  background: #FEB58A;\n  display: block;\n  margin-top: 20px;\n  border-radius: 3px;\n  margin-left: auto;\n  margin-right: auto\n}\n\n.btn-login {\n  background: #DE6262;\n  color: #fff;\n  font-weight: 600;\n}\n\n.banner-text {\n  width: 70%;\n  position: absolute;\n  bottom: 40px;\n  padding-left: 20px;\n}\n\n.banner-text h2 {\n  color: #fff;\n  font-weight: 600;\n}\n\n.banner-text h2:after {\n  content: \" \";\n  width: 100px;\n  height: 5px;\n  background: #FFF;\n  display: block;\n  margin-top: 20px;\n  border-radius: 3px;\n}\n\n.error-info{\n  font-size: 12px;\n  color: red;\n  margin: 0;\n  padding-top: 5px;\n}\n\n.banner-text p {\n  color: #fff;\n}\n\n.form-check{\n    margin-top: 35px;\n    text-align: center;\n}\n\n.alerting-box{\n  position: absolute;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  margin-top: 150px;\n}\n\n.loading-component {\n  position: absolute;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 150px;\n}\n"

/***/ }),

/***/ "./src/app/components/sub-components/register-form/register-form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/sub-components/register-form/register-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading class=\"loading-component\" *ngIf=\"loading\"></app-loading>\n<app-alerting class=\"alerting-box\" [msg]=\"alertInfomation\" [alertDisplay]='isAlertDisplay'\n  (close)=\"alertWindowClose($event)\"></app-alerting>\n<div class=\"login-block\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 login-sec\">\n        <h2 class=\"text-center\">现在注册</h2>\n        <form class=\"login-form\" [formGroup]='registerForm' (ngSubmit)='registerSubmit($event)'>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\" class=\"text-uppercase\">用户邮件</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\" class=\"text-uppercase\">用户密码</label>\n            <input type=\"password\" class=\"form-control\" placeholder=\"\" formControlName=\"password\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\" class=\"text-uppercase\">确认密码</label>\n            <input type=\"password\" class=\"form-control\" placeholder=\"\" formControlName=\"retypepassword\">\n            <p class=\"error-info\" *ngIf='retypeCorrect'>密码不相同，请重新确认</p>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\" class=\"text-uppercase\">所在院校</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"school\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\" class=\"text-uppercase\">年龄</label>\n            <select class=\"custom-select\" id=\"inputGroupSelect01\" formControlName=\"age\">\n              <option selected>Choose...</option>\n              <option value=\"below 20\">20岁以下</option>\n              <option value=\"20-25\">20-25岁</option>\n              <option value=\"25-30\">25-30岁</option>\n              <option value=\"30-35\">30-35岁</option>\n              <option value=\"35-40\">35-40岁</option>\n              <option value=\"above 40\">40岁以上</option>\n            </select>\n          </div>\n          <div class=\"form-check\">\n            <button class=\"btn btn-login text-center\">完成注册</button>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-md-8 banner-sec\">\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block img-fluid\" src=\"https://static.pexels.com/photos/33972/pexels-photo.jpg\"\n                alt=\"First slide\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <div class=\"banner-text\">\n                  <h2>现在注册</h2>\n                  <p>一套完整的工作推荐系统，帮助您在任何时候选择你喜欢的工作和职位</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block img-fluid\" src=\"https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg\"\n                alt=\"First slide\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <div class=\"banner-text\">\n                  <h2>现在注册</h2>\n                  <p>一套完整的工作推荐系统，帮助您在任何时候选择你喜欢的工作和职位</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block img-fluid\" src=\"https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg\"\n                alt=\"First slide\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <div class=\"banner-text\">\n                  <h2>现在注册</h2>\n                  <p>一套完整的工作推荐系统，帮助您在任何时候选择你喜欢的工作和职位</p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/sub-components/register-form/register-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/sub-components/register-form/register-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.retypeCorrect = false;
        this.alertInfomation = "";
        this.isAlertDisplay = false;
        this.loading = false;
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            email: "",
            password: "",
            retypepassword: "",
            school: "",
            age: "",
        });
    };
    RegisterFormComponent.prototype.alertWindowClose = function ($event) {
        if (this.alertInfomation == "成功注册，点击关闭跳转至主页") {
            console.log('已经成功注册');
            this.router.navigate(['/']);
        }
        else {
            this.isAlertDisplay = $event;
        }
    };
    RegisterFormComponent.prototype.registerSubmit = function ($event) {
        var _this = this;
        if (this.registerForm.value.retypepassword != this.registerForm.value.password) {
            this.retypeCorrect = true;
        }
        else {
            console.log(this.registerForm.value);
            this.userService
                .userRegister(this.registerForm.value)
                .subscribe(function (response) {
                console.log(response);
                _this.loading = true;
                setTimeout(function () {
                    switch (response.state) {
                        case 'fail':
                            _this.loading = false;
                            _this.alertInfomation = "此邮箱已经注册过";
                            _this.isAlertDisplay = true;
                            break;
                        case 'success':
                            _this.loading = false;
                            _this.alertInfomation = "成功注册，马上登陆";
                            _this.isAlertDisplay = true;
                            break;
                    }
                }, 2000);
            });
        }
    };
    RegisterFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-register-form",
            template: __webpack_require__(/*! ./register-form.component.html */ "./src/app/components/sub-components/register-form/register-form.component.html"),
            styles: [__webpack_require__(/*! ./register-form.component.css */ "./src/app/components/sub-components/register-form/register-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-components/search-bar/search-bar.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/sub-components/search-bar/search-bar.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.large-blank-space{\n  padding: 3rem;\n  \n}\n\n.search-bar-title{\n  font-size: 50px;\n  text-align: center;\n  font-family: Arial, \"Microsoft YaHei\";\n}\n\n.search-bar-wrapper{\n  background-color: lightsalmon;\n}\n\n.search-form {\n  display: block;\n  margin: 0 auto;\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.input-wrapper{\n  width: 32%;\n}\n\n.button-wrapper{\n  text-align: center;\n\n}\n\n.search-form-input {\n  /* flex-grow: 1; */\n  width: 100%;\n  background: #fff;\n  border: 5px solid #ac2719;\n  padding: 0 15px;\n  height: 50px;\n  line-height: 50px;\n  font-family: inherit;\n  font-size: 16px;\n  color: #555;\n  border-radius: 6px 0 0 6px;\n  box-shadow: inset 2px 2px 5px rgba(112, 128, 144, 0.8);\n  outline: 0;\n}\n\n.search-form-submit-btn {\n  margin-top: 20px;\n  width: 17%;\n  background-color: #ac2719;\n  border: 5px solid #ac2719;\n  font-size: 20px;\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  height: 50px;\n  line-height: 40px;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: background-color 0.3s;\n  cursor: pointer;\n}\n\n.input-title{\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-weight: bold;\n  margin: 0;\n}\n\n.search-form-submit-btn:focus {\n    outline: 0;\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/sub-components/search-bar/search-bar.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/sub-components/search-bar/search-bar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-bar-wrapper\">\n  <div class=\"large-blank-space\"></div>\n  <p class=\"search-bar-title\">\n    现在开始，找寻你的未来\n  </p>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 \">\n        <form (ngSubmit)=\"searchSubmit($event)\">\n          <div class=\"search-form\">\n            <div class='input-wrapper'>\n              <p class='input-title'>输入职业关键词</p>\n              <input class=\"search-form-input\" type=\"text\" placeholder=\"职业关键字\" name='searchingKeywords' [(ngModel)]='keywords'>\n            </div>\n            <div class='input-wrapper'>\n              <p class='input-title'>选择地区</p>\n              <select class=\"search-form-input\" [(ngModel)]='location' name='location'>\n                <option selected>悉尼</option>\n                <option>墨尔本</option>\n\n              </select>\n            </div>\n            <div class='input-wrapper'>\n              <p class='input-title'>选择职业类别</p>\n              <select class=\"search-form-input\" [(ngModel)]='kind' name='kind'>\n                <option>It</option>\n                <option></option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"button-wrapper\">\n            <button class='search-form-submit-btn'>开启未来</button>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"large-blank-space\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sub-components/search-bar/search-bar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/sub-components/search-bar/search-bar.component.ts ***!
  \******************************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_key_words_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/search-key-words.service */ "./src/app/services/search-key-words.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(router, searchJobs) {
        this.router = router;
        this.searchJobs = searchJobs;
        this.keywords = "";
        this.location = '请选择地区';
        this.kind = '';
    }
    SearchBarComponent.prototype.ngOnInit = function () { };
    SearchBarComponent.prototype.searchSubmit = function ($event) {
        $event.preventDefault();
        this.router.navigate(["joblist"], {
            queryParams: {
                location: "location",
                jobkind: "社会主义",
                jobname: "工作名称",
                page: 1,
            }
        });
    };
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-search-bar",
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/components/sub-components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/components/sub-components/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_search_key_words_service__WEBPACK_IMPORTED_MODULE_1__["SearchKeyWordsService"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-components/sign-in-form/sign-in-form.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/sub-components/sign-in-form/sign-in-form.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\");\n\n.login-block {\n  background: #DE6262;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to bottom, #FFB88C, #DE6262);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  float: left;\n  width: 100%;\n  padding: 50px 0;\n}\n\n.banner-sec {\n  background: url(https://static.pexels.com/photos/33972/pexels-photo.jpg) no-repeat left bottom;\n  background-size: cover;\n  min-height: 500px;\n  border-radius: 0 10px 10px 0;\n  padding: 0;\n}\n\n.container {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);\n}\n\n.carousel-inner {\n  border-radius: 0 10px 10px 0;\n}\n\n.carousel-caption {\n  text-align: left;\n  left: 5%;\n}\n\n.login-sec {\n  padding: 50px 30px;\n  position: relative;\n}\n\n.login-sec .copy-text {\n  position: absolute;\n  width: 80%;\n  bottom: 20px;\n  font-size: 13px;\n  text-align: center;\n}\n\n.login-sec .copy-text i {\n  color: #FEB58A;\n}\n\n.login-sec .copy-text a {\n  color: #E36262;\n}\n\n.login-sec h2 {\n  margin-bottom: 30px;\n  font-weight: 800;\n  font-size: 30px;\n  color: #DE6262;\n}\n\n.login-sec h2:after {\n  content: \" \";\n  width: 100px;\n  height: 5px;\n  background: #FEB58A;\n  display: block;\n  margin-top: 20px;\n  border-radius: 3px;\n  margin-left: auto;\n  margin-right: auto\n}\n\n.btn-login {\n  background: #DE6262;\n  color: #fff;\n  font-weight: 600;\n}\n\n.banner-text {\n  width: 70%;\n  position: absolute;\n  bottom: 40px;\n  padding-left: 20px;\n}\n\n.banner-text h2 {\n  color: #fff;\n  font-weight: 600;\n}\n\n.banner-text h2:after {\n  content: \" \";\n  width: 100px;\n  height: 5px;\n  background: #FFF;\n  display: block;\n  margin-top: 20px;\n  border-radius: 3px;\n}\n\n.banner-text p {\n  color: #fff;\n}\n\n.alert-box {\n  height: 200px;\n  position: absolute;\n  top: 200;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  width: 400px;\n  z-index: 9999;\n}\n\n.loading-component {\n  position: absolute;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 150px;\n}\n"

/***/ }),

/***/ "./src/app/components/sub-components/sign-in-form/sign-in-form.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/sub-components/sign-in-form/sign-in-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"alert alert-success alert-box\" *ngIf=\"expression\">\n  完成登陆马上跳转\n</div> -->\n<app-loading class=\"loading-component\" *ngIf=\"loading\"></app-loading>\n<app-alerting class=\"loading-component\" [msg]=\"alertingContent\" isDisplay=\"isAlerting\"></app-alerting>\n<div class=\"login-block\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 login-sec\">\n        <h2 class=\"text-center\">现在登陆</h2>\n        <div>\n          <p class=\"text-center text-danger\" *ngIf=\"isNotComplete\">信息不完整请检查信息</p>\n          <p class=\"text-center text-danger\" *ngIf=\"isWrongInfo\">用户/密码错误</p>\n        </div>\n        <form class=\"login-form\" [formGroup]='signInForm' (ngSubmit)='signInSubmit($event)'>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\" class=\"text-uppercase\">用户邮箱 </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\" class=\"text-uppercase\">用户密码</label>\n            <input type=\"password\" class=\"form-control\" placeholder=\"\" formControlName=\"password\">\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" class=\"form-check-input\" >\n              <small>记住我</small>\n            </label>\n            <button class=\"btn btn-login float-right\">确认</button>\n          </div>\n        </form>\n       \n        \n        <div class=\"copy-text\">没有账户 ? <a  routerLinkActive=\"router-link-active\" [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" >现在注册</a></div>\n      </div>\n      <div class=\"col-md-8 banner-sec\">\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block img-fluid\" src=\"https://static.pexels.com/photos/33972/pexels-photo.jpg\" alt=\"First slide\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <div class=\"banner-text\">\n                  <h2>现在注册</h2>\n                  <p>一套完整的工作推荐系统，帮助您在任何时候选择你喜欢的工作和职位</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block img-fluid\" src=\"https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg\"\n                alt=\"First slide\">\n              <div class=\"carousel-caption d-none d-md-block\">\n                <div class=\"banner-text\">\n                  <h2>现在注册</h2>\n                  <p>一套完整的工作推荐系统，帮助您在任何时候选择你喜欢的工作和职位</p>\n                </div>\n              </div>\n            </div>\n            \n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  "

/***/ }),

/***/ "./src/app/components/sub-components/sign-in-form/sign-in-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/sub-components/sign-in-form/sign-in-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SignInFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInFormComponent", function() { return SignInFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInFormComponent = /** @class */ (function () {
    function SignInFormComponent(fb, userService, http, router) {
        this.fb = fb;
        this.userService = userService;
        this.http = http;
        this.router = router;
        this.isNotComplete = false;
        this.isWrongInfo = false;
        this.loading = false;
        this.isAlerting = true;
        this.alertingContent = '密码有误，请重新尝试';
    }
    SignInFormComponent.prototype.ngOnInit = function () {
        this.signInForm = this.fb.group({
            email: "",
            password: ""
        });
    };
    SignInFormComponent.prototype.signInSubmit = function ($event) {
        var _this = this;
        // ! check the form first
        if (!this.signInForm.value.email || !this.signInForm.value.password) {
            this.isNotComplete = true;
            return;
        }
        this.loading = true;
        event.preventDefault();
        setTimeout(function () {
            var userinformation = _this.signInForm.value;
            _this.userService.userSignIn(userinformation)
                .subscribe(function (responseData) {
                console.log(responseData);
                if (responseData.state == 'success') {
                    alert('success');
                    console.log();
                    var theKey = { 'token': responseData['token'], 'email': responseData['email'] };
                    localStorage.setItem('thekey', JSON.stringify(theKey));
                    _this.router.navigate(["dashboard/" + responseData['email:']]);
                }
                else {
                    alert('there is something wrong with your password and account');
                }
            });
        }, 3000);
    };
    SignInFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sign-in-form",
            template: __webpack_require__(/*! ./sign-in-form.component.html */ "./src/app/components/sub-components/sign-in-form/sign-in-form.component.html"),
            styles: [__webpack_require__(/*! ./sign-in-form.component.css */ "./src/app/components/sub-components/sign-in-form/sign-in-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignInFormComponent);
    return SignInFormComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-components/tabs/tabs.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/sub-components/tabs/tabs.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loaction-details {}\n\n.job-list-title {\n  padding: 15px;\n  display: inline-block;\n  font-weight: blod;\n}\n\n.job-list-name {\n  padding: 15px;\n  display: inline-block;\n}\n\n.large-blank-space {\n  padding: 2rem;\n}\n\n.nav-tabs{\n    padding-bottom: 12px;\n    border-bottom: 3px solid pink;\n}\n\n.nav-link.active{\n    background-color: lightcoral;\n    color: white;\n}\n"

/***/ }),

/***/ "./src/app/components/sub-components/tabs/tabs.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/sub-components/tabs/tabs.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"large-blank-space\"></div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <nav>\n        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n          <a class=\"nav-item nav-link active\" id=\"nav-sydney-tab\" data-toggle=\"tab\" href=\"#nav-sydney\" role=\"tab\"\n            aria-controls=\"nav-sydney\" aria-selected=\"true\">悉尼</a>\n          <a class=\"nav-item nav-link\" id=\"nav-mel-tab\" data-toggle=\"tab\" href=\"#nav-mel\" role=\"tab\" aria-controls=\"nav-mel\"\n            aria-selected=\"false\">墨尔本</a>\n          <a class=\"nav-item nav-link\" id=\"nav-adelaide-tab\" data-toggle=\"tab\" href=\"#nav-adelaide\" role=\"tab\"\n            aria-controls=\"nav-adelaide\" aria-selected=\"false\">阿德莱德</a>\n        </div>\n      </nav>\n      <div class=\"tab-content\" id=\"nav-tabContent\">\n        <div class=\"tab-pane fade show active\" id=\"nav-sydney\" role=\"tabpanel\" aria-labelledby=\"nav-sydney-tab\">\n          <div class=\"loaction-details\">\n            <div class=\"job-list\">\n              <span class=\"job-list-title\">IT</span>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n            </div>\n            <div class=\"job-list\">\n              <span class=\"job-list-title\">财经</span>\n              <a class=\"job-list-name\" href=\"/\">会计</a>\n              <a class=\"job-list-name\" href=\"/\">业务</a>\n              <a class=\"job-list-name\" href=\"/\">会计</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"nav-mel\" role=\"tabpanel\" aria-labelledby=\"nav-mel-tab\">\n          <div class=\"loaction-details\">\n            <div class=\"job-list\">\n              <span class=\"job-list-title\">IT</span>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n            </div>\n            <div class=\"job-list\">\n              <span class=\"job-list-title\">财经</span>\n              <a class=\"job-list-name\" href=\"/\">会计</a>\n              <a class=\"job-list-name\" href=\"/\">业务</a>\n              <a class=\"job-list-name\" href=\"/\">会计</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"nav-adelaide\" role=\"tabpanel\" aria-labelledby=\"nav-adelaide-tab\">\n          <div class=\"loaction-details\">\n            <div class=\"job-list\">\n              <span class=\"job-list-title\">IT</span>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n            </div>\n            <div class=\"job-list\">\n              <span class=\"job-list-title\">财经</span>\n              <a class=\"job-list-name\" href=\"/\">会计</a>\n              <a class=\"job-list-name\" href=\"/\">业务</a>\n              <a class=\"job-list-name\" href=\"/\">会计</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n              <a class=\"job-list-name\" href=\"/\">前端开发</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/sub-components/tabs/tabs.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/sub-components/tabs/tabs.component.ts ***!
  \******************************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/components/sub-components/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/components/sub-components/tabs/tabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-components/user-applied/user-applied.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/sub-components/user-applied/user-applied.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    z-index: 999;\n  }"

/***/ }),

/***/ "./src/app/components/sub-components/user-applied/user-applied.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/sub-components/user-applied/user-applied.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-loading class=\"loading\" *ngIf=\"isLoading\"></app-loading>\n<div class=\"job-list-wrapper list-group\">\n  最近10个投递的建立\n  <div class=\"job-item list-group-item\" *ngFor=\"let job of jobList\">\n    <a [routerLink]=\"['/jobdetails/'+job.jobid]\" >{{job.title}}</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sub-components/user-applied/user-applied.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/sub-components/user-applied/user-applied.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserAppliedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAppliedComponent", function() { return UserAppliedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var src_app_services_router_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/router-service.service */ "./src/app/services/router-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserAppliedComponent = /** @class */ (function () {
    function UserAppliedComponent(userService, routerService) {
        this.userService = userService;
        this.routerService = routerService;
        this.isLoading = false;
        this.jobList = [];
    }
    UserAppliedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        var userId = this.routerService.getTheUserId();
        setTimeout(function () {
            _this.userService.getUserInfo('history').subscribe(function (content) {
                _this.jobList = content;
                _this.isLoading = false;
                console.log(content);
                console.log('subscribe finished');
            });
        }, 1000);
    };
    UserAppliedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-applied',
            template: __webpack_require__(/*! ./user-applied.component.html */ "./src/app/components/sub-components/user-applied/user-applied.component.html"),
            styles: [__webpack_require__(/*! ./user-applied.component.css */ "./src/app/components/sub-components/user-applied/user-applied.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"], src_app_services_router_service_service__WEBPACK_IMPORTED_MODULE_2__["RouterServiceService"]])
    ], UserAppliedComponent);
    return UserAppliedComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-components/user-introduction/user-introduction.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/sub-components/user-introduction/user-introduction.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    z-index: 999;\n  }"

/***/ }),

/***/ "./src/app/components/sub-components/user-introduction/user-introduction.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/sub-components/user-introduction/user-introduction.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>在这里，尽情的描述你自己吧，可以是过去，现在，或者未来，也是留给面试官们的第一印象</p>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlTextarea1\">这是我</label>\n      <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"5\"  style=\"  resize: none; height: 10em;\" value={{selfIntroContent}}></textarea>\n    </div>\n    <button class=\"btn btn-success\">确定完成</button>\n  </form>\n\n</div>\n<app-loading class=\"loading\" *ngIf=\"isLoading\"></app-loading>\n"

/***/ }),

/***/ "./src/app/components/sub-components/user-introduction/user-introduction.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/sub-components/user-introduction/user-introduction.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UserIntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIntroductionComponent", function() { return UserIntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_router_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/router-service.service */ "./src/app/services/router-service.service.ts");
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-service.service */ "./src/app/services/user-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserIntroductionComponent = /** @class */ (function () {
    function UserIntroductionComponent(activateRoute, routerService, userService) {
        this.activateRoute = activateRoute;
        this.routerService = routerService;
        this.userService = userService;
        this.isLoading = false;
        this.selfIntroContent = "";
    }
    UserIntroductionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        var userId = this.routerService.getTheUserId();
        setTimeout(function () {
            _this.userService.getUserInfo('intro').subscribe(function (content) {
                console.log(content);
                _this.isLoading = false;
                _this.selfIntroContent = content['selfIntro'];
            });
        }, 1000);
    };
    UserIntroductionComponent.prototype.changeLoadingState = function () {
    };
    UserIntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-introduction',
            template: __webpack_require__(/*! ./user-introduction.component.html */ "./src/app/components/sub-components/user-introduction/user-introduction.component.html"),
            styles: [__webpack_require__(/*! ./user-introduction.component.css */ "./src/app/components/sub-components/user-introduction/user-introduction.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_router_service_service__WEBPACK_IMPORTED_MODULE_2__["RouterServiceService"],
            src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]])
    ], UserIntroductionComponent);
    return UserIntroductionComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-components/user-recommendations/user-recommendations.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/sub-components/user-recommendations/user-recommendations.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    z-index: 999;\n  }"

/***/ }),

/***/ "./src/app/components/sub-components/user-recommendations/user-recommendations.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/sub-components/user-recommendations/user-recommendations.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading class=\"loading\" *ngIf=\"isLoading\"></app-loading>\n<p>\n  user-recommendations works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/sub-components/user-recommendations/user-recommendations.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/sub-components/user-recommendations/user-recommendations.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: UserRecommendationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRecommendationsComponent", function() { return UserRecommendationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_router_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/router-service.service */ "./src/app/services/router-service.service.ts");
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-service.service */ "./src/app/services/user-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserRecommendationsComponent = /** @class */ (function () {
    function UserRecommendationsComponent(_userService, _routerService) {
        this._userService = _userService;
        this._routerService = _routerService;
        this.isLoading = false;
    }
    UserRecommendationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        var userId = this._routerService.getTheUserId();
        setTimeout(function () {
            _this._userService.getUserInfo('recm').subscribe(function (content) {
                console.log(content);
                _this.isLoading = false;
                console.log('subscribe finished');
            });
        }, 1000);
    };
    UserRecommendationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-recommendations',
            template: __webpack_require__(/*! ./user-recommendations.component.html */ "./src/app/components/sub-components/user-recommendations/user-recommendations.component.html"),
            styles: [__webpack_require__(/*! ./user-recommendations.component.css */ "./src/app/components/sub-components/user-recommendations/user-recommendations.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"], src_app_services_router_service_service__WEBPACK_IMPORTED_MODULE_1__["RouterServiceService"]])
    ], UserRecommendationsComponent);
    return UserRecommendationsComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-components/user-resume/user-resume.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/sub-components/user-resume/user-resume.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    z-index: 999;\n  }"

/***/ }),

/***/ "./src/app/components/sub-components/user-resume/user-resume.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/sub-components/user-resume/user-resume.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading class=\"loading\" *ngIf=\"isLoading\"></app-loading>\n<p>\n  {{resumeAddress}}\n</p>\n"

/***/ }),

/***/ "./src/app/components/sub-components/user-resume/user-resume.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/sub-components/user-resume/user-resume.component.ts ***!
  \********************************************************************************/
/*! exports provided: UserResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResumeComponent", function() { return UserResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var src_app_services_router_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/router-service.service */ "./src/app/services/router-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserResumeComponent = /** @class */ (function () {
    function UserResumeComponent(userService, _routerService) {
        this.userService = userService;
        this._routerService = _routerService;
        this.isLoading = false;
        this.resumeAddress = '';
    }
    UserResumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        var userId = this._routerService.getTheUserId();
        setTimeout(function () {
            _this.userService.getUserInfo('resume').subscribe(function (content) {
                console.log(content);
                _this.isLoading = false;
                _this.resumeAddress = content['resumeAddress'];
            });
        }, 1000);
    };
    UserResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-resume',
            template: __webpack_require__(/*! ./user-resume.component.html */ "./src/app/components/sub-components/user-resume/user-resume.component.html"),
            styles: [__webpack_require__(/*! ./user-resume.component.css */ "./src/app/components/sub-components/user-resume/user-resume.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"], src_app_services_router_service_service__WEBPACK_IMPORTED_MODULE_2__["RouterServiceService"]])
    ], UserResumeComponent);
    return UserResumeComponent;
}());



/***/ }),

/***/ "./src/app/env/env.ts":
/*!****************************!*\
  !*** ./src/app/env/env.ts ***!
  \****************************/
/*! exports provided: environments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environments", function() { return environments; });
var environments = {
    prod: '/api',
    // local: "http://localhost:3000",
    local: "/api",
};


/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".small-white-space{\n    padding: 15px;\n}\n\n.mid-white-sapce{\n    padding: 25px;\n}\n\n.footer-wrapper{\n    padding: 15px;\n    background-color: #DE351F;\n}\n\n.footer-title{\n    display: block;\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.title-row{\n    display: block;\n}\n\n.footer-title p{\n    text-align: center;\n}\n\n.footer-ul{\n    list-style-type: none;\n}\n\n.footer-ul li{\n    margin-top: 30px;\n}\n\n.icon-item{\n    font-size: 30px;\n}\n\n.footer-right-reserved{\n    text-align: center;\n    font-size: 12px;\n    background-color: rgb(133, 26, 11);\n    color: white;\n    padding: 15px;\n\n}"

/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-wrapper\">\n\n  <div class=\"container\">\n    <div class=\"row title-row\">\n      <p class=\"footer-title\">we are more caring your future </p>\n    </div>\n    <div class=\"small-white-space\"></div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <ul class=\"footer-ul\">\n          <li>\n            <i class=\"fab fa-weixin icon-item\"></i>\n          </li>\n          <li>\n            <i class=\"fab fa-weixin icon-item\"></i>\n          </li>\n          <li>\n            <i class=\"fab fa-weixin icon-item\"></i>\n          </li>\n\n        </ul>\n      </div>\n      <div class=\"col-sm-3\">\n        <p class=\"footer-subtitle\">subtitle 1</p>\n        <ul class=\"footer-ul\">\n          <li>\n            主页\n          </li>\n          <li>\n            今日内推\n          </li>\n          <li>\n            联系我们\n          </li>\n\n        </ul>\n      </div>\n      <div class=\"col-sm-3\">\n        <p class=\"footer-subtitle\">subtitle 1</p>\n      </div>\n      <div class=\"col-sm-3\">\n        <p class=\"footer-subtitle\">subtitle 1</p>\n      </div>\n    </div>\n    <div class=\"mid-white-sapce\"></div>\n\n  </div>\n\n</div>\n<div class=\"footer-right-reserved\">\n  we reserved all rights\n</div>\n"

/***/ }),

/***/ "./src/app/footer-bar/footer-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/footer-bar/footer-bar.component.ts ***!
  \****************************************************/
/*! exports provided: FooterBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBarComponent", function() { return FooterBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterBarComponent = /** @class */ (function () {
    function FooterBarComponent() {
    }
    FooterBarComponent.prototype.ngOnInit = function () {
    };
    FooterBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-bar',
            template: __webpack_require__(/*! ./footer-bar.component.html */ "./src/app/footer-bar/footer-bar.component.html"),
            styles: [__webpack_require__(/*! ./footer-bar.component.css */ "./src/app/footer-bar/footer-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterBarComponent);
    return FooterBarComponent;
}());



/***/ }),

/***/ "./src/app/models/job.model.ts":
/*!*************************************!*\
  !*** ./src/app/models/job.model.ts ***!
  \*************************************/
/*! exports provided: Job */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Job", function() { return Job; });
var Job = /** @class */ (function () {
    function Job() {
    }
    return Job;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\n  background-color: #E23D22;\n}\n\n.white-font{\n  color: white;\n}\n\n.nav-bar-wrapper{\n  background-color: #E23D22;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.dropdown-menu{\n  background-color: #E23D22;\n}\n\n.dropdown-item:hover{\n  background-color :#E23D22;\n}\n\n.nav-bar-logo{\n  vertical-align: middle;\n}\n\n.nav-items a{\n  text-decoration: none;\n  color: white;\n  transition: color 0.3s;\n}\n\n.nav-items a:hover{\n  color: white;\n}\n\n.nav-item{\n  display: inline-block;\n  box-sizing: border-box;\n  padding-left: 15px;\n  padding-right: 50px;\n}\n\n.nav-button{\n  cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg\">\n  <a class=\"navbar-brand\">寻职网</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link white-font\" href=\"#\">首页</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle white-font\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          热门职位分类\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item white-font\" href=\"#\">IT</a>\n          <a class=\"dropdown-item white-font\" href=\"#\">会计</a>\n          <a class=\"dropdown-item white-font\" href=\"#\">审计</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link white-font\" [routerLink]=\"['/post']\" >快速发布职位</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link white-font\" href=\"#\">关于我们</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link white-font\" href=\"#\">加入我们</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link nav-button\" (click)=\"welcomeRedirect()\" style=\"color: white;\"> {{isUserLogin==true ? \"欢迎回来\" : \"登陆\"}}</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link nav-button\" (click)=\"registerOrLogout()\" style=\"color: white;\">{{isUserLogin==true ? \"退出\" : \"注册\"}}</a>\n      </li>\n    </ul>\n  </div>  \n</nav>\n\n<!-- <div class=\"loginForm\">\n  this is loginform\n</div> -->\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isUserLogin = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // navbar 确定登录状态的两种方法，第一是一上来登陆完，第二种是检查是不是有key
        this.userService.getLoginState().subscribe(function (data) {
            // if(data == true || localStorage.getItem('thekey') != null) this.isUserLogin = true;
            if (data == true || localStorage.getItem('thekey'))
                _this.isUserLogin = true;
            console.log(data == true);
        });
    };
    NavBarComponent.prototype.welcomeRedirect = function () {
        if (this.isUserLogin == true) {
            var userId = JSON.parse(localStorage.getItem('thekey'));
            console.log(userId);
            this.router.navigate(['dashboard', userId['userid']]);
        }
        else {
            this.router.navigate(['/signin']);
        }
    };
    NavBarComponent.prototype.registerOrLogout = function () {
        if (this.isUserLogin == true) {
            this.isUserLogin = false;
            localStorage.removeItem('thekey');
            this.router.navigate(['/']);
        }
        else {
            console.log('here');
            this.router.navigate(['register']);
            // alert('test')
        }
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/services/job-detail.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/job-detail.service.ts ***!
  \************************************************/
/*! exports provided: JobDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailService", function() { return JobDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env/env */ "./src/app/env/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobDetailService = /** @class */ (function () {
    function JobDetailService(http) {
        this.http = http;
    }
    JobDetailService.prototype.getJobDescription = function (jobid) {
        var requestUrl = _env_env__WEBPACK_IMPORTED_MODULE_2__["environments"].local + "/jobdescription/" + jobid;
        return this.http.get(requestUrl);
    };
    JobDetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], JobDetailService);
    return JobDetailService;
}());



/***/ }),

/***/ "./src/app/services/list-results.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/list-results.service.ts ***!
  \**************************************************/
/*! exports provided: ListResultsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListResultsService", function() { return ListResultsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env/env */ "./src/app/env/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListResultsService = /** @class */ (function () {
    function ListResultsService(httpClient) {
        this.httpClient = httpClient;
    }
    ListResultsService.prototype.retriveSearchListing = function (page) {
        console.log("listing result service");
        return this.httpClient
            .get(_env_env__WEBPACK_IMPORTED_MODULE_2__["environments"].local + "/search?test=yes&hello=helloworld&page=" + page);
    };
    ListResultsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListResultsService);
    return ListResultsService;
}());



/***/ }),

/***/ "./src/app/services/map-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/map-service.service.ts ***!
  \*************************************************/
/*! exports provided: MapServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapServiceService", function() { return MapServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapServiceService = /** @class */ (function () {
    function MapServiceService(_httpClient) {
        this._httpClient = _httpClient;
    }
    MapServiceService.prototype.getCodeOfAddress = function (address) {
        return this._httpClient.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "=Winnetka&key=AIzaSyCmeLppnSZHxXtZG4wdFxpce2pnX1p9KA0");
    };
    MapServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MapServiceService);
    return MapServiceService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env/env */ "./src/app/env/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(httpClient) {
        this.httpClient = httpClient;
    }
    PostService.prototype.postNewJob = function (newJobInfo) {
        console.log("this is the psot service");
        console.log(newJobInfo);
        return this.httpClient
            .post(_env_env__WEBPACK_IMPORTED_MODULE_2__["environments"].local + "/newjobpost", newJobInfo);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/router-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/router-service.service.ts ***!
  \****************************************************/
/*! exports provided: RouterServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterServiceService", function() { return RouterServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouterServiceService = /** @class */ (function () {
    function RouterServiceService(activateRoute) {
        this.activateRoute = activateRoute;
    }
    RouterServiceService.prototype.getTheUserId = function () {
        return this.activateRoute.snapshot.firstChild.params.user;
    };
    RouterServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RouterServiceService);
    return RouterServiceService;
}());



/***/ }),

/***/ "./src/app/services/search-key-words.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/search-key-words.service.ts ***!
  \******************************************************/
/*! exports provided: SearchKeyWordsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchKeyWordsService", function() { return SearchKeyWordsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchKeyWordsService = /** @class */ (function () {
    function SearchKeyWordsService() {
    }
    SearchKeyWordsService.prototype.searchWithKeywords = function (keywords) {
        console.log(keywords);
    };
    SearchKeyWordsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SearchKeyWordsService);
    return SearchKeyWordsService;
}());



/***/ }),

/***/ "./src/app/services/user-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-service.service.ts ***!
  \**************************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env/env */ "./src/app/env/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserServiceService = /** @class */ (function () {
    function UserServiceService(http) {
        this.http = http;
        this.loginState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    UserServiceService.prototype.userSignIn = function (userInfo) {
        console.log(userInfo);
        return this.http.post("http://localhost:3000/usersignin", userInfo);
    };
    UserServiceService.prototype.userRegister = function (userRegisterInfo) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": "secretkey"
            })
        };
        return this.http.post("http://localhost:3000/register", userRegisterInfo, httpOptions);
    };
    UserServiceService.prototype.userLogIn = function () {
        this.loginState.next(true);
    };
    UserServiceService.prototype.userLogout = function () {
        this.loginState.next(false);
    };
    UserServiceService.prototype.getLoginState = function () {
        return this.loginState.asObservable();
    };
    UserServiceService.prototype.isUserLogin = function () {
        if (localStorage.getItem('thekey') != null) {
            this.userLogIn();
        }
    };
    UserServiceService.prototype.getUserInfo = function (infoCate) {
        console.log(infoCate);
        return this.http.get(_env_env__WEBPACK_IMPORTED_MODULE_3__["environments"].local + "/userInfo?cate=" + infoCate + "&id=" + JSON.parse(localStorage.getItem('thekey'))['email']);
    };
    UserServiceService.prototype.jobApply = function (userId, postId) {
        console.log(userId, postId);
        return this.http.post(_env_env__WEBPACK_IMPORTED_MODULE_3__["environments"].local + "/userapply", { postId: postId, userId: userId });
    };
    UserServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserServiceService);
    return UserServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/weijiexiang/Desktop/Desktop/jobFinding/jobSearching/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map