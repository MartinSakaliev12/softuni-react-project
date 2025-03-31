import { useContext, useEffect } from "react";
import { UserContext } from "../context/authContext";
import { useNavigate, useParams } from "react-router";


export default function Like(){
    const {carId}= useParams()
    const {liked,setLiked} = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if(liked){
            setLiked([...liked,carId])
            console.log(liked)
            navigate('/catalog')
            return

        }
    },[])
    return(<>
    </>)
}