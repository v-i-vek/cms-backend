const express =require('express');
const { QuantityGet, QuantityGetSingle, QuantityPost, QuantityUpdate, QuantityDelete }=require("../controller/QuantityController");

const  routequantity =express.Router();
routequantity.get("/quantity",QuantityGet);
routequantity.get("/quantity/:id",QuantityGetSingle);
routequantity.post("/quantity",QuantityPost);
routequantity.patch("/quantity/:id",QuantityUpdate);
routequantity.delete("/quantity/:id",QuantityDelete);

module.exports = routequantity;