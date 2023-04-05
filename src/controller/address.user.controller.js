const { addressModel  } = require("../models/address.user.model");
// this mehtod is for call in get the method
const addressGet = async (req, res) => {
    try {
        const result = await addressModel .findById(req.params.id);
        res.status(201).send(result);
    } catch (error) {
        res.status(401).send(error.message);
    }
};
// to get all data
const addressGetAll = async (req, res) => {
    try {
        const result = await addressModel .find();
        res.status(201).send(result);
    } catch (error) {
        res.status(401).send(error.message);
    }
};
// this is for posting the data in db through post method
const addressPost = async (req, res) => {
    try {
        const addAddress = new addressModel ({
            Address: req.body.address,
            country: req.body.country,
            city: req.body.city,
            state: req.body.state,
            pin_code: req.body.pin_code,
        });
        const saved = await addAddress.save();
        return res.status(201).json({ message: "added succesfully" });
    } catch (error) {
        return res.status(401).json({ message: error });
    }
};

// this is for update  the address using the address id
const addressPatch = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await addressModel .findById({ _id: id });
        const update = await result.updateOne({
            address: req.body.address,
            country: req.body.country,
            city: req.body.city,
            state: req.body.state,
            pin_code: req.body.pin_code,
        });
        res.status(201).send("successful");
    } catch (error) {
        res.status(401).send(error.message);
    }
};

// this method is to delete the data from the db
const addressDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const DeleteAddress = await addressModel .findByIdAndDelete({ _id: id });
        res.status(201).send(DeleteAddress);
    } catch (error) {
        res.status(401).send(error.message)
    }
};

module.exports = {
    addressGet,
    addressPost,
    addressPatch,
    addressDelete,
    addressGetAll,
};
