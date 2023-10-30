const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "author": {
        type: String,
        required: true
    },
    "summary": {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

module.exports = BookSchema;