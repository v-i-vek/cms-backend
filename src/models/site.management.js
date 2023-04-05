const mongoose = require("mongoose");

const siteManageSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  brandLogo: {
    type: String,
  },
});

const siteMangementModel = mongoose.model("siteMangement",siteManageSchema);

module.exports = {siteMangementModel}
