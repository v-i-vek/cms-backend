const path = require("path");
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
    }
});

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
            callback(null, true);
        } else {
            console.log("upload only jpeg and png files");
            callback(null, false);
        }
    },
    limits: {
        fieldSize: 1024 * 1024 * 10
    }
});
module.exports = upload;




// const multer = require("multer");
// const path = require("path")
// // defining the storage location
// const Storage = multer.diskStorage({
 
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const uploads = multer({
//   storage: Storage,
//   fileFilter: function (req, file, cb) {
//     if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   },
//   limits: {
//     fileSize: 1024 * 1024 * 5, 
//   },
// });
// module.exports = uploads;
