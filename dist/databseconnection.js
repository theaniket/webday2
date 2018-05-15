"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = __importDefault(require("sequelize"));
var DatabaseConnection = /** @class */ (function () {
    function DatabaseConnection() {
        try {
            this.connection = new sequelize_1.default('mainDb', 'aniket', 'password', {
                dialect: 'sqlite',
                storage: './storage/AppData.sqlite',
                operatorsAliases: false
            });
            this.connection.authenticate();
            this.defineTables();
            try {
                this.connection.sync();
            }
            catch (err) {
                console.log('here');
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
    DatabaseConnection.prototype.defineTables = function () {
        try {
            this.teacher = this.connection.define('teacher', {
                name: {
                    type: sequelize_1.default.STRING
                }
            });
            this.student = this.connection.define('student', {
                name: {
                    type: sequelize_1.default.STRING,
                }
            });
            this.lecture = this.connection.define('lecture', {
                name: {
                    type: sequelize_1.default.STRING
                }
            });
            this.subject = this.connection.define('subject', {
                name: {
                    type: sequelize_1.default.STRING
                }
            });
            this.batch = this.connection.define('batch', {
                name: {
                    type: sequelize_1.default.STRING,
                }
            });
            this.course = this.connection.define('course', {
                name: {
                    type: sequelize_1.default.STRING,
                }
            });
            // associate tables
            this.subject.hasMany(this.teacher);
            this.batch.hasMany(this.lecture);
            this.lecture.belongsTo(this.subject);
            this.lecture.belongsTo(this.teacher);
            this.student.belongsToMany(this.batch, { through: 'BatchStudent' });
            this.batch.belongsToMany(this.student, { through: 'BatchStudent' });
            this.course.hasMany(this.batch);
            this.course.hasMany(this.subject);
            // insert sample data
            // let allCourses:string[] = ["Msc", "Btech", "Mtech", "Phd"];
            // for(let value of allCourses){
            //     this.course.build({
            //         name:value
            //     }).save();
            // }
            // this.batch.build({
            //     name: 'Spring 2018',
            //     courseId: 1
            // }).save();
            // this.batch.build({
            //     name: 'Fall 2018',
            //     courseId: 1
            // }).save();
            // this.batch.build({
            //     name: 'Spring 2018',
            //     courseId: 2
            // }).save();
            // this.batch.build({
            //     name: 'Fall 2018',
            //     courseId: 2
            // }).save();
            // this.batch.build({
            //     name: 'Spring 2018',
            //     courseId: 3
            // }).save();
            // this.batch.build({
            //     name: 'Fall 2018',
            //     courseId: 3
            // }).save();
        }
        catch (err) {
            console.log(err.message);
        }
    };
    return DatabaseConnection;
}());
exports.DatabaseConnection = DatabaseConnection;
