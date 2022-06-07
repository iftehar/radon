const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    name: String,
    aurthor_id: Number,
    price: Number,
    rating: Number
})

module.exports=mongoose.model('author', booksSchema )