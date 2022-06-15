const jwt =require('jsonwebtoken');

const validtoken = function(req, req, next) {
    let token =req.headers["x-auth-token"]
    if(!token) return res.send({msg:"token must be present"})

    let decodedToken = jwt.verify(token, "FunctionUp-radiom");
    if(!decodedToken) return res.send({msg:"token is invalid"})
    next()
}


function authorise(req, res, next) {
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "FunctionUp-radon");
    let userToBeModified = req.params.userId;
    let userLoggedIn = decodedToken.userId;
    if (userToBeModified != userLoggedIn)
        return res.send("msg:no such user exist");
    next();
}


module.exports.validtoken=validtoken
module.exports.authorise=authorise