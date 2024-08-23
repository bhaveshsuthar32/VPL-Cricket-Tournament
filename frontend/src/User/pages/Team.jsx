import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Team() {
    return (
        <>
            <Navbar />
            <section className='bg-base-100 h-auto py-16'>
                <div className='mx-16'>
                    <div className="mx-auto pb-16 max-w-4xl">
                        <h1 className="md:text-[40px] text-xl font-bold text-center">VPL - 3  Teams</h1>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="card card-compact bg-base-100 w-full sm:w-full lg:w-94 shadow-xl">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Dhandhar - 11 </h2>
                                    <p>Bagra</p>
                                </div>
                            </div>
                            <div className="card card-compact bg-base-100 w-full sm:w-full lg:w-94 shadow-xl">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Dhandhar - 11 </h2>
                                    <p>Bagra</p>
                                </div>
                            </div>
                            <div className="card card-compact bg-base-100 w-full sm:w-full lg:w-94 shadow-xl">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Dhandhar - 11 </h2>
                                    <p>Bagra</p>
                                </div>
                            </div>
                            <div className="card card-compact bg-base-100 w-full sm:w-full lg:w-94 shadow-xl">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Dhandhar - 11 </h2>
                                    <p>Bagra</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
