import React from 'react'
import TodoItem from './TodoItem'

const Todo = ({tasks}) => {
    console.log(tasks)
  return (
    tasks.map(task => {
        return <TodoItem task = {task} key = {task.id}/>
    })
  )
}

export default Todo
