import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import Auth from './Pages/Auth';
import Products from './Pages/Products';
import ProductItem from './Pages/ProductItem';
import Invoices from './Pages/Invoices';
import Invoice from './Pages/Invoice';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import About from './Pages/About';
import LoginForm from './Pages/LoginForm';
import Register from './Pages/Register';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from './contexts/Auth';


function App() {
  const {login} = useContext(LoginContext)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
        {
          login === true ? (
            <>
              <Route path='products' element={<Products />}>
                <Route path=':id' element={<ProductItem />}></Route>
              </Route>
              <Route path='invoices' element={<Invoices />}>
                <Route path=':id' element={<Invoice />}></Route>
              </Route>
              <Route path='cart' element={<Cart />}></Route>
              <Route path='profile' element={<Profile />}></Route>
              <Route path='about' element={<About />}></Route>
            </>
          ) : (
            <>
              <Route path='products' element={<LoginForm /> || <Register />}>
                <Route path=':id' element={<LoginForm /> || <Register />}></Route>
              </Route>
              <Route path='invoices' element={<LoginForm /> || <Register />}>
                <Route path=':id' element={<LoginForm /> || <Register />}></Route>
              </Route>
              <Route path='cart' element={<LoginForm /> || <Register />}></Route>
              <Route path='profile' element={<LoginForm /> || <Register />}></Route>
              <Route path='about' element={<LoginForm /> || <Register />}></Route>
            </>
          )
        }
        </Route>
        

        <Route path='/auth' element={<Auth />}>
          <Route path='login' element={<LoginForm />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>

        <Route path='*' element={
          <div>
            404 Page not found
            <Link to='/'>Return Home</Link>
          </div>
        }></Route>

      </Routes>
    </div>
  );
}

export default App;
