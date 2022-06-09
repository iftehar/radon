const mongoose = require('mongoose');

const newAuthorSchema = new mongoose.Schema( {
    author_Name: String,
    age:Number,
    address:String,
    rating:Number

}, { timestamps: true })

module.exports =mongoose.model('newAuthor', newAuthorSchema)

