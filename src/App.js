import { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (text) => {
    const id = todos[todos.length-1]?.id + 1 || 1;

    const newTodo = {id, text, checked: false};

    setTodos(prev => [...prev, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const checkTodo = (id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
  }

  return (
    <div className="app">
      <CreateTodo createTodo={createTodo} />

      <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    </div>
  );
}

export default App;
