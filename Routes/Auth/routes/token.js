const jwt = require("jsonwebtoken");
const router = require("express").Router();
const Auth = require("../../../DataBase/Auth/Auth");

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const user = jwt.decode(id, process.env.JWT_TOKEN);
    if (!user) {
        res.status(204).json({
            message: "Please Try Again",
        });
    } else {
        Auth.updateOne({ email: user.email }, { verified: true })
            .then((data) => {
                res.status(201).json({
                    message: "Email Is verified",
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(204).json({
                    message: "Please Try Again",
                });
            });
    }
});
module.exports = router;
