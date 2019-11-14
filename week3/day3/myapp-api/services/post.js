module.exports = (app, db) => {


    app.get('/post', (req, res) => {
        db.post.findAll()
            .then(result => res.json(result))
            .catch(err => {
                console.log(err)
                res.json("find post in database error")
            })
    })



    app.post('/post', (req, res) => {

        let data = req.body
        console.log(data)

        if(data.text){
            db.post.create({
                date: data.date,
                text: data.text
            })
                .then(result => res.status(201).json("success"))
                .catch(err => {
                    console.log(err)
                    res.json("error")
                })
        } else {
            res.json('data wrong')
        }
        

    })


}