const user_master = require("../models/usermodel");
const mongoose = require("mongoose");

// new user
const userPost = async (req, res) => {
  try {
    const user = await user_master(req.body);
    if (req.file) {
      user.image = req.file.path;
    }
    const dataPostuser = user.save();
    res.status(201).send(dataPostuser);
  } catch (e) {
    res.status(500).send(e);
  }
};

//delete user
const userDelete = async (req, res) => {
  try {
    const Deleteuser = await user_master.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send("successfull");
    }
    res.send(Deleteuser);
  } catch (e) {
    res.status(500).send(e);
  }
};

//updating user
const userPatch = async (req, res) => {
  try {
    const _id = req.params.id;
    const Updateuser = await user_master.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(Updateuser);
  } catch (e) {
    res.status(500).send("e");
  }
};

//getting user
const getAlluser = async (req, res) => {
  console.log(req.params);
  try {
    const roleData = await user_master.find();
    // .populate('user_id');
    console.log(roleData);
    // roleData.save();
    res.send(roleData);
  } catch (e) {
    res.send(e);
  }
};

module.exports = { userPost, getAlluser, userDelete, userPatch };
