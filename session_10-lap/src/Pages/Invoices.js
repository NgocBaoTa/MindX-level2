import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Invoices() {
  return (
    <div>
        Invoices
        <Outlet />
        <Link to='/invoices/*'></Link>
    </div>
  )
}

export default Invoices