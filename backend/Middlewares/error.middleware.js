import dotenv from "dotenv"
dotenv.config();

    const notFound = async(req , res , next) => {
    const error = new Error("Not found", req.OriginalUrl);
    res.status(404);
    next(error);
}

    const errorHandler = (err , req , res , next) => {

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    
    res.status(statusCode).json({ 
        message: err.message,
        stack: process.env.NODE === "production" ? null : err.stack
    })
    next();
}

export  {notFound , errorHandler};