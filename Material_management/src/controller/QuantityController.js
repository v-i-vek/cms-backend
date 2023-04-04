const QuantityModel =require('../models/QuantityModel');

const QuantityGet =async (req,res)=>{

    try {
        const QuantityGetData  =await QuantityModel.find();
        res.status(201).send(QuantityGetData);

    } catch (error) {
        res.status(401).send(error.message);
    }

}


const QuantityGetSingle =async (req,res)=>{

    try {
        const _Id =req.params.id;
        const QuantityGetDatasin  =await QuantityModel.findById(_Id);
        res.status(201).send(QuantityGetDatasin);

    } catch (error) {
        res.status(401).send(error.message);
    }

}

const QuantityUpdate =async (req,res)=>{

    try {
        const _Id =req.params.id;
        const QuantityUpdateData  =await QuantityModel.findByIdAndUpdate(_Id,req.body,{new : true});
        res.status(201).send(materialUpdateData);
    } catch (error) {
        res.status(401).send(error.message);
    }

}

const QuantityDelete =async (req,res)=>{

    try {
        const _Id =req.params.id;
        const QuantityDeleteData  =await QuantityModel.findByIdAndDelete(_Id,req.body,{new : true});
        res.status(201).send(QuantityDeleteData);
    } catch (error) {
        res.status(401).send(error.message);
    }

}


const QuantityPost =async (req,res)=>{

    try {
    
        const QuantityPostData  =await QuantityModel(req.body);

            //  if(req.file){
            //     // let path = ''
            //     // req.files.array.forEach(function(file,index,arr) {
            //     //     path=path+file.path+ ','
            //     // });
            //     // path =path.substring(0,path.lastIndexOf(","))
            //     // console.log(path);
            //     // materialPostData.Material_img=path;
            //    materialPostData.Material_img=req.file.path
            //    // console.log( materialPostData.Material_img)
            // }

         //   materialPostData.Quantity_id=req.body.Quantity_id;
    // console.log(req.file.path);
        const dataPostQua = QuantityPostData.save();
        res.status(201).send(dataPostQua);
    } catch (error) {
        res.status(401).send(error.message);
    }

}


module.exports={QuantityGet,QuantityGetSingle,QuantityUpdate,QuantityDelete,QuantityPost}