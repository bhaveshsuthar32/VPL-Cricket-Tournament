import React, { Profiler } from 'react'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Home from './User/pages/home'
import Login from './User/pages/login'
import SignUp from './User/pages/sign'
import Profile from './User/pages/profile/profile'
import EditProfile from './User/pages/profile/editProfile'
import AddTeam from './User/pages/addTeam'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home />} /> 
         <Route path='/login' element = {<Login /> } />
         <Route path='/signup' element = {<SignUp /> } />
         <Route path='/profile' element = {<Profile /> } />
         <Route path='/editProfile' element = {<EditProfile /> } />
         <Route path='/addTeam' element = {<AddTeam /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
