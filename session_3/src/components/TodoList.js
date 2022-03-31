import React from "react";
import Card from "./Card";
import TodoItem from "./TodoItem";
import '../App.css';

function TodoList(props) {
    return (
        <Card>
            <div>
                <ul className="todo_list">
                    {
                        props.todos.map((todo, index) => (
                            <TodoItem key={index} text={todo.text} />
                        ))
                    }
                </ul>
            </div>
        </Card>
    )
}

export default TodoList;