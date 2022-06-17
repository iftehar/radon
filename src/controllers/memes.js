const axios = require("axios")

let memes = async function(req,res){
    try{
        let memeId = req.query.templed_Id
        let text0 = req.query.text0
        let text1 = req.query.text1

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({msg: data})

    }
    catch{
        res.status(500).send({msg:err.message})
    }
}

module.exports.memes = memes