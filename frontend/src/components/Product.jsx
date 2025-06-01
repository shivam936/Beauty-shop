import StarRatings from "react-star-ratings";

const Product = ({ img }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex justify-center">
      <div className="flex flex-col items-center justify-between h-[480px] w-[250px] bg-white rounded shadow-md p-4 cursor-pointer">
        <img
          src={img}
          alt="Product"
          className="h-[300px] w-full object-cover rounded"
        />
        <h2 className="text-sm text-center mt-2 font-medium">
          ROSEMERRY SERUM (with honey extracts)
        </h2>
        <span className="text-lg font-semibold mt-1">$100</span>
        <div className="flex items-center mt-1">
          <StarRatings
            rating={2}
            starRatedColor="yellow"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="1px"
          />
          <span className="text-sm ml-1">(2)</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
