import React from 'react'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';

export default function ProfileForm() {
    return (
        <div className="">
            <Header />
            <Sidebar />
            <div className="px-4 mt-3 sm:ml-64">
                <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-10">
                    <div className="grid grid-cols-9 border-b-[1px]">
                        <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
                            Admin Profile
                        </h1>
                    </div>
                    <form>
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-2">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Logo
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="profile"
                                            name="profile"
                                            type="file"
                                            autoComplete="profile-name"
                                            className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-2">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <Link to={'/admin/profile'} className="text-sm font-semibold leading-6 text-gray-900">
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


