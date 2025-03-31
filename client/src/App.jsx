import { Route, Routes } from "react-router"
import Catalog from "./components/catalogComponent"
import CreateComponent from "./components/createComponent"
import Footer from "./components/footerComponent"
import Header from "./components/headerComponents"
import HomePage from "./components/homeComponent"
import Login from "./components/loginComponent"
import { useState } from "react"
import { UserContext } from "./context/authContext"
import Register from "./components/registerComponent"
import Logout from "./components/logoutComponent"
import Details from "./components/detailsComponent"

function App() {
  const [authData, setauthData] = useState({})

  const loginHandler = (user) => {
    setauthData(user)
  }

  const logoutHandler = () => {
    setauthData({})
  }

  return (
    
  <>    
    <UserContext.Provider value={{...authData,loginHandler,logoutHandler}}>
    <Header/>
    
    <Routes>

      <Route index element={<HomePage/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/catalog/create' element={<CreateComponent/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/catalog/:carId/details' element={<Details/>}/>
    </Routes>
   
    </UserContext.Provider>

    </>
  )
}

export default App
