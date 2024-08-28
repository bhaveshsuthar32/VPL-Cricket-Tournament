import React, { useState } from 'react'

export default function Footer() {
    const [showHelloWorld, setShowHelloWorld] = useState(false); // State to manage visibility

    // Function to toggle the visibility of "Hello World"
    const toggleHelloWorld = () => {
      setShowHelloWorld(!showHelloWorld);
    };
    return (
        <div>
            <footer className="footer bg-base-300 text-base-content px-10 py-5">
                <aside className='flex sm:block'>
                <div className="w-20 rounded-full mx-aut">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://i.pinimg.com/736x/9d/e3/f9/9de3f928d76f012aebbc4faa0b19f92d.jpg" />
                        </div>
                        <h6 className="mt-3 font-bold text-slate-600">Vishwakarma Premier Lague</h6>
                        <h6 className=" font-semibold text-slate-600">Season - 3</h6>

                </aside>
                <aside className='grid grid-cols-4  gap-10 sm:gap-20'>

                    <div className='sm:leading-6 leading-5 mt-[-12px] sm:mt-0 col-span-2 sm:col-span-1'>
                        <h6 className="footer-title">Features</h6>
                        <ul className='text-slate-600'>
                            <li><a className="link link-hover">Sponsers</a></li>
                            <li><a className="link link-hover">Advertisers</a></li>
                            <li><a className="link link-hover">Hall Of Fame</a></li>
                            {/* <li><a className="link link-hover">Advertisement</a></li> */}
                        </ul>
                    </div>
                    <div className='leading-5 mt-[-12px] sm:mt-0  col-span-2 sm:col-span-1'>
                        <h6 className="footer-title">Teams</h6>
                        <ul className='text-slate-600'>
                            <li><a className="link link-hover">Add Team</a></li>
                            <li><a className="link link-hover">Team Profile</a></li>
                            <li><a className="link link-hover">Team View</a></li>
                            {/* <li><a className="link link-hover">Press kit</a></li> */}
                        </ul>
                    </div>
                    <div className='sm:leading-5 leading-5 mt-[-12px] sm:mt-0 col-span-2 sm:col-span-1 '>
                        <h6 className="footer-title">Legal</h6>
                        <ul className='text-slate-600'>
                            <li><a className="link link-hover">Rules & Regulation</a></li>
                            <li><a className="link link-hover">About Us</a></li>
                            <li><a className="link link-hover">Contact Us</a></li>
                            {/* <li><a className="link link-hover">Advertisement</a></li> */}
                        </ul>
                    </div>
                    <div className='leading-5 mt-[-12px] sm:mt-0  col-span-2 sm:col-span-1'>
                        <h6 className="footer-title"></h6>
                        <ul className='text-slate-600'>
                            <li><a className="link link-hover">About us</a></li>
                            <li><a className="link link-hover">Contact</a></li>
                            <li><a className="link link-hover">Jobs</a></li>
                            {/* <li><a className="link link-hover">Press kit</a></li> */}
                        </ul>
                    </div>
                </aside>
                {/* <nav className='leading-4 sm:leading-5 mt-[-12px] sm:mt-0'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav> */}
            </footer>
           
            <div className='h-8 place-content-center text-center bg-slate-600 border-t-[1px]  border-slate-300'>
      <h1 className='text-white text-[9px] sm:text-[12px]'>
        Copyright <span onClick={toggleHelloWorld} className='cursor-pointer'>©</span> 2024, VPL Cricket Tournament
        {showHelloWorld && <span className='text-white mx-[12px]'>[ Developed by :- Bhavesh & Dilip ]</span>}
      </h1>
     
    </div>
            
        </div>
    )
}
