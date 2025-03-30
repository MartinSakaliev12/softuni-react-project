import { useActionState, useContext, useState } from "react"
import useLogin from "../api/authApi"
import { UserContext } from "../context/authContext"
import { Link, useNavigate } from "react-router"

export default function Login (){
    const {login} = useLogin()
    const {loginHandler} = useContext(UserContext)
    const [prevEmail, setPrevEmail] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const loginSubmitHandler = async(previousData, formData) =>{
        const loginData = Object.fromEntries(formData)
        const authData = await login(loginData)
        
        if(authData.code==403){
          setError("Invalid email or password!")
          setPrevEmail(loginData.email)
          return;
        }

        loginHandler(authData)
        navigate("/")
    }

    const [value, loginAction, isPending] = useActionState(loginSubmitHandler, {
      email: "",
      password: "",
      
  })
    return(<>
        <div className="w-full max-w-lg p-6 bg-gray-800 shadow-lg shadow-black rounded-2xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-white">Welcome Back</h2>
      <form className="space-y-4" action={loginAction} >
    {
      error?
      <label className="text-red-600 font-semibold">
        {error}
      </label>
      :<></>

    }
    <div>
      <label className="block text-gray-400">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        defaultValue={prevEmail}
        name="email"
        className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
    <div>
      <label className="block text-gray-400">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
    
    <button
      type="submit"
      className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Login
    </button>
  </form>
  <p className="text-center text-gray-400 mt-4">
    Don't have an account?{" "}
    <Link to="/register" className="text-blue-500 hover:underline transition">
      Sign up
    </Link>
  </p>
</div>

    </>)
}