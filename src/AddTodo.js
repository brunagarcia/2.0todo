import React, { useState } from 'react'


const AddTodo = () => {
  //Using Hooks
  const [todo, setTodo] = useState("Example")

  const handleInput = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Todo: ${todo}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add your todo:
          <input type="text" name="name" onChange={handleInput} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>Adding TODO: {todo}</p>
    </div>
  )
}

export default AddTodo
cd 