import { Link } from "react-router"
import "./css/header.css"

export default function Header(){
    return (<>
        <header className="navbar">
  <div className="logo">CarShop.bg</div>
  <nav>
    <ul>
      <li>
        <a href="/">Начало</a>
      </li>
      <li>
        <a href="#">Моите обяви</a>
      </li>
      <li>
        <a href="/catalog/create">Добави обява</a>
      </li>
      <li>
        <a href="#">Изход</a>
      </li>
    </ul>
  </nav>
</header>

    
    </>)
}