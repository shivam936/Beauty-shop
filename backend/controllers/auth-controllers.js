    import User from "../Models/user.model.js"
    import asyncHandler from "express-async-handler"
import { generateToken } from "../utils/utils.js";

    export const register = asyncHandler(async(req , res) => {
        const {name , email , password} = req.body;

        const userExist = await  User.findOne({email});

        if(userExist)
        {
            res.status(400);
            throw new Error("User already exist")
        }
        const user  =  await User.create({
            name,
            email, 
            password
        })
        if(user)
        {
            generateToken(user._id , res);
            return res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
            })
        }

        else{
            res.status(400);
            throw new Error("Invalid user data");
        }
    })

    export const login = asyncHandler(async(req , res) => {
        const {email , password} = req.body;
        
        const userFind = await  User.findOne({email});

        if(userFind && await(userFind.matchPassword(password))) 
        {
            generateToken(userFind._id , res);
            res.status(200).json({
                _id: userFind._id,
                name: userFind.name,
                email: userFind.email,
            })
        }
        else{
            res.status(401);                    
            throw new Error("Invalid email or password data");
        }
    })

    export const logout = asyncHandler(async(req ,res) => {
        res.cookie("jwt" , "",  {
            expires: new Date(0),
            httpOnly:true
        })
         res.status(200).json({message: "logout successfully"});
    })

