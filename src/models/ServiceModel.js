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
    serviceimage: {
        type: String,
    }
    
})
// we are creatin a collection
const ServiceManage = new mongoose.model("ServiceManage",serSchema)

module.exports = ServiceManage;