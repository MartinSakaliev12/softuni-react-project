import { useContext } from "react";
import { UserContext } from "../context/authContext";
import request from "../service/request";

const baseUrl = 'http://localhost:3030/data/cars';

export function useCreate (){
    const {accessToken} = useContext(UserContext)
    const options = {
        headers: {
            
            'X-Authorization': accessToken
        },
    }
    const createCar =async(data)=>{
        const response = await request.post(baseUrl, data, options)
        return response;
    }
    return {
        createCar,
    }
}