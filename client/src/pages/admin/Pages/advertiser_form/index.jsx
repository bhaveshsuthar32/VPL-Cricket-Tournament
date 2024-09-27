import  { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { addAdvertise, getAdvertiserById, editAdvertiser } from "../../../../api";

const defaultValue = {
  shopName: "",
  ownerName: "",
  village: "",
  amount: "",
  shopLogo: null,
};

export default function AdvertiserForm() {
  const [advertiser, setAdvertiser] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchAdvertiser();
    }
  }, [id]);

  const fetchAdvertiser = async () => {
    setIsLoading(true);
    try {
      const response = await getAdvertiserById(id);
      setAdvertiser(response.data);
    } catch (error) {
      console.error("Error fetching advertiser:", error);
      toast.error("Failed to load advertiser details.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdvertiser({ ...advertiser, [name]: value });
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

      setAdvertiser((prevAdvertiser) => ({
        ...prevAdvertiser,
        [field]: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const loadingToastId = toast.loading(
      id ? "Updating advertiser data ..." : "Submitting advertiser data ...",
      {
        position: "top-center",
      }
    );

    const formData = new FormData();
    Object.keys(advertiser).forEach((key) => {
      if (
        key !== "shopLogo" ||
        (key === "shopLogo" && advertiser.shopLogo instanceof File)
      ) {
        formData.append(key, advertiser[key]);
      }
    });

    try {
      let response;
      if (id) {
        response = await editAdvertiser(id, formData);
      } else {
        response = await addAdvertise(formData);
      }
      console.log(response);

      toast.dismiss(loadingToastId);
      navigate("/admin/advertisers");
      setTimeout(() => {
        toast.success(
          id
            ? "Advertiser updated successfully!"
            : "Advertiser added successfully!",
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
          ? "Failed to update advertiser. Please try again."
          : "Failed to add advertiser. Please try again.",
        {
          position: "top-center",
          autoClose: 1000,
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   const loadingToastId = toast.loading("Submitting team data...", {
  //     position: "top-center",
  //   });

  //   const formData = new FormData();
  //   Object.keys(advertiser).forEach((key) => {
  //     if (
  //       key !== "shopLogo" ||
  //       (key === "shopLogo" && advertiser.shopLogo instanceof File)
  //     ) {
  //       formData.append(key, advertiser[key]);
  //     }
  //   });

  //   try {
  //     const toastId = toast.loading(
  //       id ? "Updating advertiser..." : "Adding advertiser..."
  //     );
  //     let response;
  //     if (id) {
  //       response = await editAdvertiser(id, formData);
  //     } else {
  //       response = await addAdvertise(formData);
  //     }
  //     console.log(response);
  //     toast.success(
  //       id
  //         ? "Advertiser updated successfully!"
  //         : "Advertiser added successfully!",
  //       { id: toastId }
  //     );
  //     setTimeout(() => navigate("/admin/advertisers"), 1000);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     toast.error(
  //       id
  //         ? "Failed to update advertiser. Please try again."
  //         : "Failed to add advertiser. Please try again."
  //     );
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="">
      <Toaster position="top-center" />
      <Header />
      <Sidebar />
      <div className="px-4 mt-3 sm:ml-64">
        <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-10">
          <div className="grid grid-cols-9 border-b-[1px]">
            <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
              {id ? "Edit Advertiser" : "Add Advertiser"}
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="shopName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Shop Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="shopName"
                      name="shopName"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={advertiser.shopName}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="shopLogo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Logo
                  </label>
                  <div className="mt-2">
                    <input
                      id="shopLogo"
                      name="shopLogo"
                      type="file"
                      className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                      onChange={(e) => handleFileChange(e, "shopLogo")}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="ownerName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Owner Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="ownerName"
                      name="ownerName"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={advertiser.ownerName}
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
                      value={advertiser.village}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Advertiser Amount
                  </label>
                  <div className="mt-2">
                    <input
                      id="amount"
                      name="amount"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={advertiser.amount}
                    />
                  </div>
                </div>
                <div className="mt-6 sm:ml-28 lg-ml-0 flex items-center justify-end gap-x-6">
                  <Link
                    to="/admin/advertisers"
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
