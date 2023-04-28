const express = require ("express");
const ServiceRoute = express.Router();
const SerController = require('../controller/ServiceController')
const upload = require('../middleware/serviceupload')


ServiceRoute.post('/services',upload.single('serviceimage'),SerController.createSer)
ServiceRoute.get('/services/:id', SerController.getSer);
ServiceRoute.patch('/services/:id', SerController.updateSer);
ServiceRoute.delete('/services/:id',SerController.deleteSer);
ServiceRoute.get('/service' , SerController.getAll)

module.exports = ServiceRoute;