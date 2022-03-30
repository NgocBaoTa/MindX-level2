// import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList';

function App() {
  let list = [
    {
      value: 'Clean the bedroom'
    },

    {
      value: 'Buy some milk'
    },
    {
      value: "Jogging"
    },
    {
      value: "Learn react"
    },
    {
      value: "Doing exercise"
    }
  ]
  return (
    <div className="App">

      <input className="input" type="text" placeholder='Enter your task here...'/>
      <hr />

      <TodoList list={list}/>

      <div className="footer">
        <div>5 task left!</div>
        <div>MindX todolist</div>
      </div>
    </div>
  );
}

export default App;
