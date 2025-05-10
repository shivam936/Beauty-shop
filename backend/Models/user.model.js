import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true
    },
    phone:{
        type: Number,
        require: true
    }, 
    status:{
        type:Number,
        default:0
    }
}, {timetamps: true})

const User = mongoose.model("User", userSchema);
export default User;
