const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
 
  address: { type: String,
    // require: true 
  },
  country: {
    type: String,
    //require: true,
  },
  city: {
    type: String,
   // require: true,
  },
  state: {
    type: String,
    //require: true,
  },
  pin_code: { type: String,
    // require: true
   },
});
addressModel  = mongoose.model("AddressMaster", addressSchema);

module.exports = { addressModel };
