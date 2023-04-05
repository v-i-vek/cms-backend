const express = require("express");
const mongoose = require("mongoose");

const serSchema = new mongoose.Schema({
    service_id : {
        type : Number,
        require : true,
        unique : true
    },
    service_name : {
        type :String,
        require : true,
        trim : true
    },
    
    service_desc : {
        type : String,
        require : true
    },
    service_customize :{
        type : String,
        require : true
    },
    status : {
        type : Boolean,
        require : true
    }
})
// we are creatin a collection
const ServiceManage = new mongoose.model("ServiceManage",serSchema)

module.exports = ServiceManage;