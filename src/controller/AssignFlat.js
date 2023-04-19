const {siteMangementModel} = require("../models/site.management");
const userModel = require("../models/registerUser");
const { updateOne } = require("../models/registerUser");





const assignFlat = async(req,res)=>{
    try {
        const id = req.params.id
        let check = req.body.flatDetails[0].flatNo
        console.log(check)
        let flatObj = new Object()
        flatObj.flatNo = req.body.flatNo;
        flatObj.siteName = req.body.siteName;
        flatObj.location = req.body.location
        let arr=[]
        let x = arr.push(flatObj)
        
       // console.log(check)
        const user = await userModel.findByIdAndUpdate( id,  {   new:true,
            flatDetails:x
      
          })
       // const addFlat = await user.updateOne(req.body) 
        // flatNo:req.body.flatNo,
        // siteName:req.body.siteName,
        // category:req.body.category,
        // location:req.body.location

        res.send(user)

    } catch (error) {
        console.log(error)
        res.send(error)
    }
}


module.exports = {assignFlat}
