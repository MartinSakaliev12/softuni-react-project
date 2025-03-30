import { useNavigate } from "react-router"
import { useLogout } from "../api/authApi"
import { useEffect } from "react"
import request from "../service/request"

export default function Logout(){
    const {isLoggedout} = useLogout()
    const navigate = useNavigate()
    
    useEffect(()=>{
        console.log(isLoggedout)
        if(!isLoggedout){
            navigate("/login")
        }
         
    },[])

    return <></>

            
    
}