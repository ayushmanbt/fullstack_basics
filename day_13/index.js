const express = require("express")
const app = express()

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

const handlebars = require('express-handlebars')
const path = require('path')

const viewsPath = path.join(__dirname, "views")
app.use(express.static("./static"))

app.set("view engine", 'handlebars')
app.set("views", viewsPath)
app.engine('handlebars', handlebars.engine())

app.get("/:name", (req,res) => {
    const { name } = req.params
    res.render("index", {
        name,
        title: "Welcome"
    })
})

app.get("/index2", (req,res) => {
    res.render("index2")
})