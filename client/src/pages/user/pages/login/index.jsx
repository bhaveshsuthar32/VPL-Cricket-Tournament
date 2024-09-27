import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginData } from '../../../../api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginData({ email, password });
      if (response.status === 200) {
        alert("Login successful");
        // Store token in local storage
        localStorage.setItem('token', response.data.token);
        
        // Start the logout timer
        startLogoutTimer();

        navigate("/"); // Navigate to home page on successful login
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Failed to login. Please check your credentials.";
      alert(errorMessage);
    }
  };

  const startLogoutTimer = () => {
    // Set a timer to log out the user after 2 minutes (120000 ms)
    setTimeout(() => {
      handleLogout();
    }, 120000); // 2 minutes
  };

  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem('token');
    console.log("Logged out due to token expiration.");
    // alert("You have been logged out due to inactivity.");
    navigate('/login'); // Navigate to login page
  };

  // Optional: Check if the user is already logged in and redirect
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // If token exists, navigate to home page
    //  navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:p-[100px] lg:py-[50px] lg:px-[200px]">
        {/* Left Side - Login Card */}
        <div className="flex items-center bg-slate-100 justify-center border-2 rounded-[10px] mx-2">
          <div className="card bg-white shadow-lg p-8 w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Login
              </button>
              <Link to={'/signup'}>
                <p className="text-sky-800 text-center my-2">Sign-Up?</p>
              </Link>
            </form>
          </div>
        </div>

        {/* Right Side - Background Image */}
        <div className="hidden lg:block relative border-2 rounded-[10px] overflow-hidden">
          <img
            src="https://res.cloudinary.com/dsp9kw0cm/image/upload/v1725359277/vpl_Logo_lkwalg.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}