import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

export default function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    <Route path="/Projects" element={<Projects/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
   </Routes>
  
   </BrowserRouter>
  )
}
