const express = require('express');
const bodyParse = require('body-parser');
const mysql = require('mysql');

const app = express()

app.use(bodyParse.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'boatrental'
})

app.get('/boats', (req,res) => {
    let query = "SELECT * FROM boats"
    db.query(query, (err, result) => {
        res.json(result)
    })
})

app.get('/addboat', (req,res)=>{
    let query = `INSERT INTO boats(bid, bname, color) 
    VALUES ("${req.query.bid}","${req.query.bname}", "${req.query.color}")`
    db.query(query, (err, result)=>{
        if(err){
            console.log(err)
        } else {
            res.json('Success') 
        }
    })
})

app.get('/deleteboatbyid', (req,res) => {
    let query = `DELETE FROM boats WHERE bid="${req.query.deleteboatid}"`
    db.query(query, (err, result) => {
        if(err){
            console.log(err)
        } else {
            res.json('Delete Success')
        }
    })
})

app.get('/updateboat', (req,res)=>{
    let query = `UPDATE boats SET bname="${req.query.bname}" ,color="${req.query.color}" 
    WHERE bid="${req.query.bid}"`
    db.query(query, (err, result) => {
        if(err){
            console.log(err)
        } else {
            res.json("Update Success")
        }
    })
})


app.post('/addboat', (req,res)=>{
    let query = `INSERT INTO boats(bid, bname, color) 
    VALUES ("${req.body.bid}","${req.body.bname}", "${req.body.color}")`
    db.query(query, (err, result)=>{
        if(err){
            console.log(err)
        } else {
            res.json('Success') 
        }
    })
})


app.listen(3000, ()=>{
    console.log("server is running 3000")
})



