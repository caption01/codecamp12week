const express = require('express');
const bodyParse = require('body-parser');

const staticRoute = require('./route/staticRoute.js')
const staticJSONRoute = require('./route/staticJSONRoute.js')
const echoRoute = require('./route/echoRoute.js')
const plusRoute = require('./route/plusRoute.js')
const plusByJSONRoute = require('./route/plusByJSONRoute.js')
const checkEvenNumberRoute = require('./route/checkEvenNumberRoute.js')
const numberRoute = require('./route/numberRoute.js')


const app = express();

app.use(express.static('./public'))
app.use(bodyParse.urlencoded({
    extended: true
}))
app.use(bodyParse.json())

app.use('/static', staticRoute);
app.use('/staticJSON', staticJSONRoute);
app.use('/echo', echoRoute);
app.use('/plus', plusRoute);
app.use('/plusByJSON', plusByJSONRoute);
app.use('/checkEvenNumber', checkEvenNumberRoute);
app.use('/number', numberRoute);




app.listen(3000, ()=>{
    console.log("server is running PORT 3000")
})