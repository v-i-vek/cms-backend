const mongoose = require("mongoose");

const flatSchema = mongoose.Schema({
 
    flatNo:{
        type:String
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'AddUser'
    },
    site_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'siteMangement'
    }
  
});
const flatModel  = mongoose.model("flatDetails", flatSchema);

module.exports =  flatModel ;
