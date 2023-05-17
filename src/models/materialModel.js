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

  site_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"siteMangement"
},
   unit:{
    type:String
  },
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "adduser",
  },
  Material_cost: {
    type: Number,
  },
  Material_status: {
    type: String,
    enum: ["tick", "cancel", "in progress"],
    default: "tick",
  },
  
 image: {
    type: String,
  },
});


const MaterialModel = new mongoose.model('material_master', MaterialSchema);
module.exports = MaterialModel;
