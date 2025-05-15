import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const dbConnection = async() => {
    const DB = process.env.DB_URI;
    try{
        await mongoose.connect(DB).then(() => {console.log("Database connected successfully")})
        .catch((error) => {console.log("Error while connecting")})
    }
    catch{
        console.log("Error while connecting")
        setTimeout(dbConnection, 5000);
    }
}