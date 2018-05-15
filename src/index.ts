import app from './app';
import express from 'express';
let cors = require('cors');

// var corsOptions = {
//     origin: 'http://localhost:4200',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname));
app.listen(port,()=>{
    console.log('Listening at port : '+ port);
});