const express = require("express");
const { userGet, userPost } = require("../controller/userContollerLogin");
const routeUser = express.Router({ caseSensitive: true });
routeUser.get("/reg", userGet);
routeUser.post("/reg", userPost);
module.exports = routeUser;
