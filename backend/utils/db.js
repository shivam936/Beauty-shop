import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
export const dbConnection = async() => {
    const DB = process.env.DB_URI;
    try {
        await mongoose.connect(DB)
        .then(() => {
            console.log("Database connected");
        })
        .catch((error) => console.log(error.message))
    }
    catch(error)
    {
    console.log("Error in connecting to the database" , error.message);
    setTimeout(dbConnection , 5000);
    }
}
