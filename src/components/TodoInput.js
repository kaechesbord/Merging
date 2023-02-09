import React, {useRef} from 'react'
import "./TodoInput.css"
const TodoInput = ({createTodo}) => {
  const input = useRef("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    createTodo(input.current.value)
    input.current.value = ""
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" ref={input} required className='input'/>
      </form>
  )
}

export default TodoInput
