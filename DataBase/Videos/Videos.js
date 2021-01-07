const mongoose = require("mongoose")

const Videos = new mongoose.Schema({
    title : {
        type:String,
        required:true,
    },
    url : {
        type:String,
        required: true
    },
    description : {
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Auth"
    },
    creater : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Creater"
    },
    comments : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
    },
})


module.exports = mongoose.model("Videos", Videos)