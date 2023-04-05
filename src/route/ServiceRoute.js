const express = require ("express");
const ServiceRoute = express.Router();
const SerController = require('../controller/ServiceController')
ServiceRoute.post('/api/service',SerController.createSer);
ServiceRoute.get('/api/service/:id', SerController.getSer);
ServiceRoute.patch('/api/service/:id', SerController.updateSer);
ServiceRoute.delete('/api/service/:id',SerController.deleteSer);
module.exports = ServiceRoute
