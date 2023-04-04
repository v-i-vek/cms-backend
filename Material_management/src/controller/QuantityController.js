const QuantityModel = require("../models/QuantityModel");
//get all quantity
const QuantityGet = async (req, res) => {
    try {
        const QuantityGetData = await QuantityModel.find();
        res.status(201).send(QuantityGetData);
    } catch (error) {
        res.status(401).send(error.message);
    }
};
//get single quantity
const QuantityGetSingle = async (req, res) => {
    try {
        const _Id = req.params.id;
        const QuantityGetDatasin = await QuantityModel.findById(_Id);
        res.status(201).send(QuantityGetDatasin);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

//update quantity
const QuantityUpdate = async (req, res) => {
    try {
        const _Id = req.params.id;
        const QuantityUpdateData = await QuantityModel.findByIdAndUpdate(
            _Id,
            req.body,
            { new: true }
        );
        res.status(201).send(materialUpdateData);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

//delete quantity
const QuantityDelete = async (req, res) => {
    try {
        const _Id = req.params.id;
        const QuantityDeleteData = await QuantityModel.findByIdAndDelete(
            _Id,
            req.body,
            { new: true }
        );
        res.status(201).send(QuantityDeleteData);
    } catch (error) {
        res.status(401).send(error.message);
    }
};
//insert quantity
const QuantityPost = async (req, res) => {
    try {
        const QuantityPostData = await QuantityModel(req.body);
        const dataPostQua = QuantityPostData.save();
        res.status(201).send(dataPostQua);
    } catch (error) {
        res.status(401).send(error.message);
    }
};

module.exports = {
    QuantityGet,
    QuantityGetSingle,
    QuantityUpdate,
    QuantityDelete,
    QuantityPost
};
