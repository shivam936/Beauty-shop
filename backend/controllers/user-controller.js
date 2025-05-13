import User from "../Models/user.model.js";
import asyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"


export const updateUser = asyncHandler(async(req , res) => {
    if(req.body.password)
    {
        const salt = await  bcrypt.genSalt(10);
        req.body.password = await  bcrypt.hash(req.body.password , salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        {
            new : true
        }
    )
    if(updatedUser)
    {
        res.status(200).json(updatedUser);
    }
    else{
        res.status(400);
        throw new Error("User did not get updated");
    }
})


export const deleteUser = asyncHandler(async(req , res) => {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if(deleteUser)
    {
        res.status(200).json("User got deleted");
    }
    else{
        res.status(400);
        throw new Error("User was not able to get deleted");
    }
})

export const getUser = asyncHandler(async(req , res) => {
    const getUser = await User.findById(req.params.id);
    if(getUser)
    {
        res.status(200).json(getUser);
    }
    else{
        res.status(400);
        throw new Error("Not able to fetch the user");
    }
})

export const getAllUsers = asyncHandler(async(req , res) => {
    const getAllUsers = await User.find();
    if(getAllUsers)
    {
        res.status(200).json(getAllUsers);
    }
    else{
        res.status(400);
        throw new Error("not Able to get the users");
    }
}) 
