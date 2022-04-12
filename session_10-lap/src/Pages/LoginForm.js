import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../contexts/Auth'

function LoginForm() {
    const navigate = useNavigate()
    const {login, setLogin} = useContext(LoginContext)
    const [userName, setUserName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setLogin(true)
        setUserName('')
        navigate('/')

    }

    useEffect(() => {
        if(login === true) {
        } else {
            navigate('/auth/login' || '/auth/register')
        }
    }, [login, navigate])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' 
                value={userName}
                placeholder='Enter your name...'
                onChange={(e) => setUserName(e.target.value)}
            />
        </form>
    </div>
  )
}

export default LoginForm