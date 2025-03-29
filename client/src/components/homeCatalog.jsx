import { Link } from "react-router";

export default function HomePage (){
    return(<>
        <>
  <section className="bg-blue-600 text-white text-center py-20">
    <h2 className="text-4xl font-bold">Намерете мечтания си автомобил!</h2>
    <p className="mt-4 text-lg">
      Разгледайте нашата селекция от качествени автомобили.
    </p>
    <br />
    <Link to='/catalog' className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
      Разгледай сега
    </Link>
  </section>
  <section className="container mx-auto py-12">
    <h3 className="text-2xl font-bold text-gray-800 text-center">
      Популярни автомобили
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Car"
          className="w-full rounded"
        />
        <h4 className="text-lg font-bold mt-2">BMW X5</h4>
        <p className="text-gray-600">Цена: 40,000€</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Car"
          className="w-full rounded"
        />
        <h4 className="text-lg font-bold mt-2">Audi A6</h4>
        <p className="text-gray-600">Цена: 35,000€</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Car"
          className="w-full rounded"
        />
        <h4 className="text-lg font-bold mt-2">Mercedes C-Class</h4>
        <p className="text-gray-600">Цена: 38,000€</p>
      </div>
    </div>
  </section>
</>

    </>)
}