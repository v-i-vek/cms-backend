const express = require("express");
const {
  QuantityGet,
  QuantityGetSingle,
  QuantityPost,
  QuantityUpdate,
  QuantityDelete
} = require("../controller/QuantityController");
const routequantity = express.Router();
routequantity.get("/getquantity", QuantityGet);
routequantity.get("/getquantity/:id", QuantityGetSingle);
routequantity.post("/postquantity", QuantityPost);
routequantity.patch("/patchquantity/:id", QuantityUpdate);
routequantity.delete("/deletequantity/:id", QuantityDelete);
module.exports = routequantity;
