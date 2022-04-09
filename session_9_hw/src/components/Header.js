import React, { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'

function Header(props) {
  const {login} = useContext(LoginContext)
  return (
    <div className='header'>
        <h5 className='header-name'>MindX</h5>

        {
          login === true ? (
            <h6 className='header-welcome'>Welcome, {props.user}</h6>
          ) : (
            <h6 className='header-welcome'>Login</h6>
          )
        }
    </div>
  )
}

export default Header