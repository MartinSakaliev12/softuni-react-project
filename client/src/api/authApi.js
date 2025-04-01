import { useContext, useEffect } from "react";
import request from "../service/request";
import { UserContext } from "../context/authContext";

const baseUrl = "http://localhost:3030/users";


export default function useLogin(){
    function login(data){
        
        const response = request.post(`${baseUrl}/login`, data);
        return response;
    }

    return {
        login,
    }
}

export function useRegister(){
    function register(data){
        const response = request.post(`${baseUrl}/register`, data);
        return response;
    }

    return {
        register,
    }
}

export function useLogout(){
    const {accessToken, logoutHandler} = useContext(UserContext);
    const options = {
        headers:{
            "X-Authorization": accessToken,
        }
    }
    useEffect(()=>{
        
        if(accessToken){
            request.get(`${baseUrl}/logout`, null, options)
            .then(res => logoutHandler())
            
        }
    }, []);
    return{
        isLoggedOut: !!accessToken,
    }
}