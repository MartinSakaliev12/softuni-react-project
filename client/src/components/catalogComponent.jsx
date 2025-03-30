import "./css/catalog.css"
import SearchComponent from "./searchComponent"

export default function Catalog(){
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
      <div className="car-card">
        <img src="Screenshot 2023-03-22 213431.png" alt="Toyota Corolla" />
        <div className="info">
          <h3>Toyota Corolla</h3>
          <p>2023 - Бензин</p>
          <p className="price">$20,000</p>
          <p>Много добро състояние, 50,000 км, 1 собственик.</p>
        </div>
      </div>
    </section>
  </div>
</>

    </>)
}