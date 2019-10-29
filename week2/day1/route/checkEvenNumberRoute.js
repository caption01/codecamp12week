const express = require('express');

const checkEvenNumberRoute = express.Router();

checkEvenNumberRoute.get('/:number', (req, res)=>{
   let number = req.params.number;
   if(number % 2 === 0){
       res.status(200).json('this is even')
   }else{
       res.status(400).json('number is odd')
   }
})


module.exports = checkEvenNumberRoute