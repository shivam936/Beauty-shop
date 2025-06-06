import  { useState } from "react"; 
import { FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios"
import { userRequest } from "../requestUrl";

const NewProduct = () => {
  const [selectedImage , setSelectedImage] = useState(null)
  const [image , setImage] = useState('')
  const [selectedOptions, setSelectedOptions] = useState({
    categories : [],
    skinType: [],
    concern: []
  })



  const [input , setInput] = useState({})
  const [upload , setUpload] = useState('')

  const handleImage = (e) => {
    if(e.target.files && e.target.files.length > 0)
    {
      setSelectedImage(e.target.files[0])
    }
  }

  const handleOptions = (e) => {
    const {name , value} = e.target;
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: prev[name].includes(value) ? prev[name] : [...prev[name], value]
    }))
  }

  const handleRemoveOptions = (name, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [name] : prev[name].filter((options) => options !== value)
    }))
  }

  const handleInput = (e) => {
    setInput((prev) => {
      return {...prev , [e.target.name] : e.target.value}
  })
  }

  const handleUpload = async(e) => {
    e.preventDefault()
    setUpload('Uploading...')
    const data = new FormData()
    data.append("file", selectedImage);
    data.append("upload_preset", "upload");
    try{
      const res = await axios.post("https://api.cloudinary.com/v1_1/domzxxo2t/image/upload", data)
      const  {url} = res.data;
      setImage(url);
      
      setUpload('Uploading is 100%')
        await userRequest.post("/products/create", {img: url , ...input , ...selectedOptions})
    }
    catch(error) 
    {
      console.log(error);
      setUpload("Uploading failed");
    }
  }
  
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
              {!selectedImage ? (<div className="w-24 h-24 border-2 rounded-lg flex items-center justify-center cursor-pointer">
                <label htmlFor="file" > <FaPlus className="text-[20px] cursor-pointer" /></label>
              </div>) : (<img src={URL.createObjectURL(selectedImage)} alt="" className="w-24 h-24 object-cover rounded-lg"/>)}
              <input type="file" id="file" onChange={handleImage} className="hidden"/>
            </div>

            <span className="text-sm text-green-500">{upload}</span>

            {/* Product Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="productName">Product Name:</label>
            <input
                type="text"
                name="title"
                id=""
                placeholder="Product Name"
                onChange={handleInput}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Product Description */}
            <div className="flex flex-col gap-1">
              <label htmlFor="description">Product Description:</label>
              <textarea
                type="text"
                cols={15}
                rows={7}
                name="desc"
                onChange={handleInput}
                id=""
                placeholder="Product Description"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Prices */}
            <div className="flex flex-col gap-1">
              <label htmlFor="originalPrice">Original Price:</label>
             <input
                type="number"
                name="originalPrice"
                id=""
                onChange={handleInput}
                placeholder="$100"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="discountedPrice">Discounted Price:</label>
                  <input
                type="number"
                name="discountedPrice"
                id=""
                onChange={handleInput}
                placeholder="$80"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />

            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            <div className="flex flex-col gap-1">
              <label htmlFor="wholesalePrice">Wholesale Price:</label>
                  <input
                type="number"
                name="wholesalePrice"
                onChange={handleInput}
                id=""
                placeholder="$70"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />

            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="wholesaleQty">Wholesale Quantity:</label>
              <input
                type="number"
                name="wholesaleMinimumQuantity"
                onChange={handleInput}
                id=""
                placeholder="10"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />    
            </div>

            <div className="flex flex-col gap-1">

              <label htmlFor="brand">Brand:</label>

                <input
                type="text"
                name="brand"
                id=""
                onChange={handleInput}
                placeholder="Kylie"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />       
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="concern">Concern:</label>
              <select
              name="concern"
                id=""
                value="" 
                className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full" onChange={handleOptions}
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

            <div className="mt-5">
                {selectedOptions.concern.map((option) => (
                  <div key={option} className="flex items-center justify-between bg-white shadow-xl space-x-10 ">
                        <span className="font-medium text-md">{option}</span>
                        <FaTrash className="text-red-400 text-sm cursor-pointer" onClick={() => handleRemoveOptions("concern" , option)}/>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor=""> Skin type </label>
                <select name="skinType" id="" value=""  className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full" onChange={handleOptions}>
                <option>All</option>
                <option>Oily</option>
                <option>Dry</option>
                <option>Sensitive</option>
                <option>Normal</option>
                </select>
            </div>

            <div className="mt-5">
                {selectedOptions.skinType.map((option) => (
                  <div key={option} className="flex items-center justify-between bg-white shadow-xl space-x-10 ">
                        <span className="font-medium text-md">{option}</span>
                        <FaTrash className="text-red-400 text-sm cursor-pointer" onClick={() => handleRemoveOptions("skinType" , option)}/>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor=""> Products Types </label>
                <select name="categories" id="" value=""  className="border-2 border-gray-300 outline-none rounded-md px-3 py-2 w-full" onChange={handleOptions}>
                <option>Toners</option>
                <option>Serums</option>
                <option>Foundations</option>
                <option>Lotions</option>
                </select>
            </div>

              <div className="mt-5">
                {selectedOptions.categories.map((option) => (
                  <div key={option} className="flex items-center justify-between bg-white shadow-xl space-x-10 ">
                        <span className="font-medium text-md">{option}</span>
                        <FaTrash className="text-red-400 text-sm cursor-pointer" onClick={() => handleRemoveOptions("categories" , option)}/>
                    </div>
                ))}
            </div>

          </div>
        </form>

        {/* Submit Button */}
        <div className="mt-8 text-center md:text-right">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md w-full md:w-auto"
            onClick={handleUpload}
          >
            Submit Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
