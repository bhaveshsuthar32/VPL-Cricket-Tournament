import React, { useEffect, useState } from 'react';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import { userData, updateCaptain } from '../../../service/api'; // Import the updateCaptain function

export default function User() {
    const [user, setUser] = useState([]);

    // Fetch users from the backend
    const getUser = async () => {
        const response = await userData();
        setUser(response.data);
    };

    // Handle checkbox change event
    const handleCaptainChange = async (userId, currentCaptain) => {
        try {
            const newCaptainStatus = !currentCaptain; // Toggle the captain status
            const response = await updateCaptain({ userId, captainStatus: newCaptainStatus }); // Call the API to update captain
            
            // Update the user state locally
            setUser((prevUsers) =>
                prevUsers.map((u) => (u._id === userId ? { ...u, captain: newCaptainStatus } : u))
            );

            alert('Captain updated successfully!');
        } catch (error) {
            console.error('Error updating captain:', error);
            alert('Failed to update captain. Please try again.');
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="">
            <Header />
            <Sidebar />
            <div className="sm:px-4 px-2 sm:ml-64">
                <div className="mx-auto my-4 max-w-7xl px-0 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm bg-white">
                    <div className="grid grid-cols-9 border-b-[1px] mx-4 sm:mx-0">
                        <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">Users</h1>
                    </div>

                    <div className='overflow-x-auto'>
                        <table className="table sm:w-full w-[600px]">
                            <thead className="sticky bg-white z-9 ">
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th></th>
                                    <th>Email</th>
                                    <th>Captain</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((userInfo, index) => (
                                    <tr className='hover px-0' key={userInfo._id}>
                                        <td>{index + 1}</td>
                                        <td className='sm:px-4 px-0 w-[50px]'>
                                            <div className="flex items-center">
                                                <div className="avatar px-0">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img src={userInfo.image} alt="No image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='leading-4'>
                                            <h1 className="font-bold text-[11px] sm:text-[14px] ">{userInfo.username}</h1>
                                            <p className="opacity-70 text-[11px] sm:text-sm ">{userInfo.village}</p>
                                        </td>
                                        <td>
                                            <p className=" text-[12px] sm:text-sm ">{userInfo.email}</p>
                                        </td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-sm toggle-success"
                                                checked={userInfo.captain} // Reflects the current captain state
                                                onChange={() => handleCaptainChange(userInfo._id, userInfo.captain)} // Updates captain state on change
                                            />
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
