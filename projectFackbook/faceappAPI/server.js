const express       =   require('express');
const mysql         =   require('mysql2');
const bodyParser   =   require('body-parser');
const db            =   require('./models');
const cors          =   require('cors');
const PORT          =   3000;

const app = express();

app.use(bodyParser.json());
app.use(cors())

db.sequelize.sync({force: true}).then(() => {

    app.listen(PORT, ()=>{
        console.log(`server is running at ${PORT}`)
    })
})