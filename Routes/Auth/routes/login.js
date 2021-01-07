const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");
const Auth = require("../../../DataBase/Auth/Auth");

async function hashPassword(password, hashpassword) {
    var password = await bycrypt.compare(password, hashpassword);
    return password;
}

router.post("/", async (req, res) => {
    const email = req.body.email;
    let password = req.body.password;
    let userImg = 
    Auth.findOne({ email: email, verified:true })
        .then((data) => {
            let hashpassword = hashPassword(password, data.password);
            hashpassword
                .then((pass) => {
                    if (pass === true) {
                        const token = jwt.sign(
                            {
                                email: data.email,
                                id: data._id,
                                user: data.username,
                                displayname : data.displayname,
                                img : data.img
                            },
                            process.env.JWT_TOKEN
                        );
                        res.status(200).json({
                            token: token,
                        });
                    } else {
                        // Password is Not Valid
                        res.status(203).json({
                            message: "Invalid credentials",
                        });
                    }
                })
                .catch((err) => {
                    res.status(203).json({
                        message: "Somthing Wrong, Please Try Again",
                    });
                });
        })
        .catch((err) => {
            res.status(203).json({
                message: "Email Not Valid or Email is Not Verified",
            });
        });
});

module.exports = router;
