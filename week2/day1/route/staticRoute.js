const express = require('express');

const staticRoute = express.Router();

staticRoute.get('/', (req, res)=>{
    res.send("hello world")
})



module.exports = staticRoute