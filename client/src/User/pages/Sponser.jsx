import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Sponser() {
    return (
        <>
            <Navbar />
            <section className='bg-base-100 h-auto py-16'>
                <div className='mx-16'>
                    <div className="mx-auto pb-16 max-w-4xl">
                        <h1 className="md:text-[40px] text-xl font-bold text-center">Sponsers</h1>
                    </div>
                    <div>
                        <h1 className="md:text-[40px] text-xl font-bold py-8">Food Sponsers</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px]  md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' lg:w-[130px] sm:w-[100px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] lg:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </div>
                            
                            <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px]  md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' lg:w-[130px] sm:w-[100px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] lg:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </div>
                            
                            <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px]  md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' lg:w-[130px] sm:w-[100px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] lg:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </div>
                            
                            {/* <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px] md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' md:w-[130px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] md:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px] md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' md:w-[130px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] md:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px] md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' md:w-[130px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] md:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px] md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' md:w-[130px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] md:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <h1 className="md:text-[40px] text-xl font-bold py-8">Other Sponsers</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px] md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' md:w-[130px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] md:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px] md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' md:w-[130px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] md:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px] md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' md:w-[130px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] md:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px] md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' md:w-[130px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] md:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 border-[1px] shadow-lg rounded-sm text-[10px] md:text-[15px]">
                                <figure className='px-2'>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                        alt="Sponser"
                                        className=' md:w-[130px] w-[80px]  rounded-md '
                                    />
                                </figure>
                                <div className="card-body px-4 py-[2px] md:py-[14px]">
                                    <h2 className="font-bold text-center border-1">Day - 1</h2>
                                    <h2 className="font-bold">Satish Suthar s/o Visaramji Suthar</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
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
