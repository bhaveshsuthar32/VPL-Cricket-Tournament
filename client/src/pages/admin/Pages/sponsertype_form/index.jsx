// import React, { useState } from "react";
// import Header from "../../components/Header";
// import Sidebar from "../../components/Sidebar";
// import { Link, useNavigate } from "react-router-dom";
// import { Toaster, toast } from "react-hot-toast";
// import { addSponsorType } from "../../../api";

// const defaultValue = {
//   sponsorType: "",
// };

// export default function SponserTypeForm() {
//   const [spType, setSpType] = useState(defaultValue);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSpType({ ...spType, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Submitting sponsorType:", spType);
//       await addSponsorType(spType);

//       toast.success("Sponsor type added successfully!", {
//         duration: 2000,
//       });

//       // Use setTimeout to delay navigation
//       setTimeout(() => {
//         navigate("/admin/sponsertype");
//       }, 2000); // 3000ms delay to match toast duration
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Failed to add sponsor type. Please try again.", {
//         duration: 2000,
//       });
//     }
//   };

//   return (
//     <div className="">
//       <Toaster position="top-center" />
//       <Header />
//       <Sidebar />
//       <div className="px-4 mt-3 sm:ml-64">
//         <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-10">
//           <div className="grid grid-cols-9 border-b-[1px]">
//             <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
//               Add Sponser Type
//             </h1>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//               <div className="sm:col-span-5">
//                 <label
//                   htmlFor="sponsorType"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Sponser Type
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="sponsorType"
//                     name="sponsorType"
//                     type="text"
//                     autoComplete="given-name"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     onChange={handleChange}
//                     value={spType.sponsorType}
//                   />
//                 </div>
//               </div>
//               <div className="mt-6 flex items-center justify-end gap-x-6">
//                 <Link
//                   to={"/dashboard/sponsertype"}
//                   className="text-sm font-semibold leading-6 text-gray-900"
//                 >
//                   Cancel
//                 </Link>
//                 <button
//                   type="submit"
//                   className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { addSponsorType, editSponsorType, getSponsorById } from "../../../../api";

const defaultValue = {
  sponsorType: "",
};

export default function SponsorTypeForm() {
  const [spType, setSpType] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchSponsorType();
    } else {
      setSpType(defaultValue);
    }
  }, [id]);

  const fetchSponsorType = async () => {
    toast.dismiss();
    try {
      const response = await getSponsorById(id);
      console.log("Fetched sponsor type:", response);
      if (response && response.data) {
        setSpType(response.data);
      } else {
        toast.error("Failed to fetch sponsor type data.");
      }
    } catch (error) {
      console.error("Error fetching sponsor type:", error);
      toast.error("Failed to fetch sponsor type data.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpType((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting spType:", spType);
    try {
      let response;
      if (id) {
        console.log("Updating sponsor type:", id, spType);
        response = await editSponsorType(id, spType);
      } else {
        console.log("Adding new sponsor type:", spType);
        response = await addSponsorType(spType);
      }

      console.log("API response:", response);

      if (response && response.data) {
        toast.success(
          `Sponsor type ${id ? "updated" : "added"} successfully!`,
          { duration: 1000 }
        );
        setTimeout(() => {
          navigate("/admin/sponsertype");
        }, 1000);
      } else {
        throw new Error("Operation failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        `Failed to ${id ? "update" : "add"} sponsor type. ${
          error.message || "Please try again."
        }`,
        { duration: 1000 }
      );
    }
  };

  return (
    <div className="">
      <Header />
      <Sidebar />
      <div className="px-4 mt-3 sm:ml-64">
        <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-10">
          <div className="grid grid-cols-9 border-b-[1px]">
            <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
              {id ? "Edit" : "Add"} Sponsor Type
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-5">
                <label
                  htmlFor="sponsorType"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sponsor Type
                </label>
                <div className="mt-2">
                  <input
                    id="sponsorType"
                    name="sponsorType"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={spType.sponsorType || ""}
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link
                  to="/admin/sponsertype"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {id ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
