const authorModel= require("../models/author")

const authorModel1= async function (req, res) {
    let data= req.body
    if(!data.author_id) {
        res.send({msg:"author id is required"})
    }
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}



module.exports.authorModel= authorModel1