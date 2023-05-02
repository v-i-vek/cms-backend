const express = require("express");
const { userGet, userPost,updateUser ,userMail,usersingleGet, userImage} = require("../controller/AddUser");
const AddUser = express.Router({ caseSensitive: true });
const upload = require("../middleware/material_upload")
AddUser.get("/AddUser", userGet);
AddUser.get("/AddUser/single/:id", usersingleGet);
AddUser.post("/AddUser/", userPost);
AddUser.put('/AddUser/:id',updateUser)
AddUser.get('/AddUser/mail/:id',userMail)



module.exports = AddUser;
