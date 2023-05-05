const mongoose = require("mongoose");

const siteManageSchema = mongoose.Schema({
  siteName: {
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
  flatDetails: [
    {
      flatNo: {
        type: String,
        // require: true
      },
      userId:{
        type:String
      },
      isBought:{
        type:Boolean
      }
    }
  ],
  description:{
    type:String
  },
  status:{
    type:String
  },
  brandLogo:{
    type:String
  }
  // sold:{
  //   type:String,
  //   //require
  // },


 
});

const siteMangementModel = mongoose.model("siteMangement",siteManageSchema);

module.exports = {siteMangementModel}
