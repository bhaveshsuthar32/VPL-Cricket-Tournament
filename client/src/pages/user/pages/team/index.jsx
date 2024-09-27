// import React from 'react'
// import { Table } from "flowbite-react";
// import { Link } from 'react-router-dom';
import Header from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Team() {
    return (
        <div className="">
            <Header />
            <div className="px-4 mt-3 sm:ml-64">
                <div className="mx-auto my-4 max-w-7xl px-4 py-2 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-9">
                    <div className="grid grid-cols-9 border-b-[1px]">
                        <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
                            Teams
                        </h1>
                    </div>
                    <table className="table">
                        {/* head */}
                        <thead className=" sticky sm:top-[65px] top-[0px] bg-slate-100 z-10 ">
                            <tr>
                                <th></th>
                                <th>Team Name</th>
                                <th>Village</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="hover">
                                <th>1</th>
                                <td className='font-bold'>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>
                            <tr className="hover">
                                <th>1</th>
                                <td className='font-bold'>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>
                            <tr className="hover">
                                <th>1</th>
                                <td className='font-bold'>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>
                            <tr className="hover">
                                <th>1</th>
                                <td className='font-bold'>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>
                            <tr className="hover">
                                <th>1</th>
                                <td className='font-bold'>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>
                            <tr className="hover">
                                <th>1</th>
                                <td className='font-bold'>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>
                            <tr className="hover">
                                <th>1</th>
                                <td className='font-bold'>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>
                            <tr className="hover">
                                <th>1</th>
                                <td className='font-bold'>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>
                            <tr className="hover">
                                <th>1</th>
                                <td className='font-bold'>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>
                            <tr className="hover">
                                <th>1</th>
                                <td className='font-bold'>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>
                            <tr className="hover">
                                <th>1</th>
                                <td className='font-bold'>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td className='font-bold'>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>
                            <tr className="hover">
                                <th>3</th>
                                <td className='font-bold'>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td><button className="btn btn-sm btn-outline">View</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}


