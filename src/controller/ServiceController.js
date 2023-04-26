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
        const Ser = await ser.find({ _id: req.params.id });
        console.log(Ser)
        res.json(Ser);
    } catch (err) {
        res.status(404).json({ message: 'service not found' });
    }

};

exports.updateSer = async (req, res) => {

    const { name, description,customize, } = req.body;
    try {
        console.log(req.params)
        const Ser = await ser.findByIdAndUpdate({ _id: req.params.id }, req.body);
        const updatedSer = await Ser.save();
        console.log(Ser)
        res.json(updatedSer)
    } catch (err) {
        res.status(400).json({ message: err.message });
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
        const result = await ser.find()
    res.send(result)
    } catch (error) {
        res.send({message:"error "})
    }
    
}
