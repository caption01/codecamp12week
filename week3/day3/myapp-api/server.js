const express   =   require('express');
const mysql     =   require('mysql2');
const bodyParser =  require('body-parser');
const db        =   require('./models');
const User      =   require('./services/user.js')

const app       =   express();
app.use(bodyParser.json())


db.sequelize.sync({force:true}).then(()=>{

    User(app, db)

    app.listen(3100, ()=>{
        console.log("servering running at 3100...")
    })
})