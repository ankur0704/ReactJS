import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ABout from './pages/ABout'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<ABout/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>} />        
      </Routes>
    </div>
  )
}

export default App
