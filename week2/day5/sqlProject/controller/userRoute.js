const express = require('express');
const userRoute = express.Router();
const userdataBase = require('../model/userDatabase.js')

userRoute.get('/', (req,res)=>{
    res.status(200).json(userdataBase)
})


module.exports = userRoute;