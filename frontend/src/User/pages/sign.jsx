import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signData } from '../../service/api';

const defaultValue = {
    username: '',
    email: '',
    password: ''
};

export default function SignUp() {
    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signData(user);
        navigate('/');
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen p-[100px] md:py-[50px] md:px-[200px]">

            {/* Right Side - Background Image */}
            <div className="hidden md:block relative border-2 rounded-[10px] overflow-hidden">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYd9_YKcG9vEGrWRfIKIK3xhZb5pYiw6nDw&s/800x600" // Replace with your desired image URL
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Left Side - Sign Up Card */}
            <div className="flex items-center bg-slate-100 justify-center border-2 rounded-[10px] mx-2">
                <div className="card bg-white shadow-lg p-8 w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Sign Up
                        </button>
                        <Link to={'/login'}>
                            <p className="text-sky-800 text-center my-2">Already have an account? Login</p>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}