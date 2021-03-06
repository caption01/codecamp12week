const express = require('express');
const mysql = require('mysql')
const bodyParse = require('body-parser');
const userRoute = require('./controller/userRoute.js')

const app = express();

app.use(bodyParse.json());

const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: 'user'
})

con.connect(err=>{
    if(err){
        console.log(err)
    }else{
        console.log('connected to SQL-database')
        con.query("SELECT * FROM user WHERE name = 'andrel'", (err, result, fields)=>{
            if(err){
                console.log(err)
            } else {
                console.log(result)
            }
        })
    }
})

app.use('/user', userRoute)

app.listen(3000, ()=>{
    console.log('server sql is running at 3000')
})