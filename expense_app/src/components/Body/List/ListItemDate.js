import React from 'react'

function ListItemDate(props) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return (
    <ul className='list_item-date'>
      <li>
        {
          months[props.month - 1]
        }
      </li>
      <li>
        {props.year} 
      </li>
      <li style={{fontSize: 16, fontWeight: "700"}}>
        {props.day} 
      </li>
    </ul>
  )
}

export default ListItemDate