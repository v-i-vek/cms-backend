const mongoose = require("mongoose");
const user_masterSchema = new mongoose.Schema({
  Password: {
    type: Number,
    unique: true,
  },

  First_name: {
    type: String,
    minlength: 2,
    unique: true,
  },

  Last_name: {
    type: String,
    minlength: 2,
  },

  Email_id: {
    type: String,
    unique: true,
  },

  Mobile_no: {
    type: Number,
    minlength: 10,
  },

  Gender: {
    type: String,
  },

  image: {
    type: String,
  },
});

const user_master = new mongoose.model("user_master", user_masterSchema);
module.exports = user_master;
