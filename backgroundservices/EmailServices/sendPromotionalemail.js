import ejs from "ejs"
import Product from "../Models/product.model.js"
import User from "../Models/user.model.js"
import dotenv from "dotenv"
import sendMail from "../helper/sendMail.js"

dotenv.config();

const sendPromotionalemail = async() => {
    const products = await Product.aggregate([{$sample: 5}]);
    const users = await User.find();
  
        for(let user of users)
        {
            ejs.renderFile("templates/promotion.ejs" , {products} , async(err, data) => {
                let messageOptions = {
                    from: process.env.EMAIL,
                    to: user.email,
                    subject: "Your weekly products",
                    html: data
                }
                try{
                    await sendMail(messageOptions);
                }
                catch(error)
                {
                    console.log(error);
                }
            })
        }
    }

export default sendPromotionalemail;