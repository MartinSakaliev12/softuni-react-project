import { Navigate, useNavigate, useParams } from "react-router"
import { useDelete, useGetOne } from "../api/carsApi"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/authContext"

export default function Delete(){
    const navigate = useNavigate()
    const {carId} = useParams()
    // const {car} = useGetOne(carId)
    
    // const{_id} = useContext(UserContext)
    // const isOwner = car.owner==_id
    // console.log(isOwner)
    // if(!isOwner){
    //     return<Navigate to="/catalog"/>
    // }

    useDelete(carId)
    
    
    navigate('/catalog')
    
    return (<></>)
}