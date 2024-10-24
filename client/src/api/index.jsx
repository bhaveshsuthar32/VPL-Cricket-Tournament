import axios from "axios";

//  const URL = "http://localhost:4000"
const URL = "https://vpl-cricket-tournament-server.vercel.app"


export const signData = async(data)=>{
    try {
        return await axios.post(`${URL}/sign`, data)
    } catch (error) {
        console.log("Error :- " , error);
    }
}

export const loginData = async (data) => {
    try {
      const response = await axios.post(`${URL}/login`, data);
      return response; 
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      throw error; 
    }
  };



export const addFoodSP = async(data) => {
  try {
    return await axios.post(`${URL}/addFoodSpon`, data);
  } catch (error) {
    console.log("Error :- ", error);
  }
}

export const getFoodSP = async () => {
  try {
    return await axios.get(`${URL}/getFoodSpon`);   
  } catch (error) {
    console.log("Error :- " , error);
  }
};

export const getFoodSponsorById = async (id) => {
  try {
    return await axios.get(`${URL}/getFoodSpon/${id}`);   
  } catch (error) {
    console.log("Error :- " , error);
  }
};

export const editFoodSponsor = async (id, data) => {
  try {
    console.log("Sending data to update:", data); // Add this line
    const response = await axios.patch(`${URL}/food-sponser/${id}`, data);
    console.log("Update response:", response); // Add this line
    return response;
  } catch (error) {
    console.error("Error in editFoodSponsor:", error);
    throw error;
  }
};

export const deleteFoodSpon = async (id)  => {
  try {
    return await axios.delete(`${URL}/food-sponser/${id}`);
  } catch (error) {

    console.log("Error : ", error);
  }
};


// Other Sponsor --------------

export const addOtherSP = async(data) => {
  try {
    return await axios.post(`${URL}/addOtherSpon`, data);
  } catch (error) {
    console.log("Error :- ", error);
  }
}

export const getOtherSP = async () => {
  try {
    return await axios.get(`${URL}/getOtherSpon`);   
  } catch (error) {
    console.log("Error :- " , error);
  }
};

export const getOtherSponsorById = async (id) => {
  try {
    return await axios.get(`${URL}/getOtherSpon/${id}`);   
  } catch (error) {
    console.log("Error :- " , error);
  }
};

export const editOtherSponsor = async (id, data) => {
  try {
    console.log("Sending data to update:", data); // Add this line
    const response = await axios.patch(`${URL}/other-sponser/${id}`, data);
    console.log("Update response:", response); // Add this line
    return response;
  } catch (error) {
    console.error("Error in editOtherSponsor:", error);
    throw error;
  }
};

export const deleteOtherSpon = async (id) => {
  try {
    return await axios.delete(`${URL}/other-sponser/${id}`);
  } catch (error){
    console.log("Error : ", error);
  }
}


// Advertiser ----------------

export const addAdvertise = async(data) => {
  try {
    return await axios.post(`${URL}/addAdvertise`, data);
  } catch (error) {
    console.log("Error :- ", error);
  }
}

export const getAdvertiser = async () => {
  try {
    return await axios.get(`${URL}/getAdvertise`);   
  } catch (error) {
    console.log("Error :- " , error);
  }
};

export const getAdvertiserById = async (id) => {
  try {
    return await axios.get(`${URL}/getAdvertise/${id}`);   
  } catch (error) {
    console.log("Error :- " , error);
  }
};

export const editAdvertiser = async (id, data) => {
  try {
    console.log("Sending data to update:", data); // Add this line
    const response = await axios.patch(`${URL}/advertiser/${id}`, data);
    console.log("Update response:", response); // Add this line
    return response;
  } catch (error) {
    console.error("Error in editAdvertiser:", error);
    throw error;
  }
};

export const deleteAdvertiser = async (id) => {
  try {
    return await axios.delete(`${URL}/advertiser/${id}`);
  } catch (error){
    console.log("Error : ", error);
  }
}


