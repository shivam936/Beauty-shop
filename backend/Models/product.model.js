import mongoose from "mongoose"

const productSchema = new mongoose.Schema({

    img:{
    type: String,
    required:true,
    },

    title:{
    type:String,
    required:true
    },

    price:{
        type:String,
        required:true
    },
    rating:{
        type: {type:String}, 
    }
})