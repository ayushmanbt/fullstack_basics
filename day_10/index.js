const express = require("express")

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Hello from CSE 3rd year"})
})

app.post("/", (req, res) => {

    res.json({message: req.body})
})

app.listen(4000, () => {
    console.log("server listening on port 4000")
})