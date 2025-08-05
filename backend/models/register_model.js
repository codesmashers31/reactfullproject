import mongoose from "mongoose";


const register_schema = new mongoose.Schema({
    
    name:String,
    email:String,
    password:String
    
});


const newregister = mongoose.model("registerscheme",register_schema);

export default newregister;