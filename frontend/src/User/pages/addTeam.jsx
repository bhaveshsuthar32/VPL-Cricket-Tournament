import React from 'react'

export default function addTeam() {
    return (
        <>
            <div className='border-2 md:mx-[250px]'>

                <h1 className='text-center mt-10 text-[25px] font-semibold'>Add Team</h1>

                <form className='md:w-[700px] md:p-20 px-6 py-2 mx-auto bg-slate-400'>
                    <div className="space-y-12">


                        <div className="border-b border-gray-900/10 ">
                            <h2 className=" font-semibold my-0 text-gray-900">Team Information</h2>
                            <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-6">
                                <div className="sm:col-span-3 col-span-1">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Team Name'
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Team Name'
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 col-span-1">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Team Name'
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Team Name'
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 col-span-1">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Team Name'
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 col-span-1">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6  text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input type="file" className="file-input file-input-bordered md:h-10 h-8 text-[9px]  w-full max-w-xs" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* add team details */}
                    
                    <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>company</th>
        <th>location</th>
        <th>Last Login</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Littel, Schaden and Vandervort</td>
        <td>Canada</td>
        <td>12/16/2020</td>
        <td>Blue</td>
      </tr>
        </tbody>
    </table>
</div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}
