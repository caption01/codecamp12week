const listGetHandle = (req, res, list) => {
    res.json(list)
}

const listPostHandle = (req, res, list) => {
    list.push(req.body.data)
    res.json(list)
}

module.exports = {
    listGetHandle: listGetHandle,
    listPostHandle: listPostHandle
}