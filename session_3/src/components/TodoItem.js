import React from "react";
import '../App.css'
import CardItem from "./CardItem";

function TodoItem(props) {
    return (
        <CardItem>
            <li className="todo_item">
                {props.text} 
                <button 
                    className="btn--delete" 
                    // onClick={(e) => {
                    //     e.preventDefault()
                    // }}
                >Delete</button>
            </li>
        </CardItem>
    )
}

export default TodoItem;