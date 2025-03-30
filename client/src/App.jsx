import { Route, Routes } from "react-router"
import Catalog from "./components/catalogComponent"
import CreateComponent from "./components/createComponent"
import Footer from "./components/footerComponent"
import Header from "./components/headerComponents"
import HomePage from "./components/homeCatalog"
import Login from "./components/loginComponent"
import { useState } from "react"
import { UserContext } from "./context/authContext"

function App() {
  const [authData, setauthData] = useState({})

  const loginHandler = (user) => {
    setauthData(user)
  }


  return (
    
  <>    
    <UserContext.Provider value={{...authData,loginHandler}}>
    <Header/>
    
    <Routes>

      <Route index element={<HomePage/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/catalog/create' element={<CreateComponent/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
   
    </UserContext.Provider>

    </>
  )
}

export default App
