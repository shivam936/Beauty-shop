import asyncHandler from "express-async-handler"
import Product from "../Models/product.model.js"

export const CreateProduct =  asyncHandler(async(req ,res) => {
    const newProducts = new Product(req.body);
    const product = await newProducts.save();
    if(product)
    {
        res.status(201).json(product);
    }
    else{
        res.status(400);
        throw new Error("Invalid Product");
    }
})

export const UpdateProduct = asyncHandler(async(req ,res) => {
    const products = await Product.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {new: true}
    ) 
    if(!products)
    {
        res.status(400)
        throw new Error("Product has not been updated"); 
    }
    else{
        res.status(201).json(products);
    }
})

export const DeleteProduct = asyncHandler(async(req , res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product)
    {
        res.status(400);
        throw new Error("Not able to delete the product");
    }
    else{
        res.status(201).json("Product deleted successfully")
    }
})

export const getProduct = asyncHandler(async(req , res) => {
  const  product = await Product.findById(req.params.id);
    if(product)
    {
        res.status(200).json(product);
    }
    else{
        res.status(400)
        throw new Error("Not able to get Products");
    }
})

export const getAllProducts = asyncHandler(async(req , res) => {
    const qNew = req.query.new;
    const qSearch = req.query.search;
    const qcategory = req.query.category;
    let products;

    if(qNew)
    {
        products = await Product.find().sort({createdAt : -1})
    }
    if(qSearch)
    {
        products = await Product.find(
            {
                $text : {
                $search: qSearch,
                $caseSensitive: false,
                $discriticSensitive:false
            }
            }
        )
    }

    if(qcategory)
    {
        products = await Product.find(
            {
                $in: [{category: {qcategory}}]
            }
        )
    }
    else{
        products = await Product.find().sort({createdAt : -1});
    }
})


export const ratingProduct = asyncHandler(async(req , res) => {
        const {star , name , comment , postedBy} = req.body;
        if(star && name && comment && postedBy) {
            const postedBy = await Product.findByIdAndUpdate(
                req.params.id,
                {
                    $push: {rating: {star , name , comment, postedBy}},
                },

                {
                    new: true
                }
            );
            res.status(201).json({message: "Rated susccesfully"})
        }
        else{
            res.status(400);
            throw new Error("Product was not rated succesfully");
        }
})