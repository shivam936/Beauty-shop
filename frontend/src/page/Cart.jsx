import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'

const Cart = () => {
  return (
    <div className="min-h-screen p-8">
      <h2 className="font-semibold text-xl mb-10">Order lists</h2>

      {/* Flex container for Left (Items) and Right (Summary) */}
      <div className="flex gap-4">

        {/* Left - Cart Items */}
        <div className="bg-white shadow-2xl rounded-xl flex-1 p-6">
          <h2 className="text-xl font-semibold mb-10">Your Items</h2>
          <div className="flex flex-col space-y-4">

            {/* Item 1 */}
            <div className="flex items-start border-b pb-6">
              <img src="/lotion.jpg" alt="" className="w-34 h-34 rounded-lg object-cover mb-6" />
              <div className="flex-1 ml-4 relative">
                <h2 className="text-xl font-semibold mb-4">Velvetra</h2>
                <p className="text-sm mb-8">A lightweight, fast-absorbing lotion that hydrates, softens, and leaves your skin glowing all day.</p>

                <div className="mt-4 flex items-center ml-6">
                  <FaPlus className="rounded-full mr-6 cursor-pointer bg-[#8FB59E] p-2 text-white font-semibold text-3xl"/>
                  <span className="mr-4">1</span>
                  <FaMinus className="rounded-full mr-6 cursor-pointer bg-[#8FB59E] p-2 text-white font-semibold text-3xl"/>
                </div>

                {/* Price + Trash icon aligned to top-right */}
                <div className="absolute top-2 right-2 inline-flex flex-col items-end">
                  <span className="text-lg font-semibold mb-1">$90</span>
                  <FaTrash className="text-red-400 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start border-b pb-6">
              <img src="/lotion3.jpg" alt="" className="w-34 h-34 rounded-lg object-cover mb-6" />
              <div className="flex-1 ml-4 relative">
                <h2 className="text-xl font-semibold mb-4">Velvetra</h2>
                <p className="text-sm mb-8">A lightweight, fast-absorbing lotion that hydrates, softens, and leaves your skin glowing all day.</p>

                <div className="mt-4 flex items-center ml-6">
                  <FaPlus className="rounded-full mr-6 cursor-pointer bg-[#8FB59E] p-2 text-white font-semibold text-3xl"/>
                  <span className="mr-4">1</span>
                  <FaMinus className="rounded-full mr-6 cursor-pointer bg-[#8FB59E] p-2 text-white font-semibold text-3xl"/>
                </div>

                {/* Price + Trash icon aligned to top-right */}
                <div className="absolute top-2 right-2 inline-flex flex-col items-end">
                  <span className="text-lg font-semibold mb-1">$90</span>
                  <FaTrash className="text-red-400 cursor-pointer" />
                </div>
              </div>
            </div>

            <button className="bg-[#8FB59E] w-48 rounded-lg cursor-pointer p-4">Clear cart</button>

          </div>
        </div>

        {/* Right - Order Summary */}
        <div className="w-1/3 h-[300px] bg-white shadow-2xl p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {/* Add subtotal, tax, total, checkout button here */}
          <div className="flex flex-col space-y-2">
            <div className="flex  justify-between w-[100%]">
                <span>SubTotal</span>
                <span>$490</span>
            </div>
            <div className="flex  justify-between w-[100%]">
                <span>Shipping</span>
                <span>$10</span>
            </div>
            <div className="flex  justify-between w-[100%]">
                <span>Total</span>
                <span>$10</span>
            </div>

            <button className="bg-[#8FB59E] p-5 w-80 rounded-lg cursor-pointer">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
