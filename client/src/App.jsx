import { Route, Routes } from "react-router"
import Catalog from "./components/catalogComponent"
import CreateComponent from "./components/createComponent"
import Footer from "./components/footerComponent"
import Header from "./components/headerComponents"
import HomePage from "./components/homeComponent"
import Login from "./components/loginComponent"
import { useEffect, useState } from "react"
import { UserContext } from "./context/authContext"
import Register from "./components/registerComponent"
import Logout from "./components/logoutComponent"
import Details from "./components/detailsComponent"
import Edit from "./components/editComponent"
import Delete from "./components/deleteComponet"
import Like from "./components/likeComponent"
import Profile from "./components/profileComponent"
import usePersistedState from "./api/usePersistedState"
import { useFindUserLikes } from "./api/likesApi"
import AuthGuard from "./guards/authGuard.jsx"

function App() {
  const [authData, setauthData] = usePersistedState({})
  const {findUserLikes} = useFindUserLikes()
  const [liked, setLiked] = useState([])
  useEffect(()=>{
    if(authData.email){
      findUserLikes(authData.email)
        .then(res => setLiked(res[0]["liked"]))
    }
  },[])
  const loginHandler = (user) => {
    setauthData(user)
    
  }

  const logoutHandler = () => {
    setauthData({})
    setLiked([])
  }

  return (
    
  <>    
    <UserContext.Provider value={{...authData,liked,setLiked,loginHandler,logoutHandler}}>
    <Header/>
    
    <Routes>

      <Route index element={<HomePage/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route element={<AuthGuard/>}>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/catalog/create' element={<CreateComponent/>}/>
        <Route path='/catalog/:carId/edit' element={<Edit/>}/>
        <Route path='/catalog/:carId/delete' element={<Delete/>}/>
        <Route path='/catalog/:carId/like' element={<Like/>}/>
        <Route path='/profile' element={<Profile/>}/>
      
      </Route>
      <Route path='/catalog/:carId/details' element={<Details/>}/>
 
    </Routes>
   
    </UserContext.Provider>

    </>
  )
}

export default App
