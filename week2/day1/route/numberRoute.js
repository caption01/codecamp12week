const express = require('express');

const numberRoute = express.Router();

const dataBase = [];

numberRoute.post('/:number', (req, res)=>{
    let data = Number(req.params.number);
    dataBase.push(data);

    res.json(dataBase)
})

numberRoute.delete('/:number', (req, res)=>{
    let data = Number(req.params.number)
    let pointer = dataBase.indexOf(data)
    dataBase.splice(pointer, 1)

    res.json(dataBase)
})

numberRoute.put('/:number/:edit', (req, res)=>{
    let data = Number(req.params.number)
    let edit = Number(req.params.edit)
    let pointer = dataBase.indexOf(data)
    dataBase[pointer] = edit

    res.json(dataBase)
})


module.exports = numberRoute;


