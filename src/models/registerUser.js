const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  email: {
    type: String,
     require: true,
     unique: true
  },
  password: {
    type: String,
    // require: true
  },
  tokens: [
    {
      token: {
        type: String,
        // require: true
      }
    }
  ]
});

// userSchema.methods.generateAuthToken = async function() {
//   try {
//     secret_key = "mynameiskamleshdhelloistheworldisfirstprintedinprogramwhen";
//     //console.log(this._id);
//     const token = jwt.sign({ _id: this._id.toString() }, secret_key);
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     console.log(token);
//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// };
// userSchema.pre("save", async function(next) {
//   if (this.isModified("password")) {
//     console.log(this.password);
//     this.password = await bcrypt.hash(this.password, 10);
//     console.log(this.password);
//   }
//   next();
// });
const userModel = mongoose.model("AddUser", userSchema);
module.exports = userModel;
