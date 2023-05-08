const mongoose = require('mongoose');

const serviceDetailSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  serviceCost: {
    type: Number,
    required: true,
  },
  serviceDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
  
  },
  description: {
    type: String,

  },
  customize: {
    type: String,
  
  },
  site_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'siteMangement',

  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'adduser',
 
  },
  serviceimage: {
    type: String,

  },
  serviceDetails: [serviceDetailSchema],
});

const ServiceManage = mongoose.model('ServiceManage', serviceSchema);

module.exports = ServiceManage;
