const express=require("express");
const {
    contactGet,
    contactUpdate,
    contactDelete,
    contactPost
}= require('../controller/contactController')
const contactRoute = express.Router();
contactRoute.get("/getcontact",contactGet);
contactRoute.patch("/patchcontact/:id", contactUpdate);
contactRoute.delete("/deletecontact/:id",contactDelete);
contactRoute.post("/postcontact",contactPost);

module.exports = contactRoute;