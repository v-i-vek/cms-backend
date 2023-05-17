const express = require("express");
const   router = express.Router();
const {docsGet, docsPost } = require("../controller/DocumentController");

const upload = require("../middleware/documentUpload");
router.get("/docs/:id", docsGet);
router.post("/docs", upload.single("documentpdf"), docsPost);
// router.delete("/docs/:id", docsDelete);
// router.patch("/docs/:id", docsPatch);
module.exports = router;
