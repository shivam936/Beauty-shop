import mongoose from "mongoose"
import User from "./user.model"

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:User
    },
    products:{
        type:Array,
        required:true
    },
    total:{
        type:Number,
        required:true,
    },

    status:{
        type: Number,
        default:0
    },

    email:{
    type:String
    },

}, {timestamps: true})

const Order = mongoose.Schema("Order", orderSchema);
export default Order;