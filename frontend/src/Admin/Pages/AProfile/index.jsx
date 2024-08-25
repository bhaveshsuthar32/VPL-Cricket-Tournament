import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';

export default function AProfile() {
    return (
        <div className="">
            <Header />
            <Sidebar />
            <div className="px-4 mt-3 sm:ml-64">
                <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-9">
                    <div className="sm:col-span-5">
                        <h1 className="font-bold text-lg text-gray-600">Admin Profile</h1>
                    </div>
                    <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-1">
                            <div className="mt-2 md:w-40 w-30">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Profile" className="w-full h-auto rounded-full" />
                            </div>
                        </div>
                        <div className="sm:col-span-4 sm:px-24 lg:px-10">
                            <div className="mt-6">
                                {/* <h1 className="text-4xl font-bold text-gray-900">Profile</h1> */}
                                <h2 className="text-2xl font-bold text-gray-500">Dilip Suthar</h2>
                                <p className="text-gray-600">Admin</p>
                                <p className="text-gray-600 mb-5">vplseason3@gmail.com</p>
                                <Link
                                    to={'/dashboard/profileform'}
                                    className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Edit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


