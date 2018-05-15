webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiService = /** @class */ (function () {
    function ApiService() {
    }
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".navBar{\r\n    margin-top:20px;\r\n    margin-left:20px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"buttons\" class=\"navBar\">\n  <a routerLink=\"/courses/\">\n    <button>Courses</button>\n  </a>\n  <a routerLink=\"/students/\">\n    <button>Students</button>\n  </a>\n\n  <a routerLink=\"/teachers/\">\n    <button>Teachers</button>\n  </a>\n\n  <a routerLink=\"/subjects/\">\n    <button>Subjects</button>\n  </a>\n\n\n</div>\n\n<router-outlet>\n\n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'School Management System';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__courses_courses_component__ = __webpack_require__("./src/app/courses/courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__students_students_component__ = __webpack_require__("./src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__batches_batches_component__ = __webpack_require__("./src/app/batches/batches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lectures_lectures_component__ = __webpack_require__("./src/app/lectures/lectures.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__subjects_subjects_component__ = __webpack_require__("./src/app/subjects/subjects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__teachers_teachers_component__ = __webpack_require__("./src/app/teachers/teachers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api_service__ = __webpack_require__("./src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__courseapi_service__ = __webpack_require__("./src/app/courseapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__studentapi_service__ = __webpack_require__("./src/app/studentapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__subjectapi_service__ = __webpack_require__("./src/app/subjectapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__teacherapi_service__ = __webpack_require__("./src/app/teacherapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__batchapi_service__ = __webpack_require__("./src/app/batchapi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ALLROUTES = [
    { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_6__courses_courses_component__["a" /* CoursesComponent */] },
    // {path: 'courses/:id/batches', component: BatchesComponent},
    { path: 'students', component: __WEBPACK_IMPORTED_MODULE_7__students_students_component__["a" /* StudentsComponent */] },
    { path: 'lectures', component: __WEBPACK_IMPORTED_MODULE_9__lectures_lectures_component__["a" /* LecturesComponent */] },
    { path: 'subjects', component: __WEBPACK_IMPORTED_MODULE_10__subjects_subjects_component__["a" /* SubjectsComponent */] },
    { path: 'teachers', component: __WEBPACK_IMPORTED_MODULE_11__teachers_teachers_component__["a" /* TeachersComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__courses_courses_component__["a" /* CoursesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__students_students_component__["a" /* StudentsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__batches_batches_component__["a" /* BatchesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__lectures_lectures_component__["a" /* LecturesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__subjects_subjects_component__["a" /* SubjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__teachers_teachers_component__["a" /* TeachersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(ALLROUTES),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_13__courseapi_service__["a" /* CourseapiService */],
                __WEBPACK_IMPORTED_MODULE_14__studentapi_service__["a" /* StudentapiService */],
                __WEBPACK_IMPORTED_MODULE_15__subjectapi_service__["a" /* SubjectapiService */],
                __WEBPACK_IMPORTED_MODULE_16__teacherapi_service__["a" /* TeacherapiService */],
                __WEBPACK_IMPORTED_MODULE_17__batchapi_service__["a" /* BatchapiService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/batchapi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchapiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BatchapiService = /** @class */ (function () {
    function BatchapiService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000/courses';
    }
    BatchapiService.prototype.getBatchesByCourseId = function (courseId) {
        return this.http.get("http://localhost:3000/courses/" + courseId + "/batches");
    };
    BatchapiService.prototype.addNewBatch = function (batchName, courseId) {
        return this.http.post("http://localhost:3000/courses/" + courseId + "/batches", {
            name: batchName
        });
    };
    BatchapiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BatchapiService);
    return BatchapiService;
}());



/***/ }),

/***/ "./src/app/batches/batches.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/batches/batches.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  batches works!\n</p>\n"

/***/ }),

/***/ "./src/app/batches/batches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__batchapi_service__ = __webpack_require__("./src/app/batchapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BatchesComponent = /** @class */ (function () {
    function BatchesComponent(batchApi, route) {
        this.batchApi = batchApi;
        this.route = route;
    }
    BatchesComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (res) {
            console.log(res);
            // this.batchApi.getBatchesByCourseId(res);
        });
    };
    BatchesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-batches',
            template: __webpack_require__("./src/app/batches/batches.component.html"),
            styles: [__webpack_require__("./src/app/batches/batches.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__batchapi_service__["a" /* BatchapiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], BatchesComponent);
    return BatchesComponent;
}());



/***/ }),

/***/ "./src/app/courseapi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseapiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CourseapiService = /** @class */ (function () {
    function CourseapiService(http) {
        this.http = http;
    }
    CourseapiService.prototype.getAllCourses = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get('http://localhost:3000/courses')];
            });
        });
    };
    CourseapiService.prototype.addNewCourse = function (courseName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post('http://localhost:3000/courses', {
                            name: courseName
                        }).subscribe(function (res) { return res.status; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CourseapiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CourseapiService);
    return CourseapiService;
}());



