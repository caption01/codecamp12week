const express = require('express');

const learnRoute = express.Router();

learnRoute.get('/', (req, res) => {

    let data = req.body.name
    console.log(data)

    res.send("Hello Earn and nut")
})

learnRoute.post('/signin/:number', (req, res)=>{
    let data = req.body
    let number = req.params.number
    console.log(data)
    console.log(number)

    res.send("You are goning signin")
})

module.exports = learnRoute;