import React from 'react'

function CardItem(props) {
  return (
    <div className='card-item'
    > 
        {props.children}
    </div>
  )
}

export default CardItem