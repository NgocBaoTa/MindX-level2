import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import {useState} from 'react'

function App() {
  const [todos, stateTodos] = useState([
    {
      text: 'Learn 1'
    },
    {
      text: 'Learn 2'
    }
  ])

  const addTodo = (value) => {
    stateTodos([{text: value}, ...todos])
  }

  return (
    <div className="App">
      <TodoHeader addTodo={addTodo}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
