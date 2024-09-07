import React, { useState } from 'react';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import { addOtherSP } from '../../../service/api';

const defaultValue = {
    sponType: '',
    fullName: '',
    village: '',
    amount: '',
    spOtherImage: null,
};

export default function OSponserform() {
    const [otherSp, setOtherSp] = useState(defaultValue);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOtherSp({ ...otherSp, [name]: value });
    };

    const handleFileChange = (e) => {
        setOtherSp({ ...otherSp, spOtherImage: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('sponType', otherSp.sponType);
        formData.append('fullName', otherSp.fullName);
        formData.append('village', otherSp.village);
        formData.append('amount', otherSp.amount);
        formData.append('spOtherImage', otherSp.spOtherImage);

        try {
            const response = await addOtherSP(formData);
            console.log(response);
            alert("Data inserted successfully");
            navigate("/dashboard/osponser");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <Header />
            <Sidebar />
            <div className="px-4 mt-3 sm:ml-64">
                <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-10">
                    <div className="grid grid-cols-9 border-b-[1px]">
                        <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
                            Add Other Sponsor
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-2">
                                    <label htmlFor="sponType" className="block text-sm font-medium leading-6 text-gray-900">
                                        Sponsor Type
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="sponType"
                                            name="sponType"
                                            autoComplete="sponType"
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            onChange={handleChange}
                                            value={otherSp.sponType}
                                        >
                                            <option value="">Select Type</option>
                                            <option value="Water Sponsor">Water Sponsor</option>
                                            <option value="Tea Sponsor">Tea Sponsor</option>
                                            <option value="Day-3">Day-3</option>
                                            <option value="Day-4">Day-4</option>
                                            <option value="Day-5">Day-5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="spOtherImage" className="block text-sm font-medium leading-6 text-gray-900">
                                        Sponsor Profile
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="spOtherImage"
                                            name="spOtherImage"
                                            type="file"
                                            className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-2">
                                    <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange}
                                            value={otherSp.fullName}
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="village" className="block text-sm font-medium leading-6 text-gray-900">
                                        Village
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="village"
                                            name="village"
                                            type="text"
                                            autoComplete="village-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange}
                                            value={otherSp.village}
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
                                        Sponsor Amount
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="amount"
                                            name="amount"
                                            type="text"
                                            autoComplete="amount"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange}
                                            value={otherSp.amount}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <Link to={'/dashboard/osponser'} className="text-sm font-semibold leading-6 text-gray-900">
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}