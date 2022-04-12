import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import Layout from '../components/Layout'

function Home() {
  return (
    <div>
      <Layout>
        Home
        <Link to={'/products'}>Products</Link>
        <Link to={'/invoices'}>Invoices</Link>
        <Link to={'/cart'}>Cart</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/about'}>About</Link>
        <Outlet />
      </Layout>
    </div>
  )
}

export default Home