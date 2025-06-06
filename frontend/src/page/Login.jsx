import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handlelogin = async (e) => {
    try {
        setLoading(true);
        login(dispatch, { email, password });
        navigate("/");
        setLoading(false);
    } catch (error) {
        if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        } else {
        toast.error("An unexpected error occurred. Please try again.");
        }
    }
    };

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
          <img
            src="/lotion1.jpg"
            className="h-[500px] w-[500px] object-cover rounded-md"
          />
        </div>
        <div className="p-10 ml-4 rounded-md bg-white shadow-xl h-[450px] w-[450px] ">
          <h2 className="font-semibold text-xl mb-6">Sign In</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-400"> Email: </label>
              <input
                type="text"
                className="p-2 w-full border border-gray-400 outline-none focus:outline-none rounded-md focus:ring-2 focus:ring-[#8FB59E]"
                placeholder="example@example.gmail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400"> Password: </label>
              <input
                type="text"
                className="p-2 w-full border border-gray-400 outline-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#8FB59E]"
                placeholder="******"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button
              className="w-full bg-[#8FB59E] p-3 rounded-md  hover:bg-[#B58F9E] transition:transform duration-500 cursor-pointer ease-in-out transform hover:scale-105"
              onClick={handlelogin}
            >
                {loading ? "Loading..." : "login"}
            </button>

            <div className="mt-4">
              <span className="mr-3 text-sm">Don't have account ?</span>
              <Link to="/Register" className="text-[#6FA685]">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
