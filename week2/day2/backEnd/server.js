const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors')

const app = express();
const db = [];

app.use(cors())
app.use(bodyParse.json());

app.get('/', (req, res) => {
    res.status(200).json('connect working')
})

app.post('/', (req, res) => {
    let dataReq = req.body;
    db.push(dataReq)
    let data = {
        key: dataReq.key,
        text: dataReq.text,
        order: db.length
    }
    res.json(data)
})

app.delete('/', (req, res) => {
    let dataReq = req.body;
    let pointer = db.indexOf(dataReq);
    
    if(pointer !== -1){
        db.splice(pointer, 1)
        res.json("Success DELETE")
    } else {
        res.json("Data not found")
    }
})


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running at .. ${PORT}`)
})