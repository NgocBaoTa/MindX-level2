import CardListItem from "./CardListItem";
import ListItemDate from "./ListItemDate";

const ListItem = (props) => {
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
            </li>
        </CardListItem>
    )
}

export default ListItem;