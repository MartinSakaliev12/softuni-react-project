import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/authContext";
import request from "../service/request";

const baseUrl = 'http://localhost:3030/data/cars';

export function useCreate (){
    const {accessToken} = useContext(UserContext)
    const options = {
        headers: {
            
            'X-Authorization': accessToken
        },
    }
    const createCar =async(data)=>{
        const response = await request.post(baseUrl, data, options)
        return response;
    }
    return {
        createCar,
    }
}

export function useGetAll(){
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        request.get(baseUrl)
            .then(res=>{
                setCars(res)
                console.log(res);
            })
            .catch(err=>{
                console.error(err);
            })
    },[])
    return {
        cars,
        setCars,
    }
}

export function useGetOne(carId){
    const [car, setCar] = useState({});
    const [selectedImage, setSelectedImage] = useState("");
    useEffect(()=>{
        request.get(`${baseUrl}/${carId}`)
            .then(res=>{
                setCar(res)
                setSelectedImage(res.imageUrls[0]);
            })
            .catch(err=>{
                console.error(err);
            })
    }
    ,[])
    return{
        car,
        setCar,
        selectedImage,
        setSelectedImage,
    }
}