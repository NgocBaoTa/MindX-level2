import React, { useContext, useState } from 'react'
import { LangContext } from '../contexts/LangContext'
import { LoginContext } from '../contexts/LoginContext'

function Content(props) {
    const {login, setLogin} = useContext(LoginContext)
    const {lang} = useContext(LangContext)
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setUser(value)
        setLogin(true)
        setValue('')
    }

  return (
    <div className='content'>
        {
            login === true ? (
                lang === 'EN' ? (
                    <h3 className='welcome'>Welcome!</h3>
                ) : (
                    <h3 className='welcome'>Xin chào!</h3>
                )
            ) : (
                <div className='form_login'>
                    {
                        lang === 'EN' ? (
                            <div className='login-header'>LOGIN</div>
                        ) : (
                            <div className='login-header'>ĐĂNG NHẬP</div>
                        )
                    }

                    <div className='login-content'>
                        <input type='text'
                            placeholder='Username...'
                            className='login-input'
                            value={value}
                            onChange={(e) => {setValue(e.target.value)}}
                        />

                        {
                            lang === 'EN' ? (
                                <button onClick={handleSubmit} className='login-btn'>Login</button>
                            ) : (
                                <button onClick={handleSubmit} className='login-btn'>Đăng nhập</button>
                            )
                        }
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Content