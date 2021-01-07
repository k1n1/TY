const router = require("express").Router()
const jwt = require("jsonwebtoken")


function getToken(email) {
    var token = jwt.sign({ email: email }, process.env.JWT_TOKEN_FORGOT);
    return token;
}


router.post("/", (req, res)=>{
    const email = req.body.email
    token = getToken(email)
    console.log(token);
    res.json({
        message: "Please Check Email"
    })
    
})


module.exports = router