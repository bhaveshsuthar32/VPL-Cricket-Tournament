import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import { getAdvertiser, deleteAdvertiser } from '../../../../api';
import { toast } from 'react-toastify'; // Assuming you use toast for notifications

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
      }
    } catch (error) {
      console.error("Error :- ", error);
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
      toast.error("Failed to delete Advertiser. Please try again.");
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
                to={"/admin/advertiserform"}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                ADD
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto ">
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
                      <td>{userInfo.ownerName}</td>
                      <td>{userInfo.shopName}</td>
                      <td>{userInfo.amount}</td>
                      <td>
                        <button
                          onClick={() => handleDeleteClick(userInfo._id)}
                        >
                          Delete
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
