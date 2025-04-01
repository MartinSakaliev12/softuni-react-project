import { createContext } from "react";


export const UserContext = createContext({
    _id:"",
    email:"",
    password:"",
    accessToken:"",
    userLikedId:"",
    liked:[],
    setLiked: ()=>null,
    loginHandler: ()=>null,
    logoutHandler: ()=>null,
});