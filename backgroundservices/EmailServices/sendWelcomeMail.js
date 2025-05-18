import User from "../Models/user.model.js"
import ejs from "ejs"
import dotenv from "dotenv"
import sendMail from "../helper/sendMail.js"

dotenv.config();


const sendWelcomeMail = async() => {
    const users = await User.find({status: 0});

    if(users.length > 0)
    {
    for(let user of users)
    {
        ejs.renderFile(
            "templates/welcome.ejs",
            {name: user.name}, 
            async(err , data) => {
            let messageOptions = {
                from: process.env.EMAIL,
                to: user.email,
                subject: "Welcome to blushify",
                html: data
            };

            try{
            await sendMail(messageOptions);
            await User.findByIdAndUpdate(user._id , { $set : {status: 1} });
            }
            catch(error)
            {
                console.log(error);
            }
        })
    }
}
}
export default sendWelcomeMail;