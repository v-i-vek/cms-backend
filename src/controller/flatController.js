const flatModel = require('../models/flat')






// positng the data

const postFlat = async (req,res)=>{

    try {
        const result = new flatModel({
            flatNo:req.body.flatNo,
            user_id:req.body.user_id,
            site_id:req.body.site_id
        })
        const flatSave = await  result.save();
        res.send(flatSave)
    } catch (error) {
        console.log(error)
        res.send(error)
    }


}

const getFlat = async(req,res)=>{
    try {

        console.log("coming")
        const result = await flatModel.find().populate('user_id').populate('site_id');
        console.log(result ,"cooinrer")
        res.send(result)
        
    } catch (error) {
        res.send(error)
    }
}

module.exports = {postFlat ,getFlat}