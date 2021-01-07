const mongoose = require("mongoose")

const Profiles = new mongoose.Schema({
    auth : {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Auth",
        unique : true
    },
    
})

module.exports = mongoose.model("Profiles", Profiles)