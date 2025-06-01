import {
  FaBox,
  FaChartBar,
  FaClipboard,
  FaClipboardList,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaSignOutAlt,
  FaUser,
  FaUsers,
} from "react-icons/fa";

const Menu = () => {
  return (
    <div className="min-h-scrren w-[350px] bg-gray-200 p-[20px] shadow-lg">
      <ul className="space-y-2 items-start justify-start ">
        <li className="flex items-center gap-4 p-3 rounded-md text-gray-700 hover:bg-[#8FB59E] hover:text-white transition">
          <FaHome className="text-[#6A8A76] text-xl" />
          <p className="text-lg font-medium">Home</p>
        </li>

        <li className="flex items-center gap-4 p-3 rounded-md text-gray-700 hover:bg-[#8FB59E] hover:text-white transition">
          <FaUser className="text-[#6A8A76] text-xl" />
          <p className="text-lg font-medium">Profile</p>
        </li>

        <hr className="border-gray-300 my-3" />

        <li className="flex items-center gap-4 p-3 rounded-md text-gray-700 hover:bg-[#8FB59E] hover:text-white transition">
          <FaUsers className="text-[#6A8A76] text-xl" />
          <p className="text-lg font-medium">Users</p>
        </li>

        <li className="flex items-center gap-4 p-3 rounded-md text-gray-700 hover:bg-[#8FB59E] hover:text-white transition">
          <FaBox className="text-[#6A8A76] text-xl" />
          <p className="text-lg font-medium">Products</p>
        </li>

        <li className="flex items-center gap-4 p-3 rounded-md text-gray-700 hover:bg-[#8FB59E] hover:text-white transition">
          <FaClipboardList className="text-[#6A8A76] text-xl" />
          <p className="text-lg font-medium">Orders</p>
        </li>

        <hr className="border-gray-300 my-3" />

        <li className="flex items-center gap-4 p-3 rounded-md text-gray-700 hover:bg-[#8FB59E] hover:text-white transition">
          <FaElementor className="text-[#6A8A76] text-xl" />
          <p className="text-lg font-medium">Banner</p>
        </li>

        <li className="flex items-center gap-4 p-3 rounded-md text-gray-700 hover:bg-[#8FB59E] hover:text-white transition">
          <FaCog className="text-[#6A8A76] text-xl" />
          <p className="text-lg font-medium">Setting</p>
        </li>

        <li className="flex items-center gap-4 p-3 rounded-md text-gray-700 hover:bg-[#8FB59E] hover:text-white transition">
          <FaHdd className="text-[#6A8A76] text-xl" />
          <p className="text-lg font-medium">Backup</p>
        </li>

        <hr className="border-gray-300 my-3" />

        <li className="flex items-center gap-4 p-3 rounded-md text-gray-700 hover:bg-[#8FB59E] hover:text-white transition">
          <FaChartBar className="text-[#6A8A76] text-xl" />
          <p className="text-lg font-medium">Charts</p>
        </li>

        <li className="flex items-center gap-4 p-3 rounded-md text-gray-700 hover:bg-[#8FB59E] hover:text-white transition">
          <FaClipboard className="text-[#6A8A76] text-xl" />
          <p className="text-lg font-medium">All logs</p>
        </li>

        <li className="flex items-center gap-4 p-3 rounded-md text-gray-700 hover:bg-[#8FB59E] hover:text-white transition">
          <FaSignOutAlt className="text-[#6A8A76] text-xl" />
          <p className="text-lg font-medium">Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
