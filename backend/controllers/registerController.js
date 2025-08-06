import newregister from '../models/register_model.js';
import bcrypt from 'bcryptjs';

// posting data
export const registernew = async(r,res)=>{

//console.log(r.body);
const { name, email, password } = r.body;


const hashpassword = await bcrypt.hash(password,8)

//console.log(hashpassword);

const regsiter_user = await newregister.create({
    name, email, password:hashpassword
})

res.status(201).json({message:"User Data Succussfully done"})

}


// Getting Data
export const getregisternew = async(req,res)=>{

try{

const userdata =await newregister.find({})

res.status(200).json(userdata);


}catch(error){
console.log(error);

}




}