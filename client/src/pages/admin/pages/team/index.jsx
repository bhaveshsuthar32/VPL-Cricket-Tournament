import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { deleteTeam, getTeam } from "../../../../api";
import { Toaster, toast } from "react-hot-toast";

export default function Team() {
  const [user, setUser] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const navigate = useNavigate();

  const getTeamData = async () => {
    try {
      const response = await getTeam();
      setUser(response.data);
    } catch (error) {
      console.log("Error :- ", error);
    }
  };

  useEffect(() => {
    getTeamData();
  }, []);

  const handleDeleteClick = (teamId) => {
    setSelectedTeamId(teamId);
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteTeam(selectedTeamId);
      toast.success("Team deleted successfully!");
      setShowConfirmation(false);
      getTeamData(); // Refresh the list after deletion
    } catch (error) {
      console.log("Error deleting the team : ", error);
      toast.error("Failed to delete team. Please try again.");
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
    setSelectedTeamId(null);
  };

  const handleEditClick = (userId) => {
    navigate(`/admin/hall-of-fame-form/${userId}`);
  };

  return (
    <div className="">
      <Toaster position="top-center" />
      <Header />
      <Sidebar />
      <div className="px-4 mt-3 sm:ml-64">
        <div className="mx-auto my-4 max-w-7xl px-0 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm bg-white">
          <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <div className="sm:col-span-5 mb-5">
              <h1 className="font-bold text-lg text-gray-600">Teams</h1>
            </div>
            
          </div>
          <div className="overflow-x-auto ">
            <table className="table sm:w-full w-[600px]">
              {/* head */}
              <thead className="sticky bg-white z-9">
                <tr>
                  <th>S.No</th>
                  <th>Team Name</th>
                  <th>Captain</th>
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
                              <img src={userInfo.logo} alt={userInfo.name} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">
                              {userInfo.team_name}
                            </div>
                            <div className="text-sm opacity-50">
                              {userInfo.village}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{userInfo.captain}</td>
                      <td>
                        <tr>
                          <td>
                            <button
                              onClick={() => handleDeleteClick(userInfo._id)}
                            >
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
                            <button
                              onClick={() => handleEditClick(userInfo._id)}
                            >
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
                                <path
                                  fill="#a7b3c7"
                                  d="M49.577,26.129l-2.414,2.414c-1.172,1.172-3.071,1.172-4.243,0l-7.998-7.998	c-1.172-1.172-1.172-3.071,0-4.243l2.414-2.414c1.172-1.172,3.071-1.172,4.243,0l7.998,7.998	C50.749,23.058,50.749,24.958,49.577,26.129z"
                                ></path>
                                <path
                                  fill="#ffce29"
                                  d="M20.959,52.189l-9.874-9.185c-0.209,0.425-0.38,0.871-0.483,1.338l-1.672,7.524	c-0.362,1.629,1.091,3.083,2.721,2.721l7.524-1.672C19.809,52.774,20.407,52.521,20.959,52.189z"
                                ></path>
                                <path
                                  fill="#9c34c2"
                                  d="M9.589,48.898l-0.66,2.968c-0.362,1.629,1.091,3.083,2.721,2.721l2.968-0.66L9.589,48.898z"
                                ></path>
                                <path
                                  d="M52.286,16.888l-0.691-0.691c-1.04,0.145-2.045,0.599-2.845,1.399l-30.17,30.17 c-0.084,0.083-0.199,0.156-0.336,0.212h0.001c-0.025,0.01-0.05,0.021-0.074,0.03c-0.027,0.01-0.054,0.02-0.081,0.026l-4.407,0.979 c-2.423,0.538-4.026,2.753-3.892,5.154c0.505,0.383,1.161,0.575,1.86,0.419l7.525-1.672c1.114-0.248,2.134-0.808,2.941-1.614 l22.029-22.029c1.032,0.323,2.2,0.09,3.018-0.728l2.414-2.414c0.818-0.818,1.051-1.986,0.728-3.018l1.981-1.981 C53.457,19.959,53.457,18.059,52.286,16.888z"
                                  opacity=".15"
                                ></path>
                                <path
                                  fill="#fff"
                                  d="M19.273,34.344c0.976,0.977,2.256,1.465,3.535,1.465c1.279,0,2.56-0.488,3.535-1.465 l19.578-19.579c0.799-0.799,1.253-1.804,1.397-2.843l-0.691-0.691c-1.172-1.172-3.071-1.172-4.243,0l-1.953,1.953 c-1.05-0.361-2.259-0.134-3.097,0.704l-2.414,2.414c-0.838,0.838-1.066,2.046-0.704,3.097L19.273,34.344 C19.273,34.344,19.273,34.344,19.273,34.344z"
                                  opacity=".3"
                                ></path>
                                <line
                                  x1="41.079"
                                  x2="38.534"
                                  y1="17.461"
                                  y2="20.006"
                                  fill="none"
                                  stroke="#fff"
                                  stroke-linecap="round"
                                  stroke-miterlimit="10"
                                  stroke-width="3"
                                ></line>
                              </svg>
                            </button>
                          </td>
                        </tr>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-gray-500">
                      No Hall Of Fame Data Available
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
                  Are you sure you want to delete this Team?
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-24 mr-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  Delete
                </button>
                <button
                  onClick={handleCancelDelete}
                  className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-24 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
