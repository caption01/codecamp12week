const express       =   require('express');
const bodyParser    =   require('body-parser');
const fetch         =   require('node-fetch');
const cors          =   require('cors')
const PORT          =   3000;

const app = express();

const db = {
    todo: [],
    complete: []
}


app.use(bodyParser.json());
app.use(cors())


app.post('/', (req, res) => {
    let item = req.body
    if(item.status === 'todo'){
        db.todo.push(item)
        res.json(item)
    }else if(item.status === 'complete'){
        db.complete.push(item)
        res.json(item)
    } else {
        console.log('adding item error')
    }
})





app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})
