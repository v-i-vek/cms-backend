const ServiceManage = require('../models/ServiceModel');
const ser= require('../models/ServiceModel')

// added
exports.createSer = async (req, res) => {
    
    try {
       
        const Ser =   ServiceManage(req.body);
      
     const ans = await Ser.save()
     return res.send(ans)
    } catch (err) {
        res.status(400).json({ message: err.message });
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

exports.updateSer = async (req,res) => {


    try {
    const id = req.body.params
        const Ser = await ser.findByIdAndUpdate({_id: id});
        const update = await ser.updateOne({
            name:req.body.name,
            description:req.body.description,
            customize:req.body.customize
        })
        
        res.json(update)
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

exports.getAll = async (req,res)=>{
    try {
        const result = await ser.find()
        return res.send(result)
    } catch (error) {
        return res.send(error)
    }
}
