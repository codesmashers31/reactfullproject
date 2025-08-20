import { Model } from "mongoose";
import User from "../models/userModel.js"

export const filecontroller = async(req,res)=>{
    console.log(req)
    try{

    const {name} = req.body;
    const avatar = req.file ? req.file.path.replace(/\\/g, "/") : null;
    const user = new User({name,avatar});
    await user.save();


    res.status(200).json({message:"Succfully done"})

    }catch(error){

        console.log("Error",error);
         res.status(400).json({message:"Error"})
        

    }
    // console.log(req);
    




}


export const getProfile = async(req,res)=>{
    try{
        const getUser = await User.find()
        res.status(201).json({UserProfile:getUser})
    }catch(err){
         console.log(err)
    }
    
}