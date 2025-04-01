import { useGetAll } from "../api/carsApi"
import "./css/catalog.css"
import SearchComponent from "./searchComponent"
import { Link } from "react-router"
import { useActionState } from "react"

export default function Catalog(){
  const {cars,setCars} = useGetAll()
  
  const searchSubmitHandler = (priviousData, formData) =>{
    const brand = formData.get("brand")
    const model = formData.get("model")
    setCars(cars.filter(car => 
      car.brand.toLowerCase().includes(brand) || 
      car.model.toLowerCase().includes(model)
    ))
  }
  const [values,seacrchAction, isPending] = useActionState(searchSubmitHandler,{})

  return(<>
        {/* Търсачка */}
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Търсене на автомобили</title>
  <link rel="stylesheet" href="styles.css" />
  <section className="search-section">
    <h2>Търсене на автомобили</h2>
    <form id="filterForm" action={seacrchAction}>
      <div className="search-grid">
      <div>
          <label htmlFor="year">Марка:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="input"
            placeholder="Напр. Mercedes"
          />
        </div>
        <div>
          <label htmlFor="year">Модел:</label>
          <input
            type="text"
            id="model"
            name="model"
            className="input"
            placeholder="Напр. s500"
          />
        </div>
        
      </div>
      <button type="submit" className="search-button">
        Търси
      </button>
    </form>
  </section>
    <div className="container">
    <section className="cars-grid">
      {cars.length==0?
      <p>No content</p>
      :cars.map(car=>( 
        <Link to={`/catalog/${car["_id"]}/details`} key={car._id}>
        <div className="car-card">
        <img src={car.imageUrls[0]} alt="Toyota Corolla" />
          <div className="info">
          <h3 className="brand">{car.brand}</h3>
          <p>{car.model} - {car.year}</p>
          <p>{car.fuel}</p>
          <p className="price">${car.price}</p>
          <p>{car.mileage}km</p>
          <p>{car.description}</p>
        </div>
      </div>
      </Link>
    ))}
    </section>
    </div>
</>

    </>)
}