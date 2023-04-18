const express = require ("express");
const ServiceRoute = express.Router();
const SerController = require('../controller/ServiceController')
ServiceRoute.post('/service',SerController.createSer);
ServiceRoute.get('/service',SerController.getAll)
ServiceRoute.get('/service/:id', SerController.getSer);
ServiceRoute.patch('/service/:id', SerController.updateSer);
ServiceRoute.delete('/service/:id',SerController.deleteSer);
module.exports = ServiceRoute
