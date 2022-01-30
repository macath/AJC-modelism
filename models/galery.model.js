const mongoose = require('mongoose');

const GalerySchema = new mongoose.Schema(
    {
        writterId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            trim: true,
            maxlength: 100
        },
        message: {
            type: String,
            trim: true,
            maxlength: 500
        },
        picture: {
            type: String
        },
        video: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('galery', GalerySchema);