/***/ }),

/***/ "./src/app/courses/courses.component.css":
/***/ (function(module, exports) {

module.exports = ".allCourses{\r\n    margin: 20px;\r\n}\r\n\r\n.addCourse{\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.main{\r\n    margin: 20px;\r\n}"

/***/ }),

/***/ "./src/app/courses/courses.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"main\">\n      <button  (click)=\"getCourses()\" class=\"btn btn-primary\">All Courses</button>\n  <button (click)=\"addNewCourse()\" class=\"btn btn-danger\">Add New Course</button>\n  <div *ngIf=\"displayAllCourses\" class=\"allCourses\">\n    <h1>All Courses are : </h1>\n    <ul>\n      <li *ngFor=\"let k of allCourses\">\n       <a  (click)=\"getBatches(k.id)\">\n         <p>{{k.name}}</p>\n         <div *ngIf=\"displayBatches\">\n\n          <div *ngIf=\"k.id == displayBatchesForId && displayBatchesForId != -1\">\n            \n\n          </div>\n\n           <ul *ngIf=\"k.id == displayBatchesForId && displayBatchesForId != -1\">\n             <li *ngFor=\"let b of allBatches\" >\n               <span>{{b.name}}</span>\n             </li>\n           </ul>\n         </div>\n      </a>\n       \n      </li>\n    </ul>\n  </div>\n\n  <div *ngIf=\"formToAddNewCourse\" class=\"addCourse\">\n    <form class=\"addCourse\" #addCourseForm = \"ngForm\" method=\"POST\" (ngSubmit)=\"postNewCourse(addCourseForm.value)\" >\n      <label for=\"courseName\">Course Name : </label>\n      <input type=\"text\" name=\"courseName\" ngModel>\n      <input type=\"submit\" value=\"Add\">\n    </form>\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__courseapi_service__ = __webpack_require__("./src/app/courseapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__batchapi_service__ = __webpack_require__("./src/app/batchapi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(courseApi, route, batchApi) {
        this.courseApi = courseApi;
        this.route = route;
        this.batchApi = batchApi;
        this.displayAllCourses = false;
        this.formToAddNewCourse = false;
        this.displayBatches = false;
        this.allBatches = [];
        this.displayBatchesForId = -1;
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent.prototype.getCourses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.displayAllCourses = true;
                        this.formToAddNewCourse = false;
                        return [4 /*yield*/, this.courseApi.getAllCourses()
                                .then(function (res) {
                                res.subscribe(function (data) {
                                    _this.allCourses = data.json();
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoursesComponent.prototype.addNewCourse = function () {
        this.displayAllCourses = false;
        this.formToAddNewCourse = true;
    };
    CoursesComponent.prototype.postNewCourse = function (data) {
        console.log(this.courseApi.addNewCourse(data.courseName));
    };
    CoursesComponent.prototype.getBatches = function (data) {
        var _this = this;
        this.allBatches = [];
        this.batchApi.getBatchesByCourseId(data)
            .subscribe(function (res) {
            _this.displayBatches = true;
            for (var _i = 0, _a = res.json(); _i < _a.length; _i++) {
                var v = _a[_i];
                for (var _b = 0, _c = v.batches; _b < _c.length; _b++) {
                    var batch = _c[_b];
                    _this.allBatches.push(batch);
                }
            }
            _this.displayBatchesForId = data;
        }, function (err) {
            console.log(err.message);
        });
    };
    CoursesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-courses',
            template: __webpack_require__("./src/app/courses/courses.component.html"),
            styles: [__webpack_require__("./src/app/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__courseapi_service__["a" /* CourseapiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__batchapi_service__["a" /* BatchapiService */]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/lectures/lectures.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lectures/lectures.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  lectures works!\n</p>\n"

/***/ }),

/***/ "./src/app/lectures/lectures.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LecturesComponent = /** @class */ (function () {
    function LecturesComponent() {
    }
    LecturesComponent.prototype.ngOnInit = function () {
    };
    LecturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lectures',
            template: __webpack_require__("./src/app/lectures/lectures.component.html"),
            styles: [__webpack_require__("./src/app/lectures/lectures.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LecturesComponent);
    return LecturesComponent;
}());



/***/ }),

/***/ "./src/app/studentapi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentapiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var StudentapiService = /** @class */ (function () {
    function StudentapiService(http) {
        this.http = http;
    }
    StudentapiService.prototype.getAllStudents = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get('http://localhost:3000/students')];
            });
        });
    };
    StudentapiService.prototype.addNewStudent = function (studentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post('http://localhost:3000/students', {
                            name: studentName
                        }).subscribe(function (res) { return res.status; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentapiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], StudentapiService);
    return StudentapiService;
}());



