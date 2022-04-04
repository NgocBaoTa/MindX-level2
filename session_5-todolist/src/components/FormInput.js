// import React, { useState } from 'react'

function FormInput(props) {
    const {inputValue, setInputValue} = props

  return (
    <form className='form-input' 
        onSubmit={(e) => {
            e.preventDefault();
            props.addTodo(inputValue)
            setInputValue('')
        }}>

        <input className='input'
            type='text' 
            placeholder='Enter something...' 
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value)
            }}
        />

        <button className='btn--add'>Add</button>
    </form>
  )
}

export default FormInput