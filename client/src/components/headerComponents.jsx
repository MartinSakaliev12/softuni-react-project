import { Link } from "react-router"
import "./css/header.css"

export default function Header(){
    return (<>
        <header className="navbar">
  <div className="logo">CarShop.bg</div>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/catalog/create">Add car</Link>
      </li>
      
      <li>
        <Link to="#">Logout</Link>
      </li>
    </ul>
  </nav>
</header>

    
    </>)
}