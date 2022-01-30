const GaleryModel = require('../models/galery.model');
const UserModel = require('../models/user.model');
const { uploadErrors } = require("../utils/errors.utils");
const ObjectID = require('mongoose').Types.ObjectId;

// READ GALERY
module.exports.readGalery = (req, res) => {
    GaleryModel.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error to get data : ' + err);
        }
    }).sort({ createdAt: -1 });
};

// CREATE GALERY
module.exports.createGalery = async (req, res) => {
      
    const newGalery = new GaleryModel({
        writterId: req.body.writterId,
        message: req.body.message,
        picture: req.file.path,
        video: req.body.video
    });

    try {
        const galery = await newGalery.save();
        return res.status(201).json(galery);
    } catch (err) {
        return res.status(400).send(err);
    }
};

// UPDATE GALERY
module.exports.updateGalery = (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID Unknown : ' + req.params.id);
    }

    const updatedRecord = {
        message: req.body.message
    }

    GaleryModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedRecord },
        { new: true },
        (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Update error : ' + err);
            }
        }
    );
};

// DELETE GALERY
module.exports.deleteGalery = (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID Unknown : ' + req.params.id);
    }

    GaleryModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Delete error : ' + err);
            }
        }
    )
};