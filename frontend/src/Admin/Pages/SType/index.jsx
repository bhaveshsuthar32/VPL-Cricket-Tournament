import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';

export default function SType() {
    return (
        <div className="">
            <Header />
            <Sidebar />
            <div className="px-4 mt-3 sm:ml-64">
                <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-9">
                    <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                        <div className="sm:col-span-5">
                            <h1 className='font-bold text-lg text-gray-600'>
                                Sponser Types
                            </h1>
                        </div>
                        <div className="flex items-center justify-end gap-x-6">
                            <Link
                                to={'/dashboard/sponsertypeform'}
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                ADD
                            </Link>
                        </div>
                    </div>

                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-300 sticky top-[65px] bg-white z-10">
                            <tr>
                                <th></th>
                                <th>Sponser Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="hover">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                            {/* row 3 */}
                            <tr className="hover">
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                            <tr className="hover">
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                            <tr className="hover">
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                            <tr className="hover">
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


