import CreateComponent from "./components/createComponent"

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
  
 
    
    <CreateComponent/>
  
  <footer className="bg-gray-900 text-white py-6 text-center">
    <p>© 2025 CarShop.bg - Всички права запазени</p>
  </footer>


    </>
  )
}

export default App
