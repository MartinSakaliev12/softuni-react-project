import { Link } from "react-router"
import "./css/header.css"
import { useContext } from "react"
import { UserContext } from "../context/authContext"

export default function Header(){
    const {email} = useContext(UserContext)

    return (<>
        <header className="navbar">
    <div className="logo">CarShop.bg</div>
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/catalog">Catalog</Link>
      </li>
      
      
      {email
      ?<>
      <li>
        <Link to="/catalog/create">Add</Link>
      </li>
      <li>
        <Link to="/logout">Log out</Link>
      </li>
      <li>
        <Link to="/profile">{email}</Link>
      </li>
      </>
      :<>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li></>
      }
      
    </ul>
  </nav>
</header>

    
    </>)
}