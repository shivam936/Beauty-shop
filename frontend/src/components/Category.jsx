import React from "react";

const Category = () => {
  return (
    <div className="flex items-center m-3">
      <div className="relative bg-[url('/serum.jpg')] bg-cover bg-no-repeat bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-[22px]">
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
        <div className=" relative flex items-center justify-center">
          <h1 className="font-semibold text-[30px] text-white">Serum</h1>
        </div>
      </div>

      <div className="relative bg-[url('/serum1.jpg')] bg-cover bg-no-repeat bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-[22px]">
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
        <div className=" relative flex items-center justify-center">
          <h1 className="font-semibold text-[30px] text-white">Toner</h1>
        </div>
      </div>

      <div className="relative bg-[url('/lotion.jpg')] bg-cover bg-no-repeat bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-[22px]">
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
        <div className=" relative flex items-center justify-center">
          <h1 className="font-semibold text-[30px] text-white">Lotion</h1>
        </div>
      </div>

      <div className="relative bg-[url('/foundation.jpg')] bg-cover bg-no-repeat bg-center bg-slate-300 h-[500px] w-[400px] flex items-center justify-center m-[22px]">
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
        <div className=" relative flex items-center justify-center">
          <h1 className="font-semibold text-[30px] text-white">Foundation</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
