import { Outlet } from "react-router-dom";

import {
  Home,
  HallOfFame,
  TeamView,
  Sponser,
  Team,
  Advertiser,
  Rules,
  AboutUs,
  ContactUs,
  Profile,
  ProfileForm,
  TeamForm,
  Login,
  SignUp,
} from "../pages/user/pages";

import {
  Dashboard,
  Users,
  Team as AdminTeam,
  Advertiser as AdminAdvertiser,
  AdvertiserForm,
  SponserType,
  SponserTypeForm,
  FoodSponser,
  FoodSponserForm,
  OtherSponser,
  OtherSponserForm,
  HallOfFame as AdminHOF,
  Profile as AdminProfile,
  ProfileForm as AdminProfileForm,
  HallOfFameForm,
} from "../pages/admin/pages";

const userRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/halloffame",
    element: <HallOfFame />,
  },
  {
    path: "/teamview",
    element: <TeamView />,
  },
  {
    path: "/sponsor",
    element: <Sponser />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/advertiser",
    element: <Advertiser />,
  },
  {
    path: "/rules",
    element: <Rules />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/editprofile",
    element: <ProfileForm />,
  },
  {
    path: "/addteam",
    element: <TeamForm />,
  },

];

function AdminLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}


const adminRoutes = [
  {
    path: "/admin/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "teams", element: <AdminTeam /> },
      { path: "advertisers", element: <AdminAdvertiser /> },
      { path: "advertiserform", element: <AdvertiserForm /> },
      { path: "advertiserform/:id", element: <AdvertiserForm /> },
      { path: "sponsertype", element: <SponserType /> },
      { path: "sponsertypeform/:id?", element: <SponserTypeForm /> },
      { path: "fsponser", element: <FoodSponser /> },
      { path: "fsponserform", element: <FoodSponserForm /> },
      { path: "fsponserform/:id", element: <FoodSponserForm /> },
      { path: "osponser", element: <OtherSponser /> },
      { path: "osponserform", element: <OtherSponserForm /> },
      { path: "osponserform/:id", element: <OtherSponserForm /> },
      { path: "hall-of-fame", element: <AdminHOF /> },
      { path: "hall-of-fame-form", element: <HallOfFameForm /> },
      { path: "hall-of-fame-form/:id", element: <HallOfFameForm /> },
      { path: "profile", element: <AdminProfile /> },
      { path: "profileform", element: <AdminProfileForm /> },
    ],
  },
];

export { userRoutes, adminRoutes };
