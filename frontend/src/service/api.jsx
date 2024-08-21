import axios from "axios";

const URL = "http://localhost:4000"

export const signData = async(data)=>{
    try {
        return await axios.post(`${URL}/sign`, data)
    } catch (error) {
        console.log("Error :- " , error);
    }
}

export const loginData = async(data)=>{
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log("Error :- " , error);
    }
}