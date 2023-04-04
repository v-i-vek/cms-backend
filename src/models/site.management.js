const mongoose = require('mongoose')


// Brand_logo,
// Name,
// Site_id,
// location



const site_mangement_schema = mongoose.Schema({

 
   
    name:{
        type:String,
        require:true
    },
    // site_id:{
    //     type:String,
    //     require:true
    // },
    location:{
        type:String,
        require:true
    },
     brand_logo:{ 
        type:String
    }
    
})

const site_mangement_Model = mongoose.model('site_mangement',site_mangement_schema)

module.exports = site_mangement_Model