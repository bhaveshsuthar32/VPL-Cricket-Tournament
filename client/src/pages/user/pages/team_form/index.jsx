// import React, { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import InputField from "../../components/InputField";

// const MAX_FILE_SIZE = 500 * 1024;

// const validateFileSize = (file) => {
//   if (file && file.size > MAX_FILE_SIZE) {
//     return false;
//   }
//   return true;
// };

export default function TeamForm() {
//   const [teamData, setTeamData] = useState({
//     team_name: "",
//     village: "",
//     sponser_1: "",
//     sponser_2: "",
//     captain: "",
//     mobile: "",
//     logo: null,
//   });

//   const [players, setPlayers] = useState(
//     Array(14)
//       .fill()
//       .map(() => ({
//         name: "",
//         adhar: "",
//         village: "",
//         role: "Batsman",
//         image: null,
//       }))
//   );

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTeamData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e, field) => {
//     const file = e.target.files[0];
//     if (!validateFileSize(file)) {
//       toast.error("Image size should be less than 500 KB", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       e.target.value = ""; // Clear the file input
//       return;
//     }
//     setTeamData((prev) => ({ ...prev, [field]: file }));
//   };

//   const handlePlayerChange = (index, field, value) => {
//     if (field === "image") {
//       const file = value;
//       if (!validateFileSize(file)) {
//         toast.error(
//           `Player ${index + 1} image size should be less than 500 KB`,
//           {
//             position: "top-center",
//             autoClose: 3000,
//           }
//         );
//         return;
//       }
//     }
//     setPlayers((prevPlayers) => {
//       const updatedPlayers = [...prevPlayers];
//       updatedPlayers[index] = { ...updatedPlayers[index], [field]: value };
//       return updatedPlayers;
//     });
//   };

//   const validateForm = () => {
//     // Check if all team data fields are filled
//     const isTeamDataFilled = Object.values(teamData).every(
//       (value) => value !== "" && value !== null
//     );

//     // Check if all player information is filled
//     const isAllPlayersFilled = players.every(
//       (player) => player.name && player.adhar && player.village && player.image
//     );

//     return isTeamDataFilled && isAllPlayersFilled;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       toast.error("Please fill in all fields for the team and players", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     const loadingToastId = toast.loading("Submitting team data...", {
//       position: "top-center",
//     });

//     const formData = new FormData();

//     // Append team data
//     Object.entries(teamData).forEach(([key, value]) => {
//       formData.append(key, value);
//     });

//     // Append player data
//     players.forEach((player, index) => {
//       formData.append(`player${index + 1}`, JSON.stringify(player));
//       if (player.image) {
//         formData.append(`player${index + 1}Image`, player.image);
//       }
//     });

//     try {
//       const response = await fetch("http://localhost:4000/addTeam", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create team");
//       }

//       toast.dismiss(loadingToastId);
//       toast.success("Team created successfully!", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//     } catch (error) {
//       console.error("Error creating team:", error);
//       toast.dismiss(loadingToastId);
//       toast.error("Failed to create team.", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

  return (
    <>
          <Navbar />
            <div className='border-2 lg:mx-[200px]'>

                <h1 className='text-center mt-10 text-[25px] font-semibold'>Add Team</h1>

                <form className='lg:w-[800px] md:py-10 py-2 mx-auto '>
                    <div className="">


                        <div className="border-b py-6 border-gray-900/10 md:px-[100px] px-2">
                            <h2 className=" font-semibold my-0 text-gray-900">Team Information</h2>
                            <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-6">
                                <div className="sm:col-span-3 col-span-1">
                                    <label htmlFor="team" className="block text-sm font-medium leading-6 text-gray-900">
                                        Team Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="team"
                                            name="team"
                                            type="text"
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Team name'
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="village" className="block text-sm font-medium leading-6 text-gray-900">
                                        Village
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="village"
                                            name="village"
                                            type="text"
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Team name'
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 col-span-1">
                                    <label htmlFor="spn1" className="block text-sm font-medium leading-6 text-gray-900">
                                        Sponsor-1
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="spn1"
                                            name="spn1"
                                            type="text"
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Sponsor-1 name'
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="spn-2" className="block text-sm font-medium leading-6 text-gray-900">
                                        Sponsor-2
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="spn-2"
                                            name="spn-2"
                                            type="text"
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Sponsor-2 name'
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 col-span-1">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Captain Name
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
                                        Team Logo
                                    </label>
                                    <div className="mt-2">
                                        <input type="file" className="sm:file-input md:file-input-bordered border-[1px] rounded-sm border-black text-[11px] bg-white md:h-10 w-[160px]  md:w-full md:max-w-xs" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* add team details */}

                    {/* <div className="overflow-x-auto"> */}
                    <div className="overflow-x-auto mt-20 ">
                        <table className=" md:w-[800px] w-[540px]">
                            <thead>
                                <tr className="text-[12px] bg-slate-200">
                                    <th className="py-2 border-[1px] border-black">Sr no.</th>
                                    <th className="py-2 border-[1px] border-black">Name</th>
                                    <th className="py-2 border-[1px] border-black">Aadhar No.</th>
                                    <th className="py-2 border-[1px] border-black">Village</th>
                                    <th className="py-2 border-[1px] border-black">Role</th>
                                    <th className="py-2 border-[1px] border-black">Image</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        1
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player1'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar1' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village1'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        {/* <input type="text" className=' px-2 md:w-[150px] w-[100px]' /> */}
                                        <select id="" className='border-2 text-[13px]' name="role1" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img1'/>
                                    </td>
                                </tr>



                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        2
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player2'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar2' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village2'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <select id="" className='border-2 text-[13px]' name="role2" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img2'/>
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        3
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player3'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar3' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village3'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <select id="" className='border-2 text-[13px]' name="role3" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img3'/>
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        4
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player4'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar4' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village4'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <select id="" className='border-2 text-[13px]' name="role4" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img4'/>
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        5
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player5'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar5' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village5'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <select id="" className='border-2 text-[13px]' name="role5" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img5'/>
                                    </td>
                                </tr>
                                

                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        6
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player6'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar6' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village6'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <select id="" className='border-2 text-[13px]' name="role6" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img6'/>
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        7
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player7'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar7' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village7'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <select id="" className='border-2 text-[13px]' name="role7" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img7'/>
                                    </td>
                                </tr>                                
                                
                                
                                
                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        8
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player8'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar8' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village8'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <select id="" className='border-2 text-[13px]' name="role8" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img8'/>
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        9
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player9'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar9' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village9'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <select id="" className='border-2 text-[13px]' name="role9" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img9'/>
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        10
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player10'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar10' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village10'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <select id="" className='border-2 text-[13px]' name="role10" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img10'/>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        11
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player11'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar11' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village11'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <select id="" className='border-2 text-[13px]' name="role11" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img11'/>
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        12
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player12'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar12' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village12'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <select id="" className='border-2 text-[13px]' name="role12" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img12'/>
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        13
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='player13'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='Aadhar13' />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input type="text" className=' px-2 md:w-[150px] w-[100px]' name='village13'/>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <select id="" className='border-2 text-[13px]' name="role13" >
                                            <option value="" >Batsman</option>
                                            <option value="" name="" id="">WK/Batsman</option>
                                            <option value="" name="" id="">Bowler</option>
                                            <option value="" name="" id="">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input type="file" className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' name='img13'/>
                                    </td>
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
        <Footer />
    </>
  );
}
