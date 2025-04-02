import { Navigate, useNavigate, useParams } from "react-router"
import { useDelete, useGetOne } from "../api/carsApi"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/authContext"

export default function Delete(){
    const navigate = useNavigate()
    const {carId} = useParams()
    
    

    useDelete(carId)
    
    
   
    
    return (<></>)
}