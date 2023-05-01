const mongoose = require("mongoose");
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

  unit:{
    type:String
  },

  site_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"siteMangement"
},
  
  siteName: {
    type: String,
    required: true,
  },

  flat_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "flatDetails",
  },

  flatNo: {
    type: String,
    required: true,
  },

  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "adduser",
  },
  Material_cost: {
    type: Number,
  },
  Material_status: {
    type: Boolean,
  },
  Material_img: {
    type: String,
  },
});


const MaterialModel = new mongoose.model('material_master', MaterialSchema);
module.exports = MaterialModel;
