const express = require("express");
const {
  materialGet,
  materialGetSingle,
  materialPost,
  materialUpdate,
  materialDelete
} = require("../controller/materialController");
const uploads = require("../middleware/material_upload");
const materialRoute = express.Router();
materialRoute.get("/getmaterial/", materialGet);
materialRoute.get("/getmaterial", materialGetSingle);
materialRoute.post("/postmaterial", uploads.single('image'), materialPost);
materialRoute.patch("/patchmaterial/:id", materialUpdate);
materialRoute.delete("/deletematerial/:id", materialDelete);
module.exports = materialRoute ;
