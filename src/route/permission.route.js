const express = require("express");
const {
  perGet,
  perPost,
  perGetSingle,
  perUpdate,
  perDelete
} = require("../controller/permissionContoller");
const route = express.Router();
route.get("/getper", perGet);
route.post("/postper", perPost);
route.get("/getper/:id", perGetSingle);
route.patch("/patchper/:id", perUpdate);
route.delete("/deleteper/:id", perDelete);
module.exports = route;