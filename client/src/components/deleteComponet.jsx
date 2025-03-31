import { useNavigate, useParams } from "react-router"
import { useDelete } from "../api/carsApi"
import { useEffect } from "react"

export default function Delete(){
    const navigate = useNavigate()
    const {carId} = useParams()
    useDelete(carId)
    
    useEffect(()=>{
        navigate('/catalog')
    },[])
    return (<></>)
}