const jwt=require('jsonwebtoken')
const userModel =require('../models/registerUser');
const auth = async (req,res,next)=>{
try {
    const secret_key="mynameiskamleshdhelloistheworldisfirstprintedinprogramwhen"
    const token = req.cookies.jwt
    const verifyUser = jwt.verify(token, secret_key  )
    const user = await userModel.findOne({_id:verifyUser._id})
    console.log(user);
    next()

} catch (error) {
    res.status(501).send(error)
}
}
module.exports = auth
