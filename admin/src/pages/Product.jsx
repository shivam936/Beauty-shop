import React from 'react'
import { LineChart } from '@mui/x-charts'
import { FaUpload } from 'react-icons/fa'

const Product = () => {
    return (
    <div className="p-2 w-[70vw]">
        <div className="flex items-center w-full justify-between mb-8">
                <h2 className="text-xl font-semibold">Product</h2>
                <button className="px-6 py-2 rounded-lg bg-black text-[#8FB59E]">Create</button>
        </div>
        <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center">
            <div>
                <LineChart
            xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
            series={[
            {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
            ]}
            height={250}
            width={500}
            margin={{left: 30, right: 30, top: 30, bottom: 30}}
            grid={{vertical: true, horizontal: true}}
        />
            </div>

            <div className="rounded-lg bg-white flex-1 h-[300px] shadow-2xl p-2">
                <div className="flex items-center space-x-2 p-2">
                <img src="https://img.freepik.com/free-photo/care-products-plants-arrangement_23-2149879994.jpg" alt="" className="w-20 h-20 object-cover rounded-full"  />
                <h2 className="font-semibold text-md">Premium facewash for your skin tone</h2>
                </div>
                
                <div className="space-y-1">
                        <div className="flex items-center justify-between">
                            <span> Id: </span>
                            <span>65394</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span> sales </span>
                            <span>653</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span> Instock </span>
                            <span>yes</span>
                        </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-36">
            <div className="flex flex-col space-y-6">
                <div className="flex flex-col">
                <span>Products:</span>
                <input type="text" className="outline-none mt-1 border-2 border-gray-400 w-90 h-10" placeholder="" />
                </div>

                <div className="flex flex-col">
                <span>Products description:</span>
                <input type="text" className="outline-none mt-1 border-2 border-gray-400 w-90 h-10" placeholder="" />
                </div>

                <div className="flex flex-col">
                <span>Products Original price:</span>
                <input type="text" className="outline-none mt-1 border-2 border-gray-400 w-90 h-10" placeholder="" />
                </div>

                <div className="flex flex-col">
                <span>Products Discounted price:</span>
                <input type="text" className="outline-none mt-1 border-2 border-gray-400 w-90 h-10" placeholder="" />
                </div>
            </div>
            <div className="flex flex-col space-y-4 mt-10 items-center">
                <div>
                    <img src="https://img.freepik.com/free-photo/care-products-plants-arrangement_23-2149879994.jpg" alt="" className="w-48 h-48 rounded-full" />
                </div>
                <div>
                    <FaUpload className="text-2xl text-green-600"/>
                </div>

                <button className="w-28 h-10 bg-[#61bf86] text-white cursor-pointer">
                    Update
                </button>
            </div>
        </div>

        </div>
    </div>
    )
}

export default Product