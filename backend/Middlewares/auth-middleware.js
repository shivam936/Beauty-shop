import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import asyncHandler from "express-async-handler"
import User from "../Models/user.model.js";

dotenv.config();

export const protectRoute = asyncHandler(async(req , res, next) => {
        let token;
        token = req.cookies.jwt;
        if(token)
        {
            try{
                const decodedToken = jwt.verify(token , process.env.JWT_SECRET);
                req.user = await User.findById(decodedToken.userId).select("-password");
                next();
            }
            catch(error)
            {
                res.status(401);
                throw new Error("Not authorized token is not provided")
            }
        }
        else{
            res.status(401)
            throw new Error("Not authorized Token is not provided");
        }
})
