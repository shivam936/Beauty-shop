import dotenv from "dotenv";
import Order from "../Models/order.model.js"
import ejs from "ejs";
import sendMail from "../helper/sendMail.js";
dotenv.config();

const sendPendingOrder = async() => {
    const orders = await Order.find({status: 0});
    if(orders.length > 0)
    {
        for(let order of orders)
        {
            ejs.renderFile(
                "templates/pending-order.ejs" , 
                {
                name: order.name , 
                products: order.products
            } , 
                async(err , data) => {
                let messageOptions = {
                from: process.env.EMAIL,
                to: order.email,
                subject: "Your order has been placed",
                html: data
            }
            try{
                await sendMail(messageOptions);
                await Order.findByIdAndUpdate(order._id , {$set: {status : 1}});
            }
            catch(error)
            {
                console.log(error);
            }
            }
        )
    }
}
}
export default sendPendingOrder;
