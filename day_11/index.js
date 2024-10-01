const express = require('express')
const app = express()

app.use(express.json())

let currentId = 3

let todos = [
    {
        id: "1",
        name: "Todo 1",
        isDone: false
    },
    {
        id: "2",
        name: "Todo 2",
        isDone: false
    }
]

app.get("/", (req,res) => {
    res.send("Server working")
})

app.get("/todos", (req,res) => {
    res.json(todos);
})

app.get("/todos/:id", (req,res) => {
    const todoById = todos.filter(todo => todo.id === req.params.id)[0]
    res.json(todoById);
})

app.post("/todos/create", (req, res) => {
    let {name} = req.body
    let newTodo = {
        name,
        id: String(currentId++),
        isDone: false
    }
    todos.push(newTodo);
    res.status(201).json({
        todo: newTodo,
        messgae: "Todo created successfully"
    });
});

app.patch("/todos/update", (req,res) => {
    const {id, name, isDone} = req.body
    let updatedTodo;
    todos = todos.map((todo) => {
        if(todo.id === id){
            updatedTodo = {...todo, name, isDone}
            return updatedTodo;
        }
        return todo
    })
    res.json({
        message: "Updated successfully",
        todo: updatedTodo
    })
})

app.delete("/todos/delete", (req,res) => {
    const oldTodo = todos.filter(todo => todo.id === req.body.id)[0]
    todos = todos.filter(todo => todo.id !== req.body.id)
    res.json({
        todo: oldTodo,
        messgae: "Todo deleted successfully"
    });
})

app.listen(8000, () => {
    console.log("server on port 8000")
})