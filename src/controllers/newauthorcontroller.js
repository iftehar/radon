const newAuthorModel = require('../models/newauthor')

const createnewAuthor= async function(req,res){
    let newAuthor=req.body
    let newAuthorCreated= await newAuthorModel.create(newAuthor)
    res.send({data: newAuthorCreated})

}
module.exports.createnewAuthor= createnewAuthor