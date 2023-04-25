const {postFlat ,getFlat}= require('../controller/flatController')

const express  = require('express')

const flatRoute = express.Router()

flatRoute.post('/postFlat',postFlat)
flatRoute.get('/getFlat',getFlat)



module.exports = flatRoute;