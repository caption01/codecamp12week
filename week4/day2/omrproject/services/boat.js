module.exports = (app, db) => {

    app.get('/boat', (req, res) => {
        db.boat.findAll()
            .then(result => res.status(200).json(result))
    })

    app.post('/boat', (req,res) => {
        let data = req.body;
        let boatName = data.name;
        let boatColor = data.color;

        db.boat.create({
            name: boatName,
            color: boatColor
        })
            .then(result => res.status(201).json(result))
            .catch(err => {
                console.log(err)
                res.status(404).json(`Error: ${err.message}`)
            })

    })

    app.delete('/boat', (req, res)=> {
        let data = req.body;

        db.boat.destroy({
            where: {
                id: data.id
            }
        })
            .then(result => res.status(201).json('delete success'))
            .catch(err => res.status(404).json('fail to delete boat'))

    })

    app.put('/boat', (req, res)=>{
        let data = req.body;

        db.boat.update({
            name: data.name,
            color: data.color
        }, {
            where: {
                id: data.id
            }
        })
            .then(result => res.status(201).json(result))
            .catch(err =>res.status(404).json(`Error: ${err.message}`))
    })

    

}