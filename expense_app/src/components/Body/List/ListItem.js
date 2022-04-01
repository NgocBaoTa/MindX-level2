import CardListItem from "./CardListItem";
import ListItemDate from "./ListItemDate";
import {FaRegTrashAlt} from "react-icons/fa";
import {FiEdit} from "react-icons/fi";
import {BsCheckCircle} from "react-icons/bs";
import { useState } from "react";

const ListItem = (props) => {
    const deleteItem = (id) => {
        props.setListItem(props.listItem.filter((item) => {return item.id !== id}))
    }

    const [showDone, setShowDone] = useState(false)

    const checkDone = () => {
        setShowDone(!showDone)
    }

    return (
        <CardListItem>
            <li className='list_item'>
                <ListItemDate year={new Date(props.date).getFullYear()} 
                    month={new Date(props.date).getMonth() + 1}  
                    day={new Date(props.date).getDate()}  
                />

                <div className='list_item-name'>
                    {props.name}
                </div>

                <div className='list_item-amount'>
                    {props.amount}
                </div>

                <div className="list_item-icons">
                    <BsCheckCircle className="item_icon-done" 
                        onClick={checkDone}
                        style={{color: showDone ? 'rgb(130, 235, 130)' : 'white'}}
                    />
                    <FiEdit className="item_icon-edit" />
                    <FaRegTrashAlt className="item_icon-delete" onClick={() => deleteItem(props.id)}/>
                </div>
            </li>
        </CardListItem>
    )
}

export default ListItem;