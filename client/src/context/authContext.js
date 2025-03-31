import { createContext } from "react";


export const UserContext = createContext({
    _id:"",
    email:"",
    password:"",
    accessToken:"",
    liked:[],
    setLiked: ()=>null,
    loginHandler: ()=>null,
    logoutHandler: ()=>null,
});