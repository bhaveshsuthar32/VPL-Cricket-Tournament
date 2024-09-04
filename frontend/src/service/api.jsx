import axios from "axios";

const URL = "http://localhost:4000"

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
    return await axios.patch(`${URL}/editCaptain`, data); // Adjust the endpoint as necessary
};

