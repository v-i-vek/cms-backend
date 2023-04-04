const mongoose = require('mongoose')


// Address_id
// Address,
// Country,
// City,state,
// zip-code


const address_schema = mongoose.Schema({

    // Address_id :{type:String,
    //              unique:true,
    // }
    Address:{type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    pin_code:{type:String,
        require:true}
})

 Address_model = mongoose.model('Address_master',address_schema)

module.exports = Address_model