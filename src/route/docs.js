const express = require("express");
const router = express.Router();

const { docsGet } = require("../controller/docs");
const { docsPost } = require("../controller/docs");
const { docsDelete } = require("../controller/docs");
const { docsPatch } = require("../controller/docs");

const upload = require("../middleware/upload");
const document_master = require("../models/document_master");

//this is for get request

router.get("/docs", docsGet);

// this is for Post request

router.post("/docs", upload.single("image"), docsPost);

// this is the code for delete request

router.delete("/docs/:id", docsDelete);

//this is the code for update docs

router.patch("/docs/:id", docsPatch);

module.exports = router;
