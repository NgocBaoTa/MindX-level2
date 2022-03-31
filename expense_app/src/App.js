import './App.css';
import Add from './components/Add/Add';
import Body from './components/Body/Body';
import {useState} from 'react'

function App() {
  const [expenses, setExpenses] = useState([
    {
        date: '2021-03-23',
        name: 'Book',
        amount: '$50'
    },

    {
        date: '2021-03-23',
        name: 'Elec',
        amount: '$100'
    }
  ])

  const addExpense = (value) => {
      setExpenses([value, ...expenses])
      console.log(expenses)
  }

  return (
    <div className='App'>
      <Add addExpense={addExpense} expenses={expenses}/>

      <Body expenses={expenses}/>
    </div>
  );
}

export default App;
