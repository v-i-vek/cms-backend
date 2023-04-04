const multer = require("multer");
// defining the storage location
const Storage = multer.diskStorage({
  destination: "Site_img_uploads", // express will create the folder if it is not created
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const uploads = multer({
  storage: Storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5, // this is optional
  },
});
module.exports = uploads;
