const role_master = require("../models/rolemodel");
const mongoose = require("mongoose");

//for Role post 
const rolePost = async (req, res) => {
  console.log(req.body)
  const role = await new role_master(req.body)
 role.save().then(()=>{
      res.status(201).send(role)
 }).catch((err) =>{
     res.status(400).send(err);
  })
}

// getting id of users
const UserByrole = async (req, res) => {
  try {
    const roleData = await role_master
      .find({user_id: req.params.id}).populate(`user_id`);
    console.log(roleData);
    // roleData.save();
    res.send(roleData);
  } catch (e) {
    res.send(e);
  }
};

//delete roles
const roleDelete = async (req, res) => {
  try {
    const Deleterole = await role_master.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send("succesfull");
    }
    res.send(Deleterole);
  } catch (e) {
    res.status(500).send(e);
  }
};

//updating role 
const rolePatch = async (req, res) => {
  try {
    const _id = req.params.id;
    const Updaterole = await role_master.findByIdAndUpdate(_id, req.body, { new: true } );
    res.send(Updaterole);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = { rolePost, UserByrole , roleDelete , rolePatch};
