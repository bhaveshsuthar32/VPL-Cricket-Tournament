import axios from "axios";

 const URL = "http://localhost:4000"
//const URL = "https://vpl-cricket-tournament-server.vercel.app"


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


export const userData = async () => {
    try {
      return await axios.get(`${URL}/user`);   
    } catch (error) {
      console.log("Error :- " , error);
    }
  };

  export const updateCaptain = async (data) => {
    try {
      return await axios.patch(`${URL}/editCaptain`, data); 
    } catch (error) {
      console.log("Error :- ", error)
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


export const deleteFoodSpon = async (id)  => {
  try {
    return await axios.delete(`${URL}/food-sponser/${id}`);
  } catch (error) {

    console.log("Error : ", error);
  }
};



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

export const deleteOtherSpon = async (id) => {
  try {
    return await axios.delete(`${URL}/other-sponser/${id}`);
  } catch (error){
    console.log("Error : ", error);
  }
}



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

export const deleteAdvertiser = async (id) => {
  try {
    return await axios.delete(`${URL}/advertiser/${id}`);
  } catch (error){
    console.log("Error : ", error);
  }
}


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

export const deleteSponsorType = async (id) => {
  try {
    return await axios.delete(`${URL}/deletesponsortype/${id}`);
  } catch (error) {
    console.log("Error : ", error);
  }
}
