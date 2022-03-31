import {useState} from 'react' 
import Card from './Card'
import '../App.css';

function TodoHeader(props) {
    const [value, stateValue] = useState('')

    const inputChange = (e) => {
        stateValue(e.target.value)
    }
    return (
        <Card>
            <header className="todo_header">
                <h1>TODO</h1>

                <input 
                    type="text" 
                    className="header_input" 
                    placeholder='Enter Something...'
                    value={value} 
                    onChange={inputChange}
                ></input>

                <button 
                    className="btn--add" 
                    onClick={(e) => {
                        e.preventDefault();
                        if(value !== '') {
                            props.addTodo(value);
                            stateValue('')
                        }
                    }
                }>Add</button>
            </header>   
        </Card>
    )
}

export default TodoHeader;