import React, { Component } from 'react'
import Header from './Header'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddTodo />
        <TodoList />
      </div>
    )
  }
}

export default App
