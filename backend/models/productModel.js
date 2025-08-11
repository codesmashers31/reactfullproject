import mongoose from 'mongoose';


const productScheme = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
})
const ProductModle = mongoose.model('productModel',productScheme)


export default ProductModle;