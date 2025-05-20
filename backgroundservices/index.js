import express from "express"
import dotenv from "dotenv"
import { dbConnection } from "./utils/db.js";
import cron from "node-cron";
import sendWelcomeMail  from "./EmailServices/sendWelcomeMail.js";
import sendPendingOrder from "./EmailServices/sendPendingOrder.js";
import sendDelievered from "./EmailServices/sendDelievered.js";
import sendPromotionalemail from "./EmailServices/sendPromotionalemail.js";


const app = express();
dotenv.config();

app.use(express.json());
const PORT = process.env.PORT;

//Schedule our tasks
const services = () => {
    cron.schedule('* * * * * *', () => {
        sendWelcomeMail();
        sendPendingOrder();
        sendDelievered();
    })
}

const promotion = () => {
    cron.schedule('30 5 * * 5', () => {
        sendPromotionalemail();
    })
}

services();
promotion();

app.listen(PORT , () => {
    console.log(`BackgroundServices is running at  the ${PORT}`)
    dbConnection();
})