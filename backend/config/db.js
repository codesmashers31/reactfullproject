import mongoose from "mongoose";


const connectDb=async ()=>{

try{


mongoose.connect(process.env.MONGO_URI)

console.log('Connect suffculy')

}catch{
    

console.log('Error');



}



}

export default connectDb;