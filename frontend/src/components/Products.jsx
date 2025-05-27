import Product from "./Product.jsx"

const Products = () => {
  return (
    <div className="flex flex-wrap mx-[20px]">
        <Product img="/serum1.jpg"/>
        <Product img="/lotion2.jpg"/>
        <Product img="/lotion3.jpg"/>
        <Product img="/foundation.jpg"/>
    </div>
  )
}

export default Products