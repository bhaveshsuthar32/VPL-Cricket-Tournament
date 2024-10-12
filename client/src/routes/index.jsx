import { Outlet, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

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

const ProtectedRoute = ({ children, isAdmin }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // Check if the user is authenticated
  if (!token || !user) {
    toast.error("You must be logged in to access this page.");
    return <Navigate to="/login" replace />;
  }

  // Check if user is trying to access admin routes without admin privileges
  if (isAdmin && user?.isAdmin === false) {
    toast.error("Unauthorized access to admin area.");
    return <Navigate to="/" replace />;
  }

  // Check if admin is trying to access user routes
  if (!isAdmin && user?.isAdmin === true) {
    toast.error("Admins cannot access user pages.");
    return <Navigate to="/admin/" replace />;
  }

  return children;
};




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
    path: "/teamview/:id",
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

  // Protected user routes
  {
    path: "/profile",
    element: (
      <ProtectedRoute isAdmin={false}>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/editprofile",
    element: (
      <ProtectedRoute isAdmin={false}>
        <ProfileForm />
      </ProtectedRoute>
    ),
  },
  {
    path: "/addteam",
    element: (
      <ProtectedRoute isAdmin={false}>
        <TeamForm />
      </ProtectedRoute>
    ),
  },
];

// Admin Layout
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
    element: (
      <ProtectedRoute isAdmin={true}>
        <AdminLayout />
      </ProtectedRoute>
    ),
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

