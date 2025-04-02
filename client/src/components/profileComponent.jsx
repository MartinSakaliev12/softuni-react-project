import { useContext, useEffect } from "react"
import { Link } from "react-router"

import { UserContext } from "../context/authContext"
import { useGetAll, useGetAllCreatedByUser, useGetOne } from "../api/carsApi"
import "./css/catalog.css"

export default function Profile() {

    const { liked, email } = useContext(UserContext)
    const { allUserCars } = useGetAllCreatedByUser()
    const { cars } = useGetAll();
    if (!email) {
        return
    }
    const result = []
    console.log(cars)
    for (let car of cars) {
        console.log(car)
        if (liked.includes(car._id)) {
            console.log("pushed", car)
            result.push(car)
        }
    }
    // useEffect(()=>{
    //     for(let car of cars){
    //         console.log(car)
    //         if(liked.includes(car._id)){
    //             console.log("pushed", car)
    //             result.push(car)
    //         }
    //     }
    // },[cars,result])
    console.log("res", result)

    // console.log(allUserCars)
    return (
        <>

            <section className="container">

                <h3>Liked</h3>
                <div className="grid"
                >
                    {result.length > 0 ?

                        result?.map((res, index) =>
                            <Link className="card"
                                to={`/catalog/${res?._id}/details`}
                                key={index}>
                                <img src={!!res.imageUrls ? res.imageUrls[0] : null} alt="Car" />
                                <h4>{res?.brand} {res?.model}</h4>
                                <p>price: {res?.price}€</p>
                            </Link>)

                        : <>
                            <h3>No content</h3>
                        </>
                    }

                </div>

            </section>
            <section className="container">
                <h3>My</h3>
                <div className="grid">
                    {
                        allUserCars && allUserCars.length > 0 ?
                            allUserCars.map((res, index) =>
                                <Link className="card"
                                    to={`/catalog/${res._id}/details`}
                                    key={index}
                                >
                                    <img src={res.imageUrls[0]} alt="Car" />
                                    <h4>{res.brand} {res.model}</h4>
                                    <p>price: {res.price}€</p>
                                </Link>)
                            : <><h3>No content</h3></>
                    }


                </div>
            </section>
        </>
    )
}

