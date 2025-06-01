import Products from "../components/Products"

const Productlist = () => {
  return (
    <div className="min-h-screen p-8  bg-gray-200">
        <div className="m-6 flex justify-between">
            <div className="space-x-4 flex flex-col sm:flex-row sm:items-center">
            <span className="font-semibold">Filter Products</span>
            <select name="concern" id="" className="p-2 border-gray bg-white rounded-lg sm:mb-0 sm: mr-4">
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
    
            <select name="brand" id="" className="p-2 bg-white rounded-lg">
            <option>Garnier</option>
            <option>Kylie</option>
            <option>Kiss Beauty</option>
            <option>Dr Rashel</option>
            <option>Luron</option>
            <option>Nivea</option>
            <option>Heaven Dove</option>
            <option>Disaar</option>
            <option>Johnsons Baby</option>
            <option>Rexona</option>
            <option>Kylie</option>

            </select>
            </div>
                
            <div className="flex flex-col sm:flex-row sm:items-center">
                <span>Sort Products</span>
                <select name="Brand" id="" className="ml-2 p-2  bg-white rounded-lg">
                <option value="newest">Newest</option>
                <option value="asc">Price (asc)</option>
                <option value="desc">Price (desc)</option>
                </select>
            </div>
        </div>  
        <Products/>
    </div>
    )
}

export default Productlist