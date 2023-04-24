const userModel = require("../models/registerUser");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const userLoginGet = async (req, res) => {
  const getdata = await userModel.find();
  res.status(201).send(getdata);
};
const userafterLoginGet = (req, res) => {
  // console.log(`this is the cookiew ${req.cookies.jwt}`);
  res.render("secret");
};

const userLoginPost = async (req, res) => {
  try {
     
    const email = req.body.email;
    const password = req.body.password;
    console.log('this is the cookiew ');
    const dbmail = await userModel.findOne({ email: email });
    //console.log(dbmail);
    // bcrypt hash is checked in the database using the compare
    const isMatch = await bcrypt.compare(password, dbmail.password);
    console.log(isMatch)
    //generating tokens

    const token = await dbmail.generateAuthToken();
    console.log("token>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", token);
    // adding cookies
  


    console.log('working1 ')


    let data;
    if (isMatch) {
      const user = jwt.sign({email:email},token)
      console.log("  USERS :-    "+user);
      data = {dbmail};
      data.user = user;
     console.log(data)
      return res.status(201).send(data);
    
    } else {
      return res.send("invalid login details");
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};
module.exports = { userLoginGet, userLoginPost, userafterLoginGet };
