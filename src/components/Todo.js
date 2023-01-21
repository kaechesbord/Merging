import React from 'react'
import TodoItem from './TodoItem'

const Todo = ({tasks, deleteTodo, openModal}) => {
  return (
    tasks.map(task => {
        return <TodoItem task = {task} key = {task.id} deleteTodo={deleteTodo} openModal={openModal}/>
    })
  )
}

export default Todo
