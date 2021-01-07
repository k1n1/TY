const register = require('./routes/register')
const token = require("./routes/token")
const login = require("./routes/login")
const forgot = require("./routes/forgot")
const setnewpassword = require("./routes/setnewpassword")
const express  = require("express")
const app = express()



app.use("/register", register)
app.use("/varifying", token)
app.use("/login", login)
app.use("/forgot", forgot)
app.use("/setnewpassword", setnewpassword)
module.exports = app

