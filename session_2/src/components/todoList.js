import  React  from "react";
import  ListItem  from "./list_item.js";

function TodoList({list}) {
    return (
        <ul className = "list_body">
            {
                list.map((item) => (
                    <ListItem listItem={item.value} />
                ))
            }
        </ul>
    )
}

export default TodoList;