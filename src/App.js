import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import axios from "axios";
import "./App.css";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/todos");
      setTasks(res.data);
    };
    fetchData();
  }, []);

  const createTodo = async (text) => {
    const res = await axios.post("http://localhost:3000/todos", {
      title: text,
    });
    setTasks(res.data);
  };
  const deleteTodo = async (id) => {
    try{
      await axios.delete(`http://localhost:3000/todos/${id}`);
      setTasks(
        tasks.filter((task) => {
          return task.id !== id;
        })
      );
    }
    catch{
      alert("NOT GOOD")
    }
  };
  return (
    <div className="todoapp stack-large">
      <div className="container">
        <Header />
        <TodoInput createTodo={createTodo} />
        {tasks ? <Todo tasks={tasks} deleteTodo={deleteTodo} /> : <Preloader />}
      </div>
    </div>
  );
}

export default App;

