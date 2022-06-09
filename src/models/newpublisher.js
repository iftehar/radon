const mongoose = require('mongoose')

const newPublisher = new mongoose.Schema ({
    name: String,
    headQuater: String
})

module.exports = mongoose.model('newPublisher', newPublisher)