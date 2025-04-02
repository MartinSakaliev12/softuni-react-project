import { useActionState, useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useRegister } from "../api/authApi";
import { UserContext } from "../context/authContext";
import {useCreateLikesUser} from "../api/likesApi";

export default function Register() {
    const { register } = useRegister()
    const { loginHandler, setLiked} = useContext(UserContext)
    const [error, setError] = useState(null)
    const [prevEmail, setPrevEmail] = useState("")
    const navigate = useNavigate()
    const {createLikesUser} = useCreateLikesUser()

    const registerSubmitHandler = async (prevData, formData) => {
        
        //console.log(Object.fromEntries(formData))

        const registerData = Object.fromEntries(formData)

        if(registerData.email === "" || registerData.password === "" || registerData.rePassword === "") {
            setPrevEmail(registerData.email)
            setError("Please fill all fields")
            return;
        }
        if(registerData.password.length < 5){
            setPrevEmail(registerData.email)
            setError("Password must at least 5 characters")
            return;
        }
        if (registerData.password !== registerData.rePassword) {
            setPrevEmail(registerData.email)
            setError("Passwords do not match")
            return;
        }
        
        const authData = await register({ email: registerData.email, password: registerData.password})


        if(authData.code >= 400) {
            setPrevEmail(registerData.email)
            setError(authData.message)
            return;

        }

        const res = await createLikesUser(authData.email,authData.accessToken)
        setLiked(res.liked)
        console.log(res._id)
        loginHandler({...authData,userLikedId:res._id})
        navigate("/")
    }

    const [values, registerAction, isPending] = useActionState(registerSubmitHandler, {
        email: "",
        password: "",
        "re-password": ""
    })
    return (
        <>
            <div className="w-full max-w-lg p-6 bg-gray-800 shadow-lg shadow-black rounded-2xl mx-auto mt-10">
                <h2 className="text-3xl font-bold text-center text-white">Welcome</h2>
                <form className="space-y-4" action={registerAction}>
                    {
                        error ?
                            <label className="text-red-400 font-semibold">
                                {error}
                            </label>
                            : <></>

                    }
                    <div>
                        <label className="block text-gray-400">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            defaultValue={prevEmail}
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
                    <div>
                        <label className="block text-gray-400">Confirm password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            name="rePassword"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>
                <p className="text-center text-gray-400">
                    You have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </>
    );
}