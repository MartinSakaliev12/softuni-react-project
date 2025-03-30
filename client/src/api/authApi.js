import request from "../service/request";

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