const documentModel = require("../models/DocumentModel");
const mongoose = require("mongoose");

const docsGet = async (req, res) => {
  try {
    id=req.params.id
    const docs = await documentModel.find({user_id:id});
    res.send(docs);
  } catch (e) {
    res.send(e);
  }
};

//this is for posting the details in mongodb by using post method
const docsPost = async (req, res) => {
  try {
    console.log("Posting")
    data=req.body;
    // const id = req.params.id;
    //console.log(">>>>>>>",req.files[0].path)
    let docarray=req.file
  
    // docarray.forEach(element => {
  
    // arr=element.path  
    // })
    console.log(">>>>bbbb>",)
    data.documentpdf=docarray;
    // data.user_id = id;
   // console.log("VVVVVVVVVVVVVV",docarray)
    const DocumentPostData = await documentModel(data);
   // console.log("VXXXXXXXXX",DocumentPostData)
    const dataPostdoc = await DocumentPostData.save();
    //console.log("llllllllllllll",dataPostdoc)
    res.status(201).send(dataPostdoc);
} catch (error) {
    res.status(401).send(error.message);
}
};

//this is for deleting docs
// const docsDelete = async (req, res) => {
//   try {
//     const Deletedocs = await document_master.findByIdAndDelete(req.params.id);
//     if (!req.params.id) {
//       return res.status(404).send("succesfull");
//     }
//     res.send(Deletedocs);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// };

//this is for updating document
// const docsPatch = async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const Updatedocs = await document_master.findByIdAndUpdate(_id, req.body);
//     res.send(Updatedocs);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// };

module.exports = { 
  docsGet,
  docsPost 
  // docsDelete, 
  // docsPatch 
};
