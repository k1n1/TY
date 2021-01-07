const mongoose = require("mongoose")

const Creater = new mongoose.Schema({
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "Auth"
    },
    cid : {
        type:String,
        required:true
    },
    name : {
        type:String,
        required:true
    },
    img : {
        type:String,
        required:true
    }
})


module.exports = mongoose.model("Creater", Creater)
