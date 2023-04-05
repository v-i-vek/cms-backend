const ser = require('../models/ServiceModel')
// added
exports.createSer = async (req, res) => {
    const { service_id, service_name, service_desc, service_customize, status } = req.body
    try {
        const Ser = await ser.create({ service_id, service_name, service_desc, service_customize, status });
        res.status(201).json(Ser);
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

    const { service_id, service_name, service_desc, service_customize, status } = req.body;
    try {
     console.log(req.params)
        const Ser = await ser.findByIdAndUpdate({_id: req.params.id}, req.body);
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

