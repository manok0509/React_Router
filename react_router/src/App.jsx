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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to='/'>Home</Link>|
        <Link to='/about'>About</Link>|
        <Link to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />
      </Routes>


    </>
  )
}

export default App
