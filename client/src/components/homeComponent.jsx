import { Link } from "react-router";
import "./css/homePage.css"

export default function HomePage() {
    return (<>
        <>
            <section className="header">
                <h2>Намерете мечтания си автомобил!</h2>
                <p>Разгледайте нашата селекция от качествени автомобили.</p>
                <br />
                <Link to="/catalog">Разгледай сега</Link>
            </section>

            <section className="container">
                <h3>Популярни автомобили</h3>
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

    </>)
}