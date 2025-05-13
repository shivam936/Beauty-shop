import asyncHandler from "express-async-handler"
import Banner from "../Models/banner.model.js"

export const createBanner = asyncHandler(async(req , res) => {

    const newBanner = new  Banner(req.body);
    const savedBanner = await newBanner.save();

    if(savedBanner)
    {
        res.status(201).json(savedBanner);
    }
    else{
        res.status(400);
        throw new Error("Not able to save data in the database");
    }
})

export const deleteBanner = asyncHandler(async(req , res) => {
    const banner = await Banner.findByIdAndDelete(req.params.id);
    if(banner)
    {
        res.status(200).json("Items got deleted");
    }
    else{
        res.status(400);
        throw new Error("Banneer is not deleted");
    }
})

export const getRandomBanner = asyncHandler(async(req , res) => {
    const banners = await Banner.find();
    if(!banners)
    {
        res.status(400);
        throw new Error("Banners were not fetched somthing went wrong");
    }
    else{
        const randomIndex =  Math.floor(Math.random() * banners.length());
        const randomBanner = banners[randomIndex];
        res.status(200).json(randomBanner);
    }
}) 

export const getAllBanners = asyncHandler(async(req , res) => {
    const banners = await Banner.find();
    if(banners)
    {
        res.status(200).json(banners);
    }
    else{
        res.status(400);
        throw new Error("Not able to get banners");
    }
})