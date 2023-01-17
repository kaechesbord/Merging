import React from 'react'
import TodoItem from './TodoItem'

const Todo = ({tasks, deleteTodo}) => {
  return (
    tasks.map(task => {
        return <TodoItem task = {task} key = {task.id} deleteTodo={deleteTodo}/>
    })
  )
}

export default Todo
