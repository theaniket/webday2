"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var express_1 = __importDefault(require("express"));
var cors = require('cors');
// var corsOptions = {
//     origin: 'http://localhost:4200',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
var port = process.env.port || 3000;
app_1.default.use(express_1.default.json());
app_1.default.use(express_1.default.urlencoded({ extended: false }));
app_1.default.use(express_1.default.static(__dirname));
app_1.default.listen(port, function () {
    console.log('Listening at port : ' + port);
});
