import { FaSearch, FaUser } from "react-icons/fa";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
        <div className="h-[100px] shadow-md flex items-center justify-between px-[6px]">
            <Link to="/">
            <div className="m-2 cursor-pointer">
                <img src="/logo-transparent.png" alt="main-logo" height='200px' width='200px'/>
            </div>
            </Link>

            <div className="flex items-center m-2">
                <input type="text" placeholder="search" className="p-[15px] border-2 border-[#8FB59E] border-solid w-[500px] outline-none rounded-lg mr-[-30px]"/>
                <FaSearch className="text-[20px] cursor-pointer "/>
            </div>

            <div className="flex items-center">

            <Link to="/cart">
                <div className="mr-[20px] cursor-pointer">
                <Badge badgeContent={2} color="success">
                    <ShoppingBasketIcon className="text-[#50695A]"/>
                </Badge>
            </div>
            </Link>

                <div className=" flex items-center space-x-2 border border-[#8FB59E] cursor-pointer p-2 rounded-lg hover:bg-[#6C8C7A] duration-300">
                <FaUser className="text-[#8FB59E] hover:text-[#50695A]"/>
                <span className="text-[#8FB59E] hover:text-[#50695A] font-semibold">Login</span>
                </div>
            </div>
        </div>
  )
}

export default Navbar