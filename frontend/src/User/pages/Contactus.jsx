import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contactus() {
    return (
        <>
            <Navbar />
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-neutral-content text-center">
                    <div className="max-w-md w-full">
                        <h1 className="mb-5 text-5xl font-samibold">Contact Us</h1>
                        <div className="gird grid-cols-2 gap-5"></div>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    rows="3"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="btn btn-primary"
                                    type="button">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
