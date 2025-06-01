import { FaCheckCircle } from "react-icons/fa";
import StarRatings from "react-star-ratings";

const Order = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="mx-auto max-w-4xl bg-white p-6">
        <div className="text-center mb-8">
          <FaCheckCircle className="mx-auto  text-4xl text-green-400" />
          <h2 className=" text-xl font-semibold">Thanks for your Order</h2>
          <p className="text-sm">Here are your recent orders</p>
        </div>

        <div className="mb-4">
          <h2 className="font-semibold text-xl mb-4">#Order Summary</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 mx-4 p-8">
              <h2 className="text-lg font-semibold mb-6">Items Ordered</h2>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center border-b border-gray-600 mb-6">
                  <img
                    src="/lotion2.jpg"
                    className="w-24 h-24 object-cover rounded-lg mb-8"
                  />
                  <div className="flex-1 ml-6 mb-12">
                    <h2 className="font-semibold">
                      {" "}
                      Velvetta toner for skin glow{" "}
                    </h2>
                    <span className="text-sm ml-3"> 6 </span>
                  </div>
                  <div className="text-right mb-8">
                    <span>$90</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="font-semibold text-gray-600">
                    Rate this Product
                  </h2>
                  <div className="mb-5">
                    <StarRatings
                      rating={2}
                      starRatedColor="gray"
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                    <span className="text-sm ml-1">(2)</span>
                  </div>
                  <textarea
                    className="border-gray-400 bg-white outline-none w-72 h-20 mb-3"
                    placeholder="Write your review"
                  ></textarea>
                  <button className="text-center w-36 bg-black shadow-2xl p-3 text-white">
                    Submit
                  </button>
                </div>

                <div className="flex items-center border-b border-gray-600 mb-6">
                  <img
                    src="/lotion2.jpg"
                    className="w-24 h-24 object-cover rounded-lg mb-8"
                  />
                  <div className="flex-1 ml-6 mb-12">
                    <h2 className="font-semibold">
                      {" "}
                      Velvetta toner for skin glow{" "}
                    </h2>
                    <span className="text-sm ml-3"> 6 </span>
                  </div>
                  <div className="text-right mb-8">
                    <span>$90</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="font-semibold text-gray-600">
                    Rate this Product
                  </h2>
                  <div className="mb-5">
                    <StarRatings
                      rating={2}
                      starRatedColor="gray"
                      numberOfStars={5}
                      name="rating"
                      starDimension="16px"
                      starSpacing="1px"
                    />
                    <span className="text-sm ml-1">(2)</span>
                  </div>
                  <textarea
                    className="border-gray-400 bg-white outline-none w-72 h-20 mb-3"
                    placeholder="Write your review"
                  ></textarea>
                  <button className="text-center w-36 bg-black shadow-2xl p-3 text-white">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 mx-4 p-8 rounded-lg my-2">
              <h3 className="font-semibold text-xl">Shipping Information</h3>
              <p> shivampathak7789@gmail.com </p>
              <p> (+91) 9873704276 </p>
              <p>Shivam pathak</p>
            </div>

            <div className="bg-gray-100 mx-4 p-8 rounded-lg">
              <h3 className="font-semibold text-xl">Payment Method</h3>
              <p>VISA</p>
            </div>

            <div className="bg-gray-100 mx-4 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Order-Summary</h3>
              <div className="flex justify-between mb-2">
                <span className="font-lg text-lg">Subtotal</span>
                <span className="font-lg text-lg">$720</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-lg text-lg">Shipping Charges</span>
                <span className="font-lg text-lg">$10</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-lg text-lg">Total</span>
                <span className="font-lg text-lg">$730</span>
              </div>
            </div>
            <button className="mt-4 cursor-pointer mx-72 bg-[#4FB59F] text-white p-4 ">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
