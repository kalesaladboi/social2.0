const express = require("express")
const cors = require("cors")
const db = require("./db")
const controller = require("./controller")

const PORT = process.env.PORT || 6969

const app = express()

app.use(express.json())
app.use(cors())

app.post("/register", controller.doRegister)
app.post("/login", controller.doLogin)

app.listen(PORT)