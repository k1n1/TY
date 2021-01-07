const express = require("express")
const app = express()
const view = require("./routes/view")
const changeimg = require("./routes/changeimg")
const update = require("./routes/update")
app.use('/', view)
app.use("/changeimg", changeimg)
app.use("/update", update)

module.exports = app