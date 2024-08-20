import React from 'react'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Home from './User/pages/home'
import Login from './User/pages/login'
import SignUp from './User/pages/sign'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home />} /> 
         <Route path='/login' element = {<Login /> } />
         <Route path='/signup' element = {<SignUp /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
