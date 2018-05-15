"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var databseconnection_1 = require("./databseconnection");
var path = __importStar(require("path"));
var cors_1 = __importDefault(require("cors"));
var App = /** @class */ (function () {
    function App() {
        this.connection = new databseconnection_1.DatabaseConnection();
        this.express = express_1.default();
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: false }));
        this.express.use(express_1.default.static(__dirname));
        this.express.use(cors_1.default());
        this.allRoutes();
    }
    App.prototype.allRoutes = function () {
        var _this = this;
        var router = express_1.default.Router();
        // routes for courses
        router.get('/courses/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.course.findAll().then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/courses/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.course.findAll({
                                where: {
                                    id: req.params.id
                                }
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/courses/:id/batches/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.course.findAll({
                                where: {
                                    id: req.params.id
                                },
                                include: [
                                    {
                                        model: this.connection.batch
                                    }
                                ]
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.log(err_3.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/courses/:id/batches/:batchId', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.course.findAll({
                                where: {
                                    id: req.params.id
                                },
                                include: [
                                    {
                                        model: this.connection.batch,
                                        where: { id: req.params.batchId }
                                    }
                                ]
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        console.log(err_4.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.post('/courses/:id/batches/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var valueToBeSent, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valueToBeSent = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.connection.batch.build({
                                name: req.body.name,
                                courseId: req.params.id
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _a.sent();
                        console.log(err_5.message);
                        valueToBeSent = false;
                        return [3 /*break*/, 4];
                    case 4:
                        res.send(valueToBeSent);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/courses/:id/batches/:batchId/lectures', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.course.findAll({
                                where: {
                                    id: req.params.id
                                },
                                include: [
                                    { model: this.connection.batch, where: { id: req.params.batchId }, include: [{ model: this.connection.lecture }] },
                                ]
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_6 = _a.sent();
                        console.log(err_6.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.post('/courses/:id/batches/:batchId/lectures', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var valueToBeSent, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valueToBeSent = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.connection.lecture.build({
                                name: req.body.name,
                                batchId: req.params.batchId,
                                subjectId: req.body.subjectId,
                                teacherId: req.body.teacherId
                            }).save()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_7 = _a.sent();
                        console.log(err_7.message);
                        valueToBeSent = false;
                        return [3 /*break*/, 4];
                    case 4:
                        res.send(valueToBeSent);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/courses/:id/batches/:batchId/students', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.course.findAll({
                                where: {
                                    id: req.params.id
                                },
                                include: [
                                    { model: this.connection.batch, where: req.params.batchId, include: [{ model: this.connection.student }] },
                                ]
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_8 = _a.sent();
                        console.log(err_8.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/courses/:id/batches/:batchId/lectures/:lectureId', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.course.findAll({
                                where: {
                                    id: req.params.id
                                },
                                include: [
                                    { model: this.connection.batch, where: { id: req.params.batchId },
                                        include: [{ model: this.connection.lecture, where: { id: req.params.lectureId } }] }
                                ]
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_9 = _a.sent();
                        console.log(err_9.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.post('/courses/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var err_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.course.build({
                                name: req.body.name,
                            }).save()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_10 = _a.sent();
                        console.log(err_10.message);
                        res.send(false);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(true);
                        return [2 /*return*/];
                }
            });
        }); });
        router.delete('/courses/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var err_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.course.destroy({
                                where: {
                                    id: req.params.id
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_11 = _a.sent();
                        console.log(err_11.message);
                        res.send(false);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(true);
                        return [2 /*return*/];
                }
            });
        }); });
        router.put('/courses/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var err_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.course.update({ name: req.body.name }, { returning: true, where: { id: req.params.id } }).then(function (rowsUpdated) {
                                res.send(rowsUpdated);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_12 = _a.sent();
                        console.log(err_12.message);
                        res.send(false);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        ///// Routes for subjects
        router.get('/subjects', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.subject.findAll().then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_13 = _a.sent();
                        console.log(err_13.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/subjects/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.subject.findAll({
                                where: {
                                    id: req.params.id
                                }
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_14 = _a.sent();
                        console.log(err_14.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.post('/subjects', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var value, err_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.connection.subject.build({
                                name: req.body.name,
                                courseId: req.body.courseId
                            }).save()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_15 = _a.sent();
                        console.log(err_15.message);
                        value = false;
                        return [3 /*break*/, 4];
                    case 4:
                        res.send(value);
                        return [2 /*return*/];
                }
            });
        }); });
        router.put('/subjects/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var err_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.subject.update({ name: req.body.name }, { returning: true, where: { id: req.params.id } }).then(function (rowsUpdated) {
                                res.send(rowsUpdated);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_16 = _a.sent();
                        console.log(err_16.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        router.delete('/subjects/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var valueToBeSent, err_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valueToBeSent = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.connection.subject.destroy({
                                where: {
                                    id: req.params.id
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_17 = _a.sent();
                        console.log(err_17.message);
                        valueToBeSent = false;
                        return [3 /*break*/, 4];
                    case 4:
                        res.send(valueToBeSent);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/subjects/:id/teachers', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.subject.findAll({
                                where: {
                                    id: req.params.id
                                },
                                include: [
                                    {
                                        model: this.connection.teacher
                                    }
                                ]
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_18 = _a.sent();
                        console.log(err_18.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        /////////////////// Routes for teachers///////////////////
        router.get('/teachers', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_19;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.teacher.findAll().then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_19 = _a.sent();
                        console.log(err_19.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/teachers/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_20;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.teacher.findAll({
                                where: {
                                    id: req.params.id
                                }
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_20 = _a.sent();
                        console.log(err_20.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.post('/teachers', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var value, err_21;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.connection.teacher.build({
                                name: req.body.name,
                                subjectId: req.body.subjectId
                            }).save()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_21 = _a.sent();
                        console.log(err_21.message);
                        value = false;
                        return [3 /*break*/, 4];
                    case 4:
                        res.send(value);
                        return [2 /*return*/];
                }
            });
        }); });
        router.put('/teachers/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var err_22;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.teacher.update({ name: req.body.name }, { returning: true, where: { id: req.params.id } }).then(function (rowsUpdated) {
                                res.send(rowsUpdated);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_22 = _a.sent();
                        console.log(err_22.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        router.delete('/teachers/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var valueToBeSent, err_23;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valueToBeSent = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.connection.teacher.destroy({
                                where: {
                                    id: req.params.id
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_23 = _a.sent();
                        console.log(err_23.message);
                        valueToBeSent = false;
                        return [3 /*break*/, 4];
                    case 4:
                        res.send(valueToBeSent);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/teachers/:id/batches', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_24;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.batch.findAll({
                                include: [
                                    {
                                        model: this.connection.lecture,
                                        where: {
                                            teacherId: req.params.id
                                        }
                                    }
                                ]
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_24 = _a.sent();
                        console.log(err_24.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        //////// Routes for students
        router.get('/students', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_25;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.student.findAll().then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_25 = _a.sent();
                        console.log(err_25.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/students/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_26;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.student.findAll({
                                where: {
                                    id: req.params.id
                                }
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_26 = _a.sent();
                        console.log(err_26.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.post('/students', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var value, err_27;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.connection.student.build({
                                name: req.body.name,
                            }).save()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_27 = _a.sent();
                        console.log(err_27.message);
                        value = false;
                        return [3 /*break*/, 4];
                    case 4:
                        res.send(value);
                        return [2 /*return*/];
                }
            });
        }); });
        router.put('/students/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var err_28;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.student.update({ name: req.body.name }, { returning: true, where: { id: req.params.id } }).then(function (rowsUpdated) {
                                res.send(rowsUpdated);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_28 = _a.sent();
                        console.log(err_28.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        router.delete('/students/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var valueToBeSent, err_29;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valueToBeSent = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.connection.student.destroy({
                                where: {
                                    id: req.params.id
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_29 = _a.sent();
                        console.log(err_29.message);
                        valueToBeSent = false;
                        return [3 /*break*/, 4];
                    case 4:
                        res.send(valueToBeSent);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/students/:id/batches', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_30;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.student.findAll({
                                where: {
                                    id: req.params.id
                                },
                                include: [
                                    {
                                        model: this.connection.batch
                                    }
                                ]
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_30 = _a.sent();
                        console.log(err_30.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/students/:id/batches/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var err_31;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.connection.student.findAll({
                                where: {
                                    id: req.params.id
                                },
                                include: [
                                    {
                                        model: this.connection.batch
                                    }
                                ]
                            }).then(function (response) {
                                _this.result = response;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_31 = _a.sent();
                        console.log(err_31.message);
                        return [3 /*break*/, 3];
                    case 3:
                        res.send(this.result);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/', function (req, res) {
            console.log(__dirname);
            res.sendFile(path.join(__dirname, 'index.html'));
        });
        router.get('/info', function (req, res) {
            console.log(__dirname);
            res.sendFile(path.join(__dirname, 'info.html'));
        });
        this.express.use('/', router);
    };
    return App;
}());
exports.default = new App().express;
