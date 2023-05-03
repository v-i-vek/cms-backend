const multer = require("multer");
var Storage = multer.diskStorage({
    destination:"material_img_uploads",
    filename: function (req, file, cb) {
        cb(null,file.originalname);
    },
});
var uploads = multer({
    storage: Storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/jpg") {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    limits: {
        fieldSize: 1024 * 1024 * 10
    }
});
module.exports = uploads;