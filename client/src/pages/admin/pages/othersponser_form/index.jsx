import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import {
  addOtherSP,
  editOtherSponsor,
  getOtherSponsorById,
  getSponsorType,
} from "../../../../api";

const defaultValue = {
  sponType: "",
  fullName: "",
  village: "",
  amount: "",
  spOtherImage: null,
};

export default function OtherSponserForm() {
  const [otherSponsor, setOtherSponsor] = useState(defaultValue);
  const [sponsorTypes, setSponsorTypes] = useState([]); // State for storing sponsor types
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchOtherSponsor();
    }
  }, [id]);

  const fetchOtherSponsor = async () => {
    setIsLoading(true);
    try {
      const response = await getOtherSponsorById(id);
      setOtherSponsor(response.data);
    } catch (error) {
      console.error("Error fetching Other Sponsor:", error);
      toast.error("Failed to load Other Sponsor details.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch sponsor types
  const getSpTypeData = async () => {
    try {
      const response = await getSponsorType();
      setSponsorTypes(response.data); // Store sponsor types from the API response
    } catch (error) {
      console.log("Error :- ", error);
    }
  };

  useEffect(() => {
    getSpTypeData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtherSponsor({ ...otherSponsor, [name]: value });
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];

    // File size validation function
    const validateFileSize = (file) => {
      const maxSizeInBytes = 500 * 1024; // 500 KB
      return file.size <= maxSizeInBytes;
    };

    if (file) {
      if (!validateFileSize(file)) {
        toast.error("Image size should be less than 500 KB", {
          position: "top-center",
          autoClose: 3000,
        });
        e.target.value = ""; // Clear the file input
        return;
      }

      setOtherSponsor((prevOtherSponsor) => ({
        ...prevOtherSponsor,
        [field]: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const loadingToastId = toast.loading(
      id
        ? "Updating other sponsor data ..."
        : "Submitting other sponsor data ...",
      {
        position: "top-center",
      }
    );

    const formData = new FormData();
    Object.keys(otherSponsor).forEach((key) => {
      if (
        key !== "spOtherImage" ||
        (key === "spOtherImage" && otherSponsor.spOtherImage instanceof File)
      ) {
        formData.append(key, otherSponsor[key]);
      }
    });

    try {
      let response;
      if (id) {
        response = await editOtherSponsor(id, formData);
      } else {
        response = await addOtherSP(formData);
      }
      console.log(response);

      toast.dismiss(loadingToastId);
      navigate("/admin/osponser");
      setTimeout(() => {
        toast.success(
          id
            ? "Other Sponsor updated successfully!"
            : "Other Sponsor added successfully!",
          {
            position: "top-center",
            autoClose: 1000,
          }
        );
      }, 100);
    } catch (error) {
      console.error("Error:", error);
      toast.dismiss(loadingToastId);
      toast.error(
        id
          ? "Failed to update other sponsor. Please try again."
          : "Failed to add other sponsor. Please try again.",
        {
          position: "top-center",
          autoClose: 1000,
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <Toaster position="top-center" />
      <Header />
      <Sidebar />
      <div className="px-4 mt-3 sm:ml-64">
        <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-10">
          <div className="grid grid-cols-9 border-b-[1px]">
            <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
              {id ? "Edit Other Sponsor" : "Add Other Sponsor"}
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="sponType"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Sponsor Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="sponType"
                      name="sponType"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={otherSponsor.sponType}
                    >
                      <option value="">Select Type</option>
                      {sponsorTypes.length > 0 &&
                        sponsorTypes.map((sponsor) => (
                          <option key={sponsor._id} value={sponsor.sponsorType}>
                            {sponsor.sponsorType}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="spOtherImage"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Sponsor Profile
                  </label>
                  <div className="mt-2">
                    <input
                      id="spOtherImage"
                      name="spOtherImage"
                      type="file"
                      className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                      onChange={(e) => handleFileChange(e, "spOtherImage")}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={otherSponsor.fullName}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="village"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Village
                  </label>
                  <div className="mt-2">
                    <input
                      id="village"
                      name="village"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={otherSponsor.village}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Amount
                  </label>
                  <div className="mt-2">
                    <input
                      id="amount"
                      name="amount"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={otherSponsor.amount}
                    />
                  </div>
                </div>
                <div className="mt-6 sm:ml-28 lg-ml-0 flex items-center justify-end gap-x-6">
                  <Link
                    to="/admin/fsponser"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={isLoading}
                  >
                    {id
                      ? isLoading
                        ? "Updating..."
                        : "Update"
                      : isLoading
                      ? "Saving..."
                      : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
