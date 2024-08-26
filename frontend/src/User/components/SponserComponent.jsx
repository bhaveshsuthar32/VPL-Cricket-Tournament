import React from 'react'

export default function SponserComponent() {
    return (
        <section className=' h-auto py-8'>
            <div className='mx-8'>
                <div className="pb-4 max-w-4xl">
                    <h1 className="md:text-[40px] text-xl font-bold">SPONSERS</h1>
                </div>
                <div className='bg-slate-700 py-8 rounded-xl text-gray-200'>
                    {/* <h1 className="md:text-[30px] text-xl font-bold py-8">FOOD SPONERS</h1> */}
                    <div className="mx-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        <div className="card card-compact bg-transparent md:w-40">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Img"
                                    className="rounded-full w-full h-auto"
                                />
                            </figure>
                            <div className="card-body text-center">
                                <h3 className="font-bold">Dinesh Suthar s/o Puraji Suthar</h3>
                                <p className="text-gray-400">Bagra</p>
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
                                <h3 className="font-bold">Madan Suthar s/o Pratap ji Suthar</h3>
                                <p className="text-gray-400">Bagra</p>
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
                                <h3 className="font-bold">Praveen Suthar s/o Joraram ji Suthar</h3>
                                <p className="text-gray-400">Noon</p>
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
                                <h3 className="font-bold">Mahendra Suthar s/o Rama ji Suthar</h3>
                                <p className="text-gray-400">Akoli</p>
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
                                <h3 className="font-bold">Goutam Suthar s/o Trilok ji Suthar</h3>
                                <p className="text-gray-400">Siyana</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
