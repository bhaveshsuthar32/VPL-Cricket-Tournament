import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './User/pages/Home';
// import Navbar from './User/components/Navbar';
import HallOfFame from './User/pages/HallOfFame';
import TeamView from './User/pages/TeamView';
import Sponser from './User/pages/Sponser';
import Team from './User/pages/Team';
import Advertiser from './User/pages/Advertiser';
import Rules from './User/pages/Rules';
import AboutUs from './User/pages/AboutUs';
import ContactUs from './User/pages/ContactUs';
// import Profile from './User/pages/Profile';
// import Profileform from './User/pages/Profileform';
import Profile from './User/pages/Profile';
import EditProfile from './User/pages/Profile/editProfile';
import Teamform from './User/pages/Teamform';

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
import Login from './User/pages/Login';
import SignUp from './User/pages/SignUp';


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
        <Route path="/sponser" element={<Sponser />} />
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