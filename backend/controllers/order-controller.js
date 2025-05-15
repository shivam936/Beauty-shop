import Order from "../Models/order.model.js"
import asyncHandler from "express-async-handler"

export const createOrder = asyncHandler(async(req , res) => {
    const newOrder = new Order(req.body);
    const savedOrder = await  newOrder.save();
        if(savedOrder)
        {
        res.status(201).json(savedOrder);
        }
        else{
        res.status(400);
        throw new Error("Not able to create the order");
        }
})

export const updateOrder = asyncHandler(async(req , res) => {
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        {
            $set : req.body
        },
        {new : true}
    )
    if(order)
    {
        res.status(201).json(order);
    }
    else{
        res.status(400)
        throw new Error("Not able to update the id")
    }
})

export  const deleteOrder = asyncHandler(async(req , res) => {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if(deletedOrder)
    {
        res.status(200).json(order);
    }
    else{
        res.status(400);
        throw new Error("Not able to delete the product");
    }
})

export const getOrderUser = asyncHandler(async(req , res) => {
    const getOrder = await Order.find({userId: req.params.id}).reverse()
    if(getOrder)
    {
        res.status(200).json(getOrder);
    }
    else{
        res.status(400);
        throw new Error("Not able to fetchOrders for this User "); 
    }
})

export const getAllOrders = asyncHandler(async(req , res) => {
    const getAllorder = await Order.find();
    if(getAllorder)
    {
        res.status(200).json(getAllorder);
    }
    else{
        res.status(400);
        throw new Error("Not able to get all products")
    }
})