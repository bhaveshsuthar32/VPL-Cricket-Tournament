import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import { getSponsorType, deleteSponsorType } from '../../../../api';

export default function SType() {
    const [user, setUser] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedSponserId, setSelectedSponserId] = useState(null);

    const getSponsorTypeData = async () => {
        try {
            const response = await getSponsorType();
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching sponsor types:", error);
            // Optionally show a toast notification here
        }
    };

    useEffect(() => {
        getSponsorTypeData();
    }, []);

    const handleDeleteClick = (sponserId) => {
        setSelectedSponserId(sponserId);
        setShowConfirmation(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await deleteSponsorType(selectedSponserId);
            setShowConfirmation(false);
            getSponsorTypeData(); // Refresh the list after deletion
        } catch (error) {
            console.error("Error deleting the Sponsor Type:", error);
            // Optionally show a toast notification here
        }
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
        setSelectedSponserId(null);
    };

    return (
        <div className="">
            <Header />
            <Sidebar />
            <div className="px-4 mt-3 sm:ml-64">
                <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-9">
                    <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                        <div className="sm:col-span-5">
                            <h1 className='font-bold text-lg text-gray-600'>Sponsor Types</h1>
                        </div>
                        <div className="flex items-center justify-end gap-x-6">
                            <Link to={'/dashboard/sponsertypeform'} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                                ADD
                            </Link>
                        </div>
                    </div>

                    {/* Sponsor Table */}
                    <SponsorTable sponsors={user} onDeleteClick={handleDeleteClick} />
                </div>
            </div>

            {showConfirmation && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Confirmation</h3>
                            <p className="text-sm text-gray-500 mt-2">Are you sure you want to delete this sponsor type?</p>

                            <div className="items-center px-4 py-3">
                                <button onClick={handleConfirmDelete} className="px-4 py-2 bg-red-500 text-white rounded-md w-24 mr-2 hover:bg-red-600">Delete</button>
                                <button onClick={handleCancelDelete} className="px-4 py-2 bg-gray-500 text-white rounded-md w-24 hover:bg-gray-600">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}