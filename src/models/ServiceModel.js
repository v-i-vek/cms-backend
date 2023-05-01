const express = require("express");
const mongoose = require("mongoose");

const serSchema = new mongoose.Schema({
    name : {
        type :String,
    },
    
    description : {
        type : String,
     
    },
    customize :{
        type : String,
        
    },
    site_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'siteMangement'
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "adduser"
    },
    serviceimage: {
        type: String,
    }
    
})
// we are creatin a collection
const ServiceManage = new mongoose.model("ServiceManage",serSchema)

module.exports = ServiceManage;