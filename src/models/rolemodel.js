const mongoose = require("mongoose");
const user_master = require("./usermodel");
const role_masterSchema = new mongoose.Schema({
  role: {
    type: String,

    minlength: 2,
  },

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_master",
  },
});

const role_master = new mongoose.model("role_master", role_masterSchema);
module.exports = role_master;
