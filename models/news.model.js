const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema(
    {
        writterId: {
            type: String,
            required: true
        },
        message: {
            type: String,
            trim: true, // retire les blancs en début et fin de chaine
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

module.exports = mongoose.model('news', NewsSchema);