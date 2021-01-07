const mongoose = require("mongoose")

const Creater = new mongoose.Schema({
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