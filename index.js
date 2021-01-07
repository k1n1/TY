const express = require('express');
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const getUser = require("./token")
mongoose.connect("mongodb://localhost:27017/YouTube", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },
    () => console.log("DB Connectd")
)




// Rouetr imports
const AuthRouter = require("./Routes/Auth/urls")
const ProfileRoute = require("./Routes/Profiles/urls")




// Middleware
app.use(express.json())
app.use(cors())
app.use(express.static("D:\\Projects\\Backend\\media\\profiles"))
app.use("/account", AuthRouter)
app.use("/profile", ProfileRoute)

app.get("/", (req, res) => {
    res.json({
        "message": "Work"
    })
})


app.get("/getuser", getUser, (req, res)=>{
    if(req.user){
        res.status(200).json({
            user : req.user
        })
    }
    else{
        res.status(202).json({
            "message" : "Not Data Found"
        })
    }
    
    
})

app.listen(3000);