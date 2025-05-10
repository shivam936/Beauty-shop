import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    subTitle:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
},{timestamps: true}) 

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;