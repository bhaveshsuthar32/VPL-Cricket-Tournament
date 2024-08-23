import React, { Profiler } from 'react'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Login from './User/pages/login'
import SignUp from './User/pages/sign'
import Profile from './User/pages/profile/profile'
import EditProfile from './User/pages/profile/editProfile'
import AddTeam from './User/pages/addTeam'
import Navbar from './User/components/Navbar'
import Halloffame from './User/pages/Halloffame'
import Teamview from './User/pages/Teamview'
import Sponser from './User/pages/Sponser'
import Team from './User/pages/Team'
import Advertiser from './User/pages/Advertiser'
import Rules from './User/pages/Rules'
import Aboutus from './User/pages/Aboutus'
import Contactus from './User/pages/Contactus'
import Home from './User/pages/Home'


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


         <Route path="/nav" element={<Navbar />} />
        <Route path="/halloffame" element={<Halloffame />} />
        <Route path="/teamview" element={<Teamview />} />
        <Route path="/sponser" element={<Sponser />} />
        <Route path="/team" element={<Team />} />
        <Route path="/advertiser" element={<Advertiser />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
