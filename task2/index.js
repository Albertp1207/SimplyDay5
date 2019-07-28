const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const todos = ["todo1","todo2","todo3"];

app.set('view engine', 'pug');
app.set('views', 'views')

app.get("/",(req,res) => {
    res.redirect("/todos")
})

app.get("/todos",(req,res) => {
    res.render("todos",{todos})
})
app.post("/todos",(req,res) => {
    const {todoText} = req.body
    if(todoText) {
        todos.push(req.body.todoText);

    }
    res.redirect("/todos")
})
app.put("/todos",(req,res) => {
    if(todos[req.body.index] === req.body.todoText ){
        res.status(401).json({status:"Unauthorized"})
    } else {
        todos[req.body.index] = req.body.todoText;
        res.status(200).json({status:"ok"})
    }
})
app.delete("/todos",(req,res) => {
    todos.splice(req.body.index,1);
    res.status(200).json({status:"ok"});
})

app.get("/todos/:id/edit",(req,res) => {
    const index = req.params.id;
    res.render("edit",{todoText: todos[index],index})
})
app.listen(3000);
