const router = require("express").Router();
const tokenvetifying = require("../../../token");
const Auth = require("../../../DataBase/Auth/Auth");


router.post("/", tokenvetifying, (req, res)=>{
    const email = req.body.email
    const username = req.body.username
    const displayname = req.body.displayname
    Auth.findOneAndUpdate({email:email}, {email:email, username:username, displayname:displayname})
    .then((data)=>{
        console.log(data);
        res.json({
            message : "Update Successfully"
        })
    })
    .catch((err)=>{
        console.log(err);
        res.json({
            message : "SOmthing Wrong"
        })
    })
})



module.exports = router