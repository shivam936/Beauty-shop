import express from "express"
import dotenv from "dotenv"
import { dbConnection } from "./utils/db.js";
import cron from "node-cron";

const app = express();
dotenv.config();

app.use(express.json());
const PORT = process.env.PORT

//Schedule our tasks
const services = () => {
    cron.schedule('* * * * * * ', () => {
        
    })
}


app.listen(PORT , () => {
    console.log(`Server is running at the ${PORT}`)
    dbConnection()
})