import React from 'react';
import { Link } from 'react-router-dom';


export default function Login() {
    return (
        <>
               <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen p-[100px] md:py-[50px] md:px-[200px]">
            {/* Left Side - Login Card */}
            <div className="flex items-center bg-slate-100 justify-center border-2 rounded-[10px] mx-2">
                <div className="card bg-white shadow-lg  p-8 w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Login
                        </button>
                        <Link to={'/signup'}><p className="text-sky-800 text-center my-2">Sign-Up ?</p></Link>
                    </form>
                </div>
            </div>

            {/* Right Side - Background Image */}
            <div className="hidden md:block relative border-2 rounded-[10px] overflow-hidden">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYd9_YKcG9vEGrWRfIKIK3xhZb5pYiw6nDw&s/800x600" // Replace with your desired image URL
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
        </>
    );
}