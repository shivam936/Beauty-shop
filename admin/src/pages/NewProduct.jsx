import React from "react";
import { FaPlus } from "react-icons/fa";

const NewProduct = () => {
  return (
    <div className="m-5">
      <div>
        <h2 className="font-bold text-xl mb-4">New Product</h2>
      </div>

      <div className="bg-white shadow-lg p-6 max-w-5xl mx-auto rounded-lg">
        <form className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            {/* Image Upload */}
            <div className="flex flex-col gap-2">
              <label>Product:</label>
              <div className="w-24 h-24 border-2 rounded-lg flex items-center justify-center cursor-pointer">
                <FaPlus className="text-[20px]" />
              </div>
            </div>

            {/* Product Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="productName">Product Name:</label>
              <input
                id="productName"
                type="text"
                className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full"
                placeholder="Write the product name"
              />
            </div>

            {/* Product Description */}
            <div className="flex flex-col gap-1">
              <label htmlFor="description">Product Description:</label>
              <textarea
                id="description"
                rows="3"
                className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full"
                placeholder="Write about the product"
              />
            </div>

            {/* Prices */}
            <div className="flex flex-col gap-1">
              <label htmlFor="originalPrice">Original Price:</label>
              <input
                id="originalPrice"
                type="text"
                className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full"
                placeholder="$100"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="discountedPrice">Discounted Price:</label>
              <input
                id="discountedPrice"
                type="text"
                className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full"
                placeholder="$80"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            <div className="flex flex-col gap-1">
              <label htmlFor="wholesalePrice">Wholesale Price:</label>
              <input
                id="wholesalePrice"
                type="text"
                className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full"
                placeholder="$70"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="wholesaleQty">Wholesale Quantity:</label>
              <input
                id="wholesaleQty"
                type="text"
                className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full"
                placeholder="10"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="brand">Brand:</label>
              <input
                id="brand"
                type="text"
                className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full"
                placeholder="Kyle"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="concern">Concern:</label>
              <select
                id="concern"
                className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full"
              >
                <option>Dry Skin</option>
                <option>Pigmentation</option>
                <option>Oil Control</option>
                <option>Anti Acne</option>
                <option>Sunburn</option>
                <option>Skin Brightening</option>
                <option>Tan Removal</option>
                <option>Night Routine</option>
                <option>UV Protection</option>
                <option>Damaged Hair</option>
                <option>Frizzy Hair</option>
                <option>Stretch Marks</option>
                <option>Color Protection</option>
                <option>Dry Hair</option>
                <option>Soothing</option>
                <option>Dandruff</option>
                <option>Greying</option>
                <option>Hairfall</option>
                <option>Hair Color</option>
                <option>Well Being</option>
                <option>Acne</option>
                <option>Hair Growth</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor=""> Skin type </label>
                <select name="skin type" id="" className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full">
                <option>All</option>
                <option>Oily</option>
                <option>Dry</option>
                <option>Sensitive</option>
                <option>Normal</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor=""> Products Types </label>
                <select name="skin type" id="" className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full">
                <option>Toners</option>
                <option>Serums</option>
                <option>Foundations</option>
                <option>Lotions</option>
                </select>
            </div>

          </div>
        </form>

        {/* Submit Button */}
        <div className="mt-8 text-center md:text-right">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md w-full md:w-auto"
          >
            Submit Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
