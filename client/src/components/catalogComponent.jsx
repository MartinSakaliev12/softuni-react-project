import "./css/catalog.css"

export default function Catalog(){
    return(<>
        {/* Търсачка */}
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Търсене на автомобили</title>
  <link rel="stylesheet" href="styles.css" />
  <div className="container">
    <section className="search-section">
      <h2>Търсене на автомобили</h2>
      <div className="search-grid">
        <select>
          <option value="">Марка</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>
          <option value="BMW">BMW</option>
        </select>
        <select>
          <option value="">Модел</option>
          <option value="Corolla">Corolla</option>
          <option value="Civic">Civic</option>
          <option value="Mustang">Mustang</option>
          <option value="M3">M3</option>
        </select>
        <select>
          <option value="">Година</option>
          <option value={2024}>2024</option>
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
        </select>
        <select>
          <option value="">Гориво</option>
          <option value="Diesel">Дизел</option>
          <option value="Petrol">Бензин</option>
        </select>
      </div>
      <button className="search-button">Търсене</button>
    </section>
    <section className="cars-grid">
      <div className="car-card">
        <img src="https://g1-bg.cars.bg/2025-03-09_2/67cddf656a696dcacb09c004o.jpg" alt="Toyota Corolla" />
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