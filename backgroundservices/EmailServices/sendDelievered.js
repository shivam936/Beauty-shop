import ejs from "ejs"
import Order from "../Models/order.model.js"
import dotenv from "dotenv"
import sendMail from "../helper/sendMail.js"

dotenv.config()

const sendDelievered = async() => {
    const orders = await Order.find({status: 2});
    if(orders.length > 0)
    {
        for(let order of orders)
        {
            ejs.renderFile("templates/delivered.ejs" , {name: order.name , products: order.products}, async(err, data) => {
                let messageOption = {
                    from : process.env.EMAIL,
                    to : order.email,
                    subject: "Your order is delievered",
                    html:data
                }
                try{
                    await sendMail(messageOption)
                    await Order.findByIdAndUpdate(order._id , {$set : {status:3}});
                }
                catch(error)
                {
                    console.log(error);
                }
            })
        }
    }
}
export default sendDelievered;