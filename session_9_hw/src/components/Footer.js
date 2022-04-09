import React, { useContext } from 'react'
import { LangContext } from '../contexts/LangContext'

function Footer() {
  const {lang, setLang} = useContext(LangContext)

  const changeOption = (e) => {
    setLang(e.target.value)
  }

  return (
    <div className='footer'>
        <select value={lang} onChange={changeOption} className='selection'>
            <option className='option' value='VI'>VI</option>
            <option className='option' value='EN'>EN</option>
        </select>
    </div>
  )
}

export default Footer