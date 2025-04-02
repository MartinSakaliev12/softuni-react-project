import { useContext, useEffect } from "react";
import { UserContext } from "../context/authContext";
import { useNavigate, useParams } from "react-router";
import useLogin from "../api/authApi";
import { useLike } from "../api/likesApi";


export default function Like(){
    const {carId}= useParams()
    const {accessToken,email,password,userLikedId,liked,setLiked} = useContext(UserContext)
    const navigate = useNavigate()
    const {like} = useLike()

    useEffect(()=>{
        if(liked){
            setLiked([...liked,carId])
            like(accessToken,userLikedId,{email,liked:[...liked,carId],userLikedId})
                .then(res => console.log(res))
            
            navigate(`/catalog/${carId}/details`)
            return

        }

    },[])
    return(<>
    </>)
}