const router = require("express").Router()
const jwt = require("jsonwebtoken")
const bycrypt = require("bcrypt");
const Auth = require("../../../DataBase/Auth/Auth")

async function hashPassword(password) {
    const salt = await bycrypt.genSalt(10);
    var password = await bycrypt.hash(password, salt);
    return password;
}


router.post("/:id", async (req, res)=>{
    var password = req.body.password
    const confirmPassword = req.body.confirmPassword
    if(password === confirmPassword && password !== null){
        const verify = jwt.verify(req.params.id, process.env.JWT_TOKEN_FORGOT)
        const email = verify.email
        var password = await hashPassword(password)
        Auth.findOneAndUpdate({email:email}, {password : password})
        .then((data)=>{
            if(data === null){
                res.json({
                    message : "Email Not Valid"
                })
            }
            else{
                res.status(204).json({
                    message : "Password Chaned"
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    
})

module.exports = router