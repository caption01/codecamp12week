const express = require('express');
const fetch = require('node-fetch');
const bodyParse = require('body-parser');

const app = express();
app.use(bodyParse.json)

let database = {};

 


app.get('/', (req, res) => {
    res.json("Hello world")
})



app.listen(3000, ()=>{
    console.log('server is running at 3000')
})