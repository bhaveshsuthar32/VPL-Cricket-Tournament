import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import InputField from "../../components/InputField";

const MAX_FILE_SIZE = 500 * 1024;

const validateFileSize = (file) => {
    if (file && file.size > MAX_FILE_SIZE) {
        return false;
    }
    return true;
};

export default function TeamForm() {

    const [teamData, setTeamData] = useState({
        team_name: "",
        village: "",
        sponser_1: "",
        sponser_2: "",
        captain: "",
        mobile: "",
        logo: null,
    });

    const [players, setPlayers] = useState(
        Array(14)
            .fill()
            .map(() => ({
                name: "",
                adhar: "",
                village: "",
                role: "Batsman",
                image: null,
            }))
    );

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTeamData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        if (!validateFileSize(file)) {
            toast.error("Image size should be less than 500 KB", {
                position: "top-center",
                autoClose: 3000,
            });
            e.target.value = ""; // Clear the file input
            return;
        }
        setTeamData((prev) => ({ ...prev, [field]: file }));
    };

    const handlePlayerChange = (index, field, value) => {
        if (field === "image") {
            const file = value;
            if (!validateFileSize(file)) {
                toast.error(
                    `Player ${index + 1} image size should be less than 500 KB`,
                    {
                        position: "top-center",
                        autoClose: 3000,
                    }
                );
                return;
            }
        }
        setPlayers((prevPlayers) => {
            const updatedPlayers = [...prevPlayers];
            updatedPlayers[index] = { ...updatedPlayers[index], [field]: value };
            return updatedPlayers;
        });
    };

    const validateForm = () => {
        // Check if all team data fields are filled
        const isTeamDataFilled = Object.values(teamData).every(
            (value) => value !== "" && value !== null
        );

        // Check if all player information is filled
        const isAllPlayersFilled = players.every(
            (player) => player.name && player.adhar && player.village && player.image
        );

        return isTeamDataFilled && isAllPlayersFilled;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Please fill in all fields for the team and players", {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        setIsSubmitting(true);
        const loadingToastId = toast.loading("Submitting team data...", {
            position: "top-center",
        });

        const formData = new FormData();

        // Append team data
        Object.entries(teamData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        // Append player data
        players.forEach((player, index) => {
            formData.append(`player${index + 1}`, JSON.stringify(player));
            if (player.image) {
                formData.append(`player${index + 1}Image`, player.image);
            }
        });

        try {
            const response = await fetch("http://localhost:4000/addTeam", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to create team");
            }

            toast.dismiss(loadingToastId);
            toast.success("Team created successfully!", {
                position: "top-center",
                autoClose: 3000,
            });
        } catch (error) {
            console.error("Error creating team:", error);
            toast.dismiss(loadingToastId);
            toast.error("Failed to create team.", {
                position: "top-center",
                autoClose: 3000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>
            <Navbar />
            <div className='border-2 lg:mx-[200px]'>

                <h1 className='text-center mt-10 text-[25px] font-semibold'>Add Team</h1>

                <form onSubmit={handleSubmit} className='lg:w-[800px] md:py-10 py-2 mx-auto '>
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
                                            name="team_name"
                                            value={teamData.team_name}
                                            onChange={handleChange}
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
                                            value={teamData.village}
                                            onChange={handleChange}
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
                                            name="sponser_1"
                                            value={teamData.sponser_1}
                                            onChange={handleChange}
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
                                            name="sponser_2"
                                            value={teamData.sponser_2}
                                            onChange={handleChange}
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
                                            name="captain"
                                            value={teamData.captain}
                                            onChange={handleChange}
                                            type="text"
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Team Name'
                                        />
                                    </div>
                                    <div className="mt-2">
                                    <label htmlFor="mob" className="block text-sm font-medium leading-6 text-gray-900">
                                        Mobile No.
                                    </label>
                                        <input
                                            id="mob"
                                            name="mobile"
                                            value={teamData.mobile}
                                            onChange={handleChange}
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
                                        <input name="logo"
                                            type="file"
                                            onChange={(e) => handleFileChange(e, "logo")}
                                            className="sm:file-input md:file-input-bordered border-[1px] rounded-sm border-black text-[11px] bg-white md:h-10 w-[160px]  md:w-full md:max-w-xs" />

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

                                {players.map((player, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-100 mx-0" >
                                        <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                            {index + 1}
                                        </td>
                                        <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                            <input type="text" label={`Player ${index + 1} Name`}
                                                name={`player${index + 1}Name`}
                                                value={player.name}
                                                onChange={(e) =>
                                                    handlePlayerChange(index, "name", e.target.value)
                                                } className=' px-2 md:w-[150px] w-[100px]' />
                                        </td>
                                        <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                            <input type="text" className=' px-2 md:w-[150px] w-[100px]' label={`Player ${index + 1} Aadhar`}
                                                name={`player${index + 1}Adhar`}
                                                value={player.adhar}
                                                onChange={(e) =>
                                                    handlePlayerChange(index, "adhar", e.target.value)
                                                } />
                                        </td>
                                        <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                            <input type="text" className=' px-2 md:w-[150px] w-[100px]' label={`Player ${index + 1} Village`}
                                                name={`player${index + 1}Village`}
                                                value={player.village}
                                                onChange={(e) =>
                                                    handlePlayerChange(index, "village", e.target.value)
                                                } />
                                        </td>
                                        <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                            {/* <input type="text" className=' px-2 md:w-[150px] w-[100px]' /> */}
                                            <select className='border-2 text-[13px]' value={player.role}
                                                onChange={(e) =>
                                                    handlePlayerChange(index, "role", e.target.value)
                                                } >
                                                <option value="Batsman">Batsman</option>
                                                <option value="WK/Batsman">WK/Batsman</option>
                                                <option value="Bowler">Bowler</option>
                                                <option value="All Rounder">All Rounder</option>
                                            </select>


                                        </td>
                                        <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                            <input className='border-[1px]  md:w-[150px] w-[100px] text-[11px] h-[28px]' label={`Player ${index + 1} Image (max 500 KB)`}
                                                name={`player${index + 1}Image`}
                                                type="file"
                                                onChange={(e) =>
                                                    handlePlayerChange(
                                                        index,
                                                        "image",
                                                        e.target.files[0]
                                                    )
                                                } />
                                        </td>
                                    </tr>

                                ))}


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
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Saving..." : "Save Team"}
                        </button>
                    </div>
                </form>

            </div>
            <Toaster />
            <Footer />
        </>
    );
}
