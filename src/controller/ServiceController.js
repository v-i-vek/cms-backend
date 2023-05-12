const ServiceManage = require('../models/ServiceModel');

ServiceManage

exports.createSer = async (req,res) =>{
    try {
        const Ser =   ServiceManage(req.body);
        if (req.file) {
            
            Ser.serviceimage = req.file.path;
          
        }
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
        const Ser = await ServiceManage.findById(req.params.id).populate('site_id').populate('user_id');
       
        console.log(Ser)
        res.json(Ser);
    } catch (err) {
        res.status(404).json({ message: 'service not found' });
    }

};

exports.updateSer = async (req, res) => {

   id = req.params.id
    try {
        const data = req.body
        data.serviceimage=req.file.path
        const update = await ServiceManage.findByIdAndUpdate(id,data,{new:true});
        console.log("update",update)
        res.status(201).send({message:"successfully"});
    } catch (err) {
        console.log(err)

        res.status(400).json({ message: err.message });
    }

};

exports.deleteSer = async (req, res) => {
    try {
        await ServiceManage.findByIdAndDelete(req.params.id);
        res.json({ message: 'user deleted' });
    } catch (err) {
        res.status(404).json({ message: "user not found" });
    }
}
exports.getAll = async(req,res)=>{
    try {
        const result = await ServiceManage.find({ site_id : {$ne : null} }).populate('site_id')
    res.send(result)
    } catch (error) {
        res.send({message:"error "})
    }
    
}


exports.getAllUserServices = async (req, res) => {
    try {
        const services = await ServiceManage.find({ user_id : {$ne : null} }).populate('user_id','name');
        res.send(services)
    } catch (error) {
        console.error('Error retrieving user services:', error);
        res.status(500).json({ error: 'Failed to retrieve user services' });
    }
};

exports.updateServices = async (req, res) => {
    console.log(req.body.selectedServices);
    const selectedServices = req.body.selectedServices;
    const data = await ServiceManage.create({
        name: selectedServices[0].name,
        description: selectedServices[0].description,
        user_id: req.body.userId
    });
    data.save();
}




