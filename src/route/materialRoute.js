const express = require("express");
const {
  materialGet,
  materialGetSingle,
  materialPost,
  materialUpdate,
  materialDelete
} = require("../controller/materialController");
const upload = require("../middleware/material_upload");
const materialRoute = express.Router();
materialRoute.get("/getmaterial", materialGet);
materialRoute.get("/getmaterial/:id", materialGetSingle);
materialRoute.post("/postmaterial", upload.single("Material_img"), materialPost);
materialRoute.patch("/patchmaterial/:id", materialUpdate);
materialRoute.delete("/deletematerial/:id", materialDelete);
module.exports = materialRoute ;
