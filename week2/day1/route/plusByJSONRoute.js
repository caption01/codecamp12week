const express = require('express');

const plusByJSONRoute = express.Router();

plusByJSONRoute.get('/', (req, res)=>{
    let data = req.query.jsonText
    let dataConvert =  JSON.parse(data)
    
    res.send(`result is .... ${dataConvert.a + dataConvert.b} `)
})



module.exports = plusByJSONRoute