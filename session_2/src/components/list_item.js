import  React  from "react";

function ListItem({listItem}) {
    return (
        <li className="list_item">
            <input type="checkbox" class="checkbox"/>
            <p>
                {listItem}
            </p>
        </li>
    )
}

export default ListItem;