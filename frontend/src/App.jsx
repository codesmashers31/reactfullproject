import { useEffect, useState } from "react";
import axios from 'axios';
const App = ()=>{

  const [name,setName] = useState("");
  const [avatar,setAvatar] = useState(null);
  const[user,setUser] = useState([])
   

  const handleclick = async()=>{

    const fromdata = new FormData();

    fromdata.append("name",name);
    fromdata.append("avatar",avatar);

    const res = await axios.post("http://localhost:5000/api/auth/create",fromdata,{headers:{"Content-Type":"multipart/form-data"}})
    
   alert(res.data.message);
  //  setName("")

  //  setAvatar("")

  }

const getProfile = async () =>{
    const res = await axios.get("http://localhost:5000/api/auth/getprofile")
   setUser( res.data.UserProfile)
  }
useEffect(()=>{
  getProfile();
},[])

return (
<>
  <div>
<h2>user Form</h2>
     <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter the name" />
     <br /><br />
     <input type="file"  onChange={(e)=>{setAvatar(e.target.files[0])}} />
     <br /><br />
     <button onClick={handleclick}>Create User</button>
</div>
<div className="flex">
  {user.map((i)=>(
    <div  key={i._id}>
      <div className=" p-4 m-1">
        <h1>{i.name}</h1>
        <img className="rounded-2xl w-50 h-50" src={`http://localhost:5000/${i.avatar}`} alt={i.avatar} />
      </div>
    </div>
  ))}
</div>
</>
)




}

export default App;