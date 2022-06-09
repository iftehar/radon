const newPublisherModel = require('../models/newpublisher')

const CreatenewPublisher = async function(req,res){
    let newPublisher = req.body
    let newPublisherCreated = await newPublisherModel.create(newPublisher)
    res.send({data: newPublisherCreated})
}

module.exports.CreatenewPublisher=CreatenewPublisher