/***/ }),

/***/ "./src/app/students/students.component.css":
/***/ (function(module, exports) {

module.exports = ".allCourses{\r\n    margin: 20px;\r\n}\r\n\r\n.addCourse{\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.main{\r\n    margin: 20px;\r\n}"

/***/ }),

/***/ "./src/app/students/students.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"main\">\n      <button  (click)=\"getStudents()\" class=\"btn btn-primary\">All Students</button>\n  <button (click)=\"addNewStudent()\" class=\"btn btn-danger\">Add New Student</button>\n  <div *ngIf=\"displayAllStudents\" class=\"allCourses\">\n    <h1>All Students are : </h1>\n    <ul>\n      <li *ngFor=\"let k of allStudents\">\n        <p>{{k.name}}</p>\n      </li>\n    </ul>\n  </div>\n\n  <div *ngIf=\"formToAddNewStudent\" class=\"addCourse\">\n    <form class=\"addCourse\" #addStudentForm = \"ngForm\" method=\"POST\" (ngSubmit)=\"postNewStudent(addStudentForm.value)\" >\n      <label for=\"courseName\">Student Name : </label>\n      <input type=\"text\" name=\"studentName\" ngModel>\n      <input type=\"submit\" value=\"Add\">\n    </form>\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/students/students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__studentapi_service__ = __webpack_require__("./src/app/studentapi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var StudentsComponent = /** @class */ (function () {
    function StudentsComponent(studentApi) {
        this.studentApi = studentApi;
        this.displayAllStudents = false;
        this.formToAddNewStudent = false;
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    StudentsComponent.prototype.getStudents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.displayAllStudents = true;
                        this.formToAddNewStudent = false;
                        return [4 /*yield*/, this.studentApi.getAllStudents()
                                .then(function (res) {
                                res.subscribe(function (data) {
                                    _this.allStudents = data.json();
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentsComponent.prototype.addNewStudent = function () {
        this.displayAllStudents = false;
        this.formToAddNewStudent = true;
    };
    StudentsComponent.prototype.postNewStudent = function (data) {
        console.log(this.studentApi.addNewStudent(data.studentName));
    };
    StudentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-students',
            template: __webpack_require__("./src/app/students/students.component.html"),
            styles: [__webpack_require__("./src/app/students/students.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__studentapi_service__["a" /* StudentapiService */]])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/subjectapi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectapiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectapiService = /** @class */ (function () {
    function SubjectapiService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000/subjects';
    }
    SubjectapiService.prototype.getAllSubjects = function () {
        return this.http.get(this.BASE_URL);
    };
    SubjectapiService.prototype.addNewSubject = function (subjectName, courseId) {
        return this.http.post(this.BASE_URL, {
            name: subjectName,
            courseId: courseId
        }).subscribe();
    };
    SubjectapiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SubjectapiService);
    return SubjectapiService;
}());



/***/ }),

/***/ "./src/app/subjects/subjects.component.css":
/***/ (function(module, exports) {

module.exports = ".allCourses{\r\n    margin: 20px;\r\n}\r\n\r\n.addCourse{\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.main{\r\n    margin: 20px;\r\n}"

/***/ }),

/***/ "./src/app/subjects/subjects.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"main\">\n      <button  (click)=\"displayAllSubjects()\" class=\"btn btn-primary\">All Subjects</button>\n  <button (click)=\"addSubject()\" class=\"btn btn-danger\">Add New Subject</button>\n  <div *ngIf=\"displayAllSubjectsBool\" class=\"allCourses\">\n    <h1>All Subjects are : </h1>\n    <ul>\n      <li *ngFor=\"let k of allSubjects\">\n        <p>{{k.name}}</p>\n      </li>\n    </ul>\n  </div>\n\n  <div *ngIf=\"addSubjectBool\" class=\"addCourse\">\n    <form class=\"addCourse\" #addSubjectForm = \"ngForm\" method=\"POST\" (ngSubmit)=\"postNewSubject(addSubjectForm.value)\" >\n      <label for=\"subjectName\">Subject Name : </label>\n      <input type=\"text\" name=\"subjectName\" ngModel>\n          <select name=\"courseId\" ngModel>\n              <option *ngFor=\"let v of allCourses\"   [value]=\"v.id\">{{v.name}}</option>\n            </select>\n      \n      <input type=\"submit\" value=\"Add\">\n    </form>\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/subjects/subjects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subjectapi_service__ = __webpack_require__("./src/app/subjectapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courseapi_service__ = __webpack_require__("./src/app/courseapi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectsComponent = /** @class */ (function () {
    function SubjectsComponent(subjectApi, courseapi) {
        this.subjectApi = subjectApi;
        this.courseapi = courseapi;
        this.displayAllSubjectsBool = false;
        this.addSubjectBool = false;
    }
    SubjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subjectApi.getAllSubjects().subscribe(function (data) {
            _this.allSubjects = data.json();
        }, function (error) {
            console.log(error.message);
        });
        this.courseapi.getAllCourses()
            .then(function (res) {
            res.subscribe(function (data) {
                _this.allCourses = data.json();
            });
        });
    };
    SubjectsComponent.prototype.displayAllSubjects = function () {
        this.displayAllSubjectsBool = true;
        this.addSubjectBool = false;
        this.ngOnInit();
    };
    SubjectsComponent.prototype.addSubject = function () {
        this.addSubjectBool = true;
        this.displayAllSubjectsBool = false;
    };
    SubjectsComponent.prototype.postNewSubject = function (data) {
        console.log('here');
        this.subjectApi.addNewSubject(data.subjectName, data.courseId);
    };
    SubjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-subjects',
            template: __webpack_require__("./src/app/subjects/subjects.component.html"),
            styles: [__webpack_require__("./src/app/subjects/subjects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__subjectapi_service__["a" /* SubjectapiService */], __WEBPACK_IMPORTED_MODULE_2__courseapi_service__["a" /* CourseapiService */]])
    ], SubjectsComponent);
    return SubjectsComponent;
}());



/***/ }),

