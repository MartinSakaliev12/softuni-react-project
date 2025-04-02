import { useContext, useEffect } from "react";
import { UserContext } from "../context/authContext";
import { useNavigate, useParams } from "react-router";
import useLogin from "../api/authApi";
import { useLike } from "../api/likesApi";
import { useGetOne } from "../api/carsApi";


export default function Like(){
    const {carId}= useParams()
    const {accessToken,email,_id,password,userLikedId,liked,setLiked} = useContext(UserContext)
    const navigate = useNavigate()
    const {like} = useLike()
    const {car} =useGetOne(carId)

    useEffect(()=>{
        if(liked){
            
            const isOwner = car?._ownerId == _id
            console.log(isOwner)
            if(car?.brand){
                if(isOwner){
                    navigate(`/catalog/${carId}/details`)
                    return
                }else{
                    if(liked.includes(carId)){
                        setLiked([...liked])
                    }else{
                        setLiked([...liked,carId])
                    }
                    like(accessToken,userLikedId,{email,liked:[...liked,carId],userLikedId})
                    .then(res => console.log(res))
            
                    navigate(`/catalog/${carId}/details`)
                    return
                }
            }
            

        }

    },[car])
    return(<>
    </>)
}