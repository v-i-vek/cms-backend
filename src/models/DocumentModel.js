const mongoose = require("mongoose");
const document_masterSchema = new mongoose.Schema({
  documentName: {
    type: String
  },
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "adduser",
  },
  documentpdf: {
    type:[Object],blackbox: true
  },
});

const documentMaster = new mongoose.model("documentMaster",document_masterSchema);
module.exports = documentMaster;
