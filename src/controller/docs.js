const document_master = require("../models/document_master");

const mongoose = require('mongoose')
document_master

/********************************* docs Get ******************************************/


const docsGet = async(req,res)=> {

    try{
    
   // const docs = await document_master.find();
   const docs = await document_master.find()
   res.send(docs)


} catch(e){
      res.send(e);
    
    }

    }


  /************************************* docs Post ***********************************/


 const docsPost = async(req,res)=> {

    console.log(req.body)
    const docs = new document_master(req.body)
   docs.save().then(()=>{
        res.status(201).send(docs)
   }).catch((err) =>{
       res.status(400).send(err);
    })
}

/************************************ docs Delete *************************************/

const docsDelete  =  async(req,res) => {
    
        try{
          const Deletedocs= await document_master.findByIdAndDelete(req.params.id);
          if(!req.params.id){
                return   res.status(404).send("succesfull")
                  }
                  res.send(Deletedocs);


                  
                    } catch(e){
                        res.status(500).send(e);
                
                    }
                }

/**************************** docs Update *******************************************/

const docsPatch =  async(req,res) => {


    try{
  
         const _id = req.params.id;
         const Updatedocs = await document_master.findByIdAndUpdate(_id,  req.body);   
             res.send(Updatedocs);
  
    }catch(e){
         res.status(500).send(e);
    }
}




module.exports = { docsGet, docsPost, docsDelete , docsPatch };
        
        
            