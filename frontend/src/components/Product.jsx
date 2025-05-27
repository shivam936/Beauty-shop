import React from "react";
import StarRatings from "react-star-ratings";

const Product = ({img}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[500px]  m-[10px] cursor-pointer">
      <img
        src={img}
        alt="Product"
        className="bg-cover h-[400px] w-[300px] "
      />
      <h2 className="text-[15px] text-center w-[400px]">
        ROSEMERRY SERUM (with honey extracts){" "}
      </h2>
      <span className="text-[18px] font-semibold">$100</span>

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
    </div>
  );
};

export default Product;
