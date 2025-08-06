import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Register from './Register';

function App () {

  //   const [formData, setFormdata] = useState({ title: "", location: "", target: "", weaponUsed: "" });
  //   const [missions, setMissions] = useState([{}]);

  //   // Fetch missions from the backend
  //   const fetchMissions = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5000/api/users/getuser");
  //       setMissions(res.data);
  //     } catch (err) {
  //       console.error("Error fetching missions:", err);
  //     }
  //   };

  //   // useEffect(() => {
  //   //   fetchMissions();
  //   // }, []);

  //   const onSuccess = () => {


  //     fetchMissions(); // Re-fetch missions after adding
  //   };

  //   const handlesubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //    const req =   await axios.post("http://localhost:5000/api/users", formData);
  //       setFormdata({ title: "", location: "", target: "", weaponUsed: "" });
  //       console.log(req.data);
  //       alert(req.data.message)
  //       onSuccess();
  //     } catch (err) {
  //       console.error("Error submitting mission:", err);
  //     }
  //   };

  //   const handlechange = (e) => {
  //     setFormdata({ ...formData, [e.target.name]: e.target.value });
  //   };

  const navicate = useNavigate();

  const movetonext = () => {
    navicate( '/register' );
  };

  return (
    <>



      <Routes>
        <Route path="/register" element={ <Register /> }></Route>
      </Routes>

      <div className='h-200 flex items-center justify-center'>

        <button onClick={ movetonext }
          className="  bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-md"
        >Register Data</button>
      </div>


















      {/* <h1 className='bg-blue-700 text-2xl text-white p-4 text-center'>This is Frontend</h1>
      <div>
        <form onSubmit={handlesubmit} className='space-y-4 bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-10'>
          {["title", "location", "target", "weaponUsed"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field}
              value={formData[field]}
              onChange={handlechange}
              className='w-full p-2 border rounded'
            />
          ))}
          <button type='submit' className='bg-black text-white rounded-sm p-4 px-4 hover:bg-gray-300'>Add mission</button>
        </form>

     
        <div className='max-w-md mx-auto mt-6 space-y-4'>
          {missions.map((mission) => (
            <div key={mission._id} className='border p-4 rounded shadow'>
              <h2 className='font-bold text-lg'>{mission.title}</h2>
              <p><strong>Location:</strong> {mission.location}</p>
              <p><strong>Target:</strong> {mission.target}</p>
              <p><strong>Weapon Used:</strong> {mission.weaponUsed}</p>
              <p><strong>Completed:</strong> {mission.completed ? "Yes" : "No"}</p>
            </div>
          ))}
        </div>
      </div> */}

    </>
  );
}

export default App;
