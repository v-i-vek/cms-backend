const express = require("express");
const { userGet, userPost,updateUser ,userMail} = require("../controller/AddUser");
const AddUser = express.Router({ caseSensitive: true });
AddUser.get("/AddUser", userGet);
AddUser.post("/AddUser/", userPost);
AddUser.put('/AddUser/:id',updateUser)
AddUser.get('/AddUser/mail/:id',userMail)


module.exports = AddUser;
