import { useGetAll } from "../api/carsApi"
import "./css/catalog.css"
import SearchComponent from "./searchComponent"
import { Link } from "react-router"

export default function Catalog(){
  const {cars,setCars} = useGetAll()
    console.log(cars);
    return(<>
        {/* Търсачка */}
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Търсене на автомобили</title>
  <link rel="stylesheet" href="styles.css" />
    <div className="container">
    {/* <SearchComponent/> */}
    <section className="cars-grid">
      {cars.code == 404 ?
      <p>No content</p>
      :cars.map(car=>( 
        <Link to={`/catalog/${car["_id"]}/details`} key={car._id}>
        <div className="car-card">
        <img src={car.imageUrls[0]} alt="Toyota Corolla" />
          <div className="info">
          <h3>{car.brand}</h3>
          <p>{car.year} - {car.fuel}</p>
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