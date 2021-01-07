const mongoose = require("mongoose")

const Comments = new mongoose.Schema({
    comment : {
        type:String,
        required:true
    },
    vid:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Videos"
    },
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "Auth"
    }
})

module.exports = mongoose.model("Comments", Comments)