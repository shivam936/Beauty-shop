import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banners = () => {
  return (
    <div className="h-screen w-[70vw] p-10">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Active Banners</h2>

        <div className="flex items-start  gap-20">
          <div className="flex flex-col space-y-6">
            {/* Banner Card 1 */}
            <div className="w-[450px] bg-white shadow-lg rounded-xl p-4 flex items-center justify-between hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/2496219/pexels-photo-2496219.jpeg"
                alt=""
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">Velvetta Toners</h2>
                <p className="text-sm text-gray-500 mt-1">
                  A toner which can actually help your skin fight against acne.
                </p>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md transition">
                Delete
              </button>
            </div>

            {/* Banner Card 2 */}
            <div className="w-[450px] bg-white shadow-lg rounded-xl p-4 flex items-center justify-between hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/2496219/pexels-photo-2496219.jpeg"
                alt=""
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">Velvetta Toners</h2>
                <p className="text-sm text-gray-500 mt-1">
                  A toner which can actually help your skin fight against acne.
                </p>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md transition">
                Delete
              </button>
            </div>
          </div>

          {/* Placeholder for right side content */}
          <div className="flex flex-col">
                <div className="flex-1">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="">Image:</label>
                        <div className="w-[100px] h-[100px] rounded-lg border-2 flex items-center justify-center cursor-pointer">
                          <FaPlus className="text-[20px]"/>
                        </div> 
                    </div>

                  <div className="flex flex-col">

                    <div className="flex flex-col mb-4">
                      <span>Title</span>
                      <input type="text" className="outline-none border-b"/>
                    </div>

                    <div className="flex flex-col mb-4">
                      <span>
                      Subtitle
                      </span>
                      <input type="text" className="outline-none border-b" />
                    </div>
                  </div>
                </div>
                <button className="w-[150px] h-[55px] bg-black text-white cursor-pointer ">
                Upload
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
