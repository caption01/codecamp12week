module.exports = (app, db) => {

    app.get('/boats', (req, res) => {
        db.boat.findAll()
            .then(result => res.status(200).json(result))
    })

    app.post('/boats', (req,res) => {
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
                res.status(404).json("fail from post boat req.")
            })

    })

}