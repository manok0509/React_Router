import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Notfound from './components/Notfound'
import Products from './components/Products'
import Dashboard from './components/Dashboard'
import Orders from './components/dashboard/Orders'
import Profile from './components/dashboard/Profile'
import Setting from './components/dashboard/Setting'
import Checkout from './components/Checkout'
import { UserContext } from './components/ContextUser'
import Protectedroute from './Protectedroute'
import Login from './components/Login'
function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(false)
  return (
    <UserContext.Provider value={user}>
      <nav>
        <Link to='/'>Home</Link>|
        <Link to='/about'>About</Link>|
        <Link to='/contact'>Contact</Link>|
        <Link to='/products'>Products</Link>|
        <Link to='/dashboard'>Dashboard</Link>
      </nav>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route element={<Protectedroute />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />}></Route>
          <Route path='/products/:number' element={<Products />}></Route>
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='orders' element={<Orders />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='setting' element={<Setting />}></Route>
          </Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/checkout/:product_id' element={<Checkout />}></Route>
        </Route>

        <Route path='*' element={<Notfound />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
