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
    },

    img:{
        type:String,
        required:true
    },
    
    video:{
    type: String
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
    },
    
    discountedPrice:{
        type:Number,
    },

    inStock:{
        type: Boolean,
        default:true
    },

    rating:[
        {
            star: {type : String},
            name: {type : String},
            comment: {type: String},
            postedBy: {type: String}
        }
    ]
}, {timestamps:true})

productSchema.index({"$**" : "text"})

const Product = mongoose.model("Product", productSchema);
export default Product;