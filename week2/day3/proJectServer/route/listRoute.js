const express = require('express')
const listModel = require('../model/listModel.js');
const listHandle = require('../controller/listHandle.js')

const router = express.Router()

const list = listModel

router.get('/', (req,res) => listHandle.listGetHandle(req, res, list))

router.post('/', (req, res) => listHandle.listPostHandle(req, res, list))


module.exports = router
