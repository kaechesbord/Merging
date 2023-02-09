import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TodoItem.css";

const TodoItem = ({ task, deleteTodo, openModal, newTitle, tasks,editId }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  
  const deleteTodoHandler = () => {
    deleteTodo(task.id);
  };
  
  const openModalHandler = () => {
    openModal(task.id);
  };
  const handleCompletion = () => {
    if (isCompleted) {
      setIsCompleted(false);
    } else {
      setIsCompleted(true);
    }
  };

  const classNameIsCompleted = async () => {
    await axios.put(`http://localhost:3000/todos/${task.id}`, {
      isCompleted: isCompleted,
    });
  };
  const found = tasks.find((task) => task.id === editId)
  useEffect(() => {
    found.title = newTitle
    console.log(found)
  },[found])
   
  return (
    <>
      <div
        onClick={handleCompletion}
        className={isCompleted ? "checked h1" : "todoItem"}
      >
        
          <h1>{newTitle ? newTitle : task.title}</h1>
  
      </div>
      <div className="buttons">
        <button className="button" onClick={openModalHandler}>
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
