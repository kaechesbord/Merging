const express = require("express");
const cors = require("cors")
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let todos = [
  {
    title: "Do Tasks",
    isCompleted: false,
    id: "1",
  },
  {
    title: "Eat",
    isCompleted: false,
    id: "2",
  },
  {
    title: "Clean",
    isCompleted: false,
    id: "3",
  },
];

app.get("/todos", (req, res) => {
  res.send(todos);
});
app.post("/todos", (req, res) => {
  /*if (Object.keys(req.body).length === 0) {
    return res.status(400).send("Please enter required data");
  }
  if (req.body.title === "" || req.body.isCompleted === "" || req.body.id === "") {
    return res.status(400).send("Please enter all required data");
  }
  if (req.body.title === undefined || req.body.isCompleted === undefined || req.body.id === undefined) {
    return res.status(400).send("Please enter all required data");
  }
  const todo = todos.find((todo) => todo.id === req.body.id)
  if (todo) {
    return res.status(400).send("ID already in use!");
  }*/
  todos.push(req.body);
  res.send(todos);
});
app.patch("/todos/:id", (req, res) => {
  const { id } = req.params;
  const filteredTodos = todos.filter((todo) => todo.id !== id)
  const todo = todos.find((todo) => todo.id === id)

  if (todo) {
    todo.isCompleted = req.body.isCompleted;
    filteredTodos.push(todo)
    todos = filteredTodos.sort((a, b) => a.id - b.id)

  } else {
    return res.status(400).send("Task doesn't exist!");
  }

  res.send(todos)
});
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === id)
  /*if (!todo) {
    return res.status(400).send("Task doesn't exist!");
  }*/
  todos = todos.filter((todo) => todo.id !== id)
  res.send(todos)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});