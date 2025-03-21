import createComponent from "./components/createComponent"

function App() {
  

  return (
    <>
      
  {/* Хедър с меню */}
  <header className="flex justify-between items-center bg-blue-900 text-white p-4 shadow-lg">
    <div className="text-2xl font-bold">CarShop.bg</div>
    <nav>
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="hover:text-gray-300">
            Начало
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Моите обяви
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Добави обява
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Изход
          </a>
        </li>
      </ul>
    </nav>
  </header>
  {/* Търсачка */}
  <section className="bg-white p-8 mt-4 mx-auto max-w-7xl shadow-lg rounded-xl">
    <h2 className="text-3xl font-semibold text-center mb-6">
      Търсене на автомобили
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <select className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
        <option value="">Марка</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="Ford">Ford</option>
        <option value="BMW">BMW</option>
      </select>
      <select className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
        <option value="">Модел</option>
        <option value="Corolla">Corolla</option>
        <option value="Civic">Civic</option>
        <option value="Mustang">Mustang</option>
        <option value="M3">M3</option>
      </select>
      <select className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
        <option value="">Година</option>
        <option value={2024}>2024</option>
        <option value={2023}>2023</option>
        <option value={2022}>2022</option>
      </select>
      <select className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
        <option value="">Гориво</option>
        <option value="Diesel">Дизел</option>
        <option value="Petrol">Бензин</option>
      </select>
    </div>
    <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700">
      Търсене
    </button>
  </section>
  {/* Резултати от търсенето */}
  <section className="p-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Примерен автомобил */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <img
        src="https://via.placeholder.com/300"
        alt="Toyota Corolla"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">Toyota Corolla</h3>
        <p className="text-gray-600">2023 - Бензин</p>
        <p className="text-blue-700 text-2xl mt-2">$20,000</p>
        <p className="text-gray-500 text-sm mt-2">
          Много добро състояние, 50,000 км, 1 собственик.
        </p>
      </div>
    </div>
  </section>
 
    <createComponent/>

  
  <footer className="bg-gray-900 text-white py-6 text-center">
    <p>© 2025 CarShop.bg - Всички права запазени</p>
  </footer>


    </>
  )
}

export default App
