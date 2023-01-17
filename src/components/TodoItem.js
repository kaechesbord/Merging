import React from "react";
import "./TodoItem.css";

const TodoItem = ({ task, deleteTodo }) => {
  
  const deleteTodoHandler = () => {
    deleteTodo(task.id)
  }

  return (
    <div className="todoItem">
      <div className="buttons">
        <h1>{task.title}</h1>
        <button>EDIT</button>
        <button onClick = {deleteTodoHandler}>DELETE</button>
      </div>
    </div>
  );
};

export default TodoItem;
