var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('dotenv').config({path:'./config/config.env'});
const database=require('./database/db.js');
const authRouter=require('./authentication/authRoute.js')
const postRouter=require('./Post/postRoute')



app.use(bodyParser.json());

app.use('/auth',authRouter)
app.use('/post',postRouter)

database.connectToDatabase().then(response =>{
 
    console.log('database connect');
    app.listen(3000, 'localhost', function run() {
        console.log('App is running 3000 port');
    });
}).catch(err =>{
    console.log(err);
});