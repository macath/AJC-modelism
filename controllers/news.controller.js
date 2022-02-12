const NewsModel = require('../models/news.model');
const UserModel = require('../models/user.model');
const { uploadErrors } = require("../utils/errors.utils");
const ObjectID = require('mongoose').Types.ObjectId;

// READ NEWS
module.exports.readNews = (req, res) => {
    NewsModel.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error to get data : ' + err);
        }
    }).sort({ createdAt: -1 });
};

// CREATE NEWS
module.exports.createNews = async (req, res) => {
    const pic = req && req.file && req.file.filename ? req.file.filename : null
    const newNews = new NewsModel({
        writterId: req.body.writterId,
        message: req.body.message,
        title: req.body.title,
        picture: pic,
        video: req.body.video
    });

    try {
        const news = await newNews.save();
        return res.status(201).json(news);
    } catch (err) {
        return res.status(400).send(err);
    }
};

// UPDATE NEWS
module.exports.updateNews = (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID Unknown : ' + req.params.id);
    }

    const updatedRecord = {
        message: req.body.message
    }

    NewsModel.findByIdAndUpdate(
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

// DELETE NEWS
module.exports.deleteNews = (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID Unknown : ' + req.params.id);
    }

    NewsModel.findByIdAndRemove(
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