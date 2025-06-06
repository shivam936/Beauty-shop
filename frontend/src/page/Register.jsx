import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { userRequest } from '../requestUrl'
import { useNavigate } from 'react-router-dom'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');
    const [email , setEmail] = useState('');

    const handleSignup = async(e) => {
        e.preventDefault();
        try{
            await userRequest.post("/auth/register", {name , email, password});
            navigate("/login");
        }
        catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }

    }

    return (
    <div className="flex items-center justify-center p-8">
         <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

        <div className="flex">
            <div className="overflow-hidden transition-transform duration-500 cursor-pointer ease-in-out transform hover:scale-105">
                <img src="/lotion1.jpg" className="h-[500px] w-[500px] object-cover rounded-md"/>
            </div>
        <div className="p-10 ml-4 rounded-md bg-white shadow-xl h-[450px] w-[450px] ">
            <h2 className="font-semibold text-xl mb-6">Create Account</h2>
                <form >
                    <div className="mb-4">
                        <label className="block text-gray-400"> Full Name: </label>
                        <input type="text" className="p-2 w-full border border-gray-400 outline-none focus:outline-none rounded-md focus:ring-2 focus:ring-[#8FB59E]" placeholder='John doe' onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-400"> Email: </label>
                        <input type="text" className="p-2 w-full border border-gray-400 outline-none focus:outline-none rounded-md focus:ring-2 focus:ring-[#8FB59E]" placeholder="example@example.gmail" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-400"> Password: </label>
                        <input type="text" className="p-2 w-full border border-gray-400 outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#8FB59E]" placeholder="******" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                        
                    <button className="w-full bg-[#8FB59E] p-3 rounded-md  hover:bg-[#B58F9E] transition:transform duration-500 cursor-pointer ease-in-out transform hover:scale-105" onClick={handleSignup}>
                        Sign up
                    </button>

                    <div className="mt-4">
                        <span className="mr-3 text-sm">Have a Account ?</span>
                        <Link  to="/login" className="text-[#6FA685]">
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register