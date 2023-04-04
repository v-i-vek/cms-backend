const express =require('express');
const { materialGet, materialGetSingle, materialPost, materialUpdate, materialDelete }=require("../controller/materialController");
const upload = require("../middleware/upload");
const  route =express.Router();
route.get("/material",materialGet);
route.get("/material/:id",materialGetSingle);
route.post("/material",upload.single("Material_img"),materialPost);
route.patch("/material/:id",materialUpdate);
route.delete("/material/:id",materialDelete);

module.exports = route;