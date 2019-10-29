const express = require('express');

const countFieldsRoute = express.Router();

countFieldsRoute.post('/', (req, res) => {
    let data = req.body
    let count = Object.keys(data).length

    res.json(`JSON File has ${count} key`)
})



module.exports = countFieldsRoute;


