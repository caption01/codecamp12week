const express = require('express');

const staticJSONRoute = express.Router();

staticJSONRoute.get('/', (req, res)=>{
    let word = {
        text : "Hello World"
    };
    
    res.json(word)
})



module.exports = staticJSONRoute