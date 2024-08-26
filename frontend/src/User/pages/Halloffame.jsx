import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HallOfFame() {
    return (
        <>
            <Navbar />
            <section className='bg-base-100 h-auto py-16'>
                <div className='mx-16'>
                    <div className="mx-auto md:mb-12 max-w-4xl">
                        <h1 className="md:text-[40px] text-[26px] font-bold text-center">Hall of Fame</h1>
                    </div>
                    <div>
                        <h1 className="md:text-[36px] text-xl font-bold py-8">Heroes of 2023</h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                            <div className="card card-compact bg-transparent md:w-40">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="Img"
                                        className="rounded-full w-full h-auto"
                                    />
                                </figure>
                                <div className="card-body text-center">
                                    <h3 className="font-bold">Dinesh Suthar</h3>
                                    <p className="text-gray-500">Man of The Series</p>
                                </div>
                            </div>
                            <div className="card card-compact bg-transparent md:w-40">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="Img"
                                        className="rounded-full w-full h-auto"
                                    />
                                </figure>
                                <div className="card-body text-center">
                                    <h3 className="font-bold">Dinesh Suthar P</h3>
                                    <p className="text-gray-500">Best Batsman</p>
                                </div>
                            </div>
                            <div className="card card-compact bg-transparent md:w-40">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="Img"
                                        className="rounded-full w-full h-auto"
                                    />
                                </figure>
                                <div className="card-body text-center">
                                    <h3 className="font-bold">Arjun Suthar</h3>
                                    <p className="text-gray-500">Best Bowler</p>
                                </div>
                            </div>
                            <div className="card card-compact bg-transparent md:w-40">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="Img"
                                        className="rounded-full w-full h-auto"
                                    />
                                </figure>
                                <div className="card-body text-center">
                                    <h3 className="font-bold">Dilip Suthar</h3>
                                    <p className="text-gray-500">Best Fielder</p>
                                </div>
                            </div>
                            <div className="card card-compact bg-transparent md:w-40">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="Img"
                                        className="rounded-full w-full h-auto"
                                    />
                                </figure>
                                <div className="card-body text-center">
                                    <h3 className="font-bold">Dilip Suthar</h3>
                                    <p className="text-gray-500">Best Fielder</p>
                                </div>
                            </div>
                            <div className="card card-compact bg-transparent md:w-40">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="Img"
                                        className="rounded-full w-full h-auto"
                                    />
                                </figure>
                                <div className="card-body text-center">
                                    <h3 className="font-bold">Dilip Suthar</h3>
                                    <p className="text-gray-500">Best Fielder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}
