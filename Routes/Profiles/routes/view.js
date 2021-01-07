const router = require("express").Router();
const tokenvetifying = require("../../../token");
const Auth = require("../../../DataBase/Auth/Auth");

router.get("/", tokenvetifying, (req, res) => {
    if (req.user) {
        Auth.findOne({ email: req.user.email }, { __v: 0 })
            .then((data)=>{
                res.json(data)
            })
            .catch((err)=>{
                res.json({
                    message : "Somthing Got Wrong"
                })
            })
    } else {
        res.json({
            mes: "Login Requird",
        });
    }
});

module.exports = router;
