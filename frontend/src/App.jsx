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



// Admin 
import Dashboard from './Admin/Pages/Dashboard';
import User from './Admin/Pages/User';
import ATeam from './Admin/Pages/ATeam';
import AAdvertiser from './Admin/Pages/AAdvertiser';
import SType from './Admin/Pages/SType';
import FSponser from './Admin/Pages/ASponser/FSponser';
import OSponser from './Admin/Pages/ASponser/OSponser';
import FSponserform from './Admin/Pages/ASponser/FSponserform';
import OSponserform from './Admin/Pages/ASponser/OSponserform';
import Advertiserform from './Admin/Pages/AAdvertiser/Advertiserform';
import STypeform from './Admin/Pages/SType/STypeform';
import AProfile from './Admin/Pages/AProfile';
import AProfileform from './Admin/Pages/AProfile/AProfileform';



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


         {/* Admin Route */}

         <Route path="/admin" element={<Dashboard />} />
        <Route path="/dashboard/users" element={<User />} />
        <Route path="/dashboard/teams" element={<ATeam />} />
        <Route path="/dashboard/advertisers" element={<AAdvertiser />} />
        <Route path="/dashboard/advertiserform" element={<Advertiserform />} />
        <Route path="/dashboard/sponsertype" element={<SType />} />
        <Route path="/dashboard/sponsertypeform" element={<STypeform />} />
        <Route path="/dashboard/fsponser" element={<FSponser />} />
        <Route path="/dashboard/fsponserform" element={<FSponserform />} />
        <Route path="/dashboard/osponser" element={<OSponser />} />
        <Route path="/dashboard/osponserform" element={<OSponserform />} />
        <Route path="/dashboard/profile" element={<AProfile />} />
        <Route path="/dashboard/profileform" element={<AProfileform />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
