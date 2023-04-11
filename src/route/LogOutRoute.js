const express = require("express");
const LogOutRouter = express.Router();
const {
    LogoutController
} = require("../controller/UserLogOut");
const auth = require("../middleware/auth");
LogOutRouter.get("/logout", auth, LogoutController);
module.exports = LogOutRouter;
