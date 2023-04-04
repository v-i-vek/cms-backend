const {siteMangementModel} = require("../models/site.management");

// this is the get Method for reading the data
const siteGet = async (req, res) => {
  const result = await siteMangementModel.findById(req.params.id);
  res.status(201).send(result)
};
// getting all the data
const siteAllGet = async (req, res) => {
  try {
    const result = await siteMangementModel.find();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(401).send(error);
  }
};
// this is for update  the site using the address id
const sitePatch = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await siteMangementModel.findById({ _id: id });
    const update = await result.updateOne({
      name: req.body.name,
      siteId: req.body.id,
      location: req.body.location,
    });
    res.status(201).send("successful");
  } catch (error) {
    res.status(401).send(error);
  }
};
// this method is to delete the data from the db
const siteDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteAddress = await siteMangementModel.findByIdAndDelete({ _id: id,});
    res.status(201).send(deleteAddress));
  } catch (error) {
   res.status(401).send(error.message)
  }
};
// this is for posting the data in db through post method
const sitePost = async (req, res) => {
  try {
    const siteManage = new siteMangementModel({
      name: req.body.name,
      category: req.body.category,
      location: req.body.location,
    });
    if (req.file) {
      siteManage.brandLogo = req.file.path; // this is for checking the valid name and giving the path
    }
    const saved = await siteManage.save();
    return res.status(200).send(saved);
  } catch (error) {
   res.status(401).send(error.message)
  }
};

module.exports = { sitePost, siteGet, sitePatch, siteDelete, siteAllGet };
