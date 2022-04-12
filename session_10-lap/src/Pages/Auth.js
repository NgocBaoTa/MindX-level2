import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Layout from '../components/Layout'

function Auth() {
  return (
    <div>
      <Layout>
        Login Form
        <Outlet />
        <Link to={'/auth/login'}> Login </Link>
        
        <Link to={'/auth/register'}> Register </Link>
      </Layout>
    </div>
  )
}

export default Auth