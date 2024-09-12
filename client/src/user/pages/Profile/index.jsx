import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';



export default function Profile() {
    return (
        <>
              <Navbar />
            <div className="md:tx-[200px] md:px-[350px] px-[100px] mb-20">
                <div className="bg-base-500">
                    <div className="grid grid-cols-3 border-[1px] shadow-lg rounded-md border-slat-200 mt-20 ">
                        {/* Left Side: Profile Image and Info */}
                        <div className="md:col-span-1 col-span-3  p-4 rounded-md bg-white m-auto">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                alt="Profile"
                                className="max-w-sm rounded-lg shadow-2xl h-[150px]  md:h-[250px] "
                            />
                          
                        </div>

                        {/* Right Side: Profile Details */}
                        <div className="md:col-span-2 col-span-3 p-4 px-8">
                            <h1 className="md:text-4xl font-bold text-center">Profile</h1>  
                            
                            <div className="space-y-1 md:text-[15px] text-[11px]">
                                <p className="font-semibold">Name: Demo</p>
                                <p className="font-semibold">Age: 28</p>
                                <p className="font-semibold">Location: New York</p>
                                <p className="font-semibold">Occupation: Developer</p>
                                <p className="font-semibold">Interests: Coding, Music, Travel</p>
                            </div>

                            <div className="mt-6 text-center">
                            <Link  to={'/editprofile'}>

                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold md:py-2 md:px-4 py-1 px-2  text-[11px] md:text-[15px] rounded">
                                    Edit Profile
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
