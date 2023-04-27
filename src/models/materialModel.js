const mongoose = require('mongoose');
const QuantitySc = require("./QuantityModel");
const MaterialSchema = new mongoose.Schema({

  Material_name: {
    type: String,
    // require: true
  },
  Material_quantity: {
    type: Number,
    // require: true
  },
  Quantity_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "quantity_master",
  },

  site_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "siteMangement",
    // require:true
  },

  flat_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "flatModel",
  },
  Material_cost: {
    type: Number,
  },
  Material_status: {
    type: Boolean,
  },
});

const MaterialModel = new mongoose.model('material_master', MaterialSchema);
module.exports = MaterialModel;