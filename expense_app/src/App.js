import './App.css';
import Add from './components/Add/Add';
import Body from './components/Body/Body';
import {useState} from 'react';
// import { v4 as uuidv4 } from 'uuid';

function App() {
  const [expenses, setExpenses] = useState([
    { 
        id: 'ca126a22-c733-4b91-b2e1-9dce6f1ac7cf',
        date: '2021-03-23',
        name: 'Book',
        amount: '$50'
    },

    {
        id: '568c4fdb-e359-4e6b-97b6-22b92406f531',
        date: '2021-03-23',
        name: 'Elec',
        amount: '$100'
    }
  ])

  const addExpense = (value) => {
      setExpenses([value, ...expenses])
  }

  return (
    <div className='App'>
      <Add addExpense={addExpense} expenses={expenses}/>

      <Body expenses={expenses} setExpenses={setExpenses}/>
    </div>
  );
}

export default App;
