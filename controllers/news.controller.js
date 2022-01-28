const NewsModel = require('../models/news.model');
const UserModel = require('../models/user.model');
const { uploadErrors } = require("../utils/errors.utils");
const ObjectID = require('mongoose').Types.ObjectId;
const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

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
    let fileName;

    if (req.file !== null) {
        try {
            if (
                req.file.detectedMimeType !== 'image/jpg' &&
                req.file.detectedMimeType !== 'image/png' &&
                req.file.detectedMimeType !== 'image/jpeg'
            )
                throw Error('invalid file');

            if (req.file.size > 1000000000)
                throw Error('max size');
        } catch (err) {
            const errors = uploadErrors();
            return res.status(201).json({ errors });
        }

        const fileName = req.body.writterId + Date.now() + '.jpg';

        await pipeline(
            req.file.stream,
            fs.createWriteStream(
                `${__dirname}/../client/public/uploads/news/${fileName}`
            )
        );
    }

    const newNews = new NewsModel({
        writterId: req.body.writterId,
        message: req.body.message,
        picture: req.file !== null ? './uploads/news/' + fileName : '',
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