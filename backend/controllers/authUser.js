import Mission from "../models/missionModle.js";

export const addMission = async (req,res)=>{

const {id_new,title,location,target,completed,weaponUsed} = req.body;

try{

  const newmission = new Mission ({
  id_new,title,location,target,completed,weaponUsed

});


const savedmission = await newmission.save();

res.status(201).json({message:"Mission added succfully",mission:savedmission})


}catch(err){

  console.log('errror');
  

}




}

