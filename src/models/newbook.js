const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newbookSchema = new mongoose.Schema({
    Name: String,
    newAuthor_id: {
        type: ObjectId,
        ref: "newAuthor"
    },
    price : Number,
    rating: Number,
    newpublisher_id: {
        type: ObjectId,
        ref: "newPublisher"
    }
}, { timestamps: true });

module.exports = mongoose.model('newBook', newbookSchema)