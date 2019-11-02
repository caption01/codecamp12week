const express = require('express')
const bodyParser = require('body-parser')
const listRoute = require('./route/listRoute.js')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.use('/list', listRoute)


app.listen(3000, ()=>{
    console.log("server is running PORT 3000")
})