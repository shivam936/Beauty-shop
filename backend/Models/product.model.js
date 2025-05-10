import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    title:{
    type:String,
    required:true
    },

    desc:{
        type:String,
        required:true
    },

    whatIntheBox:{
        type:String,
        required:true
    },

    img:{
        type:String,
        required:true
    },
   
    wholsesalePrice:{
        type:Number
    },

    wholesaleMinimumquantity:{
        type:Number
    },

    categories:{
        type:Array,
    },

    concern:{
        type:Array
    },

    skinType:{
        type:Array
    },

    brand:{
        type: String
    },

    originalPrice:{
        type:Number,
        required:true
    },
    
    discountedPrice:{
        type:Number,
    },

    inStock:{
        type:boolean,
        default:true
    },

    rating:[
        {
            star: Number,
            name: {type : String},
            comment: {type: String},
            postedBy: {type: String}
        }
    ]
}, {timestamps:true})

const Product = mongoose.model("Product", productSchema);
export default Product;