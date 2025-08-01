import Mission from "../models/missionModle.js";

export const addMission = async (req,res)=>{

const new_id_gent = Math.floor(1000+Math.random()*100);



const {title,location,target,completed,weaponUsed} = req.body;

try{

  const newmission = new Mission ({
  id_new:new_id_gent,title,location,target,completed,weaponUsed

});


const savedmission = await newmission.save();

res.status(201).json({message:"Mission added succfully"})


}catch(err){

  console.log('errror');
  

}




}



export const getMissions = async (req, res) => {
  try {
    const missions = await Mission.find();
    res.status(200).json(missions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch missions" });
  }
};