/***/ "./src/app/teacherapi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherapiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var TeacherapiService = /** @class */ (function () {
    function TeacherapiService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000/teachers';
    }
    TeacherapiService.prototype.getAllTeachers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(this.BASE_URL)];
            });
        });
    };
    TeacherapiService.prototype.addNewTeacher = function (teacherName, subjectId) {
        return this.http.post(this.BASE_URL, {
            name: teacherName,
            subjectId: subjectId
        });
    };
    TeacherapiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TeacherapiService);
    return TeacherapiService;
}());



/***/ }),

/***/ "./src/app/teachers/teachers.component.css":
/***/ (function(module, exports) {

module.exports = ".allCourses{\r\n    margin: 20px;\r\n}\r\n\r\n.addCourse{\r\n    margin-top: 10px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.main{\r\n    margin: 20px;\r\n}"

/***/ }),

/***/ "./src/app/teachers/teachers.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"main\">\n      <button  (click)=\"displayAllTeachers()\" class=\"btn btn-primary\">All Teachers</button>\n  <button (click)=\"addTeacher()\" class=\"btn btn-danger\">Add New Teacher</button>\n  <div *ngIf=\"displayAllTeacherssBool\" class=\"allCourses\">\n    <h1>All Teachers are : </h1>\n    <ul>\n      <li *ngFor=\"let k of allTeachers\">\n        <p>{{k.name}}</p>\n      </li>\n    </ul>\n  </div>\n\n  <div *ngIf=\"addTeacherBool\" class=\"addCourse\">\n    <form class=\"addCourse\" #addTeacherForm = \"ngForm\" method=\"POST\" (ngSubmit)=\"postNewTeacher(addTeacherForm.value)\" >\n      <label for=\"TeacherName\">Teacher Name : </label>\n      <input type=\"text\" name=\"teacherName\" ngModel>\n          <select name=\"subjectId\" ngModel>\n              <option *ngFor=\"let v of allSubjects\"   [value]=\"v.id\">{{v.name}}</option>\n            </select>\n      \n      <input type=\"submit\" value=\"Add\">\n    </form>\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/teachers/teachers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subjectapi_service__ = __webpack_require__("./src/app/subjectapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacherapi_service__ = __webpack_require__("./src/app/teacherapi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeachersComponent = /** @class */ (function () {
    function TeachersComponent(teacherApi, subjectApi) {
        this.teacherApi = teacherApi;
        this.subjectApi = subjectApi;
        this.displayAllTeacherssBool = false;
        this.addTeacherBool = false;
    }
    TeachersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subjectApi.getAllSubjects().subscribe(function (data) {
            _this.allSubjects = data.json();
        }, function (error) {
            console.log(error.message);
        });
        this.teacherApi.getAllTeachers()
            .then(function (res) {
            res.subscribe(function (data) {
                _this.allTeachers = data.json();
            });
        });
    };
    TeachersComponent.prototype.displayAllTeachers = function () {
        this.displayAllTeacherssBool = true;
        this.addTeacherBool = false;
        this.ngOnInit();
    };
    TeachersComponent.prototype.addTeacher = function () {
        this.addTeacherBool = true;
        this.displayAllTeacherssBool = false;
    };
    TeachersComponent.prototype.postNewTeacher = function (data) {
        this.teacherApi.addNewTeacher(data.teacherName, data.subjectId)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    TeachersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teachers',
            template: __webpack_require__("./src/app/teachers/teachers.component.html"),
            styles: [__webpack_require__("./src/app/teachers/teachers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__teacherapi_service__["a" /* TeacherapiService */], __WEBPACK_IMPORTED_MODULE_1__subjectapi_service__["a" /* SubjectapiService */]])
    ], TeachersComponent);
    return TeachersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map