// Hall Of Fame ----------------

export const addHallOfFame = async(data) => {
  try {
    return await axios.post(`${URL}/hall-of-fame`, data);
  } catch (error) {
    console.log("Error :- ", error);
  }
}

export const getHallOfFame = async () => {
  try {
    return await axios.get(`${URL}/hall-of-fame`);   
  } catch (error) {
    console.log("Error :- " , error);
  }
};

export const getHallOfFameById = async (id) => {
  try {
    return await axios.get(`${URL}/hall-of-fame/${id}`);   
  } catch (error) {
    console.log("Error :- " , error);
  }
};

export const editHallOfFame = async (id, data) => {
  try {
    console.log("Sending data to update:", data); // Add this line
    const response = await axios.patch(`${URL}/hall-of-fame/${id}`, data);
    console.log("Update response:", response); // Add this line
    return response;
  } catch (error) {
    console.error("Error in editAdvertiser:", error);
    throw error;
  }
};

export const deleteHallOfFame = async (id) => {
  try {
    return await axios.delete(`${URL}/hall-of-fame/${id}`);
  } catch (error){
    console.log("Error : ", error);
  }
}


// Sponsor Type--------------

export const addSponsorType = async(data) => {
  try {
    return await axios.post(`${URL}/sponsorType`, data);
  } catch (error) {
    console.log("Error :- ", error);
  }
}

export const getSponsorType = async () => {
  try {
    return await axios.get(`${URL}/getSponsorType`);   
  } catch (error) {
    console.log("Error :- " , error);
  }
};

export const getSponsorById = async (id) => {
  try {
    return await axios.get(`${URL}/getSponsorType/${id}`);   
  } catch (error) {
    console.log("Error :- " , error);
  }
};

export const editSponsorType = async (id, data) => {
  try {
    console.log("Sending data to update:", data); // Add this line
    const response = await axios.patch(`${URL}/sponsor-type/${id}`, data);
    console.log("Update response:", response); // Add this line
    return response;
  } catch (error) {
    console.error("Error in editSponsorType:", error);
    throw error;
  }
};

export const deleteSponsorType = async (id) => {
  try {
    return await axios.delete(`${URL}/deletesponsortype/${id}`);
  } catch (error) {
    console.log("Error : ", error);
  }
}

// User -----------------
export const signUser = async(data)=>{
  try {
      return await axios.post(`${URL}/sign`, data)
  } catch (error) {
      console.log("Error :- " , error);
  }
}

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/login`, data);
    return response; 
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
    throw error; 
  }
};

export const getUser = async () => {
  try {
    return await axios.get(`${URL}/user`);   
  } catch (error) {
    console.log("Error :- " , error);
  }
};

export const getUserProfile = async () => {
  const token = localStorage.getItem('token'); // Retrieve token from localStorage
  try {
    return await axios.get(`${URL}/user-profile`, {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
      },
    });
  } catch (error) {
    console.log("Error fetching user profile: ", error);
    throw error;
  }
};


export const updateCaptain = async (data) => {
  try {
    return await axios.patch(`${URL}/editCaptain`, data); 
  } catch (error) {
    console.log("Error :- ", error)
  }
};


export const createTeam = async(data) => {
  try {
      console.log("dekh lo");
      return await axios.post(`${URL}/addteam`, data);
  } catch(error){
      console.log("Sorry bhai galti se bol diya, nhi ho rha", error);
  }
}

export const getTeam = async() => {
  try {
    return await axios.get(`${URL}/teams`);   
  } catch (error) {
    console.log("Error :- " , error);
  }
}

export const getTeamById = async(id) => {
  try {
    return await axios.get(`${URL}/teams/${id}`);
  } catch(error){
    console.log("Error :- ", error);
  }
}


export const deleteTeam = async (id) => {
  try {
    return await axios.delete(`${URL}/teams/${id}`);
  } catch (error){
    console.log("Error : ", error);
  }
}




