const express = require('express');

const plusRoute = express.Router();

plusRoute.get('/', (req, res)=>{
    let firstNum = Number(req.query.a);
    let SecondNum = Number(req.query.b);
    console.log(`FirstNum recieve from GET is ....${firstNum}`)
    console.log(`SecondNum recieve from GET is ....${SecondNum}`)
    res.json(`${firstNum+SecondNum}`)
})

plusRoute.get('/:first/:second', (req, res) => {
    let firstNum = Number(req.params.first);
    let SecondNum = Number(req.params.second);

    res.send(`result is ...... ${firstNum + SecondNum}`)
})


module.exports = plusRoute