const { Address_model } = require("../models/Address.user.model");
// this mehtod is for call in get the method
const addressGet = async (req, res) => {
    try {
        const result = await Address_model.findById(req.params.id);
        res.status(201).send(result);
    } catch (error) {
        res.status(401).send(error.message);
    }
};
// to get all data
const addressGetAll = async (req, res) => {
    try {
        const result = await Address_model.find();
        res.status(201).send(result);
    } catch (error) {
        res.status(401).send(error.message);
    }
};
// this is for posting the data in db through post method
const addressPost = async (req, res) => {
    try {
        const addAddress = new Address_model({
            Address: req.body.address,
            country: req.body.country,
            city: req.body.city,
            state: req.body.state,
            pin_code: req.body.pin_code,
        });
        const saved = await addAddress.save();
        console.log(saved);

        return res.status(201).json({ message: "added succesfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error });
    }
};

// this is for update  the address using the address id
const addressPatch = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Address_model.findById({ _id: id });
        const update = await result.updateOne({
            Address: req.body.Address,
            country: req.body.country,
            city: req.body.city,
            state: req.body.state,
            pin_code: req.body.pin_code,
        });
        console.log(update);
        res.status(201).send("successful");
    } catch (error) {
        res.status(401).send(error.message);
    }
};

// this method is to delete the data from the db
const addressDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const DeleteAddress = await Address_model.findByIdAndDelete({ _id: id });
        console.log(DeleteAddress);
        res.send("Deleted");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addressGet,
    addressPost,
    addressPatch,
    addressDelete,
    addressGetAll,
};
