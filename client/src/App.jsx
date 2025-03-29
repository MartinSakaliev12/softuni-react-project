import { Route, Routes } from "react-router"
import Catalog from "./components/catalogComponent"
import CreateComponent from "./components/createComponent"
import Footer from "./components/footerComponent"
import Header from "./components/headerComponents"
import HomePage from "./components/homeCatalog"

function App() {
  

  return (
    
  <>    
  
    <Header/>
    
    <Routes>

      <Route index element={<HomePage/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/catalog/create' element={<CreateComponent/>}/>

    </Routes>
   


    </>
  )
}

export default App
