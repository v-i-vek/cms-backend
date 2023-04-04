const express = require('express')

const {addressGet,addressPost,addressPatch, addressDelete,addressGetAll} = require('../controller/address.user.controller')

const Address_route = express.Router()


Address_route.get('/getOneAddress/:id',addressGet)
Address_route.get('/getAllAddress/', addressGetAll)
Address_route.post('/postAddress/',addressPost)
Address_route.patch('/updateAddress/:id',addressPatch)
Address_route.delete('/deleteAddress/:id',addressDelete)

module.exports =  Address_route

