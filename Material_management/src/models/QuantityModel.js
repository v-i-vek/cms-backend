const mongoose = require('mongoose');
const QuantitySchema= new mongoose.Schema({

quantity_unit:{
 type:String,
 require:true
},
quantity_cost:{
    type:Number,
    require:true
}

})
const QuantitySc= new mongoose.model('quantity_master',QuantitySchema);
module.exports=QuantitySc;