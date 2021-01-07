const router = require("express").Router();
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Auth = require("../../../DataBase/Auth/Auth");
const Profiles = require("../../../DataBase/Profiles/Profiles");
// const Img = require("../../../DataBase/Profiles/Img");

async function hashPassword(password) {
    const salt = await bycrypt.genSalt(10);
    var password = await bycrypt.hash(password, salt);
    return password;
}

function getToken(email) {
    var token = jwt.sign({ email: email }, process.env.JWT_TOKEN);
    return token;
}

router.post("/", async (req, res) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var displayname = req.body.displayname
    var usernameregex = /^([a-z0-9]{5,})$/.test(username);
    if (!usernameregex) {
        res.json({
            message: "Username Only Content Numer ANd Degits mininum 5 digit",
        });
        res.end();
    } else {
        password = await hashPassword(password);
        // checkemail And Username is Uniq
        Auth.findOne({ email: email })
            .then((data) => {
                if (data === null) {
                    Auth.findOne({ username: username })
                        .then((data) => {
                            if (data === null) {
                                const creatuser = new Auth({
                                    username: username,
                                    email: email,
                                    password: password,
                                    displayname : displayname,
                                    img : null
                                });
                                creatuser
                                    .save()
                                    .then((data)=>{
                                        token = getToken(
                                            data.email
                                        );
                                        console.log(" ");
                                        console.log(`http://localhost:8080/account/verify/${token}`);
                                        console.log(" ");
                                        console.log(token);
                                        res.status(202).json({
                                            message:
                                                "Please Varifying Email",
                                        });
                                    })
                                    .catch((err)=>{
                                        console.log(err);
                                        res.status(204).json({
                                            message: "Somthing Wrong, Please Try Again",
                                        });
                                    })
                            } else {
                                res.status(200).json({
                                    message: "Username is Already Exist",
                                });
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status(204).json({
                                message: "Somthing Wrong, Please Try Again",
                            });
                        });
                } else {
                    res.status(200).json({
                        message: "Email is Already Exist",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(204).json({
                    message: "Somthing Wrong, Please Try Again",
                });
            });
    }
});

module.exports = router;
