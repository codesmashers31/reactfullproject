import axios from "axios";

import { useState, useEffect } from "react";

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: ""

  })

  const [edit,setedit] = useState(null);


  const [getdata, setGetdata] = useState([]);

  const handleRegister = (e) => {
    const { name, value } = e.target
    setRegister({ ...register, [name]: value })
  }


  const edithandler = async (id)=>{

    //  console.log(id);

    try{

      const res = await axios.get(`http://localhost:5000/api/users/registerdata/${id}`);

      console.log(res.data);

      setRegister(res.data);
       
       
      setedit(res.data._id)
      
    


    }catch{

    }
     
    


}

  const handlesubmit = async (e) => {
    e.preventDefault()


    const { name, email, password } = register;

    
    
    
    if (edit!==null) {
      

      const res = await axios.put(`http://localhost:5000/api/users/updatedata/${edit}`, register);
       
      alert(res.data.message);
      setedit(null)
      getuserdata();
      setRegister({
    name: "",
    email: "",
    password: ""

  })
    }

    else if (edit==null) {
      

      const res = await axios.post("http://localhost:5000/api/users/register", register);

      alert(res.data.message);
         getuserdata();
         setRegister({
    name: "",
    email: "",
    password: ""

  })
    } else {
      alert("fill all details")
    }

  }

  console.log(edit);

  const getuserdata = async () => {

    try {

      const res = await axios.get("http://localhost:5000/api/users/registerdata");
      //console.log('New',res);

      setGetdata(res.data);

    } catch (error) {
      console.log(error);

    }


  }
  useEffect(() => {


    getuserdata();

  }, [register])






  return (
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
        <button type='submit' className='bg-black text-white rounded-sm p-4 px-4 hover:bg-gray-300'>{edit!==null?"Update":"submit"}</button>
      </form>




      <div className="text-center">

        <table className="border-2">
          <thead className="border-2">
            <tr>

              <th>S.no</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody >
            {getdata.map((getdatas, i) => (
              <tr key={i + 1} className="border-2">
                <td className="border-2">{getdatas._id}</td>
                <td className="border-2">{getdatas.name}</td>
                <td className="border-2">{getdatas.email}</td>
                <td className="border-2"><button className="bg-blue-500 p-2 rounded hover:bg-amber-500" onClick={()=>{edithandler(getdatas._id)}}>Edit</button></td>
                <td className="border-2"><button className="bg-red-500 p-2 rounded hover:bg-white">delete</button></td>
              </tr>

            ))}
          </tbody>


        </table>
      </div>







    </>
  );



}

export default Register;