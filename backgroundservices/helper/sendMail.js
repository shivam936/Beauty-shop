import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

function createTransporter(config){
    const transporter = nodemailer.createTransport(config);
    return transporter;
}

let configurations = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    requireTls: true,
    auth:{
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
    }
}

    const sendMail = async(MessageOptions) => {
    const transport = createTransporter(configurations);
    await transport.verify();

    await transport.sendMail(MessageOptions, (error , info) => {
            if(error)
            {
                console.log(error);
            }
            console.log(info.response);
    })
}
export default sendMail;

