import App from './_app';
import TodoList from '../src/TodoList'
import AddTodo from '../src/AddTodo'

export default function Index() {
  return (
    <main>
      <TodoList />
      <AddTodo />
    </main>
  );
}