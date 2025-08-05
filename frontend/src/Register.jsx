import axios from "axios";

import { useState,useEffect } from "react";

const Register = ()=>{
const [register,setRegister]=useState({
    name:"",
    email:"",
    password:""

})


const [getdata,setGetdata]=useState([]);

const handleRegister =(e)=>{
 const{name,value}=e.target
 setRegister({...register,[name]:value})
}

const handlesubmit = async (e)=>{
  e.preventDefault()


const{name,email,password}= register;


if(name&&email&& password !== ""){
    
const res =  await axios.post("http://localhost:5000/api/users/register",register);

alert(res.data.message);
}else{
    alert("fill all details")
}


useEffect(()=>{

const getuserdata = async ()=>{

try{

    const res = await axios.get("http://localhost:5000/api/users/registerdata");
    console.log('New',res);
    
    setGetdata(res.data);

}catch(error){
console.log(error);

}


} 
getuserdata()

})




}

return(
    <>
    
   
   
                <form onSubmit={handlesubmit} className='space-y-4 bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-10'>
          {["name", "email", "password"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field}
              value={register[field]}
              onChange={handleRegister}
              className='w-full p-2 border rounded'
            />
          ))}
          <button type='submit' className='bg-black text-white rounded-sm p-4 px-4 hover:bg-gray-300'>submit</button>
        </form>
   
    
    </>
);



}

export default Register;