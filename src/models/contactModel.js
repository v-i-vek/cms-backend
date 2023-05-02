const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema({
  contactname: {
    type: String,
    // require: true
  },
  contactnumber: {
    type: String,
    // require: true
  },
  contactmessage: {
    type: String,
  },
  contactemail: {
    type: String,
  },
});

const ContactModel = new mongoose.model('ContactModel', ContactSchema);
module.exports = ContactModel;