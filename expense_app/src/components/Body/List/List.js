import ListItem from "./ListItem";

const List = (props) => {
    return (
        <ul className='list'>
            {
                props.list.map((listItem, index) => (
                    <ListItem key={index} 
                        name={listItem.name} 
                        amount={listItem.amount} 
                        date={listItem.date}
                    />
                ))
            }
        </ul>
    )
}

export default List;