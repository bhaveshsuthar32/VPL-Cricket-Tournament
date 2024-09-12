import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    const [showHelloWorld, setShowHelloWorld] = useState(false); // State to manage visibility

    // Function to toggle the visibility of "Hello World"
    const toggleHelloWorld = () => {
      setShowHelloWorld(!showHelloWorld);
    };
    return (
        <div>
            <footer className="footer bg-slate-300 text-base-content sm:px-10 px-6 py-8">
                <aside className='flex sm:block'>
                <div className="w-14  mt-[-12px]">
                            <img className="rounded-full"
                                alt="Tailwind CSS Navbar component"
                                src="https://i.pinimg.com/736x/9d/e3/f9/9de3f928d76f012aebbc4faa0b19f92d.jpg" />
                        </div>
                        <div>
                        <h6 className=" font-bold text-slate-600">Vishwakarma Premier Lague</h6>
                        <h6 className=" font-semibold text-slate-600  sm:mt-0">Season - 3</h6>

                        </div>

                </aside>
                <aside className='grid grid-cols-4 gap-10 sm:gap-4 px-2 lg:px-[80px] '>

                    <div className=' leading-5 mt-[-12px] sm:mt-0 col-span-2 sm:col-span-1'>
                        <h6 className="footer-title">Features</h6>
                        <ul className='text-slate-600'>
                            <li><Link to={"/sponsor"} className="link link-hover">Sponsers</Link></li>
                            <li><Link to={"/advertiser"} className="link link-hover">Advertisers</Link></li>
                            <li><Link to={"/halloffame"} className="link link-hover">Hall Of Fame</Link></li>
                            {/* <li><Link to={"/"} className="link link-hover">Advertisement</Link></li> */}
                        </ul>
                    </div>
                    <div className='leading-5 mt-[-12px] sm:mt-0  col-span-2 sm:col-span-1'>
                        <h6 className="footer-title">Teams</h6>
                        <ul className='text-slate-600'>
                            <li><Link to={"/addteam"} className="link link-hover">Add Team</Link></li>
                            <li><Link to={"/team"} className="link link-hover">Team Profile</Link></li>
                            <li><Link to={"/teamview"} className="link link-hover">Team View</Link></li>
                            {/* <li><Link to={"/"} className="link link-hover">Press kit</Link></li> */}
                        </ul>
                    </div>
                    <div className='sm:leading-5 leading-5 mt-[-12px] sm:mt-0 col-span-2 sm:col-span-1 '>
                        <h6 className="footer-title">Legal</h6>
                        <ul className='text-slate-600'>
                            <li><Link to={"/rules"} className="link link-hover">Rules & Regulation</Link></li>
                            <li><Link to={"/aboutus"} className="link link-hover">About Us</Link></li>
                            <li><Link to={"/contactus"} className="link link-hover">Contact Us</Link></li>
                            {/* <li><Link to={"/"} className="link link-hover">Advertisement</Link></li> */}
                        </ul>
                    </div>
                    <div className='leading-5 mt-[-12px] sm:mt-0  col-span-2 sm:col-span-1'>
                        <h6 className="footer-title"></h6>
                        <ul className='text-slate-600'>

                        <li className='lg:leading-4  leading-3'><Link to={"/"} className="link link-hover text-[11px] sm:text-[13px]">Address : Vishwakarma Colony, Railway Station Road, Bagra(Jalore)</Link></li>
                        <li><Link to={"/"} className="link link-hover text-[11px] sm:text-[13px]">Email : vpl2024@gmail.com</Link></li>
                     
                            <li className='flex '>

                            {/* instagram */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#1E293B" viewBox="0 0 648 612" className=' w-[30px] sm:w-[20px] lg:w-[45px] ' ><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg>

                            {/* facebook */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#1E293B" viewBox="0 0 648 612" className=' w-[30px] sm:w-[20px] lg:w-[45px] '><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>

                            {/* twitter */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#1E293B" viewBox="0 0 648 612" className=' w-[30px] sm:w-[20px] lg:w-[45px] '><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>

                            {/* Youtube  */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#1E293B" viewBox="0 0 648 612" className=' w-[30px] sm:w-[20px] lg:w-[45px] '><path d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"/></svg>

                            </li>
                            
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
