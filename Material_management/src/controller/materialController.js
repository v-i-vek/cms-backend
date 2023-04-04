const MaterialModel =require('../models/materialModel');

const materialGet =async (req,res)=>{

    try {
        const materialGetData  =await MaterialModel.find();
        res.status(201).send(materialGetData);

    } catch (error) {
        res.status(401).send(error.message);
    }

}


const materialGetSingle =async (req,res)=>{

    try {
        const _Id =req.params.id;
        const materialGetDatasin  =await MaterialModel.findById(_Id).populate(`Quantity_id`);
        res.status(201).send(materialGetDatasin);

    } catch (error) {
        res.status(401).send(error.message);
    }

}

const materialUpdate =async (req,res)=>{

    try {
        const _Id =req.params.id;
        const materialUpdateData  =await MaterialModel.findByIdAndUpdate(_Id,req.body,{new : true});
        res.status(201).send(materialUpdateData);
    } catch (error) {
        res.status(401).send(error.message);
    }

}

const materialDelete =async (req,res)=>{

    try {
        const _Id =req.params.id;
        const materialDeleteData  =await MaterialModel.findByIdAndDelete(_Id,req.body,{new : true});
        res.status(201).send(materialDeleteData);
    } catch (error) {
        res.status(401).send(error.message);
    }

}


const materialPost =async (req,res)=>{

    try {
    
        const materialPostData  =await MaterialModel(req.body);

             if(req.file){
                // let path = ''
                // req.files.array.forEach(function(file,index,arr) {
                //     path=path+file.path+ ','
                // });
                // path =path.substring(0,path.lastIndexOf(","))
                // console.log(path);
                // materialPostData.Material_img=path;
               materialPostData.Material_img=req.file.path
               // console.log( materialPostData.Material_img)
            }

            materialPostData.Quantity_id=req.body.Quantity_id;
    // console.log(req.file.path);
        const dataPostMat = materialPostData.save();
        res.status(201).send(dataPostMat);
    } catch (error) {
        res.status(401).send(error.message);
    }

}


module.exports={materialGet,materialGetSingle,materialUpdate,materialDelete,materialPost}