import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoList, settodoList] = useState([])
  // const [done, setDone] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const notDoneTodos = todoList.filter((todo) => !todo.done)

  const addTodo = (text) => {
    settodoList([
      ...todoList, 
      {
        id: uuidv4(),
        done: false,
        text: text
      }
    ])

  }

  const handleInputClick = (newTask, index) => {
    let newTodoList = [...todoList]
    newTodoList[index] = newTask

    settodoList(newTodoList)
    // setDone(newTodoList[index].done)
  }

  const removeTask = (id) => {
    const newTodoList = todoList.filter((item) => {return item.id !== id})
    settodoList(newTodoList)
  }

  const editTask = (id, newData) => {
    const newTodoList = todoList.map((item) => {
      let newItem = item
      if(newItem.id === id) {
        newItem = {...item, text: newData}
      }
      
      return newItem
    })

    settodoList(newTodoList)
  }

  return (
    <div className="App">
      <h2>Todo List</h2> 
      <FormInput addTodo={addTodo} inputValue={inputValue} setInputValue={setInputValue}/>
      <TodoList todoData={todoList} 
          handleInputClick={handleInputClick} 
          removeTask={removeTask} 
          editTask={editTask} 
          // done={done}
          // setDone={setDone}
          inputValue={inputValue}
          setInputValue={setInputValue}
      />
      <div className='total'>{notDoneTodos.length} tasks left!</div>
    </div>
  );
}

export default App;
