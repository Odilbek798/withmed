import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { Shop } from './pages/Shop'
import Header from './components/Header/Header'

 const App = () => {
  return (
    <>
    <Header/>
          
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
    
    
    </>
  )
}

export default App
