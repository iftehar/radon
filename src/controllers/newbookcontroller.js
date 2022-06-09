const newbookModel = require('../models/newbook')

const createnewBook = async function (req, res) {
    let newbook = req.body
    if(!newbook.newAuthor_id){
        return res.send({msg: "Error Author id Not Present"})
    }
    if(!newbook.newpublisher_id){
        return res.send({msg: "Error Publisher ID not Present"})
    }

    let newbookCreated = await newbookModel.create(newbook)
    res.send({ data: newbookCreated })
}

const getnewBooksData = async function (req, res) {
    let newbooks = await newbookModel.find()
    res.send({ data: newbooks })
}

const getbookAuthorDetails = async function (req, res) {
    let specificnewbook = await newbookModel.find().populate(['newAuthor_id','newpublisher_id'])
    res.send({ data: specificnewbook})
}

module.exports.createnewBook = createnewBook
module.exports.getnewBooksData = getnewBooksData
module.exports.getbookAuthorDetails = getbookAuthorDetails