import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar bg-slate-700 text-white sticky top-0 mx-auto w-[100%] rounded-b-sm z-10">
            <div className="flex-1">
                <div className='w-12 ms-5'>
                    <img src="https://png.pngtree.com/png-clipart/20221229/original/pngtree-cricket-logo-png-image_8823326.png" alt="" />
                </div>
                <Link to={"/"} className="ms-5 md:text-xl font-semibold">
                    VPL Cricket Tournament</Link>
            </div>
            <div className="flex-none">
                <div className="navbar-start">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-slate-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/team'}>Teams</Link></li>
                            <li><Link to={'/sponsor'}>Sponsers</Link></li>
                            <li><Link to={'/halloffame'}>Hall Of Fame</Link></li>
                            <li><Link to={'/advertiser'}>Advertisers</Link></li>
                            <li><Link to={'/rules'}>Rules & Regulation</Link></li>
                            <li><Link to={'/contactus'}>Contact Us</Link></li>
                            <li><Link to={'/aboutus'}>About Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="btn btn-ghost btn-circle mx-1">
                    <Link to={"/login"}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 640 512"><path fill="#ffffff" d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z" /></svg>
                    </Link>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to={"/profile"} className="justify-between">Profile</Link>
                        </li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}