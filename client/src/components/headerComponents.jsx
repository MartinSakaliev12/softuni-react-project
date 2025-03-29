import { Link } from "react-router"

export default function Header(){
    return (<>
        <header className="flex justify-between items-center bg-blue-900 text-white p-4 shadow-lg">
    <div className="text-2xl font-bold">CarShop.bg</div>
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Начало
          </Link>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Моите обяви
          </a>
        </li>
        <li>
          <Link to="/catalog/create" className="hover:text-gray-300">
            Добави обява
          </Link>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Изход
          </a>
        </li>
      </ul>
    </nav>
  </header>
    
    </>)
}