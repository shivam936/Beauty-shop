import { FaPlus, FaMinus } from "react-icons/fa";
import StarRatings from "react-star-ratings";

const Product = () => {
  return (
   <div className="flex justify-stretch p-[30px]">
    <div className="flex-1 h-[500px] w-[600px]">
        <img src="/lotion2.jpg" alt="lotion" className="h-[100%] w-[100%]"/>
    </div>
    <div className="flex-1 ml-10  flex-col">
        <h2 className="text-xl mb-6 font-semibold"> BotaniGlow</h2>
        <span> Reveal your skin’s natural radiance with our refreshing toner, crafted to hydrate, balance, and prep your skin for the next steps in your routine. Infused with botanical extracts and skin-loving ingredients, this toner helps to tighten pores, soothe irritation, and restore your skin's pH after cleansing. Say goodbye to dullness and hello to a fresh, dewy glow—because your skin deserves to feel as good as it looks. </span>
        <h2 className="text-xl font-semibold mt-2">90$</h2>

            <span className="flex">
            <StarRatings
            rating={2}
            starRatedColor="yellow"
            numberOfStars={5}
            name="rating"
            starDimension="20px" // ⬅️ reduce this to make stars smaller
            starSpacing="2px"
        />
        (2)
        </span>

        <div className="border border-gray-400 h-40 w-80 rounded-lg  mt-10 ml-3 shadow-md p-6">
            <h2 className="text-xl flex items-center justify-center text-gray-400 mb-6">What's inside the box</h2>
            <hr className=" text-gray-500 mb-4"/>
            <div className=" flex flex-col text-gray-400">
                <span> One garnier facewash </span>
            <span>One mamaearth shampoo</span>
            </div>
        </div>

        <div className="inline-flex border border-[#859f5e] w-[500px] h-12 bg-[#8FB59E] mt-6 px-4 rounded-3xl mb-6 ">
            <h2 className="flex items-center  text-lg font-semibold justify-center text-white">Wholesale available : $70 for 10 items</h2>
        </div>
    

        <div className="mt-4 flex items-center ml-6">
            <FaPlus className="rounded-full mr-6 cursor-pointer bg-[#8FB59E] p-2 text-white font-semibold text-3xl"/>
            <span className="mr-4">1</span>
            <FaMinus className="rounded-full mr-6 cursor-pointer bg-[#8FB59E] p-2 text-white font-semibold text-3xl"/>
        </div>
        <button className="mt-8 border-2 py-4 px-8 text-white bg-black cursor-pointer">
        Add Cart
        </button>

            <hr className="text-gray-400 mt-10"/>

            <div className="flex flex-col">
                <h2 className="text-[18px] font-semibold">Review</h2>
                <div>
                <StarRatings
                rating={2}
                starRatedColor="yellow"
                numberOfStars={5}
                name="rating"
              starDimension="20px" // ⬅️ reduce this to make stars smaller
            starSpacing="2px"
        />
        <span className="text-semibold ">John F. kennedy</span>
                </div>
            </div>
    </div>
    </div>
    )
}

export default Product