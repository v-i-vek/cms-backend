const {assignFlat} = require('../controller/AssignFlat')
const express = require('express')
const flatRoute = express.Router()

flatRoute.put('/addFlat/:id',assignFlat)


module.exports = flatRoute
