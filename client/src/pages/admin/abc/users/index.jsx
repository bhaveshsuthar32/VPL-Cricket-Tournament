import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { getUser, updateCaptain } from "../../../../api";
import { toast } from "react-hot-toast";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingUserId, setPendingUserId] = useState(null);
  const [currentCaptainStatus, setCurrentCaptainStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getUser();
      if (response && response.data) {
        setUsers(response.data);
      } else {
        throw new Error("No data received from the server");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to load users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCaptainChangeInitiate = (userId, currentCaptain) => {
    setPendingUserId(userId);
    setCurrentCaptainStatus(currentCaptain);
    setShowConfirmation(true);
  };

  const handleCaptainChangeConfirm = async () => {
    try {
      const newCaptainStatus = !currentCaptainStatus;
      await updateCaptain({
        userId: pendingUserId,
        captainStatus: newCaptainStatus,
      });

      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u._id === pendingUserId ? { ...u, captain: newCaptainStatus } : u
        )
      );
      toast.success("Captain updated successfully!");
      setShowConfirmation(false);
    } catch (error) {
      console.error("Error updating captain:", error);
      toast.error("Failed to update captain. Please try again.");
    }
  };

  const handleCaptainChangeCancel = () => {
    setShowConfirmation(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="">
      <Header />
      <Sidebar />
      <div className="sm:px-4 px-2 sm:ml-64">
        <div className="mx-auto my-4 max-w-7xl px-0 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm bg-white">
          <div className="grid grid-cols-9 border-b-[1px] mx-4 sm:mx-0">
            <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
              Users
            </h1>
          </div>

          <div className="overflow-x-auto">
            <table className="table sm:w-full w-[600px]">
              <thead className="sticky bg-white z-9 ">
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Captain</th>
                </tr>
              </thead>
              <tbody>
                {users.map((userInfo, index) => (
                  <tr className="hover px-0" key={userInfo._id}>
                    <td>{index + 1}</td>
                    <td className="leading-4">
                      <h1 className="font-bold text-[11px] sm:text-[14px] ">
                        {userInfo.username}
                      </h1>
                      <p className="opacity-70 text-[11px] sm:text-sm ">
                        {userInfo.email}
                      </p>
                    </td>
                    <td>{userInfo.email}</td>
                    <td>
                      <input
                        type="checkbox"
                        className="toggle toggle-sm toggle-success"
                        checked={userInfo.captain}
                        onChange={() =>
                          handleCaptainChangeInitiate(
                            userInfo._id,
                            userInfo.captain
                          )
                        }
                      />
                    </td>
                    <td>{/* Additional action buttons can go here */}</td>
                  </tr>
                ))}
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
                Update Confirmation
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Are you sure you want to update the captain status?
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={handleCaptainChangeConfirm}
                  className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-24 mr-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  Update
                </button>
                <button
                  onClick={handleCaptainChangeCancel}
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
