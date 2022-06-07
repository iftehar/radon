const booksModel=require('../models/books')

const bookModel1 = async function(req, res){
    let.data=request.body

    let savedData= await bookModel1.create(data)
    res.send({msg:savedData})

}

// module.exports()
