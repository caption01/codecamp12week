module.exports = (app, db) => {

    app.get('/sailor', (req, res) => {
        db.sailor.findAll()
            .then(result => res.status(200).json(result))
    })

    app.post('/sailor', (req,res) => {
        let data = req.body;

        db.sailor.create({
            name: data.name,
            rating: data.rating,
            age: data.age
        })
            .then(result => res.status(201).json(result))
            .catch(err => {
                console.log(err)
                res.status(404).json("fail from post sailor req.")
            })

    })

    app.delete('/sailor', (req, res)=> {
        let data = req.body;

        db.sailor.destroy({
            where: {
                id: data.id
            }
        })
            .then(result => res.status(201).json('delete success'))
            .catch(err => res.status(404).json('fail to delete sailor'))

    })

    app.put('/sailor', (req, res)=>{
        let data = req.body;

        db.sailor.update({
            name: data.name,
            rating: data.color,
            age: data.age
        }, {
            where: {
                id: data.id
            }
        })
            .then(result => res.status(201).json(result))
            .catch(err =>res.status(404).json('fail to update sailor'))
    })

}