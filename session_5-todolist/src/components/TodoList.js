import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';
import '../App.css'
import CardItem from './CardItem';
import {FaRegTrashAlt} from "react-icons/fa";
import {FiEdit} from "react-icons/fi";
import {MdOutlineDoneAll} from "react-icons/md";
import {BsCheckCircle} from "react-icons/bs"; 

function TodoList(props) {
  return (
    <div className='todo-list'>
        <ul>
            {props.todoData.map((item, index) => {
                return <TodoItem 
                key={item.id} 
                dataItem={item} 
                index={index} 
                handleInputClick={props.handleInputClick}
                removeTask={props.removeTask}
                editTask={props.editTask}
                // done={props.done}
                inputValue={props.inputValue}
                setInputValue={props.setInputValue}/> 
            })}
        </ul>
    </div>
  )
}

export default TodoList;

function TodoItem(props) {
    const {dataItem, index} = props
    const [edit, setEdit] = useState(false)
    const [newData, setNewData] = useState(dataItem.text)
    const handleTextChange = (e) => {
        setNewData(e.target.value)
    }
    // const [done, setDone] = useState(false)


    const HandleCheckDone = (e) => {
        !edit && 
                    
        props.handleInputClick({
            id: uuidv4(),
            text: dataItem.text,
            done: !dataItem.done
        }, index)
    }

    return (
        <CardItem> 
            <li key={dataItem.id} className='todo-item'>
                <div className='item-data'>
                    {
                        edit === true ? (
                            <span>
                                <input type='text' 
                                    className='textarea' 
                                    value={newData} 
                                    onChange={handleTextChange}
                                />
                            </span>
                        ) : (
                            <span className='todo-text'>{dataItem.text}</span>)
                    }

                    {/* <input type='radio' checked={dataItem.done} /> */}
                
                </div>

                <div className='item-action'>
                    <BsCheckCircle className='btn btn--done'

                        onClick={() => {
                            HandleCheckDone()

                        //     !edit && 
                            
                        //         props.handleInputClick({
                        //             id: uuidv4(),
                        //             text: dataItem.text,
                        //             done: !dataItem.done
                        //         }, index)
                        }}

                        // style={done? {backgroundColor:'#f45d48'} : null}
    
                    />

                    {edit === true ? (
                        <MdOutlineDoneAll
                            className='btn btn--submit'
                            onClick={() => {
                                setEdit(false)
                                props.editTask(dataItem.id, newData)
                            }}
                        />
                    ) : (
                        <FiEdit
                            className='btn btn-edit'
                            onClick={() => {
                                // HandleFocusInput()
                                setEdit(true)
                                // props.editTask(dataItem.id)

                            }}
                        />
                    )}

                    <FaRegTrashAlt
                        className='btn btn--delete'
                        onClick={() => {
                            props.removeTask(dataItem.id)
                        }}
                    />
                </div>
            </li> 
        </CardItem>
    ) 
}