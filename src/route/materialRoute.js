const express = require("express");
const {
  materialGet,
  materialGetSingle,
  materialPost,
  materialUpdate,
  materialDelete
} = require("../controller/materialController");
const upload = require("../middleware/upload");
const route = express.Router();
route.get("/getmaterial", materialGet);
route.get("/getmaterial/:id", materialGetSingle);
route.post("/postmaterial", upload.single("Material_img"), materialPost);
route.patch("/patchmaterial/:id", materialUpdate);
route.delete("/deletematerial/:id", materialDelete);
module.exports = route;
