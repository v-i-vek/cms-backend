const express = require ("express");
const router = express.Router();
const SerController = require('../controllers/ServiceController');
const upload = require('../middleware/upload')

// router.post('/services',SerController.createSer);
router.post('/services',upload.single('serviceimage'),SerController.createSer)
router.get('/services/:id', SerController.getSer);
router.patch('/services/:id', SerController.updateSer);
router.delete('/services/:id',SerController.deleteSer);
router.get('/service' , SerController.getAll)

module.exports = router;