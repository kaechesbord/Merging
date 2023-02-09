import React from "react";
import TodoItem from "./TodoItem";

const Todo = ({ tasks, deleteTodo, openModal,newTitle, editId }) => {
  return (
    <div>
      {Array.isArray(tasks)
        ? tasks.map((task) => {
            return (
              <TodoItem
                task={task}
                key={task.id}
                deleteTodo={deleteTodo}
                openModal={openModal}
                newTitle={newTitle}
                tasks={tasks}
                editId={editId}
              />
            );
          })
        : null}
    </div>
  );
};

export default Todo;
