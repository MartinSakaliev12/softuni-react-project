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
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    useEffect(()=>{
        request.get(`${baseUrl}/${carId}`)
            .then(res=>{
                setCar(res)
                setSelectedImage(res.imageUrls[0]);
                setImageUrls(res.imageUrls);
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
        imageUrls,
        setImageUrls,
    }
}

export function useEdit(){
    const {accessToken} = useContext(UserContext)
    const options = {
        headers: {
            
            'X-Authorization': accessToken
        },
    }
    const editCar =async(carId, data)=>{
        const response = await request.put(`${baseUrl}/${carId}`, data, options)
        return response;
    }
    return {
        editCar,
    }
}

export function useDelete(carId){
    const {accessToken} = useContext(UserContext)
    const options = {
        headers: {
            
            'X-Authorization': accessToken
        },
    }
    useEffect(()=>{
        request.delete(`${baseUrl}/${carId}`,null, options)
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.error(err);
            })
    })
}

export function useGetAllCreatedByUser(){
    const [allUserCars, setAllUserCars] = useState(null)
    const {_id} = useContext(UserContext)

    useEffect(()=>{
        const searchParams = new URLSearchParams({
            where: `_ownerId="${_id}"`
        })
        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setAllUserCars)

    },[])
    return {
        allUserCars,
    }
}


