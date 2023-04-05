const express = require("express");
const { rolePost, roleDelete, rolePatch } = require("../controller/rolecontroller");
const { UserByrole } = require("../controller/rolecontroller");
const route = express.Router();
route.delete("/role", roleDelete);
route.get("/rolepopulate/:id", UserByrole);
route.post("/role/populate", rolePost);
route.patch("/role/:id", rolePatch);

module.exports = route;
