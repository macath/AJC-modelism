const GalleryModel = require('../models/gallery.model');
const UserModel = require('../models/user.model');
const { uploadErrors } = require("../utils/errors.utils");
const ObjectID = require('mongoose').Types.ObjectId;

// READ GALLERY
module.exports.readGallery = (req, res) => {
    GalleryModel.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error to get data : ' + err);
        }
    }).sort({ createdAt: -1 });
};

// CREATE GALLERY
module.exports.createGallery = async (req, res) => {
      
    const newGallery = new GalleryModel({
        writterId: req.body.writterId,
        message: req.body.message,
        picture: req.file.path,
        video: req.body.video
    });

    try {
        const gallery = await newGallery.save();
        return res.status(201).json(gallery);
    } catch (err) {
        return res.status(400).send(err);
    }
};

// UPDATE GALLERY
module.exports.updateGallery = (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID Unknown : ' + req.params.id);
    }

    const updatedRecord = {
        message: req.body.message
    }

    GalleryModel.findByIdAndUpdate(
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

// DELETE GALLERY
module.exports.deleteGallery = (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID Unknown : ' + req.params.id);
    }

    GalleryModel.findByIdAndRemove(
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