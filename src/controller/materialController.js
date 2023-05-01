const MaterialModel = require("../models/materialModel");
//get all materials
const materialGet = async (req, res) => {
  try {
    const materialGetData = await MaterialModel.find().populate('flat_id').populate('site_id').populate("user_id");
    res.status(201).send(materialGetData);
  } catch (error) {
    res.status(401).send(error.message);
  }
};
//get single materials
const materialGetSingle = async (req, res) => {
  try {
    const _Id = req.params.id;
    const materialGetDatasin = await MaterialModel.findById(_Id)
    .populate(`site_id`)
    .populate(`flat_id`)
    .populate('user_id')
    res.status(201).send(materialGetDatasin);
  } catch (error) {
    res.status(401).send(error.message);
  }
};
// Update materials
const materialUpdate = async (req, res) => {
  try {
    const _Id = req.params.id;
    const materialUpdateData = await MaterialModel.findByIdAndUpdate(
      _Id,
      req.body,
      { new: true }
    );
    res.status(201).send(materialUpdateData);
  } catch (error) {
    res.status(401).send(error.message);
  }
};
//delete materials the materials
const materialDelete = async (req, res) => {
  try {
    const _Id = req.params.id;
    const materialDeleteData = await MaterialModel.findByIdAndDelete(
      _Id,
      req.body,
      { new: true }
    );
    res.status(201).send(materialDeleteData);
  } catch (error) {
    res.status(401).send(error.message);
  }
};
//insert material
const materialPost = async (req, res) => {
  try {
    const materialPostData = new MaterialModel(req.body);
    if (req.file) {
      materialPostData.Material_img = req.file.path;
    }
    materialPostData.Quantity_id = req.body.Quantity_id;
    materialPostData.flat_id = req.body.flat_id;
    materialPostData.site_id = req.body.site_id;
    console.log("res",materialPostData);
    await materialPostData.save();
    res.status(201).send(materialPostData);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = {
  materialGet,
  materialGetSingle,
  materialUpdate,
  materialDelete,
  materialPost
};