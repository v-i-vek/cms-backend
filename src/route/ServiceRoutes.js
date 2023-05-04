const express = require ("express");
const router = express.Router();
const SerController = require("../controller/ServiceController")
const serviceUploads = require("../middleware/serviceupload")
// router.post('/services',SerController.createSer);
router.post('/services',serviceUploads.single('serviceimage'),SerController.createSer)
router.get('/services/:id', SerController.getSer);
router.patch('/services/:id',serviceUploads.single('serviceimage'), SerController.updateSer);
router.delete('/services/:id',SerController.deleteSer);
router.get('/service' , SerController.getAll)


module.exports = router;