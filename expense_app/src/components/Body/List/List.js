import ListItem from "./ListItem";

const List = (props) => {
    return (
        <ul className='list'>
            {
                props.list.map((listItem) => (
                    <ListItem key={listItem.id} 
                        id={listItem.id}
                        name={listItem.name} 
                        amount={listItem.amount} 
                        date={listItem.date}
                        listItem={props.list}
                        setListItem={props.setList}
                    />
                ))
            }
        </ul>
    )
}

export default List;