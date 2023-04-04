const document_master = require("../models/DocumentModel");
const mongoose = require("mongoose");

//Getting the douments
const docsGet = async (req, res) => {
  try {
    const docs = await document_master.find();
    res.send(docs);
  } catch (e) {
    res.send(e);
  }
};

//this is for posting the details in mongodb by using post method
const docsPost = async (req, res) => {
  try {
    const docs = await new document_master(req.body);
    if (req.file) {
      docs.image = req.file.path;
    }
    docs.save().then(() => {
      res.status(201).send(docs);
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

//this is for deleting docs
const docsDelete = async (req, res) => {
  try {
    const Deletedocs = await document_master.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send("succesfull");
    }
    res.send(Deletedocs);
  } catch (e) {
    res.status(500).send(e);
  }
};

//this is for updating document
const docsPatch = async (req, res) => {
  try {
    const _id = req.params.id;
    const Updatedocs = await document_master.findByIdAndUpdate(_id, req.body);
    res.send(Updatedocs);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = { 
  docsGet,
  docsPost, 
  docsDelete, 
  docsPatch 
};
