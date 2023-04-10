const userModel = require("../models/registerUser");
const userGet = async (req, res) => {
  return await res.send("register");
};
const userPost = async (req, res) => {
  try {
    console.log("register");
   const userDetailSave = new userModel({
      firstName: req.body.firstName,
      email: req.body.email,
      password: req.body.password
    });
    console.log(userDetailSave);
    const token = await userDetailSave.generateAuthToken(); //Adding cookies
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 300000)
    });
    const result = await userDetailSave.save();
    return res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { userGet, userPost };