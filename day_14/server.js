const express = require("express")
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const hbs = require("express-handlebars")
const path = require("path")

const views = path.join(__dirname, "views")
const partialsDir = path.join(__dirname, "views", "partials")

// static folder
app.use(express.static(path.join(__dirname, 'static')))

app.set("view engine", "hbs")
app.set("views",views)
app.engine("hbs", hbs.engine({
    extname: ".hbs",
    partialsDir
}))


// app.get("/", (req, res) => {
//     res.render("index", {title: "Homepage"})
// })

// app.get("/i", (req, res) => {
//     res.render("index")
// })

// app.get("/dashboard", (req, res) => {
//     res.render("dashboard", {
//         isLoggedIn: false,
//         tasks: [
//             {name: "task1", isDone: false},
//             {name: "task2", isDone: false},
//             {name: "task3", isDone: false},
//             {name: "task4", isDone: false}
//         ]
//     })
// })

app.use(express.urlencoded())

let todos = [
    {
        id: 1,
        name: "Todo 1",
        isDone: "False"
    },
    {
        id: 2,
        name: "Todo 2",
        isDone: "True"
    }
]


app.get("/", (req, res) => {
    res.render("index", {
        todos
    })
})

app.post("/",(req,res) => {
   todos.push({
        name: req.body.todo,
        isDone: false
   })
   res.status(201).render("index", {todos, message: "Todo added"})
})