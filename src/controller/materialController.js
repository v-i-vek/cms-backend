const MaterialModel = require("../models/materialModel");
//get all materials
const materialGet = async (req, res) => {
  try {
    const materialGetData = await MaterialModel.find().populate("site_id").populate("user_id");
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
    .populate(`Quantity_id`)
    .populate(`site_id`)
    // .populate(`flat_id`);
    res.status(201).send(materialGetDatasin);
  } catch (error) {
    res.status(401).send(error.message);
  }
};
// Update materials
const materialUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(">>>>>>>>>",id)
    const result = await MaterialModel.findById({ _id: id });
    console.log(">>>>>>>>",result)
    const update = await result.updateOne({
      Material_name : req.body.Material_name,
      Material_quantity: req.body.Material_quantity,
      //Quantity_id : req.body. Quantity_id,
     site_id: req.body.site_id,
      Material_cost: req.body.Material_cost,
      Material_status: req.body.Material_status
     
    });
    res.status(201).send(result);
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
    const materialPostData = MaterialModel(req.body);
    if (req.file) {
      materialPostData.Material_img = req.file.path;
    }
    materialPostData.Quantity_id = req.body.Quantity_id;
    materialPostData.flat_id = req.body.flat_id;
    materialPostData.site_id = req.body.site_id;
   await materialPostData.save().then(()=>{
    console.log("saved");
    res.status(201).send(materialPostData);
   })
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