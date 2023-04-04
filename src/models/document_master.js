const mongoose = require("mongoose");
// const validator = require('validator');

const document_masterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },

  user_id: {
    type: Number,
    requird: true,
    // unique:[true, "user_id already present"],
    // validate(value){
    // if(!validator.isuserid(value)){
    //        throw new Error("invalid")
    //     }
    // }
  },

  type: {
    type: String,
    required: true,
    unique: true,
  },

  status: {
    type: Boolean,
    required: true,
  },

  image: {
    type: String,
  },
});

const document_master = new mongoose.model(
  "document_master",
  document_masterSchema
);
module.exports = document_master;
