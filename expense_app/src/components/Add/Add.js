import AddForm from "./AddForm";
import CardAdd from "./CardAdd";
import {useState} from 'react'

const Add = (props) => {
    const [show, setShow] = useState(false)

    return (
        <CardAdd>
            <div className='add'>
                <button className='btn--add'
                    onClick={() => {setShow(!show)}}
                >ADD NEW EXPENSE</button>

                {show && <AddForm addExpense={props.addExpense}/> }
            </div>
        </CardAdd>
    )
}

export default Add;