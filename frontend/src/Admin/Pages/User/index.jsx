import React, {  useState } from 'react';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';

export default function User() {
    


    return (
        <div className="">
            <Header />
            <Sidebar />
            <div className="sm:px-4 px-2 sm:ml-64">
                <div className="mx-auto my-4 max-w-7xl px-0 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm  bg-white">
                    <div className="grid grid-cols-9 border-b-[1px]  mx-4 sm:mx-0">
                        <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
                            Users
                        </h1>
                    </div>
           

                    <div className='overflow-x-auto '>
                        <table className="table sm:w-full  w-[600px]">
                            {/* head */}
                            <thead className="sticky bg-white z-9 ">
                                <tr>
                                    <th>S.No</th>
                                    <th >Name</th>
                                    <th ></th>
                                    <th>Email</th>
                                    <th>Captain</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className='hover px-0'>
                                    <td>1</td>
                                    <td  className='sm:px-4 px-0 w-[50px]'>
                                        <div className="flex items-center">
                                            <div className="avatar px-0">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </td>
                                    <td className='leading-4'>
                                       
                                                <h1 className="font-bold text-[11px] sm:text-[14px] ">Hart Hagerty</h1>
                                                <p className="opacity-70 text-[11px] sm:text-sm ">United States</p>
                                           
                                    </td>
                                    <td>
                                                <p className=" text-[12px] sm:text-sm ">United123@gmail.com</p>
                                     
                                       
                                       
                                    </td>
                                    <td><input type="checkbox" className="toggle toggle-sm toggle-success" /></td>
                                    <td>
                                        <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>
                          
                                <tr className='hover px-0'>
                                    <td>1</td>
                                    <td  className='sm:px-4 px-0 w-[50px]'>
                                        <div className="flex items-center">
                                            <div className="avatar px-0">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </td>
                                    <td className='leading-4'>
                                       
                                                <h1 className="font-bold text-[11px] sm:text-[14px] ">Hart Hagerty</h1>
                                                <p className="opacity-70 text-[11px] sm:text-sm ">United States</p>
                                           
                                    </td>
                                    <td>
                                                <p className=" text-[12px] sm:text-sm ">United123@gmail.com</p>
                                     
                                       
                                       
                                    </td>
                                    <td><input type="checkbox" className="toggle toggle-sm toggle-success" /></td>
                                    <td>
                                        <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>
                          
                                <tr className='hover px-0'>
                                    <td>1</td>
                                    <td  className='sm:px-4 px-0 w-[50px]'>
                                        <div className="flex items-center">
                                            <div className="avatar px-0">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </td>
                                    <td className='leading-4'>
                                       
                                                <h1 className="font-bold text-[11px] sm:text-[14px] ">Hart Hagerty</h1>
                                                <p className="opacity-70 text-[11px] sm:text-sm ">United States</p>
                                           
                                    </td>
                                    <td>
                                                <p className=" text-[12px] sm:text-sm ">United123@gmail.com</p>
                                     
                                       
                                       
                                    </td>
                                    <td><input type="checkbox" className="toggle toggle-sm toggle-success" /></td>
                                    <td>
                                        <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>
                          
                                <tr className='hover px-0'>
                                    <td>1</td>
                                    <td  className='sm:px-4 px-0 w-[50px]'>
                                        <div className="flex items-center">
                                            <div className="avatar px-0">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </td>
                                    <td className='leading-4'>
                                       
                                                <h1 className="font-bold text-[11px] sm:text-[14px] ">Hart Hagerty</h1>
                                                <p className="opacity-70 text-[11px] sm:text-sm ">United States</p>
                                           
                                    </td>
                                    <td>
                                                <p className=" text-[12px] sm:text-sm ">United123@gmail.com</p>
                                     
                                       
                                       
                                    </td>
                                    <td><input type="checkbox" className="toggle toggle-sm toggle-success" /></td>
                                    <td>
                                        <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>
                          
                                <tr className='hover px-0'>
                                    <td>1</td>
                                    <td  className='sm:px-4 px-0 w-[50px]'>
                                        <div className="flex items-center">
                                            <div className="avatar px-0">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </td>
                                    <td className='leading-4'>
                                       
                                                <h1 className="font-bold text-[11px] sm:text-[14px] ">Hart Hagerty</h1>
                                                <p className="opacity-70 text-[11px] sm:text-sm ">United States</p>
                                           
                                    </td>
                                    <td>
                                                <p className=" text-[12px] sm:text-sm ">United123@gmail.com</p>
                                     
                                       
                                       
                                    </td>
                                    <td><input type="checkbox" className="toggle toggle-sm toggle-success" /></td>
                                    <td>
                                        <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>
                          
                                <tr className='hover px-0'>
                                    <td>1</td>
                                    <td  className='sm:px-4 px-0 w-[50px]'>
                                        <div className="flex items-center">
                                            <div className="avatar px-0">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </td>
                                    <td className='leading-4'>
                                       
                                                <h1 className="font-bold text-[11px] sm:text-[14px] ">Hart Hagerty</h1>
                                                <p className="opacity-70 text-[11px] sm:text-sm ">United States</p>
                                           
                                    </td>
                                    <td>
                                                <p className=" text-[12px] sm:text-sm ">United123@gmail.com</p>
                                     
                                       
                                       
                                    </td>
                                    <td><input type="checkbox" className="toggle toggle-sm toggle-success" /></td>
                                    <td>
                                        <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>
                          
                                <tr className='hover px-0'>
                                    <td>1</td>
                                    <td  className='sm:px-4 px-0 w-[50px]'>
                                        <div className="flex items-center">
                                            <div className="avatar px-0">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </td>
                                    <td className='leading-4'>
                                       
                                                <h1 className="font-bold text-[11px] sm:text-[14px] ">Hart Hagerty</h1>
                                                <p className="opacity-70 text-[11px] sm:text-sm ">United States</p>
                                           
                                    </td>
                                    <td>
                                                <p className=" text-[12px] sm:text-sm ">United123@gmail.com</p>
                                     
                                       
                                       
                                    </td>
                                    <td><input type="checkbox" className="toggle toggle-sm toggle-success" /></td>
                                    <td>
                                        <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>
                          
                       
                            </tbody>
                            {/* foot */}
                            {/* <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </tfoot> */}
                        </table>
                  </div>
                </div>
            </div>
        </div>
    )
}


