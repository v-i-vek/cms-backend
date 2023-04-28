const ServiceManage = require('../models/ServiceModel');
const ser = require('../models/ServiceModel')
ServiceManage

 exports.createSer = async (req,res) =>{
     try {
         const Ser =   ServiceManage(req.body);
         if (req.file) {
             console.log("img")
            
             Ser.serviceimage = req.file.path;
             console.log(Ser.serviceimage)
         }
         Ser.site_id = req.body.site_id;
         Ser.user_id = req.body.user_id;
         await Ser.save().then(()=>{
             console.log("saved success");
                 res.status(201).send(Ser);
             })

     } catch (e) {
         console.log(e);
         res.status(500).send(e);
     }
 };


exports.getSer = async (req, res) => {
    try {
        console.log(req.params);
        const Ser = await ser.findById(req.params.id).populate('site_id').populate('user_id');
       
        console.log(Ser)
        res.json(Ser);
    } catch (err) {
        res.status(404).json({ message: 'service not found' });
    }

};

exports.updateSer = async (req, res) => {

    try {
        const id = req.params.id;
        const result = await ServiceManage.findById({ _id: id });
        const update = await result.updateOne({
          name: req.body.name,
          description: req.body.description,
          customize: req.body.customize,
          serviceimage: req.body.serviceimage
        });
        res.status(201).send("successful");
      } catch (error) {
        res.status(401).send(error);
      }
    };

exports.deleteSer = async (req, res) => {
    try {
        await ser.findByIdAndDelete(req.params.id);
        res.json({ message: 'user deleted' });
    } catch (err) {
        res.status(404).json({ message: "user not found" });
    }
}
exports.getAll = async(req,res)=>{
    try {
        const result = await ser.find().populate("site_id").populate("user_id")
    res.send(result)
    } catch (error) {
        res.send({message:"error "})
    }
    
}
