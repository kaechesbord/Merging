import React, { useState } from "react";
import axios from "axios";
import "./TodoItem.css";

const TodoItem = ({ task, deleteTodo, openModal }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const deleteTodoHandler = () => {
    deleteTodo(task.id);
  };
  const handleCompletion = () => {
    if (isCompleted) {
      setIsCompleted(false);
    } else {
      setIsCompleted(true);
    }
  };
  const classNameIsCompleted = async() => {
    await axios.put(`http://localhost:3000/todos/${task.id}`, {
      isCompleted: isCompleted
    });
  }
  return (
    <>
      <div
        onClick={handleCompletion}
        className={isCompleted ? "checked h1" : "todoItem"}
      >
        <h1>{task.title}</h1>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => openModal(task.id)}>
          EDIT
        </button>
        <button className="button" onClick={deleteTodoHandler}>
          DELETE
        </button>
      </div>
    </>
  );
};

export default TodoItem;