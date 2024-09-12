import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import { getFoodSP } from '../../../../api';

export default function FSponser() {
    const [user, setUser] = useState([]);

    const getFoodData = async () => {
        try {
            const response = await getFoodSP();
            setUser(response.data);
        } catch (error) {
            console.log("Error :- ", error);
        }
    };

    useEffect(() => {
        getFoodData();
    }, []);

    return (
        <div className="">
            <Header />
            <Sidebar />
            <div className="px-4 mt-3 sm:ml-64">
                <div className="mx-auto my-4 max-w-7xl px-0 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm bg-white">
                    <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                        <div className="sm:col-span-5 mb-5">
                            <h1 className='font-bold text-lg text-gray-600'>
                                Food Sponsors
                            </h1>
                        </div>
                        <div className="flex items-center justify-end gap-x-6">
                            <Link
                                to={'/dashboard/fsponserform'}
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >   
                                ADD
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table sm:w-full w-[600px]">
                            <thead className="sticky bg-white z-9">
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Day</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.length > 0 ? (
                                    user.map((userInfo, index) => (
                                        <tr key={userInfo._id}> 
                                            <th>{index + 1}</th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={userInfo.spImage}
                                                                alt={userInfo.fullName} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{userInfo.fullName}</div>
                                                        <div className="text-sm opacity-50">{userInfo.village}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{userInfo.amount}</td>
                                            <td>{userInfo.sponDay}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                            </th>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center text-gray-500">
                                            No Food Sponsors Available
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
