const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {userPost,getAlluser, userDelete, userPatch  } = require ("../controller/usercontroller");
router.post("/role",userPost);
router.delete("/role", userDelete);
router.get("/GetallUser", getAlluser);
router.patch("/role",userPatch)
router.post("/user", upload.single("image"), userPost);

module.exports = router;
