import express from 'express';
import {DatabaseConnection} from './databseconnection';
import { RequestHandlerParams } from 'express-serve-static-core';
import * as path from 'path';
import cors from 'cors';

class App{

    public express: object[];
    public connection: DatabaseConnection;
    public result: any;

    constructor(){
        this.connection = new DatabaseConnection();
        this.express = express();
        this.express.use(express.json());
        this.express.use(express.urlencoded({extended:false}));
        this.express.use(express.static(__dirname));
        this.express.use(cors());
        this.allRoutes();
    }

    allRoutes(){
        let router = express.Router();

        // routes for courses

        router.get('/courses/',async (req:express.Request, res: express.Response)=>{

            try{
                await this.connection.course.findAll().then((response:Response)=>{
                    this.result = response;
                });
            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
            
        });


        router.get('/courses/:id',async (req: Request, res: Response)=>{

            try{
                await this.connection.course.findAll(
                    {
                        where:{
                            id: req.params.id
                        }
                    }
                ).then((response:Response)=>{
                    this.result = response;
                });
            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
            
        });

        router.get('/courses/:id/batches/',async (req: Request, res: Response)=>{

            try{

                await this.connection.course.findAll({
                    where: {
                        id: req.params.id
                    }
                    ,
                    include:[
                        {
                            model:this.connection.batch
                        }
                    ]
                }).then((response: Response)=>{
                    this.result = response;
                });

            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
            
        });

        router.get('/courses/:id/batches/:batchId',async (req: Request, res: Response)=>{

            try{

                await this.connection.course.findAll({
                    where: {
                        id: req.params.id
                    }
                    ,
                    include:[
                        {
                            model:this.connection.batch,
                            where:{id:req.params.batchId}
                        }
                    ]
                }).then((response: Response)=>{
                    this.result = response;
                });

            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
            
        });


        router.post('/courses/:id/batches/',async (req: Request, res: Response)=>{

            let valueToBeSent: boolean = true;

            try{

                await this.connection.batch.build({
                    name:req.body.name,
                    courseId: req.params.id
                })

            }catch(err){
                console.log(err.message);
                valueToBeSent = false;
            }

            res.send(valueToBeSent);
            
        });


        router.get('/courses/:id/batches/:batchId/lectures',async (req: Request, res: Response)=>{

            try{

                await this.connection.course.findAll({
                    where:{
                        id: req.params.id
                    },

                    include:[
                        {model: this.connection.batch, where:{id: req.params.batchId}, include:[ {model:this.connection.lecture}]},
                       
                    ]
                }).then((response: Response)=>{
                    this.result = response;
                })

            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
            
        });

        router.post('/courses/:id/batches/:batchId/lectures',async (req: Request, res: Response)=>{

            let valueToBeSent: boolean = true;

            try{

                await this.connection.lecture.build({
                    name:req.body.name,
                    batchId: req.params.batchId,
                    subjectId: req.body.subjectId,
                    teacherId: req.body.teacherId
                }).save();

            }catch(err){
                console.log(err.message);
                valueToBeSent = false;
            }

            res.send(valueToBeSent);
            
        });

        router.get('/courses/:id/batches/:batchId/students',async (req: Request, res: Response)=>{

            try{

                await this.connection.course.findAll({
                    where:{
                        id: req.params.id
                    },

                    include:[
                        {model:this.connection.batch, where:req.params.batchId,include:[{ model:this.connection.student}]},
                        
                    ]
                }).then((response: Response)=>{
                    this.result = response;
                })

            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
            
        });

        router.get('/courses/:id/batches/:batchId/lectures/:lectureId',async (req: Request, res: Response)=>{

            try{

                await this.connection.course.findAll({
                    where:{
                        id: req.params.id
                    },

                    include:[
                        {model: this.connection.batch, where:{id: req.params.batchId}, 
                        include:[{model:this.connection.lecture,where:{id:req.params.lectureId}}]}]
                }).then((response: Response)=>{
                    this.result = response;
                });

            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
            
        });

        router.post('/courses/',async (req: Request, res: Response)=>{

            try{

                await this.connection.course.build({
                    name: req.body.name,
                }).save();

            }catch(err){
                console.log(err.message);
                res.send(false);
            }

            res.send(true);
            
        });

        router.delete('/courses/:id', async (req: Request, res: Response)=>{
            try{

                await this.connection.course.destroy({
                    where:{
                        id: req.params.id
                    }
                });

            }catch(err){
                console.log(err.message);
                res.send(false);
            }

            res.send(true);
        });

        router.put('/courses/:id',  async (req: Request, res: Response)=>{
            try{

                await this.connection.course.update(
                    {name: req.body.name},
                    {returning: true, where: {id: req.params.id} }
                ).then((rowsUpdated: any)=>{
                    res.send(rowsUpdated);
                });

            }catch(err){
                console.log(err.message);
                res.send(false);
            }
        });

        ///// Routes for subjects

        router.get('/subjects',async (req: Request,res: Response)=>{
            try{

                await this.connection.subject.findAll().then(
                    (response: Response)=>{
                        this.result = response;
                    }
                );
            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
        });

        
        router.get('/subjects/:id',async (req: express.Request,res: express.Response)=>{
            try{

                await this.connection.subject.findAll({
                    where:{
                        id: req.params.id
                    }
                }).then(
                    (response: Response)=>{
                        this.result = response;
                    }
                );
            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
        });

        router.post('/subjects',async (req: express.Response, res: express.Response)=>{

            let value: boolean = true;

            try{
                await this.connection.subject.build({
                    name: req.body.name,
                    courseId: req.body.courseId
                }).save();

            }catch(err){
                console.log(err.message);
                value = false;
            }

            res.send(value);
        });

        router.put('/subjects/:id',  async (req: Request, res: Response)=>{
            try{

                await this.connection.subject.update(
                    {name: req.body.name},
                    {returning: true, where: {id: req.params.id} }
                ).then((rowsUpdated: any)=>{
                    res.send(rowsUpdated);
                });

            }catch(err){
                console.log(err.message);
            }
        });

        router.delete('/subjects/:id', async (req: Request, res: Response)=>{

            let valueToBeSent: boolean = true;
            try{

                await this.connection.subject.destroy({
                    where:{
                        id: req.params.id
                    }
                });

            }catch(err){
                console.log(err.message);
                valueToBeSent = false;
            }

            res.send(valueToBeSent);
        });

        router.get('/subjects/:id/teachers',async (req: express.Request,res: express.Response)=>{
            try{

                await this.connection.subject.findAll({
                    where:{
                        id: req.params.id
                    },
                    include:[
                        {
                            model:this.connection.teacher
                        }
                    ]
                }).then(
                    (response: Response)=>{
                        this.result = response;
                    }
                );
            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
        });


        /////////////////// Routes for teachers///////////////////

        router.get('/teachers',async (req: Request,res: Response)=>{

            try{

                await this.connection.teacher.findAll().then(
                    (response: Response)=>{
                        this.result = response;
                    }
                );
            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
        });

        
        router.get('/teachers/:id',async (req: express.Request,res: express.Response)=>{

            try{

                await this.connection.teacher.findAll({
                    where:{
                        id: req.params.id
                    }
                }).then(
                    (response: Response)=>{
                        this.result = response;
                    }
                );
            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
        });

        router.post('/teachers',async (req: express.Response, res: express.Response)=>{

            let value: boolean = true;
            try{
                await this.connection.teacher.build({
                    name: req.body.name,
                    subjectId: req.body.subjectId
                }).save();

            }catch(err){
                console.log(err.message);
                value = false;
            }

            res.send(value);
        });

        router.put('/teachers/:id',  async (req: Request, res: Response)=>{

            try{

                await this.connection.teacher.update(
                    {name: req.body.name},
                    {returning: true, where: {id: req.params.id} }
                ).then((rowsUpdated: any)=>{
                    res.send(rowsUpdated);
                });

            }catch(err){
                console.log(err.message);
            }
        });

        router.delete('/teachers/:id', async (req: Request, res: Response)=>{

            let valueToBeSent: boolean = true;
            try{

                await this.connection.teacher.destroy({
                    where:{
                        id: req.params.id
                    }
                });

            }catch(err){
                console.log(err.message);
                valueToBeSent = false;
            }

            res.send(valueToBeSent);
        });

        router.get('/teachers/:id/batches',async (req: express.Request,res: express.Response)=>{
            try{

                await this.connection.batch.findAll({
                    include:[
                        {
                            model:this.connection.lecture,
                            where:{
                                teacherId:req.params.id
                            } 
                        }
                    ]
                }).then(
                    (response: Response)=>{
                        this.result = response;
                    }
                );
            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
        });

        //////// Routes for students

        router.get('/students',async (req: Request,res: Response)=>{
            try{

                await this.connection.student.findAll().then(
                    (response: Response)=>{
                        this.result = response;
                    }
                );
            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
        });

        
        router.get('/students/:id',async (req: express.Request,res: express.Response)=>{
            try{

                await this.connection.student.findAll({
                    where:{
                        id: req.params.id
                    }
                }).then(
                    (response: Response)=>{
                        this.result = response;
                    }
                );
            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
        });

        router.post('/students',async (req: express.Response, res: express.Response)=>{

            let value: boolean = true;
            try{
                await this.connection.student.build({
                    name: req.body.name,
                }).save();

            }catch(err){
                console.log(err.message);
                value = false;
            }

            res.send(value);
        });

        router.put('/students/:id',  async (req: Request, res: Response)=>{
            try{

                await this.connection.student.update(
                    {name: req.body.name},
                    {returning: true, where: {id: req.params.id} }
                ).then((rowsUpdated: any)=>{
                    res.send(rowsUpdated);
                });

            }catch(err){
                console.log(err.message);
            }
        });

        router.delete('/students/:id', async (req: Request, res: Response)=>{

            let valueToBeSent: boolean = true;
            try{

                await this.connection.student.destroy({
                    where:{
                        id: req.params.id
                    }
                });

            }catch(err){
                console.log(err.message);
                valueToBeSent = false;
            }

            res.send(valueToBeSent);
        });

        router.get('/students/:id/batches',async (req: express.Request,res: express.Response)=>{
            try{

                await this.connection.student.findAll({
                    where:{
                        id: req.params.id
                    },
                    include:[
                        {
                            model:this.connection.batch
                        }
                    ]
                }).then(
                    (response: Response)=>{
                        this.result = response;
                    }
                );
            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
        });

        router.get('/students/:id/batches/:id',async (req: express.Request,res: express.Response)=>{
            try{

                await this.connection.student.findAll({
                    where:{
                        id: req.params.id
                    },
                    include:[
                        {
                            model:this.connection.batch
                        }
                    ]
                }).then(
                    (response: Response)=>{
                        this.result = response;
                    }
                );
            }catch(err){
                console.log(err.message);
            }

            res.send(this.result);
        });

        router.get('/',(req: express.Request, res: express.Response)=>{
            console.log(__dirname);
            res.sendFile(path.join(__dirname,'index.html'));
        });

        router.get('/info',(req: express.Request, res: express.Response)=>{
            console.log(__dirname);
            res.sendFile(path.join(__dirname,'info.html'));
        });

        this.express.use('/',router);
    }

}

export default new App().express;