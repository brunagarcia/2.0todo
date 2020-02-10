import React, { Component } from 'react'


export class AddTodo extends Component {
  //Using Hooks HA! 

  const 

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
          <input type="text" name="name" />
          </label>
        
          <label>
            Your currently task is ${``}
          <input type="submit" value="Submit" />
          </label>
        </form>
        
      </div>
    )
  }
}

export default AddTodo
