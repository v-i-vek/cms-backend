const multer = require("multer");
// defining the storage location
const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "documentUploads")
  }
  
  , // express will create the folder if it is not created
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const multerFilter =(req,file,cd)=>{
    if(file.mimetype.split('/')[1]=='pdf'){
        cd(null,true)
    }else{
        cd(new Error('Not a pdf file!!'),false)
    }
};


const uploads =  multer({
  storage: Storage,
  fileFilter: multerFilter
});
module.exports = uploads;
