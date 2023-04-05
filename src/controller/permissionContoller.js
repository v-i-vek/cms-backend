const PermissionModel = require("../models/permission");
//Get Method for all data
const perGet = async (req, res) => {
  try {
    const permissionGetData = await PermissionModel.find();
    res.status(201).send(permissionGetData);
  } catch (error) {
    res.status(401).send(error.message);
  }
};
//Get Method for single data
const perGetSingle = async (req, res) => {
  try {
    const _Id = req.params.id;

    const permissionGetDataSin = await PermissionModel.findById(_Id);
    console.log(permissionGetDataSin);
    res.status(201).send(permissionGetDataSin);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

//patch or update a permission
const perUpdate = async (req, res) => {
  try {
    const _Id = req.params.id;
    const permissionupdate = await PermissionModel.findByIdAndUpdate(
      _Id,
      req.body,
      { new: true }
    );
    console.log(permissionupdate);
    res.status(201).send(permissionupdate);
  } catch (error) {
    res.status(401).send(error.message);
  }
};
const perDelete = async (req, res) => {
  try {
    const _Id = req.params.id;
    const permissiondelete = await PermissionModel.findByIdAndDelete(
      _Id,
      req.body,
      { new: true }
    );
    console.log(permissiondelete);
    res.status(201).send(permissiondelete);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

// post Method
const perPost = async (req, res) => {
  try {
    const permissionPostData = await PermissionModel(req.body);
    const dataPostPer = permissionPostData.save();
    res.status(201).send(dataPostPer);
  } catch (error) {
    res.status(401).send(error.message);
  }
};
module.exports = { perGet, perPost, perGetSingle, perUpdate, perDelete };