const mongoose = require("mongoose");

const siteManageSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  noOfFloor:{
    type:Number,
    //require:true
  },
  noOfFlatPerFloor:{
    type:String,
   // require:true
  },
  totalFlat:{
    type:String,
    //require:true
  },
  flatNo: [
    
  ]
  // sold:{
  //   type:String,
  //   //require
  // },


 
});

const siteMangementModel = mongoose.model("siteMangement",siteManageSchema);

module.exports = {siteMangementModel}
