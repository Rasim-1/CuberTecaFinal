import React from 'react'
import './App.css'
import Header from './Component/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Zone from './pages/Zone'
import Price from './pages/Price'
import Images from './pages/Images'
import Contact from './pages/Contact'

const App = () => {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Zone' element={<Zone/>} />
    <Route path='/Price' element={<Price/>} />
    <Route path='/Images' element={<Images/>} />
    <Route path='/Contact' element={<Contact/>} />
   </Routes>
   
   
   
   </>
  )
}

export default App