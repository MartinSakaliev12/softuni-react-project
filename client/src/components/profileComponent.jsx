import { useContext, useEffect } from "react"

import { UserContext } from "../context/authContext"
import { useGetOne } from "../api/carsApi"

export default function Profile(){
    
    const {liked,email}= useContext(UserContext)
    if(!email){
        return
    }
    const result = []
    for(let i = 0; i < liked.length;i++){
        const {car} = useGetOne(liked[i])
        console.log('------')
        result.push(car)
    }
    
    
    return(
        <>
            
            <section className="container">
                
                <h3>Харесани</h3>
                {result?.map((res,index) => <div className="grid"
                    key ={index}>
                    <div className="card">
                        <img src={res?.imageUrls[0]} alt="Car" />
                        <h4>{res?.brand} {res?.model}</h4>
                        <p>Цена: {res?.price}€</p>
                    </div>
                    
                </div>)}
                
            </section>
            <section className="container">
                <h3>Мои обяви</h3>
                <div className="grid">
                    <div className="card">
                        <img src="https://g1-bg.cars.bg/2025-03-09_2/67cddf656a696dcacb09c004o.jpg" alt="Car" />
                        <h4>BMW X5</h4>
                        <p>Цена: 40,000€</p>
                    </div>
                    <div className="card">
                        <img src="https://g1-bg.cars.bg/2025-03-09_2/67cddf656a696dcacb09c004o.jpg" alt="Car" />
                        <h4>Audi A6</h4>
                        <p>Цена: 35,000€</p>
                    </div>
                    <div className="card">
                        <img src="https://g1-bg.cars.bg/2025-03-09_2/67cddf656a696dcacb09c004o.jpg" alt="Car" />
                        <h4>Mercedes C-className</h4>
                        <p>Цена: 38,000€</p>
                    </div>
                </div>
            </section>
        </>
    )
}

