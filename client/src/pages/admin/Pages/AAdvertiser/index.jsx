import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import { getAdvertiser, deleteAdvertiser } from '../../../../api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AAdvertiser() {
  const [user, setUser] = useState([]);
  const [selectedAdvertiserId, setSelectedAdvertiserId] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const getAdvertiseData = async () => {
    try {
      const response = await getAdvertiser();
      if (response.data) {
        setUser(response.data);
      } else {
        console.error("No data returned from API.");
        toast.error("Failed to fetch advertiser data.");
      }
    } catch (error) {
      console.error("Error :- ", error);
      toast.error("Error fetching advertisers data.");
    }
  };

  useEffect(() => {
    getAdvertiseData();
  }, []);

  const handleDeleteClick = (advertiserId) => {
    setSelectedAdvertiserId(advertiserId);
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteAdvertiser(selectedAdvertiserId);
      toast.success("Advertiser deleted successfully!");
      setShowConfirmation(false);
      getAdvertiseData(); // Refresh the list after deletion
    } catch (error) {
      console.log("Error deleting the Advertiser: ", error);
      toast.error("Failed to delete advertiser. Please try again.");
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
    setSelectedAdvertiserId(null);
  };

  return (
    <div>
      <Header />
      <Sidebar />

      <div className="px-4 mt-3 sm:ml-64">
        <div className="mx-auto my-4 max-w-7xl px-0 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm bg-white">
          <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-5 mb-5">
              <h1 className="font-bold text-lg text-gray-600">Advertisers</h1>
            </div>
            <div className="flex items-center justify-end gap-x-6">
              <Link
                to={"/dashboard/advertiserform"}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
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
                  <th>Shop Name</th>
                  <th>Amount</th>
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
                                src={userInfo.shopLogo}
                                alt={userInfo.ownerName}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">
                              {userInfo.ownerName}
                            </div>
                            <div className="text-sm opacity-50">
                              {userInfo.village}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{userInfo.shopName}</td>
                      <td>{userInfo.amount}</td>
                      <td>
                        <button
                          onClick={() => handleDeleteClick(userInfo._id)}
                        >
                          {/* Delete Button */}
                          <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="25"
                                height="25"
                                viewBox="0 0 30 30"
                              >
                                <path
                                  fill="#FF7474"
                                  d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"
                                ></path>
                              </svg>
                        </button>
                        {/* Edit Button */}
                        <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="25"
                                height="25"
                                viewBox="0 0 64 64"
                              >
                                <path
                                  fill="#1A4380"
                                  d="M19.174,52.915l-7.524,1.672c-1.629,0.362-3.083-1.091-2.721-2.721l1.672-7.524 c0.248-1.114,0.808-2.134,0.614-1.941l30.17-30.17c2.172-2.172,4.071-2.172,5.243-1l5.657,5.657c1.172,1.172,1.172,3.071-1,5.243 l-30.17,30.17C21.309,52.107,20.288,52.668,19.174,52.915z"
                                ></path>
                                <ellipse
                                  cx="32"
                                  cy="61"
                                  opacity=".3"
                                  rx="19"
                                  ry="3"
                                ></ellipse>
                                <path
                                  fill="#fd3c4f"
                                  d="M48.965,24.451l3.32-3.32c1.172-1.172,1.172-3.071,0-4.243l-5.657-5.657	c-1.172-1.172-3.071-1.172-4.243,0l-3.32,3.32L48.965,24.451z"
                                ></path>
                              </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-gray-500">
                      No Advertise Data Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Delete Confirmation
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Are you sure you want to delete this Advertiser?
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-md w-24 mr-2 hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={handleCancelDelete}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md w-24 hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
