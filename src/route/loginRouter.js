const express = require("express");
const LoginRoute = express.Router();
const {
  userLoginGet,
  userLoginPost,
  userafterLoginGet
} = require("../controller/loginController");
const auth = require("../middleware/auth");
LoginRoute.get("/login", userLoginGet);
LoginRoute.post("/login", userLoginPost);
//LoginRoute.get('/secret',auth,userafterLoginGet)
module.exports = LoginRoute;
