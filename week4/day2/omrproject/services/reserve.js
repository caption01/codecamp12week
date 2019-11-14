module.exports = (app, db) => {

    app.get('/reserve', (req, res) => {
        db.reserve.findAll()
            .then(result => res.json(result))
            .catch(err => res.json(err))
    })

    app.post('/reserve', async (req, res) => {
        let boatId = req.body.boatId;
        let sailorId = req.body.sailorId;
        let day = req.body.day

        try {
            let boat    = await db.boat.findByPk(boatId)
            let sailor  = await db.sailor.findByPk(sailorId)

            let result  = await boat.addSailor(sailor, { through: { day: day } })
            // let result = sailor.addBoat(boat, { through: { day: day } })

            res.status(201).json(result)
        }
        catch (err) {
            res.status(400).json(`Error: ${err.message}`)
        }

    })

}