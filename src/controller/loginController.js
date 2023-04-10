const userModel = require("../models/registerUser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const userLoginGet = async (req, res) => {
  const getdata = await userModel.find();
  res.status(201).send(getdata);
};
const userafterLoginGet = (req, res) => {
  console.log(`this is the cookiew ${req.cookies.jwt}`);
  res.render("secret");
};

const userLoginPost = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const dbmail = await userModel.findOne({ email: email });
    // bcrypt hash is checked in the database using the compare
    const isMatch = bcrypt.compare(password, dbmail.password);
    //generating tokens
    const token = await dbmail.generateAuthToken();
    console.log("token", token);
    // adding cookies
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 30000)
    });
    if (isMatch) {
      return res.status(201).send({ message: "successful" });
    } else {
      return res.send("invalid login details");
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};
module.exports = { userLoginGet, userLoginPost, userafterLoginGet };