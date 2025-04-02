import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/authContext";
import request from "../service/request";
import { Navigate, useNavigate } from "react-router";

const baseUrl = 'http://localhost:3030/data/cars';

export function useCreate() {
    const { accessToken } = useContext(UserContext)
    const options = {
        headers: {

            'X-Authorization': accessToken
        },
    }
    const createCar = async (data) => {
        const response = await request.post(baseUrl, data, options)
        return response;
    }
    return {
        createCar,
    }
}

export function useGetAll() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(res => {
                setCars(res)

            })
            .catch(err => {
                console.error(err);
            })
    }, [])
    return {
        cars,
        setCars,
    }
}

export function useGetOne(carId) {
    const [car, setCar] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    useEffect(() => {
        request.get(`${baseUrl}/${carId}`)
            .then(res => {
                setCar(res)
                setSelectedImage(res.imageUrls[0]);
                setImageUrls(res.imageUrls);
            })
            .catch(err => {
                console.error(err);
            })
    }
        , [])
    return {
        car,
        setCar,
        selectedImage,
        setSelectedImage,
        imageUrls,
        setImageUrls,
    }
}

export function useEdit() {
    const { accessToken } = useContext(UserContext)
    const options = {
        headers: {

            'X-Authorization': accessToken
        },
    }
    const editCar = async (carId, data) => {
        const response = await request.put(`${baseUrl}/${carId}`, data, options)
        return response;
    }
    return {
        editCar,
    }
}

export function useDelete(carId) {
    const navigate = useNavigate()
    const { accessToken,_id} = useContext(UserContext)
    const options = {
        headers: {

            'X-Authorization': accessToken
        },
    }
    const { car } = useGetOne(carId)

    
    const isOwner = car?._ownerId == _id
    

    useEffect(() => {
        console.log(car)
        if(!!car.brand){
            if (!isOwner) {
                console.log(isOwner)
                navigate('/catalog')
            } else {
    
                request.delete(`${baseUrl}/${carId}`, null, options)
                    .then(res => {
                        console.log(res);
                        navigate('/catalog')
                    })
                    .catch(err => {
                        console.error(err);
                    })
            }
        }

    }, [car])
}

export function useGetAllCreatedByUser() {
    const [allUserCars, setAllUserCars] = useState(null)
    const { _id } = useContext(UserContext)

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `_ownerId="${_id}"`
        })
        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setAllUserCars)

    }, [])
    return {
        allUserCars,
    }
}

export function useGetLatest() {
    const [latestCar, setLatestCar] = useState()

    useEffect(() => {
        // const searchParams = new URLSearchParams({
        //     sortBy: '_createdOn desc',
        //     pageSize: 2
        // })
        request.get(`http://localhost:3030/data/cars?sortBy=_createdOn%20desc&pageSize=3`)
            .then(setLatestCar)
    }, [])

    return {
        latestCar
    }
}


