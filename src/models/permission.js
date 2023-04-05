const mongoose = require("mongoose");
const permissionSchema = new mongoose.Schema({
  permission_name: {
    type: String,
    required: true,
    maxlength: 20
  },
  permission_status: {
    type: String,
    required: true
  }
});
const PermissionModel = new mongoose.model(
  "permission_master",
  permissionSchema
);
module.exports = PermissionModel;
