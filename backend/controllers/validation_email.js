import mongoose from "mongoose";
import newregister from "../models/register_model.js";

export const validation_email = async(req,res)=>{



//console.log(req.body);

const {name,email,password} = req.body;
try{

    const checkuser = await newregister.findOne({email});

     //console.log(checkuser);
   //exit();
   if(checkuser ){
    return res.status(401).json({message:"This email already exist"})
   }
    

   const newadd = {name,email,password}
    
    const adduser = await newregister.create(newadd);
    
   return res.status(201).json({message:"Succfully register",adduser});

   

    //if(checkuser)

}
catch(error){
    console.log("error",error);
    
}


    

}






