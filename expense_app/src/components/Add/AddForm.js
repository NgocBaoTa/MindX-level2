import { useState } from "react";

const AddForm = (props) => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    return (
        <div className='add_form'>
            <form>
                <div className='add_form-item'>
                    <label className="input-title">Name</label>
                    <input type='text' 
                        className='input-item' 
                        placeholder='Enter name here...'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>

                <div className='add_form-item'>
                    <label className="input-title">Amount</label>
                    <input type='text' 
                        className='input-item' 
                        placeholder='Enter amount here...'
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value)
                        }}
                    />
                </div>

                <div className='add_form-item'>
                    <label className="input-title">Date</label>
                    <input type='date' 
                        className='input-item' 
                        placeholder='Enter name here...'
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value)
                        }}
                    />
                </div>

                <div className='add_form-btns'>
                    <button className='add_form-btns--add' 
                        onClick={(e) => {
                            e.preventDefault();
                            if(name !== '' && date !== '' && amount !== '') {
                                props.addExpense({
                                    date: date,
                                    name: name,
                                    amount: amount
                                });
                            }
                            setAmount('')
                            setDate('')
                            setName('')
                        }}
                    >ADD</button>

                    <button className='add_form-btns--cancel'
                        onClick={(e) => {
                            e.preventDefault()
                            setAmount('')
                            setDate('')
                            setName('')  
                        }}
                    >CANCEL</button>
                </div>
            </form>
        </div>
    )
}

export default AddForm;