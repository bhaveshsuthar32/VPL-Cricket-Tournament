import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signData } from '../../service/api';

const defaultValue = {
    username: '',
    email: '',
    password: ''
};

export default function SignUp() {
    const [user, setUser] = useState(defaultValue);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signData(user);
            if (response.status === 201) {
                alert('Sign-up successful!');
                navigate('/login');
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                alert('Email already exists. Please sign up with another email.'); // Show alert for existing email
            } else {
                alert('An error occurred during sign-up. Please try again.'); // General error alert
            }
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:p-[100px] lg:py-[50px] lg:px-[200px]">
                {/* Right Side - Background Image */}
                <div className="hidden lg:block relative border-2 rounded-[10px] overflow-hidden">
                    <img
                        src="https://res.cloudinary.com/dsp9kw0cm/image/upload/v1725359277/vpl_Logo_lkwalg.jpg"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Left Side - Sign Up Card */}
                <div className="flex items-center bg-slate-100 justify-center border-2 rounded-[10px] mx-2">
                    <div className="card bg-white shadow-lg p-8 w-full max-w-sm">
                        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
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
        </>
    );
}
