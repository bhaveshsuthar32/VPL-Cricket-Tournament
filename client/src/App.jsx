import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/user/pages/Home';
// import Navbar from './pages/user/components/Navbar';
import HallOfFame from './pages/pages/user/pages/HallOfFame';
import TeamView from './pages/user/pages/TeamView';
import Sponser from './pages/user/pages/Sponser';
import Team from './pages/user/pages/Team';
import Advertiser from './pages/user/pages/Advertiser';
import Rules from './pages/user/pages/Rules';
import AboutUs from './pages/user/pages/AboutUs';
import ContactUs from './pages/user/pages/ContactUs';
// import Profile from './pages/user/pages/Profile';
// import Profileform from './pages/user/pages/Profileform';
import Profile from './pages/user/pages/Profile';
import EditProfile from './pages/user/pages/Profile/EditProfile';
import Teamform from './pages/user/pages/Teamform';


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
import Login from './pages/user/pages/Login';
import SignUp from './pages/user/pages/SignUp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/nav" element={<Navbar />} /> */}
        <Route path="/halloffame" element={<HallOfFame />} />
        <Route path="/teamview" element={<TeamView />} />
        <Route path="/sponsor" element={<Sponser />} />
        <Route path="/team" element={<Team />} />
        <Route path="/advertiser" element={<Advertiser />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile/>} />
        <Route path="/addteam" element={<Teamform />} />

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
    </Router>
  );
}

export default App;