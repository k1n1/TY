const mongoose = require("mongoose")
const Auth = new mongoose.Schema({
    username : {
        type:String,
        unique : true
    },
    displayname : {
        type:String,
        required : true
    },
    img : {
        type:String,
        default : null
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
    },
    verified : {
        type: Boolean,
        default : false
    },
})

module.exports = mongoose.model("Auth", Auth)



