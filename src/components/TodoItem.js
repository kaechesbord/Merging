import React from "react";
import "./TodoItem.css";
import axios from "axios";

const TodoItem = ({ task }) => {

  const deleteTodo = async () => {
    const res = await axios.delete("http://localhost:3000/todos")
    console.log(res.data);
  }
  return (
    <div className="todoItem">
      <div className="buttons">
        <h1>{task.title}</h1>
        <button>EDIT</button>
        <button onClick={deleteTodo}>DELETE</button>
      </div>
    </div>
  );
};

export default TodoItem;
