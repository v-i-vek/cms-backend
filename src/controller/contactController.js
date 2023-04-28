const ContactModel = require("../models/contactModel");

const contactGet = async (req, res) => {
  try {
    const contactGetData = await ContactModel.find();
    res.status(201).send(contactGetData);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

const contactUpdate = async (req, res) => {
  try {
    const _Id = req.params.id;
    const contactUpdateData = await ContactModel.findByIdAndUpdate(
      _Id,
      req.body,
      { new: true }
    );
    res.status(200).send(contactUpdateData);
  } catch (error) {
    res.status(401).send(error);
    console.log(error);
  }
};

const contactDelete = async (req, res) => {
  try {
    const _Id = req.params.id;
    const contactDeleteData = await ContactModel.findByIdAndDelete(_Id);
    res.status(201).send(contactDeleteData);
  } catch (error) {
    res.status(401).send(error);
    console.log(error);
  }
};

const contactPost = async (req, res) => {
  try {
    const contact = await ContactModel(req.body);
    const savedContact = await contact.save();
    res.status(201).send(savedContact);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  contactGet,
  contactUpdate,
  contactDelete,
  contactPost,
};
