const userModel = require("../models/registerUser");
const hbs = require('nodemailer-express-handlebars')
const path = require('path')
// nodemailer
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { siteMangementModel } = require("../models/site.management");

const userGet = async (req, res) => {
  try {
    const result = userModel.find().populate("flatUserDetails.siteName");
    const ans = await result;
    return res.status(201).send(ans);
  } catch (error) {
  
    return res.status(400).send({ message: "error" });
  }

  return await res.send("register");
};

const usersingleGet = async (req, res) => {
  try {
    const result = userModel
      .findOne({ _id: req.params.id })
      .populate("flatUserDetails.siteName");
      //ddddd
    const ans = await result;
    return res.status(201).send(ans);
  } catch (error) {
  
    return res.status(400).send({ message: "error" });
  }

  return await res.send("register");
};

// this function is called to add user
const userPost = async (req, res) => {
  try {
   
    const flatNo = req.body.flatNo;
    const siteName = req.body.siteName;
    // this is called to make isBought field true in the user id
 const check=   await findSiteFlat(req, res, flatNo, siteName);
 console.log(check,"this is from psot")
    let arr = [];
    let obj = new Object();
    obj.flatNo = flatNo;
    obj.siteName = siteName;
    arr.push(obj);
    const userDetailSave = new userModel({
      name: req.body.name,
      email: req.body.email,
      role: "user", 
      image:"/home/kamleshkalal/Music/git 3/construction_management/src/uploads/users.png",
      flatUserDetails: arr
     
    });


    const result = await userDetailSave.save();
    return res.status(201).send();
  } catch (error) {
    return res.status(400).send(error);
  }
};
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userModel.findById({ _id: id });
    const update = await result.updateOne({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      country: req.body.country,
      city: req.body.city,
      state: req.body.state,
      gender: req.body.gender,
      pinCode: req.body.pinCode,
    });
    res.status(201).send({ message: "successful", update });
  } catch (error) {
    res.status(401).send({ message: "error" });
  }
};





//for admin side user update


const adminUserUpdate = async(req,res)=>{
  try {
    const id = req.params.id;

  const updateUser = await userModel.findByIdAndUpdate(id,req.body,{new:true})
  res.status(201).send({message:"successful"})
  } catch (error) {
  
    res.status(401).send({message:"error"})
  }
}


// saving the value of the flat and site which are added after adding user separetely
const addingflat = async(req,res)=>{
  try{
    const id = req.params.id;
    console.log("====>sadfsf",req.body)
    console.log("====>",id)
    const flatNo = req.body.flatNo;
    const siteName = req.body.siteName;



    const addFlat = await userModel.findOne({_id:id})
    
    console.log(flatNo)
    console.log(siteName)
   await findSiteFlat(req, res, flatNo, siteName);

    // let arr = [];
    let obj = {};
    obj.flatNo = flatNo;
    obj.siteName = siteName;
    addFlat.flatUserDetails.push(obj)
    // arr.push(obj);
    //  addFlat = new userModel({
    //  flatUserDetails:arr
    // })
await  addFlat.save()

res.send({message:"successfull"})


  }catch(error){
    console.log(error)

res.send({message:"error"})
  }
} 














//this is for sending mail to the user
const userMail = async (req, res) => {
  try {
    const id = req.params.id;
    let userPassword = Math.floor(100000 + Math.random() * 900000);

    const result = await userModel.findById({ _id: id });
    const sendPassword = await sendMail(result.email, userPassword);
    userPassword = await bcrypt.hash(userPassword.toString(), 10);
    const addPass = await result.updateOne({
      password: userPassword,
    });
    res.send(addPass);
  } catch (error) {
    res.send(error);
  }
};

//function for sending the mail to the
const sendMail = (userMailId, password) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vivek.yadav@volansys.com",
      pass: "vivek9499&rajnish",
    },
  });

  let y = Math.floor(100000 + Math.random() * 900000);
  const options = {
    from: "vivek.yadav@volansys.com",
    to: userMailId,
    subject: "cms login creditnals",
    text: "your password is \n" + password + "\n do not share with anyone",
  };


// // point to the template folder
// const handlebarOptions = {
//   viewEngine: {
//       partialsDir: path.resolve('./views/'),
//       defaultLayout: false,
//   },
//   viewPath: path.resolve('../views/'),
// };

// use a template file with nodemailer
// transporter.use('compile', hbs(handlebarOptions))







  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("sent" + info.response);
  });
};
//this function is for makeing isBought=true and will be called in userPost method
async function findSiteFlat(req, res, flatNo, siteName) {
  try {
    const findIsBought = await siteMangementModel.findOne({
      _id: siteName._id,
    });
    findIsBought.flatDetails.filter((data) => {
      if (data.flatNo === flatNo) {
        data.isBought = true;
      }
    });
    console.log("from func",findIsBought)
    await findIsBought.save();
   
  } catch (error) {
   res.send({message:"error"})
  }
}

module.exports = { userGet, userPost, updateUser, usersingleGet, userMail ,adminUserUpdate,addingflat};
