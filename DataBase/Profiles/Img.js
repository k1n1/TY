const mongoose = require("mongoose")

const Img = new mongoose.Schema({
    user : {
        type : String,
        required : true
    },
    profile_img : {
        type:String,
        default : null
    }
})

module.exports = mongoose.model("Img", Img)