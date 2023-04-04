const express = require('express')

const {addressGet,addressPost,addressPatch, addressDelete,addressGetAll} = require('../controller/address.user.controller')





const route = express.Router()

// this is to get the call the data
route.get('/address/:id',addressGet)

route.get('/address', addressGetAll)



// this is post the data of address in db
route.post('/address/',addressPost)



// this is for patch the data from the db
route.patch('/address/:id',addressPatch)


// this  is for deleteing the data from the db
route.delete('/address/:id',addressDelete)

module.exports = route

