const mongoose = require('mongoose');
const QuantitySc = require("./QuantityModel");
const MaterialSchema= new mongoose.Schema({

Material_name:{
 type:String,
 require:true
},
Material_quantity:{
    type:Number,
    require:true
},Quantity_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"quantity_master",
    require:true
},
Matrial_cost:{
    type:Number,
    require:true
},
Matrial_status:{
    type:Boolean,
    require:true
},
Material_img:{
    type:String,
    require:true
}
})
const MaterialModel= new mongoose.model('material_master',MaterialSchema);
module.exports=MaterialModel;