const express = require("express");
const { userGet, userPost,updateUser ,userMail,usersingleGet,adminUserUpdate,addingflat} = require("../controller/AddUser");
const AddUser = express.Router({ caseSensitive: true });
const uploads = require('../middleware/documentUpload')
AddUser.get("/AddUser", userGet);
AddUser.get("/AddUser/single/:id", usersingleGet);
AddUser.post("/AddUser/", userPost);
AddUser.put('/AddUser/:id',updateUser)
AddUser.get('/AddUser/mail/:id',userMail)
AddUser.put('/AddUser/admin/:id',adminUserUpdate)
AddUser.put('/userExtraFlat/:id',addingflat)



module.exports = AddUser;