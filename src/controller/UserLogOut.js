
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const userModel =require('../models/registerUser');
const auth = require('../middleware/auth');
module.exports.LogoutController=async(req,res)=>{
    try {
        console.log(req.user)
        res.clearCookie("jwt");

        req.user.tokens= req.user.tokens.filter((currentElement)=>{
            return currentElement.tokens !==req.tokens

        });

      console.log('logout successfully ')
        await req.user.save();
      res.status(201).send("logout successfully")
    } catch (error) {
        res.status(500).send(error.message);
    }
}
