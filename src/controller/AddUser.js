const userModel = require("../models/registerUser");
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')

const userGet = async (req, res) => {

  try {
    const result = userModel.find()
    const ans = await result;
    return res.status(201).send(ans)
  } catch (error) {
    console.log(error)
  return   res.status(400).send({message:'error'})
  }


  return await res.send("register");
};
const userPost = async (req, res) => {
  try {
    console.log("register");
   const userDetailSave = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    console.log(userDetailSave);


    // const token = await userDetailSave.generateAuthToken(); //Adding cookies
    
    
    // res.cookie("jwt", token, {
    //   expires: new Date(Date.now() + 300000)
    // });

    
    const result = await userDetailSave.save();
    return res.status(201).send();
  } catch (error) {
   return res.status(400).send(error);
  }
};

const updateUser=async(req,res)=>{

  try {
    const id = req.params.id;
    const result = await userModel.findById({ _id: id });
    const update = await result.updateOne({
      name: req.body.name,
      email:req.body.email
    });
    res.status(201).send("successful");
  } catch (error) {
    res.status(401).send(error);
  }
}

const userMail = async(req,res)=>{


  try {
      const id = req.params.id;
      let userPassword = Math.floor(100000 + Math.random() * 900000)
   
      const result  = await userModel.findById({_id:id})
      const sendPassword = await sendMail(result.email,userPassword)
      userPassword = await bcrypt.hash(userPassword.toString(),10)
      console.log(userPassword)
      const addPass = await result.updateOne({
        password : userPassword })
        res.send(addPass)
  } catch (error) {
    console.log(error)
    res.send(error)
    
  }
}



const sendMail = (userMailId,password)=>{

const transport = nodemailer.createTransport({
  service:"gmail",
  auth:{
      user:"vivek.yadav@volansys.com",
      pass:"vivek&rajnish@190"
   
  }
})

let y = Math.floor(100000 + Math.random() * 900000)
const options = {
 
  from:"vivek.yadav@volansys.com",
  to:userMailId,
  subject:"cms login creditnals",
  text:"your password is \n" + password+"\n do not share with anyone"
}

transport.sendMail(options,function(err,info){
  if(err){
      console.log(err);
      return
  }
  console.log("sent"+ info.response)
})


}





















module.exports = { userGet, userPost,updateUser ,userMail};