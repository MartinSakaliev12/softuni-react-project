import { Link } from "react-router";
import "./css/homePage.css"
import { useGetLatest } from "../api/carsApi";

export default function HomePage() {
    const { latestCar } = useGetLatest()


    return (<>
        <>
            <section className="header">
                <h2>Намерете мечтания си автомобил!</h2>
                <p>Разгледайте нашата селекция от качествени автомобили.</p>
                <br />
                <Link to="/catalog">Разгледай сега</Link>
            </section>
            <br />
            <h3>Най-нови обяви</h3>
            <section className="container">
                <div className="grid">
                    {
                        latestCar ?
                            latestCar.length > 0 ?
                                latestCar.map((res, index) =>
                                    <Link 
                                        className="card"
                                        to={`/catalog/${res._id}/details`}
                                        key={index}
                                    >
                                        <img src={!!res.imageUrls ? res.imageUrls[0] : null} alt="Car" />
                                        <h4>{res?.brand} {res?.model}</h4>
                                        <p>Цена: {res?.price}€</p>
                                    </Link>
                                )
                                : <><h3>No content</h3></>
                            : <><h3>No content</h3></>
                    }

                </div>
            </section>

        </>

    </>)
}