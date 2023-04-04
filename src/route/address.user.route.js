const express = require('express')

const {addressGet,addressPost,addressPatch, addressDelete,addressGetAll} = require('../controller/address.user.controller')

const addressRoute = express.Router()


addressRoute.get('/getOneAddress/:id',addressGet)
addressRoute.get('/getAllAddress/', addressGetAll)
addressRoute.post('/postAddress/',addressPost)
addressRoute.patch('/updateAddress/:id',addressPatch)
addressRoute.delete('/deleteAddress/:id',addressDelete)

module.exports =  {addressRoute}

