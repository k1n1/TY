const jwt = require("jsonwebtoken")
module.exports = function(req, res,next){
    const token = req.header("AuthToken")
    if (!token && token === null && token === undefined){
        next()
    }
    try{
        const varify = jwt.verify(token, process.env.JWT_TOKEN)
        req.user = varify
        next()
    }catch(err){
        next()
    }
}
