import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
        Products
        <Outlet />
        <Link to='/products/*'></Link>
    </div>
  )
}

export default Products