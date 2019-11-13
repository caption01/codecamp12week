const express   =   require('express');
const mysql     =   require('mysql2');
const bodyParser =  require('body-parser');
const db        =   require('./models');
const boatService = require('./services/boat.js')
const sailorService = require('./services/sailor.js')

const app       =   express();
app.use(bodyParser.json())



db.sequelize.sync({force:false}).then(()=>{

    boatService(app, db);
    sailorService(app, db);


    app.listen(3000, ()=>{
        console.log("servering running at 3000...")
    })
})