import React from "react";

const Banner = () => {
  return (
    <div className=" relative bg-[url('/beautybanner2.jpg')] bg-cover h-[80vh] px-[200px] bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className=" relative flex flex-col text-white w-[50%] pt-[10%]">
        <span className="text-[30px] mt-3">
          Discover your products to get the flawless look on you skin
        </span>
        <h1 className="text-3xl mt-3">Find and improvise your skin</h1>
        <div className="flex items-center mt-[20px]">
          <button className="bg-[#8FB59E] p-[10px] w-[200px] text-white cursor-pointer mr-9">
            Shop Now
          </button>
          <button className="bg-slate-500 p-[10px] w-[200px] text-white cursor-pointer mr-9">
            Call: 9873704276
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
