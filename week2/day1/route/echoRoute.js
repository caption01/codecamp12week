const express = require('express');

const echoRoute = express.Router();

echoRoute.get('/', (req, res)=>{
    let data = req.query.text;
    console.log(`data recieve from GET is ....${data}`)
    res.json(data)
})



module.exports = echoRoute