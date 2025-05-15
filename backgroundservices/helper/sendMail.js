import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const createTransport = (config) => {
    const transport = nodemailer.createTransport(config);
    return transport;
}

let configurations = {
    service: "gmail",
    host: "smpt.gmail.com",
    port: 587,
    requireTLS: true,
    auth:{
    user: process.env.EMAIL,
    password: process.env.PASSWORD
    }
}

    const sendMail = async(MessageOptions) => {
    const transport = createTransport(configurations);
    await transport.verify();
    await transport.sendMail(MessageOptions, (error , info) => {
            if(error)
            {
                console.log(error);
            }
            else{
                console.log("Message sent successfully");
            }
    })
}
export default sendMail;

