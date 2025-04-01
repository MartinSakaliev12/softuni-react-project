import { useContext, useEffect } from "react"
import {Link} from "react-router"

import { UserContext } from "../context/authContext"
import { useGetAllCreatedByUser, useGetOne } from "../api/carsApi"
import "./css/homePage.css"

export default function Profile(){
    
    const {liked,email}= useContext(UserContext)
    const {allUserCars} = useGetAllCreatedByUser()

    if(!email){
        return
    }
    const result = []
    for(let i = 0; i < liked.length;i++){
        const {car} = useGetOne(liked[i])
        console.log('------')
        result.push(car)
    }
    
    console.log(result)
    const empty =[]
    console.log(allUserCars)
    return(
        <>
            
            <section className="container">
                
                <h3>Харесани</h3>
                <div className="grid"
                   >
                {result.length > 0?
                    
                    result?.map((res,index) =>    
                    <Link className="card"
                    to={`/catalog/${res?._id}/details`}
                    key ={index}>
                        <img src={!!res.imageUrls? res.imageUrls[0]:null} alt="Car" />
                        <h4>{res?.brand} {res?.model}</h4>
                        <p>Цена: {res?.price}€</p>
                    </Link>)
                        
                    :<>
                    <h3>No content</h3>
                    </>
                }
                
                </div>
                
            </section>
            <section className="container">
                <h3>Моите обяви</h3>
                <div className="grid">
                    {
                        allUserCars && allUserCars.length >0? 
                        allUserCars.map((res,index)=>
                        <Link className="card"
                            to={`/catalog/${res._id}/details`}
                            key={index}
                            >
                        <img src={res.imageUrls[0]} alt="Car" />
                        <h4>{res.brand} {res.model}</h4>
                        <p>Цена: {res.price}€</p>
                        </Link>)
                        :<><h3>No content</h3></>
                    }
                    
                    
                </div>
            </section>
        </>
    )
}

