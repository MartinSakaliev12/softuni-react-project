import { Link } from "react-router";
import "./css/homePage.css"
import { useGetLatest } from "../api/carsApi";

export default function HomePage() {
    const { latestCar } = useGetLatest()


    return (<>
        <>
            <section className="header">
                <h2>Find your dream car!</h2>
                <p>Do it in our website.</p>
                <br />
                <Link to="/catalog">Search</Link>
            </section>
            <br />
            <h3>Latest</h3>
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
                                        <p>price: {res?.price}€</p>
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