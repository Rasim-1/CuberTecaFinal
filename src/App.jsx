import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Price from './pages/Price'
import Images from './pages/Images'
import Contact from './pages/Contact'
import Zona from './pages/Zona'
import NavMenu from './Component/NavMenu/NavMenu'

const App = () => {
  return (
   <>
   <NavMenu/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Zona' element={<Zona/>} />
    <Route path='/Price' element={<Price/>} />
    <Route path='/Images' element={<Images/>} />
    <Route path='/Contact' element={<Contact/>} />
   </Routes>
   
   
   
   </>
  )
}

export default App