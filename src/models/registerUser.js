const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  role:{
    type:String,
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

  firstName: {
    type: String,
    // minlength: 2,
    // unique: true,
  },

  lastName: {
    type: String,
    //minlength: 2,
  },



  mobileNo: {
    String: Number,

    //minlength: 10,
  },

  gender: {
    type: String,
  },

  image: {
    type: String,
  },
  address: {
    type: String,
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
  pinCode: {
    type: String,
    // require: true
  },
  docName: {
    type: String,
    // required: true,
    //minlength: 2,
  },

  docType: {
    type: String,
    // required: true,
    // unique: true,
  },

  // status: {
  //   type: Boolean,
  //   required: true,
  // },

  docFile: {
    type: String
  },



  tokens: [
    {
      token: {
        type: String,
        // require: true
      }
    }
  ],
  flatUserDetails: [
    {
      flatNo: {
        type: String,
        // require: true
      },
      siteName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'siteMangement'
    },
      category: {
        type: String
      },
      location: {
        type: String
      }
    }
  ]
});

userSchema.methods.generateAuthToken = async function() {
  try {
    secret_key = "mynameiskamleshdhelloistheworldisfirstprintedinprogramwhen";
    //console.log(this._id);
    const token = jwt.sign({ _id: this._id.toString() }, secret_key);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    console.log(token);
    return token;
  } catch (error) {
    console.log(error);
  }
};
// userSchema.pre("save", async function(next) {
//   if (this.isModified("password")) {
//     console.log(this.password);
//     this.password = await bcrypt.hash(this.password, 10);
//     console.log(this.password);
//   }
//   next();
// });
const userModel = mongoose.model("adduser", userSchema);
module.exports = userModel;
